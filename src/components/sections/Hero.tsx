'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
      })
        .from(
          subRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          metaRef.current,
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen bg-[#f5f3ef] flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-10 lg:px-16 pt-32"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Role tag */}
        <div className="mb-8 md:mb-12">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
            {t.hero.role}
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-[clamp(48px,9vw,128px)] font-light tracking-[-0.03em] text-[#1a1a1a] leading-[0.92] mb-10 md:mb-14"
        >
          Elang
          <br />
          <span className="text-[#9a9a9a]">Argawana</span>
        </h1>

        {/* Bottom row */}
        <div
          ref={subRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-[#e0dbd3] pt-8 md:pt-10"
        >
          {/* Tagline and description */}
          <div className="max-w-lg">
            <p className="text-[17px] md:text-[19px] text-[#1a1a1a] leading-[1.55] font-light mb-4">
              {t.hero.tagline}
            </p>
            <p className="text-[14px] md:text-[15px] text-[#7a7a7a] leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* CTAs + meta */}
          <div ref={metaRef} className="flex flex-col gap-6 md:items-end">
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-2 text-[13px] tracking-[0.06em] text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300 uppercase"
              >
                {t.hero.cta_work}
                <ArrowDownRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 text-[13px] tracking-[0.06em] text-[#7a7a7a] hover:text-[#1a1a1a] transition-colors duration-300 uppercase"
              >
                {t.hero.cta_contact}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[12px] text-[#9a9a9a]">
              <MapPin size={11} strokeWidth={1.5} />
              <span>{t.hero.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical scroll hint */}
      <div className="absolute bottom-10 right-6 md:right-10 lg:right-16 hidden md:flex flex-col items-center gap-2">
        <span
          className="font-mono text-[10px] tracking-[0.16em] text-[#bab6b0] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#bab6b0] to-transparent" />
      </div>
    </section>
  );
}
