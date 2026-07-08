"use client";

import { useState } from "react";
import { useT } from "@/i18n/provider";

/* Premium contact form. Submits to mailto (works without backend);
   can be wired to a /api/contact endpoint later. */

/* Aligned with what we actually sell today (see /services) — the old list
   (IT infrastructure, smart security, SaaS…) contradicted the “two active
   expertises” positioning. */
const projectTypes = [
  { fr: "Site vitrine ou institutionnel", en: "Showcase / institutional website", es: "Sitio web institucional", ht: "Sit vitrin oswa enstitisyonèl" },
  { fr: "Site e-commerce", en: "E-commerce website", es: "Tienda en línea", ht: "Sit e-commerce" },
  { fr: "Application web ou mobile sur mesure", en: "Custom web or mobile app", es: "Aplicación web o móvil a medida", ht: "Aplikasyon web oswa mobil sou mezi" },
  { fr: "Kits STEM ou cours de robotique", en: "STEM kits or robotics classes", es: "Kits STEM o clases de robótica", ht: "Kit STEM oswa kou robotik" },
  { fr: "Consulting IT pour PME", en: "IT consulting for SMBs", es: "Consultoría IT para pymes", ht: "Konsiltasyon IT pou PME" },
  { fr: "Autre", en: "Other", es: "Otro", ht: "Lòt" },
];

