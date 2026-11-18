<<<<<<< HEAD
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/FadeIn";
import {
  getFeaturedCategories,
  getSecondaryCategories,
} from "@/data/categories";

export default function HomePage() {
  const featured = getFeaturedCategories();
  const secondary = getSecondaryCategories();

  return (
    <>
      <HeroSection />

      {/* Categories */}
      <section id="categories" className="py-20" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-14">
            <h2
              id="categories-heading"
              className="font-serif text-3xl md:text-4xl mb-3"
            >
              Our Collections
            </h2>
            <p className="text-muted text-sm">
              Browse our curated furniture categories
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featured.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} index={i} featured />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {secondary.map((cat, i) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                index={i + featured.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 border-t border-border" aria-labelledby="about-snippet">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c12ea9bc?w=800&q=80"
                  alt="Matchwell Furniture craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2
                id="about-snippet"
                className="font-serif text-3xl md:text-4xl mb-4"
              >
                Crafting Timeless Elegance
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                With over 30 years of expertise, Matchwell Furniture blends
                tradition and innovation to create stylish, durable, and
                functional pieces. From classic wood designs to modern
                space-saving solutions, our furniture enhances your home or
                office with timeless elegance and lasting quality.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <ValueProps />
      <Testimonials />

      {/* Gallery preview */}
      <section className="py-20 border-t border-border" aria-labelledby="gallery-preview">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <h2
              id="gallery-preview"
              className="font-serif text-3xl md:text-4xl mb-3"
            >
              Gallery
            </h2>
            <p className="text-muted text-sm mb-10">
              A glimpse into our finest work
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-8 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
=======
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import HomeBelowFold from "@/sections/HomeBelowFold";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HomeBelowFold />
    </main>
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
  );
}
