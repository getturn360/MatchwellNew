import type { Metadata } from "next";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Matchwell Furniture in Kollam or our Kerala showrooms. Call, WhatsApp, or come to the workshop.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
