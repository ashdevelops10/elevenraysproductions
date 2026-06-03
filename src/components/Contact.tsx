"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/content";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Wire this to your provider (Mailchimp, Resend, etc.) when ready.
    setSent(true);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--hairline)] py-28 sm:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent/80">
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
            className="group mt-10 inline-block text-lg font-light tracking-wide text-foreground/80 transition-colors hover:text-accent sm:text-2xl"
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
              className="flex-1 border-b border-[var(--hairline)] bg-transparent px-1 py-3 text-center text-sm tracking-wide text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none sm:text-left"
            />
            <button
              type="submit"
              className="border border-[var(--hairline)] px-7 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/90 transition-all duration-500 hover:border-accent hover:text-accent"
            >
              {sent ? "Thank you" : "Subscribe"}
            </button>
          </form>
        </Reveal>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted/60">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
