import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-8 text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
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
    </section>
  );
}
