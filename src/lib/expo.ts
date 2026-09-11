export type ExpoEdition = {
  slug: string;
  year: number;
  edition: number;
  label: string;
  status: "upcoming" | "past";
  dates: string;
  venue: string;
  city: string;
  cover: string;
  mapQuery: string;
  excerpt: string;
  paragraphs: string[];
  highlights: Array<{ label: string; value: string }>;
  photoSlugs: string[];
};

export const expoFair = {
  name: "Hindustan International Furniture Fair",
  short: "HIFF",
  kicker: "Expo / HIFF",
  heading: "Matchwell at HIFF",
  intro:
    "Matchwell Furniture exhibits at the Hindustan International Furniture Fair — wooden home and office pieces from the Kollam workshop, on the national floor. We participate. We do not organise the fair.",
};

export const expoEditions: ExpoEdition[] = [
  {
    slug: "hiff-2026",
    year: 2026,
    edition: 8,
    label: "HIFF 2026",
    status: "upcoming",
    dates: "24, 25, 26 October 2026",
    venue: "CODISSIA Complex",
    city: "Bangalore",
    cover: "/products/wardrobe.jpg",
    mapQuery: "CODISSIA Trade Fair Complex Coimbatore",
    excerpt:
      "Matchwell returns to Coimbatore with timber for homes and offices — meet the stall, sit with the grain, start a drawing.",
    paragraphs: [
      "The 8th Hindustan International Furniture Fair brings India’s finished-furniture trade back to CODISSIA Complex, Coimbatore. Matchwell Furniture will be on the floor as an exhibitor — not as the organiser — with wooden wardrobes, kitchens, beds, and office joinery from Kollam.",
      "Come to the stall to see pieces, talk timber and finish, and leave with a path to a custom order. WhatsApp us before you travel if you want a time with the team.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "8th HIFF" },
      { label: "Dates", value: "19–21 Sept" },
      { label: "City", value: "Coimbatore" },
    ],
    photoSlugs: [
      "walk-in-wardrobe",
      "teak-kitchen",
      "dining-set",
      "platform-bed",
      "tv-wall",
      "living-lounge",
    ],
  },
  {
    slug: "hiff-2025",
    year: 2025,
    edition: 7,
    label: "HIFF 2025",
    status: "past",
    dates: "20, 21, 22 Sept 2025",
    venue: "CODISSIA Complex",
    city: "Coimbatore",
    cover: "/products/kitchen.jpg",
    mapQuery: "CODISSIA Trade Fair Complex Coimbatore",
    excerpt:
      "Seventh edition at CODISSIA. Matchwell showed Kerala timber on a national floor — kitchens, wardrobes, and custom joinery.",
    paragraphs: [
      "HIFF 2025, the 7th Hindustan International Furniture Fair, ran 20–22 September at CODISSIA Complex, Coimbatore. Matchwell took a stall as a participating manufacturer from Kollam.",
      "Trade visitors and families walked the stand for wooden kitchens, wardrobes, and office pieces. Enquiries from that floor still sit in the workshop drawings.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "7th HIFF" },
      { label: "Dates", value: "20–22 Sept" },
      { label: "City", value: "Coimbatore" },
    ],
    photoSlugs: [
      "teak-kitchen",
      "walk-in-wardrobe",
      "storage-wall",
      "executive-desk",
      "sideboard",
      "pooja-cabinet",
    ],
  },
  {
    slug: "hiff-2024",
    year: 2024,
    edition: 6,
    label: "HIFF 2024",
    status: "past",
    dates: "21, 22, 23 Sept 2024",
    venue: "CODISSIA Complex",
    city: "Coimbatore",
    cover: "/gallery/dining.jpg",
    mapQuery: "CODISSIA Trade Fair Complex Coimbatore",
    excerpt:
      "Sixth HIFF. Dining, living, and bedroom timber from Matchwell on the Coimbatore floor.",
    paragraphs: [
      "At the 6th HIFF (21–23 September 2024, CODISSIA Complex), Matchwell exhibited finished wooden furniture for home and office — a Kollam stall among makers from across India.",
      "The floor was about seeing grain in person: dining, living rooms, and storage that does not need a catalogue to explain itself.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "6th HIFF" },
      { label: "Dates", value: "21–23 Sept" },
      { label: "City", value: "Coimbatore" },
    ],
    photoSlugs: [
      "dining-set",
      "living-lounge",
      "platform-bed",
      "tv-wall",
      "dressing-table",
      "boardroom",
    ],
  },
  {
    slug: "hiff-2023",
    year: 2023,
    edition: 5,
    label: "HIFF 2023",
    status: "past",
    dates: "23, 24, 25 Sept 2023",
    venue: "CODISSIA Complex",
    city: "Coimbatore",
    cover: "/products/beds.jpg",
    mapQuery: "CODISSIA Trade Fair Complex Coimbatore",
    excerpt:
      "Fifth edition. Beds, wardrobes, and office wood from the Kollam benches, shown in Coimbatore.",
    paragraphs: [
      "HIFF 2023 (23–25 September, CODISSIA) was the 5th fair. Matchwell participated with bedroom and storage pieces built in timber in Kollam.",
      "Dealers and homeowners met the stall to talk joinery, moisture, and finishes that last in South Indian rooms.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "5th HIFF" },
      { label: "Dates", value: "23–25 Sept" },
      { label: "City", value: "Coimbatore" },
    ],
    photoSlugs: [
      "platform-bed",
      "walk-in-wardrobe",
      "study-shelves",
      "alcove-joinery",
      "teak-kitchen",
      "storage-wall",
    ],
  },
  {
    slug: "hiff-2022",
    year: 2022,
    edition: 4,
    label: "HIFF 2022",
    status: "past",
    dates: "24, 25, 26 Sept 2022",
    venue: "CODISSIA Complex",
    city: "Coimbatore",
    cover: "/gallery/living.jpg",
    mapQuery: "CODISSIA Trade Fair Complex Coimbatore",
    excerpt:
      "Fourth HIFF, first of the Coimbatore years for this run. Matchwell on the national finished-furniture floor.",
    paragraphs: [
      "The 4th HIFF (24–26 September 2022) opened at CODISSIA Complex, Coimbatore. Matchwell exhibited as a participating wooden-furniture maker from Kerala.",
      "Living and office pieces sat on the stall so buyers could judge grain, scale, and finish without a screen.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "4th HIFF" },
      { label: "Dates", value: "24–26 Sept" },
      { label: "City", value: "Coimbatore" },
    ],
    photoSlugs: [
      "living-lounge",
      "boardroom",
      "executive-desk",
      "dining-set",
      "sideboard",
      "alcove-joinery",
    ],
  },
  {
    slug: "hiff-2018",
    year: 2018,
    edition: 3,
    label: "HIFF 2018",
    status: "past",
    dates: "8, 9, 10 Dec 2018",
    venue: "Adlux International Convention Centre",
    city: "Angamaly, Kochi",
    cover: "/products/office.jpg",
    mapQuery: "Adlux International Convention Centre Angamaly",
    excerpt:
      "Third HIFF, in Kochi. Matchwell showed office and home timber to Kerala and South Indian trade.",
    paragraphs: [
      "HIFF 2018, the 3rd fair, was held 8–10 December at Adlux International Convention Centre, Angamaly, Kochi. Matchwell took part as an exhibitor — a Kollam workshop on a Kerala convention floor.",
      "Office desks, storage, and home pieces met visitors who already knew our showrooms, and many who did not.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "3rd HIFF" },
      { label: "Dates", value: "8–10 Dec" },
      { label: "City", value: "Kochi" },
    ],
    photoSlugs: [
      "executive-desk",
      "boardroom",
      "storage-wall",
      "walk-in-wardrobe",
      "pooja-cabinet",
      "study-shelves",
    ],
  },
  {
    slug: "hiff-2017",
    year: 2017,
    edition: 2,
    label: "HIFF 2017",
    status: "past",
    dates: "8, 9, 10 Dec 2017",
    venue: "Lulu International Convention Centre",
    city: "Thrissur",
    cover: "/products/custom.jpg",
    mapQuery: "Lulu International Convention Centre Thrissur",
    excerpt:
      "Second HIFF in Thrissur. Custom timber and modular wood from Matchwell among Kerala makers.",
    paragraphs: [
      "The 2nd Hindustan International Furniture Fair ran 8–10 December 2017 at Lulu International Convention Centre, Thrissur. Matchwell participated with custom and modular wooden furniture.",
      "Thrissur brought the fair close to home — visitors from central Kerala could walk a stall that already felt like the workshop language they knew.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "2nd HIFF" },
      { label: "Dates", value: "8–10 Dec" },
      { label: "City", value: "Thrissur" },
    ],
    photoSlugs: [
      "alcove-joinery",
      "teak-kitchen",
      "dressing-table",
      "dining-set",
      "tv-wall",
      "platform-bed",
    ],
  },
  {
    slug: "hiff-2016",
    year: 2016,
    edition: 1,
    label: "HIFF 2016",
    status: "past",
    dates: "8, 9, 10 Dec 2016",
    venue: "Lulu International Convention Centre",
    city: "Thrissur",
    cover: "/gallery/conference.jpg",
    mapQuery: "Lulu International Convention Centre Thrissur",
    excerpt:
      "Inaugural HIFF. Matchwell among the first wooden-furniture exhibitors on the Thrissur floor.",
    paragraphs: [
      "The first Hindustan International Furniture Fair opened 8–10 December 2016 at Lulu International Convention Centre, Thrissur. Matchwell was there as a participating manufacturer, not as the organiser.",
      "Three days of finished timber on a convention floor — the start of a fair Matchwell has returned to as the editions moved from Thrissur to Kochi and Coimbatore.",
    ],
    highlights: [
      { label: "Role", value: "Exhibitor" },
      { label: "Fair", value: "1st HIFF" },
      { label: "Dates", value: "8–10 Dec" },
      { label: "City", value: "Thrissur" },
    ],
    photoSlugs: [
      "boardroom",
      "living-lounge",
      "walk-in-wardrobe",
      "teak-kitchen",
      "sideboard",
      "executive-desk",
    ],
  },
];

export function expoOrdinal(n: number) {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return `${n}th`;
}

export function getExpo(slug: string) {
  return expoEditions.find((item) => item.slug === slug);
}

export function expoWhatsappText(edition: ExpoEdition) {
  if (edition.status === "upcoming") {
    return `Hello Matchwell, I would like to visit your stall at ${edition.label}, ${edition.venue}, ${edition.city}.`;
  }
  return `Hello Matchwell, I saw your ${edition.label} stall and would like to talk about a wooden piece.`;
}
