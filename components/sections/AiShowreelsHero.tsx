"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { aiShowreels, type AiShowreel } from "@/lib/data/aiShowreels";

export function AiShowreelsHero() {
  const t = useTranslations("aiShowreels");

  return (
    <>
      {aiShowreels.map((reel, i) => (
        <ShowreelHero
          key={reel.src}
          reel={reel}
          playLabel={t("playButton")}
          pageEyebrow={i === 0 ? t("eyebrow") : undefined}
          pageTitle={i === 0 ? t("title") : undefined}
        />
      ))}
    </>
  );
}

function ShowreelHero({
  reel,
  playLabel,
  pageEyebrow,
  pageTitle,
}: {
  reel: AiShowreel;
  playLabel: string;
  pageEyebrow?: string;
  pageTitle?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  // active = user pressed "Videoyu Oynat": sound on + title overlay hidden
  const [active, setActive] = useState(false);

  // Muted background loop autoplays only while the section is in view —
  // preload="none" keeps the other videos from downloading until needed.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.muted = true;
      setActive(false);
    }
  }, [inView]);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {});
    setActive(true);
  };

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] w-full snap-start snap-always items-end overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-contain md:object-cover"
        onClick={toggleVideo}
      />

      {/* Darken for legibility — fades out once the user starts watching */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 transition-opacity duration-500 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Page header (only on the first hero) — provides the page h1 */}
      {pageTitle && (
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 px-6 pt-28 transition-opacity duration-500 md:px-12 lg:px-20 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mx-auto max-w-[1280px]">
            {pageEyebrow && (
              <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-white/60">
                {pageEyebrow}
              </p>
            )}
            <h1 className="font-display text-2xl font-semibold text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] md:text-3xl">
              {pageTitle}
            </h1>
          </div>
        </div>
      )}

      {/* Video title + play button */}
      <div
        className={`relative z-10 w-full px-6 pb-20 transition-opacity duration-500 md:px-12 md:pb-24 lg:px-20 ${
          active ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.7)] sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl">
            {reel.title}
          </h2>
          <button
            type="button"
            onClick={handlePlay}
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-body text-sm font-medium text-white backdrop-blur transition-all hover:border-white/60 hover:bg-white/20"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {playLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
