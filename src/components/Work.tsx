"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { COLLECTIONS, WORK_INTRO, type Collection, type ImageAsset } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";
import Reveal from "./Reveal";

const marqueeItemClass: Record<NonNullable<ImageAsset["span"]>, string> = {
  tall: "aspect-4/5 h-80 sm:h-96 lg:h-[58vh]",
  wide: "aspect-16/10 h-72 sm:h-88 lg:h-[54vh]",
  square: "aspect-square h-76 sm:h-92 lg:h-[56vh]",
};

const MARQUEE_PIXELS_PER_SECOND = 88;

function MarqueeImage({
  image,
  onOpen,
}: {
  image: ImageAsset;
  onOpen: () => void;
}) {
  return (
    <figure
      className={`group relative shrink-0 overflow-hidden ${
        marqueeItemClass[image.span ?? "square"]
      }`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block h-full w-full cursor-zoom-in text-left"
        aria-label={`Open ${image.alt}`}
      >
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 48vw, 34vw"
          className="object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </button>
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 bg-linear-to-t from-black/75 to-transparent p-3 text-[0.56rem] uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {image.alt}
      </figcaption>
    </figure>
  );
}

function ImageViewer({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: {
  images: ImageAsset[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!activeImage) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/94 px-4 py-5 text-white sm:px-8 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close image viewer backdrop"
        tabIndex={-1}
      />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.28em] text-white/70 sm:text-[0.65rem]">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center border border-white/24 text-xl leading-none text-white transition-colors hover:border-white"
            aria-label="Close image viewer"
          >
            ×
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <OptimizedImage
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />

          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/24 bg-black/35 text-2xl leading-none text-white backdrop-blur-sm transition-colors hover:border-white sm:left-4 sm:h-14 sm:w-14"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/24 bg-black/35 text-2xl leading-none text-white backdrop-blur-sm transition-colors hover:border-white sm:right-4 sm:h-14 sm:w-14"
            aria-label="Next image"
          >
            →
          </button>
        </div>

        <p className="mx-auto max-w-3xl text-center text-xs uppercase leading-relaxed tracking-[0.24em] text-white/72 sm:text-[0.7rem]">
          {activeImage.alt}
        </p>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  images,
  reverse = false,
}: {
  images: ImageAsset[];
  reverse?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(40);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % images.length;
    });
  }, [images.length]);

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
  }, [reduceMotion, images.length]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const resumeOnScroll = () => {
      setIsPaused(false);
    };

    window.addEventListener("scroll", resumeOnScroll, { passive: true });
    window.addEventListener("wheel", resumeOnScroll, { passive: true });
    window.addEventListener("touchmove", resumeOnScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", resumeOnScroll);
      window.removeEventListener("wheel", resumeOnScroll);
      window.removeEventListener("touchmove", resumeOnScroll);
    };
  }, [reduceMotion]);

  const viewer = (
    <AnimatePresence>
      {activeIndex !== null ? (
        <ImageViewer
          images={images}
          activeIndex={activeIndex}
          onClose={closeViewer}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      ) : null}
    </AnimatePresence>
  );

  if (reduceMotion) {
    return (
      <>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12">
          {images.map((image, imageIndex) => (
            <MarqueeImage
              key={image.id}
              image={image}
              onOpen={() => {
                setActiveIndex(imageIndex);
              }}
            />
          ))}
        </div>
        {viewer}
      </>
    );
  }

  const loop = [...images, ...images];

  return (
    <>
      <div
        className="relative overflow-hidden py-2"
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
            animationDirection: reverse ? "reverse" : "normal",
            animationPlayState: isPaused || activeIndex !== null ? "paused" : "running",
          }}
          onMouseEnter={() => {
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
          onPointerEnter={() => {
            setIsPaused(true);
          }}
          onPointerLeave={() => {
            setIsPaused(false);
          }}
          onPointerDown={() => {
            setIsPaused(true);
          }}
        >
          {loop.map((image, imageIndex) => (
            <MarqueeImage
              key={`${image.id}-${imageIndex}`}
              image={image}
              onOpen={() => {
                setActiveIndex(imageIndex % images.length);
              }}
            />
          ))}
        </div>
      </div>
      {viewer}
    </>
  );
}

