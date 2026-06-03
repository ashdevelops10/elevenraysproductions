"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { COLLECTIONS, type Collection, type ImageAsset } from "@/lib/content";
import Reveal from "./Reveal";

const spanClass: Record<NonNullable<ImageAsset["span"]>, string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "col-span-2 aspect-[16/10]",
  square: "aspect-square",
};

function ParallaxFigure({
  image,
  range,
}: {
  image: ImageAsset;
  range: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`${range}%`, `${-range}%`]
  );

  return (
    <figure
      ref={ref}
      className={`group relative overflow-hidden ${spanClass[image.span ?? "square"]}`}
    >
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 45vw"
          className="mono object-cover"
        />
      </motion.div>
      <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/0 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-foreground/80 group-hover:opacity-100">
        {image.alt}
      </figcaption>
    </figure>
  );
}

function CollectionBlock({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) {
  return (
    <div className="relative border-t border-[var(--hairline)] py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12">
        {/* Sticky title rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent/80">
                {collection.kicker}
              </span>
              <h3 className="display mt-4 text-6xl font-light sm:text-8xl">
                {collection.title}
              </h3>
              <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-muted">
                {collection.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid auto-rows-auto grid-cols-2 gap-4 sm:gap-6 lg:col-span-8">
          {collection.images.map((image, i) => (
            <ParallaxFigure
              key={image.id}
              image={image}
              range={8 + ((i + index) % 3) * 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="display text-5xl font-light sm:text-7xl">
              Selected Work
            </h2>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.4em] text-muted sm:block">
              2019 — 2026
            </span>
          </div>
        </Reveal>
      </div>

      {COLLECTIONS.map((collection, index) => (
        <CollectionBlock
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}
    </section>
  );
}
