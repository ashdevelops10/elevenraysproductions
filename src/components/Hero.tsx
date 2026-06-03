"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/content";

const HERO_POSTER = "https://picsum.photos/id/1062/1920/1080";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + slow fade as the hero scrolls away.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden"
    >
      {/* Backdrop media — drop your own film at /public/videos/hero.mp4.
          The poster image shows instantly and as a fallback. */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          className="ken-burns mono absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          preload="none"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <Image
          src={HERO_POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="mono -z-10 object-cover"
        />
      </motion.div>

      {/* Cinematic darkening */}
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"
      />

      {/* Letterbox bars */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[7svh] bg-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[7svh] bg-background" />

      {/* Hero copy */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-6 text-[0.6rem] uppercase tracking-[0.5em] text-foreground/70 sm:text-xs"
        >
          A Cinematic Storytelling Studio
        </motion.p>

        <h1 className="display text-balance text-[15vw] font-light leading-[0.92] tracking-tight sm:text-[12vw] md:text-[9rem] lg:text-[11rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Eleven Rays
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-7 max-w-md text-balance text-sm font-light leading-relaxed text-foreground/75 sm:text-base"
        >
          We frame light, shadow and story — timeless work with the drama of old
          Hollywood and the craft of the modern screen.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-[9svh] left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.4em] text-foreground/50">
          Scroll
        </span>
        <motion.span
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-foreground/40"
        />
      </motion.div>

      <span className="sr-only">{SITE.name}</span>
    </section>
  );
}
