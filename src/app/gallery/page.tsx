import type { Metadata } from "next";
import BrandChooser from "@/components/BrandChooser";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the furniture galleries from Matchwell and Matchora.",
};

export default function GalleryPage() {
  return <BrandChooser collection="gallery" />;
}
