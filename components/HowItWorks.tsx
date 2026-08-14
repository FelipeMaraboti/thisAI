'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Code2, Eye, Gauge } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    num: '01',
    title: 'CRAWL',
    subtitle: 'Public Surface Inspection',
    icon: Globe,
    desc: 'We render the target domain in a sandboxed headless engine. We capture DOM tree snapshots, network manifests, stylesheet cascades, and high-fidelity viewport metrics with strict SSRF controls.',
    details: ['Playwright Headless Chrome', 'Resource Sandbox', '12s Hard Timeout'],
  },
  {
    num: '02',
    title: 'DECODE',
    subtitle: 'Structure, Naming & AST Patterns',
    icon: Code2,
    desc: 'Our parser deconstructs the DOM tree into Abstract Syntax Trees, evaluating class name entropy, component encapsulation patterns, and Tailwind utility chain distributions.',
    details: ['AST Topological Depth', 'BEM Lexical Predictability', 'Tailwind Monoculture Index'],
  },
  {
    num: '03',
    title: 'OBSERVE',
    subtitle: 'Visual Topology & Synthetic Copy',
    icon: Eye,
    desc: 'We extract visual bounding boxes and calculate spatial balance. Concurrently, natural language models scan marketing copy for over-represented prompt cliches and formulaic syntax.',
    details: ['3-Column Bento Detection', 'Linguistic Idiom Density', 'Spatial Asymmetry Analysis'],
  },
  {
    num: '04',
    title: 'SCORE',
    subtitle: 'Multi-Vector Evidence Aggregation',
    icon: Gauge,
    desc: 'Evidence points are aggregated across 6 calibrated vectors. We generate an explainable forensic report with both positive (AI-indicative) and negative (human-crafted) signals.',
    details: ['Weighted Heuristic Matrix', 'Confidence Calibration', 'Explainable Evidence Dossier'],
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray<HTMLElement>('.how-step-card');
      
      stepElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-28 border-b border-border-hairline bg-bg-primary">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-20 border-b border-border-hairline">
          <div>
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold">
              [PIPELINE]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              HOW IT WORKS
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-sm">
            From initial URL handshake to final forensic dossier: a 4-stage transparent analytical pipeline.
          </p>
        </div>

        {/* 4-Stage Vertical Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="how-step-card p-8 sm:p-10 bg-bg-surface border border-border-hairline hover:border-acid/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border-hairline pb-6 mb-6">
                    <span className="font-editorial text-5xl sm:text-6xl font-black text-ink-dim hover:text-acid transition-colors select-none">
                      {step.num}
                    </span>
                    <div className="p-3 bg-bg-subtle border border-border-hairline text-acid">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-mono text-xs text-acid uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </div>
                  <h3 className="font-editorial text-3xl font-bold text-ink-headline mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-ink-body font-light leading-relaxed mb-8">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-hairline font-mono text-[11px] text-ink-muted space-y-1.5">
                  <span className="text-ink-dim uppercase block text-[9px] mb-1">[PIPELINE CHECKPOINTS]</span>
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <span className="text-acid">▪</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
