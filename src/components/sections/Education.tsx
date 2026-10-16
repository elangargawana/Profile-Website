'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Education() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!cardRef.current) return;
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="bg-[#f5f3ef] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Education"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading={t.education.heading} />

        <div
          ref={cardRef}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-4 md:gap-8 border-t border-[#e0dbd3] py-8 md:py-10"
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.08em] text-[#9a9a9a]">
              {t.education.period}
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-light text-[#1a1a1a] tracking-tight mb-1">
              {t.education.institution}
            </h3>
            <p className="text-[14px] text-[#6a6a6a] mb-2">{t.education.degree}</p>
            <p className="font-mono text-[12px] text-[#9a9a9a] tracking-wider mb-4">
              {t.education.gpa}
            </p>
            <p className="text-[13px] text-[#8a8a8a] leading-relaxed max-w-lg">
              {t.education.support}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
