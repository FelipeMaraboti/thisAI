'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FooterProps {
  onOpenMethodology: () => void;
}

export default function Footer({ onOpenMethodology }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-primary border-t border-border-hairline py-20 font-mono text-xs text-ink-muted">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-hairline items-start">
          
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-editorial text-3xl font-black text-ink-headline">
                This<span className="text-ink-headline">AI</span>
                <span className="text-acid ml-0.5">?</span>
              </span>
            </Link>

            <div className="text-ink-muted text-xs leading-relaxed space-y-1">
              <div className="text-ink-headline font-bold">{t.footer.subtitle}</div>
              <div>AI / DESIGN / CODE ARCHAEOLOGY</div>
              <div className="text-acid pt-2">{t.footer.tagline}</div>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-ink-dim text-[10px] uppercase tracking-widest block mb-1">
              {t.footer.indexTag}
            </span>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="hover:text-acid transition-colors">
                01. {t.nav.about}
              </a>
              <button 
                onClick={onOpenMethodology} 
                className="text-left hover:text-acid transition-colors focus:outline-none"
              >
                02. {t.nav.methodology}
              </button>
              <a href="#investigations" className="hover:text-acid transition-colors">
                03. {t.nav.investigations}
              </a>
              <a href="#lab" className="hover:text-acid transition-colors">
                04. {t.nav.lab}
              </a>
            </div>
          </div>

          {/* Forensic Notice Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-ink-dim text-[10px] uppercase tracking-widest block mb-1">
              {t.footer.legalTag}
            </span>
            <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
              {t.footer.legalText}
            </p>
            <div className="text-[10px] text-ink-dim pt-2">
              BUILD: v2.4-RELEASE // LATENT-2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink-dim text-[11px]">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenMethodology} className="hover:text-ink-muted transition-colors">
              {t.footer.privacy}
            </button>
            <span>•</span>
            <span className="text-acid">SYS_OK: 99.98%</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
