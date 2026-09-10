"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { GalleryItem } from "@/lib/gallery";

const MotionLink = motion(Link);

type Props = {
  items: GalleryItem[];
  mosaic?: boolean;
  onSelect?: (item: GalleryItem) => void;
  priorityFirst?: boolean;
};

export default function GalleryGrid({
  items,
  mosaic = false,
  onSelect,
  priorityFirst = false,
}: Props) {
  return (
    <div
      className={cn(
        "grid gap-3 md:gap-4",
        mosaic ? "md:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item, index) => {
        const className = cn(
          "group relative block w-full cursor-pointer overflow-hidden text-left",
          mosaic &&
            index === 0 &&
            "min-h-[42vh] md:col-span-4 md:row-span-2 md:min-h-[70vh]",
          mosaic && index === 1 && "min-h-[28vh] md:col-span-2",
          mosaic && index === 2 && "min-h-[28vh] md:col-span-2",
          mosaic && index > 2 && "min-h-[34vh] md:col-span-2",
          !mosaic && item.span === "wide" && "lg:col-span-2",
          !mosaic && item.span === "tall" && "min-h-[52vh]",
          !mosaic && !item.span && "min-h-[42vh]",
        );

        const motionProps = {
          layout: true,
          initial: { opacity: 0, y: 56, filter: "blur(12px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.8,
            delay: (index % 6) * 0.07,
            ease: [0.22, 1, 0.36, 1] as const,
          },
          whileHover: { y: -6 },
          className,
        };

        const sizes = mosaic
          ? index === 0
            ? "(min-width: 768px) 66vw, 100vw"
            : "(min-width: 768px) 33vw, 100vw"
          : item.span === "wide"
            ? "(min-width: 1024px) 66vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

        const inner = (
          <>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={sizes}
              priority={priorityFirst && index === 0}
              className="object-cover transition duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition duration-500 group-hover:translate-y-0 md:p-7">
              <p className="text-[10px] tracking-[0.24em] text-copper uppercase">
                {item.category} · {item.place}
              </p>
              <h3 className="mt-2 font-heading text-2xl tracking-[-0.04em] text-white md:text-3xl">
                {item.title}
              </h3>
            </div>
          </>
        );

        if (onSelect) {
          return (
            <motion.button
              key={item.slug}
              type="button"
              data-cursor="hover"
              onClick={() => onSelect(item)}
              {...motionProps}
            >
              {inner}
            </motion.button>
          );
        }

        return (
          <MotionLink
            key={item.slug}
            href="/gallery"
            prefetch
            data-cursor="hover"
            {...motionProps}
          >
            {inner}
          </MotionLink>
        );
      })}
    </div>
  );
}
