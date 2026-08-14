'use client';

import React from 'react';
import { FEATURED_INVESTIGATIONS } from '@/lib/forensics/presets';
import { ArrowUpRight } from 'lucide-react';

interface LatestInvestigationsProps {
  onSelectInvestigation: (domain: string) => void;
}

export default function LatestInvestigations({ onSelectInvestigation }: LatestInvestigationsProps) {
  return (
    <section id="investigations" className="py-24 border-b border-border-hairline bg-bg-primary">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-border-hairline">
          <div>
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold">
              [DOSSIER ARCHIVE]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              LATEST INVESTIGATIONS
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-md">
            Recent forensic autopsies conducted on public web surfaces. Scanned for generative AST patterns, lexical cadence and layout invariants.
          </p>
        </div>

        {/* Magazine-Style Editorial List (No generic cards) */}
        <div className="space-y-16">
          {FEATURED_INVESTIGATIONS.map((preset, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const res = preset.result;
            const isHighSignal = res.overallScore >= 70;

            return (
              <article
                key={preset.domain}
                onClick={() => onSelectInvestigation(preset.domain)}
                data-cursor="EXAMINE"
                className="group relative cursor-pointer border-b border-border-hairline pb-16 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Giant Editorial Number */}
                  <div className="lg:col-span-2">
                    <span className="font-editorial text-7xl sm:text-8xl md:text-9xl font-black text-ink-dim/40 group-hover:text-acid transition-colors duration-300 block leading-none select-none">
                      {num}
                    </span>
                    <div className="font-mono text-xs text-ink-muted mt-2">
                      {preset.issueNumber}
                    </div>
                  </div>

                  {/* Main Editorial Content */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase px-2 py-0.5 bg-bg-subtle text-ink-muted border border-border-hairline">
                        {preset.title}
                      </span>
                      <span className="font-mono text-xs text-ink-dim">
                        {res.timestampUtc}
                      </span>
                    </div>

                    <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-ink-headline group-hover:text-acid transition-colors duration-200 flex items-center gap-3">
                      {preset.domain}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>

                    <p className="font-body text-base sm:text-lg text-ink-body font-light leading-relaxed max-w-xl">
                      {res.summary}
                    </p>

                    {/* Technical Micro Vectors */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-hairline/60 font-mono text-xs text-ink-muted">
                      <div>
                        <span className="text-ink-dim block text-[10px]">CODE AST</span>
                        <span className="font-bold text-ink-headline">{res.vectors.code}%</span>
                      </div>
                      <div>
                        <span className="text-ink-dim block text-[10px]">NAMING BEM</span>
                        <span className="font-bold text-ink-headline">{res.vectors.naming}%</span>
                      </div>
                      <div>
                        <span className="text-ink-dim block text-[10px]">DOM DEPTH</span>
                        <span className="font-bold text-ink-headline">{res.vectors.structure}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Score Block */}
                  <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full">
                    <div className="lg:text-right">
                      <span className="font-mono text-xs uppercase text-ink-dim block tracking-wider">
                        AI SIGNAL SCORE
                      </span>
                      <div className="font-editorial text-6xl sm:text-7xl font-black text-ink-headline group-hover:text-acid transition-colors">
                        {res.overallScore}
                        <span className="text-2xl font-mono text-ink-dim ml-1">/100</span>
                      </div>
                      <div className={`mt-2 font-mono text-xs px-2.5 py-1 inline-block uppercase font-bold tracking-widest ${
                        isHighSignal 
                          ? 'bg-acid/10 text-acid border border-acid/30' 
                          : 'bg-white/5 text-ink-muted border border-border-hairline'
                      }`}>
                        {res.verdict}
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 font-mono text-xs text-ink-dim group-hover:text-ink-headline transition-colors flex items-center gap-1">
                      <span>VIEW FULL AUTOPSY</span>
                      <span>→</span>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
