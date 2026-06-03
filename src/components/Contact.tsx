"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";
import { CONTACT_VIDEO_SOURCES } from "@/lib/media";
import OptimizedVideo from "./OptimizedVideo";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.volume = 0.55;
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

      video.muted = false;
      void video.play().catch(() => {
        video.muted = true;
        void video.play().catch(() => undefined);
      });
    };

    const enableAudio = () => {
      if (!sectionIsVisible) return;

      video.muted = false;
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
    window.addEventListener("pointerdown", enableAudio);
    window.addEventListener("keydown", enableAudio);
    window.addEventListener("touchstart", enableAudio, { passive: true });
    window.addEventListener("scroll", syncPlayback, { passive: true });
    window.addEventListener("resize", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
      window.removeEventListener("scroll", syncPlayback);
      window.removeEventListener("resize", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Wire this to your provider (Mailchimp, Resend, etc.) when ready.
    setSent(true);
    setEmail("");
  };

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
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
        <Reveal>
          <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent">
            Let’s create something timeless
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-6 text-balance text-5xl font-light leading-[1.05] sm:text-8xl">
            Tell us your story.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={`mailto:${SITE.email}`}
            className="group mt-10 inline-block text-lg font-light tracking-wide text-foreground transition-colors hover:text-accent sm:text-2xl"
          >
            {SITE.email}
            <span className="mx-auto mt-1 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-16 flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email — join the newsletter"
              aria-label="Email address"
              className="flex-1 border-b border-(--hairline) bg-transparent px-1 py-3 text-center text-sm tracking-wide text-foreground placeholder:text-muted focus:border-accent focus:outline-none sm:text-left"
            />
            <button
              type="submit"
              className="border border-(--hairline) px-7 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
            >
              {sent ? "Thank you" : "Subscribe"}
            </button>
          </form>
        </Reveal>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
