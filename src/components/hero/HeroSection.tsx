"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col items-center justify-center overflow-hidden hero-studio">
      {/* Giant background brand text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-brand-text font-sans font-bold lowercase tracking-[-0.04em] leading-none whitespace-nowrap"
        >
          matchwell
        </motion.span>
      </div>

      {/* Static furniture — like reference */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 h-[50vh] sm:h-[55vh] md:h-[58vh] max-h-[560px] flex items-end justify-center"
      >
        <div className="relative w-full h-full flex items-end justify-center gap-0 sm:gap-2 md:gap-4">
          {/* Left chair */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative w-[38%] sm:w-[34%] md:w-[30%] h-[75%] sm:h-[82%] -mr-4 sm:-mr-6 z-10"
          >
            <Image
              src="/hero/chair-left.webp"
              alt="Mid-century lounge chair"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl mix-blend-multiply"
              sizes="(max-width: 768px) 40vw, 30vw"
            />
          </motion.div>

          {/* Center table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative w-[28%] sm:w-[24%] md:w-[22%] h-[38%] sm:h-[42%] z-20 -mx-2 sm:-mx-4"
          >
            <Image
              src="/hero/table.webp"
              alt="Wooden coffee table"
              fill
              priority
              className="object-contain object-bottom drop-shadow-xl mix-blend-multiply"
              sizes="(max-width: 768px) 28vw, 22vw"
            />
          </motion.div>

          {/* Right chair — mirrored */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative w-[38%] sm:w-[34%] md:w-[30%] h-[75%] sm:h-[82%] -ml-4 sm:-ml-6 z-10 scale-x-[-1]"
          >
            <Image
              src="/hero/chair-right.webp"
              alt="Mid-century lounge chair"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl mix-blend-multiply"
              sizes="(max-width: 768px) 40vw, 30vw"
            />
          </motion.div>
        </div>

        {/* Floor shadow */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/10 blur-2xl rounded-full pointer-events-none" />
      </motion.div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 w-full max-w-4xl mx-auto px-6 pb-10 pt-4 text-center"
      >
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-white/80 font-sans">
          Crafting timeless, durable furniture for homes and offices across
          Kerala. Over 30 years of expert craftsmanship with a clear focus on
          quality, style, and lasting comfort.
        </p>
      </motion.div>

      {/* Explore link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-6 sm:left-10 z-20"
      >
        <Link
          href="#categories"
          className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/25 transition-colors"
        >
          Explore Collection
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
