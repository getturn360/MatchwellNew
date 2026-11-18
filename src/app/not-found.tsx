import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
