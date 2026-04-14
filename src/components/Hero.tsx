"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";

const rotating = [
  "Logiciel sur mesure",
  "Infrastructure IT",
  "Sécurité intelligente",
  "Recherche & R&D",
  "Plateformes SaaS",
  "Hardware industriel",
];

export default function Hero() {
  const { t } = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const [headline, setHeadline] = useState(0);

  const headlines = t.hero_lines;

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % rotating.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setHeadline((h) => (h + 1) % headlines.length), 3600);
    return () => clearInterval(id);
  }, [headlines.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const mouse = { x: w / 2, y: h / 2 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);

    const cols = Math.floor(w / 60);
    const rows = Math.floor(h / 60);
    const points: { x: number; y: number; ox: number; oy: number }[] = [];
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = (i * w) / cols;
        const y = (j * h) / rows;
        points.push({ x, y, ox: x, oy: y });
      }
    }

    let raf = 0;
    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        const dx = p.ox - mouse.x;
        const dy = p.oy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 200 - dist) / 200;
        const wave = Math.sin(t + p.ox * 0.01 + p.oy * 0.01) * 4;
        p.x = p.ox + (dx / (dist || 1)) * force * 30 + wave;
        p.y = p.oy + (dy / (dist || 1)) * force * 30 + wave;

        const alpha = 0.12 + force * 0.8;
        ctx.fillStyle =
          force > 0.3
            ? `rgba(0, 255, 148, ${alpha})`
            : `rgba(242, 240, 234, ${alpha * 0.3})`;
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden grid-bg pt-[68px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-16">
        {/* Top meta */}
        <div className="flex items-center gap-4 mb-12 md:mb-20 reveal">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
          <span className="text-[11px] uppercase tracking-[0.2em] shimmer-text">
            {t.hero_tag}
          </span>
        </div>

        {/* Title — rotating headline */}
        <h1 className="relative text-[clamp(2.5rem,7.6vw,7rem)] leading-[0.95] tracking-[-0.04em] font-medium max-w-[16ch] min-h-[1.9em] md:min-h-[2em]">
          {headlines.map((line, i) => (
            <span
              key={line}
              className={`block transition-all duration-700 ${
                i === headline
                  ? "opacity-100 translate-y-0 blur-0"
                  : "absolute opacity-0 translate-y-4 blur-sm pointer-events-none"
              }`}
              style={{ position: i === headline ? "relative" : "absolute" }}
            >
              {line.slice(0, -1)}
              <span className="text-[var(--accent)] inline-block glow-pulse">.</span>
            </span>
          ))}
        </h1>

        {/* Body grid */}
        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-10">
          {/* Description */}
          <div
            className="md:col-span-7 reveal"
            style={{ animationDelay: "0.85s" }}
          >
            <p className="text-base md:text-xl text-bone leading-relaxed max-w-2xl">
              {t.hero_desc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#cta"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--accent)] text-black hover:bg-[var(--text)] transition-all duration-300"
              >
                <span className="text-[14px] font-medium">{t.nav_contact}</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#divisions"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-[var(--border-strong)] hover:border-[var(--accent)] text-bone transition-colors"
              >
                <span className="text-[14px]">{t.nav_expertises}</span>
              </a>
            </div>
          </div>

          {/* Capabilities ticker panel */}
          <div
            className="md:col-span-5 reveal"
            style={{ animationDelay: "1.05s" }}
          >
            <div className="relative overflow-hidden border border-[var(--border-strong)] bg-[var(--bg)]/60 backdrop-blur-sm p-6 md:p-8 hover-lift">
              <div className="scan-line" />
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
                <span className="text-[10px] text-ash uppercase tracking-[0.2em]">
                  {t.cap_section}
                </span>
                <span className="text-[10px] text-[var(--accent)] uppercase tracking-[0.2em]">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {rotating.map((r, i) => (
                  <div
                    key={r}
                    className={`flex items-center gap-4 transition-all duration-700 ${
                      i === active
                        ? "opacity-100 translate-x-0"
                        : "opacity-70 translate-x-0"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === active ? "bg-[var(--accent)]" : "bg-[var(--text-muted)]"
                      }`}
                    />
                    <span
                      className={`text-[14px] md:text-[15px] tracking-tight transition-colors ${
                        i === active ? "text-bone" : "text-ash"
                      }`}
                    >
                      {r}
                    </span>
                    <span className="ml-auto text-[10px] text-ash tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[11px] text-ash">
                  06 expertises actives
                </span>
                <span className="text-[11px] text-ash">
                  4 langues · 2 bases
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 md:mt-28 pt-8 border-t border-[var(--border-strong)] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            {
              k: t.hero_software,
              v: "Plateformes SaaS, applications métier, intégration IA",
            },
            {
              k: t.hero_hardware,
              v: "Serveurs, réseaux, capteurs IoT, audiovisuel",
            },
            {
              k: t.hero_security,
              v: "Vidéosurveillance, biométrie, supervision",
            },
            {
              k: t.hero_research,
              v: "Robotique, prototypage, propriété intellectuelle",
            },
          ].map((b) => (
            <div key={b.k}>
              <div className="flex items-center gap-2 text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] mb-2">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)] float-y" />
                {b.k}
              </div>
              <p className="text-[13px] text-bone leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
