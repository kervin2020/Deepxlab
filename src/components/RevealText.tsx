"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* RevealText — splits text into words and animates each one with a
   y-translate + blur reveal when scrolled into view. Drop-in replacement
   for any heading or paragraph that you want to feel cinematic. */
export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.9,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>("[data-reveal-word]");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 110,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, duration, text]);

  // Split words while preserving line breaks
  const words = text.split(/(\s+)/);

  return (
    <Tag ref={ref as React.MutableRefObject<HTMLHeadingElement>} className={className}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span data-reveal-word className="inline-block" style={{ willChange: "transform" }}>
              {w}
            </span>
          </span>
        )
      )}
    </Tag>
  );
}
