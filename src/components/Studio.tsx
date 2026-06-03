import Image from "next/image";
import Reveal from "./Reveal";
import { STUDIO } from "@/lib/content";

export default function Studio() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden border-t border-[var(--hairline)] py-24 sm:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square">
            <Image
              src="https://picsum.photos/id/1066/1200/1200"
              alt="The Eleven Rays studio at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="mono object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--hairline)]" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-accent/80">
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
                <p className="max-w-xl text-sm font-light leading-relaxed text-foreground/75 sm:text-base">
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
