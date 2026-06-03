import Image from "next/image";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-4 border-b border-[var(--hairline)] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="display text-5xl font-light sm:text-7xl">Services</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
              A full storytelling studio — concept to final cut, under one roof.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={(i % 3) * 0.08} className="group">
              <article>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="mono object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 text-[0.6rem] tracking-[0.4em] text-foreground/70">
                    {service.no}
                  </span>
                </div>
                <h3 className="display mt-6 text-3xl font-light">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-muted">
                  {service.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
