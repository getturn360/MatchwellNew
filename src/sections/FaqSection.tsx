"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-5 py-28 text-white md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-[11px] tracking-[0.28em] text-copper uppercase">
          ( Questions )
        </p>
        <h2 className="mt-4 text-center font-heading text-4xl tracking-[-0.04em] md:text-6xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-white/10 bg-[#1a1a1a]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                  data-cursor="hover"
                >
                  <span className="font-heading text-[13px] font-semibold tracking-[0.12em] uppercase md:text-sm">
                    {item.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40">
                    <Plus
                      size={14}
                      strokeWidth={2}
                      className={cn(
                        "transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-white/65 md:px-7">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
