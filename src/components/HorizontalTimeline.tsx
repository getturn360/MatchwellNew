"use client";

export default function HorizontalTimeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-max">{children}</div>;
}
