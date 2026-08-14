'use client';

import React, { useEffect, useState, useRef } from 'react';
import { RecentScanItem } from '@/lib/forensics/recent-scans';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface LiveFeedTickerProps {
  onSelectDomain: (domain: string) => void;
}

export default function LiveFeedTicker({ onSelectDomain }: LiveFeedTickerProps) {
  const { t } = useLanguage();
  const [scans, setScans] = useState<RecentScanItem[]>([]);
  const [lastUpdatedId, setLastUpdatedId] = useState<string | null>(null);
  const prevTopIdRef = useRef<string | null>(null);

  const fetchScans = async () => {
    try {
      const res = await fetch('/api/recent-scans', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        const items: RecentScanItem[] = data.scans || [];
        
        if (items.length > 0 && prevTopIdRef.current && items[0].id !== prevTopIdRef.current) {
          setLastUpdatedId(items[0].id);
          setTimeout(() => setLastUpdatedId(null), 2500);
        }

        if (items.length > 0) {
          prevTopIdRef.current = items[0].id;
        }
        
        setScans(items.slice(0, 4));
      }
    } catch {
      // Keep existing state
    }
  };

  useEffect(() => {
    fetchScans();
    // Re-check recent scans every 5 minutes (300,000 ms)
    const interval = setInterval(fetchScans, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-border-hairline bg-bg-surface overflow-hidden py-3">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-[11px]">
        
        {/* Left Badge: Live Buffer Indicator */}
        <div className="flex items-center gap-2 text-ink-muted shrink-0 md:pr-6 md:border-r md:border-border-hairline">
          <span className="w-2 h-2 bg-acid rounded-full animate-ping" />
          <span className="text-acid uppercase font-bold tracking-wider">{t.liveFeed.tag}</span>
          <span className="text-ink-dim">{t.liveFeed.subTag}</span>
        </div>

        {/* 4 Slots Grid / Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 flex-1 md:pl-6">
          {scans.map((item, idx) => {
            const isFresh = lastUpdatedId === item.id;
            const slotNum = `0${idx + 1}`;

            return (
              <button
                key={item.id || item.domain}
                onClick={() => onSelectDomain(item.domain)}
                data-cursor="INSPECT"
                className={`group text-left p-2 border transition-all duration-300 flex items-center justify-between focus:outline-none ${
                  isFresh
                    ? 'bg-acid/20 border-acid ring-1 ring-acid'
                    : 'bg-bg-subtle/70 border-border-hairline hover:border-acid/50 hover:bg-bg-subtle'
                }`}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-ink-dim font-bold text-[10px] select-none">
                    {slotNum}
                  </span>
                  <span className="text-ink-headline group-hover:text-acid group-hover:underline decoration-acid transition-colors truncate text-xs font-mono">
                    {item.domain}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className={`px-1.5 py-0.5 text-[9px] font-bold ${
                      item.score >= 70
                        ? 'bg-acid/15 text-acid border border-acid/30'
                        : 'bg-white/5 text-ink-muted border border-border-hairline'
                    }`}
                  >
                    {item.score}% {t.liveFeed.aiScore}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
