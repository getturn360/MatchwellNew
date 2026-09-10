"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/animations/gsap";

export function useGsapScope(setup: () => void) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(setup, scope);
    return () => ctx.revert();
  }, [setup]);

  return scope;
}
