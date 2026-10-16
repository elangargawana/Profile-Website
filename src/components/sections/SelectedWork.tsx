'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, capabilityGroups } from '@/data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_COLORS = [
  { bg: '#1a1a1a', text: '#f5f3ef', label: '#9a9a9a' },
  { bg: '#f0ede7', text: '#1a1a1a', label: '#7a7a7a' },
  { bg: '#e8e4de', text: '#1a1a1a', label: '#7a7a7a' },
  { bg: '#1a1a1a', text: '#f5f3ef', label: '#9a9a9a' },
  { bg: '#f0ede7', text: '#1a1a1a', label: '#7a7a7a' },
  { bg: '#e8e4de', text: '#1a1a1a', label: '#7a7a7a' },
];

export function SelectedWork() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!itemsRef.current) return;

      const items = itemsRef.current.querySelectorAll('[data-project-item]');

      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="bg-[#f5f3ef] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="01"
          heading={t.work.heading}
          subheading={t.work.subheading}
        />

        <div ref={itemsRef} className="flex flex-col">
          {t.work.projects.map((project, i) => {
            const projectData = projects[i];
            const colors = PROJECT_COLORS[i % PROJECT_COLORS.length];
            const isLarge = i === 0 || i === 3;

            return (
              <div
                key={projectData.id}
                data-project-item
                className="group border-t border-[#e0dbd3] last:border-b"
              >
                <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-start">
                  {/* Left: content */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    {/* Index */}
                    <span className="font-mono text-[11px] tracking-[0.1em] text-[#c0bbb4] mt-1 shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3
                          className={`font-light text-[#1a1a1a] tracking-tight leading-tight ${
                            isLarge
                              ? 'text-[22px] md:text-[28px]'
                              : 'text-[18px] md:text-[22px]'
                          }`}
                        >
                          {project.name}
                        </h3>
                        <span className="font-mono text-[10px] tracking-[0.1em] text-[#9a9a9a] uppercase">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-[14px] text-[#6a6a6a] leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {projectData.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] tracking-[0.06em] text-[#9a9a9a] border border-[#e0dbd3] px-2 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: role */}
                  <div className="md:text-right shrink-0">
                    <p className="font-mono text-[10px] tracking-[0.1em] text-[#9a9a9a] uppercase mb-1">
                      {t.work.role_label}
                    </p>
                    <p className="text-[13px] text-[#5a5a5a]">{project.role}</p>
                  </div>
                </div>

                {/* Optional color accent bar */}
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: colors.bg === '#1a1a1a' ? '#1a1a1a' : '#c0bbb4' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
