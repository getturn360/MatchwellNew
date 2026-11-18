import type { Metadata } from "next";
import MatchoraGalleryClient from "./MatchoraGalleryClient";

export const metadata: Metadata = {
  title: "Matchora Gallery",
  description:
    "Browse Matchora furniture for storing, lounging, sleeping, and living.",
};

export default function MatchoraGalleryPage() {
  return <MatchoraGalleryClient />;
}
