import Reveal from "./Reveal";
import { CONTACT_CONTENT } from "@/lib/content";
import OptimizedImage from "./OptimizedImage";
import TicketButton from "./TicketButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-svh items-center overflow-hidden border-t border-(--hairline) py-28 sm:py-40"
    >
      <OptimizedImage
        src="/images/portfolio/vytl-event-dj-booth-teal.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover brightness-95 saturate-115"
        style={{ objectPosition: "50% 35%" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
        <Reveal delay={0.05}>
          <h2 className="display mt-6 text-balance text-5xl font-light leading-[1.05] sm:text-8xl">
            {CONTACT_CONTENT.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-sm font-light leading-relaxed text-foreground sm:text-base">
            {CONTACT_CONTENT.subText}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TicketButton
              href={CONTACT_CONTENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              label={CONTACT_CONTENT.cta}
            />
            <a
              href={CONTACT_CONTENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-(--hairline) px-7 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
            >
              {CONTACT_CONTENT.secondaryCta}
            </a>
          </div>
        </Reveal>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted">
          {CONTACT_CONTENT.newsletter}
        </p>
      </div>
    </section>
  );
}
