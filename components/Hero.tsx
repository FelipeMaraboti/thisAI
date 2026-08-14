'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface HeroProps {
  onInvestigate: (url: string) => void;
  isLoading: boolean;
}

export default function Hero({ onInvestigate, isLoading }: HeroProps) {
  const { t } = useLanguage();
  const [urlInput, setUrlInput] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic typography reveal
      gsap.fromTo(
        '.hero-stagger',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-meta-stagger',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onInvestigate(urlInput.trim());
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border-hairline overflow-hidden"
    >
      {/* Editorial Decorative Background Grid */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40" />

      {/* Coordinate Stamp */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Micro-Metadata Header */}
        <div className="hero-meta-stagger flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-border-hairline font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="text-acid font-bold">{t.hero.issueTag}</span>
            <span className="text-ink-dim">/</span>
            <span>{t.hero.archiveTag}</span>
            <span className="text-ink-dim">/</span>
            <span>AGOSTO 2026</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-ink-dim">
            <span>{t.hero.systemActive}</span>
            <span>TOPOLOGY: 6-VECTORS</span>
            <span>ENGINE: HEURISTIC_v2</span>
          </div>
        </div>

        {/* Asymmetric Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left / Main Column: Monumental Headline */}
          <div className="lg:col-span-8">
            <h1 
              ref={headlineRef} 
              className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-ink-headline tracking-tighter leading-[0.88] mb-8"
            >
              <span className="hero-stagger block">{t.hero.titleLine1}</span>
              <span className="hero-stagger block text-ink-headline">
                <span className="text-acid">AI</span>?
              </span>
            </h1>

            <p className="hero-stagger font-body text-lg sm:text-xl md:text-2xl text-ink-body max-w-2xl font-light leading-relaxed mb-12">
              {t.hero.description}
            </p>

            {/* Minimalist Investigative URL Form */}
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="hero-stagger max-w-2xl bg-bg-surface border border-border-subtle hover:border-acid/60 focus-within:border-acid transition-all duration-300 p-2 sm:p-3 flex flex-col sm:flex-row items-stretch gap-2"
            >
              <div className="flex items-center flex-1 px-3 py-2 text-ink-headline font-mono text-sm">
                <span className="text-acid mr-2 font-bold select-none">&gt;</span>
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder={t.hero.inputPlaceholder}
                  disabled={isLoading}
                  required
                  className="w-full bg-transparent text-ink-headline placeholder-ink-dim focus:outline-none font-mono text-sm tracking-wide"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !urlInput.trim()}
                data-cursor="INVESTIGATE"
                className="group px-6 py-3.5 bg-ink-headline hover:bg-acid text-bg-primary font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                    <span>{t.hero.buttonScanning}</span>
                  </>
                ) : (
                  <>
                    <span>{t.hero.buttonInvestigate}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Probe Presets */}
            <div className="hero-stagger mt-5 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-muted">
              <span className="text-ink-dim">{t.hero.sampleDossiers}</span>
              {[
                { label: 'stellar-studio.design', score: '84%' },
                { label: 'modern-wealth.io', score: '78%' },
                { label: 'linear.app', score: '18%' }
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setUrlInput(item.label);
                    onInvestigate(item.label);
                  }}
                  data-cursor="SELECT"
                  className="px-2 py-1 bg-bg-subtle hover:bg-bg-elevated border border-border-hairline hover:border-acid/40 text-ink-body transition-colors focus:outline-none"
                >
                  <span className="underline decoration-border-subtle">{item.label}</span>
                  <span className="ml-1.5 text-acid font-bold">[{item.score}]</span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Sidecard & Manifest Note */}
          <div className="lg:col-span-4 lg:border-l lg:border-border-hairline lg:pl-10 pt-4 lg:pt-0 font-mono text-xs space-y-6 text-ink-muted">
            
            <div className="border-b border-border-hairline pb-6">
              <div className="text-[10px] text-acid uppercase font-bold tracking-widest mb-2">
                {t.hero.missionTag}
              </div>
              <p className="text-ink-body leading-relaxed font-sans text-sm">
                {t.hero.missionText}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] text-ink-dim uppercase tracking-wider">
                {t.hero.vectorsEvaluated}
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {t.hero.vectorList.map((vec, idx) => (
                  <div key={idx} className="p-2 bg-bg-subtle border border-border-hairline flex items-center justify-between">
                    <span>{vec}</span>
                    <span className="text-acid">■</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-bg-subtle border border-border-hairline text-[11px] leading-relaxed text-ink-muted flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-acid shrink-0 mt-0.5" />
              <span>
                {t.hero.ethicalScanner}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
