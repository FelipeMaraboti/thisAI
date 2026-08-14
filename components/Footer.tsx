'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenMethodology: () => void;
}

export default function Footer({ onOpenMethodology }: FooterProps) {
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
              <div className="text-ink-headline font-bold">DIGITAL FORENSICS</div>
              <div>AI / DESIGN / CODE ARCHAEOLOGY</div>
              <div className="text-acid pt-2">Investigate the web.</div>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-ink-dim text-[10px] uppercase tracking-widest block mb-1">
              [INDEX]
            </span>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="hover:text-acid transition-colors">
                01. About
              </a>
              <button 
                onClick={onOpenMethodology} 
                className="text-left hover:text-acid transition-colors focus:outline-none"
              >
                02. Methodology
              </button>
              <a href="#investigations" className="hover:text-acid transition-colors">
                03. Investigations
              </a>
              <a href="#lab" className="hover:text-acid transition-colors">
                04. Lab Dispatches
              </a>
            </div>
          </div>

          {/* Forensic Notice Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-ink-dim text-[10px] uppercase tracking-widest block mb-1">
              [LEGAL & ETHICS]
            </span>
            <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
              ThisAI? is an independent forensic observatory. All analyses are based on public HTML, CSS, and DOM topology.
            </p>
            <div className="text-[10px] text-ink-dim pt-2">
              BUILD: v2.4-RELEASE // LATENT-2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink-dim text-[11px]">
          <div>
            © 2026 THISAI? INVESTIGATIVE LAB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenMethodology} className="hover:text-ink-muted transition-colors">
              Privacy & Data Ethics
            </button>
            <span>•</span>
            <span className="text-acid">SYS_OK: 99.98%</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
