"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";
import { manufacturingStages } from "@/lib/site";

export default function ManufacturingSection() {
  const root = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const rootEl = root.current;
      const viewportEl = viewport.current;
      const trackEl = track.current;
      if (!rootEl || !viewportEl || !trackEl) return;

      const amount = () =>
        Math.max(0, trackEl.scrollWidth - viewportEl.clientWidth);

      const tween = gsap.to(trackEl, {
        x: () => -amount(),
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top 88px",
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
          start: "top 88px",
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
      className="relative bg-black px-5 pt-16 pb-16 text-white md:px-12 md:pt-6 md:pb-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
            ( Making / Journey )
          </p>
          <h2 className="mt-2 max-w-[18ch] font-heading text-3xl leading-[1.05] tracking-[-0.04em] md:text-4xl">
            From timber to heirloom
          </h2>
        </div>
        <div className="h-[2px] w-full max-w-xs origin-left bg-white/10">
          <div ref={bar} className="h-full origin-left scale-x-0 bg-copper" />
        </div>
      </div>

      <div ref={viewport} className="mt-8 overflow-hidden">
        <div
          ref={track}
          className="flex flex-col gap-6 md:w-max md:flex-row md:gap-5"
        >
          {manufacturingStages.map((stage, index) => (
            <article
              key={stage.id}
              className="grid overflow-hidden border border-white/10 bg-charcoal md:h-[min(24rem,calc(100svh-16rem))] md:w-[min(860px,78vw)] md:shrink-0 md:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-end p-6 md:p-8">
                <p className="text-[11px] tracking-[0.28em] text-copper">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(manufacturingStages.length).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-3xl leading-[0.95] tracking-[-0.05em] md:text-4xl">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-pretty text-white/70">
                  {stage.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
