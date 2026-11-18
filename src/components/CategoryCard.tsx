"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
  featured?: boolean;
}

export default function CategoryCard({
  category,
  index,
  featured = false,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/category/${category.slug}`}
        className={`group relative block overflow-hidden rounded-2xl ${
          featured ? "aspect-[3/4]" : "aspect-square"
        }`}
      >
        <Image
          src={category.image}
          alt={`${category.name} furniture collection`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div
          className={`absolute inset-0 flex ${
            featured ? "items-start p-6" : "items-end justify-center pb-6"
          }`}
        >
          <h3
            className={`font-semibold text-white ${
              featured ? "text-2xl" : "text-lg"
            } group-hover:text-accent-light transition-colors`}
          >
            {category.name}
          </h3>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-2xl transition-colors duration-300" />
      </Link>
    </motion.div>
  );
}