export default function ContactForm() {
  const { t, lang } = useT();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: projectTypes[0][lang === "EN" ? "en" : lang === "ES" ? "es" : lang === "HT" ? "ht" : "fr"],
    message: "",
  });

  const labels = {
    FR: {
      title: "Démarrer un projet",
      sub: "Décrivez-nous votre besoin. Réponse sous 24h ouvrées.",
      name: "Nom complet",
      email: "Email",
      company: "Organisation",
      type: "Type de projet",
      message: "Décrivez votre besoin",
      send: "Envoyer le message",
      sent: "Votre messagerie va s'ouvrir.",
      sentSub: "Le message est pré-rempli — il ne reste qu'à cliquer sur envoyer. Si rien ne s'ouvre, écrivez-nous directement à contact@deepxlab.com, on répond sous 24h.",
    },
    EN: {
      title: "Start a project",
      sub: "Tell us about your need. Reply within one business day.",
      name: "Full name",
      email: "Email",
      company: "Organisation",
      type: "Project type",
      message: "Describe your need",
      send: "Send message",
      sent: "Your email app is opening.",
      sentSub: "The message is pre-filled — just hit send. If nothing opens, email us directly at contact@deepxlab.com, we reply within 24 hours.",
    },
    ES: {
      title: "Iniciar un proyecto",
      sub: "Cuéntenos su necesidad. Respuesta en menos de 24h hábiles.",
      name: "Nombre completo",
      email: "Email",
      company: "Organización",
      type: "Tipo de proyecto",
      message: "Describa su necesidad",
      send: "Enviar mensaje",
      sent: "Se abrirá su aplicación de correo.",
      sentSub: "El mensaje ya está listo — solo falta enviarlo. Si no se abre nada, escríbanos directamente a contact@deepxlab.com, respondemos en 24 horas.",
    },
    HT: {
      title: "Lanse yon pwojè",
      sub: "Di nou bezwen ou. Repons nan 24è.",
      name: "Non konplè",
      email: "Email",
      company: "Òganizasyon",
      type: "Kalite pwojè",
      message: "Dekri bezwen ou",
      send: "Voye mesaj la",
      sent: "Aplikasyon email ou pral ouvri.",
      sentSub: "Mesaj la deja pare — ou jis bezwen voye l. Si anyen pa ouvri, ekri nou dirèkteman nan contact@deepxlab.com, n ap reponn nan 24è.",
    },
  };
  const L = labels[lang] || labels.FR;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[DeepXlab] ${form.type} — ${form.name}`;
    const body = [
      `${L.name}: ${form.name}`,
      `${L.email}: ${form.email}`,
      `${L.company}: ${form.company || "-"}`,
      `${L.type}: ${form.type}`,
      "",
      `${L.message}:`,
      form.message,
    ].join("\n");
    window.location.href = `mailto:contact@deepxlab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]"
            style={{ fontFamily: '"Clash Display", sans-serif' }}>08</span>
          <span className="w-12 h-px bg-[var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">Contact</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: title + contacts */}
          <div className="md:col-span-5">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase tracking-[-0.025em] leading-[0.95] text-[var(--text)] mb-6"
              style={{ fontFamily: '"Clash Display", sans-serif' }}
            >
              {L.title}
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-[1.7] mb-12 max-w-md">
              {L.sub}
            </p>

            <div className="space-y-5 text-[14px]">
              {[
                { label: lang === "EN" ? "Sales" : lang === "ES" ? "Ventas" : lang === "HT" ? "Vant" : "Commercial", email: "contact@deepxlab.com" },
                { label: lang === "EN" ? "Partnerships" : lang === "ES" ? "Alianzas" : lang === "HT" ? "Patenarya" : "Partenariats", email: "partners@deepxlab.com" },
                { label: lang === "EN" ? "Careers" : lang === "ES" ? "Carreras" : lang === "HT" ? "Karyè" : "Carrières", email: "careers@deepxlab.com" },
                { label: lang === "EN" ? "Press" : lang === "ES" ? "Prensa" : lang === "HT" ? "Près" : "Presse", email: "press@deepxlab.com" },
              ].map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="group flex items-center justify-between py-3 border-b border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                  data-cursor
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    {c.label}
                  </span>
                  <span className="text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {c.email}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[var(--border)] flex gap-8 text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              <span>Boston, US</span>
              <span>Port-au-Prince, HT</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div
                className="border border-[var(--accent)] p-10 md:p-14 flex flex-col items-center text-center"
                style={{
                  background: "rgba(0,102,255,0.04)",
                  animation: "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
                }}
              >
                <div className="w-12 h-12 rounded-full border border-[var(--accent)] flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text)]"
                  style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                  {L.sent}
                </h3>
                <p className="text-[var(--text-muted)] text-[14px]">{L.sentSub}</p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                style={{ background: "var(--border)" }}
              >
                <Field
                  label={L.name}
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label={L.email}
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label={L.company}
                  className="sm:col-span-2"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <SelectField
                  label={L.type}
                  className="sm:col-span-2"
                  value={form.type}
                  options={projectTypes.map((p) =>
                    lang === "EN" ? p.en : lang === "ES" ? p.es : lang === "HT" ? p.ht : p.fr
                  )}
                  onChange={(v) => setForm({ ...form, type: v })}
                />
                <TextAreaField
                  label={L.message}
                  className="sm:col-span-2"
                  required
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                />
                <div className="sm:col-span-2 flex justify-end pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white text-[13px] uppercase tracking-[0.05em] font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300"
                    data-cursor
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {L.send}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  className = "",
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label
      className={`group block bg-[var(--bg)] p-5 ${className}`}
      style={{ transition: "background 0.3s ease" }}
    >
      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2">
        {label}
        {required && <span className="text-[var(--accent)] ml-1">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-[15px] text-[var(--text)] outline-none border-b border-transparent focus:border-[var(--accent)] py-1 transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label className={`group block bg-[var(--bg)] p-5 ${className}`}>
      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-[15px] text-[var(--text)] outline-none border-b border-transparent focus:border-[var(--accent)] py-1 transition-colors cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--bg)] text-[var(--text)]">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  required = false,
  value,
  onChange,
  className = "",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label className={`group block bg-[var(--bg)] p-5 ${className}`}>
      <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2">
        {label}
        {required && <span className="text-[var(--accent)] ml-1">*</span>}
      </span>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="w-full bg-transparent text-[15px] text-[var(--text)] outline-none border-b border-transparent focus:border-[var(--accent)] py-1 transition-colors resize-none"
      />
    </label>
  );
}
