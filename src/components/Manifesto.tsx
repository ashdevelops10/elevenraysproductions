import Reveal from "./Reveal";

const MARQUEE_WORDS = [
  "Cinematography",
  "Photography",
  "Art Direction",
  "Creative Direction",
  "Set Design",
  "Content",
];

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-8 text-[0.6rem] uppercase tracking-[0.5em] text-accent/80 sm:text-xs">
            Every frame, crafted with intention
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-balance text-3xl font-light leading-[1.15] sm:text-5xl md:text-6xl">
            We build worlds and tell original stories — born from a single idea,
            shaped in light and shadow, and held to the standard of a different
            era.
          </h2>
        </Reveal>
      </div>

      {/* Drifting marquee — old title-card rhythm */}
      <div className="mt-24 select-none border-y border-[var(--hairline)] py-6">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {MARQUEE_WORDS.map((word) => (
                <span
                  key={`${dup}-${word}`}
                  className="display flex items-center text-2xl font-light tracking-wide text-foreground/60 sm:text-4xl"
                >
                  {word}
                  <span className="mx-8 text-accent sm:mx-12">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
