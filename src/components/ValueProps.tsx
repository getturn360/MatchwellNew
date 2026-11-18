"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable delivery across Kerala with careful handling.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    description: "Premium materials built to last for generations.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated support to help you find the perfect piece.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 border-t border-border" aria-label="Why choose us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/30 mb-5">
                <feature.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
