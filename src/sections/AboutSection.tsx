"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";
import AnimatedButton from "@/components/AnimatedButton";
import Counter from "@/components/Counter";
import { site } from "@/lib/site";

const AboutFurniture = dynamic(() => import("@/components/AboutFurniture"), {
  ssr: false,
});

export default function AboutSection() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const [showFurniture, setShowFurniture] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowFurniture(true);
        io.disconnect();
      },
      { rootMargin: "280px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".about-copy", {
        x: -60,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          progress.current = self.progress;
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={root}
      className="relative min-h-screen overflow-hidden text-white"
    >
      <div className="relative grid min-h-screen md:grid-cols-2">
        <div className="relative z-20 flex flex-col justify-between px-5 py-24 md:px-12">
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-charcoal from-40% via-charcoal/80 to-transparent md:block" />
          <div className="relative">
            <p className="about-copy text-[11px] tracking-[0.28em] text-copper uppercase">
              ( About / Matchwell )
            </p>
            <h2 className="about-copy mt-6 font-heading text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Thirty years
              <br />
              in the grain.
            </h2>
            <p className="about-copy mt-8 max-w-md text-sm leading-7 text-white/65">
              Matchwell Furniture blends tradition and invention in Kollam —
              stylish wooden pieces for home and office — solid timber,
              joinery, and finishes that last.
            </p>
            <div className="about-copy mt-8">
              <AnimatedButton href="/about">Read the story</AnimatedButton>
            </div>
          </div>
          <div className="relative mt-16 grid grid-cols-2 gap-10">
            {site.stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 min-h-[70vh] md:min-h-screen">
          <div className="pointer-events-none absolute -inset-x-8 -top-20 -bottom-24 md:-inset-y-[18%] md:-left-52 md:-right-20">
            {showFurniture ? <AboutFurniture progressRef={progress} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
