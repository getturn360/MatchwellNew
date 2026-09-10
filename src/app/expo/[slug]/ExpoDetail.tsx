"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedButton from "@/components/AnimatedButton";
import { site, testimonials } from "@/lib/site";
import {
  expoFair,
  expoWhatsappText,
  type ExpoEdition,
} from "@/lib/expo";
import { galleryItems, type GalleryItem } from "@/lib/gallery";

export default function ExpoDetail({ edition }: { edition: ExpoEdition }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  const photos = useMemo(
    () =>
      edition.photoSlugs
        .map((slug) => galleryItems.find((item) => item.slug === slug))
        .filter((item): item is GalleryItem => Boolean(item)),
    [edition],
  );

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(expoWhatsappText(edition))}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(edition.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <main className="relative pb-28 text-white">
      <div className="relative min-h-[88svh] overflow-hidden">
        <Image
          src={edition.cover}
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative z-10 flex min-h-[88svh] flex-col justify-end px-5 pt-32 pb-16 md:px-12 md:pb-20">
          <BrandLogo className="mb-8 h-10 md:h-12" />
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( {expoFair.kicker} · Exhibitor )
          </p>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Matchwell at {edition.label}
          </h1>
          <div className="mt-8 max-w-xl space-y-4 text-sm leading-7 text-white/70">
            {edition.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 text-[11px] tracking-[0.22em] text-copper uppercase md:flex-row md:gap-8">
            <p>{edition.dates}</p>
            <p>
              {edition.venue} — {edition.city}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <AnimatedButton href={whatsappHref}>
              {edition.status === "upcoming"
                ? "WhatsApp the stall"
                : "WhatsApp the workshop"}
            </AnimatedButton>
            <AnimatedButton href="/expo">All fairs</AnimatedButton>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12">
        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-4">
          {edition.highlights.map((item) => (
            <article key={item.label} className="bg-black px-6 py-8 md:px-8">
              <p className="text-[11px] tracking-[0.22em] text-white/40 uppercase">
                {item.label}
              </p>
              <p className="mt-3 font-heading text-2xl tracking-[-0.04em] md:text-3xl">
                {item.value}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-24">
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Voices )
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] md:text-6xl">
            What people say about Matchwell
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-lg leading-8 text-white/75">{item.body}</p>
                <footer className="mt-8">
                  <cite className="font-heading text-xl not-italic">
                    {item.name}
                  </cite>
                  <p className="mt-1 text-[11px] tracking-[0.2em] text-white/40 uppercase">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Floor / Photos )
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] md:text-6xl">
            Pieces from the stall
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            Wooden furniture from the Kollam workshop — the rooms Matchwell
            brings to {edition.label}.
          </p>
          <div className="mt-12">
            <GalleryGrid
              items={photos}
              mosaic
              onSelect={setActive}
              priorityFirst
            />
          </div>
        </section>

        <section className="mt-24 grid gap-10 border border-white/10 bg-charcoal p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
              ( Venue )
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
              {edition.venue}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              {edition.city}. Organised by HIFF — Matchwell exhibits. For the
              workshop in Kollam, use Contact.
            </p>
            <p className="mt-4 text-sm text-white/70">
              <a href={`tel:+91${site.phonePrimary}`} data-cursor="hover">
                {site.phonePrimary}
              </a>
              {" · "}
              <a href={`tel:+91${site.phoneSecondary}`} data-cursor="hover">
                {site.phoneSecondary}
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AnimatedButton href={whatsappHref}>
                {edition.status === "upcoming"
                  ? "Plan a stall visit"
                  : "Enquire after the fair"}
              </AnimatedButton>
              <AnimatedButton href="/contact">Workshop in Kollam</AnimatedButton>
            </div>
          </div>
          <div className="min-h-[280px] overflow-hidden border border-white/10">
            <iframe
              title={`${edition.venue}, ${edition.city}`}
              className="h-full min-h-[280px] w-full grayscale contrast-125"
              loading="lazy"
              src={mapSrc}
            />
          </div>
        </section>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-5 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setActive(null)}
            >
              <X size={22} />
            </button>
            <motion.figure
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[86vh] max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.image}
                alt={active.title}
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="max-h-[78vh] w-full object-contain"
                priority
              />
              <figcaption className="mt-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                <h2 className="font-heading text-3xl tracking-[-0.04em]">
                  {active.title}
                </h2>
                <p className="text-[11px] tracking-[0.22em] text-copper uppercase">
                  {active.category} · {active.place}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
