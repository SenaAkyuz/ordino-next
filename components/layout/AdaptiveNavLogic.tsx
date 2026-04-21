"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type RefObject } from "react";

// ——— Ported verbatim from legacy script.js ———
// Strategy: sample the actual background below the nav at 5 horizontal
// points, walk up each element's ancestor chain to find the first opaque
// background, compute WCAG luminance, and average. Below 0.5 = dark.

type Rgb = { r: number; g: number; b: number };

function parseRgb(color: string): Rgb | null {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
  if (parts.length < 3) return null;
  const alpha = parts.length === 4 ? parts[3] : 1;
  if (alpha <= 0.1) return null;
  return { r: parts[0], g: parts[1], b: parts[2] };
}

function getEffectiveBackground(el: Element | null): Rgb | null {
  let current: Element | null = el;
  while (current && current !== document.documentElement) {
    const bg = window.getComputedStyle(current).backgroundColor;
    const rgb = parseRgb(bg);
    if (rgb) return rgb;
    current = current.parentElement;
  }
  const bodyBg = window.getComputedStyle(document.body).backgroundColor;
  return parseRgb(bodyBg) ?? { r: 255, g: 255, b: 255 };
}

function luminance({ r, g, b }: Rgb): number {
  const toLin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
}

type AdaptiveNavState = {
  isDark: boolean;
  isScrolled: boolean;
};

type Options = {
  navRef: RefObject<HTMLElement | null>;
  forceDark?: boolean;
};

// Seed for initial SSR render so the nav doesn't flash the wrong colour on
// pages whose first section is known to be dark.
const KNOWN_DARK_ROUTES = ["/", "/platform", "/contact", "/services"];

export function useAdaptiveNav({
  navRef,
  forceDark = false,
}: Options): AdaptiveNavState {
  const pathname = usePathname();
  const initialDark =
    forceDark || (pathname ? KNOWN_DARK_ROUTES.includes(pathname) : false);
  const [isDark, setIsDark] = useState(initialDark);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let rafPending = false;

    const measure = () => {
      setIsScrolled(window.scrollY > 80);

      if (forceDark) {
        setIsDark(true);
        return;
      }

      const rect = nav.getBoundingClientRect();
      const sampleY = rect.bottom + 4;
      const vw = window.innerWidth;
      const sampleXs = [vw * 0.1, vw * 0.3, vw * 0.5, vw * 0.7, vw * 0.9];

      // Hide the nav from hit-testing so elementFromPoint sees through it.
      const prevPointer = nav.style.pointerEvents;
      nav.style.pointerEvents = "none";

      let totalLum = 0;
      let validSamples = 0;
      for (const x of sampleXs) {
        const el = document.elementFromPoint(x, sampleY);
        if (!el) continue;
        const bg = getEffectiveBackground(el);
        if (!bg) continue;
        totalLum += luminance(bg);
        validSamples++;
      }

      nav.style.pointerEvents = prevPointer;

      let avgLum: number;
      if (validSamples === 0) {
        const body = parseRgb(
          window.getComputedStyle(document.body).backgroundColor,
        );
        avgLum = body ? luminance(body) : 1;
      } else {
        avgLum = totalLum / validSamples;
      }

      setIsDark(avgLum < 0.5);
    };

    const onScrollOrResize = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        measure();
        rafPending = false;
      });
    };

    measure();
    const rafId = requestAnimationFrame(measure);
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("load", measure);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", measure);
      cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [navRef, forceDark, pathname]);

  return { isDark, isScrolled };
}

// ——— Also exported for SideFixed which samples near the bottom of viewport ———
export function backgroundLuminanceAt(x: number, y: number): number | null {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;
  const bg = getEffectiveBackground(el);
  if (!bg) return null;
  return luminance(bg);
}
