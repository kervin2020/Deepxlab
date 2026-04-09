"use client";

const divisions = [
  {
    index: "01",
    name: "Éducation & STEM",
    desc: "Programmes éducatifs structurés, kits propriétaires et laboratoires clé en main pour écoles et institutions.",
    services: [
      "Programmes STEM structurés (8 à 18+ ans)",
      "Kits robotiques et électroniques propriétaires",
      "Laboratoires STEM clé en main",
      "Plateforme d'apprentissage multilingue",
      "Formation et certification d'instructeurs",
    ],
  },
  {
    index: "02",
    name: "Logiciel & Infrastructure IT",
    desc: "Développement logiciel, plateformes SaaS et infrastructure IT d'entreprise. Du silicium à l'interface.",
    services: [
      "Applications web et mobiles sur mesure",
      "Plateformes SaaS propriétaires (ERP, gestion d'accès)",
      "Infrastructure réseau et serveurs d'entreprise",
      "Intégration IA, IoT et automatisation",
      "Téléphonie IP et audiovisuel professionnel",
      "Maintenance, infogérance et support continu",
    ],
  },
  {
    index: "03",
    name: "Sécurité & Systèmes Intelligents",
    desc: "Vidéosurveillance, contrôle d'accès, automatisation. Hardware certifié et supervision propriétaire.",
    services: [
      "Vidéosurveillance IP et CCTV",
      "Contrôle d'accès biométrique et RFID",
      "Flotte GPS et immobilisation à distance",
      "Domotique et automatisation résidentielle",
      "Plateforme de supervision propriétaire",
      "Audit de sécurité et modernisation",
    ],
  },
  {
    index: "04",
    name: "Design & Communication Visuelle",
    desc: "Identité de marque, direction artistique et production de supports pour entreprises et institutions.",
    services: [
      "Identité visuelle et branding complet",
      "Direction artistique et design éditorial",
      "UI/UX pour applications web et mobiles",
      "Motion design et contenu animé",
      "Pitch decks, brochures et rapports",
      "Design d'emballage et matériel produit",
    ],
  },
  {
    index: "05",
    name: "Contenu & Médias Numériques",
    desc: "Production éditoriale et audiovisuelle multilingue, stratégie de contenu et brand content.",
    services: [
      "Production audiovisuelle multilingue",
      "Séries éducatives et documentaires techniques",
      "Stratégie de contenu et réseaux sociaux",
      "Brand content pour partenaires externes",
      "Monétisation et partenariats médias",
    ],
  },
  {
    index: "06",
    name: "Recherche & Développement",
    desc: "Robotique appliquée, IA embarquée et prototypage rapide. Propriété intellectuelle propriétaire.",
    services: [
      "Recherche en robotique et intelligence embarquée",
      "Prototypage hardware et impression 3D",
      "Vision par ordinateur et modèles embarqués",
      "Firmware et systèmes embarqués avancés",
      "Dépôt de brevets et partenariats académiques",
    ],
  },
];

export default function Divisions() {
  return (
    <section
      id="divisions"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Expertises</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            Six expertises intégrées.
            <br />
            <span className="text-ash">Une exécution unifiée.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--bg-elev-2)]">
          {divisions.map((d) => (
            <div
              key={d.index}
              className="division-card group relative bg-[var(--bg)] border border-transparent p-8 md:p-10 min-h-[480px] flex flex-col cursor-default overflow-hidden"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-[11px] text-ash tracking-[0.2em]">
                  {d.index} / 06
                </span>
                <span className="arrow text-ash text-sm">→</span>
              </div>

              <h3 className="text-2xl md:text-[28px] font-medium tracking-[-0.02em] leading-[1.1] mb-5">
                {d.name}
              </h3>
              <p className="text-[14px] text-ash leading-relaxed max-w-sm mb-8">
                {d.desc}
              </p>

              <div className="bar w-8 h-px bg-[var(--border-strong)] mb-5" />

              <ul className="space-y-2.5 text-[13px] text-bone leading-snug">
                {d.services.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-ash/60 mt-[2px]">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
