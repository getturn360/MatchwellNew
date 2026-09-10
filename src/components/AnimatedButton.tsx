"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean | string;
};

export default function AnimatedButton({
  href,
  children,
  className,
  download,
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.28);
  const classes = cn(
    "magnetic-btn relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[11px] font-medium tracking-[0.22em] text-white uppercase backdrop-blur-sm transition hover:border-copper hover:bg-copper/20",
    className,
  );

  if (href.startsWith("http") || download) {
    return (
      <a
        ref={ref}
        href={href}
        data-cursor="hover"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download || undefined}
        className={classes}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} prefetch data-cursor="hover" className={classes}>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
