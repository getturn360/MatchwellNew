"use client";

import Link from "next/link";
<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif text-accent italic">M</span>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase group-hover:text-accent transition-colors">
            Matchwell
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            <MessageCircle size={16} />
            Contact
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white"
                >
                  <MessageCircle size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
=======
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
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
    </header>
  );
}
