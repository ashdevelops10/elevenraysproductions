"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";
import TicketButton from "./TicketButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="relative z-50 border-b border-white/8 bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-400 items-center justify-between gap-4 px-5 py-3 sm:px-8 md:grid md:grid-cols-[auto_1fr_auto] md:py-4">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3"
          aria-label={`${SITE.name} — home`}
        >
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 transition-all duration-500 group-hover:ring-accent/70 sm:h-11 sm:w-11">
            <OptimizedImage
              src="/suri-logo.webp"
              alt=""
              fill
              priority
              sizes="44px"
              className="object-cover"
              style={{ objectPosition: "48% 40%", transform: "scale(1.35)" }}
            />
          </span>
          <span className="truncate text-sm tracking-[0.02em] text-foreground [font-family:var(--font-logo)] sm:text-base">
            {SITE.name}
          </span>
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden items-center justify-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[0.66rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — right */}
        <TicketButton
          href="#contact"
          label="Book a Shoot"
          className="hidden shrink-0 justify-self-end whitespace-nowrap md:inline-flex"
        />

        {/* Mobile toggle — opens the menu; the overlay has its own close
            button, since this one sits behind it (lower z-index) once open
            and would otherwise be an inert duplicate a11y tools could still
            find by its "Close menu" label. */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Open menu"
            aria-expanded={false}
          >
            <span className="h-px w-7 bg-foreground" />
            <span className="h-px w-7 bg-foreground" />
          </button>
        )}
      </nav>
    </header>

    {/* Mobile fullscreen menu — rendered outside <header> so its own
        backdrop-blur can't turn it into the containing block for this
        fixed-position overlay (backdrop-filter creates one, same as
        transform), which would otherwise collapse the overlay to the
        header's height instead of the full viewport. */}
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
        >
          <div className="flex justify-end px-5 py-3 sm:px-8">
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              aria-label="Close menu"
            >
              <span className="h-px w-7 translate-y-[3.5px] rotate-45 bg-foreground" />
              <span className="h-px w-7 translate-y-[-3.5px] -rotate-45 bg-foreground" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-2 pb-16">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-3 text-5xl font-light tracking-wide"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="border-t border-(--hairline) px-6 py-6 text-center">
            <a
              href={`mailto:${SITE.email}`}
              className="text-xs uppercase tracking-[0.3em] text-muted"
            >
              {SITE.email}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
