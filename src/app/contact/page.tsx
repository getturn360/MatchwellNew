import type { Metadata } from "next";
<<<<<<< HEAD
import { createMetadata, siteConfig } from "@/lib/seo";
import FadeIn from "@/components/FadeIn";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Matchwell Furniture. Visit us in Kollam or reach us by phone. Serving Kollam, Calicut, Wayanad, and Ernakulam.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for inquiries, custom
            orders, or to visit our showroom.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-8">
                <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-sm text-muted">
                      <a
                        href={`tel:+91${siteConfig.phone[0]}`}
                        className="hover:text-accent transition-colors"
                      >
                        {siteConfig.phone[0]}
                      </a>
                      {" | "}
                      <a
                        href={`tel:+91${siteConfig.phone[1]}`}
                        className="hover:text-accent transition-colors"
                      >
                        {siteConfig.phone[1]}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Locations</h3>
                    <p className="text-sm text-accent font-medium">
                      {siteConfig.locations.join(" | ")}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-light rounded-2xl p-8">
                <h2 className="font-serif text-2xl mb-6">Send a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your furniture needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
=======
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Matchwell Furniture in Kollam or our Kerala showrooms. Call, WhatsApp, or come to the workshop.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
>>>>>>> 4df1b0b53b913383c076abe27fa927cbb6f71e41
  );
}
