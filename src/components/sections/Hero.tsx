'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Background image: slow reveal from bottom
      tl.from(bgRef.current, {
        scale: 1.06,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
      })
        .from(
          headlineRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=1.0'
        )
        .from(
          subRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#1a1a1a]"
      aria-label="Hero"
    >
      {/* Full-viewport background image */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Elang Argawana working at desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Gradient overlay — dark on left for text legibility, fade to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-[#1a1a1a]/10" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
      </div>

      {/* Content — absolutely positioned over the image */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 lg:px-16 pt-32 pb-10 md:pb-12">

        {/* Main headline — bottom-left, large */}
        <div ref={headlineRef} className="flex-1 flex flex-col justify-end max-w-2xl">
          <div className="mb-5">
            <span className="font-mono text-[11px] tracking-[0.16em] text-white/50 uppercase">
              {t.hero.role}
            </span>
          </div>

          <h1 className="text-[clamp(52px,8vw,112px)] font-light tracking-[-0.03em] text-white !leading-[0.91] mb-8">
            Elang
            <br />
            <span className="text-white/40">Argawana</span>
          </h1>

        </div>

        {/* Bottom bar */}
        <div
          ref={subRef}
          className="border-t border-white/15 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <MapPin size={11} strokeWidth={1.5} />
            <span>{t.hero.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <a
              href="#work"
              onClick={handleScrollTo('work')}
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.08em] text-white/80 hover:text-white transition-colors duration-300 uppercase"
            >
              {t.hero.cta_work}
              <ArrowDownRight
                size={12}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              onClick={handleScrollTo('contact')}
              className="text-[12px] tracking-[0.08em] text-white/40 hover:text-white/80 transition-colors duration-300 uppercase"
            >
              {t.hero.cta_contact}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex flex-col items-center gap-2">
            <span
              className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
