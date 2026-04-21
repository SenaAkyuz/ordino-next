import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SideFixed } from "@/components/layout/SideFixed";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ordino — AI-Powered Ad Intelligence",
  description:
    "AI-powered ad intelligence platform and performance marketing agency. Istanbul-based, managing $180M+ in ad spend for 230+ brands since 2021.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <SideFixed />
        <main className="flex-1">{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
