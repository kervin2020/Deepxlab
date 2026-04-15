"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";

export default function Methodology() {
  const { t } = useT();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progressed = Math.min(1, Math.max(0, -rect.top / total));
      setActive(Math.floor(progressed * t.meth_steps.length));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.meth_steps.length]);

  return (
    <section
      id="methodologie"
      ref={ref}
      className="relative border-t border-[var(--border)] bg-[var(--bg)] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.meth_section}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-[64px] tracking-[-0.03em] leading-[0.98] font-medium max-w-4xl">
              {t.meth_title}
            </h2>
            <p className="mt-6 text-lg text-ash max-w-2xl leading-relaxed">
              {t.meth_desc}
            </p>
          </div>
        </div>

        {/* 16 steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {t.meth_steps.map((step, i) => (
            <div
              key={step.n}
              className={`group relative bg-[var(--bg)] p-6 md:p-7 min-h-[200px] flex flex-col justify-between transition-all duration-500 hover-lift ${
                i === active ? "bg-[var(--bg-elev)]" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`text-[11px] font-mono tracking-[0.15em] transition-colors ${
                  i === active ? "text-[var(--accent)]" : "text-ash"
                }`}>
                  {step.n}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === active ? "bg-[var(--accent)] scale-150" : "bg-[var(--text-muted)]"
                }`} />
              </div>
              <div>
                <h3 className="text-[17px] md:text-[19px] font-medium leading-tight mb-2 text-bone">
                  {step.t}
                </h3>
                <p className="text-[13px] text-ash leading-relaxed">
                  {step.d}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-700"
                style={{ width: i <= active ? "100%" : "0%" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
