import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import { Language, TranslationDictionary, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, params?: (string | number)[] | Record<string, any>) => string;
  strings: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "seastride_language";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "vi" || saved === "en") {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language?.toLowerCase() || "";
      if (browserLang.startsWith("vi")) {
        return "vi";
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch (e) {}
  }, [language]);

  const strings = useMemo(() => {
    return translations[language] || translations.en;
  }, [language]);

  const t = (path: string, params?: (string | number)[] | Record<string, any>): string => {
    const parts = path.split(".");
    let current: any = strings;

    for (const part of parts) {
      if (current && typeof current === "object" && part in current) {
        current = current[part];
      } else {
        // Fallback to English if key missing in current language
        let fallback: any = translations.en;
        for (const fallbackPart of parts) {
          if (fallback && typeof fallback === "object" && fallbackPart in fallback) {
            fallback = fallback[fallbackPart];
          } else {
            fallback = undefined;
            break;
          }
        }
        current = fallback !== undefined ? fallback : path;
        break;
      }
    }

    if (typeof current !== "string") {
      return path;
    }

    let result = current;
    if (params) {
      if (Array.isArray(params)) {
        params.forEach((param, index) => {
          result = result.replace(new RegExp(`\\{${index}\\}`, "g"), String(param));
        });
      } else if (typeof params === "object") {
        Object.entries(params).forEach(([key, val]) => {
          result = result.replace(new RegExp(`\\{${key}\\}`, "g"), String(val));
        });
      }
    }

    return result;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        strings,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
