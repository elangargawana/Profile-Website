'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SelectedWork() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('[data-work-card]');
      cards?.forEach((card) => {
        const img = card.querySelector('[data-work-img]');
        const info = card.querySelector('[data-work-info]');

        if (img) {
          gsap.from(img, {
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            clipPath: 'inset(100% 0% 0% 0%)',
            duration: 0.85,
            ease: 'power4.out',
          });
        }

        if (info) {
          gsap.from(info, {
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            y: 16,
            opacity: 0,
            duration: 0.6,
            delay: 0.15,
            ease: 'power2.out',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredProjects = projects.filter((p) => p.image);
  const textProjects = projects.filter((p) => !p.image);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="bg-[#f5f3ef] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading={t.work.heading}
          subheading={t.work.subheading}
        />

        {/* Featured catalog grid — all 2 columns, uniform aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-12 mb-12 md:mb-16">
          {featuredProjects.map((project) => {
            const translation = t.work.projects[project.index];
            return (
              <div key={project.id} data-work-card className="group">

                {/* Image — 16:9, object-top so we see the top of the screenshot */}
                <div
                  data-work-img
                  className="relative overflow-hidden bg-[#e8e4de] mb-4"
                  style={{ clipPath: 'inset(0% 0% 0% 0%)', aspectRatio: '16/9' }}
                >
                  <Image
                    src={project.image!}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Hover overlay */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/45 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label={`Visit ${project.name}`}
                    >
                      <span className="flex items-center gap-2 text-white text-[12px] tracking-[0.08em] uppercase border border-white/60 px-5 py-2.5">
                        <ExternalLink size={11} strokeWidth={1.5} />
                        {t.work.view_project}
                      </span>
                    </a>
                  )}
                </div>

                {/* Info */}
                <div data-work-info className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-baseline flex-wrap gap-2 mb-1">
                      <h3 className="text-[15px] md:text-[16px] font-light text-[#1a1a1a] tracking-tight">
                        {translation?.name ?? project.name}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.08em] text-[#9a9a9a] uppercase">
                        {translation?.category ?? project.category}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#7a7a7a] leading-relaxed line-clamp-2">
                      {translation?.description ?? project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] tracking-[0.05em] text-[#9a9a9a] border border-[#e0dbd3] px-1.5 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="shrink-0 text-[#c0bbb4] hover:text-[#1a1a1a] transition-colors duration-300 mt-0.5"
                    >
                      <ExternalLink size={14} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Text-only projects */}
        {textProjects.length > 0 && (
          <div className="flex flex-col border-t border-[#e0dbd3]">
            {textProjects.map((project) => {
              const translation = t.work.projects[project.index];
              return (
                <div
                  key={project.id}
                  data-work-card
                  className="border-b border-[#e0dbd3] py-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start"
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2.5 mb-1">
                      <h3 className="text-[16px] font-light text-[#1a1a1a] tracking-tight">
                        {translation?.name ?? project.name}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.08em] text-[#9a9a9a] uppercase">
                        {translation?.category ?? project.category}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#6a6a6a] leading-relaxed max-w-2xl">
                      {translation?.description ?? project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] tracking-[0.05em] text-[#9a9a9a] border border-[#e0dbd3] px-1.5 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="font-mono text-[10px] tracking-[0.1em] text-[#9a9a9a] uppercase mb-1">
                      {t.work.role_label}
                    </p>
                    <p className="text-[12px] text-[#5a5a5a]">
                      {translation?.role ?? project.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
