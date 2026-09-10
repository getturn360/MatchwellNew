"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section className="relative px-5 py-28 text-white md:px-12">
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        ( Voices )
      </p>
      <h2 className="mt-4 font-heading text-4xl tracking-[-0.04em] md:text-6xl">
        Lived with, not just delivered.
      </h2>
      <div className="mt-16 grid gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, rotateY: 18, z: -80 }}
            whileInView={{ opacity: 1, rotateY: index === 1 ? 0 : index ? 6 : -6, z: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -10, rotateY: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          >
            <p className="text-lg leading-8 text-white/75">{item.body}</p>
            <footer className="mt-8">
              <cite className="not-italic font-heading text-xl">{item.name}</cite>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-white/40 uppercase">
                {item.role}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
