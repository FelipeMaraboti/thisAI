'use client';

import React, { useEffect, useState } from 'react';
import { Terminal, Shield, CheckCircle2, Loader2 } from 'lucide-react';

interface ScanTerminalModalProps {
  url: string;
  onComplete: () => void;
}

const STAGES = [
  { id: 1, name: 'CRAWLING', desc: 'Handshaking public surface & rendering DOM via Playwright headless engine' },
  { id: 2, name: 'READING', desc: 'Parsing stylesheet cascades, Tailwind token density & AST class hierarchy' },
  { id: 3, name: 'OBSERVING', desc: 'Extracting visual bounding boxes, bento symmetry & spatial invariants' },
  { id: 4, name: 'COMPARING', desc: 'Cross-referencing against calibrated database of LLM scaffold fingerprints' },
  { id: 5, name: 'SCORING', desc: 'Aggregating weighted multi-vector evidence matrix & compiling forensic dossier' },
];

export default function ScanTerminalModal({ url, onComplete }: ScanTerminalModalProps) {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < STAGES.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return prev;
        }
      });
    }, 750);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-border-hairline p-6 sm:p-8 relative overflow-hidden font-mono shadow-2xl">
        
        {/* Animated Green Scan Line */}
        <div className="absolute inset-x-0 h-1 bg-acid/40 blur-[1px] animate-scan-line pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border-hairline pb-4 mb-6 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-acid rounded-full animate-ping" />
            <span className="text-acid font-bold">[REALTIME_FORENSIC_SCANNER]</span>
          </div>
          <span className="text-ink-dim">ISOLATED SANDBOX</span>
        </div>

        {/* Target Header */}
        <div className="mb-8">
          <div className="text-[10px] text-ink-dim uppercase tracking-widest mb-1">
            TARGET IN PROCESS
          </div>
          <div className="font-editorial text-2xl sm:text-3xl font-black text-ink-headline tracking-tight truncate">
            {url}
          </div>
        </div>

        {/* 5 Stages Breakdown */}
        <div className="space-y-4 mb-8">
          {STAGES.map((stage, idx) => {
            const isFinished = currentStage > idx + 1;
            const isActive = currentStage === idx + 1;
            const isPending = currentStage <= idx;

            return (
              <div
                key={stage.id}
                className={`p-3.5 border transition-all duration-300 ${
                  isActive
                    ? 'bg-bg-subtle border-acid text-ink-headline'
                    : isFinished
                    ? 'bg-bg-primary/50 border-border-hairline text-ink-muted'
                    : 'bg-transparent border-transparent text-ink-dim'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-acid' : isFinished ? 'text-ink-headline' : 'text-ink-dim'}>
                      0{stage.id} / {stage.name}
                    </span>
                    {isActive && (
                      <Loader2 className="w-3.5 h-3.5 text-acid animate-spin inline-block" />
                    )}
                    {isFinished && (
                      <span className="text-acid text-[10px] font-mono">[COMPLETED]</span>
                    )}
                  </div>
                  <span className="text-[10px] text-ink-dim">
                    {isFinished ? '100%' : isActive ? 'PROCESSING...' : 'QUEUED'}
                  </span>
                </div>
                <div className="text-[11px] font-sans text-ink-body/80">
                  {stage.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / System Footer */}
        <div className="pt-4 border-t border-border-hairline flex items-center justify-between text-[10px] text-ink-dim">
          <span>SAFEGUARD: SSRF_SHIELD_ENABLED</span>
          <span>LATENCY: ~3.2s</span>
        </div>

      </div>
    </div>
  );
}
