"use client";

import { useT } from "@/i18n/provider";

/* Infinite horizontal marquee of expertise tags. Adds a subtle
   "live" feel between hero and stats sections. CSS-only animation
   with two duplicated tracks for seamless looping. */
export default function ExpertiseMarquee() {
  const { t } = useT();
  // Use existing marquee_items from translations
  const items = t.marquee_items || [];

  return (
    <section
      className="relative overflow-hidden border-y border-[var(--border)] py-6 md:py-8"
      style={{ background: "var(--section-veil)" }}
      aria-hidden
    >
      <div className="flex marquee-track gap-12 md:gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-[12px] md:text-[14px] uppercase tracking-[0.18em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[var(--text)] font-medium">{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
