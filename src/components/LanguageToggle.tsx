"use client";

import { languages } from "@/data/i18n";
import { useLanguage } from "@/context/LanguageContext";

const labels: Record<string, string> = {
  az: "AZ",
  ru: "RU",
};

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="glass-card flex items-center gap-0.5 rounded-full p-0.5">
      {languages.map((code) => {
        const isActive = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
              isActive
                ? "bg-gold text-black"
                : "text-text-secondary hover:text-foreground"
            }`}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
