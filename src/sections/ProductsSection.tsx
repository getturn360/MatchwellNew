"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/animations/gsap";
import AnimatedButton from "@/components/AnimatedButton";
import { products } from "@/lib/site";

export default function ProductsSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const cards = gsap.utils.toArray<HTMLElement>(".product-card");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, scale: 0.92, filter: "blur(8px)" },
          {
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.55,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="products" ref={root} className="relative px-5 py-28 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Product / Collection )
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] text-white md:text-6xl">
            Rooms, revealed.
          </h2>
        </div>
        <AnimatedButton href="/products">View all products</AnimatedButton>
      </div>
      <div className="relative mt-16 space-y-8 md:space-y-[12vh]">
        {products.slice(0, 5).map((product) => (
          <article
            key={product.title}
            className="product-card sticky top-24 overflow-hidden rounded-sm border border-white/10 bg-charcoal md:top-28"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[72vh]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-14">
                <h3 className="font-heading text-4xl tracking-[-0.04em] text-white md:text-6xl">
                  {product.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  {product.copy}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
