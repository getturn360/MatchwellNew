"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function Counter({ value, suffix = "", label }: Props) {
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    const el = num.current;
    if (!el) return;
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
      onUpdate: () => {
        el.textContent = `${Math.floor(obj.n).toLocaleString()}${suffix}`;
      },
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [suffix, value]);

  return (
    <div>
      <p className="font-heading text-5xl tracking-[-0.05em] text-white md:text-7xl">
        <span ref={num}>0{suffix}</span>
      </p>
      <p className="mt-3 text-[11px] tracking-[0.22em] text-white/45 uppercase">
        {label}
      </p>
    </div>
  );
}
