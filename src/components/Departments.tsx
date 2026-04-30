"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/provider";

// SVG icons for the 6 departments — kept in code (not i18n) since they're visual
const departmentIcons = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="6" width="24" height="20" rx="2" />
      <path d="M10 13l4 4-4 4M17 21h5" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="8" width="24" height="6" rx="1" />
      <rect x="4" y="18" width="24" height="6" rx="1" />
      <circle cx="26" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="26" cy="21" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M16 4l10 4v8c0 6-4 10-10 12C10 26 6 22 6 16V8l10-4z" />
      <path d="M12 16l3 3 5-5" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="16" r="8" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 20c0-4 3-7 8-7s8 3 8 7" />
      <path d="M6 22h20M10 26h12" />
      <path d="M16 13V8" />
      <circle cx="16" cy="6" r="2" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="8" y="8" width="16" height="16" rx="2" />
      <rect x="12" y="12" width="8" height="8" rx="1" />
      <path d="M8 12H4M8 20H4M24 12h4M24 20h4M12 8V4M20 8V4M12 24v4M20 24v4" />
    </svg>
  ),
];

type Dept = { num: string; name: string; desc: string; services: string[]; icon: React.ReactNode };

function DeptCard({ dept, delay }: { dept: Dept; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="dept-card relative border border-[var(--border)] p-7 md:p-8 flex flex-col gap-5 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top bar */}
      <div className="dept-bar h-[2px] w-8 bg-[var(--border-strong)] mb-1" />

      {/* Number + Icon */}
      <div className="flex items-start justify-between">
        <span
          className="text-[clamp(3rem,5vw,4.5rem)] font-bold leading-none opacity-20"
          style={{ fontFamily: '"Clash Display", sans-serif', color: "var(--accent)" }}
        >
          {dept.num}
        </span>
        <span style={{ color: hovered ? "var(--accent)" : "var(--text-muted)", transition: "color 0.3s" }}>
          {dept.icon}
        </span>
      </div>

      {/* Name */}
      <h3
        className="text-[18px] md:text-[20px] font-medium text-[var(--text)] leading-tight"
      >
        {dept.name}
      </h3>

      {/* Desc */}
      <p className="text-[13px] md:text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">
        {dept.desc}
      </p>

      {/* Services — visible au hover */}
      <ul
        className="space-y-1.5 overflow-hidden"
        style={{
          maxHeight: hovered ? "200px" : "0",
          opacity: hovered ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
      >
        {dept.services.map((s) => (
          <li key={s} className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
            <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
            <span className="relative">
              {s}
              <span className="absolute -bottom-px left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </span>
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <div className="dept-arrow text-[var(--text-muted)] text-sm self-end mt-auto">→</div>
    </div>
  );
}

export default function Departments() {
  const { t } = useT();
  // Build department list from i18n div_items + visual icons
  const departments: Dept[] = (t.div_items || []).slice(0, 6).map((d, i) => ({
    num: String(i + 1).padStart(2, "0"),
    name: d.name,
    desc: d.desc,
    services: d.services,
    icon: departmentIcons[i] || departmentIcons[0],
  }));

  return (
    <section id="departments" className="relative py-24 md:py-40">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--section-veil)" }} />
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">03</span>
            <span className="w-12 h-px bg-[var(--border-strong)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{t.depts_section}</span>
          </div>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] text-[var(--text)]"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            {t.depts_title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {departments.map((d, i) => (
            <DeptCard key={d.num} dept={d} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
