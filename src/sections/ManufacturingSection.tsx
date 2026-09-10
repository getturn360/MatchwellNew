"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";
import { manufacturingStages } from "@/lib/site";

export default function ManufacturingSection() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const rootEl = root.current;
      const trackEl = track.current;
      if (!rootEl || !trackEl) return;

      const panels = Array.from(trackEl.querySelectorAll<HTMLElement>("article"));

      const sizePanels = () => {
        const width = rootEl.clientWidth;
        panels.forEach((panel) => {
          panel.style.width = `${width}px`;
        });
      };

      const amount = () => {
        sizePanels();
        return Math.max(0, trackEl.scrollWidth - rootEl.clientWidth);
      };

      sizePanels();

      const tween = gsap.to(trackEl, {
        x: () => -amount(),
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${amount()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      gsap.to(bar.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${amount()}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const images = trackEl.querySelectorAll("img");
      images.forEach((image) => image.addEventListener("load", refresh));

      return () => {
        window.removeEventListener("load", refresh);
        images.forEach((image) => image.removeEventListener("load", refresh));
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={root}
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute top-8 right-5 left-5 z-20 md:right-auto md:left-12">
        <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
          ( Making / Journey )
        </p>
        <h2 className="mt-3 max-w-[18ch] font-heading text-3xl leading-[1.05] tracking-[-0.04em] md:text-5xl">
          From timber to heirloom
        </h2>
      </div>
      <div className="absolute top-0 right-0 left-0 z-20 h-[2px] bg-white/10">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-copper" />
      </div>
      <div
        ref={track}
        className="flex w-full min-w-0 flex-col md:h-screen md:w-max md:flex-row"
      >
        {manufacturingStages.map((stage, index) => (
          <article
            key={stage.id}
            className="relative h-[100svh] w-full min-w-0 max-w-full shrink-0 overflow-hidden md:h-screen md:max-w-none"
          >
            <Image
              src={stage.image}
              alt={stage.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-28 md:p-16">
              <p className="text-[11px] tracking-[0.28em] text-copper">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(manufacturingStages.length).padStart(2, "0")}
              </p>
              <h3 className="mt-4 max-w-full font-heading text-4xl leading-[0.95] tracking-[-0.05em] break-words md:text-7xl">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-pretty text-white/70">
                {stage.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
