"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/content";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SOURCES } from "@/lib/media";
import OptimizedVideo from "./OptimizedVideo";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + slow fade as the hero scrolls away.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.18, 0.58]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-svh w-full overflow-hidden"
    >
      {/* Backdrop media can be served from Vercel Blob via NEXT_PUBLIC_* URLs. */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <OptimizedVideo
          sources={HERO_VIDEO_SOURCES}
          className="ken-burns absolute inset-0 h-full w-full object-cover brightness-110 saturate-125 contrast-105"
          autoPlay
          muted
          loop
          poster={HERO_VIDEO_POSTER}
          preload="metadata"
        />
      </motion.div>

      {/* Gentle contrast for readable type over bright color footage. */}
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-linear-to-b from-black/15 via-black/10 to-black/55"
      />

      {/* Hero copy */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center drop-shadow-[0_2px_22px_rgba(0,0,0,0.85)]"
      >
        <p className="mb-6 text-[0.6rem] uppercase tracking-[0.5em] text-foreground sm:text-xs">
          A Cinematic Storytelling Studio
        </p>

        <h1 className="display text-balance text-[15vw] font-light leading-[0.92] tracking-tight text-foreground sm:text-[12vw] md:text-[9rem] lg:text-[11rem]">
          <span className="block">Eleven Rays</span>
        </h1>

        <p className="mt-7 max-w-md text-balance text-sm font-light leading-relaxed text-foreground sm:text-base">
          We frame light, shadow and story — timeless work with the drama of old
          Hollywood and the craft of the modern screen.
        </p>
      </motion.div>

      <span className="sr-only">{SITE.name}</span>
    </section>
  );
}
