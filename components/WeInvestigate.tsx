'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Binary, LayoutGrid, Palette, FileText, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_ICONS = [Terminal, Binary, LayoutGrid, Palette, FileText, Cpu];

export default function WeInvestigate() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal title on scroll
      gsap.from('.investigate-title-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentPillar = t.weInvestigate.pillars[activeTab];

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="py-28 border-b border-border-hairline bg-bg-surface relative"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Massive Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-16 mb-16 border-b border-border-hairline">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold block mb-3">
              {t.weInvestigate.tag}
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ink-headline tracking-tight leading-[0.9]">
              <span className="investigate-title-line block">{t.weInvestigate.titleLine1}</span>
              <span className="investigate-title-line block text-ink-muted">{t.weInvestigate.titleLine2}</span>
              <span className="investigate-title-line block text-ink-headline">
                <span className="text-acid underline decoration-acid/30 underline-offset-8">{t.weInvestigate.titleLine3Highlight}</span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 font-mono text-xs text-ink-muted space-y-4">
            <p className="text-sm font-sans text-ink-body leading-relaxed">
              {t.weInvestigate.description}
            </p>
            <div className="pt-2 text-[11px] text-ink-dim border-t border-border-hairline">
              {t.weInvestigate.versionTag}
            </div>
          </div>
        </div>

        {/* 6 Pillars Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Pillar Selector Tabs */}
          <div className="lg:col-span-4 space-y-2 font-mono text-xs">
            {t.weInvestigate.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx] || Terminal;
              const isActive = activeTab === idx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  data-cursor="SELECT"
                  className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between focus:outline-none ${
                    isActive
                      ? 'bg-bg-subtle border-acid text-ink-headline'
                      : 'bg-transparent border-border-hairline text-ink-muted hover:border-border-subtle hover:text-ink-body'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold ${isActive ? 'text-acid' : 'text-ink-dim'}`}>
                      {pillar.id}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-acid' : 'text-ink-muted'}`} />
                    <span className="font-bold tracking-wider">{pillar.name}</span>
                  </div>
                  
                  <span className={`text-[10px] tracking-widest ${isActive ? 'text-acid' : 'text-ink-dim'}`}>
                    [{pillar.metric.split(' ')[0]}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Forensic Viewport */}
          <div className="lg:col-span-8 p-8 md:p-12 bg-bg-subtle border border-border-hairline flex flex-col justify-between relative overflow-hidden">
            
            {/* Background watermarked pillar number */}
            <div className="absolute right-4 bottom-0 font-editorial text-9xl font-black text-white/[0.02] pointer-events-none select-none">
              {currentPillar.id}
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between font-mono text-xs border-b border-border-hairline pb-4">
                <span className="text-acid font-bold">
                  {t.weInvestigate.vectorTag} {currentPillar.id} / 06
                </span>
                <span className="text-ink-dim">
                  {t.weInvestigate.calibratedTag}
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-ink-headline mb-2">
                  {currentPillar.name}
                </h3>
                <div className="font-mono text-sm text-acid">
                  {currentPillar.tagline}
                </div>
              </div>

              <p className="font-body text-base sm:text-lg text-ink-body font-light leading-relaxed max-w-2xl">
                {currentPillar.description}
              </p>
            </div>

            {/* Metric Footer */}
            <div className="pt-8 mt-8 border-t border-border-hairline grid grid-cols-2 gap-4 font-mono text-xs relative z-10">
              <div>
                <span className="text-ink-dim text-[10px] block uppercase">{t.weInvestigate.benchmarkVector}</span>
                <span className="font-bold text-ink-headline">{currentPillar.metric}</span>
              </div>
              <div>
                <span className="text-ink-dim text-[10px] block uppercase">{t.weInvestigate.typicalSignal}</span>
                <span className="font-bold text-acid">{currentPillar.signal}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
