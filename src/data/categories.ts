export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  featured: boolean;
}

export const categories: Category[] = [
  {
    slug: "sofas",
    name: "Sofas",
    description:
      "Elegant sofas and seating solutions crafted for comfort and timeless style.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c12ea9bc?w=800&q=80",
    featured: true,
  },
  {
    slug: "chairs",
    name: "Chairs",
    description:
      "From classic armchairs to modern dining chairs, designed for every space.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    featured: true,
  },
  {
    slug: "lighting",
    name: "Lighting",
    description:
      "Illuminate your space with our curated collection of elegant lighting fixtures.",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc458de9?w=800&q=80",
    featured: true,
  },
  {
    slug: "tables",
    name: "Tables",
    description:
      "Dining tables, coffee tables, and side tables built to last generations.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    featured: false,
  },
  {
    slug: "cupboards",
    name: "Cupboards",
    description:
      "Smart storage solutions with beautiful craftsmanship and modern designs.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    featured: false,
  },
  {
    slug: "beds",
    name: "Beds",
    description:
      "Premium bedroom furniture designed for restful nights and lasting comfort.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    featured: false,
  },
  {
    slug: "decor",
    name: "Decor",
    description:
      "Finishing touches and decorative pieces to complete your interior vision.",
    image:
      "https://images.unsplash.com/photo-1616046229476-6921ed2e4a25?w=800&q=80",
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}

export function getSecondaryCategories(): Category[] {
  return categories.filter((c) => !c.featured);
}
