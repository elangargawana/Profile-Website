'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Organization() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!contentRef.current) return;
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
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
      id="organization"
      className="bg-[#eeebe5] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Organization"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="06" heading={t.organization.heading} />

        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-4 md:gap-8 border-t border-[#d8d3cc] py-8 md:py-10"
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.08em] text-[#9a9a9a] leading-relaxed">
              {t.organization.period}
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-[20px] md:text-[22px] font-light text-[#1a1a1a] tracking-tight mb-1">
              {t.organization.org_name}
            </h3>
            <p className="font-mono text-[11px] tracking-[0.08em] text-[#9a9a9a] uppercase mb-5">
              {t.organization.role}
            </p>
            <ul className="flex flex-col gap-2.5">
              {t.organization.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c0bbb4] mt-[7px] text-[8px]">●</span>
                  <span className="text-[14px] text-[#5a5a5a] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
