"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO, SITE } from "@/lib/content";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SOURCES } from "@/lib/media";
import OptimizedVideo from "./OptimizedVideo";

const HERO_TITLE_LINES = ["Eleven Rays", "Productions"];

function AnimatedHeroTitle() {
  return (
    <h1
      aria-label={HERO.headline}
      className="display overflow-hidden text-balance text-[14vw] font-light leading-[0.9] tracking-tight text-foreground sm:text-[11vw] md:text-[clamp(5.25rem,17vh,8.75rem)] lg:text-[clamp(6rem,18vh,9.75rem)]"
    >
      <span aria-hidden="true">
        {HERO_TITLE_LINES.map((line, lineIndex) => (
          <span key={line} className="block whitespace-nowrap">
            {Array.from(line).map((character, characterIndex) => (
              <motion.span
                key={`${line}-${characterIndex}`}
                className="inline-block"
                initial={{ opacity: 0, y: 34, filter: "blur(12px)", scale: 1.08 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{
                  delay: 0.72 + lineIndex * 0.46 + characterIndex * 0.055,
                  duration: 0.72,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {character === " " ? "\u00A0" : character}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}

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
      className="relative h-[calc(100svh-60px)] min-h-[560px] w-full overflow-hidden md:h-[calc(100svh-72px)]"
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
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pb-6 text-center drop-shadow-[0_2px_22px_rgba(0,0,0,0.85)] md:pb-8"
      >
        <p className="mb-4 text-[0.58rem] uppercase tracking-[0.46em] text-foreground sm:text-[0.68rem]">
          {HERO.tagline}
        </p>

        <AnimatedHeroTitle />

        <p className="mt-5 max-w-md text-balance text-sm font-light leading-relaxed text-foreground sm:text-[0.95rem]">
          {HERO.subline}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="border border-(--hairline) px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
          >
            {HERO.cta}
          </a>
          <a
            href="#contact"
            className="bg-foreground px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.28em] text-background transition-all duration-500 hover:bg-accent hover:text-background"
          >
            {HERO.secondaryCta}
          </a>
        </div>
      </motion.div>

      <span className="sr-only">{SITE.name}</span>
    </section>
  );
}
