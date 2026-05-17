"use client";

import { useT } from "@/i18n/provider";

type FounderCopy = {
  section: string;
  title: string;
  founders: { name: string; role: string; bio: string; location: string; photoNote: string }[];
};

const COPY: Record<string, FounderCopy> = {
  FR: {
    section: "Les fondateurs",
    title: "Deux frères. Deux villes. Une mission.",
    founders: [
      {
        name: "Kervin Robergeau",
        role: "Co-fondateur · Directeur Technique",
        bio: "Étudiant en informatique à l'ESIH (Port-au-Prince). Expert en développement web, systèmes embarqués (ESP32, Arduino) et hardware. Pilote la technique et la production en Haïti.",
        location: "Port-au-Prince, Haïti",
        photoNote: "Photo à venir",
      },
      {
        name: "Kenny Robergeau",
        role: "Co-fondateur · Directeur Commercial",
        bio: "Basé à Boston. Pont entre la diaspora haïtienne, les clients US et le marché haïtien. Pilote le commercial et les partenariats internationaux.",
        location: "Boston, USA",
        photoNote: "Photo à venir",
      },
    ],
  },
  EN: {
    section: "The founders",
    title: "Two brothers. Two cities. One mission.",
    founders: [
      {
        name: "Kervin Robergeau",
        role: "Co-founder · Chief Technical Officer",
        bio: "Computer science student at ESIH (Port-au-Prince). Expert in web development, embedded systems (ESP32, Arduino) and hardware. Drives engineering and production in Haiti.",
        location: "Port-au-Prince, Haiti",
        photoNote: "Photo coming soon",
      },
      {
        name: "Kenny Robergeau",
        role: "Co-founder · Chief Commercial Officer",
        bio: "Based in Boston. Bridge between the Haitian diaspora, US clients and the Haitian market. Drives sales and international partnerships.",
        location: "Boston, USA",
        photoNote: "Photo coming soon",
      },
    ],
  },
  ES: {
    section: "Los fundadores",
    title: "Dos hermanos. Dos ciudades. Una misión.",
    founders: [
      {
        name: "Kervin Robergeau",
        role: "Cofundador · Director Técnico",
        bio: "Estudiante de informática en ESIH (Puerto Príncipe). Experto en desarrollo web, sistemas embebidos (ESP32, Arduino) y hardware. Lidera la técnica y la producción en Haití.",
        location: "Puerto Príncipe, Haití",
        photoNote: "Foto próximamente",
      },
      {
        name: "Kenny Robergeau",
        role: "Cofundador · Director Comercial",
        bio: "Basado en Boston. Puente entre la diáspora haitiana, los clientes de EE.UU. y el mercado haitiano. Lidera lo comercial y las alianzas internacionales.",
        location: "Boston, EE.UU.",
        photoNote: "Foto próximamente",
      },
    ],
  },
  HT: {
    section: "Fondatè yo",
    title: "De frè. De vil. Yon sèl misyon.",
    founders: [
      {
        name: "Kervin Robergeau",
        role: "Ko-fondatè · Direktè Teknik",
        bio: "Etidyan enfòmatik nan ESIH (Pòtoprens). Ekspè nan devlopman wèb, sistèm anbake (ESP32, Arduino) ak hardware. Dirije teknik ak pwodiksyon ann Ayiti.",
        location: "Pòtoprens, Ayiti",
        photoNote: "Foto ap vini",
      },
      {
        name: "Kenny Robergeau",
        role: "Ko-fondatè · Direktè Komèsyal",
        bio: "Baze nan Boston. Pon ant dyaspora ayisyen an, kliyan US yo ak mache ayisyen an. Dirije komèsyal ak patenarya entènasyonal yo.",
        location: "Boston, Etazini",
        photoNote: "Foto ap vini",
      },
    ],
  },
};

export default function Founders() {
  const { lang } = useT();
  const c = COPY[lang] || COPY.FR;

  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--border)]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-px bg-[var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.section}</span>
        </div>

        <h2
          className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] text-[var(--text)] mb-16 md:mb-20 max-w-4xl"
          style={{ fontFamily: '"Clash Display", sans-serif' }}
        >
          {c.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
          {c.founders.map((f) => (
            <article
              key={f.name}
              className="p-8 md:p-12 flex flex-col gap-6"
              style={{ background: "var(--bg)" }}
            >
              {/* Placeholder photo frame — honest empty state, ready for real photo */}
              <div
                className="relative w-full aspect-square max-w-[280px] border border-[var(--border-strong)] flex items-center justify-center text-center"
                style={{ background: "var(--bg-elev)" }}
                aria-label={`${f.name} — ${f.photoNote}`}
              >
                <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[0.25em]">{f.photoNote}</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)] mb-2 font-mono">
                  {f.location}
                </div>
                <h3
                  className="text-[22px] md:text-[26px] font-bold text-[var(--text)] mb-1"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  {f.name}
                </h3>
                <div className="text-[13px] text-[var(--text-muted)] uppercase tracking-[0.1em] mb-5">
                  {f.role}
                </div>
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed max-w-md">
                  {f.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
