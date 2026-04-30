"use client";

import { useEffect, useState } from "react";
import { useT } from "@/i18n/provider";

/* Sticky floating CTA — appears after scrolling past the hero,
   anchors the user to the contact form at all times. */
export default function FloatingContact() {
  const { t } = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      data-cursor
      className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 group flex items-center gap-3 pl-5 pr-4 py-3.5 bg-[var(--accent)] text-white shadow-[0_8px_30px_rgba(0,102,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,102,255,0.6)] transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        pointerEvents: visible ? "auto" : "none",
        fontFamily: "Inter, sans-serif",
      }}
      aria-label="Start a project"
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      <span className="text-[12px] uppercase tracking-[0.1em] font-medium">
        {t.cta_btn_primary}
      </span>
      <span className="text-[14px] group-hover:translate-x-1 transition-transform">→</span>
    </a>
  );
}
