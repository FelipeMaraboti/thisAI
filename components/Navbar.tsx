'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  onOpenMethodology: () => void;
  onOpenLiveFeed?: () => void;
}

export default function Navbar({ onOpenMethodology }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/85 backdrop-blur-md border-b border-border-hairline transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark */}
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
            About
          </a>
          <button
            onClick={onOpenMethodology}
            data-cursor="METHOD"
            className="hover:text-ink-headline transition-colors duration-200 uppercase focus:outline-none"
          >
            Methodology
          </button>
          <a
            href="#investigations"
            data-cursor="ARCHIVE"
            className="hover:text-ink-headline transition-colors duration-200 uppercase"
          >
            Investigations
          </a>
          <a
            href="#lab"
            data-cursor="THE LAB"
            className="hover:text-ink-headline transition-colors duration-200 uppercase text-acid"
          >
            Lab
          </a>
        </nav>

        {/* System Forensics Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-bg-subtle border border-border-hairline font-mono text-[10px] tracking-wider text-ink-muted">
            <span className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse" />
            <span className="text-ink-headline">FORENSICS</span> / 2026
          </div>
        </div>

      </div>
    </header>
  );
}
