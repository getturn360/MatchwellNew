"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import GalleryGrid from "@/components/GalleryGrid";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery";

export default function GalleryClient() {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <main className="relative px-5 pt-32 pb-28 text-white md:px-12">
      <BrandLogo className="mb-8 h-10 md:h-12" />
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Gallery )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        Every piece we have built.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
        Wooden furniture made for homes and offices across Kerala — wardrobes,
        kitchens, beds, and one-off joinery.
      </p>

      <div className="mt-12 flex flex-wrap gap-2">
        {galleryCategories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              data-cursor="hover"
              onClick={() => setFilter(category)}
              className={`relative overflow-hidden px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition ${
                selected
                  ? "text-black"
                  : "border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {selected ? (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute inset-0 bg-copper"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <GalleryGrid items={items} onSelect={setActive} priorityFirst />
          </motion.div>
        </AnimatePresence>
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
