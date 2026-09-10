import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
