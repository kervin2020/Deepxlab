"use client";

import { useT } from "@/i18n/provider";

export default function Divisions() {
  const { t } = useT();

  return (
    <section
      id="divisions"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.div_section}</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            {t.div_title.split(".")[0]}.
            <br />
            <span className="text-ash">{t.div_title.split(".")[1]?.trim()}.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--bg-elev-2)]">
          {t.div_items.map((d, i) => (
            <div
              key={i}
              className="division-card group relative bg-[var(--bg)] border border-transparent p-8 md:p-10 min-h-[480px] flex flex-col cursor-default overflow-hidden"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-[11px] text-ash tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <span className="arrow text-ash text-sm">→</span>
              </div>

              <h3 className="text-2xl md:text-[28px] font-medium tracking-[-0.02em] leading-[1.1] mb-5">
                {d.name}
              </h3>
              <p className="text-[14px] text-ash leading-relaxed max-w-sm mb-8">
                {d.desc}
              </p>

              <div className="bar w-8 h-px bg-[var(--border-strong)] mb-5" />

              <ul className="space-y-2.5 text-[13px] text-bone leading-snug">
                {d.services.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-ash/60 mt-[2px]">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
