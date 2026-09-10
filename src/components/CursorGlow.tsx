"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  r: number;
  alpha: number;
};

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = 22;
    const dots: Dot[] = Array.from({ length: count }, (_, i) => {
      const t = i / (count - 1);
      return {
        x: -80,
        y: -80,
        r: 3.6 - t * 2.8 + (i % 3) * 0.45,
        alpha: 0.85 - t * 0.55,
      };
    });

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let hover = 0;
    let hoverTarget = 0;
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      hoverTarget = (event.target as HTMLElement).closest("[data-cursor='hover']")
        ? 1
        : 0;
    };

    const tick = () => {
      if (!running) return;
      hover += (hoverTarget - hover) * 0.12;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const pull = 0.42 - hover * 0.08;
      dots[0].x += (mouse.x - dots[0].x) * pull;
      dots[0].y += (mouse.y - dots[0].y) * pull;

      for (let i = 1; i < dots.length; i += 1) {
        const follow = 0.36 - i * 0.006;
        dots[i].x += (dots[i - 1].x - dots[i].x) * follow;
        dots[i].y += (dots[i - 1].y - dots[i].y) * follow;
      }

      for (let i = dots.length - 1; i >= 0; i -= 1) {
        const dot = dots[i];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.7, dot.r * (1 + hover * 0.4)), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 234, 214, ${dot.alpha})`;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] mix-blend-screen"
    />
  );
}
