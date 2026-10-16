'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!textRef.current) return;
      const paras = textRef.current.querySelectorAll('p');

      paras.forEach((p, i) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 24,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#f5f3ef] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="About"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-16">
          {/* Left: heading */}
          <div>
            <SectionHeading index="03" heading={t.about.heading} />
          </div>

          {/* Right: paragraphs */}
          <div ref={textRef} className="flex flex-col gap-6 pt-0 md:pt-1">
            {t.about.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-[1.75] ${
                  i === 0
                    ? 'text-[18px] md:text-[20px] text-[#1a1a1a] font-light'
                    : 'text-[15px] text-[#5a5a5a]'
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
