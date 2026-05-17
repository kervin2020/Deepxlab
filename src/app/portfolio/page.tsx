"use client";

import Link from "next/link";
import { useT } from "@/i18n/provider";
import CinematicCases from "@/components/CinematicCases";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const COPY = {
  FR: {
    eyebrow: "Portfolio",
    title: "Nos projets.",
    intro:
      "Premiers projets livrés pour des clients en Haïti et dans la diaspora. Études de cas détaillées et photos terrain à venir.",
    approachEyebrow: "Notre approche terrain",
    approachTitle: "Nou bati ak, pa pou.",
    approachBody:
      "Nous allons sur le terrain. Nous interviewons de vraies personnes. Nous testons nos prototypes avec de vrais utilisateurs avant de scaler. Chaque projet livré est le résultat de cette méthode — pas d'un brief PowerPoint lu depuis Boston.",
    testimEyebrow: "Témoignages",
    testimTitle: "Bientôt — nos premiers clients partagent leur expérience.",
    testimBody:
      "Nous préférons attendre d'avoir de vrais retours formalisés plutôt que d'afficher des phrases inventées. Cette section sera remplie au fur et à mesure.",
    ctaTitle: "Et le prochain projet ?",
    ctaSub: "Si vous voulez qu'il soit le prochain dans cette liste, parlons-en.",
    ctaBtn: "Démarrer un projet",
  },
  EN: {
    eyebrow: "Portfolio",
    title: "Our projects.",
    intro:
      "First projects delivered for clients in Haiti and the diaspora. Detailed case studies and field photos coming soon.",
    approachEyebrow: "Our field approach",
    approachTitle: "Nou bati ak, pa pou.",
    approachBody:
      "We go on the ground. We interview real people. We test our prototypes with real users before scaling. Every project shipped is the result of this method — not of a PowerPoint brief read from Boston.",
    testimEyebrow: "Testimonials",
    testimTitle: "Soon — our first clients share their experience.",
    testimBody:
      "We would rather wait for real, formalised feedback than display invented quotes. This section will fill up over time.",
    ctaTitle: "What about the next project?",
    ctaSub: "If you want it next in this list, let's talk.",
    ctaBtn: "Start a project",
  },
  ES: {
    eyebrow: "Portafolio",
    title: "Nuestros proyectos.",
    intro:
      "Primeros proyectos entregados para clientes en Haití y la diáspora. Estudios de caso detallados y fotos de campo próximamente.",
    approachEyebrow: "Nuestro enfoque de campo",
    approachTitle: "Nou bati ak, pa pou.",
    approachBody:
      "Vamos al terreno. Entrevistamos a personas reales. Probamos nuestros prototipos con usuarios reales antes de escalar. Cada proyecto entregado es resultado de este método — no de un PowerPoint leído desde Boston.",
    testimEyebrow: "Testimonios",
    testimTitle: "Próximamente — nuestros primeros clientes comparten su experiencia.",
    testimBody:
      "Preferimos esperar a tener retroalimentación real y formalizada antes que mostrar frases inventadas. Esta sección se completará con el tiempo.",
    ctaTitle: "¿Y el próximo proyecto?",
    ctaSub: "Si quieres que sea el siguiente en esta lista, hablemos.",
    ctaBtn: "Iniciar un proyecto",
  },
  HT: {
    eyebrow: "Portfolio",
    title: "Pwojè nou yo.",
    intro:
      "Premye pwojè livre pou kliyan ann Ayiti ak nan dyaspora a. Etid ka detaye ak foto teren ap vini.",
    approachEyebrow: "Apwòch sou teren",
    approachTitle: "Nou bati ak, pa pou.",
    approachBody:
      "Nou ale sou teren an. Nou entèvyou vrè moun. Nou teste pwototip nou ak vrè itilizatè anvan nou agrandi. Chak pwojè livre se rezilta metòd sa a — pa yon PowerPoint ki li soti Boston.",
    testimEyebrow: "Temwayaj",
    testimTitle: "Talè — premye kliyan nou yo pataje eksperyans yo.",
    testimBody:
      "Nou prefere tann pou nou genyen vrè retou fòmalize pase pou nou afiche fraz envante. Seksyon sa a ap ranpli ak tan an.",
    ctaTitle: "E pwojè pwochen an ?",
    ctaSub: "Si w vle li vin pwochen nan lis sa a, annou pale.",
    ctaBtn: "Lanse yon pwojè",
  },
} as const;

export default function PortfolioPage() {
  const { lang, t } = useT();
  const c = COPY[lang] || COPY.FR;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--soft-veil)" }} />
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">01</span>
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
                label={t.ph_portfolio_hero}
                variant="abstract"
                aspect="4/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 5 real projects */}
      <CinematicCases />

      {/* Field approach */}
      <section className="relative py-24 md:py-32 border-t border-[var(--border)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">02</span>
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.approachEyebrow}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] leading-[1.05] text-[var(--accent)] mb-10 max-w-2xl"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                {c.approachTitle}
              </h2>
              <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-[1.8]">
                {c.approachBody}
              </p>
            </div>
            <ImagePlaceholder
              label={t.ph_portfolio_approach}
              variant="lifestyle"
              aspect="4/3"
            />
          </div>
        </div>
      </section>

      {/* Honest testimonial placeholder */}
      <section className="relative py-24 md:py-32 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">03</span>
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{c.testimEyebrow}</span>
          </div>
          <div
            className="border border-dashed border-[var(--border-strong)] p-10 md:p-16 text-center max-w-3xl mx-auto"
            style={{ background: "var(--bg-elev)" }}
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4 font-mono">
              {c.testimEyebrow}
            </div>
            <h3
              className="text-[clamp(1.4rem,3vw,2.4rem)] font-bold text-[var(--text)] mb-6 leading-tight"
              style={{ fontFamily: '"Clash Display", sans-serif' }}
            >
              {c.testimTitle}
            </h3>
            <p className="text-[14px] text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">
              {c.testimBody}
            </p>
          </div>
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
