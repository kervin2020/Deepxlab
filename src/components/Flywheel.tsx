"use client";

import { useEffect, useState } from "react";

const principles = [
  {
    index: "I",
    roman: "I",
    title: "Intégration verticale",
    desc: "Nous concevons, fabriquons et opérons nos propres plateformes, produits et systèmes. Aucune sous-traitance sur les composants critiques.",
  },
  {
    index: "II",
    roman: "II",
    title: "Chaîne complète",
    desc: "Du matériel à l'interface utilisateur, de l'architecture réseau au SaaS. Une seule responsabilité contractuelle pour l'ensemble du cycle technologique.",
  },
  {
    index: "III",
    roman: "III",
    title: "Propriété intellectuelle",
    desc: "Chaque plateforme déployée est née dans nos laboratoires. Brevets, firmware, code et architecture demeurent la propriété du groupe.",
  },
  {
    index: "IV",
    roman: "IV",
    title: "Continuité opérationnelle",
    desc: "Nos contrats incluent la maintenance, la supervision et l'évolution long terme. Nous restons engagés bien après la mise en production.",
  },
];

export default function Flywheel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % principles.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="approche"
      className="relative py-32 md:py-48 border-t border-[var(--border)] bg-[var(--bg-elev-2)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Approche</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            Une architecture opérationnelle
            <br />
            <span className="text-ash">pensée pour durer.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Wheel */}
          <div className="md:col-span-5 relative aspect-square max-w-[520px] mx-auto w-full">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
            >
              {/* Rotating outer ring */}
              <g style={{ transformOrigin: "200px 200px" }}>
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="rgba(242,240,234,0.05)"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 200 200"
                    to="360 200 200"
                    dur="60s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="rgba(242,240,234,0.08)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="rgba(242,240,234,0.04)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="rgba(242,240,234,0.03)"
                strokeWidth="1"
              />

              {/* Connecting lines between all nodes */}
              {principles.map((_, i) =>
                principles.map((__, j) => {
                  if (j <= i) return null;
                  const ai = (i / principles.length) * Math.PI * 2 - Math.PI / 2;
                  const aj = (j / principles.length) * Math.PI * 2 - Math.PI / 2;
                  const xi = 200 + Math.cos(ai) * 160;
                  const yi = 200 + Math.sin(ai) * 160;
                  const xj = 200 + Math.cos(aj) * 160;
                  const yj = 200 + Math.sin(aj) * 160;
                  const isActiveEdge = i === active || j === active;
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={xi}
                      y1={yi}
                      x2={xj}
                      y2={yj}
                      stroke={isActiveEdge ? "#00FF94" : "rgba(242,240,234,0.05)"}
                      strokeWidth={isActiveEdge ? "0.8" : "0.6"}
                      opacity={isActiveEdge ? "0.35" : "1"}
                      style={{ transition: "all 0.8s" }}
                    />
                  );
                })
              )}

              {/* Nodes */}
              {principles.map((p, i) => {
                const angle = (i / principles.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 160;
                const y = 200 + Math.sin(angle) * 160;
                const isActive = i === active;
                return (
                  <g key={i}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 9 : 5}
                      fill={isActive ? "#00FF94" : "#F2F0EA"}
                      style={{ transition: "all 0.6s" }}
                    />
                    {isActive && (
                      <>
                        <circle
                          cx={x}
                          cy={y}
                          r="18"
                          fill="none"
                          stroke="#00FF94"
                          strokeWidth="1"
                          opacity="0.4"
                        >
                          <animate
                            attributeName="r"
                            from="10"
                            to="26"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            from="0.6"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </>
                    )}
                    <text
                      x={x}
                      y={y + (y > 200 ? 26 : -14)}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="500"
                      fill={isActive ? "#00FF94" : "#7A7A75"}
                      style={{ transition: "fill 0.6s" }}
                    >
                      {p.roman}
                    </text>
                  </g>
                );
              })}

              {/* Center label */}
              <text
                x="200"
                y="196"
                textAnchor="middle"
                fontSize="11"
                fill="#F2F0EA"
                opacity="0.5"
              >
                DEEPXLAB
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                fontSize="9"
                fill="#7A7A75"
              >
                OPERATING MODEL
              </text>
            </svg>
          </div>

          {/* Principles list */}
          <div className="md:col-span-7 space-y-3">
            {principles.map((p, i) => (
              <div
                key={i}
                className={`group grid grid-cols-[auto_1fr] gap-6 md:gap-8 p-6 md:p-8 border-l transition-all duration-700 ${
                  i === active
                    ? "border-[var(--accent)] bg-[var(--bg-elev-2)]"
                    : "border-[var(--border)]"
                }`}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    i === active ? "text-[var(--accent)]" : "text-ash"
                  }`}
                >
                  {p.roman}
                </div>
                <div>
                  <h3
                    className={`text-xl md:text-2xl font-medium tracking-[-0.02em] mb-2 transition-colors ${
                      i === active ? "text-bone" : "text-bone"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-ash leading-relaxed max-w-xl">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
