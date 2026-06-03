import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevenraysproductions.com"),
  title: {
    default: "Eleven Rays Productions — Cinematic Storytelling Studio",
    template: "%s · Eleven Rays Productions",
  },
  description:
    "Eleven Rays Productions is a cinematic storytelling studio crafting timeless film, photography and art direction with old-Hollywood drama and modern craft.",
  keywords: [
    "film production",
    "cinematography",
    "photography",
    "art direction",
    "creative direction",
    "content creation",
    "storytelling studio",
  ],
  openGraph: {
    title: "Eleven Rays Productions — Cinematic Storytelling Studio",
    description:
      "A cinematic storytelling studio. Film, photography and art direction with old-Hollywood drama.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="grain vignette relative min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
