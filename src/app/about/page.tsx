import type { Metadata } from "next";
<<<<<<< HEAD
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import FadeIn from "@/components/FadeIn";
import { Shield, Lightbulb, Heart, Award } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Matchwell Furniture's 30+ years of expertise in crafting timeless, durable furniture for homes and offices across Kerala.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Quality Furniture",
    description:
      "Crafting timeless, durable, and stylish furniture that enhances any space with unmatched quality.",
  },
  {
    icon: Award,
    title: "Affordable Price",
    description:
      "Quality furniture at prices that fit your budget, without compromising on style or durability.",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Innovation",
    description:
      "Bringing fresh ideas to life with creative designs and innovative solutions for every space.",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description:
      "We prioritize client satisfaction by delivering high-quality, custom furniture that exceeds expectations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">
            About Matchwell Furniture
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Crafting Timeless Elegance, Built to Last
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c12ea9bc?w=800&q=80"
                  alt="Matchwell Furniture workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-3xl mb-4">Our Story</h2>
              <p className="text-muted leading-relaxed mb-4">
                With over 30 years of expertise, Matchwell Furniture blends
                tradition and innovation to create stylish, durable, and
                functional pieces. From classic wood designs to modern
                space-saving solutions, our furniture enhances your home or
                office with timeless elegance and lasting quality.
              </p>
              <p className="text-muted leading-relaxed">
                Based in Kollam, Kerala, we serve clients across Kollam,
                Calicut, Wayanad, and Ernakulam. Our team of skilled craftsmen
                takes pride in every piece we create, ensuring that each item
                meets our high standards of quality and design.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <h2 className="font-serif text-3xl text-center mb-12">
              Why You Should Choose Us
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="glass-light rounded-2xl p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 mb-4">
                    <value.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
=======
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
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
  );
}
