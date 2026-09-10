"use client";

import { useEffect, useRef } from "react";

type Speck = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export default function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let raf = 0;
    let running = true;
    let time = 0;
    const specks: Speck[] = [];
    const animate = !reduced && !coarse;

    const seed = () => {
      specks.length = 0;
      const count = width < 768 ? 18 : 48;
      for (let i = 0; i < count; i += 1) {
        specks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: -0.05 - Math.random() * 0.16,
          r: 0.8 + Math.random() * 2.4,
          a: 0.22 + Math.random() * 0.4,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const glow = (
      x: number,
      y: number,
      radius: number,
      color: string,
      inner: number,
    ) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, color.replace("A", String(inner)));
      g.addColorStop(0.4, color.replace("A", String(inner * 0.28)));
      g.addColorStop(1, color.replace("A", "0"));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const rings = (cx: number, cy: number, spin: number, scale: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(spin);
      ctx.strokeStyle = "rgba(196, 138, 92, 0.16)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 5; i += 1) {
        ctx.beginPath();
        ctx.arc(0, 0, i * 58 * scale, 0.15 + i * 0.12, Math.PI * 1.35 + i * 0.08);
        ctx.stroke();
      }
      ctx.restore();
    };

    const paint = () => {
      ctx.clearRect(0, 0, width, height);

      glow(
        width * 0.18 + Math.cos(time * 0.35) * 80,
        height * 0.22 + Math.sin(time * 0.28) * 50,
        Math.max(width, height) * 0.42,
        "rgba(196, 138, 92, A)",
        0.22,
      );
      glow(
        width * 0.86 + Math.sin(time * 0.22) * 70,
        height * 0.7 + Math.cos(time * 0.3) * 60,
        Math.max(width, height) * 0.38,
        "rgba(92, 61, 46, A)",
        0.34,
      );
      glow(
        width * 0.55 + Math.cos(time * 0.18) * 90,
        height * 0.08 + Math.sin(time * 0.24) * 40,
        width * 0.32,
        "rgba(196, 138, 92, A)",
        0.12,
      );

      if (width >= 768 && !coarse) {
        rings(width * 0.82, height * 0.28, time * 0.12, 1);
        rings(width * 0.12, height * 0.78, -time * 0.08, 0.85);
      }

      if (animate) {
        for (const speck of specks) {
          speck.x += speck.vx;
          speck.y += speck.vy;
          if (speck.y < -8) speck.y = height + 8;
          if (speck.y > height + 8) speck.y = -8;
          if (speck.x < -8) speck.x = width + 8;
          if (speck.x > width + 8) speck.x = -8;
        }
      }

      for (const speck of specks) {
        ctx.beginPath();
        ctx.arc(speck.x, speck.y, speck.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 234, 214, ${speck.a})`;
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return;
      time += animate ? 0.006 : 0;
      paint();
      if (animate) raf = window.requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    const onVisibility = () => {
      const visible = document.visibilityState === "visible";
      running = visible;
      if (visible && animate) {
        window.cancelAnimationFrame(raf);
        tick();
      } else {
        window.cancelAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
