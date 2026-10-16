'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('[data-exp-item]');
      items?.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#eeebe5] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Experience"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="04"
          heading={t.experience.heading}
          subheading={t.experience.subheading}
        />

        <div className="flex flex-col">
          {t.experience.items.map((item, i) => (
            <div
              key={i}
              data-exp-item
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-4 md:gap-8 border-t border-[#d8d3cc] py-8 md:py-10 last:border-b"
            >
              {/* Left: period + location */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.08em] text-[#9a9a9a] leading-relaxed">
                  {item.period}
                </p>
                <p className="font-mono text-[11px] tracking-[0.06em] text-[#b8b4ae] mt-1">
                  {item.location}
                </p>
              </div>

              {/* Right: details */}
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <h3 className="text-[18px] md:text-[20px] font-light text-[#1a1a1a] tracking-tight">
                    {item.company}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[#9a9a9a] uppercase">
                    {item.role}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.descriptions.map((desc, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#c0bbb4] mt-[7px] text-[8px]">●</span>
                      <span className="text-[14px] text-[#5a5a5a] leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
