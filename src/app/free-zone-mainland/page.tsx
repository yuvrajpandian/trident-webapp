import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import {
  freeZoneMainland,
  freeZoneFaqs,
  services,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Mainland Presence for Free Zone Companies — Fast Ejari & Address",
  description:
    "Free zone company needing mainland compliance under Executive Council Resolution 11 of 2025? Trident Nexus provides the fast mainland Ejari and address you need — not a new company formation.",
};

const mainlandExpansion = services.find((s) => s.slug === "mainland-expansion");

export default function FreeZoneMainlandPage() {
  return (
    <>
      <PageHeader
        eyebrow={freeZoneMainland.eyebrow}
        title={freeZoneMainland.title}
        intro={freeZoneMainland.intro}
      />

      {/* Deadline banner */}
      <section className="bg-white py-10">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-ink-900">
              <Icon name="clock" className="h-6 w-6" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                {freeZoneMainland.deadline.label}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-700/80">
                {freeZoneMainland.deadline.text}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning statement + image */}
      <section className="bg-white pb-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
              <Media imageKey="freeZoneMainland" rounded="rounded-2xl" />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="What We Are — and Aren't"
              title="The fast mainland Ejari and address solution. Not a free zone formation provider."
              intro="We don't form free zone companies, and we're not asking you to leave your free zone. We provide exactly what's missing — a mainland-registered address and Ejari, delivered directly by our own team, so you can sell into the UAE, satisfy your bank, and bid on tenders."
            />
          </Reveal>
        </Container>
      </section>

      {/* Why it matters — 4 reasons */}
      <section className="bg-cream-50 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why This Matters"
              title="What a free zone licence alone doesn't cover."
              center
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {freeZoneMainland.reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="card-premium h-full rounded-2xl bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The service itself */}
      {mainlandExpansion && (
        <section className="bg-white py-20">
          <Container>
            <Reveal className="card-premium mx-auto max-w-2xl rounded-2xl bg-cream-50 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                <Icon name={mainlandExpansion.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink-900">
                {mainlandExpansion.title}
              </h2>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-gold-600">
                  {mainlandExpansion.price}
                </span>
                {mainlandExpansion.priceNote && (
                  <span className="text-sm text-ink-700/60">
                    {mainlandExpansion.priceNote}
                  </span>
                )}
              </div>
              <p className="mt-4 leading-relaxed text-ink-700/70">
                {mainlandExpansion.blurb}
              </p>
              <ul className="mt-6 space-y-3">
                {mainlandExpansion.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-700">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink-700/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/" variant="gold" withArrow>
                  Check My Compliance Options
                </Button>
                <a
                  href={whatsappLink(
                    "Hi, my free zone company needs mainland presence — can you help?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink-900/20 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink-900 transition hover:border-gold-500 hover:text-gold-600"
                >
                  <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-cream-50 py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Questions from free zone companies
            </h2>
            <div className="card-premium mt-10 divide-y divide-cream-200 overflow-hidden rounded-2xl bg-white">
              {freeZoneFaqs.map((f) => (
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
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
