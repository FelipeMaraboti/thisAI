'use client';

import React from 'react';
import { InvestigationResult } from '@/lib/forensics/types';
import { ShieldAlert, ArrowLeft, Share2, Download, CheckCircle2, AlertCircle } from 'lucide-react';

interface InvestigationReportProps {
  report: InvestigationResult;
  onClose: () => void;
}

export default function InvestigationReport({ report, onClose }: InvestigationReportProps) {
  const isHighSignal = report.overallScore >= 70;
  const isModerate = report.overallScore >= 45 && report.overallScore < 70;

  const vectorList = [
    { label: 'CODE FORENSICS', val: report.vectors.code, desc: 'AST cyclomatic depth & indentation regularity' },
    { label: 'NAMING CADENCE', val: report.vectors.naming, desc: 'BEM predictability & Tailwind utility token chains' },
    { label: 'STRUCTURE & AST', val: report.vectors.structure, desc: 'DOM tree invariants & wrapper encapsulation ratios' },
    { label: 'VISUAL TOPOLOGY', val: report.vectors.visual, desc: 'Bento box symmetry & standard 3-tier card spacing' },
    { label: 'SYNTHETIC COPYWRITING', val: report.vectors.content, desc: 'LLM marketing idiom clustering & syntactic tropes' },
  ];

  return (
    <div className="fixed inset-0 z-[150] overflow-y-auto bg-bg-primary text-ink-body pt-20 pb-24 animate-fadeIn">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-border-hairline font-mono text-xs text-ink-muted">
          <button
            onClick={onClose}
            data-cursor="BACK"
            className="flex items-center gap-2 text-ink-body hover:text-acid transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>[RETURN TO HOMEPAGE]</span>
          </button>

          <div className="flex items-center gap-4 text-[11px]">
            <span>STATUS: SEALED_FORENSIC_DOSSIER</span>
            <span className="text-ink-dim">/</span>
            <span className="text-acid font-bold">ACCURACY: CALIBRATED</span>
          </div>
        </div>

        {/* Dossier Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 mb-12 border-b border-border-hairline">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-xs text-acid mb-3">
              <span className="font-bold">INVESTIGATION {report.id}</span>
              <span className="text-ink-dim">/</span>
              <span className="text-ink-muted">{report.timestampUtc}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight break-all mb-4">
              {report.domain}
            </h1>

            <p className="font-body text-base sm:text-lg text-ink-body font-light leading-relaxed max-w-2xl">
              {report.summary}
            </p>
          </div>

          {/* Huge Score Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end font-mono">
            <div className="text-left lg:text-right">
              <span className="text-[11px] text-ink-dim uppercase tracking-widest block mb-1">
                AI SIGNAL SCORE
              </span>
              
              <div className="font-editorial text-7xl sm:text-8xl md:text-9xl font-black text-acid leading-none">
                {report.overallScore}
              </div>

              <div className="mt-3">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block ${
                  isHighSignal
                    ? 'bg-acid/15 text-acid border border-acid/40'
                    : isModerate
                    ? 'bg-white/10 text-ink-headline border border-border-subtle'
                    : 'bg-white/5 text-ink-muted border border-border-hairline'
                }`}>
                  {report.verdict}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Vectors & Evidence Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Horizontal Minimalist Vectors */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-acid tracking-widest uppercase font-bold block mb-2">
                [VECTORS]
              </span>
              <h2 className="font-editorial text-2xl font-bold text-ink-headline">
                FORENSIC BREAKDOWN
              </h2>
            </div>

            <div className="space-y-6">
              {vectorList.map((vec) => (
                <div key={vec.label} className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-ink-headline font-bold">{vec.label}</span>
                    <span className="text-acid font-bold">{vec.val} / 100</span>
                  </div>
                  
                  {/* Ultra-minimalist progress bar */}
                  <div className="w-full h-1 bg-border-hairline overflow-hidden">
                    <div
                      className="h-full bg-acid transition-all duration-1000 ease-out"
                      style={{ width: `${vec.val}%` }}
                    />
                  </div>

                  <div className="font-mono text-[10px] text-ink-dim">
                    {vec.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Confidence Stamp */}
            <div className="p-6 bg-bg-surface border border-border-hairline space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-ink-dim uppercase">CONFIDENCE RATING:</span>
                <span className="text-acid font-bold">[{report.confidence}]</span>
              </div>
              <p className="text-ink-muted font-sans text-xs leading-relaxed">
                The score is computed from observable public engineering signals. It is an algorithmic estimation of AI-assisted generation, not absolute legal proof of origin.
              </p>
            </div>

            {/* Technology Stack List */}
            <div className="p-6 bg-bg-surface border border-border-hairline space-y-4 font-mono text-xs">
              <div className="text-[10px] text-acid uppercase font-bold tracking-wider">
                [DETECTED TECHNOLOGIES]
              </div>
              
              <div className="flex flex-wrap gap-2">
                {report.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2.5 py-1 bg-bg-subtle border border-border-hairline text-ink-headline text-xs font-mono"
                  >
                    {tech.name} <span className="text-ink-dim">({tech.category})</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Evidence Explorer (+ / - points) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs text-acid tracking-widest uppercase font-bold block mb-2">
                [EXPLAINABILITY]
              </span>
              <h2 className="font-editorial text-2xl font-bold text-ink-headline">
                EVIDENCE EXPLORER
              </h2>
            </div>

            <div className="space-y-6">
              {report.evidences.map((ev) => (
                <div
                  key={ev.id}
                  className={`p-6 border transition-colors ${
                    ev.isPositive
                      ? 'bg-bg-surface border-border-hairline hover:border-acid/40'
                      : 'bg-bg-surface border-border-hairline hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className={`px-2 py-0.5 font-bold ${
                        ev.isPositive
                          ? 'bg-acid/10 text-acid border border-acid/30'
                          : 'bg-white/10 text-ink-body border border-border-subtle'
                      }`}>
                        {ev.points > 0 ? `+${ev.points}` : ev.points} PTS
                      </span>
                      <span className="text-ink-dim uppercase">[{ev.category}]</span>
                    </div>

                    <span className="font-mono text-[10px] text-ink-dim">
                      {ev.isPositive ? 'SYNTHETIC SIGNAL' : 'ARTISANAL SIGNAL'}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-ink-headline mb-2">
                    {ev.title}
                  </h3>

                  <p className="font-body text-sm text-ink-body font-light leading-relaxed mb-4">
                    {ev.description}
                  </p>

                  {ev.codeSnippet && (
                    <div className="p-3.5 bg-[#070707] border border-border-hairline/80 font-mono text-xs text-ink-muted overflow-x-auto whitespace-pre">
                      {ev.codeSnippet}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ethical Notice Disclaimer */}
            <div className="p-4 bg-bg-surface/60 border border-border-hairline text-xs font-mono text-ink-dim flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
              <p className="font-sans leading-relaxed">
                <strong className="text-ink-muted font-mono">Ethical Transparency:</strong> ThisAI? identifies architectural patterns associated with AI-assisted development. It cannot definitively determine whether AI was used to build a website.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
