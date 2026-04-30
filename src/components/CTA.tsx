"use client";

import { useT } from "@/i18n/provider";

export default function CTA() {
  const { t } = useT();

  return (
    <section
      id="cta"
      className="relative py-40 md:py-56 border-t border-[var(--border)] overflow-hidden"
      style={{ background: "rgba(5,5,5,0.65)" }}
    >
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.cta_section}</span>
            </div>
          </div>

          <div className="md:col-span-9">
            <p className="text-2xl md:text-[32px] leading-tight tracking-[-0.02em] font-medium text-ash mb-10 max-w-3xl">
              {t.prob_title}{" "}
              <span className="text-bone">{t.prob_sub}</span>
            </p>

            <h2 className="text-5xl md:text-8xl tracking-[-0.04em] leading-[0.92] font-medium max-w-4xl">
              {t.cta_title_1}
              <br />
              <span className="text-ash">{t.cta_title_2}</span>
            </h2>

            <p className="mt-10 text-lg md:text-xl text-bone max-w-xl leading-relaxed">
              {t.cta_desc}
            </p>

            <div className="mt-14 flex flex-wrap gap-6 items-center">
              <a
                href="mailto:contact@deepxlab.com"
                className="group relative inline-flex items-center gap-4 px-8 py-5 bg-[var(--accent)] text-black hover:bg-[var(--text)] transition-all duration-300"
              >
                <span className="text-[14px] font-medium">
                  {t.cta_btn}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#divisions"
                className="group inline-flex items-center gap-3 text-bone hover:text-bone transition-colors"
              >
                <span className="text-[14px] relative">
                  {t.cta_link}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </span>
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl">
              {t.cta_contacts.map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="group block p-5 border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="text-[11px] text-ash uppercase tracking-[0.18em] mb-2">
                    {c.label}
                  </div>
                  <div className="text-bone text-[14px] break-all group-hover:text-[var(--accent)] transition-colors">
                    {c.email}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
