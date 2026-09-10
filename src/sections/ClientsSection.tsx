"use client";

import { clients } from "@/lib/site";

export default function ClientsSection() {
  const row = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-16">
      <p className="mb-10 px-5 text-center text-[11px] tracking-[0.28em] text-copper uppercase md:px-12">
        Trusted across Kerala
      </p>
      <div className="group flex overflow-hidden">
        <div className="marquee-track flex min-w-full gap-16 px-8">
          {row.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-heading text-4xl tracking-[-0.04em] text-white/35 whitespace-nowrap transition group-hover:text-white/70 md:text-6xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
