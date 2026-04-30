"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* SectionReveal — visible cinematic transition when each section enters:
   1. A glowing horizontal accent line draws across (1.4s, blue + glow)
   2. The section index (e.g. "/02") fades in from the right
   3. A scanning sweep moves from top to bottom of the section
   4. The content lifts in with clip-path mask + blur
   This is meant to be NOTICEABLE — every section feels like a new scene.
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
  index?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const line = el.querySelector<HTMLElement>("[data-reveal-line]");
    const idx = el.querySelector<HTMLElement>("[data-reveal-index]");
    const sweep = el.querySelector<HTMLElement>("[data-reveal-sweep]");
    const inner = el.querySelector<HTMLElement>("[data-reveal-inner]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });

      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.2, ease: "power3.out" },
          0
        );
      }
      if (idx) {
        tl.fromTo(
          idx,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.3
        );
      }
      if (sweep) {
        // Vertical sweep: glowing line travels top→bottom of the section
        tl.fromTo(
          sweep,
          { top: "0%", opacity: 0 },
          { opacity: 1, duration: 0.2, ease: "none" },
          0.1
        )
          .to(sweep, { top: "100%", duration: 1.4, ease: "power2.inOut" }, 0.3)
          .to(sweep, { opacity: 0, duration: 0.3, ease: "none" }, 1.6);
      }
      if (inner) {
        tl.fromTo(
          inner,
          {
            clipPath: "inset(50% 0 50% 0)",
            opacity: 0,
            filter: "blur(10px)",
            y: 30,
          },
          {
            clipPath: "inset(0% 0 0% 0)",
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          0.4
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} id={id} className={`relative ${className}`}>
      {/* Scanning sweep — vertical line that crosses the section once */}
      <div
        data-reveal-sweep
        aria-hidden
        className="absolute left-0 right-0 z-30 pointer-events-none h-[2px]"
        style={{
          top: "0%",
          opacity: 0,
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          boxShadow: "0 0 18px 2px rgba(0,102,255,0.6)",
        }}
      />

      {/* Top accent line + index label */}
      <div className="relative">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex items-center gap-4 pt-3">
          <div
            data-reveal-line
            className="flex-1 h-px bg-[var(--accent)] origin-left"
            style={{
              transform: "scaleX(0)",
              boxShadow: "0 0 8px rgba(0,102,255,0.5)",
            }}
          />
          {index && (
            <span
              data-reveal-index
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                opacity: 0,
              }}
            >
              {index}
            </span>
          )}
        </div>
      </div>

      <div data-reveal-inner>{children}</div>
    </div>
  );
}
