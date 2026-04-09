"use client";

const points = [
  { name: "Port-au-Prince", code: "HT", x: 320, y: 220, primary: true },
  { name: "Miami", code: "US", x: 285, y: 185, primary: true },
  { name: "Santo Domingo", code: "DO", x: 340, y: 215 },
  { name: "Dakar", code: "SN", x: 480, y: 230 },
  { name: "Abidjan", code: "CI", x: 500, y: 260 },
  { name: "Montréal", code: "CA", x: 290, y: 140 },
];

export default function GlobalReach() {
  return (
    <section
      id="global"
      className="relative py-32 md:py-48 border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 font-mono text-[11px] text-ash uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#00FF94]" />
              <span>06 / Présence globale</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95] font-medium">
            Pas de limites
            <br />
            <span className="text-ash">géographiques.</span>
          </h2>
        </div>

        <div className="relative aspect-[2/1] w-full border border-white/5 bg-[#070708] overflow-hidden">
          <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full">
            {/* Grid wireframe */}
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={(i * 800) / 20}
                y1={0}
                x2={(i * 800) / 20}
                y2={400}
                stroke="rgba(232,232,227,0.04)"
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1={0}
                y1={(i * 400) / 10}
                x2={800}
                y2={(i * 400) / 10}
                stroke="rgba(232,232,227,0.04)"
              />
            ))}

            {/* Arcs from HT to other points */}
            {points
              .filter((p) => p.code !== "HT")
              .map((p, i) => {
                const start = points[0];
                const mx = (start.x + p.x) / 2;
                const my = Math.min(start.y, p.y) - 60;
                return (
                  <path
                    key={i}
                    d={`M ${start.x} ${start.y} Q ${mx} ${my} ${p.x} ${p.y}`}
                    fill="none"
                    stroke="#00FF94"
                    strokeWidth="0.8"
                    strokeDasharray="3 4"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-14"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                );
              })}

            {/* Points */}
            {points.map((p) => (
              <g key={p.code}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={p.primary ? 5 : 3}
                  fill="#00FF94"
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="12"
                  fill="none"
                  stroke="#00FF94"
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    from="5"
                    to="20"
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
                <text
                  x={p.x + 10}
                  y={p.y + 4}
                  fontSize="9"
                  className="font-mono"
                  fill="#E8E8E3"
                >
                  {p.name}
                </text>
                <text
                  x={p.x + 10}
                  y={p.y + 16}
                  fontSize="8"
                  className="font-mono"
                  fill="#8B8B85"
                >
                  / {p.code}
                </text>
              </g>
            ))}
          </svg>

          {/* Corner brackets */}
          <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-[#00FF94]" />
          <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-[#00FF94]" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-[#00FF94]" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-[#00FF94]" />

          <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ash">
            DXL/MAP — RÉSEAU OPÉRATIONNEL
          </div>
        </div>
      </div>
    </section>
  );
}
