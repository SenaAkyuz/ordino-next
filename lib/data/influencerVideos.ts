// Optimize edilmiş influencer videolarının listesi.
// src path'ler /public/videos/influencers/ altından.
// Phase 1'de ffmpeg ile optimize edilen dosyalar (H.264, CRF 24, 1080p, faststart).
// brandKey opsiyonel — JSON'da influencerCarousel.brands.<key> tanımlanırsa label gösterir.

export type InfluencerVideo = {
  src: string;
  // brandKey?: string; // opsiyonel, ileride brand label eklemek için
};

export const influencerVideos: InfluencerVideo[] = [
  { src: "/videos/influencers/bliss.mp4" },
  { src: "/videos/influencers/audi-turkiye.mp4" },
  { src: "/videos/influencers/avek-audi.mp4" },
  { src: "/videos/influencers/reel-1.mp4" },
  { src: "/videos/influencers/reel-2.mp4" },
];
