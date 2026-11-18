"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Wallet, HeartHandshake } from "lucide-react";
import { why } from "@/lib/site";

const icons = [ShieldCheck, Wallet, Sparkles, HeartHandshake];

export default function WhyMatchwellSection() {
  return (
    <section className="relative px-5 py-28 text-white md:px-12">
      <div className="grid gap-16 md:grid-cols-2">
        <h2 className="font-heading text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Why
          <br />
          Matchwell
          <br />
          still holds.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {why.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Icon className="text-copper" size={22} />
                <h3 className="mt-5 font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
