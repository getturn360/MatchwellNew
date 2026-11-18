import Image from "next/image";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="overflow-hidden border border-white/10 bg-charcoal">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-white">{product.name}</h3>
        <p className="mt-2 text-sm text-white/60">{product.description}</p>
      </div>
    </article>
  );
}
