'use client';

import React from 'react';
import { X, ShieldCheck, Code2, Scale } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  const { t } = useLanguage();
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
              {t.methodologyModal.sopTag}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black text-ink-headline tracking-tight">
              {t.methodologyModal.title}
            </h2>
            <p className="font-mono text-xs text-ink-muted mt-2">
              {t.methodologyModal.versionTag}
            </p>
          </div>

          {/* Section 1: The Core Principle */}
          <div className="space-y-3">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <Scale className="w-5 h-5 text-acid" />
              {t.methodologyModal.sec1Title}
            </h3>
            <p className="text-ink-body font-light leading-relaxed text-sm sm:text-base">
              {t.methodologyModal.sec1Text}
            </p>
          </div>

          {/* Section 2: 6 Analytical Vectors */}
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <Code2 className="w-5 h-5 text-acid" />
              {t.methodologyModal.sec2Title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {t.weInvestigate.pillars.map((p) => (
                <div key={p.id} className="p-4 bg-bg-subtle border border-border-hairline">
                  <span className="text-acid font-bold block mb-1">{p.id} / {p.name}</span>
                  <p className="text-ink-body font-sans text-xs">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Safe Harbor & Non-Intrusion */}
          <div className="space-y-3 pt-4 border-t border-border-hairline">
            <h3 className="font-editorial text-2xl font-bold text-ink-headline flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-acid" />
              {t.methodologyModal.sec3Title}
            </h3>
            <p className="text-ink-body font-light leading-relaxed text-sm sm:text-base">
              {t.methodologyModal.sec3Text}
            </p>
          </div>

          <div className="pt-6 border-t border-border-hairline flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-ink-headline hover:bg-acid text-bg-primary font-mono text-xs uppercase font-bold tracking-widest transition-colors"
            >
              {t.methodologyModal.dismissButton}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
