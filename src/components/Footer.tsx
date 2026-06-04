import { FOOTER_CONTENT, NAV_LINKS } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";

export default function Footer() {
  return (
    <footer className="border-t border-(--hairline) bg-background">
      <div className="mx-auto max-w-400 px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="flex items-start">
            <div className="relative h-16 w-52 sm:h-20 sm:w-64">
              <OptimizedImage
                src="/logo2whitepng.png"
                alt={FOOTER_CONTENT.tagline}
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-contain object-left"
              />
            </div>
          </div>

          <nav className="grid max-w-sm grid-cols-2 gap-x-8 gap-y-4 sm:max-w-none sm:grid-cols-4 sm:gap-x-10 lg:justify-self-end">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent sm:text-[0.7rem] sm:tracking-[0.3em]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 grid gap-5 border-t border-(--hairline) pt-8 text-[0.63rem] uppercase leading-relaxed tracking-[0.2em] text-muted sm:mt-16 sm:grid-cols-2 sm:items-end sm:gap-6 sm:text-[0.65rem] sm:tracking-[0.25em]">
          <p className="max-w-[34ch]">{FOOTER_CONTENT.copyright}</p>
          <p className="sm:justify-self-end">{FOOTER_CONTENT.location}</p>
        </div>
      </div>
    </footer>
  );
}
