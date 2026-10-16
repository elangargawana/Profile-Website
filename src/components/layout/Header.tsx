'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import type { Language } from '@/i18n/types';

const NAV_LINKS = [
  { key: 'work' as const, href: '#work' },
  { key: 'about' as const, href: '#about' },
  { key: 'experience' as const, href: '#experience' },
  { key: 'contact' as const, href: '#contact' },
];

const LANGS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
  { code: 'jp', label: 'JP' },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-[#e8e4de]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-serif text-[15px] tracking-[0.12em] uppercase text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300"
              aria-label="Elang Argawana — Home"
            >
              Elang Argawana
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(({ key, href }) => (
                <button
                  key={key}
                  onClick={() => handleNavClick(href)}
                  className="text-[13px] tracking-[0.08em] uppercase text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors duration-300 cursor-pointer"
                >
                  {t.nav[key]}
                </button>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Language switcher */}
              <div
                className="flex items-center gap-1"
                role="group"
                aria-label="Language selector"
              >
                {LANGS.map(({ code, label }, i) => (
                  <span key={code} className="flex items-center">
                    <button
                      onClick={() => setLanguage(code)}
                      aria-pressed={language === code}
                      aria-label={`Switch to ${label}`}
                      className={`text-[11px] tracking-[0.06em] transition-colors duration-300 px-0.5 ${
                        language === code
                          ? 'text-[#1a1a1a] font-medium'
                          : 'text-[#9a9a9a] hover:text-[#5a5a5a]'
                      }`}
                    >
                      {label}
                    </button>
                    {i < LANGS.length - 1 && (
                      <span className="text-[#d0ccc6] text-[10px] ml-1">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 -mr-2 text-[#1a1a1a] hover:opacity-60 transition-opacity"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span className="flex flex-col gap-[5px] w-5">
                  <span
                    className={`block h-px bg-current transition-all duration-300 origin-center ${
                      menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-px bg-current transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-px bg-current transition-all duration-300 origin-center ${
                      menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f5f3ef] flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNavClick(href)}
              tabIndex={menuOpen ? 0 : -1}
              className="text-left text-3xl font-light text-[#1a1a1a] hover:opacity-50 transition-opacity tracking-tight"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
