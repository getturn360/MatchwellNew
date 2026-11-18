import type { Metadata } from "next";
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
  );
}
