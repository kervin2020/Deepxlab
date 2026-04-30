"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    letter: "R",
    title: "Rigueur",
    desc: "Chaque livrable est documenté, testé et signé. La qualité n'est pas un objectif — c'est une condition.",
  },
  {
    letter: "A",
    title: "Autonomie",
    desc: "Nos clients ne dépendent pas d'une boîte noire. Nous formons leurs équipes et transmettons la maîtrise.",
  },
  {
    letter: "E",
    title: "Engagement",
    desc: "Nous restons aux côtés de nos clients sur le long terme. Un déploiement n'est jamais une fin de relation.",
  },
];

export default function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-40 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "transparent" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(5,5,5,0.55)" }} />
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">05</span>
          <span className="w-12 h-px bg-[var(--border-strong)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">Nos valeurs</span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)]">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="relative p-8 md:p-12 group transition-colors duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(7,7,15,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(5,5,5,0.55)")}
              style={{
                background: "rgba(5,5,5,0.55)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, background 0.3s ease`,
              }}
            >
              {/* Giant letter */}
              <div
                className="font-bold leading-none mb-8 group-hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontSize: "clamp(4rem, 8vw, 8rem)",
                  color: "var(--accent)",
                  opacity: 0.15,
                }}
              >
                {v.letter}
              </div>

              <h3
                className="text-[22px] font-bold mb-4 text-[var(--text)]"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                {v.title}
              </h3>

              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">
                {v.desc}
              </p>

              {/* Hover underline */}
              <div className="h-px bg-[var(--border)] mt-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--accent)] w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
