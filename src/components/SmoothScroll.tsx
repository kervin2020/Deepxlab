"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Refresh on resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // Route same-page anchor clicks through Lenis — native hash jumps
    // are swallowed by the smooth-scroll loop, so links like #contact
    // would otherwise do nothing.
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.('a[href*="#"]');
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      const path = href.slice(0, hashIndex);
      if (path && path !== window.location.pathname) return;
      const target = document.getElementById(href.slice(hashIndex + 1));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
      history.replaceState(null, "", href.slice(hashIndex));
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      gsap.ticker.remove(tickerFn);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
