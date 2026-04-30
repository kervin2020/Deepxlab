"use client";

import { useRef } from "react";

/* TiltCard — wraps any card with a smooth 3D mouse-perspective tilt,
   plus a subtle highlight that follows the cursor. Touch-safe (no-op). */
export default function TiltCard({
  children,
  className = "",
  intensity = 8, // max tilt in degrees
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    target.current.rx = (0.5 - y) * intensity * 2;
    target.current.ry = (x - 0.5) * intensity * 2;
    target.current.gx = x * 100;
    target.current.gy = y * 100;
    if (!rafRef.current) animate();
  };

  const onLeave = () => {
    target.current.rx = 0;
    target.current.ry = 0;
    target.current.gx = 50;
    target.current.gy = 50;
    if (!rafRef.current) animate();
  };

  const animate = () => {
    const el = ref.current;
    const g = glareRef.current;
    if (!el) {
      rafRef.current = 0;
      return;
    }
    current.current.rx += (target.current.rx - current.current.rx) * 0.12;
    current.current.ry += (target.current.ry - current.current.ry) * 0.12;
    current.current.gx += (target.current.gx - current.current.gx) * 0.12;
    current.current.gy += (target.current.gy - current.current.gy) * 0.12;
    el.style.transform = `perspective(900px) rotateX(${current.current.rx.toFixed(2)}deg) rotateY(${current.current.ry.toFixed(2)}deg)`;
    if (g) {
      g.style.background = `radial-gradient(circle at ${current.current.gx}% ${current.current.gy}%, rgba(0,102,255,0.18), transparent 50%)`;
    }
    const stillMoving =
      Math.abs(target.current.rx - current.current.rx) > 0.05 ||
      Math.abs(target.current.ry - current.current.ry) > 0.05;
    if (stillMoving) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      rafRef.current = 0;
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{ transition: "background 0.3s ease" }}
        />
      )}
    </div>
  );
}
