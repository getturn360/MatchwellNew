"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { gsap, registerGsap } from "@/animations/gsap";
import { qualityChecks } from "@/lib/site";

export default function QualitySection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".qa-item", {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-5 py-28 text-white md:px-12">
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Quality / Assurance )
      </p>
      <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-[-0.04em] md:text-6xl">
        Nothing leaves without a second look.
      </h2>
      <ul className="mt-16 grid gap-4 md:grid-cols-2">
        {qualityChecks.map((item) => (
          <li
            key={item}
            className="qa-item flex items-center gap-4 border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md"
          >
            <Check className="shrink-0 text-copper" size={18} />
            <span className="text-sm text-white/80">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
