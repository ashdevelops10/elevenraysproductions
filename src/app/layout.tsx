import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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

const logo = Luckiest_Guy({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workbysuri.com"),
  icons: {
    icon: "/faviconfinal.png",
    shortcut: "/faviconfinal.png",
    apple: "/faviconfinal.png",
  },
  title: {
    default: "Work By Suri — Creative Production Studio",
    template: "%s · Work By Suri",
  },
  description:
    "Work By Suri creates social media systems, reels, photoshoots, drone shoots and visual content for brands with direction.",
  keywords: [
    "creative production studio",
    "social media management",
    "content creation",
    "reels production",
    "photoshoots",
    "drone shoots",
    "mumbai content studio",
  ],
  openGraph: {
    title: "Work By Suri — Creative Production Studio",
    description:
      "Social media management, content creation, reels, photoshoots and drone shoots for brands with direction.",
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
      className={`${display.variable} ${sans.variable} ${logo.variable} h-full antialiased`}
    >
      <body className="grain vignette relative min-h-full flex flex-col">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
