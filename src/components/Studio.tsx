import OptimizedImage from "./OptimizedImage";
import Reveal from "./Reveal";
import { STUDIO } from "@/lib/content";

export default function Studio() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden border-t border-(--hairline) py-24 sm:py-36"
    >
      <div className="mx-auto grid max-w-400 grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group order-2 lg:order-1">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-white/6 sm:aspect-square">
            <OptimizedImage
              src={STUDIO.image.src}
              alt={STUDIO.image.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="mono object-cover transition-transform duration-1600 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-(--hairline)" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent">
              The Studio
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-4xl font-light leading-tight sm:text-6xl">
              Made with the patience of old Hollywood.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {STUDIO.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="max-w-xl text-sm font-light leading-relaxed text-foreground sm:text-base">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-10 text-[0.65rem] uppercase tracking-[0.35em] text-muted">
              {STUDIO.location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
