"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO, SITE } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";
import TicketButton from "./TicketButton";

const HERO_TITLE_LINES = ["Work By Suri"];

function AnimatedHeroTitle() {
  return (
    <h1
      aria-label={HERO.headline}
      className="overflow-hidden text-balance text-[7vw] font-normal leading-[1] tracking-[0.01em] text-foreground [font-family:var(--font-logo)] sm:text-[5.5vw] md:text-[clamp(2.25rem,6.5vh,3.75rem)] lg:text-[clamp(2.75rem,7vh,4.5rem)]"
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
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <OptimizedImage
          src="/IMG_3242.jpg.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns absolute inset-0 h-full w-full object-cover grayscale brightness-100 contrast-110"
          style={{ objectPosition: "50% 45%" }}
        />
      </motion.div>

      {/* Gentle contrast for readable type over bright color footage. */}
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-linear-to-b from-black/30 via-black/25 to-black/60"
      />

      {/* Hero copy */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pb-6 text-center drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] md:pb-8"
      >
        <p className="mb-5 text-[0.58rem] font-medium uppercase tracking-[0.46em] text-foreground sm:mb-6 sm:text-[0.68rem]">
          {HERO.tagline}
        </p>

        <AnimatedHeroTitle />

        <p className="mt-6 max-w-md text-balance text-sm font-normal leading-relaxed text-foreground sm:mt-7 sm:text-[0.95rem]">
          {HERO.subline}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="border border-(--hairline) px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
          >
            {HERO.cta}
          </a>
          <TicketButton href="#contact" label={HERO.secondaryCta} />
        </div>
      </motion.div>

      <span className="sr-only">{SITE.name}</span>
    </section>
  );
}
