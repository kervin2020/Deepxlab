"use client";

const software = [
  "Applications web et mobiles sur mesure",
  "Plateformes SaaS multi-tenant",
  "ERP et systèmes de gestion métier",
  "Intégration d'intelligence artificielle",
  "Architectures cloud hybrides",
  "Audit, refonte et migration de systèmes",
  "API et middlewares d'intégration",
  "Tableaux de bord et analytique",
];

const hardware = [
  "Postes de travail et serveurs d'entreprise",
  "Réseaux structurés et Wi-Fi industriel",
  "Caméras IP, NVR et centres de supervision",
  "Lecteurs biométriques et contrôle d'accès",
  "Capteurs IoT et passerelles edge",
  "Téléphonie IP et PBX propriétaires",
  "Audiovisuel et salles de conférence",
  "Laboratoires informatiques clé en main",
];

export default function Capabilities() {
  return (
    <section
      id="capacites"
      className="relative py-32 md:py-48 border-t border-[var(--border)] bg-[var(--bg-elev-2)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Capacités</span>
            </div>
          </div>
          <h2 className="md:col-span-9 text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] font-medium">
            Software et hardware,
            <br />
            <span className="text-ash">conçus sur mesure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--bg-elev-2)]">
          {/* Software */}
          <div className="bg-[var(--bg-elev-2)] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-colors duration-700" />
            <div className="relative">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[11px] text-ash tracking-[0.2em]">/ A</span>
                <span className="text-[11px] text-ash tracking-[0.2em]">SOFTWARE</span>
              </div>
              <h3 className="text-3xl md:text-[40px] font-medium tracking-[-0.02em] mb-4">
                Logiciel & plateformes
              </h3>
              <p className="text-[15px] text-ash leading-relaxed mb-10 max-w-md">
                Nos équipes conçoivent des produits logiciels sur mesure ou
                propriétaires, du prototype au déploiement à grande échelle.
                Chaque projet est versionné, documenté et livré avec une
                garantie d&apos;évolution.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {software.map((s) => (
                  <li
                    key={s}
                    className="text-[13px] text-bone flex items-start gap-3"
                  >
                    <span className="text-[var(--accent)] mt-[2px]">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hardware */}
          <div className="bg-[var(--bg-elev-2)] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF4500]/5 rounded-full blur-3xl group-hover:bg-[#FF4500]/10 transition-colors duration-700" />
            <div className="relative">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[11px] text-ash tracking-[0.2em]">/ B</span>
                <span className="text-[11px] text-ash tracking-[0.2em]">HARDWARE</span>
              </div>
              <h3 className="text-3xl md:text-[40px] font-medium tracking-[-0.02em] mb-4">
                Matériel & infrastructure
              </h3>
              <p className="text-[15px] text-ash leading-relaxed mb-10 max-w-md">
                Nous fournissons, installons et maintenons l&apos;ensemble
                de l&apos;infrastructure physique sur laquelle reposent les
                opérations critiques de nos clients — du câble réseau au
                centre de supervision.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {hardware.map((s) => (
                  <li
                    key={s}
                    className="text-[13px] text-bone flex items-start gap-3"
                  >
                    <span className="text-[#FF4500] mt-[2px]">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
