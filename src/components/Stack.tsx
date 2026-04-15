"use client";

import { useT } from "@/i18n/provider";

export default function Stack() {
  const { t } = useT();

  return (
    <section
      id="stack"
      className="relative border-t border-[var(--border)] bg-[var(--bg)] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.stack_section}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-[64px] tracking-[-0.03em] leading-[0.98] font-medium max-w-4xl">
              {t.stack_title}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {t.stack_groups.map((g) => (
            <div
              key={g.name}
              className="group bg-[var(--bg)] p-8 min-h-[220px] hover-lift"
            >
              <div className="text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] font-mono mb-6">
                {g.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[13px] border border-[var(--border-strong)] text-bone hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
