// Optimize edilmiş influencer videolarının listesi.
// src path'ler /public/videos/influencers/ altından.
// Phase 1'de ffmpeg ile optimize edilen dosyalar (H.264, CRF 24, 1080p, faststart).
// brandKey opsiyonel — JSON'da influencerCarousel.brands.<key> tanımlanırsa label gösterir.

export type InfluencerVideo = {
  src: string;
  // brandKey?: string; // opsiyonel, ileride brand label eklemek için
};

export const influencerVideos: InfluencerVideo[] = [
  { src: "/videos/produksiyon/yat-tekne/yat-tekne-8.mp4" },
  { src: "/videos/produksiyon/otel-turizm/otel-turizm-1.mp4" },
  { src: "/videos/produksiyon/fuar-etkinlik/fuar-etkinlik-3.mp4" },
  { src: "/videos/produksiyon/otomotiv/otomotiv-3.mp4" },
  { src: "/videos/produksiyon/restoran-kafe/restoran-kafe-2.mp4" },
  { src: "/videos/produksiyon/restoran-kafe/restoran-kafe-11.mp4" },
  { src: "/videos/produksiyon/fuar-etkinlik/fuar-etkinlik-1.mp4" },
];
