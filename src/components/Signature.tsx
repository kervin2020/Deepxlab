"use client";

import { useT } from "@/i18n/provider";

export default function Signature() {
  const { t } = useT();

  return (
    <section
      id="signature"
      className="relative py-32 md:py-56 border-t border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-32">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Fondamentaux</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            Trois fondamentaux.
            <br />
            <span className="text-ash">Aucun compromis.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-40">
          {t.sig_pillars.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-8 md:gap-10 items-end"
            >
              <div className="md:col-span-7">
                <div className="text-[clamp(4rem,13vw,14rem)] leading-[0.8] font-medium tracking-[-0.06em] text-bone">
                  <span className="mask-letter">
                    <span style={{ animationDelay: `${i * 0.15}s` }}>
                      {p.letter}
                    </span>
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 md:pb-10">
                <div className="text-[10px] text-[var(--accent)] uppercase tracking-[0.25em] mb-4">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-5">
                  {p.sub}
                </h3>
                <p className="text-[15px] md:text-base text-bone leading-relaxed max-w-md">
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
