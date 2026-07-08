"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/provider";

function useIsLight() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const update = () => setLight(document.documentElement.dataset.theme === "light");
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return light;
}

/* ─────────────────────────────────────────────────────────────────────
   LoadingScreen — 4-stage cinematic reveal:
     1. fade-in (0.8s)  : logo emerges from black, slightly blurred
     2. sweep (1.2s)    : a glowing line sweeps across, sharpens the logo
     3. hold (1.4s)     : logo is fully visible — clear and crisp
     4. fade-out (0.8s) : screen dissolves to reveal the page
   Total ~ 2.4s — kept short: on slow connections the intro must not
   stand between the visitor and the content.
   ───────────────────────────────────────────────────────────────────── */

type Phase = "init" | "fade-in" | "sweep" | "hold" | "fade-out" | "gone";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("init");
  const isLight = useIsLight();
  const { t } = useT();

  useEffect(() => {
    const timeline = [
      { phase: "fade-in" as Phase, at: 50 },
      { phase: "sweep" as Phase, at: 500 },
      { phase: "hold" as Phase, at: 1300 },
      { phase: "fade-out" as Phase, at: 1900 },
      { phase: "gone" as Phase, at: 2400 },
    ];
    const timers = timeline.map((step) =>
      setTimeout(() => setPhase(step.phase), step.at)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  if (phase === "gone") return null;

  const showLogo =
    phase === "fade-in" || phase === "sweep" || phase === "hold";
  const fadingOut = phase === "fade-out";

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{
        background: isLight ? "#F5F5F0" : "#050505",
        opacity: fadingOut ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fadingOut ? "none" : "auto",
      }}
    >
      {/* Subtle radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            phase === "hold"
              ? "radial-gradient(ellipse 50% 35% at 50% 50%, rgba(0,102,255,0.08), transparent 60%)"
              : "transparent",
          transition: "background 1s ease",
        }}
      />

      {/* Logo container */}
      <div
        className="relative"
        style={{
          width: "min(72vw, 520px)",
          aspectRatio: "3686 / 1034",
        }}
      >
        {/* Logo image — fades in from blur */}
        <div
          className="absolute inset-0"
          style={{
            opacity: showLogo ? 1 : 0,
            filter: showLogo
              ? phase === "fade-in"
                ? "blur(8px)"
                : "blur(0)"
              : "blur(20px)",
            transform: showLogo ? "scale(1)" : "scale(0.96)",
            transition:
              "opacity 0.8s cubic-bezier(0.4,0,0.2,1), filter 1.2s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <Image
            src={isLight ? "/logo-dark.png" : "/logo-white.png"}
            alt="DeepXlab"
            fill
            sizes="72vw"
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Scanner line — sweeps across only during "sweep" phase */}
        <div
          className="absolute top-[-15%] bottom-[-15%] w-[3px] pointer-events-none"
          style={{
            left: phase === "sweep" || phase === "hold" || fadingOut ? "100%" : "0%",
            background: "#0066FF",
            boxShadow:
              "0 0 24px 4px rgba(0,102,255,0.9), 0 0 48px 12px rgba(0,102,255,0.45)",
            opacity:
              phase === "sweep" ? 1 : phase === "hold" ? 0 : 0,
            transition:
              "left 1.2s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease",
          }}
        />

        {/* Trailing wash that follows scanner */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,102,255,0.10) 50%, transparent 100%)",
            opacity: phase === "sweep" ? 0.7 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Tagline below — fades in at hold */}
      <div
        className="absolute left-0 right-0 text-center"
        style={{
          bottom: "min(15vh, 120px)",
          opacity: phase === "hold" || fadingOut ? 1 : 0,
          transform:
            phase === "hold" || fadingOut
              ? "translateY(0)"
              : "translateY(8px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]">
          {t.hero_tag.split(" en ")[0]}
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-60">
          Boston · Port-au-Prince
        </p>
      </div>

      {/* Progress bar — bottom edge, fills across all phases */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[rgba(255,255,255,0.05)]">
        <div
          className="h-full bg-[var(--accent)]"
          style={{
            width:
              phase === "init"
                ? "0%"
                : phase === "fade-in"
                ? "20%"
                : phase === "sweep"
                ? "55%"
                : "100%",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 0 10px rgba(0,102,255,0.6)",
          }}
        />
      </div>
    </div>
  );
}
