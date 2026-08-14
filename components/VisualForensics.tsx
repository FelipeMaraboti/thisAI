'use client';

import React, { useState } from 'react';
import { Layers, Scan, Crosshair, Box } from 'lucide-react';

export default function VisualForensics() {
  const [activeLayer, setActiveLayer] = useState<'all' | 'boxes' | 'mesh'>('all');
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const MARKERS = [
    {
      id: 'box-nav',
      tag: '01 / NAV',
      label: 'CANONICAL_PILL_NAV',
      x: 10,
      y: 6,
      w: 80,
      h: 8,
      finding: 'Standard centered pill navigation with logo-left, 4 links, and right CTA button (94% prompt conformity).',
    },
    {
      id: 'box-hero',
      tag: '02 / HERO',
      label: 'GRADIENT_HEADLINE_CONTAINER',
      x: 12,
      y: 18,
      w: 76,
      h: 26,
      finding: 'Over-sized gradient typography (h1) paired with glowing radial spotlight background and centered input.',
    },
    {
      id: 'box-cta',
      tag: '03 / CTA',
      label: 'ACCENT_PILL_ACTION',
      x: 35,
      y: 47,
      w: 30,
      h: 7,
      finding: 'High-contrast glowing pill action button with standard Lucide arrow icon.',
    },
    {
      id: 'box-grid',
      tag: '04 / GRID',
      label: '3_COLUMN_BENTO_MATRIX',
      x: 8,
      y: 58,
      w: 84,
      h: 34,
      finding: 'Symmetrical 3-card bento box with 24px padding and rounded-2xl corners matching v0 template archetype.',
    },
  ];

  return (
    <section className="py-28 border-b border-border-hairline bg-bg-surface">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-border-hairline">
          <div>
            <span className="font-mono text-xs text-acid tracking-widest uppercase font-semibold">
              [DECONSTRUCTION]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-ink-headline tracking-tight mt-2">
              VISUAL FORENSICS
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted max-w-md">
            Interactive topological overlay engine. We visually dismantle website layouts into geometric bounding boxes, detecting generative symmetry and template archetypes.
          </p>
        </div>

        {/* Interactive Deconstruction Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Viewport */}
          <div className="lg:col-span-8 bg-bg-primary border border-border-hairline p-4 sm:p-6 relative overflow-hidden">
            
            {/* Viewport Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline font-mono text-[11px] text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-acid rounded-full" />
                <span className="text-ink-headline font-bold">TOPOLOGICAL_DISSECTOR_v2</span>
                <span className="text-ink-dim">// TARGET: synthetic-saas-mockup.design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-acid">RES: 1920x1080</span>
              </div>
            </div>

            {/* Simulated Website Canvas with Overlay Box Markers */}
            <div className="relative aspect-[16/10] bg-[#0c0d10] border border-border-hairline/60 rounded-sm overflow-hidden select-none">
              
              {/* Wireframe UI Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-85">
                
                {/* Simulated Nav */}
                <div className="h-9 px-6 bg-white/[0.04] border border-white/10 rounded-full flex items-center justify-between mx-auto w-4/5">
                  <div className="w-16 h-2.5 bg-white/40 rounded" />
                  <div className="hidden sm:flex gap-4">
                    <div className="w-10 h-2 bg-white/20 rounded" />
                    <div className="w-10 h-2 bg-white/20 rounded" />
                    <div className="w-10 h-2 bg-white/20 rounded" />
                  </div>
                  <div className="w-20 h-5 bg-acid/80 rounded-full" />
                </div>

                {/* Simulated Hero */}
                <div className="text-center my-auto space-y-4 py-4">
                  <div className="inline-block px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full">
                    <div className="w-32 h-2 bg-acid/60 rounded" />
                  </div>
                  <div className="max-w-md mx-auto space-y-2">
                    <div className="h-6 bg-white/80 rounded w-4/5 mx-auto" />
                    <div className="h-6 bg-white/50 rounded w-3/5 mx-auto" />
                  </div>
                  <div className="w-48 h-2 bg-white/20 rounded mx-auto" />
                  <div className="w-28 h-8 bg-white text-black font-bold mx-auto rounded-lg mt-2" />
                </div>

                {/* Simulated Bento Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                    <div className="w-6 h-6 bg-acid/30 rounded" />
                    <div className="w-20 h-2.5 bg-white/60 rounded" />
                    <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                    <div className="w-6 h-6 bg-acid/30 rounded" />
                    <div className="w-20 h-2.5 bg-white/60 rounded" />
                    <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                    <div className="w-6 h-6 bg-acid/30 rounded" />
                    <div className="w-20 h-2.5 bg-white/60 rounded" />
                    <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                </div>

              </div>

              {/* Forensic Bounding Box Overlays */}
              {(activeLayer === 'all' || activeLayer === 'boxes') &&
                MARKERS.map((box) => {
                  const isHovered = hoveredBox === box.id;

                  return (
                    <div
                      key={box.id}
                      onMouseEnter={() => setHoveredBox(box.id)}
                      onMouseLeave={() => setHoveredBox(null)}
                      data-cursor="INSPECT"
                      className={`absolute border transition-all duration-200 cursor-crosshair ${
                        isHovered
                          ? 'border-acid bg-acid/15 z-30 ring-1 ring-acid'
                          : 'border-acid/60 bg-acid/5 hover:border-acid z-20'
                      }`}
                      style={{
                        left: `${box.x}%`,
                        top: `${box.y}%`,
                        width: `${box.w}%`,
                        height: `${box.h}%`,
                      }}
                    >
                      {/* Technical Tag Pin */}
                      <div className="absolute -top-3 left-0 px-1.5 py-0.2 bg-bg-primary border border-acid text-acid font-mono text-[9px] font-bold tracking-wider select-none">
                        [{box.tag}]
                      </div>

                      {/* Coordinate Marks in corners */}
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-acid" />
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-acid" />
                    </div>
                  );
                })}

              {/* Topology Mesh Scanlines */}
              {activeLayer === 'mesh' && (
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d7ff3f_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              )}

            </div>

            {/* Layer Control Bar */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-border-hairline font-mono text-xs text-ink-muted">
              <span className="text-ink-dim">LAYER MODES:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLayer('all')}
                  className={`px-2.5 py-1 border transition-colors ${
                    activeLayer === 'all'
                      ? 'bg-acid text-bg-primary border-acid font-bold'
                      : 'bg-bg-subtle text-ink-muted border-border-hairline hover:text-ink-headline'
                  }`}
                >
                  [COMPOSITE]
                </button>
                <button
                  onClick={() => setActiveLayer('boxes')}
                  className={`px-2.5 py-1 border transition-colors ${
                    activeLayer === 'boxes'
                      ? 'bg-acid text-bg-primary border-acid font-bold'
                      : 'bg-bg-subtle text-ink-muted border-border-hairline hover:text-ink-headline'
                  }`}
                >
                  [BOUNDING BOXES]
                </button>
                <button
                  onClick={() => setActiveLayer('mesh')}
                  className={`px-2.5 py-1 border transition-colors ${
                    activeLayer === 'mesh'
                      ? 'bg-acid text-bg-primary border-acid font-bold'
                      : 'bg-bg-subtle text-ink-muted border-border-hairline hover:text-ink-headline'
                  }`}
                >
                  [TOPOLOGY MESH]
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Finding Details & Technical Metrics */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="p-4 bg-bg-subtle border border-border-hairline">
              <div className="text-[10px] text-acid font-bold uppercase tracking-widest mb-1">
                [TOPOLOGICAL SCAN SUMMARY]
              </div>
              <div className="font-editorial text-2xl font-bold text-ink-headline mb-2">
                Geometric Symmetry: 91/100
              </div>
              <p className="font-body text-xs text-ink-body font-light leading-relaxed">
                Hover over the highlighted bounding boxes on the left to inspect structural patterns and spatial invariants.
              </p>
            </div>

            {/* List of Detected Overlays */}
            <div className="space-y-2">
              {MARKERS.map((m) => {
                const isSelected = hoveredBox === m.id;

                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setHoveredBox(m.id)}
                    onMouseLeave={() => setHoveredBox(null)}
                    className={`p-3 border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-bg-elevated border-acid text-ink-headline'
                        : 'bg-bg-subtle border-border-hairline text-ink-muted hover:border-border-subtle'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                      <span className={isSelected ? 'text-acid' : 'text-ink-headline'}>
                        {m.tag}
                      </span>
                      <span className="text-ink-dim">{m.label}</span>
                    </div>
                    <p className="font-sans text-[11px] text-ink-body font-light leading-relaxed">
                      {m.finding}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
