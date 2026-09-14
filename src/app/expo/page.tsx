import type { Metadata } from "next";
import Link from "next/link";
import ExpoCard from "@/components/ExpoCard";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedButton from "@/components/AnimatedButton";
import { expoFair, pastExpos, upcomingExpos } from "@/lib/expo";
import { featuredGallery } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Expo — Matchwell at HIFF",
  description:
    "Matchwell Furniture exhibits at the Hindustan International Furniture Fair (HIFF). Upcoming and past stalls — we participate; we do not organise the fair.",
};

export default function ExpoIndexPage() {
  const upcoming = upcomingExpos();
  const past = pastExpos();
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Matchwell, please tell me when you next exhibit at HIFF.")}`;

  return (
    <main className="relative px-5 pt-32 pb-28 text-white md:px-12">
      
      <p className="mt-6 text-[11px] tracking-[0.28em] text-copper uppercase">
        ( {expoFair.kicker} )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        {expoFair.heading}
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65">
        {expoFair.intro}
      </p>
      <p className="mt-4 text-[11px] tracking-[0.2em] text-white/40 uppercase">
        {expoFair.name}
      </p>

      {upcoming.length ? (
        <section className="mt-20">
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Upcoming )
          </p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
            Upcoming events
          </h2>
          <div className="mt-10 grid gap-6">
            {upcoming.map((edition, index) => (
              <ExpoCard
                key={edition.slug}
                edition={edition}
                priority={index === 0}
              />
            ))}
          </div>
        </section>
      ) : null}

      {past.length ? (
        <section className="mt-24">
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Past )
          </p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
            Past events
          </h2>
          <div className="mt-10 grid gap-6">
            {past.map((edition) => (
              <ExpoCard key={edition.slug} edition={edition} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-24 border border-white/10 bg-charcoal px-6 py-12 md:px-12 md:py-16">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( Notify )
        </p>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl tracking-[-0.04em] md:text-5xl">
          Get to know when we exhibit.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
          Be the first to know when Matchwell is on the HIFF floor. WhatsApp
          the workshop and we will send stall dates.
        </p>
        <div className="mt-8">
          <AnimatedButton href={whatsappHref}>
            WhatsApp for fair dates
          </AnimatedButton>
        </div>
      </section>

      {/* <section className="mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
              ( Event gallery )
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
              Pieces from the floor.
            </h2>
          </div>
          <Link
            href="/gallery"
            prefetch
            data-cursor="hover"
            className="text-[11px] tracking-[0.22em] text-white/50 uppercase transition hover:text-copper"
          >
            View gallery
          </Link>
        </div>
        <div className="mt-12">
          <GalleryGrid items={featuredGallery} mosaic />
        </div>
      </section> */}
    </main>
  );
}
