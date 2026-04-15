"use client";

import Link from "next/link";
import { useT } from "@/i18n/provider";

export default function ServicesGrid() {
  const { t } = useT();

  return (
    <section
      id="services"
      className="relative border-t border-[var(--border)] bg-[var(--bg)] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.svc_section}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-[64px] tracking-[-0.03em] leading-[0.98] font-medium max-w-4xl">
              {t.svc_title}
            </h2>
            <p className="mt-6 text-lg text-ash max-w-2xl leading-relaxed">
              {t.svc_desc}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {t.svc_items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative bg-[var(--bg)] p-8 md:p-10 min-h-[420px] flex flex-col justify-between hover-lift transition-colors"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[11px] font-mono text-[var(--accent)] tracking-[0.2em]">
                    {s.tag}
                  </span>
                  <span className="w-8 h-8 border border-[var(--border-strong)] rounded-full flex items-center justify-center text-ash group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:rotate-45 transition-all duration-500">
                    →
                  </span>
                </div>
                <h3 className="text-2xl md:text-[28px] tracking-[-0.02em] leading-tight font-medium mb-4 text-bone group-hover:text-[var(--accent)] transition-colors">
                  {s.name}
                </h3>
                <p className="text-[14px] text-ash leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-[var(--border)]">
                <ul className="space-y-2 text-[13px] text-bone">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-[12px] text-[var(--accent)] uppercase tracking-[0.18em] font-mono">
                  {t.svc_cta} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
