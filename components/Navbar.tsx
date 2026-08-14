'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Globe } from 'lucide-react';

interface NavbarProps {
  onOpenMethodology: () => void;
  onOpenLiveFeed?: () => void;
}

export default function Navbar({ onOpenMethodology }: NavbarProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/85 backdrop-blur-md border-b border-border-hairline transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark (Never translated, always ThisAI?) */}
        <Link 
          href="/" 
          className="group flex items-center gap-1.5 focus:outline-none"
          data-cursor="HOME"
        >
          <span className="font-editorial text-2xl font-normal tracking-tight text-ink-headline">
            This<span className="font-black text-ink-headline">AI</span>
            <span className="text-acid font-black ml-0.5 group-hover:translate-x-0.5 inline-block transition-transform duration-200">?</span>
          </span>
        </Link>

        {/* Center Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-ink-muted">
          <a
            href="#about"
            data-cursor="ABOUT"
            className="hover:text-ink-headline transition-colors duration-200 uppercase"
          >
            {t.nav.about}
          </a>
          <button
            onClick={onOpenMethodology}
            data-cursor="METHOD"
            className="hover:text-ink-headline transition-colors duration-200 uppercase focus:outline-none"
          >
            {t.nav.methodology}
          </button>
          <a
            href="#investigations"
            data-cursor="ARCHIVE"
            className="hover:text-ink-headline transition-colors duration-200 uppercase"
          >
            {t.nav.investigations}
          </a>
          <a
            href="#lab"
            data-cursor="THE LAB"
            className="hover:text-ink-headline transition-colors duration-200 uppercase text-acid"
          >
            {t.nav.lab}
          </a>
        </nav>

        {/* Right Badges & Language Switcher */}
        <div className="flex items-center gap-3">
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            data-cursor="LANGUAGE"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-surface hover:bg-bg-elevated border border-border-hairline hover:border-acid/60 font-mono text-[11px] text-ink-body hover:text-acid transition-all duration-200 focus:outline-none"
            title={language === 'pt' ? 'Mudar para Inglês (EN)' : 'Switch to Portuguese (PT-BR)'}
          >
            <Globe className="w-3.5 h-3.5 text-acid" />
            <span className="font-bold">{language.toUpperCase()}</span>
          </button>

          {/* System Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-bg-subtle border border-border-hairline font-mono text-[10px] tracking-wider text-ink-muted">
            <span className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse" />
            <span className="text-ink-headline">{t.nav.status}</span>
          </div>
        </div>

      </div>
    </header>
  );
}
