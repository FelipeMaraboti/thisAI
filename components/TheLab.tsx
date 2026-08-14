'use client';

import React, { useState } from 'react';
import { LAB_ARTICLES } from '@/lib/forensics/presets';
import { ArrowUpRight, BookOpen, X, Clock, User } from 'lucide-react';

export default function TheLab() {
  const [selectedArticle, setSelectedArticle] = useState<typeof LAB_ARTICLES[0] | null>(null);

  return (
    <section id="lab" className="py-28 border-b border-border-hairline bg-bg-surface">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-border-hairline">
          <div>
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold">
              [DISPATCHES & ESSAYS]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              FROM THE LAB
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-sm">
            Investigative journalism and technical essays probing the evolving aesthetics, linguistics, and code genetics of the machine-assisted web.
          </p>
        </div>

        {/* Magazine Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {LAB_ARTICLES.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              data-cursor="READ"
              className="group cursor-pointer p-8 sm:p-10 bg-bg-primary border border-border-hairline hover:border-acid/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-hairline pb-4 mb-6 font-mono text-xs text-ink-muted">
                  <span className="text-acid font-bold">{art.issue}</span>
                  <span>{art.date}</span>
                </div>

                <span className="font-mono text-[11px] text-ink-dim uppercase tracking-wider block mb-2">
                  [{art.category}]
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-ink-headline group-hover:text-acid transition-colors leading-tight mb-4 flex items-start justify-between gap-2">
                  <span>{art.title}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="font-body text-base text-ink-body font-light leading-relaxed mb-8">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-border-hairline flex items-center justify-between font-mono text-xs text-ink-muted">
                <span className="text-ink-dim">{art.author}</span>
                <span className="text-acid">{art.readTime}</span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[220] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="w-full max-w-3xl max-h-[90vh] bg-bg-primary border border-border-hairline overflow-y-auto p-8 sm:p-12 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedArticle(null)}
              data-cursor="CLOSE"
              className="absolute top-6 right-6 p-2 text-ink-muted hover:text-acid transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-acid">
                <span>{selectedArticle.issue}</span>
                <span className="text-ink-dim">/</span>
                <span className="text-ink-muted">{selectedArticle.date}</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-black text-ink-headline tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-6 font-mono text-xs text-ink-muted border-y border-border-hairline py-3">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-acid" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-acid" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 text-ink-body font-sans text-base sm:text-lg font-light leading-relaxed">
                {selectedArticle.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              <div className="pt-8 mt-8 border-t border-border-hairline flex items-center justify-between font-mono text-xs text-ink-muted">
                <span>THISAI? FORENSIC LABORATORY</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-bg-subtle hover:bg-acid hover:text-bg-primary text-ink-headline font-bold transition-colors"
                >
                  CLOSE ESSAY
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
