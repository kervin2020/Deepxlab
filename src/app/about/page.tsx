"use client";

import Link from "next/link";
import { useT } from "@/i18n/provider";
import Manifesto from "@/components/Manifesto";
import Founders from "@/components/Founders";
import Values from "@/components/Values";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const COPY = {
  FR: {
    eyebrow: "À propos",
    title: "Qui est DeepXLab.",
    intro:
      "DeepXLab est une startup haïtienne fondée en mai 2026, basée à Port-au-Prince et à Boston. Notre mission : construire l'écosystème technologique d'Haïti, étape par étape — en partant des deux expertises qui génèrent du revenu aujourd'hui pour financer la suite.",
    visionEyebrow: "Notre vision",
    visionTitle: "La Silicon Valley d'Haïti, construite avec les Haïtiens.",
    visionBody:
      "Nous croyons que la technologie doit être construite avec les gens concernés, pas pour eux depuis un bureau. C'est notre philosophie : Technology With, Not For. Nou bati ak, pa pou. Aujourd'hui, deux expertises commerciales (Software & Digital, Éducation STEM) financent le reste. À mesure que nous grandirons, d'autres axes (sécurité, design, hardware, IA, R&D, ventures) rejoindront notre offre — uniquement quand ils seront prêts à livrer pour de vrai.",
    ctaTitle: "Travaillons ensemble.",
    ctaSub: "Vous avez un projet, une idée ou une mission ? Contactez-nous.",
    ctaBtn: "Démarrer un projet",
  },
  EN: {
    eyebrow: "About",
    title: "Who is DeepXLab.",
    intro:
      "DeepXLab is a Haitian startup founded in May 2026, based in Port-au-Prince and Boston. Our mission: build Haiti's technology ecosystem, step by step — starting with the two expertises that generate revenue today to fund what comes next.",
    visionEyebrow: "Our vision",
    visionTitle: "Haiti's Silicon Valley, built with Haitians.",
    visionBody:
      "We believe technology should be built with the people it serves, not for them from a distant office. That is our philosophy: Technology With, Not For. Nou bati ak, pa pou. Today two commercial expertises (Software & Digital, STEM Education) fund the rest. As we grow, other axes (security, design, hardware, AI, R&D, ventures) will join our offering — only when they are ready to ship for real.",
    ctaTitle: "Let's work together.",
    ctaSub: "Got a project, an idea, or a mission? Reach out.",
    ctaBtn: "Start a project",
  },
  ES: {
    eyebrow: "Acerca de",
    title: "Quién es DeepXLab.",
    intro:
      "DeepXLab es una startup haitiana fundada en mayo de 2026, con sede en Puerto Príncipe y Boston. Nuestra misión: construir el ecosistema tecnológico de Haití, paso a paso — empezando por las dos experticias que generan ingresos hoy para financiar lo que viene.",
    visionEyebrow: "Nuestra visión",
    visionTitle: "El Silicon Valley de Haití, construido con los haitianos.",
    visionBody:
      "Creemos que la tecnología debe construirse con las personas a las que sirve, no para ellas desde una oficina lejana. Esa es nuestra filosofía: Technology With, Not For. Nou bati ak, pa pou. Hoy dos experticias comerciales (Software & Digital, Educación STEM) financian el resto. A medida que crezcamos, otros ejes (seguridad, diseño, hardware, IA, I+D, ventures) se unirán a nuestra oferta — solo cuando estén listos para entregar de verdad.",
    ctaTitle: "Trabajemos juntos.",
    ctaSub: "¿Tienes un proyecto, una idea o una misión? Contáctanos.",
    ctaBtn: "Iniciar un proyecto",
  },
  HT: {
    eyebrow: "Sou nou",
    title: "Kiyès DeepXLab ye.",
    intro:
      "DeepXLab se yon startup ayisyen ki fonde nan me 2026, ki baze ant Pòtoprens ak Boston. Misyon nou : bati ekosistèm teknolojik Ayiti, etap pa etap — nou kòmanse ak de ekspètiz ki jenere lajan jodi a pou finanse sa k ap vini an.",
    visionEyebrow: "Vizyon nou",
    visionTitle: "Silicon Valley Ayiti, bati ak Ayisyen yo.",
    visionBody:
      "Nou kwè teknoloji ta dwe bati ak moun li sèvi yo, pa pou yo soti nan yon biwo lwen. Sa a se filozofi nou : Technology With, Not For. Nou bati ak, pa pou. Jodi a de ekspètiz komèsyal (Software & Digital, Edikasyon STEM) finanse rès la. Pandan nou ap grandi, lòt aks (sekirite, design, hardware, IA, R&D, ventures) ap antre nan òf nou — sèlman lè yo pare pou livre tout bon.",
    ctaTitle: "Annou travay ansanm.",
    ctaSub: "Èske w gen yon pwojè, yon lide oswa yon misyon ? Kontakte nou.",
    ctaBtn: "Lanse yon pwojè",
  },
} as const;

export default function AboutPage() {
  const { lang, t } = useT();
  const c = COPY[lang] || COPY.FR;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--soft-veil)" }} />
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.eyebrow}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h1
                className="text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase tracking-[-0.025em] leading-[0.95] text-[var(--text)]"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                {c.title}
              </h1>
              <p className="mt-10 text-[16px] md:text-[19px] text-[var(--text-muted)] leading-[1.7] max-w-2xl">
                {c.intro}
              </p>
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder
                label={t.ph_hero_team}
                variant="lifestyle"
                aspect="4/5"
              />
            </div>
          </div>
        </div>
      </section>

      <Manifesto />
      <Founders />
      <Values />

      {/* Vision narrative */}
      <section className="relative py-24 md:py-32 border-t border-[var(--border)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.visionEyebrow}</span>
          </div>
          <h2
            className="text-[clamp(2rem,5vw,3.6rem)] font-bold uppercase tracking-[-0.02em] leading-[1.05] text-[var(--text)] mb-10 max-w-4xl"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            {c.visionTitle}
          </h2>
          <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-[1.8] max-w-3xl">
            {c.visionBody}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 border-t border-[var(--border)]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex flex-col items-start gap-8">
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] text-[var(--text)] max-w-3xl"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            {c.ctaTitle}
          </h2>
          <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] max-w-xl">{c.ctaSub}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white text-[13px] uppercase tracking-[0.05em] font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all"
          >
            {c.ctaBtn}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
