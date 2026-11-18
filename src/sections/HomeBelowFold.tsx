"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { registerGsap, ScrollTrigger } from "@/animations/gsap";

const ManufacturingSection = dynamic(
  () => import("@/sections/ManufacturingSection"),
  { ssr: true },
);
const ProductsSection = dynamic(() => import("@/sections/ProductsSection"), {
  ssr: true,
});
const GallerySection = dynamic(() => import("@/sections/GallerySection"), {
  ssr: true,
});
const WhyMatchwellSection = dynamic(
  () => import("@/sections/WhyMatchwellSection"),
  { ssr: true },
);
const InfrastructureSection = dynamic(
  () => import("@/sections/InfrastructureSection"),
  { ssr: true },
);
const QualitySection = dynamic(() => import("@/sections/QualitySection"), {
  ssr: true,
});
const ClientsSection = dynamic(() => import("@/sections/ClientsSection"), {
  ssr: true,
});
const TestimonialsSection = dynamic(
  () => import("@/sections/TestimonialsSection"),
  { ssr: true },
);
const FaqSection = dynamic(() => import("@/sections/FaqSection"), {
  ssr: true,
});

export default function HomeBelowFold() {
  useEffect(() => {
    registerGsap();
    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    const late = window.setTimeout(() => ScrollTrigger.refresh(), 280);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(late);
    };
  }, []);

  return (
    <>
      <ManufacturingSection />
      <ProductsSection />
      <GallerySection />
      <WhyMatchwellSection />
      <InfrastructureSection />
      <QualitySection />
      <ClientsSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
