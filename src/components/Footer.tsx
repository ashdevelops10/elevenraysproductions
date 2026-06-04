import { FOOTER_CONTENT, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-(--hairline) bg-background">
      <div className="mx-auto max-w-400 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="display text-5xl font-light leading-none sm:text-7xl">
              {FOOTER_CONTENT.tagline}
            </h2>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-(--hairline) pt-8 text-[0.65rem] uppercase tracking-[0.25em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p>{FOOTER_CONTENT.location}</p>
        </div>
      </div>
    </footer>
  );
}
