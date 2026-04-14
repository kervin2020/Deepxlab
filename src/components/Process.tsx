"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";

export default function Process() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.proc_section}</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            {t.proc_title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className={`absolute left-[22px] md:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent origin-top transition-transform duration-[2000ms] ease-out ${
              visible ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <div className="space-y-10 md:space-y-12">
            {t.proc_steps.map((s, i) => (
              <div
                key={s.num}
                className={`relative grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Node */}
                <div className="relative">
                  <div className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] flex items-center justify-center relative z-10">
                    <span className="text-[11px] md:text-[13px] font-medium text-bone">
                      {s.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:pt-3">
                  <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-ash leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>

                {/* Duration badge */}
                <div className="col-span-2 md:col-span-1 md:pt-4 md:text-right">
                  <span className="inline-block text-[10px] text-ash uppercase tracking-[0.2em] border border-[var(--border-strong)] px-3 py-1.5">
                    {s.dur}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
