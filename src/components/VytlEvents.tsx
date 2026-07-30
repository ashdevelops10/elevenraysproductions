"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import OptimizedImage from "./OptimizedImage";
import { VYTL_EVENTS, VYTL_EVENTS_INTRO } from "@/lib/content";

const MARQUEE_PIXELS_PER_SECOND = 88;

export default function VytlEvents() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(40);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || reduceMotion) {
      return;
    }

    const updateDuration = () => {
      const loopDistance = track.scrollWidth / 2;
      setDuration(Math.max(18, loopDistance / MARQUEE_PIXELS_PER_SECOND));
    };

    const scheduleUpdate = () => {
      requestAnimationFrame(updateDuration);
    };

    const updateTimers = [
      window.setTimeout(updateDuration, 250),
      window.setTimeout(updateDuration, 1000),
    ];
    const imageElements = Array.from(track.querySelectorAll("img"));

    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);
    Array.from(track.children).forEach((child) => {
      observer.observe(child);
    });
    imageElements.forEach((image) => {
      image.addEventListener("load", scheduleUpdate);
    });

    updateDuration();

    return () => {
      observer.disconnect();
      updateTimers.forEach((timer) => {
        window.clearTimeout(timer);
      });
      imageElements.forEach((image) => {
        image.removeEventListener("load", scheduleUpdate);
      });
    };
  }, [reduceMotion]);

  const loop = [...VYTL_EVENTS, ...VYTL_EVENTS];

  return (
    <section className="relative border-t border-(--hairline) py-20 sm:py-28">
      <div className="mx-auto max-w-400 px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
            {VYTL_EVENTS_INTRO.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mx-auto mt-5 max-w-2xl text-balance text-3xl font-light leading-[1.15] sm:text-5xl">
            {VYTL_EVENTS_INTRO.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[0.62rem] uppercase tracking-[0.3em] text-muted">
            {VYTL_EVENTS_INTRO.subHeading}
          </p>
        </Reveal>
      </div>

      {reduceMotion ? (
        <div className="no-scrollbar mt-14 flex gap-6 overflow-x-auto px-5 pb-2 sm:mt-16 sm:px-8">
          {VYTL_EVENTS.map((image) => (
            <div
              key={image.id}
              className="relative aspect-4/5 h-80 shrink-0 overflow-hidden sm:h-96 lg:h-[58vh]"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 48vw, 34vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative mt-14 overflow-hidden py-2 sm:mt-16"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-6 lg:gap-10"
            style={{
              animationName: "marquee",
              animationDuration: `${duration}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
          >
            {loop.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="group relative aspect-4/5 h-80 shrink-0 overflow-hidden sm:h-96 lg:h-[58vh]"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 48vw, 34vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
