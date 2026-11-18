export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh K",
    role: "Farmer",
    rating: 5,
    text: "I've been using Matchwell Furniture for years, and they never disappoint! The quality and craftsmanship are top-notch, and their designs always add a touch of elegance to my home. Highly recommend.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: "2",
    name: "Priya S",
    role: "Freelancer",
    rating: 5,
    text: "Matchwell Furniture exceeded my expectations! The modern design and durability of my new office furniture are perfect. They listened to my needs and delivered exactly what I wanted at an affordable price.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "3",
    name: "Arun M",
    role: "Programmer",
    rating: 5,
    text: "From the moment I ordered, the customer service was exceptional. The furniture arrived on time, and the quality is outstanding. I'm thrilled with the attention to detail and the lasting comfort they offer.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    alt: "Modern living room furniture setup",
    category: "Living Room",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    alt: "Elegant bedroom interior design",
    category: "Bedroom",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Contemporary office workspace",
    category: "Office",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    alt: "Dining room furniture collection",
    category: "Dining",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1555041469-a586c12ea9bc?w=600&q=80",
    alt: "Premium sofa collection",
    category: "Living Room",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    alt: "Custom wardrobe design",
    category: "Storage",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    alt: "Luxury bedroom furniture",
    category: "Bedroom",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    alt: "Executive office desk setup",
    category: "Office",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1616046229476-6921ed2e4a25?w=600&q=80",
    alt: "Home decor accessories",
    category: "Decor",
  },
];
