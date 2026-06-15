"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { influencerVideos } from "@/lib/data/influencerVideos";

export function InfluencerCarousel() {
  const t = useTranslations("influencerCarousel");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll state'i takip et (button enable/disable + active dot)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const getVisibleCards = () => {
      const w = window.innerWidth;
      if (w < 640) return 2;
      if (w < 1024) return 3;
      if (w < 1280) return 4;
      return 5;
    };

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Active dot — visible card index
      const cardWidth = clientWidth / Math.max(1, getVisibleCards());
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByOne = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // 24 = gap-6
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  if (!influencerVideos.length) return null;

  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-display text-3xl font-light leading-tight text-black md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-3xl font-body text-base font-light leading-relaxed text-[#666] md:text-lg">
              {t("description")}
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByOne("left")}
              disabled={!canScrollLeft}
              aria-label={t("prevButton")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByOne("right")}
              disabled={!canScrollRight}
              aria-label={t("nextButton")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel scroll container */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {influencerVideos.map((video, idx) => (
            <VideoCard key={video.src} src={video.src} priority={idx < 3} />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {influencerVideos.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-accent" : "w-2 bg-black/15"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, priority }: { src: string; priority?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // IntersectionObserver — sadece görünür kartlar oynatılır (performans)
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPaused(false);
    } else {
      el.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="group relative aspect-[9/16] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-black md:w-[280px] lg:w-[300px]">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        autoPlay
        preload={priority ? "auto" : "metadata"}
        className="h-full w-full object-cover"
      />
      {/* Play/pause overlay */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPaused ? "Play" : "Pause"}
        className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20 focus:bg-black/20 focus:outline-none"
      >
        <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-opacity ${isPaused ? "opacity-100" : "opacity-0 group-hover:opacity-100 hover:opacity-100"}`}>
          {isPaused ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-black">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-black">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
