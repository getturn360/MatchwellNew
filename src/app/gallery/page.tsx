import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import FadeIn from "@/components/FadeIn";
import { galleryImages } from "@/data/testimonials";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse our gallery of custom furniture designs for homes and offices. Living rooms, bedrooms, offices, and more.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Gallery</h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of custom furniture designs crafted for homes
            and offices across Kerala.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.id} delay={index * 0.08}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {image.category}
                    </span>
                    <p className="text-sm text-white mt-1">{image.alt}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
