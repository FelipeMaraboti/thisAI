'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CodeForensics() {
  const { t } = useLanguage();
  const [selectedSnippet, setSelectedSnippet] = useState<'synthetic' | 'artisanal'>('synthetic');

  return (
    <section className="py-28 border-b border-border-hairline bg-bg-primary">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-border-hairline">
          <div>
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold">
              {t.codeForensics.tag}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              {t.codeForensics.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-md">
            {t.codeForensics.subtitle}
          </p>
        </div>

        {/* Code Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Code Window */}
          <div className="lg:col-span-8 bg-[#090909] border border-border-hairline p-6 font-mono text-xs">
            
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
              <div className="flex items-center gap-3">
                <span className="text-acid font-bold">[AST_SNIPPET_VIEW]</span>
                <span className="text-ink-dim">/</span>
                <span className="text-ink-body">
                  {selectedSnippet === 'synthetic' ? 'hero-container.synthetic.tsx' : 'NavigationHotkeys.bespoke.ts'}
                </span>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedSnippet('synthetic')}
                  className={`px-2.5 py-1 border transition-colors ${
                    selectedSnippet === 'synthetic'
                      ? 'bg-acid text-bg-primary border-acid font-bold'
                      : 'bg-bg-subtle text-ink-muted border-border-hairline hover:text-ink-headline'
                  }`}
                >
                  {t.codeForensics.snippetSynthetic}
                </button>
                <button
                  onClick={() => setSelectedSnippet('artisanal')}
                  className={`px-2.5 py-1 border transition-colors ${
                    selectedSnippet === 'artisanal'
                      ? 'bg-acid text-bg-primary border-acid font-bold'
                      : 'bg-bg-subtle text-ink-muted border-border-hairline hover:text-ink-headline'
                  }`}
                >
                  {t.codeForensics.snippetArtisanal}
                </button>
              </div>
            </div>

            {/* Code Lines Display */}
            {selectedSnippet === 'synthetic' ? (
              <div className="space-y-1.5 leading-relaxed text-ink-body">
                <div className="text-ink-dim">// Typical v0 / Cursor prompt-generated class hierarchy</div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">01</span>
                  <span><span className="text-acid">&lt;section</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-section relative w-full py-24"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">02</span>
                  <span className="pl-4"><span className="text-acid">&lt;div</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-container container mx-auto px-6 max-w-7xl"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">03</span>
                  <span className="pl-8"><span className="text-acid">&lt;div</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-content flex flex-col items-center text-center space-y-8"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">04</span>
                  <span className="pl-12"><span className="text-acid">&lt;span</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">05</span>
                  <span className="pl-16"><span className="text-acid">&lt;SparklesIcon</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"w-4 h-4 text-emerald-500"</span> /&gt; Next-Gen Intelligence</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">06</span>
                  <span className="pl-12">&lt;/span&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">07</span>
                  <span className="pl-12"><span className="text-acid">&lt;h1</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-title text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">08</span>
                  <span className="pl-16">Effortlessly Supercharge Your Digital Craft</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">09</span>
                  <span className="pl-12">&lt;/h1&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">10</span>
                  <span className="pl-12"><span className="text-acid">&lt;p</span> <span className="text-ink-headline">className</span>=<span className="text-acid/90">"hero-description text-lg text-neutral-400 max-w-2xl"</span>&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">11</span>
                  <span className="pl-16">The all-in-one platform built for modern teams.</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">12</span>
                  <span className="pl-12">&lt;/p&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">13</span>
                  <span className="pl-8">&lt;/div&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">14</span>
                  <span className="pl-4">&lt;/div&gt;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">15</span>
                  <span>&lt;/section&gt;</span>
                </div>
              </div>
            ) : (
              <div className="space-y-1.5 leading-relaxed text-ink-body">
                <div className="text-ink-dim">// Bespoke human keyboard routing & custom state machine</div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">01</span>
                  <span><span className="text-acid">export class</span> <span className="text-ink-headline">SpatialNavigationDispatcher</span> <span className="text-acid">implements</span> Disposable &#123;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">02</span>
                  <span className="pl-4"><span className="text-acid">private readonly</span> sequenceBuffer: <span className="text-acid">string[]</span> = [];</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">03</span>
                  <span className="pl-4"><span className="text-acid">private</span> timer: NodeJS.Timeout | null = null;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">04</span>
                  <span className="pl-4"><span className="text-acid">constructor</span>(<span className="text-acid">private</span> root: HTMLElement) &#123;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">05</span>
                  <span className="pl-8">this.bindWindowTraps();</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">06</span>
                  <span className="pl-4">&#125;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">07</span>
                  <span className="pl-4"><span className="text-acid">private</span> bindWindowTraps() &#123;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">08</span>
                  <span className="pl-8">window.addEventListener(<span className="text-acid/90">"keydown"</span>, (e) =&gt; &#123;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">09</span>
                  <span className="pl-12"><span className="text-acid">if</span> (e.metaKey || e.ctrlKey) <span className="text-acid">return</span>;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">10</span>
                  <span className="pl-12">this.evaluateSequence(e.key);</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">11</span>
                  <span className="pl-8">&#125;, &#123; passive: <span className="text-acid">true</span> &#125;);</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">12</span>
                  <span className="pl-4">&#125;</span>
                </div>
                <div className="text-ink-muted flex gap-4">
                  <span className="text-ink-dim select-none w-6">13</span>
                  <span>&#125;</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Metrics Breakdown */}
          <div className="lg:col-span-4 space-y-6 font-mono text-xs">
            
            <div className="p-6 bg-bg-surface border border-border-hairline space-y-4">
              <div className="text-[10px] text-acid uppercase font-bold tracking-widest">
                {t.codeForensics.cadenceAnalysis}
              </div>
              
              <div>
                <span className="text-ink-dim text-[11px] block">{t.codeForensics.namingConsistency}</span>
                <div className="font-editorial text-4xl font-bold text-ink-headline">
                  {selectedSnippet === 'synthetic' ? '89 / 100' : '14 / 100'}
                </div>
                <div className="text-ink-muted text-[11px] mt-1">
                  {selectedSnippet === 'synthetic'
                    ? t.codeForensics.syntheticDesc
                    : t.codeForensics.artisanalDesc}
                </div>
              </div>

              <div className="pt-4 border-t border-border-hairline space-y-2 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-ink-dim">{t.codeForensics.astVarianceLabel}</span>
                  <span className="text-acid font-bold">
                    {selectedSnippet === 'synthetic' ? t.codeForensics.astVarianceValSynthetic : t.codeForensics.astVarianceValArtisanal}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-dim">{t.codeForensics.copyScoreLabel}</span>
                  <span className="text-acid font-bold">
                    {selectedSnippet === 'synthetic' ? t.codeForensics.copyScoreValSynthetic : t.codeForensics.copyScoreValArtisanal}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-dim">{t.codeForensics.originLabel}</span>
                  <span className="text-ink-headline font-bold">
                    {selectedSnippet === 'synthetic' ? t.codeForensics.originValSynthetic : t.codeForensics.originValArtisanal}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
