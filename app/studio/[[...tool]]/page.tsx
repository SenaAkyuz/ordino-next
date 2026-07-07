import type { Metadata, Viewport } from "next";
import { Studio } from "./Studio";

export const dynamic = "force-static";

// next-sanity/studio metadata'sini re-export etmek yerine inline tanimliyoruz;
// re-export sunucu grafiginde Sanity/NextStudio'yu degerlendirir (Turbopack swr hatasi).
export const metadata: Metadata = {
  title: "Ordino Blog Studio",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return <Studio />;
}
