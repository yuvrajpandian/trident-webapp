import type { Metadata } from "next";
import { Container, SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import {
  indiaFounders,
  remoteOnboardingSteps,
  indiaFaqs,
  bundles,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "For India-Based Founders — Launch in Dubai Without Flying In",
  description:
    "Remote, Power-of-Attorney company formation for India-based founders — WhatsApp-first service, fast compliant Ejari, and transparent AED pricing with rupee reference on request.",
};

const launchBundles = bundles.filter((b) => b.slug === "launch" || b.slug === "launch-grow");

export default function IndiaFoundersPage() {
  return (
    <>
      <PageHeader
        eyebrow={indiaFounders.eyebrow}
        title={indiaFounders.title}
        intro={indiaFounders.intro}
      />

      {/* Why this works for India founders */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
              <Media imageKey="indiaFounders" rounded="rounded-2xl" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why Trident Nexus"
              title="Fast Ejari, transparent pricing, and a team that meets you on WhatsApp."
              intro="No Bur Dubai business centre combines all three — most independents race to the bottom on price with no trust, and the big consultancies don't own the workspace or the Ejari relationship."
            />
          </div>
        </Container>
      </section>

      {/* The 4 differentiators */}
      <section className="bg-cream-50 py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {indiaFounders.points.map((pt) => (
              <div
                key={pt.title}
                className="rounded-2xl border border-cream-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                  <Icon name={pt.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-ink-900">{pt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                  {pt.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How remote onboarding works */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="How It Works"
            title={<span className="text-white">Four steps, zero flights.</span>}
            intro="From your first WhatsApp message to a registered Dubai company — here's exactly what remote onboarding looks like."
            light
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {remoteOnboardingSteps.map((step, i) => (
              <div key={step.n} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="font-display text-4xl font-bold text-gold-500">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                    {step.text}
                  </p>
                </div>
                {i < remoteOnboardingSteps.length - 1 && (
                  <Icon
                    name="arrowRight"
                    className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold-500/60 lg:block"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={whatsappLink("Hi, I'm based in India and would like to set up a company in Dubai remotely.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:brightness-105"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Start on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Relevant bundles */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Built For Your Journey"
            title="Launch bundles, priced transparently in AED."
            intro="Ask us for an indicative rupee equivalent alongside any quote — exchange rates move, so AED stays our published reference price."
            center
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2">
            {launchBundles.map((p) => (
              <div
                key={p.slug}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.highlight
                    ? "border-gold-400 bg-ink-950 text-white shadow-2xl shadow-ink-900/20"
                    : "border-cream-200 bg-cream-50"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    p.highlight ? "text-gold-400" : "text-gold-600"
                  }`}
                >
                  {p.tierLabel}
                </span>
                <h3
                  className={`mt-3 font-display text-2xl font-bold ${
                    p.highlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  {p.name}
                </h3>
                <div
                  className={`mt-3 font-display text-3xl font-bold ${
                    p.highlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  {p.price}
                </div>
                {p.priceNote && (
                  <span
                    className={`text-xs ${
                      p.highlight ? "text-cream-100/60" : "text-ink-700/55"
                    }`}
                  >
                    {p.priceNote}
                  </span>
                )}
                <p
                  className={`mt-3 text-sm ${
                    p.highlight ? "text-cream-100/70" : "text-ink-700/65"
                  }`}
                >
                  {p.positioning}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlight
                            ? "bg-gold-500/20 text-gold-400"
                            : "bg-gold-500/15 text-gold-600"
                        }`}
                      >
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={`text-sm ${
                          p.highlight ? "text-cream-100/90" : "text-ink-700/80"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={p.href}
                    variant={p.highlight ? "gold" : "outline"}
                    className="w-full"
                    withArrow
                  >
                    {p.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Questions from India-based founders
            </h2>
            <div className="mt-10 divide-y divide-cream-200 overflow-hidden rounded-2xl border border-cream-200 bg-white">
              {indiaFaqs.map((f) => (
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
