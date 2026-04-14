"use client";

import { useT } from "@/i18n/provider";

export default function Marquee() {
  const { t } = useT();
  const items = t.marquee_items;
  const repeat = [...items, ...items];

  return (
    <section className="relative py-10 md:py-14 border-y border-[var(--border-strong)] bg-[var(--bg-elev)] overflow-hidden">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {repeat.map((it, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl md:text-4xl font-medium tracking-[-0.02em]">
            <span className="text-bone/90">{it}</span>
            <span className="text-[var(--accent)] text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
