'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations, DICTIONARY } from './dictionary';

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt'); // Default optimistic to PT for Brazil
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 1. Check local storage preference
    const saved = localStorage.getItem('thisai_preferred_language') as Language | null;
    if (saved === 'pt' || saved === 'en') {
      setLanguageState(saved);
      setIsInitialized(true);
      return;
    }

    // 2. Detect region & browser locale
    try {
      const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      
      const isBrazilTimezone = timezone.startsWith('America/Sao_Paulo') ||
        timezone.startsWith('America/Recife') ||
        timezone.startsWith('America/Fortaleza') ||
        timezone.startsWith('America/Belem') ||
        timezone.startsWith('America/Manaus') ||
        timezone.startsWith('America/Cuiaba') ||
        timezone.startsWith('America/Campo_Grande') ||
        timezone.startsWith('America/Porto_Velho') ||
        timezone.startsWith('America/Rio_Branco') ||
        timezone.startsWith('America/Bahia');

      const isPtLocale = browserLang.startsWith('pt');

      if (isPtLocale || isBrazilTimezone) {
        setLanguageState('pt');
      } else {
        setLanguageState('en');
      }
    } catch {
      setLanguageState('pt');
    }
    
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('thisai_preferred_language', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
  };

  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
