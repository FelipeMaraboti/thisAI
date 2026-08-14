'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Code2, Eye, Gauge } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEP_ICONS = [Globe, Code2, Eye, Gauge];

export default function HowItWorks() {
  const { t } = useLanguage();
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
              {t.howItWorks.tag}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              {t.howItWorks.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-sm">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4-Stage Vertical Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.howItWorks.steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Globe;

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
                  <span className="text-ink-dim uppercase block text-[9px] mb-1">{t.howItWorks.pipelineTag}</span>
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
