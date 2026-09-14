import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { expoOrdinal, type ExpoEdition } from "@/lib/expo";

type Props = {
  edition: ExpoEdition;
  priority?: boolean;
};

export default function ExpoCard({ edition, priority }: Props) {
  const when = edition.status === "upcoming" ? "Starts on" : "Held on";

  return (
    <article className="group overflow-hidden border border-white/10 bg-charcoal transition hover:border-copper/50">
      <Link
        href={`/expo/${edition.slug}`}
        prefetch
        data-cursor="hover"
        className="grid md:grid-cols-[minmax(0,42%)_minmax(0,1fr)]"
      >
        <div className="relative aspect-[16/9] min-h-[220px] overflow-hidden md:aspect-auto md:min-h-[280px]">
          <Image
            src={edition.cover}
            alt=""
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            priority={priority}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
          <p
            className={`absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase ${
              edition.status === "upcoming"
                ? "bg-copper text-black"
                : "border border-white/30 bg-black/50 text-white/80"
            }`}
          >
            {edition.status === "upcoming" ? "Upcoming" : "Past"}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-copper uppercase">
              {edition.label} · {expoOrdinal(edition.edition)} fair
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em] text-white md:text-5xl">
              Matchwell at {edition.label}
            </h2>
            <p className="mt-4 text-[11px] tracking-[0.22em] text-white/45 uppercase transition group-hover:text-copper">
              Learn more
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <Calendar size={14} className="mt-0.5 shrink-0 text-copper" />
                <span>
                  {edition.dates} · {edition.time}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-copper" />
                <span>
                  {edition.venue}, {edition.city}
                </span>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5">
            <p className="text-[10px] tracking-[0.22em] text-white/35 uppercase">
              {when}
            </p>
            <p className="mt-2 font-heading text-2xl tracking-[-0.03em] text-white md:text-3xl">
              {edition.dates}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
