import { InvestigationResult } from './types';
import { FEATURED_INVESTIGATIONS } from './presets';

export interface RecentScanItem {
  id: string;
  domain: string;
  url: string;
  score: number;
  verdict: string;
  timestamp: string;
  timeAgo: string;
  isHighSignal: boolean;
}

// In-memory FIFO queue for dynamic investigation results
const MAX_INVESTIGATIONS_STORE = 10;
const MAX_RECENT_SCANS = 4;

// Store full dynamic investigation results (seeded with initial featured ones)
let dynamicInvestigations: InvestigationResult[] = FEATURED_INVESTIGATIONS.map(
  (preset) => preset.result
);

// Sanitizer for domain
export function sanitizeDomain(inputDomain: string): string {
  return inputDomain
    .replace(/[^a-zA-Z0-9.-]/g, '')
    .toLowerCase()
    .slice(0, 60);
}

export function getRecentScans(): RecentScanItem[] {
  return dynamicInvestigations.slice(0, MAX_RECENT_SCANS).map((inv) => ({
    id: inv.id,
    domain: inv.domain,
    url: inv.targetUrl,
    score: inv.overallScore,
    verdict: inv.verdict,
    timestamp: inv.timestampUtc,
    timeAgo: 'recém-analisado',
    isHighSignal: inv.overallScore >= 70,
  }));
}

export function getLatestInvestigations(): InvestigationResult[] {
  return [...dynamicInvestigations];
}

export function registerInvestigation(result: InvestigationResult): void {
  const cleanDom = sanitizeDomain(result.domain);
  const updatedResult: InvestigationResult = {
    ...result,
    domain: cleanDom,
  };

  // Prepend to dynamic list, deduplicate by domain, and cap at max store
  dynamicInvestigations = [
    updatedResult,
    ...dynamicInvestigations.filter((item) => item.domain !== cleanDom),
  ].slice(0, MAX_INVESTIGATIONS_STORE);
}
