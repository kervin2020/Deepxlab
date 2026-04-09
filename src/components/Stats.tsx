"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "06", label: "Expertises\nintégrées" },
  { value: "04", label: "Langues\nopérationnelles" },
  { value: "24/7", label: "Continuité\nopérationnelle" },
  { value: "∞", label: "Déploiements\nsans frontière" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
          <span className="w-8 h-px bg-[var(--accent)]" />
          <span>Capacités</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--bg-elev-2)]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0A0A0B] p-8 md:p-10 min-h-[260px] flex flex-col justify-between group hover:bg-[var(--bg-elev-2)] transition-colors"
            >
              <span className="text-[10px] text-ash tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")} / 04
              </span>
              <div
                className={`text-7xl md:text-[140px] font-medium tracking-[-0.05em] leading-none transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-ash uppercase tracking-[0.2em] whitespace-pre-line">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
