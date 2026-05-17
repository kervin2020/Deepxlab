"use client";

import { useEffect, useRef, useState } from "react";

// Honest, verifiable KPIs for a young startup (founded 2026).
// No inflated claims — every number can be checked against reality.
// Labels and sub-labels are defined here directly to keep the four KPIs
// independent from the project list (cases_items).
const numericTargets = [
  { value: 5, suffix: "+", color: "var(--accent)", label: "Projets livrés", sub: "Premiers clients Haïti × diaspora" },
  { value: 2, suffix: "", color: "var(--accent-2)", label: "Expertises actives", sub: "Software & Digital · STEM Education" },
  { value: 4, suffix: "", color: "var(--accent)", label: "Langues opérationnelles", sub: "Français · Kreyòl · English · Español" },
  { value: 2026, suffix: "", color: "var(--accent-2)", label: "Année de fondation", sub: "Port-au-Prince × Boston" },
];

function Counter({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!triggered) return;
    const start = Date.now();
    const duration = 2000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // power2.out easing
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target]);

  const formatted = count >= 1000000
    ? (count / 1000000).toFixed(1).replace(".", ",") + "M"
    : count >= 10000
    ? count.toLocaleString("fr-FR")
    : count.toString();

  return <>{formatted}{suffix}</>;
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const stats = numericTargets;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Subtle dark veil so numbers read clearly over the 3D scene */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--section-veil)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">02</span>
          <span className="w-12 h-px bg-[var(--border-strong)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">Impact mesurable</span>
        </div>

        {/* Stats grid — translucent cards so 3D scene shows through */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.04)]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[340px] group cursor-default"
              style={{
                background: "var(--card-veil)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--card-veil-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card-veil)")}
            >
              {/* Index */}
              <span
                className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                {String(i + 1).padStart(2, "0")} / 04
              </span>

              {/* Giant number */}
              <div
                className="counter-num leading-none font-bold"
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  color: triggered ? s.color : "transparent",
                  WebkitTextStroke: triggered ? "0" : `1px ${s.color}`,
                  transform: triggered ? "translateY(0)" : "translateY(20px)",
                  opacity: triggered ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                }}
              >
                <Counter target={s.value} suffix={s.suffix} triggered={triggered} />
              </div>

              {/* Labels */}
              <div>
                <div className="text-[13px] md:text-[15px] text-[var(--text)] font-medium leading-tight mb-2">
                  {s.label}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-[0.15em]">
                  {s.sub}
                </div>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: s.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
