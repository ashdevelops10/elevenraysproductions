import Reveal from "./Reveal";
import { PHILOSOPHY } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-8 text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
            {PHILOSOPHY.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-balance text-3xl font-light leading-[1.15] sm:text-5xl md:text-6xl">
            {PHILOSOPHY.heading}
          </h2>
        </Reveal>
        {PHILOSOPHY.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={0.16 + index * 0.06}>
            <p className="mx-auto mt-6 max-w-3xl text-balance text-sm font-light leading-relaxed text-foreground sm:text-base">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
