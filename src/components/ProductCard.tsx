import Image from "next/image";

type Props = {
  title: string;
  copy: string;
  image: string;
};

export default function ProductCard({ title, copy, image }: Props) {
  return (
    <article className="overflow-hidden border border-white/10 bg-charcoal">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/60">{copy}</p>
      </div>
    </article>
  );
}
