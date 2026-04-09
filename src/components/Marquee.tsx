export default function Marquee() {
  const items = [
    "Software sur mesure",
    "Hardware industriel",
    "Infrastructure réseau",
    "Sécurité intelligente",
    "Plateformes SaaS",
    "Recherche appliquée",
    "Intelligence artificielle",
    "Internet des objets",
    "Téléphonie IP",
    "Audiovisuel professionnel",
    "Robotique éducative",
    "Cloud hybride",
  ];
  const repeat = [...items, ...items];

  return (
    <section className="relative py-10 md:py-14 border-y border-[var(--border-strong)] bg-[var(--bg-elev)] overflow-hidden">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {repeat.map((it, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl md:text-4xl font-medium tracking-[-0.02em]">
            <span className="text-bone/90">{it}</span>
            <span className="text-[var(--accent)] text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
