"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Divisions", href: "#divisions" },
  { label: "Approche", href: "#flywheel" },
  { label: "Signature", href: "#signature" },
  { label: "Présence", href: "#global" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A0A0B]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono text-[13px] tracking-tight text-bone">
            DXL
          </span>
          <span className="w-[2px] h-4 bg-[#00FF94] blink" />
          <span className="hidden sm:inline font-mono text-[11px] text-ash group-hover:text-bone transition-colors">
            / DEEPXLAB
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ash hover:text-bone transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00FF94] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-[11px] text-ash">
            FR
          </span>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-[12px] font-mono uppercase tracking-wider border border-bone/20 hover:border-[#00FF94] hover:text-[#00FF94] transition-colors"
          >
            Démarrer
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
