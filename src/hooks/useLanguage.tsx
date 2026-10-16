'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  startTransition,
  type ReactNode,
} from 'react';
import type { Language, Translations } from '@/i18n/types';
import { translations } from '@/i18n/translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // On mount, restore saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang') as Language | null;
      if (saved && (saved === 'en' || saved === 'id' || saved === 'jp')) {
        startTransition(() => {
          setLanguageState(saved);
        });
        document.documentElement.lang =
          saved === 'jp' ? 'ja' : saved === 'id' ? 'id' : 'en';
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      // localStorage not available
    }
    document.documentElement.lang =
      lang === 'jp' ? 'ja' : lang === 'id' ? 'id' : 'en';
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
