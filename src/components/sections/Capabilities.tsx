'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { capabilityGroups } from '@/data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Capabilities() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const groups = sectionRef.current?.querySelectorAll('[data-cap-group]');
      groups?.forEach((group, i) => {
        gsap.from(group, {
          scrollTrigger: {
            trigger: group,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          x: -16,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const groupLabels = t.capabilities.groups;

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="bg-[#eeebe5] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="02"
          heading={t.capabilities.heading}
          subheading={t.capabilities.subheading}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {capabilityGroups.map((group, i) => {
            const label = groupLabels[group.key as keyof typeof groupLabels];
            return (
              <div
                key={group.key}
                data-cap-group
                className="border-t border-[#d8d3cc] py-8 pr-8"
              >
                <p className="font-mono text-[10px] tracking-[0.14em] text-[#9a9a9a] uppercase mb-5">
                  {label}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-[#2a2a2a] font-light leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
