import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G3 Worldwide | Enterprise Technology for Hospitality",
  description: "Centralizing cloud, automation, and AI to power modern hospitality operations. G3 Worldwide is the technology backbone for restaurants and hotels.",
};

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
