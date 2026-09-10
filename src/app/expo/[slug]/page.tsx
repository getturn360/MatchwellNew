import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { expoEditions, expoFair, getExpo } from "@/lib/expo";
import ExpoDetail from "./ExpoDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return expoEditions.map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const edition = getExpo(slug);
  if (!edition) return { title: "Expo" };
  return {
    title: `${edition.label} — Matchwell at HIFF`,
    description: `${expoFair.short} ${edition.year}: Matchwell Furniture exhibited at ${edition.venue}, ${edition.city}. ${edition.excerpt}`,
  };
}

export default async function ExpoStoryPage({ params }: Props) {
  const { slug } = await params;
  const edition = getExpo(slug);
  if (!edition) notFound();
  return <ExpoDetail edition={edition} />;
}
