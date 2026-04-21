"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type RefObject } from "react";

/**
 * Find the theme of whatever themed section currently crosses a viewport Y
 * coordinate. Iterates every `[data-theme]` element and returns the deepest
 * match (innermost wins when nested). Returns `null` if no themed element
 * overlaps that Y.
 *
 * This replaces the older `elementFromPoint`-based approach which was
 * unreliable because `pointer-events: none` on the nav does not cascade to
 * its children, so samples often hit nav links and returned null.
 */
export function themeAtY(y: number): "dark" | "light" | null {
  const themed = document.querySelectorAll<HTMLElement>("[data-theme]");
  let winner: HTMLElement | null = null;
  for (const el of themed) {
    const r = el.getBoundingClientRect();
    if (r.top <= y && r.bottom > y) {
      // Prefer the most deeply nested match so inner themed sections
      // (e.g. CaseBlock's stats-bar) override their outer wrapper.
      if (!winner || winner.contains(el)) {
        winner = el;
      }
    }
  }
  if (!winner) return null;
  return winner.dataset.theme === "dark" ? "dark" : "light";
}

type AdaptiveNavState = {
  isDark: boolean;
  isScrolled: boolean;
};

type Options = {
  navRef: RefObject<HTMLElement | null>;
  forceDark?: boolean;
};

// Routes whose top section is known to be dark. Used to seed the initial
// render so the nav doesn't flash black-on-black before the first measurement.
// Keep in sync with the first <section> of each page.
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
      // Look up the themed section directly beneath the nav by scanning
      // [data-theme] elements rather than hit-testing. This avoids the
      // pointer-events pitfalls of elementFromPoint and is O(n) across ~15
      // themed elements on the page — negligible cost per frame.
      const theme = themeAtY(rect.bottom + 4);
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else {
        // No themed section at the nav line — use the pathname-based seed.
        setIsDark(
          pathname ? KNOWN_DARK_ROUTES.includes(pathname) : false,
        );
      }
    };

    const onScrollOrResize = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        measure();
        rafPending = false;
      });
    };

    // First measure: run immediately (DOM is committed by now) AND on next
    // frame (so any mid-flight layout changes are captured).
    measure();
    const rafId = requestAnimationFrame(measure);
    // Re-measure after layout settles (fonts, images, late hydration).
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
