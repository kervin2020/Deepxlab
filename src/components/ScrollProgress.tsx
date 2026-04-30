"use client";

import { useEffect, useState } from "react";

/* Thin progress bar at the very top of the page that tracks scroll progress.
   Adds a constant ambient signal of "where am I in the experience". */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      setProgress(Math.max(0, Math.min(1, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full bg-[var(--accent)]"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          willChange: "transform",
          boxShadow: "0 0 8px rgba(0,102,255,0.6)",
        }}
      />
    </div>
  );
}
