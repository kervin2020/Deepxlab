"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useT } from "@/i18n/provider";
import type { Lang } from "@/i18n/translations";

const languages: Lang[] = ["FR", "EN", "ES", "HT"];

export default function Header() {
  const { t, lang, setLang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-[76px] md:h-[80px] flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-bone hover:text-[var(--accent)] transition-colors"
        >
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((o) => !o)}
              className="text-[13px] text-bone hover:text-bone transition-colors relative group py-2 flex items-center gap-1.5"
              aria-expanded={servicesOpen}
            >
              {t.svc_section}
              <span className="text-[9px] opacity-60">▾</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="bg-[var(--bg)] border border-[var(--border-strong)] min-w-[320px] py-2">
                  {t.svc_items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 hover:bg-[var(--bg-elev-2)] transition-colors group"
                    >
                      <div className="text-[11px] font-mono text-[var(--accent)] tracking-[0.2em] mb-1">
                        {s.tag}
                      </div>
                      <div className="text-[14px] text-bone group-hover:text-[var(--accent)] transition-colors">
                        {s.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#manifesto"
            className="text-[13px] text-bone hover:text-bone transition-colors relative group py-2"
          >
            {t.nav_approche}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="/#cases"
            className="text-[13px] text-bone hover:text-bone transition-colors relative group py-2"
          >
            {t.cases_section}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 px-2.5 py-2 text-[12px] text-bone hover:text-bone border border-transparent hover:border-[var(--border-strong)] transition-colors"
              aria-label={t.lang_label}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <span className="font-medium">{lang}</span>
              <span className="text-[9px] opacity-60">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[var(--bg)] border border-[var(--border-strong)] min-w-[80px] py-1">
                {languages.map((l) => (
                  <button
                    key={l}
                    onMouseDown={() => {
                      setLang(l as Lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--bg-elev-2)] transition-colors ${
                      l === lang ? "text-[var(--accent)]" : "text-bone"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="p-2 text-bone hover:text-bone border border-transparent hover:border-[var(--border-strong)] transition-colors"
            aria-label="Changer de thème"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <Link
            href="/#cta"
            className="hidden sm:inline-flex group items-center gap-2 px-4 py-2 text-[12px] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.nav_contact}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-bone border border-transparent hover:border-[var(--border-strong)] transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] md:top-[80px] z-40 bg-[var(--bg)] border-t border-[var(--border)] overflow-y-auto">
          <nav className="flex flex-col px-5 py-8 gap-1">
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="flex items-center justify-between text-[18px] text-bone py-4 border-b border-[var(--border)] transition-colors"
              aria-expanded={mobileServicesOpen}
            >
              <span>{t.svc_section}</span>
              <span
                className={`text-[var(--accent)] transition-transform ${
                  mobileServicesOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col border-b border-[var(--border)] bg-[var(--bg-elev)]">
                {t.svc_items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="px-5 py-4 text-[15px] text-bone hover:text-[var(--accent)] transition-colors border-t border-[var(--border)] first:border-t-0"
                  >
                    <span className="text-[11px] font-mono text-[var(--accent)] tracking-[0.2em] mr-3">
                      {s.tag}
                    </span>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/#manifesto"
              onClick={() => setMobileOpen(false)}
              className="text-[18px] text-bone hover:text-[var(--accent)] py-4 border-b border-[var(--border)] transition-colors"
            >
              {t.nav_approche}
            </Link>
            <Link
              href="/#cases"
              onClick={() => setMobileOpen(false)}
              className="text-[18px] text-bone hover:text-[var(--accent)] py-4 border-b border-[var(--border)] transition-colors"
            >
              {t.cases_section}
            </Link>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ash mb-3">{t.lang_label}</div>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l as Lang)}
                      className={`px-4 py-2 text-[13px] border transition-colors ${
                        l === lang
                          ? "border-[var(--accent)] text-[var(--accent)]"
                          : "border-[var(--border-strong)] text-bone hover:border-[var(--accent)]"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ash mb-3">Thème</div>
                <button
                  onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                  className="px-4 py-2 text-[13px] border border-[var(--border-strong)] text-bone hover:border-[var(--accent)] transition-colors"
                >
                  {theme === "dark" ? t.theme_light : t.theme_dark}
                </button>
              </div>

              <Link
                href="/#cta"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[14px] bg-[var(--accent)] text-black font-medium hover:bg-[var(--text)] transition-colors"
              >
                {t.nav_contact} →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
