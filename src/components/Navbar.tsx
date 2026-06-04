"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";

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
      <nav className="mx-auto grid max-w-400 items-center px-5 py-4 sm:px-8 md:grid-cols-[auto_1fr_auto] md:py-6">
        <a
          href="#top"
          className="group block"
          aria-label={`${SITE.name} — home`}
        >
          <span className="relative block h-10 w-32 sm:h-12 sm:w-40">
            <OptimizedImage
              src="/logo2whitepng.png"
              alt={SITE.name}
              fill
              priority
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain object-left"
            />
          </span>
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden items-center justify-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — right */}
        <a
          href="#contact"
          className="hidden border border-(--hairline) justify-self-end px-5 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent md:block"
        >
          Book a Shoot
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 col-start-2 flex h-10 w-10 flex-col items-center justify-self-end gap-1.5 md:hidden"
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