function LeadImage({
  image,
  priority,
  reversed,
}: {
  image: ImageAsset;
  priority: boolean;
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div
      ref={ref}
      className={`relative aspect-16/10 min-h-80 w-full overflow-hidden sm:min-h-120 lg:min-h-[74vh] ${
        reversed ? "lg:mr-[5vw]" : "lg:ml-[5vw]"
      }`}
    >
      <motion.div
        style={reduceMotion ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 92vw, 70vw"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}

function CollectionBlock({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) {
  const [leadImage, ...galleryImages] = collection.images;
  const isReversed = index % 2 === 1;
  const additionalRows = collection.additionalRows ?? [];
  const frameCount = collection.images.length + additionalRows.flat().length;

  return (
    <article className="relative py-16 sm:py-24 lg:py-32">
      {/* Header + lead image: clean split, no overlap, uses the open space */}
      <div className="mx-auto max-w-450 px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal
            className={
              isReversed ? "lg:order-2 lg:col-span-4" : "lg:order-1 lg:col-span-4"
            }
          >
            <div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.28em] text-white/66 sm:text-[0.62rem]">
              <span>{collection.kicker}</span>
              <span className="h-px flex-1 bg-white/22" />
              <span>{frameCount} Frames</span>
            </div>
            <h3 className="display mt-5 text-5xl font-light leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              {collection.title}
            </h3>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/76 sm:text-base lg:text-lg">
              {collection.description}
            </p>
          </Reveal>

          {leadImage ? (
            <div
              className={
                isReversed ? "lg:order-1 lg:col-span-8" : "lg:order-2 lg:col-span-8"
              }
            >
              <LeadImage
                image={leadImage}
                priority={index < 2}
                reversed={isReversed}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Auto-scrolling marquee reel, alternating direction per collection */}
      {galleryImages.length > 0 ? (
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <MarqueeRow images={galleryImages} reverse={isReversed} />
        </div>
      ) : null}

      {additionalRows.map((rowImages, rowIndex) => (
        <div
          key={`${collection.id}-row-${rowIndex}`}
          className="mt-8 sm:mt-10 lg:mt-12"
        >
          <MarqueeRow
            images={rowImages}
            reverse={rowIndex % 2 === 0 ? !isReversed : isReversed}
          />
        </div>
      ))}
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#090908]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-450 px-5 pt-18 sm:px-8 sm:pt-28 lg:px-12">
        <Reveal>
          <div className="grid gap-7 py-9 sm:py-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="display mt-3 text-5xl font-light leading-[0.9] text-white sm:mt-4 sm:text-7xl lg:text-9xl xl:text-[11rem]">
                {WORK_INTRO.heading}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <p className="max-w-lg text-sm font-light leading-relaxed text-white/70 sm:text-base lg:text-right lg:text-lg">
                {WORK_INTRO.subHeading}
              </p>
              <div className="mt-5 flex gap-3 text-[0.58rem] uppercase tracking-[0.24em] text-white/52 sm:text-[0.62rem] lg:justify-end">
                <span>{WORK_INTRO.metaStart}</span>
                <span className="h-px w-12 self-center bg-white/25" />
                <span>{WORK_INTRO.metaEnd}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/12 py-7 text-[0.6rem] uppercase tracking-[0.24em] text-white/60 sm:text-[0.65rem]">
            {WORK_INTRO.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {COLLECTIONS.map((collection, index) => (
        <CollectionBlock
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}

      <div className="relative mx-auto max-w-450 px-5 pb-20 pt-4 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal>
          <div className="flex justify-center border-t border-white/12 pt-12 sm:pt-16">
            <a
              href="#work"
              className="border border-white/24 px-6 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:border-accent hover:text-accent"
            >
              {WORK_INTRO.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
