'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#e8e4de] bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[13px] tracking-[0.08em] uppercase text-[#1a1a1a]">
              Elang Argawana
            </p>
            <p className="text-[12px] text-[#9a9a9a] mt-1">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:elangargawana.15@gmail.com"
              aria-label="Email"
              className="text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors duration-300"
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/elangargawana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[11px] tracking-[0.06em] text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-1"
            >
              GitHub <ExternalLink size={10} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/elang-argawana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[11px] tracking-[0.06em] text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-1"
            >
              LinkedIn <ExternalLink size={10} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-[12px] text-[#b8b4ae]">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
