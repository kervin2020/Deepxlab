"use client";

import { useEffect, useState } from "react";

const steps = [
  "L'éducation STEM génère la demande pour les kits.",
  "Les kits alimentent le contenu.",
  "Le contenu crée l'audience.",
  "L'audience attire les clients entreprises.",
  "Les solutions entreprises financent la R&D.",
  "La R&D crée les produits de demain.",
];

const nodes = ["EDU", "SYS", "SEC", "ART", "MEDIA", "R&D"];

export default function Flywheel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="flywheel"
      className="relative py-32 md:py-48 border-t border-white/5 bg-[#0d0d10]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 font-mono text-[11px] text-ash uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#00FF94]" />
              <span>03 / Volant d&apos;inertie</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95] font-medium">
            Chaque division
            <br />
            <span className="text-ash">renforce les autres.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          {/* Diagram */}
          <div className="relative aspect-square max-w-[520px] mx-auto w-full">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="rgba(232,232,227,0.08)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="rgba(232,232,227,0.04)"
                strokeWidth="1"
              />
              {nodes.map((label, i) => {
                const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 160;
                const y = 200 + Math.sin(angle) * 160;
                const isActive = i === active;
                return (
                  <g key={label}>
                    {nodes.map((_, j) => {
                      if (j <= i) return null;
                      const a2 = (j / nodes.length) * Math.PI * 2 - Math.PI / 2;
                      const x2 = 200 + Math.cos(a2) * 160;
                      const y2 = 200 + Math.sin(a2) * 160;
                      return (
                        <line
                          key={j}
                          x1={x}
                          y1={y}
                          x2={x2}
                          y2={y2}
                          stroke="rgba(232,232,227,0.05)"
                          strokeWidth="1"
                        />
                      );
                    })}
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 8 : 4}
                      fill={isActive ? "#00FF94" : "#E8E8E3"}
                      style={{ transition: "all 0.6s" }}
                    />
                    {isActive && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="none"
                        stroke="#00FF94"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    )}
                    <text
                      x={x}
                      y={y + (y > 200 ? 24 : -14)}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="10"
                      fill={isActive ? "#00FF94" : "#8B8B85"}
                    >
                      {label}
                    </text>
                  </g>
                );
              })}
              <text
                x="200"
                y="195"
                textAnchor="middle"
                fontSize="11"
                className="font-mono"
                fill="#8B8B85"
              >
                DEEPXLAB
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                fontSize="9"
                className="font-mono"
                fill="#444"
              >
                ECOSYSTEM/01
              </text>
            </svg>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 border-l transition-all duration-500 ${
                  i === active
                    ? "border-[#00FF94] bg-white/[0.02] text-bone"
                    : "border-white/5 text-ash"
                }`}
              >
                <span className="font-mono text-[10px] mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed">{s}</span>
              </div>
            ))}
            <p className="font-mono text-[11px] text-ash mt-6 uppercase tracking-widest">
              → C&apos;est un volant d&apos;inertie technologique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
