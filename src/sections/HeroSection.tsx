"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap, registerGsap } from "@/animations/gsap";
import AnimatedButton from "@/components/AnimatedButton";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
});

const words = ["Crafting", "Timeless", "Elegance"];

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progress = useRef(0);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".hero-media", {
        scale: 1.18,
        filter: "blur(16px)",
        duration: 2.2,
        ease: "power3.out",
      });
      gsap.from(".hero-word", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.2,
      });

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        gsap.to(".hero-media", {
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=45%",
          pin: true,
          scrub: 1.05,
          anticipatePin: 1,
          onUpdate: (self) => {
            progress.current = self.progress;
          },
        },
      });

      timeline.to(".hero-media", { scale: 1.08, ease: "none" }, 0);
      timeline.to(
        ".hero-title",
        { opacity: 0, ease: "none", duration: 0.5 },
        0,
      );
      timeline.to(
        ".hero-kicker, .hero-sub, .hero-actions",
        { opacity: 0, y: 16, ease: "none", duration: 0.25 },
        0.75,
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex h-svh items-end overflow-hidden bg-black"
    >
      <Image
        src="/hero/hero-still.jpg"
        alt=""
        fill
        priority
        quality={80}
        sizes="100vw"
        className="hero-media object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <HeroParticles
        sectionRef={root}
        textRef={titleRef}
        progressRef={progress}
      />
      <div className="relative z-20 w-full px-5 pb-16 md:px-12 md:pb-20">
        <p className="hero-kicker mb-6 text-[11px] tracking-[0.32em] text-copper uppercase">
          Kollam · Since the workshop
        </p>
        <h1
          ref={titleRef}
          className="hero-title font-heading text-[12vw] font-medium leading-[0.88] tracking-[-0.06em] text-white md:text-[8vw]"
        >
          {words.map((word) => (
            <span key={word} className="inline-block overflow-hidden pr-4">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub mt-6 max-w-md text-sm leading-7 text-white/70">
          Built to last. Made for homes and offices across Kerala.
        </p>
        <div className="hero-actions mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <AnimatedButton href="#about">Enter the workshop</AnimatedButton>
            <AnimatedButton href="/expo">At HIFF</AnimatedButton>
          </div>
          <a
            href="#about"
            className="flex items-center gap-2 text-[11px] tracking-[0.22em] text-white/50 uppercase"
          >
            Scroll
            <ChevronDown className="animate-pulse" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
