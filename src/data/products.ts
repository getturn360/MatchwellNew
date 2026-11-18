export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Sofas
  {
    id: "sofa-1",
    name: "Classic L-Shaped Sofa",
    description:
      "Premium upholstered L-shaped sofa with solid wood frame and high-density foam cushioning.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c12ea9bc?w=600&q=80",
    category: "sofas",
  },
  {
    id: "sofa-2",
    name: "Modern Sectional Sofa",
    description:
      "Contemporary sectional with clean lines, perfect for spacious living rooms.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    category: "sofas",
  },
  {
    id: "sofa-3",
    name: "Heritage Chesterfield",
    description:
      "Timeless chesterfield design with button-tufted leather upholstery.",
    image:
      "https://images.unsplash.com/photo-1540574163026-d789eba49d1f?w=600&q=80",
    category: "sofas",
  },
  {
    id: "sofa-4",
    name: "Compact Two-Seater",
    description:
      "Space-saving two-seater sofa ideal for apartments and small living spaces.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    category: "sofas",
  },

  // Chairs
  {
    id: "chair-1",
    name: "Ergonomic Office Chair",
    description:
      "Adjustable office chair with lumbar support for long working hours.",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
    category: "chairs",
  },
  {
    id: "chair-2",
    name: "Classic Armchair",
    description:
      "Elegant armchair with solid teak frame and premium fabric upholstery.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    category: "chairs",
  },
  {
    id: "chair-3",
    name: "Dining Chair Set",
    description:
      "Set of six handcrafted dining chairs with curved backrest design.",
    image:
      "https://images.unsplash.com/photo-1503604478593-a6d192adff1a?w=600&q=80",
    category: "chairs",
  },
  {
    id: "chair-4",
    name: "Accent Lounge Chair",
    description:
      "Statement accent chair with mid-century modern aesthetics.",
    image:
      "https://images.unsplash.com/photo-1592078611260-789b2406e3c3?w=600&q=80",
    category: "chairs",
  },

  // Lighting
  {
    id: "light-1",
    name: "Pendant Light Fixture",
    description:
      "Elegant brass pendant light perfect for dining areas and kitchens.",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc458de9?w=600&q=80",
    category: "lighting",
  },
  {
    id: "light-2",
    name: "Floor Lamp Collection",
    description:
      "Minimalist floor lamp with adjustable arm and warm ambient glow.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    category: "lighting",
  },
  {
    id: "light-3",
    name: "Table Lamp Set",
    description:
      "Pair of ceramic table lamps with linen shades for bedside tables.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    category: "lighting",
  },

  // Tables
  {
    id: "table-1",
    name: "Solid Wood Dining Table",
    description:
      "Six-seater dining table crafted from premium teak with natural finish.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    category: "tables",
  },
  {
    id: "table-2",
    name: "Coffee Table",
    description:
      "Low-profile coffee table with tempered glass top and wooden base.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
    category: "tables",
  },
  {
    id: "table-3",
    name: "Executive Desk",
    description:
      "Spacious office desk with built-in cable management and drawers.",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    category: "tables",
  },
  {
    id: "table-4",
    name: "Side Table Pair",
    description:
      "Matching pair of nesting side tables for living room convenience.",
    image:
      "https://images.unsplash.com/photo-1631679709649-34a3b7ae7dd6?w=600&q=80",
    category: "tables",
  },

  // Cupboards
  {
    id: "cupboard-1",
    name: "Wardrobe with Mirror",
    description:
      "Four-door wardrobe with full-length mirror and ample hanging space.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    category: "cupboards",
  },
  {
    id: "cupboard-2",
    name: "Kitchen Cabinet Set",
    description:
      "Modular kitchen cabinets with soft-close hinges and organizers.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    category: "cupboards",
  },
  {
    id: "cupboard-3",
    name: "Display Cabinet",
    description:
      "Glass-front display cabinet for showcasing collectibles and books.",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    category: "cupboards",
  },

  // Beds
  {
    id: "bed-1",
    name: "King Size Platform Bed",
    description:
      "Low-profile platform bed with upholstered headboard and storage drawers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    category: "beds",
  },
  {
    id: "bed-2",
    name: "Bunk Bed System",
    description:
      "Space-efficient bunk bed with built-in study desk underneath.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    category: "beds",
  },
  {
    id: "bed-3",
    name: "Classic Four-Poster Bed",
    description:
      "Elegant four-poster bed frame in solid mahogany wood.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    category: "beds",
  },

  // Decor
  {
    id: "decor-1",
    name: "Ceramic Vase Collection",
    description:
      "Handcrafted ceramic vases in earthy tones for modern interiors.",
    image:
      "https://images.unsplash.com/photo-1616046229476-6921ed2e4a25?w=600&q=80",
    category: "decor",
  },
  {
    id: "decor-2",
    name: "Wall Mirror",
    description:
      "Oversized round mirror with brass frame, a statement piece for any room.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
    category: "decor",
  },
  {
    id: "decor-3",
    name: "Bookshelf Unit",
    description:
      "Open shelving unit for displaying books, plants, and decorative items.",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    category: "decor",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
