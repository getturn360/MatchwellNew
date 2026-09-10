"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import AnimatedButton from "@/components/AnimatedButton";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 pt-12 text-white md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <BrandLogo className="h-12 md:h-16" />
          <p className="mt-6 text-sm leading-7 text-white/65">{site.address}</p>
          <p className="mt-3 text-[11px] tracking-[0.18em] text-white/40 uppercase">
            {site.branches.join(" · ")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.22em] text-white/55 uppercase">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className="transition hover:text-white"
                data-cursor="hover"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.brochure}
              download
              className="transition hover:text-white"
              data-cursor="hover"
            >
              Brochure
            </a>
          </nav>
          <AnimatedButton href="/contact">Visit a showroom</AnimatedButton>
        </div>
      </div>
      <p className="mt-10 pb-4 text-center text-[11px] tracking-[0.18em] text-white/40 uppercase">
        © {new Date().getFullYear()} {site.name}
      </p>
      <div className="border-t border-white/10" />
    </footer>
  );
}
