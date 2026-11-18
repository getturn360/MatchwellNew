import type { Metadata } from "next";

export const siteConfig = {
  name: "Matchwell Furniture",
  description:
    "Crafting timeless elegance with over 30 years of expertise. Stylish, durable furniture for your home and office in Kollam, Kerala.",
  url: "https://matchwellfurniture.in",
  phone: ["9745936872", "9946000862"],
  email: "info@matchwellfurniture.in",
  address:
    "5/660, Matchwell Furniture, Near Kolankonathappu Pankave, Kuriyod, Kollam 691534",
  locations: ["Kollam", "Calicut", "Wayanad", "Ernakulam"],
  social: {
    facebook: "https://facebook.com/matchwellfurniture",
    twitter: "https://twitter.com/matchwellfurniture",
    youtube: "https://youtube.com/matchwellfurniture",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} – Stylish Furniture for Your Home & Office`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone[0],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "5/660, Near Kolankonathappu Pankave, Kuriyod",
      addressLocality: "Kollam",
      postalCode: "691534",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: siteConfig.locations,
    priceRange: "$$",
  };
}
