"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* SectionReveal — wraps any section content. Plays a cinematic reveal
   when scrolled into view:
     - A horizontal accent line draws across the top
     - The content lifts in with a clip-path mask + slight blur
   The wrapper is purely visual; layout comes from children.
*/
export default function SectionReveal({
  children,
  className = "",
  id,
  index,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: string; // e.g. "02", "03"
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const line = el.querySelector<HTMLElement>("[data-reveal-line]");
    const inner = el.querySelector<HTMLElement>("[data-reveal-inner]");

    const ctx = gsap.context(() => {
      // Line draws across
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
      // Content lifts in with mask reveal
      if (inner) {
        gsap.fromTo(
          inner,
          {
            clipPath: "inset(40% 0 40% 0)",
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          },
          {
            clipPath: "inset(0% 0 0% 0)",
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} id={id} className={`relative ${className}`}>
      {/* Top divider line */}
      <div className="relative">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          <div
            data-reveal-line
            className="h-px bg-[var(--accent)] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
      {/* Optional index label */}
      {index && (
        <div className="absolute top-4 right-5 md:right-12 z-10 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]"
          style={{ fontFamily: '"Clash Display", sans-serif' }}>
          {index}
        </div>
      )}
      <div data-reveal-inner>
        {children}
      </div>
    </div>
  );
}
