export default function Manifesto() {
  return (
    <section className="relative py-32 md:py-48 border-t border-[var(--border)] bg-[var(--bg-elev)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 text-[11px] text-ash uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>Qui sommes-nous</span>
            </div>
          </div>

          <div className="md:col-span-9">
            <p className="text-3xl md:text-[44px] tracking-[-0.025em] leading-[1.15] font-medium text-bone">
              DeepXlab conçoit, développe et opère des plateformes logicielles,
              des infrastructures matérielles et des systèmes de sécurité
              sur mesure. Une seule équipe pluridisciplinaire, du premier
              prototype à l&apos;exploitation continue.
              <span className="text-ash">
                {" "}
                Nous travaillons pour les organisations qui exigent de la
                technologie qu&apos;elle tienne sous contrainte réelle —
                réglementaire, opérationnelle, géographique.
              </span>
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-10 pt-10 border-t border-[var(--border-strong)]">
              <div>
                <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-3">
                  Rigueur
                </div>
                <p className="text-[14px] text-bone leading-relaxed">
                  Chaque livrable est documenté, testé et signé. La qualité
                  n&apos;est pas un objectif, c&apos;est une condition.
                </p>
              </div>
              <div>
                <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-3">
                  Autonomie
                </div>
                <p className="text-[14px] text-bone leading-relaxed">
                  Nos clients ne dépendent pas d&apos;une boîte noire. Nous
                  formons leurs équipes et transmettons la maîtrise.
                </p>
              </div>
              <div>
                <div className="text-[11px] text-ash uppercase tracking-[0.2em] mb-3">
                  Engagement
                </div>
                <p className="text-[14px] text-bone leading-relaxed">
                  Nous restons aux côtés de nos clients sur le long terme.
                  Un déploiement n&apos;est jamais une fin de relation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
