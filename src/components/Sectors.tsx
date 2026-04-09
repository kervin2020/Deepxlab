"use client";

const sectors = [
  {
    name: "Banque & Finance",
    desc: "Sécurité physique, audit forensique, plateformes de gestion et conformité.",
    cases: "Banques · Coopératives · Microfinance",
  },
  {
    name: "Santé",
    desc: "Infrastructure hospitalière, dossiers patients, vidéosurveillance médicale et IoT clinique.",
    cases: "Hôpitaux · Cliniques · Laboratoires",
  },
  {
    name: "Éducation",
    desc: "Laboratoires STEM, plateformes d'apprentissage, infrastructure réseau scolaire et identité numérique.",
    cases: "Écoles · Universités · ONG éducatives",
  },
  {
    name: "Gouvernement & Institutions",
    desc: "Systèmes de contrôle d'accès, archives numériques, infrastructure souveraine et identification.",
    cases: "Ministères · Mairies · Agences",
  },
  {
    name: "Industrie & Logistique",
    desc: "Automatisation, capteurs IoT, suivi de flotte GPS, supervision à distance et tableaux de bord.",
    cases: "Manufactures · Transport · Énergie",
  },
  {
    name: "Commerce & Retail",
    desc: "Caisses connectées, gestion d'inventaire, vidéosurveillance et expérience client digitale.",
    cases: "Distribution · Hôtellerie · Restauration",
  },
  {
    name: "Sécurité privée",
    desc: "Centres de supervision, biométrie, immobilisation à distance et plateformes propriétaires.",
    cases: "Sociétés de sécurité · Résidences",
  },
  {
    name: "ONG & Coopération",
    desc: "Outils terrain bilingues, déploiements low-bandwidth, formation et impact mesurable.",
    cases: "ONG · Bailleurs · Organisations internationales",
  },
];

export default function Sectors() {
  return (
    <section
      id="secteurs"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Secteurs</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
              Tous les secteurs.
              <br />
              <span className="text-ash">Un seul partenaire technologique.</span>
            </h2>
            <p className="mt-8 text-lg text-bone max-w-2xl leading-relaxed">
              Nos équipes interviennent dans des environnements aux contraintes
              très différentes — réglementées, terrain, critiques. Nous
              adaptons nos méthodes, nos technologies et nos déploiements à
              chaque secteur sans diluer notre exigence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--bg-elev-2)]">
          {sectors.map((s, i) => (
            <div
              key={s.name}
              className="group relative bg-[var(--bg)] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#10101a] transition-colors duration-500"
            >
              <div>
                <span className="text-[10px] text-ash tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-[22px] font-medium tracking-[-0.02em] mt-4 mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {s.name}
                </h3>
                <p className="text-[13px] text-ash leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <p className="text-[11px] text-ash uppercase tracking-[0.15em]">
                  {s.cases}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
