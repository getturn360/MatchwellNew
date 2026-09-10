import type { Metadata } from "next";
import BrandLogo from "@/components/BrandLogo";
import AboutPageVisual from "./AboutPageVisual";
import { aboutPage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Matchwell Furniture has been crafting quality wooden furniture in Kollam for over 30 years — tradition, innovation, and pieces built to last.",
};

export default function AboutPage() {
  return (
    <main className="relative pb-28 text-white">
      <div className="grid items-stretch md:min-h-[100svh] md:grid-cols-2">
        <div className="flex flex-col justify-between px-5 pt-32 pb-16 md:px-12 md:pb-24">
          <div>
            <BrandLogo className="mb-8 h-10 md:h-12" />
            <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
              ( {aboutPage.kicker} )
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-5xl leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              {aboutPage.heading}
            </h1>
            <div className="mt-10 max-w-md space-y-5 text-sm leading-7 text-white/65">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[55vh] md:min-h-full">
          <AboutPageVisual />
        </div>
      </div>

      <div className="px-5 md:px-12">
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <article className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
              ( Vision )
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.04em] md:text-4xl">
              Timeless rooms, built to last.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              {aboutPage.vision}
            </p>
          </article>
          <article className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
              ( Mission )
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.04em] md:text-4xl">
              Craft, timber, and care.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              {aboutPage.mission}
            </p>
          </article>
        </div>

        <p className="mt-16 max-w-3xl font-heading text-2xl leading-snug tracking-[-0.04em] text-white/80 md:text-4xl">
          {aboutPage.closer}
        </p>

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-5xl tracking-[-0.05em] md:text-6xl">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.22em] text-white/45 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
