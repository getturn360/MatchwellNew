import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className, priority }: Props) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Matchwell Furniture"
      width={180}
      height={48}
      priority={priority}
      className={cn("h-9 w-auto object-contain object-left", className)}
    />
  );
}
