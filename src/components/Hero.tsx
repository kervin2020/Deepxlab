"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle field animated on canvas — reactive to mouse
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

        const alpha = 0.15 + force * 0.85;
        ctx.fillStyle =
          force > 0.3
            ? `rgba(0, 255, 148, ${alpha})`
            : `rgba(232, 232, 227, ${alpha * 0.4})`;
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
    <section className="relative min-h-screen overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0B] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pt-32 md:pt-40">
        {/* Status bar */}
        <div className="font-mono text-[11px] text-ash mb-16 md:mb-24 flex items-center gap-3 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] pulse-dot" />
          <span className="typewriter">
            DXL/SYS — STATUS: OPERATIONAL — 06 DIVISIONS — 04 LANGUES — 02 PAYS
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          {/* Title */}
          <h1 className="md:col-span-8 text-[14vw] md:text-[8.5vw] leading-[0.9] tracking-[-0.04em] font-medium">
            <span className="block reveal" style={{ animationDelay: "0.2s" }}>
              Nous construisons
            </span>
            <span
              className="block reveal"
              style={{ animationDelay: "0.5s" }}
            >
              ce qui n&apos;existe pas
            </span>
            <span
              className="block reveal"
              style={{ animationDelay: "0.8s" }}
            >
              encore<span className="text-[#00FF94] blink">.</span>
            </span>
          </h1>

          {/* Side text */}
          <div
            className="md:col-span-4 font-mono text-[12px] leading-relaxed text-ash space-y-4 reveal"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="border-l border-[#00FF94] pl-4">
              <div className="text-bone mb-1">DEEPXLAB</div>
              Groupe technologique intégré.
              <br />
              Né des Caraïbes.
              <br />
              Déployé partout.
            </div>
            <div className="text-[10px] uppercase tracking-widest">
              [ EST. — KERSON × KERVIN ]
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="mt-16 md:mt-24 flex flex-wrap gap-4 reveal"
          style={{ animationDelay: "1.4s" }}
        >
          <a
            href="#divisions"
            className="group relative inline-flex items-center gap-3 px-6 py-4 border border-bone/30 hover:border-[#00FF94] hover:bg-[#00FF94] hover:text-black transition-all duration-300"
          >
            <span className="font-mono text-[12px] uppercase tracking-wider">
              Explorer les divisions
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 px-6 py-4 text-bone hover:text-[#00FF94] transition-colors"
          >
            <span className="font-mono text-[12px] uppercase tracking-wider relative">
              Démarrer un projet
              <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </span>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-32 mb-12 flex items-center justify-between font-mono text-[10px] text-ash uppercase tracking-widest">
          <span>↓ Scroll pour entrer</span>
          <span>N 18°32&apos;Ø — W 72°20&apos;Ø</span>
        </div>
      </div>
    </section>
  );
}
