"use client";

const divisions = [
  {
    id: "01",
    code: "DXL/01",
    name: "Éducation & STEM",
    tag: "EDU",
    desc: "Former la prochaine génération d'ingénieurs et de créateurs. Programmes STEM, kits robotiques et laboratoires clé en main.",
    accent: "#00FF94",
  },
  {
    id: "02",
    code: "DXL/02",
    name: "Solutions Entreprises",
    tag: "SYS",
    desc: "Le partenaire technologique de bout en bout. Logiciel, hardware, infrastructure IT, SaaS, IA et IoT.",
    accent: "#00FF94",
  },
  {
    id: "03",
    code: "DXL/03",
    name: "Sécurité & Systèmes Intelligents",
    tag: "SEC",
    desc: "Vidéosurveillance, contrôle d'accès, GPS, domotique. Hardware professionnel et plateformes propriétaires.",
    accent: "#FF4500",
  },
  {
    id: "04",
    code: "DXL/04",
    name: "Design & Communication Visuelle",
    tag: "ART",
    desc: "Identités de marque inoubliables, direction artistique, UI/UX et illustration digitale.",
    accent: "#00FF94",
  },
  {
    id: "05",
    code: "DXL/05",
    name: "Contenu & Médias Numériques",
    tag: "MEDIA",
    desc: "Production multilingue, séries éducatives, brand content. Documenter, inspirer, monétiser.",
    accent: "#00FF94",
  },
  {
    id: "06",
    code: "DXL/06",
    name: "Recherche & Développement",
    tag: "R&D",
    desc: "Robotique, IA embarquée, IoT, prototypage rapide. Le moteur d'innovation du groupe.",
    accent: "#FF4500",
  },
];

export default function Divisions() {
  return (
    <section
      id="divisions"
      className="relative py-32 md:py-48 border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 font-mono text-[11px] text-ash uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#00FF94]" />
              <span>02 / Architecture</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95] font-medium">
            Six divisions.
            <br />
            <span className="text-ash">Un seul organisme.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {divisions.map((d) => (
            <div
              key={d.id}
              className="division-card group relative bg-[#0A0A0B] border border-transparent p-8 md:p-10 min-h-[340px] flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] text-ash">
                    {d.code}
                  </span>
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-ash group-hover:text-[#00FF94] group-hover:border-[#00FF94] transition-colors"
                  >
                    {d.tag}
                  </span>
                </div>
                <div className="bar w-12 h-px bg-bone/20 mb-6" />
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-4">
                  {d.name}
                </h3>
                <p className="text-[14px] text-ash leading-relaxed max-w-sm">
                  {d.desc}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-10">
                <span className="font-mono text-[10px] text-ash uppercase tracking-widest">
                  Voir la division
                </span>
                <span className="arrow text-bone text-xl">→</span>
              </div>

              {/* Decorative corner brackets */}
              <span className="absolute top-3 left-3 w-3 h-3 border-l border-t border-white/10 group-hover:border-[#00FF94] transition-colors" />
              <span className="absolute top-3 right-3 w-3 h-3 border-r border-t border-white/10 group-hover:border-[#00FF94] transition-colors" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-white/10 group-hover:border-[#00FF94] transition-colors" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-white/10 group-hover:border-[#00FF94] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
