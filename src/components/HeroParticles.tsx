"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";

type Particle = {
  ox: number;
  oy: number;
  spreadX: number;
  spreadY: number;
  x: number;
  y: number;
  r: number;
  delay: number;
  seed: number;
};

type FieldMote = {
  x: number;
  y: number;
  r: number;
  a: number;
  vx: number;
  vy: number;
  seed: number;
};

type Props = {
  sectionRef: RefObject<HTMLElement | null>;
  textRef: RefObject<HTMLElement | null>;
  progressRef: RefObject<number>;
};

function makeField(sw: number, sh: number): FieldMote[] {
  const count = sw < 768 ? 36 : 58;
  return Array.from({ length: count }, () => ({
    x: Math.random() * sw,
    y: Math.random() * sh,
    r: 0.5 + Math.random() * 2.4,
    a: 0.12 + Math.random() * 0.38,
    vx: (Math.random() - 0.5) * 0.35,
    vy: -0.06 - Math.random() * 0.22,
    seed: Math.random() * Math.PI * 2,
  }));
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function sampleTitle(headline: HTMLElement): Particle[] {
  const words = headline.querySelectorAll<HTMLElement>(".hero-word");
  if (!words.length) return [];

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const sw = window.innerWidth;
  const sh = window.innerHeight;
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.floor(sw * dpr));
  canvas.height = Math.max(1, Math.floor(sh * dpr));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];

  ctx.scale(dpr, dpr);
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "top";

  words.forEach((word) => {
    const host = word.parentElement;
    if (!host) return;
    const box = host.getBoundingClientRect();
    const style = window.getComputedStyle(word);
    ctx.font = style.font;
    if ("letterSpacing" in ctx) {
      (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
        style.letterSpacing;
    }
    ctx.fillText(word.textContent?.trim() ?? "", box.left, box.top);
  });

  const box = headline.getBoundingClientRect();
  const centerX = box.left + box.width / 2;
  const step = sw < 768 ? 4 : 3;
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const particles: Particle[] = [];

  for (let y = 0; y < canvas.height; y += step * dpr) {
    for (let x = 0; x < canvas.width; x += step * dpr) {
      if (data[(y * canvas.width + x) * 4 + 3] < 140) continue;
      const px = x / dpr;
      const py = y / dpr;
      const scatter = Math.pow(Math.random(), 0.45);
      particles.push({
        ox: px,
        oy: py,
        spreadX:
          (px - centerX) * (0.35 + scatter * 1.15) +
          (Math.random() - 0.5) * sw * 0.38,
        spreadY:
          (Math.random() - 0.62) * sh * 0.42 +
          (Math.random() - 0.5) * 140,
        x: px,
        y: py,
        r: 0.7 + Math.random() * 2.1,
        delay: Math.random() * 0.16,
        seed: Math.random() * Math.PI * 2,
      });
    }
  }

  return particles;
}

