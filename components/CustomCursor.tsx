'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on pointer-capable desktop devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.28,
        ease: 'power3.out',
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor]') as HTMLElement | null;

      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor') || 'VIEW';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('button, a, input, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central pinpoint */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-acid rounded-full transition-opacity duration-200"
        style={{ opacity: isHovered && cursorText ? 0 : 1 }}
      />

      {/* Trailing investigative scope */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'px-3 py-1 bg-ink-headline text-bg-primary font-mono text-[10px] tracking-widest font-bold uppercase rounded-none border border-acid shadow-lg'
            : isHovered
            ? 'w-10 h-10 border border-acid bg-acid/10 rounded-full scale-110'
            : 'w-7 h-7 border border-white/20 rounded-full'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </>
  );
}
