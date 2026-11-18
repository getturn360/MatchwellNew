import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "Matchora Products",
  description:
    "Explore the Matchora furniture collection: wardrobes, sofas, cots, and TV units.",
};

const products = [
  {
    group: "Storing",
    name: "Wardrobe",
    copy: "Thoughtful storage, designed to bring calm and character to your room.",
    image: "/products/wardrobe.jpg",
  },
  {
    group: "Lounging",
    name: "Sofas",
    copy: "Comfort-led seating made for gathering, relaxing, and everyday living.",
    image: "/gallery/living.jpg",
  },
  {
    group: "Sleeping",
    name: "Cots",
    copy: "Warm, enduring bedroom pieces made to feel at home for years.",
    image: "/products/beds.jpg",
  },
  {
    group: "Living",
    name: "TV Unit",
    copy: "A considered centrepiece for your living room, with space for what matters.",
    image: "/gallery/tv-unit.jpg",
  },
];

export default function MatchoraProductsPage() {
  return (
    <main className="relative px-5 pt-32 pb-24 text-white md:px-12">
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
        ( Product / Collection )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        The Matchora collection.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
        Explore considered pieces for every room, from thoughtful storage to
        the heart of your living space.
      </p>

      <div className="mt-16 grid gap-5">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="overflow-hidden border border-white/10 bg-charcoal"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[360px]">
                <Image
                  src={product.image}
                  alt={`${product.group} ${product.name}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-12">
                <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em] md:text-5xl">
                  {product.group} | {product.name}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                  {product.copy}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <AnimatedButton href="/contact">Enquire about a piece</AnimatedButton>
      </div>
    </main>
  );
}
