"use client";

import { useT } from "@/i18n/provider";

export default function Problem() {
  const { t } = useT();

  return (
    <section className="relative py-32 md:py-56 border-t border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden">
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Problématiques complexes</span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2 className="text-5xl md:text-[88px] leading-[0.92] tracking-[-0.04em] font-medium max-w-4xl">
              {t.prob_title.split(" ").slice(0, 5).join(" ")}
              <br />
              <span className="text-ash">{t.prob_title.split(" ").slice(5, 9).join(" ")}</span>
              <br />{t.prob_title.split(" ").slice(9).join(" ").replace(".", "")}<span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="mt-12 text-xl md:text-2xl text-bone leading-relaxed max-w-2xl">
              {t.prob_sub}
            </p>

            <p className="mt-6 text-[15px] md:text-base text-ash leading-relaxed max-w-2xl">
              Les projets refusés, abandonnés ou jugés impossibles sont notre
              terrain naturel. Nos équipes ont été formées pour intervenir
              là où les solutions standards ont échoué — par profondeur
              technique, capacité de recherche et engagement opérationnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
