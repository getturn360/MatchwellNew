type Props = {
  kicker: string;
  title: string;
  className?: string;
};

export default function SectionTitle({ kicker, title, className }: Props) {
  return (
    <header className={className}>
      <p className="text-[11px] tracking-[0.28em] text-copper uppercase">
        {kicker}
      </p>
      <h2 className="mt-4 max-w-4xl font-heading text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-white md:text-6xl">
        {title}
      </h2>
    </header>
  );
}
