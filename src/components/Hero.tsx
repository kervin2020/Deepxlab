"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";
import MagneticButton from "./MagneticButton";

/* Word-by-word animated title — staggered y/blur entrance.
   Uses flex with explicit gap so word spacing is GUARANTEED
   (avoids the inline-block whitespace-collapsing bug that was
   rendering "FROMUNKNOWN" as a single token). */
function AnimatedTitle({
  lines,
}: {
  lines: { text: string; accent?: boolean }[][];
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  let wordIndex = 0;
  return (
    <h1
      className="text-[clamp(2.4rem,8.2vw,8.5rem)] leading-[0.95] tracking-[-0.02em] font-bold uppercase"
      style={{ fontFamily: '"Clash Display", sans-serif' }}
    >
      {lines.map((line, li) => (
        <span
          key={li}
          className="flex flex-wrap items-end overflow-hidden"
          style={{ columnGap: "0.28em", rowGap: "0.05em" }}
        >
          {line.map((segment, si) => {
            const words = segment.text.split(/\s+/).filter(Boolean);
            return words.map((word) => {
              const wi = wordIndex++;
              const delay = wi * 0.08 + 0.4;
              return (
                <span
                  key={`${li}-${si}-${wi}`}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <span
                    className="inline-block"
                    style={{
                      transform: ready ? "translateY(0)" : "translateY(110%)",
                      opacity: ready ? 1 : 0,
                      filter: ready ? "blur(0)" : "blur(8px)",
                      transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 1s ease ${delay}s, filter 0.7s ease ${delay}s`,
                      color: segment.accent ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    {word}
                  </span>
                </span>
              );
            });
          })}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax: subtle vertical offset on scroll for the title
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Brand slogan — localised per language (slogan_l1 / slogan_l2 in translations.ts)
  const titleLines: { text: string; accent?: boolean }[][] = [
    [{ text: t.slogan_l1 }],
    [{ text: t.slogan_l2, accent: true }],
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Subtle film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.025,
          mixBlendMode: "overlay",
        }}
      />

      {/* Subtle grid overlay (blueprint feel) */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Subtle vignette so text reads against the 3D scene */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, var(--soft-veil) 0%, transparent 70%)",
        }}
      />

      {/* Top-left brand tag */}
      <div className="absolute top-[100px] md:top-[120px] left-5 md:left-12 z-40 reveal">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Boston · Port-au-Prince
          </span>
        </div>
      </div>


      {/* Main content */}
      <div className="relative z-30 max-w-[1440px] mx-auto px-5 md:px-12 pt-[180px] md:pt-[220px] pb-24 min-h-screen flex flex-col justify-between">
        <div
          style={{
            transform: `translateY(${-scrollY * 0.15}px)`,
            willChange: "transform",
          }}
        >
          {/* Giant title */}
          <AnimatedTitle lines={titleLines} />

          {/* Subtitle + CTA row */}
          <div
            className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 max-w-6xl"
            style={{ animation: "fade-in-up 1s ease 1.2s both" }}
          >
            <div className="md:col-span-6 md:col-start-1">
              <p className="text-[16px] md:text-[19px] text-[var(--text-muted)] leading-[1.7] mb-8 max-w-md">
                <span className="text-[var(--text)]" style={{ fontFamily: '"Clash Display", sans-serif', letterSpacing: "0.02em" }}>
                  {t.hero_overline}
                </span>
                <br />
                <span className="text-[var(--text-muted)]">{t.hero_desc}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <MagneticButton strength={0.32} radius={120}>
                  <a
                    href="#impact"
                    className="group relative inline-flex items-center gap-3 px-7 py-4 border border-[var(--text)] text-[var(--text)] transition-colors duration-300 text-[13px] tracking-[0.05em] uppercase font-medium overflow-hidden"
                    data-cursor
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="absolute inset-0 bg-[var(--text)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="relative group-hover:text-[var(--bg)] transition-colors duration-300">
                      {t.hero_cta_primary}
                    </span>
                    <span className="relative group-hover:text-[var(--bg)] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25} radius={90}>
                  <a
                    href="#departements"
                    className="group inline-flex items-center gap-3 px-7 py-4 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300 text-[13px] tracking-[0.05em] uppercase"
                    data-cursor
                  >
                    {t.hero_cta_secondary}
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-3 mx-auto"
          style={{
            animation: "fade-in-up 0.8s ease 1.8s both",
            opacity: scrolled ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Scroll
          </span>
          <div className="w-px h-10 bg-[var(--border-strong)] overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-full bg-[var(--accent)] scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
