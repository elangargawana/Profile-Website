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

// SVG tech icons as inline components
const TechIcons: Record<string, () => React.ReactElement> = {
  html: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 8h8M8.5 12h7M9 16l3 1 3-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  css: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7.5 8h9M8 12h8M8.5 16l3.5 1.5L15.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  js: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 16c0 1.5-1.5 2-2.5 1M15 11v5c0 1 .5 2 1.5 2s1.5-.5 1.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  react: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  nextjs: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 16V8l8 10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  vue: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M3 4l9 16L21 4h-4L12 14 7 4H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 4l5 9 5-9h-3L12 9 10 4H7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  tailwind: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M6 9c.5-2.5 2-4 4.5-4 2.5 0 3 2 4.5 2 1.5 0 2.5-1 3-2.5M4.5 15c.5-2.5 2-4 4.5-4 2.5 0 3 2 4.5 2 1.5 0 2.5-1 3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  inertia: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M6 6l5 6-5 6M13 6l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  php: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 12h3.5l1-4h-3.5L7 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="10" cy="10" r="0.5" fill="currentColor"/>
      <path d="M14 8h1.5c1 0 1.5.5 1.5 1.5S16.5 11 15.5 11H14l-.5 1H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  laravel: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M12 3L3 8v8l9 5 9-5V8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3 8l9 5m0 0l9-5M12 13v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  nodejs: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 9v6M9 12h6M15 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  fastapi: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 4l-4 9h6l-4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  api: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M4 12h16M4 12l4-4m-4 4l4 4M20 12l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mysql: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <ellipse cx="12" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  postgresql: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <ellipse cx="12" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  flutter: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M5 15L12 3l7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21l3-6 3 6H9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  dart: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M4 4h7l9 9-9 9H4l9-9L4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  git: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 6h6a2 2 0 0 1 2 2v1M6 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  docker: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="3" y="10" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="8" y="10" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="10" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="8" y="6" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="6" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 14s.5 3 5 3h11c3 0 4-2 4-4 0 0-1-1-3-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12s1-1 2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  postman: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12h8M12 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  figma: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="8" y="3" width="8" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="8" y="9" width="8" height="6" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="8" y="15" width="8" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

function TechIcon({ iconKey }: { iconKey: string }) {
  const IconComponent = TechIcons[iconKey];
  if (!IconComponent) return null;
  return <IconComponent />;
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
          y: 20,
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
          heading={t.capabilities.heading}
          subheading={t.capabilities.subheading}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
          {capabilityGroups.map((group) => {
            const label = groupLabels[group.key as keyof typeof groupLabels];
            return (
              <div
                key={group.key}
                data-cap-group
                className="border-t border-[#d8d3cc] py-8 pr-6"
              >
                <p className="font-mono text-[10px] tracking-[0.14em] text-[#9a9a9a] uppercase mb-5">
                  {label}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-[14px] text-[#2a2a2a] font-light group/item"
                    >
                      <span className="text-[#9a9a9a] group-hover/item:text-[#2a2a2a] transition-colors duration-200 flex-shrink-0">
                        <TechIcon iconKey={item.icon} />
                      </span>
                      <span>{item.name}</span>
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
