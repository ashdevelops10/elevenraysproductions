import { NAV_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--hairline)] bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="display text-5xl font-light leading-none sm:text-7xl">
              Eleven Rays
            </h2>
            <p className="mt-3 text-[0.55rem] tracking-[0.5em] text-muted">
              PRODUCTIONS
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--hairline)] pt-8 text-[0.65rem] uppercase tracking-[0.25em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
