"use client";

import { useT } from "@/i18n/provider";

export default function Products() {
  const { t } = useT();

  return (
    <section
      id="produits"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.prod_section}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
              {t.prod_title}
            </h2>
            <p className="mt-8 text-lg text-bone max-w-2xl leading-relaxed">
              En parallèle de ses services, DeepXlab développe ses propres
              kits, plateformes SaaS et systèmes propriétaires — disponibles
              à la vente, à l&apos;abonnement ou intégrés dans nos
              déploiements.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--bg-elev-2)]">
          {t.prod_items.map((p) => (
            <div
              key={p.id}
              className="group relative bg-[var(--bg)] p-8 min-h-[320px] flex flex-col justify-between hover:bg-[var(--bg-elev-2)] transition-colors duration-500 cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[10px] text-ash tracking-[0.2em]">
                    {p.id}
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.02em] leading-[1.15] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[13px] text-ash leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[10px] text-[var(--accent)] uppercase tracking-[0.2em]">
                  {p.id}
                </span>
                <span className="text-ash group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
