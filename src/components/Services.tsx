import Reveal from "./Reveal";
import { SERVICES, SERVICES_INTRO } from "@/lib/content";
import TicketButton from "./TicketButton";

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={i * 0.06} className="group h-full">
              <article className="service-panel relative flex h-full flex-col overflow-hidden border border-(--hairline) bg-white/2.5 transition-all duration-700 hover:border-white/70 hover:bg-white/5.5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent opacity-40" />
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted">
                    {service.no}
                  </span>
                  <span className="h-px flex-1 translate-y-2 bg-white/18 transition-colors duration-700 group-hover:bg-white/40" />
                </div>

                <h3 className="display mt-4 text-2xl font-light leading-[1] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs font-light leading-relaxed text-muted sm:text-sm">
                  {service.blurb}
                </p>

                <ul className="mt-4 grid gap-2 border-t border-(--hairline) pt-4">
                  {service.inclusions.map((inclusion) => (
                    <li
                      key={inclusion}
                      className="flex items-center justify-between gap-4 text-[0.56rem] uppercase tracking-[0.18em] text-foreground sm:text-[0.6rem] sm:tracking-[0.22em]"
                    >
                      <span>{inclusion}</span>
                      <span className="h-px w-8 bg-white/30" />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center sm:mt-20">
            <TicketButton
              href={SERVICES_INTRO.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              label={SERVICES_INTRO.cta}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
