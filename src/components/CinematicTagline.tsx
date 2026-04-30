"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "SIX EXPERTISES.", dir: "left" as const },
  { text: "UNE ÉQUIPE.", dir: "right" as const },
  { text: "ZÉRO COMPROMIS.", dir: "up" as const, accent: true },
];

export default function CinematicTagline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center text-center px-5 md:px-12 overflow-hidden"
      style={{
        minHeight: "60vh",
        background: "transparent",
      }}
    >
      {/* Soft veil so the tagline reads cleanly over the 3D */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(5,5,5,0.55) 0%, transparent 80%)",
      }} />

      <div className="relative z-10">
        {lines.map((line, i) => (
          <div
            key={i}
            className="overflow-hidden block"
            style={{ marginBottom: i < lines.length - 1 ? "0.05em" : 0 }}
          >
            <span
              className="block font-bold uppercase"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontSize: "clamp(2.2rem, 7vw, 7.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: line.accent ? "var(--accent)" : "var(--text)",
                transform: visible
                  ? "translate(0,0)"
                  : line.dir === "left"
                  ? "translateX(-80px)"
                  : line.dir === "right"
                  ? "translateX(80px)"
                  : "translateY(60px)",
                opacity: visible ? 1 : 0,
                transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.2}s, opacity 0.8s ease ${i * 0.2}s`,
              }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
