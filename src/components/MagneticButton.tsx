"use client";

import { useEffect, useRef } from "react";

/* MagneticButton — wraps any element. The cursor "attracts" the
   element when hovering nearby (within `radius` px). Inertia smoothing
   on requestAnimationFrame for buttery motion. Falls back to nothing on
   touch devices. */
export default function MagneticButton({
  children,
  strength = 0.35,
  radius = 110,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const insideRef = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        insideRef.current = true;
        const force = 1 - dist / radius;
        target.current.x = dx * strength * force;
        target.current.y = dy * strength * force;
      } else if (insideRef.current) {
        insideRef.current = false;
        target.current.x = 0;
        target.current.y = 0;
      }
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      el.style.transform = `translate3d(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [radius, strength]);

  return (
    <span
      ref={wrapRef}
      className={`inline-block ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </span>
  );
}