export default function HeroParticles({ textRef, progressRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const headline = textRef.current;
    if (!canvas || !headline) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let field: FieldMote[] = [];
    let raf = 0;
    let time = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = sampleTitle(headline);
      field = makeField(window.innerWidth, window.innerHeight);
    };

    const tick = () => {
      if (!running) return;
      time += 0.016;
      const heroP = progressRef.current ?? 0;
      const about = document.getElementById("about");
      const seam = about?.getBoundingClientRect().top ?? window.innerHeight;
      const vh = window.innerHeight;
      const box = headline.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      const titleY = box.top + box.height * 0.45;

      const appear = clamp(heroP / 0.28);
      const spread = easeInOut(clamp((heroP - 0.12) / 0.7));
      const flow = clamp((vh * 0.94 - seam) / (vh * 1.22));

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const fieldFade = 1 - flow * 0.85;
      const vw = window.innerWidth;

      ctx.save();
      ctx.globalAlpha = fieldFade;
      const orbA = {
        x: vw * 0.18 + Math.cos(time * 0.18) * 70,
        y: vh * 0.28 + Math.sin(time * 0.14) * 40,
      };
      const orbB = {
        x: vw * 0.82 + Math.sin(time * 0.12) * 80,
        y: vh * 0.62 + Math.cos(time * 0.16) * 50,
      };
      for (const orb of [
        { ...orbA, r: vh * 0.34, c: "196, 138, 92", i: 0.16 },
        { ...orbB, r: vh * 0.3, c: "92, 61, 46", i: 0.2 },
      ]) {
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        g.addColorStop(0, `rgba(${orb.c}, ${orb.i})`);
        g.addColorStop(1, `rgba(${orb.c}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = "rgba(196, 138, 92, 0.14)";
      ctx.lineWidth = 1;
      ctx.save();
      ctx.translate(vw * 0.86, vh * 0.22);
      ctx.rotate(time * 0.08);
      for (let i = 1; i <= 4; i += 1) {
        ctx.beginPath();
        ctx.arc(0, 0, i * 52, 0.2, Math.PI * 1.4);
        ctx.stroke();
      }
      ctx.restore();

      for (const mote of field) {
        mote.x += mote.vx + Math.sin(time * 0.4 + mote.seed) * 0.12;
        mote.y += mote.vy;
        if (mote.y < -10) mote.y = vh + 10;
        if (mote.x < -10) mote.x = vw + 10;
        if (mote.x > vw + 10) mote.x = -10;
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 234, 214, ${mote.a})`;
        ctx.fill();
      }
      ctx.restore();

      for (const particle of particles) {
        const local = clamp((flow - particle.delay) / 0.82);
        const startX = particle.ox + particle.spreadX * spread;
        const startY = particle.oy + particle.spreadY * spread;

        const vLen = vh * 0.52;
        const trailLen = vh * 0.7;
        const travel = local * (vLen + trailLen);
        const y = startY + travel;
        const along = clamp((y - titleY) / vLen);
        const intoTrail = clamp((y - titleY - vLen) / trailLen);

        const converge = easeInOut(along);
        const x = lerp(startX, centerX, converge);

        const size =
          lerp(particle.r, 0.35, along) * (1 - intoTrail * 0.85);
        const fade = appear * (1 - Math.pow(intoTrail, 1.15));
        if (fade < 0.03 || size < 0.15) continue;

        const drift = Math.sin(time * 0.5 + particle.seed) * (1 - along) * 2.4;
        particle.x = x + drift;
        particle.y = y + Math.cos(time * 0.35 + particle.seed) * (1 - along) * 1.8;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(0.2, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 234, 214, ${0.18 + fade * 0.82})`;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    const titleSettled = () => {
      const word = headline.querySelector<HTMLElement>(".hero-word");
      if (!word) return false;
      const style = window.getComputedStyle(word);
      const opacity = Number.parseFloat(style.opacity);
      const matrix = style.transform;
      const translated =
        matrix.startsWith("matrix") &&
        matrix !== "none" &&
        Math.abs(Number.parseFloat(matrix.split(",")[5] ?? "0")) > 2;
      return opacity > 0.9 && !translated;
    };

    let started = false;
    let attempts = 0;
    let retryTimer = 0;
    const start = () => {
      if (!running || started) return;
      resize();
      attempts += 1;
      if (attempts < 20 && (!titleSettled() || particles.length < 30)) {
        retryTimer = window.setTimeout(start, 120);
        return;
      }
      started = true;
      tick();
    };

    const onTitleReady = () => {
      if (started) {
        resize();
        return;
      }
      start();
    };

    const onVisibility = () => {
      const visible = document.visibilityState === "visible";
      running = visible;
      if (visible && started) {
        window.cancelAnimationFrame(raf);
        tick();
      } else {
        window.cancelAnimationFrame(raf);
      }
    };

    void document.fonts.ready.then(() => window.requestAnimationFrame(start));
    window.addEventListener("matchwell:hero-title-ready", onTitleReady);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      window.clearTimeout(retryTimer);
      window.cancelAnimationFrame(raf);
      window.removeEventListener("matchwell:hero-title-ready", onTitleReady);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted, progressRef, textRef]);

  if (!mounted) return null;

  return createPortal(
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[40]"
      aria-hidden
    />,
    document.body,
  );
}
