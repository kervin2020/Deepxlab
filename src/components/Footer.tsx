export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--border)] bg-[#0A0A0B] py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[15px] font-medium text-bone">DeepXlab</span>
              <span className="font-mono text-[10px] text-ash uppercase tracking-widest">/ Group</span>
            </div>
            <p className="text-ash text-sm max-w-sm leading-relaxed">
              Groupe technologique multidisciplinaire né des Caraïbes. Six
              divisions, un seul organisme.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              Divisions
            </div>
            <ul className="space-y-2 text-sm text-bone">
              <li>Éducation</li>
              <li>Solutions Entreprises</li>
              <li>Sécurité</li>
              <li>Design</li>
              <li>Médias</li>
              <li>R&D</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              Bases
            </div>
            <ul className="space-y-2 text-sm text-bone">
              <li>Port-au-Prince, HT</li>
              <li>Miami, US</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] text-ash uppercase tracking-widest mb-4">
              Contact
            </div>
            <a
              href="mailto:contact@deepxlab.com"
              className="text-sm text-bone hover:text-[var(--accent)] transition-colors"
            >
              contact@deepxlab.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] text-ash uppercase tracking-widest">
          <span>© {year} DEEPXLAB — All rights reserved</span>
          <span>Built in HT — Deployed worldwide</span>
        </div>
      </div>
    </footer>
  );
}
