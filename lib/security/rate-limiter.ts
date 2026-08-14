import { NextRequest } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number; // Unix timestamp in ms
}

// In-memory sliding window store
const ipRateLimitStore = new Map<string, RateLimitRecord>();

// Configurable Rate Limit parameters
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes window
const MAX_REQUESTS_PER_WINDOW = 10;          // Max 10 investigations per 15 min per IP

export interface RateLimitResult {
  isAllowed: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
  clientIp: string;
}

/**
 * Extracts client IP from standard proxy & CDN headers
 */
export function getClientIp(req: NextRequest): string {
  // Check Cloudflare
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();

  // Check X-Forwarded-For (first IP in chain)
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  // Check X-Real-IP
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  // Fallback
  return '127.0.0.1';
}

/**
 * Checks and records rate limit for a client IP
 */
export function checkRateLimit(req: NextRequest): RateLimitResult {
  const clientIp = getClientIp(req);
  const now = Date.now();

  // Clean up expired entries occasionally to prevent memory growth
  if (ipRateLimitStore.size > 2000) {
    for (const [ip, record] of ipRateLimitStore.entries()) {
      if (now > record.resetTime) {
        ipRateLimitStore.delete(ip);
      }
    }
  }

  let record = ipRateLimitStore.get(clientIp);

  if (!record || now > record.resetTime) {
    // New window
    record = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
    ipRateLimitStore.set(clientIp, record);

    return {
      isAllowed: true,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000),
      clientIp,
    };
  }

  // Existing window
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const resetSeconds = Math.ceil((record.resetTime - now) / 1000);
    return {
      isAllowed: false,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: 0,
      resetSeconds: Math.max(1, resetSeconds),
      clientIp,
    };
  }

  // Increment within window
  record.count += 1;
  const remaining = Math.max(0, MAX_REQUESTS_PER_WINDOW - record.count);
  const resetSeconds = Math.ceil((record.resetTime - now) / 1000);

  return {
    isAllowed: true,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining,
    resetSeconds,
    clientIp,
  };
}
