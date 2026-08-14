import { NextResponse } from 'next/server';
import { getRecentScans, getLatestInvestigations } from '@/lib/forensics/recent-scans';

export const dynamic = 'force-dynamic';

export async function GET() {
  const scans = getRecentScans();
  const investigations = getLatestInvestigations();
  return NextResponse.json({ scans, investigations }, { status: 200 });
}
