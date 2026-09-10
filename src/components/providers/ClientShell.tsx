"use client";

import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoader from "@/components/PageLoader";
import AmbientField from "@/components/AmbientField";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <PageLoader />
      <AmbientField />
      <div className="relative z-[1]">
        <ScrollProgress />
        <CursorGlow />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  );
}
