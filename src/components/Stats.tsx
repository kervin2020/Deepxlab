"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "06", label: "Divisions\nspécialisées" },
  { value: "04", label: "Langues\nopérationnelles" },
  { value: "02", label: "Pays\nbases" },
  { value: "∞", label: "Ambitions\nsans limites" },
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
      className="relative py-32 md:py-48 border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] text-ash uppercase tracking-widest mb-12 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00FF94]" />
          <span>04 / DeepXlab en chiffres</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0A0A0B] p-8 md:p-10 min-h-[260px] flex flex-col justify-between group hover:bg-[#10100d] transition-colors"
            >
              <span className="font-mono text-[10px] text-ash">
                {String(i + 1).padStart(2, "0")} / 04
              </span>
              <div
                className={`text-7xl md:text-9xl font-medium tracking-[-0.05em] leading-none transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {s.value}
              </div>
              <div className="font-mono text-[11px] text-ash uppercase tracking-widest whitespace-pre-line">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
