import OptimizedImage from "./OptimizedImage";
import Reveal from "./Reveal";
import { COLLABORATIONS } from "@/lib/content";

export default function Collaborations() {
  return (
    <section className="relative border-t border-(--hairline) py-20 sm:py-28">
      <div className="mx-auto max-w-400 px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <p className="text-[0.6rem] uppercase tracking-[0.5em] text-accent sm:text-xs">
              {COLLABORATIONS.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mx-auto mt-5 max-w-3xl text-balance text-3xl font-light leading-[1.15] sm:text-5xl">
              {COLLABORATIONS.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[0.62rem] uppercase tracking-[0.3em] text-muted">
              {COLLABORATIONS.subHeading}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-12 gap-y-16 sm:mt-16">
            {COLLABORATIONS.brands.map((brand) => (
              <div key={brand.name} className="col-span-6 flex items-center justify-center sm:col-span-3">
                <div
                  className={`relative flex w-full items-center justify-center opacity-85 transition-opacity duration-500 hover:opacity-100 ${
                    brand.name === "North East on Wheels" ? "h-28 sm:h-32" : "h-20 sm:h-24"
                  }`}
                >
                  <OptimizedImage
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="180px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}

            {COLLABORATIONS.artists.map((artist) => (
              <div key={artist.name} className="col-span-4 flex flex-col items-center gap-3 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-(--hairline) sm:h-24 sm:w-24">
                  <OptimizedImage
                    src={artist.logo}
                    alt={artist.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    style={{ objectPosition: artist.focus ?? "center top" }}
                  />
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-foreground/80">
                  {artist.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
