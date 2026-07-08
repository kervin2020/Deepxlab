"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { dictionaries, type Lang, type Dict } from "./translations";

const LANG_KEY = "deepxlab-lang";

function htmlLang(l: Lang) {
  return l === "FR" ? "fr" : l === "EN" ? "en" : l === "ES" ? "es" : "ht";
}

type Ctx = { t: Dict; lang: Lang; setLang: (l: Lang) => void };

const I18nCtx = createContext<Ctx>({
  t: dictionaries.FR,
  lang: "FR",
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>("FR");

  // Restore the visitor's language on load (state-only lang used to reset
  // to FR on every full page load).
  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    if (saved && saved in dictionaries && saved !== "FR") {
      setLangRaw(saved);
      document.documentElement.lang = htmlLang(saved);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangRaw(l);
    localStorage.setItem(LANG_KEY, l);
    document.documentElement.lang = htmlLang(l);
  }, []);

  return (
    <I18nCtx.Provider value={{ t: dictionaries[lang], lang, setLang }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useT() {
  return useContext(I18nCtx);
}
