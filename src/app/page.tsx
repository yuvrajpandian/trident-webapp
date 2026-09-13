import Link from "next/link";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SolutionFinder } from "@/components/SolutionFinder";
import { HomepageSpaces } from "@/components/HomepageSpaces";
import {
  services,
  heroBadges,
  processSteps,
  bundles,
  whyDubai,
  indiaFounders,
  freeZoneMainland,
  testimonials,
  site,
  whatsappLink,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bundles />
      <SolutionFinder />
      <HomepageSpaces />
      <SectionSeam />
      <Journey />
      <SectionSeam />
      <ServicesTeaser />
      <SectionSeam />
      <WhyDubai />
      <SectionSeam />
      <FreeZoneMainlandSection />
      <SectionSeam />
      <IndiaFoundersSection />
      <SectionSeam />
      <AboutPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}

/* A quiet accent seam dropped between sections with sharply contrasting
   backgrounds (white/cream <-> ink-950), so the boundary reads as a
   deliberate detail rather than a hard, flat-color cut. */
function SectionSeam() {
  return (
    <div className="relative h-px w-full">
      <div className="absolute left-1/2 top-1/2 h-px w-48 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </div>
  );
}

/* ----------------------------------------------------------------- Hero -- */
function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink-950 pt-20 lg:min-h-[88vh]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Media imageKey="hero" rounded="" className="scale-105" />
      </div>
      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30 lg:via-ink-950/75 lg:to-ink-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

      <Container className="relative py-16">
        <div className="max-w-xl animate-fade-up">
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl sm:leading-[1.02] lg:text-6xl">
            YOUR BUSINESS.
            <br />
            <span className="text-gold-500">OUR ADDRESS.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream-100/80">
            {site.tagline}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#find-my-solution" variant="gold">
              Find My Solution
            </Button>
            <Button href="/spaces/" variant="outlineLight">
              View Workspaces
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {heroBadges.map((b) => (
              <div key={b.title} className="text-center sm:text-left">
                <Icon name={b.icon} className="mx-auto h-7 w-7 text-gold-400 sm:mx-0" />
                <p className="mt-3 text-sm font-semibold text-white">{b.title}</p>
                <p className="text-xs text-cream-100/65">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Journey --- */
function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Trident Nexus Difference"
            title={
              <span className="text-white">
                More than an office — your Dubai business infrastructure.
              </span>
            }
            intro="A place to begin, a team to coordinate the moving parts, and a platform of support for what comes next."
            light
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} className="relative h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="font-display text-4xl font-bold text-gold-500">
                  {step.n}
                </span>
                <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                  {step.text}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <Icon
                  name="arrowRight"
                  className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold-500/60 lg:block"
                />
              )}
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/contact/" variant="gold">
            Talk to a Business Advisor
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- Services teaser - */
function ServicesTeaser() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Beyond Your Workspace"
              title="Support for the business behind the office."
              intro="Licensing, visas, banking and compliance — choose individual services, or bring them together with your workspace."
            />
            <Button
              href="/services/"
              variant="outline"
              withArrow
              className="shrink-0"
            >
              View All Services
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) =>
              ["company-formation", "pro-visa-services", "golden-visa", "bank-account"].includes(
                s.slug
              )
            )
            .map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/#${s.slug}`}
                  className="card-premium group flex h-full flex-col rounded-2xl bg-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    {s.partnerDelivered && (
                      <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink-700/45">
                        Via Partner
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-semibold text-ink-900">{s.title}</h3>
                  {s.price && (
                    <div className="mt-1.5 flex items-baseline gap-1">
                      <span className="text-sm font-bold text-gold-600">
                        {s.price}
                      </span>
                      {s.priceNote && (
                        <span className="text-[0.65rem] text-ink-700/55">
                          {s.priceNote}
                        </span>
                      )}
                    </div>
                  )}
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-700/65">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600">
                    Learn More
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Why Dubai -- */
function WhyDubai() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <Reveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
              Why Dubai?
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              The Perfect Hub
              <br />
              For Your Business
            </h2>
            <ul className="mt-8 space-y-4">
              {whyDubai.reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-cream-100/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-500">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <Button href="/why-dubai/" variant="gold" className="mt-9">
              Discover More
            </Button>
          </div>
        </Reveal>

        {/* Right stats */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {whyDubai.stats.map((s) => (
              <div key={s.label} className="bg-ink-900/40 p-7">
                <Icon name={s.icon} className="h-8 w-8 text-gold-500" />
                <div className="mt-4 font-display text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-cream-100/65">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Bundles -- */
function Bundles() {
  return (
    <section id="bundles" className="scroll-mt-24 bg-white py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="A Simpler Way to Compare"
            title="Start with the level of support you need."
            intro="Transparent, fixed-fee bundles — pick the one that matches where you are today. Government and partner fees are called out separately, never hidden in the headline price."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-4">
          {bundles.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                p.highlight
                  ? "border-gold-400 bg-ink-950 text-white shadow-2xl shadow-ink-900/20 lg:-translate-y-3"
                  : "border-cream-200 bg-cream-50"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-900">
                  {p.tierLabel}
                </span>
              )}

              {/* Situational tag — so business-setup-first and
                  workspace-first shoppers each recognize themselves at a
                  glance, before reading the feature-level tier label. */}
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${
                  p.highlight
                    ? "bg-white/10 text-cream-100/80"
                    : "bg-ink-900/5 text-ink-700/60"
                }`}
              >
                {p.situationTag}
              </span>

              {!p.highlight && (
                <span className="mt-3 text-xs font-bold uppercase tracking-wider text-gold-600">
                  {p.tierLabel}
                </span>
              )}

              <h3
                className={`mt-3 font-display text-2xl font-bold ${
                  p.highlight ? "text-white" : "text-ink-900"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span
                  className={`font-display text-3xl font-bold ${
                    p.highlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  {p.price}
                </span>
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

              <div className="mt-8 pt-2">
                <Button
                  href={p.href}
                  variant={p.highlight ? "gold" : "outline"}
                  className="w-full"
                  withArrow
                >
                  {p.cta}
                </Button>
                {p.note && (
                  <p
                    className={`mt-3 text-center text-xs ${
                      p.highlight ? "text-cream-100/55" : "text-ink-700/50"
                    }`}
                  >
                    {p.note}
                  </p>
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-700/55">
          Prices shown are our published bundle rates — government fees and
          partner-delivered add-ons are called out separately.{" "}
          <Link href="/contact/" className="font-semibold text-gold-600 hover:underline">
            Contact us for an exact, all-inclusive quote.
          </Link>
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ Free Zone → Mainland */
function FreeZoneMainlandSection() {
  return (
    <section className="bg-cream-50 py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              {freeZoneMainland.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              {freeZoneMainland.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700/70">
              {freeZoneMainland.intro}
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-500/30 bg-gold-500/10 p-4">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  {freeZoneMainland.deadline.label}
                </div>
                <p className="mt-1 text-sm text-ink-700/80">
                  {freeZoneMainland.deadline.text}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/free-zone-mainland/" variant="gold" withArrow>
                {freeZoneMainland.cta}
              </Button>
              <Button href="/services/#mainland-expansion" variant="outline">
                View Mainland Expansion
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {freeZoneMainland.reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="card-premium h-full rounded-2xl bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-gold-400">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-ink-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/65">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ India Founders --- */
function IndiaFoundersSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
              {indiaFounders.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {indiaFounders.title}
            </h2>
            <p className="mt-5 leading-relaxed text-cream-100/75">
              {indiaFounders.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Hi, I'd like to ask about remote company setup from India.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:brightness-105"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                {indiaFounders.cta}
              </a>
              <Button href="/india-founders/" variant="outlineLight">
                Learn More
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {indiaFounders.points.map((pt, i) => (
            <Reveal key={pt.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
                  <Icon name={pt.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-white">{pt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/65">
                  {pt.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- About preview - */
function AboutPreview() {
  return (
    <section className="bg-cream-50 py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
            <Media imageKey="aboutReception" rounded="rounded-2xl" />
          </div>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            About Us
          </span>
          <span className="mt-3 block h-0.5 w-12 rounded bg-gold-500" />
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            More Than a Workspace,
            <br />
            We Are Your Business Partner.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-700/70">
            At {site.fullName}, we provide sophisticated business solutions that
            help entrepreneurs and companies thrive in Dubai&apos;s dynamic
            market. From flexible workspaces to complete company formation, our
            dedicated team is with you at every step.
          </p>
          <Button href="/about/" variant="outline" className="mt-8" withArrow>
            Know More About Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Testimonials --- */
function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by founders across the UAE"
            center
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card-premium flex h-full flex-col rounded-2xl bg-cream-50 p-7">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-cream-200 pt-4">
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-700/55">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" />
    </svg>
  );
}
