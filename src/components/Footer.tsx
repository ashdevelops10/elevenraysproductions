import { FOOTER_CONTENT, NAV_LINKS } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";

export default function Footer() {
  return (
    <footer className="border-t border-(--hairline) bg-background">
      <div className="mx-auto max-w-400 px-5 py-14 sm:px-8 sm:py-20">

        {/* Top row: logo left, nav right */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" aria-label="Home">
            <div className="relative h-10 w-36 sm:h-12 sm:w-44">
              <OptimizedImage
                src="/logo2whitepng.png"
                alt={FOOTER_CONTENT.tagline}
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </a>

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
        <div className="mt-10 flex flex-col gap-3 border-t border-(--hairline) pt-7 text-[0.62rem] uppercase tracking-[0.22em] text-muted sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8 sm:text-[0.63rem] sm:tracking-[0.25em]">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p>{FOOTER_CONTENT.location}</p>
        </div>
      </div>
    </footer>
  );
}
