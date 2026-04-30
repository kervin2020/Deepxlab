"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    id: "01",
    sector: "Secteur financier · Caraïbes",
    title: "Plateforme transactionnelle régionale",
    desc: "Refonte complète du cœur transactionnel d'une banque caribéenne. Architecture événementielle, conformité PCI-DSS, disponibilité 99.99%.",
    stat: "4M+",
    statLabel: "transactions traitées chaque mois",
    tags: ["Architecture événementielle", "PCI-DSS", "99.99% uptime"],
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)",
  },
  {
    id: "02",
    sector: "Santé · Réseau hospitalier régional",
    title: "Dossier patient électronique national",
    desc: "Système centralisé pour un réseau hospitalier régional. Interopérabilité HL7/FHIR, chiffrement bout-en-bout.",
    stat: "120+",
    statLabel: "établissements de santé connectés",
    tags: ["HL7/FHIR", "Chiffrement E2E", "Multi-sites"],
    accent: "#00FFB2",
    bg: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,255,178,0.06) 0%, transparent 70%)",
  },
  {
    id: "03",
    sector: "Services publics · Administration",
    title: "Plateforme de services publics citoyens",
    desc: "Portail unifié d'accès aux services administratifs. Authentification forte, signature électronique, intégration multi-ministères.",
    stat: "800k",
    statLabel: "citoyens actifs sur la plateforme",
    tags: ["Auth forte", "Signature électronique", "Multi-ministères"],
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)",
  },
  {
    id: "04",
    sector: "Éducation · STEM · 3 pays",
    title: "Laboratoires STEM clé en main",
    desc: "Déploiement de kits pédagogiques propriétaires, plateforme LMS et formation des enseignants dans trois pays.",
    stat: "45",
    statLabel: "écoles équipées en 3 pays",
    tags: ["Arduino/ESP32", "LMS propriétaire", "Formation enseignants"],
    accent: "#00FFB2",
    bg: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,255,178,0.06) 0%, transparent 70%)",
  },
];

function CaseScene({ c, index }: { c: typeof cases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative min-h-[80vh] flex flex-col justify-center px-5 md:px-12 py-24 border-t border-[var(--border)] overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Translucent veil tinted with case accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(5,5,5,0.6)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: c.bg }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: `linear-gradient(${c.accent}08 1px, transparent 1px), linear-gradient(90deg, ${c.accent}08 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <div className="relative max-w-[1440px] mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: content */}
        <div>
          <div
            className="flex items-center gap-4 mb-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.1s" }}
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.id}</span>
            <span className="w-8 h-px bg-[var(--border-strong)]" />
            <span className="text-[11px] uppercase tracking-[0.15em]" style={{ color: c.accent }}>{c.sector}</span>
          </div>

          <h3
            className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-tight mb-6"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            {c.title}
          </h3>

          <p
            className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.3s" }}
          >
            {c.desc}
          </p>

          <div
            className="flex flex-wrap gap-2"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
          >
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 border"
                style={{ borderColor: `${c.accent}30`, color: c.accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: giant stat */}
        <div
          className="text-center md:text-right"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(40px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}
        >
          <div
            className="font-bold leading-none"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontSize: "clamp(5rem, 12vw, 11rem)",
              color: c.accent,
              opacity: 0.9,
            }}
          >
            {c.stat}
          </div>
          <div className="text-[14px] text-[var(--text-muted)] mt-3 max-w-xs ml-auto">
            {c.statLabel}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CinematicCases() {
  return (
    <section id="references">
      {/* Header */}
      <div className="relative border-t border-[var(--border)] px-5 md:px-12 py-20" style={{ background: "rgba(5,5,5,0.6)" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">04</span>
            <span className="w-12 h-px bg-[var(--border-strong)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">Références</span>
          </div>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] text-[var(--text)] mb-4"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            Des projets qui tiennent<br />sous contrainte réelle.
          </h2>
          <p className="text-[12px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
            Noms clients confidentiels — impacts vérifiables
          </p>
        </div>
      </div>

      {cases.map((c, i) => (
        <CaseScene key={c.id} c={c} index={i} />
      ))}
    </section>
  );
}
