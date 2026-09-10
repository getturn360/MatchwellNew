import type { Metadata } from "next";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import AnimatedButton from "@/components/AnimatedButton";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Wooden furniture from Matchwell — wardrobes, kitchens, office pieces, storage, beds, and custom timber work.",
};

export default function ProductsPage() {
  return (
    <main className="relative px-5 pt-32 pb-24 text-white md:px-12">
      <BrandLogo className="mb-8 h-10 md:h-12" />
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Product / Collection )
      </p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        Rooms, revealed.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
        Wooden pieces for home and office — built in Kollam, finished for
        Kerala rooms, and made to last.
      </p>

      <div className="mt-16 grid gap-5">
        {products.map((product, index) => (
          <article
            key={product.title}
            className="overflow-hidden border border-white/10 bg-charcoal"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[420px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-12">
                <p className="text-[11px] tracking-[0.22em] text-copper uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em] md:text-5xl">
                  {product.title}
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
