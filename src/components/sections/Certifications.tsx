'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Certifications() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = listRef.current?.querySelectorAll('li');
      items?.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          x: -12,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.06,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="bg-[#f5f3ef] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Certifications"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="07" heading={t.certifications.heading} />

        <ul
          ref={listRef}
          className="flex flex-col"
        >
          {t.certifications.items.map((cert, i) => (
            <li
              key={i}
              className="flex items-center justify-between border-t border-[#e0dbd3] py-5 last:border-b gap-4"
            >
              <span className="text-[14px] md:text-[15px] text-[#2a2a2a] font-light leading-snug">
                {cert.name}
              </span>
              <span className="font-mono text-[11px] text-[#9a9a9a] shrink-0">{cert.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
