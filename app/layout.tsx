import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (Google Fonts fetch is blocked in this environment).
const cinzel = localFont({
  src: [
    { path: "../public/fonts/Cinzel-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Cinzel-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Cinzel-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Cinzel-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = localFont({
  src: [
    { path: "../public/fonts/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Lato-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
});

const caveat = localFont({
  src: [
    { path: "../public/fonts/Caveat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Caveat-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-caveat",
  display: "swap",
});

// Gincu — the astrologer's signature font (provided)
const gincu = localFont({
  src: [{ path: "../public/fonts/Gincu.ttf", weight: "400", style: "normal" }],
  variable: "--font-gincu",
  display: "swap",
});

// Playfair retained for elegant italic accents (Cinzel has no true italic).
const playfair = localFont({
  src: [
    { path: "../public/fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/PlayfairDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/PlayfairDisplay-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Vadehra — Astrology · Vastu · Meditation",
  description:
    "Three decades of proven expertise. Astrology, Vastu consultations and Meditation sessions designed to solve real-life challenges in career, relationships, finances and health.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${lato.variable} ${caveat.variable} ${gincu.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
