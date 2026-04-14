"use client";

import { useT } from "@/i18n/provider";

// Simple equirectangular projection (lon/lat -> x/y in a 800x400 box)
const project = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * 800,
  y: ((90 - lat) / 180) * 400,
});

const cities: {
  name: string;
  lon: number;
  lat: number;
  primary?: boolean;
}[] = [
  { name: "Port-au-Prince", lon: -72.33, lat: 18.54, primary: true },
  { name: "Miami", lon: -80.19, lat: 25.76, primary: true },
  { name: "New York", lon: -74.0, lat: 40.71 },
  { name: "Montréal", lon: -73.56, lat: 45.5 },
  { name: "Mexico", lon: -99.13, lat: 19.43 },
  { name: "São Paulo", lon: -46.63, lat: -23.55 },
  { name: "Londres", lon: -0.12, lat: 51.5 },
  { name: "Paris", lon: 2.35, lat: 48.85 },
  { name: "Dakar", lon: -17.44, lat: 14.69 },
  { name: "Abidjan", lon: -4.02, lat: 5.35 },
  { name: "Lagos", lon: 3.38, lat: 6.52 },
  { name: "Nairobi", lon: 36.82, lat: -1.29 },
  { name: "Dubaï", lon: 55.27, lat: 25.2 },
  { name: "Singapour", lon: 103.82, lat: 1.35 },
  { name: "Tokyo", lon: 139.69, lat: 35.69 },
];

const projected = cities.map((c) => ({ ...c, ...project(c.lon, c.lat) }));

export default function GlobalReach() {
  const { t } = useT();
  const origin = projected[0]; // Port-au-Prince

  return (
    <section
      id="global"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>{t.global_section}</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            {t.global_title}
          </h2>
        </div>

        <div className="relative aspect-[2/1] w-full border border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden">
          <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full">
            {/* Wireframe grid */}
            {Array.from({ length: 36 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={(i * 800) / 36}
                y1={0}
                x2={(i * 800) / 36}
                y2={400}
                stroke="rgba(242,240,234,0.035)"
              />
            ))}
            {Array.from({ length: 18 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1={0}
                y1={(i * 400) / 18}
                x2={800}
                y2={(i * 400) / 18}
                stroke="rgba(242,240,234,0.035)"
              />
            ))}

            {/* Arcs */}
            {projected.slice(1).map((p, i) => {
              const mx = (origin.x + p.x) / 2;
              const my = Math.min(origin.y, p.y) - 50;
              return (
                <path
                  key={i}
                  d={`M ${origin.x} ${origin.y} Q ${mx} ${my} ${p.x} ${p.y}`}
                  fill="none"
                  stroke="#00FF94"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  opacity="0.45"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-16"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
              );
            })}

            {/* Points */}
            {projected.map((p) => (
              <g key={p.name}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={p.primary ? 4 : 2.5}
                  fill="#00FF94"
                />
                {p.primary && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="none"
                    stroke="#00FF94"
                    strokeWidth="1"
                    opacity="0.35"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="18"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <text
                  x={p.x + 8}
                  y={p.y + 3}
                  fontSize="8"
                  fill="#F2F0EA"
                  opacity="0.85"
                >
                  {p.name}
                </text>
              </g>
            ))}
          </svg>

          <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-[var(--accent)]/60" />
          <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-[var(--accent)]/60" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-[var(--accent)]/60" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-[var(--accent)]/60" />

          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-ash uppercase tracking-[0.2em]">
            Réseau opérationnel
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8 text-[13px] text-bone max-w-4xl">
          <p>
            Nos équipes déploient des systèmes critiques sur trois continents,
            en quatre langues, pour des clients institutionnels et privés.
          </p>
          <p>
            Chaque déploiement s&apos;appuie sur la même architecture, les mêmes
            standards d&apos;exécution et le même niveau de support continu.
          </p>
          <p>
            Notre infrastructure est pensée pour s&apos;étendre sans friction
            vers les marchés francophones, anglophones et hispanophones.
          </p>
        </div>
      </div>
    </section>
  );
}
