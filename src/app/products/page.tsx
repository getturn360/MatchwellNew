import type { Metadata } from "next";
import BrandChooser from "@/components/BrandChooser";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore furniture collections from Matchwell and Matchora.",
};

export default function ProductsPage() {
  return <BrandChooser collection="products" />;
}
