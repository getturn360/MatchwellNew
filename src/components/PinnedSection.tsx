import { cn } from "@/lib/cn";

export default function PinnedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("relative", className)}>{children}</section>;
}
