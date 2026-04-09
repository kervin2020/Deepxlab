"use client";

const products = [
  {
    code: "P/01",
    cat: "Éducation",
    name: "Maker Starter Kit",
    desc: "Kit éducatif d'introduction à l'électronique et au prototypage. Conçu, fabriqué et documenté en interne.",
    status: "En production",
  },
  {
    code: "P/02",
    cat: "Éducation",
    name: "Kit Arduino Intermédiaire",
    desc: "Kit avancé pour l'apprentissage de la programmation embarquée et des projets robotiques.",
    status: "En production",
  },
  {
    code: "P/03",
    cat: "Éducation",
    name: "Kit ESP32 Avancé",
    desc: "Kit IoT et systèmes embarqués pour les projets de robotique avancée et l'intelligence embarquée.",
    status: "En production",
  },
  {
    code: "P/04",
    cat: "SaaS",
    name: "Plateforme de gestion d'accès",
    desc: "Système propriétaire de contrôle d'accès, badges, biométrie et supervision multi-sites.",
    status: "Sur abonnement",
  },
  {
    code: "P/05",
    cat: "SaaS",
    name: "Suivi GPS de flotte",
    desc: "Plateforme de supervision en temps réel avec immobilisation à distance et historique complet.",
    status: "Sur abonnement",
  },
  {
    code: "P/06",
    cat: "Plateforme",
    name: "LMS STEM multilingue",
    desc: "Plateforme d'apprentissage en ligne avec gamification, suivi de progression et contenu en quatre langues.",
    status: "Sur abonnement",
  },
];

export default function Products() {
  return (
    <section
      id="produits"
      className="relative py-32 md:py-48 border-t border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Produits propriétaires</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
              Des produits conçus,
              <br />
              <span className="text-ash">fabriqués et opérés par nous.</span>
            </h2>
            <p className="mt-8 text-lg text-bone max-w-2xl leading-relaxed">
              En parallèle de ses services, DeepXlab développe ses propres
              kits, plateformes SaaS et systèmes propriétaires — disponibles
              à la vente, à l&apos;abonnement ou intégrés dans nos
              déploiements.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--bg-elev-2)]">
          {products.map((p) => (
            <div
              key={p.code}
              className="group relative bg-[var(--bg)] p-8 min-h-[320px] flex flex-col justify-between hover:bg-[var(--bg-elev-2)] transition-colors duration-500 cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[10px] text-ash tracking-[0.2em]">
                    {p.code}
                  </span>
                  <span className="text-[10px] text-ash tracking-[0.2em] uppercase">
                    {p.cat}
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.02em] leading-[1.15] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[13px] text-ash leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[10px] text-[var(--accent)] uppercase tracking-[0.2em]">
                  {p.status}
                </span>
                <span className="text-ash group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
