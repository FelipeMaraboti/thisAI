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

// Thread-safe in-memory FIFO queue capped at max 4 items
const MAX_RECENT_SCANS = 4;

// Initial high-grade sample seed
let recentScansQueue: RecentScanItem[] = [
  {
    id: 'sc-1',
    domain: 'stellar-studio.design',
    url: 'https://stellar-studio.design',
    score: 84,
    verdict: 'HIGH AI SIGNALS',
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    timeAgo: '2m ago',
    isHighSignal: true,
  },
  {
    id: 'sc-2',
    domain: 'modern-wealth.io',
    url: 'https://modern-wealth.io',
    score: 78,
    verdict: 'HIGH AI SIGNALS',
    timestamp: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
    timeAgo: '6m ago',
    isHighSignal: true,
  },
  {
    id: 'sc-3',
    domain: 'linear.app',
    url: 'https://linear.app',
    score: 18,
    verdict: 'LOW AI SIGNALS',
    timestamp: new Date(Date.now() - 14 * 60 * 1000).toISOString(),
    timeAgo: '14m ago',
    isHighSignal: false,
  },
  {
    id: 'sc-4',
    domain: 'nexus-flow.ai',
    url: 'https://nexus-flow.ai',
    score: 92,
    verdict: 'HIGH AI SIGNALS',
    timestamp: new Date(Date.now() - 28 * 60 * 1000).toISOString(),
    timeAgo: '28m ago',
    isHighSignal: true,
  },
];

// Sanitizer for domain/URL
export function sanitizeDomain(inputDomain: string): string {
  // Strip any script tags, HTML entities, or illegal chars
  return inputDomain
    .replace(/[^a-zA-Z0-9.-]/g, '')
    .toLowerCase()
    .slice(0, 60);
}

export function getRecentScans(): RecentScanItem[] {
  return [...recentScansQueue];
}

export function addRecentScan(domain: string, url: string, score: number, verdict: string): RecentScanItem {
  const cleanDom = sanitizeDomain(domain);
  const isHigh = score >= 70;

  const newItem: RecentScanItem = {
    id: `scan-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    domain: cleanDom,
    url: url,
    score: Math.max(0, Math.min(100, Math.round(score))),
    verdict: verdict || (isHigh ? 'HIGH AI SIGNALS' : 'LOW AI SIGNALS'),
    timestamp: new Date().toISOString(),
    timeAgo: 'just now',
    isHighSignal: isHigh,
  };

  // Prepend to top (FIFO queue) and maintain strictly MAX_RECENT_SCANS (4)
  recentScansQueue = [newItem, ...recentScansQueue.filter((item) => item.domain !== cleanDom)].slice(0, MAX_RECENT_SCANS);

  return newItem;
}
