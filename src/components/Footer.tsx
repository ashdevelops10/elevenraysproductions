import { FOOTER_CONTENT, NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-(--hairline) bg-background">
      <div className="mx-auto max-w-400 px-5 py-14 sm:px-8 sm:py-20">

        {/* Top row: name + tagline left, nav right */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#top"
              aria-label="Home"
              className="text-base tracking-[0.02em] text-foreground [font-family:var(--font-logo)] sm:text-lg"
            >
              {SITE.name}
            </a>
            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted">
              {FOOTER_CONTENT.tagline}
            </p>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              {FOOTER_CONTENT.locations}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-(--hairline) pt-7 text-[0.62rem] uppercase tracking-[0.22em] text-muted sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8 sm:text-[0.63rem] sm:tracking-[0.25em]">
          <p>{FOOTER_CONTENT.copyright}</p>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-accent">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
