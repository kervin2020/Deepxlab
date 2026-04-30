"use client";

import { useT } from "@/i18n/provider";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";

/* CTA — cinematic hook before the contact form. Just the giant slogan
   "If we can modernise the infrastructure of a nation, imagine what
   we can do for your business." + a single magnetic button that
   anchors down to the contact form. No duplicated email cards. */
export default function CTA() {
  const { t } = useT();

  return (
    <section
      id="cta"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--section-veil)" }}
    >
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-12 text-center">
        <RevealText
          as="h2"
          text={t.cta_giant_1}
          className="block text-[clamp(1.6rem,3.2vw,3rem)] tracking-[-0.02em] leading-[1.1] font-medium text-[var(--text-muted)] mb-3 max-w-5xl mx-auto"
        />
        <RevealText
          as="h2"
          text={t.cta_giant_2}
          className="block text-[clamp(2rem,5vw,5rem)] tracking-[-0.03em] leading-[1.0] font-bold uppercase text-[var(--text)] mb-2 max-w-5xl mx-auto"
        />
        <RevealText
          as="h2"
          text={t.cta_giant_3}
          className="block text-[clamp(2rem,5vw,5rem)] tracking-[-0.03em] leading-[1.0] font-bold uppercase mb-12 max-w-5xl mx-auto"
        />
        <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] max-w-2xl mx-auto leading-[1.7] mb-12">
          {t.prob_title} <span className="text-[var(--text)]">{t.prob_sub}</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <MagneticButton strength={0.3} radius={120}>
            <a
              href="#contact"
              data-cursor
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white text-[13px] uppercase tracking-[0.05em] font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.cta_btn_primary}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.22} radius={90}>
            <a
              href="#departments"
              data-cursor
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--text)] text-[var(--text)] text-[13px] uppercase tracking-[0.05em] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300"
            >
              {t.cta_btn_secondary}
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
