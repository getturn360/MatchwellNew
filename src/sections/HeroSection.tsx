"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap, registerGsap } from "@/animations/gsap";
import AnimatedButton from "@/components/AnimatedButton";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
});

const words = ["Crafting", "Timeless", "Elegance"];

function markTitleReady() {
  window.dispatchEvent(new Event("matchwell:hero-title-ready"));
}

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progress = useRef(0);

  useLayoutEffect(() => {
    progress.current = 0;
  }, []);

  useEffect(() => {
    registerGsap();
    progress.current = 0;
    const rootEl = root.current;
    if (!rootEl) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(".hero-media", { scale: 1.05, filter: "blur(0px)" });
      gsap.set(".hero-word", { yPercent: 0, opacity: 1 });
      gsap.set(".hero-title, .hero-kicker, .hero-sub, .hero-actions", {
        opacity: 1,
        y: 0,
      });

      if (reduced) {
        markTitleReady();
        gsap.to(".hero-media", {
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: rootEl,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        return;
      }

      gsap.fromTo(
        ".hero-media",
        { scale: 1.18, filter: "blur(16px)" },
        {
          scale: 1.05,
          filter: "blur(0px)",
          duration: 1.6,
          ease: "power3.out",
          overwrite: "auto",
        },
      );

      gsap.fromTo(
        ".hero-word",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.95,
          ease: "power4.out",
          delay: 0.12,
          overwrite: "auto",
          onComplete: markTitleReady,
        },
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: "+=45%",
          pin: true,
          pinSpacing: true,
          scrub: 0.85,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
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

    const fallback = window.setTimeout(markTitleReady, 1400);

    return () => {
      window.clearTimeout(fallback);
      progress.current = 0;
      ctx.revert();
    };
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
