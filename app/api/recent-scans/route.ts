import { NextResponse } from 'next/server';
import { getRecentScans } from '@/lib/forensics/recent-scans';

export const dynamic = 'force-dynamic';

export async function GET() {
  const scans = getRecentScans();
  return NextResponse.json({ scans }, { status: 200 });
}
