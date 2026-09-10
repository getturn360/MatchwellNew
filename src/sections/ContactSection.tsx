"use client";

import { site } from "@/lib/site";
import AnimatedButton from "@/components/AnimatedButton";
import BrandLogo from "@/components/BrandLogo";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 pt-32 pb-28 text-white md:px-12"
    >
      <BrandLogo className="mb-8 h-10 md:h-12" />
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Contact )
      </p>
      <h2 className="mt-4 max-w-4xl font-heading text-5xl tracking-[-0.05em] md:text-7xl">
        Come to the workshop.
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="space-y-8 text-sm leading-7 text-white/70">
          <p>{site.address}</p>
          <p>
            <a href={`tel:+91${site.phonePrimary}`} data-cursor="hover">
              {site.phonePrimary}
            </a>
            {" · "}
            <a href={`tel:+91${site.phoneSecondary}`} data-cursor="hover">
              {site.phoneSecondary}
            </a>
          </p>
          <p>{site.branches.join(" / ")}</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton href={`https://wa.me/${site.whatsapp}`}>
              WhatsApp the workshop
            </AnimatedButton>
            <AnimatedButton href={site.brochure} download>
              Download brochure
            </AnimatedButton>
          </div>
        </div>
        <div className="min-h-[320px] overflow-hidden border border-white/10">
          <iframe
            title="Matchwell Furniture Kollam"
            className="h-full min-h-[320px] w-full grayscale contrast-125"
            loading="lazy"
            src="https://maps.google.com/maps?q=Matchwell%20Furniture%20Kollam&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
