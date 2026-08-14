import { NextRequest, NextResponse } from 'next/server';
import { validateTargetUrl } from '@/lib/security/ssrf';
import { analyzeWebsiteForensics } from '@/lib/forensics/analyzer';
import { registerInvestigation } from '@/lib/forensics/recent-scans';

export async function POST(req: NextRequest) {
  try {
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
        { error: 'Target URL is required for forensic analysis.' },
        { status: 400 }
      );
    }

    // SSRF & Security validation
    const validation = await validateTargetUrl(url.trim());
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || 'The requested URL failed security screening.' },
        { status: 422 }
      );
    }

    // Analyze target
    const result = await analyzeWebsiteForensics(validation.cleanUrl, validation.domain);

    // Register in the secure dynamic investigations store & FIFO queue
    registerInvestigation(result);

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error('Forensic analysis error:', err);
    return NextResponse.json(
      { error: 'Internal error during forensic scanning orchestration.' },
      { status: 500 }
    );
  }
}
