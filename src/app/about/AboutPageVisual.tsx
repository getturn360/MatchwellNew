"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

const AboutFurniture = dynamic(() => import("@/components/AboutFurniture"), {
  ssr: false,
});

export default function AboutPageVisual() {
  const progress = useRef(0.35);

  return (
    <div className="relative h-full min-h-[55vh] w-full md:min-h-full">
      <AboutFurniture progressRef={progress} interactive />
      <p className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.28em] text-white/45 uppercase">
        Drag to turn the piece
      </p>
    </div>
  );
}
