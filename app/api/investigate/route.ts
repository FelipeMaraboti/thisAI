import { NextRequest, NextResponse } from 'next/server';
import { validateTargetUrl } from '@/lib/security/ssrf';
import { analyzeWebsiteForensics } from '@/lib/forensics/analyzer';
import { registerInvestigation } from '@/lib/forensics/recent-scans';
import { checkRateLimit } from '@/lib/security/rate-limiter';

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check (Anti-DDoS / API Exhaustion)
    const rateLimit = checkRateLimit(req);
    if (!rateLimit.isAllowed) {
      return NextResponse.json(
        {
          error: `Limite de requisições excedido para seu IP (${rateLimit.clientIp}). Por favor, aguarde ${Math.ceil(rateLimit.resetSeconds / 60)} minuto(s) antes de realizar uma nova perícia.`,
          retryAfter: rateLimit.resetSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': `${rateLimit.resetSeconds}`,
            'X-RateLimit-Limit': `${rateLimit.limit}`,
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': `${rateLimit.resetSeconds}`,
          },
        }
      );
    }

    let url = '';

    try {
      const body = await req.json();
      url = body?.url || '';
    } catch {
      const text = await req.text();
      try {
        const parsed = JSON.parse(text);
        url = parsed?.url || '';
      } catch {
        url = text;
      }
    }

    if (!url || typeof url !== 'string' || !url.trim()) {
      return NextResponse.json(
        { error: 'A URL do site alvo é obrigatória para a perícia.' },
        { status: 400 }
      );
    }

    // 2. SSRF & Security validation
    const validation = await validateTargetUrl(url.trim());
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || 'A URL informada não passou na triagem de segurança forense.' },
        { status: 422 }
      );
    }

    // 3. Analyze target
    const result = await analyzeWebsiteForensics(validation.cleanUrl, validation.domain);

    // 4. Register in the dynamic investigations store & FIFO queue
    registerInvestigation(result);

    return NextResponse.json(result, {
      status: 200,
      headers: {
        'X-RateLimit-Limit': `${rateLimit.limit}`,
        'X-RateLimit-Remaining': `${rateLimit.remaining}`,
        'X-RateLimit-Reset': `${rateLimit.resetSeconds}`,
      },
    });
  } catch (err: any) {
    console.error('Forensic analysis error:', err);
    return NextResponse.json(
      { error: 'Erro interno durante a orquestração da varredura forense.' },
      { status: 500 }
    );
  }
}
