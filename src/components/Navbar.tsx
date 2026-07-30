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
    <header
      className="relative z-50 bg-transparent"
    >
      <nav className="mx-auto flex max-w-400 items-center justify-between px-5 py-3 sm:px-8 md:grid md:grid-cols-[auto_1fr_auto] md:py-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${SITE.name} — home`}
        >
          <span className="relative block h-11 w-11 shrink-0 sm:h-12 sm:w-12">
            <OptimizedImage
              src="/suri-logo.webp"
              alt=""
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </span>
          <span className="text-sm font-light uppercase tracking-[0.28em] text-foreground sm:text-base">
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
          className="hidden justify-self-end md:inline-flex"
        />

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-7 bg-foreground transition-all duration-500 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-foreground transition-all duration-500 ${
              open ? "translate-y-[-3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col bg-background md:hidden"
          >
            <ul className="flex flex-1 flex-col items-center justify-center gap-2">
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
    </header>
  );
}
