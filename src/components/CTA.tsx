export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-40 md:py-64 border-t border-white/5 bg-[#070708] overflow-hidden"
    >
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 text-center">
        <div className="font-mono text-[11px] text-ash uppercase tracking-widest mb-12 inline-flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] pulse-dot" />
          <span>07 / Contact</span>
        </div>

        <h2 className="text-5xl md:text-8xl tracking-[-0.04em] leading-[0.9] font-medium max-w-5xl mx-auto">
          Vous avez un problème
          <br />
          <span className="text-ash">que personne n&apos;arrive</span>
          <br />
          à résoudre<span className="text-[#00FF94]">?</span>
        </h2>

        <p className="mt-12 text-xl md:text-2xl text-ash">
          Nous, c&apos;est ce qu&apos;on préfère.
        </p>

        <div className="mt-16 flex justify-center">
          <a
            href="mailto:contact@deepxlab.com"
            className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#00FF94] text-black font-mono text-[13px] uppercase tracking-wider hover:bg-bone transition-all duration-300"
          >
            <span>Parler à DeepXlab</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto font-mono text-[10px] text-ash uppercase tracking-widest">
          <div>
            <div className="text-bone mb-1">Email</div>
            contact@deepxlab.com
          </div>
          <div>
            <div className="text-bone mb-1">Bases</div>
            HT — US
          </div>
          <div>
            <div className="text-bone mb-1">Langues</div>
            FR · EN · ES · HT
          </div>
          <div>
            <div className="text-bone mb-1">Réponse</div>
            ≤ 24h
          </div>
        </div>
      </div>
    </section>
  );
}
