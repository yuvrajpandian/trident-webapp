import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { site, bookTourMessage, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Tour or Free Consultation",
  description:
    "Get in touch with Trident Business Center Nexus. Book a tour of our Dubai workspaces or a free consultation on company formation, visas, and corporate services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk about your business"
        intro="Book a tour of our spaces or a free, no-obligation consultation. Tell us what you're planning and we'll recommend the fastest, most cost-effective way to set up in Dubai."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-ink-900">Get in touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                We typically respond within one business day. For the fastest
                reply, message us on WhatsApp.
              </p>

              <ul className="mt-8 space-y-5">
                <ContactRow icon="mapPin" label="Visit us">
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.city}
                </ContactRow>
                <ContactRow icon="phone" label="Call us">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-gold-600">
                    {site.phone}
                  </a>
                </ContactRow>
                <ContactRow icon="mail" label="Email us">
                  <a href={`mailto:${site.email}`} className="hover:text-gold-600">
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow icon="clock" label="Working hours">
                  {site.hours}
                </ContactRow>
              </ul>

              <a
                href={whatsappLink(bookTourMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:brightness-105"
              >
                <Icon name="whatsapp" className="h-5 w-5" /> Message us on WhatsApp
              </a>

              <div className="mt-8 overflow-hidden rounded-2xl border border-cream-200">
                <iframe
                  title="Our location"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-cream-200 bg-cream-50 p-7 sm:p-9">
                <h2 className="font-display text-2xl font-bold text-ink-900">
                  Book a tour or request a quote
                </h2>
                <p className="mt-2 text-sm text-ink-700/70">
                  Fill in the form and we&apos;ll get back to you with tailored
                  advice, availability, and pricing.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-gold-600">
          {label}
        </div>
        <div className="mt-0.5 text-sm leading-relaxed text-ink-900">{children}</div>
      </div>
    </li>
  );
}
