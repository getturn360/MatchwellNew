<<<<<<< HEAD
import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Facebook, Twitter, Youtube, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif text-accent italic">M</span>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                Matchwell
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Crafting timeless, durable, and stylish furniture that enhances
              any space with unmatched quality.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                <span>
                  {siteConfig.phone[0]} | {siteConfig.phone[1]}
                </span>
              </li>
              <li>
                <span className="text-accent font-medium">
                  {siteConfig.locations.join(" | ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            Copyright &copy; Matchwell Furniture {new Date().getFullYear()}. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted hover:text-accent transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted hover:text-accent transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted hover:text-accent transition-colors"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
=======
"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import AnimatedButton from "@/components/AnimatedButton";
import BrandLogo from "@/components/BrandLogo";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h3l1.5 4-2 1.2a12 12 0 0 0 6.3 6.3L17 12.5 21 14v3c0 1.1-.9 2-2 2C9.6 19 5 14.4 5 5c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const social = [
  {
    href: site.social.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: site.social.facebook,
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: `mailto:${site.email}`,
    label: "Email",
    icon: MailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 pt-12 text-white md:px-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <BrandLogo className="h-12 md:h-16" />
          <p className="mt-6 text-sm leading-7 text-white/65">{site.address}</p>
          <p className="mt-3 text-[11px] tracking-[0.18em] text-white/40 uppercase">
            {site.branches.join(" · ")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.22em] text-white/55 uppercase md:justify-end">
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
          <div className="space-y-2 text-sm text-white/70">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end">
              <span className="text-copper">
                <PhoneIcon />
              </span>
              <a
                href={`tel:+91${site.phonePrimary}`}
                data-cursor="hover"
                className="transition hover:text-white"
              >
                {site.phonePrimary}
              </a>
              <span className="text-white/30">·</span>
              <a
                href={`tel:+91${site.phoneSecondary}`}
                data-cursor="hover"
                className="transition hover:text-white"
              >
                {site.phoneSecondary}
              </a>
            </p>
            <p className="flex items-center gap-3 md:justify-end">
              <span className="text-copper">
                <MailIcon />
              </span>
              <a
                href={`mailto:${site.email}`}
                data-cursor="hover"
                className="transition hover:text-white"
              >
                {site.email}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-cursor="hover"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-copper hover:bg-copper/20 hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <AnimatedButton href="/contact">Visit a showroom</AnimatedButton>
        </div>
      </div>
      <p className="mt-10 pb-4 text-center text-[11px] tracking-[0.18em] text-white/40 uppercase">
        © {new Date().getFullYear()} {site.name}
      </p>
      <div className="border-t border-white/10" />
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
    </footer>
  );
}
