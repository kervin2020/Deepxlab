"use client";

import { useT } from "@/i18n/provider";

export default function CaseStudies() {
  const { t } = useT();

  return (
    <section
      id="references"
      className="relative border-t border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.cases_section}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-[64px] tracking-[-0.03em] leading-[0.98] font-medium max-w-4xl">
              {t.cases_title}
            </h2>
            <p className="mt-6 text-[14px] text-ash max-w-xl leading-relaxed uppercase tracking-wider">
              {t.cases_desc}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
          {t.cases_items.map((c, i) => (
            <article
              key={i}
              className="group relative bg-[var(--bg)] p-8 md:p-10 hover-lift min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] font-mono">
                    {c.tag}
                  </span>
                  <span className="text-[11px] text-ash font-mono">
                    {String(i + 1).padStart(2, "0")} / {String(t.cases_items.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl md:text-[32px] tracking-[-0.02em] leading-tight font-medium mb-4 text-bone">
                  {c.title}
                </h3>
                <p className="text-[14px] text-ash leading-relaxed max-w-lg">
                  {c.desc}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-1">Impact</div>
                <div className="text-[20px] md:text-[24px] font-medium text-bone tracking-[-0.01em]">
                  {c.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
