'use client';

import React from 'react';
import { X, ShieldCheck, Cpu, Code2, Sparkles, Scale } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[230] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="w-full max-w-4xl max-h-[90vh] bg-bg-primary border border-border-hairline overflow-y-auto p-8 sm:p-12 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          data-cursor="CLOSE"
          className="absolute top-6 right-6 p-2 text-ink-muted hover:text-acid transition-colors focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-8 font-sans">
          
          <div className="border-b border-border-hairline pb-6">
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-bold block mb-2">
              [STANDARD OPERATING PROCEDURE]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black text-ink-headline tracking-tight">
              METHODOLOGY & ETHICS
            </h2>
            <p className="font-mono text-xs text-ink-muted mt-2">
              VERSION 2.4 // REVISED AUGUST 2026 // PEER-REVIEWED FORENSIC FRAMEWORK
            </p>
          </div>

          {/* Section 1: The Core Principle */}
          <div className="space-y-3">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <Scale className="w-5 h-5 text-acid" />
              1. Non-Binary Probabilistic Philosophy
            </h3>
            <p className="text-ink-body font-light leading-relaxed text-sm sm:text-base">
              ThisAI? does not render binary absolute verdicts. Software development in 2026 exists on a continuous spectrum between purely artisanal craftsmanship and full automated generative synthesis. We compute an explainable probability index based on observable architectural artifacts.
            </p>
          </div>

          {/* Section 2: 6 Analytical Vectors */}
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <Code2 className="w-5 h-5 text-acid" />
              2. The 6 Forensic Measurement Vectors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">01 / CODE AST CADENCE</span>
                <p className="text-ink-body font-sans text-xs">Measuring indentation invariance, recursive nesting depth, and parameter predictability.</p>
              </div>
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">02 / LEXICAL NAMING</span>
                <p className="text-ink-body font-sans text-xs">Evaluating semantic distance and textbook BEM / utility prefixes from prompt generators.</p>
              </div>
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">03 / STRUCTURAL TOPOLOGY</span>
                <p className="text-ink-body font-sans text-xs">Scanning DOM tree depth uniformity and redundant wrapper container densities.</p>
              </div>
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">04 / VISUAL GEOMETRY</span>
                <p className="text-ink-body font-sans text-xs">Detecting 3-column bento boxes, unmodulated border radii, and canonical hero spotlights.</p>
              </div>
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">05 / SYNTHETIC COPY</span>
                <p className="text-ink-body font-sans text-xs">Calculating prompt buzzword entropy ("supercharge", "effortless", "next-generation").</p>
              </div>
              <div className="p-4 bg-bg-subtle border border-border-hairline">
                <span className="text-acid font-bold block mb-1">06 / SCAFFOLD FINGERPRINT</span>
                <p className="text-ink-body font-sans text-xs">Cross-referencing package manifests and bundler asset signatures against known AI engines.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Safe Harbor & Non-Intrusion */}
          <div className="space-y-3 pt-4 border-t border-border-hairline">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-acid" />
              3. Safe Harbor, Security & Privacy
            </h3>
            <p className="text-ink-body font-light leading-relaxed text-sm sm:text-base">
              Our crawler strictly respects robots.txt directives, blocks private IP and intranet ranges to prevent SSRF vulnerabilities, imposes strict rate limits, and inspects only publicly exposed DOM structures without performing intrusive security tests or penetration attempts.
            </p>
          </div>

          <div className="pt-6 border-t border-border-hairline flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-ink-headline hover:bg-acid text-bg-primary font-mono text-xs uppercase font-bold tracking-widest transition-colors"
            >
              UNDERSTOOD & DISMISS
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
