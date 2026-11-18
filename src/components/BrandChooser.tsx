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

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 ">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              href={`/${collection}/${brand.name.toLowerCase()}`}
              className={`group transition-colors ${
                isProducts
                  ? "grid overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-lg shadow-black/20 hover:border-copper/60 md:grid-cols-[42%_1fr]"
                  : `relative isolate grid min-h-[300px] grid-cols-1 items-center gap-6 rounded-3xl border border-copper/25 bg-[#171311] px-6 py-8 text-center shadow-lg shadow-black/20 transition-colors hover:border-copper/60 md:min-h-[240px] md:gap-0 md:rounded-2xl md:px-8 md:py-7 md:text-left ${
                      index === 0
                        ? "md:grid-cols-[220px_minmax(0,1fr)]"
                        : "md:grid-cols-[minmax(0,1fr)_220px]"
                    }`
              }`}
            >
              <div
                className={`relative ${
                  isProducts
                    ? `min-h-[190px] overflow-hidden md:min-h-[260px] ${brand.background}`
                    : `mx-auto size-40 shrink-0 rounded-full border-4 border-[#f4f1ea] bg-[#f4f1ea] shadow-xl md:size-52 ${
                        index === 1 ? "md:order-2" : ""
                      }`
                }`}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className={`object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
                    isProducts ? "p-8 md:p-10" : "rounded-full p-2"
                  }`}
                />
              </div>
              <div
                className={`flex w-full items-center justify-between gap-5 ${
                  isProducts
                    ? "border-t border-dashed border-white/15 p-6 md:border-t-0 md:border-l md:p-8"
                    : index === 0
                      ? "md:order-2 md:pl-8"
                      : "md:order-1 md:pr-8"
                }`}
              >
                <div>
                  <p className="text-[10px] tracking-[0.24em] text-copper uppercase">
                    {isProducts ? "Furniture collection" : "Brand gallery"}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl tracking-[-0.04em] md:text-4xl">
                    {brand.name}
                  </h2>
                  <p className="mt-2 text-sm text-white/55">
                    {isProducts
                      ? brand.description
                      : `Explore the ${brand.name} gallery`}
                  </p>
                </div>
                {/* <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/50 text-copper transition group-hover:bg-copper group-hover:text-black">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
