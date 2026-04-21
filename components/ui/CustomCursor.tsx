"use client";

import { useEffect, useRef } from "react";

const hoverSelector =
  'a, button, input, select, textarea, label, [role="button"], [data-cursor="hover"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId: number | null = null;

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      if (Math.abs(mx - rx) > 0.2 || Math.abs(my - ry) > 0.2) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (rafId === null) rafId = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };
    const onEnter = () => {
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.(hoverSelector)) {
        ring.classList.add("is-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.(hoverSelector)) {
        ring.classList.remove("is-hover");
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot is-hidden" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring is-hidden" aria-hidden="true" />
    </>
  );
}
