export type GalleryCategory =
  | "Wardrobe"
  | "Kitchen"
  | "Bedroom"
  | "Living"
  | "Office"
  | "Custom";

export type GalleryItem = {
  slug: string;
  title: string;
  category: GalleryCategory;
  place: string;
  image: string;
  featured?: boolean;
  span?: "wide" | "tall";
};

export const galleryCategories: Array<"All" | GalleryCategory> = [
  "All",
  "Wardrobe",
  "Kitchen",
  "Bedroom",
  "Living",
  "Office",
  "Custom",
];

export const galleryItems: GalleryItem[] = [
  {
    slug: "walk-in-wardrobe",
    title: "Walk-in wardrobe",
    category: "Wardrobe",
    place: "Residence, Kollam",
    image: "/products/wardrobe.jpg",
    featured: true,
  },
  {
    slug: "teak-kitchen",
    title: "Teak kitchen island",
    category: "Kitchen",
    place: "Home, Calicut",
    image: "/products/kitchen.jpg",
    featured: true,
  },
  {
    slug: "dining-set",
    title: "Dining for eight",
    category: "Living",
    place: "Home, Ernakulam",
    image: "/gallery/dining.jpg",
    featured: true,
    span: "wide",
  },
  {
    slug: "platform-bed",
    title: "Walnut platform bed",
    category: "Bedroom",
    place: "Residence, Wayanad",
    image: "/products/beds.jpg",
    featured: true,
  },
  {
    slug: "tv-wall",
    title: "Media wall",
    category: "Living",
    place: "Apartment, Ernakulam",
    image: "/gallery/tv-unit.jpg",
    featured: true,
    span: "wide",
  },
  {
    slug: "dressing-table",
    title: "Dressing table",
    category: "Bedroom",
    place: "Home, Kollam",
    image: "/gallery/dressing.jpg",
    featured: true,
    span: "tall",
  },
  {
    slug: "executive-desk",
    title: "Executive desk",
    category: "Office",
    place: "Studio, Calicut",
    image: "/products/office.jpg",
  },
  {
    slug: "storage-wall",
    title: "Storage wall",
    category: "Wardrobe",
    place: "Home, Kollam",
    image: "/products/storage.jpg",
  },
  {
    slug: "alcove-joinery",
    title: "Alcove joinery",
    category: "Custom",
    place: "Residence, Ernakulam",
    image: "/products/custom.jpg",
  },
  {
    slug: "study-shelves",
    title: "Study shelves",
    category: "Office",
    place: "Home, Wayanad",
    image: "/gallery/bookshelf.jpg",
    span: "tall",
  },
  {
    slug: "pooja-cabinet",
    title: "Pooja cabinet",
    category: "Custom",
    place: "Home, Kollam",
    image: "/gallery/pooja.jpg",
  },
  {
    slug: "living-lounge",
    title: "Living lounge",
    category: "Living",
    place: "Residence, Calicut",
    image: "/gallery/living.jpg",
    span: "wide",
  },
  {
    slug: "sideboard",
    title: "Dining sideboard",
    category: "Living",
    place: "Home, Ernakulam",
    image: "/gallery/sideboard.jpg",
  },
  {
    slug: "boardroom",
    title: "Boardroom table",
    category: "Office",
    place: "Office, Ernakulam",
    image: "/gallery/conference.jpg",
    span: "wide",
  },
];

export const featuredGallery = galleryItems.filter((item) => item.featured);
