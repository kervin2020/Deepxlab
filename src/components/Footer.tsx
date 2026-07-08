"use client";

import { useT } from "@/i18n/provider";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-elev)] py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[15px] font-medium text-bone">DeepXlab</span>
            </div>
            <p className="text-ash text-sm max-w-sm leading-relaxed">
              {t.hero_tag}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              {t.div_section}
            </div>
            <ul className="space-y-2 text-sm text-bone">
              {t.div_items.map((d) => (
                <li key={d.name} className="truncate">{d.name}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              {t.nav_presence}
            </div>
            <ul className="space-y-2 text-sm text-bone">
              <li>Boston, US</li>
              <li>Port-au-Prince, HT</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              {t.cta_section}
            </div>
            <a
              href="mailto:contact@deepxlab.com"
              className="text-sm text-bone hover:text-[var(--accent)] transition-colors break-all"
            >
              contact@deepxlab.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] text-ash uppercase tracking-widest">
          <span>© {year} DeepXlab — {t.foot_rights}</span>
          <span>Port-au-Prince × Boston</span>
        </div>
      </div>
    </footer>
  );
}
