import type { Metadata } from "next";
<<<<<<< HEAD
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createMetadata, createLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = createLocalBusinessJsonLd();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
=======
import { Inter, Space_Grotesk } from "next/font/google";
import ClientShell from "@/components/providers/ClientShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "Matchwell Furniture — Wooden Furniture, Built to Last",
    template: "%s · Matchwell Furniture",
  },
  description:
    "With over 30 years of expertise in Kollam, Matchwell Furniture crafts wooden home and office furniture — wardrobes, kitchens, beds, and custom timber pieces.",
  openGraph: {
    title: "Matchwell Furniture",
    description:
      "Cinematic craft. Thirty years of furniture for homes and offices across Kerala.",
    type: "website",
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-black antialiased">
        <ClientShell>{children}</ClientShell>
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
      </body>
    </html>
  );
}
