import Image from "next/image";

type Props = { title: string; copy: string; image: string };

export default function InfrastructureCard({ title, copy, image }: Props) {
  return (
    <article className="relative min-h-[50vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 p-8 text-white">
        <h3 className="font-heading text-3xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-white/70">{copy}</p>
      </div>
    </article>
  );
}
