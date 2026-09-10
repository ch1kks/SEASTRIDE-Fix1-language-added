import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  variant?: "badge" | "compact" | "dropdown" | "pills";
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = "compact",
  className = "",
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === "pills") {
    return (
      <div className={`flex items-center bg-[#1a0f0d] p-1 rounded-xl border-2 border-[#4a2c17] gap-1 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 ${
            language === "en"
              ? "bg-[#93bb44] text-white border-b-2 border-[#658627] shadow-sm"
              : "text-amber-200/70 hover:text-white"
          }`}
        >
          <span>🇬🇧</span>
          <span>English</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage("vi")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 ${
            language === "vi"
              ? "bg-[#93bb44] text-white border-b-2 border-[#658627] shadow-sm"
              : "text-amber-200/70 hover:text-white"
          }`}
        >
          <span>🇻🇳</span>
          <span>Tiếng Việt</span>
        </button>
      </div>
    );
  }

  // Compact toggle button with flag & code
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      title={language === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
      className={`group flex items-center justify-center gap-1.5 bg-[#4a2c17] hover:bg-[#8b5a33] border-b-[3px] border-[#2b1d19] hover:border-[#4a2c17] text-[#fde68a] px-2.5 py-1 sm:py-1.5 rounded-lg active:scale-95 transition-all text-xs font-black shadow-sm select-none ${className}`}
    >
      <span className="text-sm leading-none">{language === "vi" ? "🇻🇳" : "🇬🇧"}</span>
      <span className="font-mono font-black text-[11px] uppercase tracking-wider">
        {language === "vi" ? "VI" : "EN"}
      </span>
    </button>
  );
};
