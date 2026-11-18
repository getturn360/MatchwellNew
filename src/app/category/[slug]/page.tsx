import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  return createMetadata({
    title: category.name,
    description: category.description,
    path: `/category/${slug}`,
    image: category.image,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <Image
          src={category.image}
          alt={`${category.name} collection`}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              {category.name}
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              {category.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted">
                Products coming soon. Contact us for custom orders.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-accent hover:text-accent-light transition-colors text-sm font-medium"
              >
                Get in Touch
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
