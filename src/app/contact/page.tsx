"use client";

import { useT } from "@/i18n/provider";
import ContactForm from "@/components/ContactForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

// WhatsApp Business — replace with the real number when provided by Kervin.
// Keep the +509XXXXXXXX placeholder format so wa.me builds correctly even
// before the real number is wired in.
const WHATSAPP_NUMBER = "+509XXXXXXXX";
const WHATSAPP_DIGITS = WHATSAPP_NUMBER.replace(/[^\d]/g, "");

const COPY = {
  FR: {
    eyebrow: "Contact",
    title: "Parlons de votre projet.",
    intro:
      "Trois canaux. Choisissez celui qui vous convient. Réponse sous 24 h ouvrées.",
    whatsappLabel: "WhatsApp Business",
    whatsappDesc: "Le plus rapide. Idéal pour Haïti et la diaspora.",
    whatsappCta: "Écrire sur WhatsApp",
    emailLabel: "Email",
    emailDesc: "Pour un message structuré ou un dossier.",
    emailCta: "Envoyer un email",
    formLabel: "Formulaire",
    formDesc: "Décrivez votre projet en quelques champs.",
    formCta: "Remplir le formulaire",
    presence: "Présence",
    hoursLabel: "Horaires",
    hoursValue: "Lundi – Vendredi · 8h – 18h (heure d'Haïti, UTC-5)",
    placeholderNote:
      "Numéro WhatsApp en cours d'attribution — remplacez +509XXXXXXXX dans src/app/contact/page.tsx dès qu'il est disponible.",
  },
  EN: {
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    intro:
      "Three channels. Pick the one that fits you best. Reply within one business day.",
    whatsappLabel: "WhatsApp Business",
    whatsappDesc: "Fastest. Best for Haiti and the diaspora.",
    whatsappCta: "Message on WhatsApp",
    emailLabel: "Email",
    emailDesc: "For a structured message or a brief.",
    emailCta: "Send an email",
    formLabel: "Form",
    formDesc: "Tell us about your project in a few fields.",
    formCta: "Fill in the form",
    presence: "Presence",
    hoursLabel: "Hours",
    hoursValue: "Monday – Friday · 8 AM – 6 PM (Haiti time, UTC-5)",
    placeholderNote:
      "WhatsApp number being provisioned — replace +509XXXXXXXX in src/app/contact/page.tsx when ready.",
  },
  ES: {
    eyebrow: "Contacto",
    title: "Hablemos de su proyecto.",
    intro:
      "Tres canales. Elija el que más le convenga. Respuesta en menos de 24 h hábiles.",
    whatsappLabel: "WhatsApp Business",
    whatsappDesc: "Lo más rápido. Ideal para Haití y la diáspora.",
    whatsappCta: "Escribir por WhatsApp",
    emailLabel: "Email",
    emailDesc: "Para un mensaje estructurado o un expediente.",
    emailCta: "Enviar un correo",
    formLabel: "Formulario",
    formDesc: "Cuéntenos su proyecto en algunos campos.",
    formCta: "Completar el formulario",
    presence: "Presencia",
    hoursLabel: "Horario",
    hoursValue: "Lunes – Viernes · 8h – 18h (hora de Haití, UTC-5)",
    placeholderNote:
      "Número de WhatsApp en asignación — reemplace +509XXXXXXXX en src/app/contact/page.tsx cuando esté listo.",
  },
  HT: {
    eyebrow: "Kontak",
    title: "Annou pale de pwojè w la.",
    intro:
      "Twa kanal. Chwazi sa ki pi bon pou ou. Repons nan 24è.",
    whatsappLabel: "WhatsApp Business",
    whatsappDesc: "Pi rapid la. Pi bon pou Ayiti ak dyaspora a.",
    whatsappCta: "Voye mesaj sou WhatsApp",
    emailLabel: "Email",
    emailDesc: "Pou yon mesaj estriktire oswa yon dosye.",
    emailCta: "Voye yon email",
    formLabel: "Fòm",
    formDesc: "Di nou pwojè w la nan kèk chan.",
    formCta: "Ranpli fòm nan",
    presence: "Prezans",
    hoursLabel: "Lè travay",
    hoursValue: "Lendi – Vandredi · 8è – 18è (lè Ayiti, UTC-5)",
    placeholderNote:
      "Nimewo WhatsApp ap pare — chanje +509XXXXXXXX nan src/app/contact/page.tsx lè li pare.",
  },
} as const;

function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 1.9.8 2.3.7 2.7.7.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export default function ContactPage() {
  const { lang } = useT();
  const c = COPY[lang] || COPY.FR;
  const hasRealWhatsapp = !WHATSAPP_NUMBER.includes("X");
  const waHref = hasRealWhatsapp ? `https://wa.me/${WHATSAPP_DIGITS}` : "#";

  const channels = [
    {
      label: c.whatsappLabel,
      desc: c.whatsappDesc,
      href: waHref,
      cta: c.whatsappCta,
      icon: <WaIcon />,
      value: WHATSAPP_NUMBER,
      external: hasRealWhatsapp,
      disabled: !hasRealWhatsapp,
    },
    {
      label: c.emailLabel,
      desc: c.emailDesc,
      href: "mailto:contact@deepxlab.com",
      cta: c.emailCta,
      icon: <MailIcon />,
      value: "contact@deepxlab.com",
      external: false,
      disabled: false,
    },
    {
      label: c.formLabel,
      desc: c.formDesc,
      href: "#contact",
      cta: c.formCta,
      icon: <FormIcon />,
      value: "↓",
      external: false,
      disabled: false,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[var(--border)] overflow-hidden">
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
                label="Visuel équipe / atelier — à venir"
                variant="lifestyle"
                aspect="4/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three channels */}
      <section className="relative py-20 md:py-28 border-b border-[var(--border)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noopener noreferrer" : undefined}
                aria-disabled={ch.disabled}
                onClick={(e) => {
                  if (ch.disabled) e.preventDefault();
                }}
                className={`group p-8 md:p-10 flex flex-col gap-6 transition-colors ${
                  ch.disabled ? "cursor-not-allowed opacity-70" : "hover:bg-[var(--bg-elev-2)]"
                }`}
                style={{ background: "var(--bg)" }}
              >
                <div className="flex items-center gap-3 text-[var(--accent)]">
                  {ch.icon}
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    {ch.label}
                  </span>
                </div>
                <div
                  className="text-[18px] md:text-[20px] text-[var(--text)] font-medium break-all"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  {ch.value}
                </div>
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-1">
                  {ch.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mt-auto">
                  {ch.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>

          {!hasRealWhatsapp && (
            <p className="mt-8 text-[12px] text-[var(--text-muted)] leading-relaxed max-w-2xl font-mono">
              ⓘ {c.placeholderNote}
            </p>
          )}
        </div>
      </section>

      {/* Reuse the existing rich form (anchor: #contact) */}
      <ContactForm />

      {/* Presence + hours */}
      <section className="relative py-20 md:py-24 border-t border-[var(--border)]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-4 font-mono">
              {c.presence}
            </div>
            <div className="text-[20px] md:text-[24px] text-[var(--text)]" style={{ fontFamily: '"Clash Display", sans-serif' }}>
              Port-au-Prince, HT × Boston, US
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-4 font-mono">
              {c.hoursLabel}
            </div>
            <div className="text-[15px] md:text-[17px] text-[var(--text)] leading-relaxed">
              {c.hoursValue}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
