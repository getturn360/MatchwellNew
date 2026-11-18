import type { Metadata } from "next";
import GalleryClient from "../GalleryClient";

export const metadata: Metadata = {
  title: "Matchwell Gallery",
  description:
    "Wooden furniture Matchwell has built for homes and offices across Kerala — wardrobes, kitchens, beds, and custom joinery.",
};

export default function MatchwellGalleryPage() {
  return <GalleryClient />;
}
