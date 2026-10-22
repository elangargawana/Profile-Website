"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(detailsRef.current, {
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#1a1a1a] py-24 md:py-32 px-6 md:px-10 lg:px-16"
      aria-label="Contact"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headRef}>
          <h2 className="text-[clamp(32px,5vw,72px)] font-light tracking-[-0.02em] text-[#f5f3ef] leading-tight mb-6">
            {t.contact.heading}
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#7a7a7a] leading-relaxed max-w-xl mb-12 md:mb-16">
            {t.contact.description}
          </p>

          <a
            href="mailto:elangargawana.15@gmail.com"
            className="inline-flex items-center gap-3 text-[#f5f3ef] text-[13px] tracking-[0.08em] uppercase border border-[#3a3a3a] px-6 py-3.5 hover:bg-[#f5f3ef] hover:text-[#1a1a1a] hover:border-[#f5f3ef] transition-all duration-300"
          >
            <Mail size={14} strokeWidth={1.5} />
            {t.contact.cta}
          </a>
        </div>

        <div
          ref={detailsRef}
          className="mt-20 md:mt-24 pt-10 border-t border-[#2a2a2a] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* Email */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] text-[#4a4a4a] uppercase mb-2">
              {t.contact.email_label}
            </p>
            <a
              href="mailto:elangargawana.15@gmail.com"
              className="text-[14px] text-[#9a9a9a] hover:text-[#f5f3ef] transition-colors duration-300 break-all"
            >
              elangargawana.15@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] text-[#4a4a4a] uppercase mb-2">
              {t.contact.phone_label}
            </p>
            <a
              href="tel:+6282134081213"
              className="text-[14px] text-[#9a9a9a] hover:text-[#f5f3ef] transition-colors duration-300"
            >
              +62 821-3408-1213
            </a>
          </div>

          {/* Location */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] text-[#4a4a4a] uppercase mb-2">
              {t.contact.location_label}
            </p>
            <p className="text-[14px] text-[#9a9a9a] flex items-start gap-1.5">
              <MapPin size={12} strokeWidth={1.5} className="mt-0.5 shrink-0" />
              Semarang, Central Java, Indonesia
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] text-[#4a4a4a] uppercase mb-2">
              Links
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/elangargawana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#9a9a9a] hover:text-[#f5f3ef] transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink size={12} strokeWidth={1.5} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/elang-argawana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#9a9a9a] hover:text-[#f5f3ef] transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink size={12} strokeWidth={1.5} />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/elngargwna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#9a9a9a] hover:text-[#f5f3ef] transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink size={12} strokeWidth={1.5} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
