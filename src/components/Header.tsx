"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-5 md:px-10">
        <Link
          href="/"
          data-cursor="hover"
          aria-label="Matchwell Furniture home"
          className="text-white"
        >
          <BrandLogo className="h-8 md:h-9" priority />
        </Link>
        <nav className="hidden items-center gap-5 text-[11px] tracking-[0.22em] text-white/70 uppercase lg:gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              data-cursor="hover"
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.brochure}
            download
            data-cursor="hover"
            className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-copper hover:text-white"
          >
            Brochure
          </a>
        </nav>
        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-black px-5 py-6 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              onClick={() => setOpen(false)}
              className="font-heading text-2xl text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.brochure}
            download
            onClick={() => setOpen(false)}
            className="font-heading text-2xl text-white"
          >
            Brochure
          </a>
        </nav>
      ) : null}
    </header>
  );
}
