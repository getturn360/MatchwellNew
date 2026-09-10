"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("loader-lock");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    const minMs = reduced ? 200 : 500;

    let current = 0;
    let target = 12;
    let raf = 0;
    let finished = false;

    const markLoaded = () => {
      target = 100;
    };

    const hero = new window.Image();
    hero.onload = markLoaded;
    hero.onerror = markLoaded;
    hero.src = "/hero/hero-still.jpg";
    if (hero.complete) markLoaded();

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }

    const tick = (now: number) => {
      if (document.readyState === "interactive") {
        target = Math.max(target, 68);
      }

      const speed = target >= 100 ? 0.22 : 0.08;
      current += (target - current) * speed;
      if (target < 100) current = Math.min(current + 0.35, target);
      const shown = Math.min(100, Math.round(current));
      setProgress(shown);

      const waited = now - started >= minMs;
      if (!finished && shown >= 100 && waited) {
        finished = true;
        root.classList.remove("loader-lock");
        setLeaving(true);
        window.setTimeout(() => {
          setGone(true);
        }, reduced ? 120 : 300);
        return;
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("load", markLoaded);
      root.classList.remove("loader-lock");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-black text-white",
        leaving && "page-loader-leave",
      )}
      aria-hidden
    >
      <div className="flex w-[min(78vw,320px)] flex-col items-center">
        <Image
          src="/brand/logo.png"
          alt=""
          width={180}
          height={48}
          priority
          className="h-10 w-auto object-contain md:h-12"
        />

        <div className="mt-10 h-[1px] w-full bg-white/15">
          <div
            className="h-full origin-left bg-copper transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 font-heading text-sm tracking-[0.22em] text-white/55">
          {String(progress).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
