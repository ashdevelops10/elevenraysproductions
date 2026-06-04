import Reveal from "./Reveal";
import { SERVICES, SERVICES_INTRO } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-400 px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-4 border-b border-(--hairline) pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="display text-5xl font-light sm:text-7xl">
              {SERVICES_INTRO.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
              {SERVICES_INTRO.subHeading}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={i * 0.08} className="group h-full">
              <article className="relative flex h-full flex-col overflow-hidden border border-(--hairline) bg-white/2.5 px-6 py-6 transition-all duration-700 hover:border-white/70 hover:bg-white/5.5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent opacity-40" />
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[0.65rem] uppercase tracking-[0.45em] text-muted">
                    {service.no}
                  </span>
                  <span className="h-px flex-1 translate-y-2 bg-white/18 transition-colors duration-700 group-hover:bg-white/40" />
                </div>

                <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10">
                  <div>
                    <h3 className="display max-w-xl text-4xl font-light leading-[0.98] sm:text-5xl lg:text-6xl xl:text-7xl">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-muted sm:text-base">
                      {service.blurb}
                    </p>
                  </div>

                  <ul className="grid gap-3 border-t border-(--hairline) pt-5 sm:pt-6">
                    {service.inclusions.map((inclusion) => (
                      <li
                        key={inclusion}
                        className="flex items-center justify-between gap-5 text-[0.62rem] uppercase tracking-[0.22em] text-foreground sm:text-[0.7rem] sm:tracking-[0.28em]"
                      >
                        <span>{inclusion}</span>
                        <span className="h-px w-12 bg-white/30" />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
