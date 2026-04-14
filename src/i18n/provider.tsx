"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { dictionaries, type Lang, type Dict } from "./translations";

type Ctx = { t: Dict; lang: Lang; setLang: (l: Lang) => void };

const I18nCtx = createContext<Ctx>({
  t: dictionaries.FR,
  lang: "FR",
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>("FR");

  const setLang = useCallback((l: Lang) => {
    setLangRaw(l);
    document.documentElement.lang = l === "FR" ? "fr" : l === "EN" ? "en" : l === "ES" ? "es" : "ht";
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
