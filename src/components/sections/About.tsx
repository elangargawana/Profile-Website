"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(photoRef.current, {
        scrollTrigger: {
          trigger: photoRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        clipPath: "inset(20% 0% 20% 0%)",
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
      });

      if (!textRef.current) return;
      const paras = textRef.current.querySelectorAll("p");
      paras.forEach((p, i) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
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
        <SectionHeading heading={t.about.heading} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[360px_1fr] gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left: Profile photo — using elang.svg */}
          <div
            ref={photoRef}
            className="relative overflow-hidden bg-[#e8e4de]"
            style={{ clipPath: "inset(0% 0% 0% 0%)", aspectRatio: "3/4" }}
          >
            <Image
              src="/elang.svg"
              alt={t.about.photo_alt}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover object-center"
            />
          </div>

          {/* Right: Text */}
          <div ref={textRef} className="flex flex-col gap-5 pt-0 md:pt-2">
            {t.about.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-[1.8] ${
                  i === 0
                    ? "text-[18px] md:text-[20px] text-[#1a1a1a] font-light"
                    : "text-[15px] text-[#5a5a5a]"
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
