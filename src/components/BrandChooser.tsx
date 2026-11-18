import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Collection = "products" | "gallery";

const brands = [
  {
    name: "Matchwell",
    logo: "/brand/matchwell-color.png",
    description: "Explore Matchwell Furniture",
    background: "bg-[#f5f0e7]",
  },
  {
    name: "Matchora",
    logo: "/brand/matchora-logo.png",
    description: "Discover the Matchora collection",
    background: "bg-[#eee9df]",
  },
];

export default function BrandChooser({ collection }: { collection: Collection }) {
  const isProducts = collection === "products";

  return (
    <main className="relative px-5 pt-32 pb-24 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( {isProducts ? "Our collections" : "Explore our work"} )
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
          {isProducts ? "Choose your collection." : "Choose a gallery."}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
          {isProducts
            ? "Explore the distinct furniture collections from Matchwell and Matchora."
            : "Browse the craftsmanship and collections of Matchwell and Matchora."}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/${collection}/${brand.name.toLowerCase()}`}
              className="group overflow-hidden border border-white/10 bg-white/[0.03] transition-colors hover:border-copper/60"
            >
              <div
                className={`relative aspect-[16/9] overflow-hidden ${brand.background}`}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03] md:p-12"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="text-[10px] tracking-[0.24em] text-copper uppercase">
                    {isProducts ? "Furniture collection" : "Brand gallery"}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl tracking-[-0.04em] md:text-4xl">
                    {brand.name}
                  </h2>
                  <p className="mt-2 text-sm text-white/55">
                    {brand.description}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition group-hover:border-copper group-hover:bg-copper group-hover:text-black">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
