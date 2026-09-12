import Link from "next/link";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { CtaBand } from "@/components/CtaBand";
import {
  spaces,
  services,
  heroBadges,
  routeFinder,
  processSteps,
  bundles,
  whyDubai,
  indiaFounders,
  testimonials,
  site,
  whatsappLink,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RouteFinder />
      <Solutions />
      <Journey />
      <ServicesTeaser />
      <WhyDubai />
      <Bundles />
      <IndiaFoundersSection />
      <AboutPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}

/* ----------------------------------------------------------------- Hero -- */
function Hero() {
  return (
    <section className="relative bg-white pt-20">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        {/* Left */}
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl font-bold leading-[1.02] text-ink-900 sm:text-6xl">
            YOUR BUSINESS.
            <br />
            <span className="text-gold-500">OUR ADDRESS.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-700/70">
            {site.tagline}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#route-finder" variant="gold">
              Find My Solution
            </Button>
            <Button href="/spaces/" variant="outline">
              View Workspaces
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-cream-200 pt-8">
            {heroBadges.map((b) => (
              <div key={b.title} className="text-center sm:text-left">
                <Icon name={b.icon} className="mx-auto h-7 w-7 text-ink-900 sm:mx-0" />
                <p className="mt-3 text-sm font-semibold text-ink-900">{b.title}</p>
                <p className="text-xs text-ink-700/60">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-ink-900/10">
            <Media imageKey="hero" rounded="rounded-2xl" />
          </div>
          {/* gold accent block */}
          <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-2xl border-4 border-gold-500/30 bg-gold-500/10 lg:block" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- Route finder ---- */
function RouteFinder() {
  return (
    <section id="route-finder" className="scroll-mt-24 bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Start With Your Need"
          title="What do you need?"
          intro="You don't need to know the package name. Tell us where you are today, and we'll help map the clearest route forward."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {routeFinder.map((r) => (
            <Link
              key={r.n}
              href={r.href}
              className="group flex flex-col rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="font-display text-3xl font-bold text-gold-500">
                {r.n}
              </span>
              <h3 className="mt-3 font-semibold text-ink-900">{r.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-700/65">
                {r.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                {r.cta}
                <Icon
                  name="arrowRight"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Solutions -- */
function Solutions() {
  return (
    <section className="bg-cream-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Solutions"
          title="Flexible Spaces. Powerful Possibilities."
          center
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((s) => (
            <Link
              key={s.slug}
              href={`/spaces/#${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
            >
              {/* Image with overlapping icon */}
              <div className="relative">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <Media imageKey={s.image} rounded="rounded-none" />
                </div>
                <span className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-ink-900 text-gold-400 shadow-lg ring-4 ring-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
              </div>

              <div className="flex flex-1 flex-col items-center px-6 pt-10 pb-7 text-center">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                {s.price && (
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-display text-lg font-bold text-gold-600">
                      {s.price}
                    </span>
                    {s.priceNote && (
                      <span className="text-xs text-ink-700/55">
                        {s.priceNote}
                      </span>
                    )}
                  </div>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/65">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                  Learn More
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
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
              {i < processSteps.length - 1 && (
                <Icon
                  name="arrowRight"
                  className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold-500/60 lg:block"
                />
              )}
            </div>
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) =>
              ["company-formation", "pro-visa-services", "golden-visa", "bank-account"].includes(
                s.slug
              )
            )
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/#${s.slug}`}
                className="group flex flex-col rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5"
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

        {/* Right stats */}
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
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Bundles -- */
function Bundles() {
  return (
    <section id="bundles" className="scroll-mt-24 bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="A Simpler Way to Compare"
          title="Start with the level of support you need."
          intro="Transparent, fixed-fee bundles — pick the one that matches where you are today. Government and partner fees are called out separately, never hidden in the headline price."
          center
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-4">
          {bundles.map((p) => (
            <div
              key={p.slug}
              className={`relative flex flex-col rounded-2xl border p-7 ${
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
              {!p.highlight && (
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
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

/* ------------------------------------------------------ India Founders --- */
function IndiaFoundersSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
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

        <div className="grid gap-5 sm:grid-cols-2">
          {indiaFounders.points.map((pt) => (
            <div
              key={pt.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
                <Icon name={pt.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{pt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/65">
                {pt.text}
              </p>
            </div>
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
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
            <Media imageKey="aboutReception" rounded="rounded-2xl" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
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
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Testimonials --- */
function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by founders across the UAE"
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-cream-200 bg-cream-50 p-7">
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
