"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = bar.current;
    if (!el) return;

    const tween = gsap.to(el, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === document.documentElement) st.kill();
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[60] h-[2px] w-full bg-white/10">
      <div
        ref={bar}
        className="h-full origin-left scale-x-0 bg-copper"
      />
    </div>
  );
}
