"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import GalleryGrid from "@/components/GalleryGrid";
import { featuredGallery } from "@/lib/gallery";

export default function GallerySection() {
  return (
    <section id="gallery" className="relative px-5 py-28 text-white md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Built / Gallery )
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] md:text-6xl"
          >
            Work that left the workshop.
          </motion.h2>
        </div>
        <AnimatedButton href="/gallery">View more</AnimatedButton>
      </div>
      <div className="mt-14">
        <GalleryGrid items={featuredGallery} mosaic />
      </div>
    </section>
  );
}
