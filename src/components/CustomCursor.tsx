"use client";

import { useEffect, useRef } from "react";

/* CustomCursor — magnetic, theme-aware, contextual:
   - Default: 36px outline ring with center dot
   - Over [data-cursor], a, button: scales 2x, fills slightly,
     snaps to the element's center with subtle inertia
   - Hidden on touch devices */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const dotTarget = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const hoverEl = useRef<Element | null>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      ring.style.display = "none";
      dot.style.display = "none";
      return;
    }

    const SELECT = "a, button, [data-cursor], input, select, textarea, label";

    const onMove = (e: MouseEvent) => {
      // Dot always follows cursor exactly
      dotTarget.current.x = e.clientX;
      dotTarget.current.y = e.clientY;
      // Ring snaps to interactive elements when hovering
      if (hoverEl.current) {
        const rect = (hoverEl.current as HTMLElement).getBoundingClientRect();
        target.current.x = rect.left + rect.width / 2;
        target.current.y = rect.top + rect.height / 2;
      } else {
        target.current.x = e.clientX;
        target.current.y = e.clientY;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element).closest(SELECT);
      if (t && hoverEl.current !== t) {
        hoverEl.current = t;
        ring.classList.add("cursor-snap");
      } else if (!t && hoverEl.current) {
        hoverEl.current = null;
        ring.classList.remove("cursor-snap");
      }
    };

    const onOut = () => {
      hoverEl.current = null;
      ring.classList.remove("cursor-snap");
    };

    let raf = 0;
    const animate = () => {
      // Ring uses higher inertia (smoother snap)
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      // Dot is faster (sticks to cursor)
      dotPos.current.x += (dotTarget.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (dotTarget.current.y - dotPos.current.y) * 0.45;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} id="custom-cursor" />
      <div ref={dotRef} id="cursor-dot" />
    </>
  );
}
