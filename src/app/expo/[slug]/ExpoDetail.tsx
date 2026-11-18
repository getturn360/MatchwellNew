"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedButton from "@/components/AnimatedButton";
import { site } from "@/lib/site";
import {
  expoFair,
  expoOrdinal,
  expoWhatsappText,
  type ExpoEdition,
} from "@/lib/expo";
import { galleryItems, type GalleryItem } from "@/lib/gallery";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CopyLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 13a5 5 0 0 0 7.5.1l1.4-1.4a5 5 0 0 0-7.1-7.1L10.5 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.5-.1L5.1 12.3a5 5 0 0 0 7.1 7.1L13.5 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShareEvent() {
  const [copied, setCopied] = useState(false);

  async function copyPageUrl() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copy this page link", url);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const shareBtn =
    "inline-flex items-center gap-2 border border-white/15 bg-charcoal px-4 py-2.5 text-[11px] tracking-[0.18em] text-white/70 uppercase transition hover:border-copper hover:text-white";

  return (
    <div className="mt-8">
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        Share Event
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className={shareBtn}
          data-cursor="hover"
          onClick={copyPageUrl}
        >
          <CopyLinkIcon />
          {copied ? "Copied" : "Copy link"}
        </button>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className={shareBtn}
        >
          <InstagramIcon />
          Instagram
        </a>
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className={shareBtn}
        >
          <FacebookIcon />
          Facebook
        </a>
      </div>
    </div>
  );
}

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

  const metaTiles = [
    {
      label: "Starting Date",
      value: edition.dates,
      extra: edition.time,
      icon: Calendar,
    },
    {
      label: "Location",
      value: edition.city,
      extra: null,
      icon: MapPin,
    },
    {
      label: "Ending Date",
      value: edition.endDates,
      extra: edition.endTime,
      icon: Clock,
    },
    {
      label: "Address",
      value: `${edition.venue}, ${edition.city}`,
      extra: null,
      icon: MapPin,
    },
  ];

  const detailRows = [
    { label: "Date", value: `${edition.dates} · ${edition.time} – ${edition.endTime}` },
    { label: "Venue", value: `${edition.venue}, ${edition.city}` },
    { label: "Event organiser", value: edition.organizer },
    { label: "Matchwell’s role", value: edition.role },
    { label: "Event objectives", value: edition.objectives },
  ];

  return (
    <main className="relative px-5 pt-32 pb-28 text-white md:px-12">
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( {expoFair.kicker} · {expoOrdinal(edition.edition)} fair · {edition.role} )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
        Matchwell at {edition.label}
      </h1>

      <ShareEvent />

      <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
        {metaTiles.map((tile) => (
          <article key={tile.label} className="bg-charcoal px-6 py-7">
            <p className="flex items-center gap-2 text-[11px] tracking-[0.22em] text-white/40 uppercase">
              <tile.icon size={14} className="text-copper" />
              {tile.label}
            </p>
            <p className="mt-4 font-heading text-2xl tracking-[-0.04em]">
              {tile.value}
            </p>
            {tile.extra ? (
              <p className="mt-2 text-sm text-white/55">{tile.extra}</p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <AnimatedButton href={whatsappHref}>
          {edition.status === "upcoming"
            ? "WhatsApp the stall"
            : "WhatsApp the workshop"}
        </AnimatedButton>
        <AnimatedButton href="/expo">All events</AnimatedButton>
      </div>

      <section className="mt-16 max-w-3xl border-t border-white/10 pt-12">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( Event Details )
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
          Event Details
        </h2>
        <dl className="mt-8 space-y-6">
          {detailRows.map((row) => (
            <div key={row.label} className="grid gap-1 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
              <dt className="text-[11px] tracking-[0.2em] text-white/40 uppercase">
                {row.label}
              </dt>
              <dd className="text-sm leading-7 text-white/75">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( About the Event )
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
          About the Event
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-7 text-white/70">
          {edition.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( Event gallery )
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
          Pieces from the stall
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
          Wooden furniture from the Kollam workshop — the rooms Matchwell
          brings to {edition.label}.
        </p>
        <div className="mt-10">
          <GalleryGrid
            items={photos}
            mosaic
            onSelect={setActive}
            priorityFirst
          />
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( On the floor )
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-5xl">
          On the floor
        </h2>
        <ul className="mt-8 space-y-4">
          {edition.focus.map((point) => (
            <li
              key={point}
              className="flex gap-4 border-l border-copper/70 pl-5 text-sm leading-7 text-white/70"
            >
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid gap-10 border border-white/10 bg-charcoal p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Find us )
          </p>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.04em] md:text-4xl">
            {edition.venue}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/65">
            {edition.city}. For the Kollam workshop, use Contact.
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
        </div>
        <div className="min-h-[260px] overflow-hidden border border-white/10">
          <iframe
            title={`${edition.venue}, ${edition.city}`}
            className="h-full min-h-[260px] w-full grayscale contrast-125"
            loading="lazy"
            src={mapSrc}
          />
        </div>
      </section>

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
