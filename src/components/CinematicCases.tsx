"use client";

import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useT } from "@/i18n/provider";

// Real client projects DeepXlab has delivered — each links to the live site.
// No invented metrics: the giant token is the project category, not a fake KPI.
const cases = [
  {
    id: "01",
    sector: "Client · Armotech",
    title: "Armotech Security Services",
    desc: "Site corporatif pour une société de sécurité : présentation des services, contact client et structure pensée pour générer des leads.",
    stat: "WEB",
    statLabel: "Site corporatif en ligne",
    tags: ["Site web", "Sécurité privée"],
    url: "https://www.armotechsecurityservices.com/",
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.08) 0%, transparent 70%)",
  },
  {
    id: "02",
    sector: "Client · Jeda Store",
    title: "Jeda Store",
    desc: "Plateforme e-commerce pour produits électroniques : catalogue, commandes via WhatsApp, design responsive et multilingue.",
    stat: "E-COM",
    statLabel: "Plateforme e-commerce livrée",
    tags: ["E-commerce", "Boutique en ligne"],
    url: null,
    accent: "#00FFB2",
    bg: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,255,178,0.06) 0%, transparent 70%)",
  },
  {
    id: "03",
    sector: "Client · Corvington",
    title: "Corvington Security Services",
    desc: "Vitrine professionnelle pour une société de sécurité : présentation de l'offre, structure SEO et génération de leads.",
    stat: "WEB",
    statLabel: "Site corporatif en ligne",
    tags: ["Site web", "Sécurité privée"],
    url: "https://www.corvingtonsecurityservices.com/",
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)",
  },
  {
    id: "04",
    sector: "Client · Roots of Renewal",
    title: "Roots of Renewal Bata",
    desc: "Site pour un projet à impact : présentation de la mission, des actions sur le terrain et des moyens de contribuer.",
    stat: "ONG",
    statLabel: "Projet impact / ONG en ligne",
    tags: ["Site institutionnel", "Impact"],
    url: "https://rootsofrenewalbata.vercel.app/",
    accent: "#00FFB2",
    bg: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,255,178,0.06) 0%, transparent 70%)",
  },
  {
    id: "05",
    sector: "Client · CafeLux",
    title: "CafeLux",
    desc: "Site vitrine : identité de marque, présentation des produits et expérience visuelle soignée pour positionner la marque sur le web.",
    stat: "WEB",
    statLabel: "Site vitrine en ligne",
    tags: ["Site vitrine", "Branding"],
    url: "https://cafelux-cafe-lux.vercel.app/",
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)",
  },
  {
    id: "06",
    sector: "Client · BelParyaj",
    title: "BelParyaj — Sports",
    desc: "Section sports d'une plateforme de paris : événements en direct, structure pensée pour la rapidité d'usage.",
    stat: "APP",
    statLabel: "Plateforme web en ligne",
    tags: ["Application web", "Temps réel"],
    url: "https://belparyaj.vercel.app/sports",
    accent: "#00FFB2",
    bg: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,255,178,0.06) 0%, transparent 70%)",
  },
  {
    id: "07",
    sector: "Client · Gran Bawon",
    title: "Gran Bawon",
    desc: "Site web livré et en ligne. Étude de cas détaillée à venir.",
    stat: "WEB",
    statLabel: "Site en ligne",
    tags: ["Site web", "Client livré"],
    url: "https://gran-bawon.vercel.app/",
    accent: "#0066FF",
    bg: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)",
  },
];

function CaseScene({ c, index }: { c: typeof cases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useT();

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
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
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

          {c.url && (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="group mt-8 inline-flex items-center gap-3 px-6 py-3.5 border text-[12px] uppercase tracking-[0.1em] font-medium"
              style={{
                borderColor: c.accent,
                color: c.accent,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.5s, background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = c.accent;
                e.currentTarget.style.color = "#050505";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = c.accent;
              }}
            >
              {t.cases_visit}
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          )}
        </div>

        {/* Right: project image placeholder — real capture / screenshot to be added later */}
        <div
          className="w-full"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(40px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}
        >
          <ImagePlaceholder
            label={`${t.ph_project_prefix} ${c.title} — ${t.ph_project_suffix}`}
            variant="photo"
            aspect="4/3"
          />
          <div className="flex items-center gap-3 mt-4">
            <span
              className="text-[24px] font-bold leading-none"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                color: c.accent,
              }}
            >
              {c.stat}
            </span>
            <span className="text-[13px] text-[var(--text-muted)]">
              {c.statLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CinematicCases() {
  const { t } = useT();
  return (
    <section id="references">
      {/* Header */}
      <div className="relative border-t border-[var(--border)] px-5 md:px-12 py-20" style={{ background: "var(--section-veil)" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">04</span>
            <span className="w-12 h-px bg-[var(--border-strong)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{t.cases_section}</span>
          </div>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] text-[var(--text)] mb-4 max-w-4xl"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            {t.cases_title}
          </h2>
          <p className="text-[12px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
            {t.cases_confidential}
          </p>
        </div>
      </div>

      {cases.map((c, i) => (
        <CaseScene key={c.id} c={c} index={i} />
      ))}
    </section>
  );
}
