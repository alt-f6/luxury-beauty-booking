"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Açıq temaya keç" : "Tünd temaya keç"}
      className="glass-card flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gold transition-colors hover:bg-gold/10"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
