"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, registerGsap, ScrollTrigger } from "@/animations/gsap";
import "lenis/dist/lenis.css";

function snapScroll(lenis: Lenis | null) {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  lenis?.scrollTo(0, { immediate: true, force: true });
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    registerGsap();
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const lenis = new Lenis({
      duration: reduced ? 0.35 : 0.72,
      smoothWheel: !reduced,
      wheelMultiplier: reduced ? 1 : 0.92,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    snapScroll(lenisRef.current);
  }, [pathname]);

  useEffect(() => {
    const lenis = lenisRef.current;
    snapScroll(lenis);

    const frame = window.requestAnimationFrame(() => {
      snapScroll(lenis);
      ScrollTrigger.refresh();
    });

    const late = window.setTimeout(() => {
      snapScroll(lenis);
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(late);
    };
  }, [pathname]);

  return <>{children}</>;
}
