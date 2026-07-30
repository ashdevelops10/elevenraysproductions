"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { REELS, REELS_INTRO } from "@/lib/content";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

// Instagram's embed widget always renders at its own fixed width (~326px)
// with a profile header above the video and a like/comment/share footer
// below it — there's no official flag to omit either. We crop both out
// visually: the outer window matches Instagram's natural width, a negative
// top offset shifts the header above the visible area, and the window
// height stops short of the footer.
function ReelEmbed({ url }: { url: string }) {
  return (
    <div className="relative h-[309px] w-[260px] shrink-0 overflow-hidden rounded-lg border border-(--hairline) bg-white/2.5">
      <div className="absolute inset-x-0 -top-[51px]">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ margin: 0, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default function ReelsMarquee() {
  const reduceMotion = useReducedMotion();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      window.instgrm?.Embeds.process();
    }
  }, [scriptLoaded]);

  const loop = [...REELS, ...REELS];

  return (
    <section id="reels" className="relative border-t border-(--hairline) py-20 sm:py-28">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => setScriptLoaded(true)}
        onLoad={() => setScriptLoaded(true)}
      />

      <div className="mx-auto max-w-400 px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
            {REELS_INTRO.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mx-auto mt-5 max-w-2xl text-balance text-3xl font-light leading-[1.15] sm:text-5xl">
            {REELS_INTRO.heading}
          </h2>
        </Reveal>
      </div>

      <div
        className="relative mt-14 overflow-hidden py-2 sm:mt-16"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
        }}
      >
        {reduceMotion ? (
          <div className="no-scrollbar flex gap-6 overflow-x-auto px-5 pb-2 sm:px-8">
            {REELS.map((reel, index) => (
              <ReelEmbed key={`${reel.url}-${index}`} url={reel.url} />
            ))}
          </div>
        ) : (
          <div
            className="flex w-max gap-6 animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]"
          >
            {loop.map((reel, index) => (
              <ReelEmbed key={`${reel.url}-${index}`} url={reel.url} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
