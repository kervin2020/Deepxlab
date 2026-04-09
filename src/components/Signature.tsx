"use client";

const letters = [
  {
    char: "DEEP",
    text: "Nous allons chercher là où personne ne regarde, dans les communautés que le monde sous-estime.",
  },
  {
    char: "X",
    text: "Nous explorons l'inconnu, nous créons ce qui n'existe pas encore, nous transformons l'impossible en livrable.",
  },
  {
    char: "LAB",
    text: "Tout commence par l'expérimentation, le prototype, l'itération. Nous construisons, nous testons, nous déployons.",
  },
];

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative py-40 md:py-56 border-t border-white/5 bg-[#070708] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] text-ash uppercase tracking-widest mb-20 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00FF94]" />
          <span>05 / Signature</span>
        </div>

        <div className="space-y-24 md:space-y-40">
          {letters.map((l, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-8 md:gap-10 items-end"
            >
              <div className="md:col-span-7">
                <div className="text-[24vw] md:text-[14vw] leading-[0.8] font-medium tracking-[-0.06em] text-bone">
                  <span className="mask-letter">
                    <span style={{ animationDelay: `${i * 0.15}s` }}>
                      {l.char}
                    </span>
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 md:pb-10">
                <div className="font-mono text-[10px] text-[#00FF94] uppercase tracking-widest mb-3">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-lg md:text-xl text-ash leading-relaxed max-w-md">
                  {l.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-white/10">
          <p className="text-3xl md:text-5xl tracking-[-0.03em] font-medium">
            DeepXlab.{" "}
            <span className="text-[#00FF94]">
              Nous ne restons pas à la surface.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
