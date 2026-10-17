"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICE_NUMBERS = ["1", "2", "3", "4"];

export function Specialty() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll("[data-service-card]");
      cards?.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: 28,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="specialty"
      className="bg-[#1a1a1a] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Specialty"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading={t.specialty.heading}
          subheading={t.specialty.subheading}
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {t.specialty.services.map((service, i) => (
            <div
              key={i}
              data-service-card
              className="border-t border-[#2e2e2e] pt-8 pr-8 pb-10 group"
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-[#4a4a4a] mb-6 block">
                {SERVICE_NUMBERS[i]}
              </span>
              <h3 className="text-[17px] md:text-[18px] font-light text-[#f5f3ef] leading-snug tracking-tight mb-4 group-hover:text-[#c8c4be] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
