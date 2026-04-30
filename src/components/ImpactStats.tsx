"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";

// Numeric metrics tied to verifiable case studies. Labels come from i18n
// (cases_items metric/title) so language changes propagate automatically.
const numericTargets = [
  { value: 4000000, suffix: "+", color: "var(--accent)", caseIdx: 0 },
  { value: 120, suffix: "+", color: "var(--accent-2)", caseIdx: 1 },
  { value: 800000, suffix: "+", color: "var(--accent)", caseIdx: 2 },
  { value: 45, suffix: "", color: "var(--accent-2)", caseIdx: 3 },
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
    : count >= 1000
    ? count.toLocaleString("fr-FR")
    : count.toString();

  return <>{formatted}{suffix}</>;
}

export default function ImpactStats() {
  const { t } = useT();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Compose stats from i18n: cases provide the metric label/title, stat_subs the sub-label
  const stats = numericTargets.map((nt, i) => {
    const c = t.cases_items?.[nt.caseIdx];
    return {
      ...nt,
      label: c?.metric || "",
      sub: t.stat_subs?.[i] || "",
    };
  });

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
                background: "rgba(5,5,5,0.55)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(7,7,15,0.75)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(5,5,5,0.55)")}
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
