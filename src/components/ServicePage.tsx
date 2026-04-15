"use client";

import Link from "next/link";
import { useT } from "@/i18n/provider";

type ServiceKey = "svc_dev" | "svc_stem" | "svc_consulting";

export default function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const { t } = useT();
  const s = t[serviceKey];

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)] overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="absolute inset-0 spotlight pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] text-ash hover:text-[var(--accent)] mb-10 uppercase tracking-[0.2em] font-mono transition-colors"
          >
            <span>←</span>
            <span>{t.svc_back}</span>
          </Link>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                <span>{s.hero_tag}</span>
              </div>
            </div>
            <div className="md:col-span-9">
              <h1 className="text-4xl md:text-[72px] tracking-[-0.035em] leading-[0.98] font-medium max-w-4xl">
                {s.hero_title}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ash max-w-2xl leading-relaxed">
                {s.hero_sub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                <span>{t.svc_offerings}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {s.offerings.map((o, i) => (
              <div
                key={o.t}
                className="bg-[var(--bg)] p-8 md:p-10 min-h-[220px] flex flex-col"
              >
                <div className="text-[11px] font-mono text-[var(--accent)] tracking-[0.2em] mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl md:text-[22px] tracking-[-0.02em] leading-tight font-medium mb-3 text-bone">
                  {o.t}
                </h3>
                <p className="text-[14px] text-ash leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg-elev)] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                <span>{t.svc_process}</span>
              </div>
            </div>
            <div className="md:col-span-9">
              <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {s.process.map((step, i) => (
                  <li
                    key={step}
                    className="py-6 md:py-8 flex items-start gap-6 md:gap-10"
                  >
                    <span className="text-[13px] font-mono text-[var(--accent)] tracking-[0.2em] pt-1 w-12 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg md:text-xl text-bone leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                <span>{t.svc_pricing}</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {s.pricing.map((p) => (
              <div
                key={p.t}
                className="bg-[var(--bg)] p-8 md:p-10 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <h3 className="text-[13px] text-ash uppercase tracking-[0.18em] font-mono mb-5">
                    {p.t}
                  </h3>
                  <p className="text-2xl md:text-[28px] tracking-[-0.02em] leading-tight font-medium text-bone">
                    {p.d}
                  </p>
                </div>
                <p className="mt-6 text-[12px] text-ash leading-relaxed">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)]" />
                <span>{t.svc_faq}</span>
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {s.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group py-6 md:py-8"
                  >
                    <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                      <h3 className="text-lg md:text-xl text-bone leading-tight font-medium">
                        {f.q}
                      </h3>
                      <span className="text-[var(--accent)] text-xl leading-none mt-1 group-open:rotate-45 transition-transform duration-300 flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[15px] text-ash leading-relaxed max-w-3xl">
                      {f.r}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg-elev)] py-24 md:py-32 overflow-hidden">
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
              <h2 className="text-4xl md:text-6xl tracking-[-0.035em] leading-[0.98] font-medium max-w-3xl">
                {t.svc_contact_cta}
              </h2>
              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <a
                  href="mailto:contact@deepxlab.com"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-[var(--accent)] text-black hover:bg-[var(--text)] transition-all duration-300"
                >
                  <span className="text-[14px] font-medium">
                    {t.cta_btn}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 text-bone hover:text-bone transition-colors"
                >
                  <span className="text-[14px] relative">
                    {t.svc_back}
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
