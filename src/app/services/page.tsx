import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { ItemDetailList } from "@/components/ItemDetailList";
import { CtaBand } from "@/components/CtaBand";
import { faqs, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Company Formation, Visas & Corporate Services",
  description:
    "Trident Business Center Nexus offers end-to-end Dubai business services: mainland trade licenses, PRO & visa services, corporate compliance, and bank account opening.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="End-to-end business setup, done for you"
        intro="From your first trade license to visas, banking, and ongoing compliance — our consultants handle the paperwork so you can focus on building your business in Dubai."
      />

      <ItemDetailList items={services} />

      {/* FAQ */}
      <section className="bg-cream-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-10 divide-y divide-cream-200 overflow-hidden rounded-2xl border border-cream-200 bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ink-700 transition group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
