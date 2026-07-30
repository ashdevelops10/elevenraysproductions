import Reveal from "./Reveal";
import { PHILOSOPHY } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent/70" />
            <p className="text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
              {PHILOSOPHY.eyebrow}
            </p>
            <span className="h-px w-10 bg-accent/70" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-balance text-4xl font-light leading-[1.12] sm:text-6xl md:text-7xl">
            {PHILOSOPHY.heading}
          </h2>
        </Reveal>
        {PHILOSOPHY.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={0.16 + index * 0.06}>
            <p className="mx-auto mt-7 max-w-2xl text-balance text-base font-light leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
