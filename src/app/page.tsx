import Link from "next/link";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { CtaBand } from "@/components/CtaBand";
import {
  spaces,
  heroBadges,
  whyDubai,
  testimonials,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyDubai />
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
            <Button href="/spaces/" variant="gold">
              Explore Spaces
            </Button>
            <Button href="/services/" variant="outline">
              Our Services
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/65">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                  Learn More
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
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

/* --------------------------------------------------------- About preview - */
function AboutPreview() {
  return (
    <section className="bg-white py-24">
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
    <section className="bg-cream-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by founders across the UAE"
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-cream-200 bg-white p-7">
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
