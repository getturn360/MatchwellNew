export default function ClientLogo({ name }: { name: string }) {
  return (
    <span className="font-heading text-4xl tracking-tight text-white/40">
      {name}
    </span>
  );
}
