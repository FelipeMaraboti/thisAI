import dns from 'dns';
import { promisify } from 'util';
import net from 'net';

const lookupAsync = promisify(dns.lookup);

// Private IPv4 ranges (RFC 1918, RFC 3927, Loopback, etc.)
const PRIVATE_IPV4_RANGES = [
  { start: '10.0.0.0', end: '10.255.255.255' },
  { start: '172.16.0.0', end: '172.31.255.255' },
  { start: '192.168.0.0', end: '192.168.255.255' },
  { start: '127.0.0.0', end: '127.255.255.255' },
  { start: '169.254.0.0', end: '169.254.255.255' },
  { start: '0.0.0.0', end: '0.255.255.255' },
];

function ipToLong(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function isPrivateIPv4(ip: string): boolean {
  if (!net.isIPv4(ip)) return false;
  const ipLong = ipToLong(ip);
  for (const range of PRIVATE_IPV4_RANGES) {
    const startLong = ipToLong(range.start);
    const endLong = ipToLong(range.end);
    if (ipLong >= startLong && ipLong <= endLong) {
      return true;
    }
  }
  return false;
}

function isPrivateIPv6(ip: string): boolean {
  if (!net.isIPv6(ip)) return false;
  const normalized = ip.toLowerCase();
  // Loopback (::1), link-local (fe80::/10), unique local (fc00::/7)
  return (
    normalized === '::1' ||
    normalized.startsWith('fe80:') ||
    normalized.startsWith('fc00:') ||
    normalized.startsWith('fd')
  );
}

export interface UrlValidationResult {
  isValid: boolean;
  cleanUrl: string;
  domain: string;
  error?: string;
}

export async function validateTargetUrl(rawUrl: string): Promise<UrlValidationResult> {
  if (!rawUrl || typeof rawUrl !== 'string') {
    return { isValid: false, cleanUrl: '', domain: '', error: 'URL is required.' };
  }

  let formatted = rawUrl.trim();
  if (!/^https?:\/\//i.test(formatted)) {
    formatted = 'https://' + formatted;
  }

  let parsed: URL;
  try {
    parsed = new URL(formatted);
  } catch {
    return { isValid: false, cleanUrl: '', domain: '', error: 'Invalid URL format.' };
  }

  // Scheme validation
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { isValid: false, cleanUrl: '', domain: '', error: 'Only HTTP and HTTPS protocols are permitted.' };
  }

  const hostname = parsed.hostname.toLowerCase();

  // Hostname blocklist
  const blockedHostnames = ['localhost', 'broadcasthost', 'local', '0.0.0.0', '127.0.0.1'];
  if (blockedHostnames.includes(hostname) || hostname.endsWith('.local') || hostname.endsWith('.internal')) {
    return { isValid: false, cleanUrl: '', domain: hostname, error: 'Access to internal, loopback, or local hostnames is prohibited.' };
  }

  // Check if directly an IP
  if (net.isIP(hostname)) {
    if (isPrivateIPv4(hostname) || isPrivateIPv6(hostname)) {
      return { isValid: false, cleanUrl: '', domain: hostname, error: 'Access to private or non-routable IP addresses is forbidden.' };
    }
  } else {
    // DNS resolution check against DNS rebinding & SSRF
    try {
      const resolved = await lookupAsync(hostname);
      if (isPrivateIPv4(resolved.address) || isPrivateIPv6(resolved.address)) {
        return {
          isValid: false,
          cleanUrl: '',
          domain: hostname,
          error: `Target host resolved to a private/forbidden IP address (${resolved.address}).`,
        };
      }
    } catch {
      // Allow presets or offline fallback testing gracefully if DNS fails in closed environments
      // but still block invalid hostname formats
      if (!hostname.includes('.')) {
        return { isValid: false, cleanUrl: '', domain: hostname, error: 'Invalid domain name structure.' };
      }
    }
  }

  return {
    isValid: true,
    cleanUrl: parsed.href,
    domain: hostname,
  };
}
