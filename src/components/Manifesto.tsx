"use client";

import { useT } from "@/i18n/provider";

export default function Manifesto() {
  const { t } = useT();

  return (
    <section className="relative py-32 md:py-48 border-t border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.man_section}</span>
            </div>
          </div>

          <div className="md:col-span-9">
            <p className="text-3xl md:text-[44px] tracking-[-0.025em] leading-[1.15] font-medium text-bone">
              {t.man_text_1}
              <span className="text-ash">
                {" "}
                {t.man_text_2}
              </span>
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-10 pt-10 border-t border-[var(--border-strong)]">
              {t.man_pillars.map((pillar, i) => (
                <div key={i}>
                  <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-3">
                    {pillar.title}
                  </div>
                  <p className="text-[14px] text-bone leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
