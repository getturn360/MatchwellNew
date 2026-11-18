"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Storing | Wardrobe",
  "Lounging | Sofas",
  "Sleeping | Cots",
  "Living | TV Unit",
] as const;

type GalleryCategory = (typeof categories)[number];

const galleryItems: Array<{
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
}> = [
  {
    title: "A place for everything",
    category: "Storing | Wardrobe",
    image: "/products/wardrobe.jpg",
  },
  {
    title: "Storage, thoughtfully arranged",
    category: "Storing | Wardrobe",
    image: "/products/storage.jpg",
  },
  {
    title: "Made for slow evenings",
    category: "Lounging | Sofas",
    image: "/gallery/living.jpg",
  },
  {
    title: "The living room, gathered",
    category: "Lounging | Sofas",
    image: "/products/product_6.jpeg",
  },
  {
    title: "A softer place to land",
    category: "Sleeping | Cots",
    image: "/products/beds.jpg",
  },
  {
    title: "Quiet details, considered",
    category: "Sleeping | Cots",
    image: "/products/product_4.jpeg",
  },
  {
    title: "The room comes together",
    category: "Living | TV Unit",
    image: "/gallery/tv-unit.jpg",
  },
  {
    title: "Designed around your home",
    category: "Living | TV Unit",
    image: "/products/product_8.jpeg",
  },
];

export default function MatchoraGalleryClient() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <main className="relative px-5 pt-32 pb-28 text-white md:px-12">
      <div className="relative mb-8 h-24 w-52 bg-[#f5f0e7]">
        <Image
          src="/brand/matchora-logo.png"
          alt="Matchora by Matchwell Furnitures"
          fill
          priority
          sizes="208px"
          className="object-contain p-2"
        />
      </div>
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Matchora / Gallery )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        A collection for living.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
        Explore Matchora through four everyday rituals: storing, lounging,
        sleeping, and living.
      </p>

      <div className="mt-12 flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category)}
              className={`border px-4 py-2 text-[11px] tracking-[0.14em] uppercase transition ${
                selected
                  ? "border-copper bg-copper text-black"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden border border-white/10 bg-charcoal"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-[10px] tracking-[0.2em] text-copper uppercase">
                {item.category}
              </p>
              <h2 className="mt-2 font-heading text-2xl">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
