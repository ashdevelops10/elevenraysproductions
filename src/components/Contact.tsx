"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { CONTACT_CONTENT } from "@/lib/content";
import { CONTACT_VIDEO_SOURCES } from "@/lib/media";
import OptimizedVideo from "./OptimizedVideo";
import TicketButton from "./TicketButton";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.muted = true;
    let sectionIsVisible = false;

    const updateVisibility = () => {
      if (document.hidden) {
        sectionIsVisible = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(0, visibleHeight) / Math.min(rect.height, viewportHeight);
      sectionIsVisible = visibleRatio >= 0.45;
    };

    const playInViewport = () => {
      if (!sectionIsVisible) return;

      void video.play().catch(() => undefined);
    };

    const syncPlayback = () => {
      updateVisibility();

      if (sectionIsVisible) {
        if (video.paused) playInViewport();
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        sectionIsVisible = entry.isIntersecting;

        if (entry.isIntersecting) {
          playInViewport();
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(section);
    syncPlayback();
    window.addEventListener("scroll", syncPlayback, { passive: true });
    window.addEventListener("resize", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncPlayback);
      window.removeEventListener("resize", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-(--hairline) py-28 sm:py-40"
    >
      <OptimizedVideo
        ref={videoRef}
        sources={CONTACT_VIDEO_SOURCES}
        className="absolute inset-0 h-full w-full object-cover brightness-90 saturate-115"
        loop
        muted
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
        <Reveal delay={0.05}>
          <h2 className="display mt-6 text-balance text-5xl font-light leading-[1.05] sm:text-8xl">
            {CONTACT_CONTENT.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-sm font-light leading-relaxed text-foreground sm:text-base">
            {CONTACT_CONTENT.subText}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TicketButton
              href={CONTACT_CONTENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              label={CONTACT_CONTENT.cta}
            />
            <a
              href={CONTACT_CONTENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-(--hairline) px-7 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
            >
              {CONTACT_CONTENT.secondaryCta}
            </a>
          </div>
        </Reveal>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted">
          {CONTACT_CONTENT.newsletter}
        </p>
      </div>
    </section>
  );
}
