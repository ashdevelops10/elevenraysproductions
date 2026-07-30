import Reveal from "./Reveal";
import { APPROACH } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-400 px-5 sm:px-8">
        <div className="mb-16 border-b border-(--hairline) pb-10">
          <Reveal>
            <p className="text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
              {APPROACH.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-4xl font-light sm:text-6xl">
              {APPROACH.heading}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {APPROACH.steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 border-t border-(--hairline) pt-6">
                <span className="text-[0.65rem] uppercase tracking-[0.45em] text-muted">
                  {step.no}
                </span>
                <h3 className="display text-2xl font-light sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted">
                  {step.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
