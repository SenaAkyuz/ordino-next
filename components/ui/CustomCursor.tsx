"use client";
import { useEffect, useRef } from "react";

const hoverSelector =
  'a, button, input, select, textarea, label, [role="button"], [data-cursor="hover"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Server-side guard
    if (typeof window === "undefined") return;

    // Hover/pointer destegi yoksa erken return (mobile/tablet)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    // Touch device kontrolu (iPad Pro vb.)
    if ("ontouchstart" in window) return;

    // Firefox tespiti — Firefox'ta custom cursor render sorunlu, default kalsin
    const ua = navigator.userAgent.toLowerCase();
    const isFirefox = ua.includes("firefox");
    if (isFirefox) return;

    // Safari tespiti — Safari'de mix-blend-mode: difference + position: fixed
    // kombinasyonu render bug'i tetikliyor; custom cursor gorunmez kaliyor ve
    // native cursor da gizlendigi icin kullanici imleci goremiyor. Default kalsin.
    const isSafari =
      ua.includes("safari") &&
      !ua.includes("chrome") &&
      !ua.includes("chromium") &&
      !ua.includes("edg");
    if (isSafari) return;

    // Refs hazir mi kontrol
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // INVARIANT: Sayfa baslangicta native cursor'la gorunur. custom-cursor-active
    // class'i SADECE kullanici ilk kez mouse'u oynattiginda eklenir — boylece:
    //  1) Sayfa yuklenirken native cursor gorunur (cursorless page yok)
    //  2) Class eklenirken cursor da ayni anda gorunur olur (is-hidden kaldirilir)
    //  3) Hydration race / mouseenter'in atesleNmediği senaryolarda kullanici
    //     hicbir zaman cursor'siz sayfa gormez.
    let activated = false;

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
      if (!activated) {
        // Pozisyon set edildikten SONRA aktive et — class eklenir, is-hidden
        // kalkar, hepsi tek frame icinde olur. Hicbir an cursor'siz sayfa olmaz.
        document.body.classList.add("custom-cursor-active");
        dot.classList.remove("is-hidden");
        ring.classList.remove("is-hidden");
        activated = true;
      }
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
      if (activated) {
        document.body.classList.remove("custom-cursor-active");
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot is-hidden" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring is-hidden" aria-hidden="true" />
    </>
  );
}
