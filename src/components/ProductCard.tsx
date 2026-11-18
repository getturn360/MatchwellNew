<<<<<<< HEAD
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group glass-light rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.article>
=======
import Image from "next/image";

type Props = {
  title: string;
  copy: string;
  image: string;
};

export default function ProductCard({ title, copy, image }: Props) {
  return (
    <article className="overflow-hidden border border-white/10 bg-charcoal">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/60">{copy}</p>
      </div>
    </article>
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
  );
}
