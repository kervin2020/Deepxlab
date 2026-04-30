"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const onHoverIn = () => cursor.classList.add("cursor-hover");
    const onHoverOut = () => cursor.classList.remove("cursor-hover");

    const interactable = "a, button, [data-cursor]";
    const els: Element[] = [];

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactable).forEach((el) => {
        if (!els.includes(el)) {
          el.addEventListener("mouseenter", onHoverIn);
          el.addEventListener("mouseleave", onHoverOut);
          els.push(el);
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll(interactable).forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
      els.push(el);
    });

    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      cursor.style.left = pos.current.x + "px";
      cursor.style.top = pos.current.y + "px";
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="custom-cursor" />
      <div ref={dotRef} id="cursor-dot" />
    </>
  );
}
