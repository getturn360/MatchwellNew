import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { expoEditions, expoFair, expoOrdinal } from "@/lib/expo";

export const metadata: Metadata = {
  title: "Expo — Matchwell at HIFF",
  description:
    "Matchwell Furniture exhibits at the Hindustan International Furniture Fair (HIFF). See our stalls from 2016 to 2026 — we participate; we do not organise the fair.",
};

export default function ExpoIndexPage() {
  return (
    <main className="relative px-5 pt-32 pb-28 text-white md:px-12">
      {/* <BrandLogo className="mb-8 h-10 md:h-12" /> */}
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
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

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expoEditions.map((edition, index) => (
          <Link
            key={edition.slug}
            href={`/expo/${edition.slug}`}
            prefetch
            data-cursor="hover"
            className="group block overflow-hidden border border-white/10 bg-charcoal transition hover:border-copper/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={edition.cover}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={index === 0}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <p
                className={`absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase ${
                  edition.status === "upcoming"
                    ? "bg-copper text-black"
                    : "border border-white/30 bg-black/40 text-white/80"
                }`}
              >
                {edition.status === "upcoming" ? "Upcoming" : "Participated"}
              </p>
            </div>
            <div className="p-6 md:p-7">
              <p className="text-[11px] tracking-[0.22em] text-copper uppercase">
                {edition.label} · {expoOrdinal(edition.edition)} fair
              </p>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em]">
                {edition.city}
              </h2>
              <p className="mt-2 text-[11px] tracking-[0.18em] text-white/45 uppercase">
                {edition.dates}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.16em] text-white/40 uppercase">
                {edition.venue}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/65">
                {edition.excerpt}
              </p>
              <p className="mt-5 text-[11px] tracking-[0.22em] text-white/50 uppercase transition group-hover:text-copper">
                Open story
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
