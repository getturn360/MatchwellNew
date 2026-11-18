"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/animations/gsap";
import { infrastructure } from "@/lib/site";

export default function InfrastructureSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".infra-card").forEach((card) => {
        gsap.fromTo(
          card.querySelector("img"),
          { filter: "blur(16px) brightness(0.2)", scale: 1.1 },
          {
            filter: "blur(0px) brightness(1)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 35%",
              scrub: true,
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="infrastructure"
      ref={root}
      className="relative px-5 py-28 text-white md:px-12"
    >
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Works / Infrastructure )
      </p>
      <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] md:text-6xl">
        The workshop that earns the finish.
      </h2>
      <div className="mt-16 space-y-8">
        {infrastructure.map((item) => (
          <article
            key={item.title}
            className="infra-card relative min-h-[70vh] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
              <h3 className="font-heading text-4xl md:text-6xl">{item.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                {item.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
