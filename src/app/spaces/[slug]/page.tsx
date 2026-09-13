import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { SpacesComparisonMatrix } from "@/components/SpacesComparisonMatrix";
import { spaces, site, whatsappLink } from "@/lib/site";
import {
  COMPARISON_SLUGS,
  WHY_CHOOSE,
  PRODUCT_FAQS,
  getRelatedSpaces,
} from "@/lib/spacesContent";

/* Every workspace solution follows one consistent structure:
   Hero -> Business Goals -> Why Choose This -> What's Included ->
   Comparison -> FAQ -> CTA -> Related Products. Driven entirely by
   `spaces` + spacesContent.ts — no per-product bespoke pages to maintain. */

export function generateStaticParams() {
  return spaces.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = spaces.find((s) => s.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Dubai Workspace Solution`,
    description: item.blurb,
  };
}

export default async function SpaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = spaces.find((s) => s.slug === slug);
  if (!item) notFound();

  const isFlagship = (COMPARISON_SLUGS as readonly string[]).includes(slug);
  const whyChoose = WHY_CHOOSE[slug] ?? [];
  const faqs = PRODUCT_FAQS[slug] ?? [];
  const related = getRelatedSpaces(slug);

  return (
    <>
      <PageHeader eyebrow="Workspace Solutions" title={item.title} intro={item.short} />

      {/* Hero — price + primary CTA lead on mobile, image lead on desktop */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
              <Media imageKey={item.image} rounded="rounded-2xl" />
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            {item.price && (
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-gold-600">{item.price}</span>
                {item.priceNote && <span className="text-sm text-ink-700/55">{item.priceNote}</span>}
              </div>
            )}
            <p className="mt-4 max-w-lg leading-relaxed text-ink-700/70">{item.blurb}</p>

            {/* Key inclusions — shown before the CTA so a mobile visitor sees
                what's included without needing to reach the full "What's
                Included" section further down the page. */}
            <ul className="mt-5 space-y-2">
              {item.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact/?service=${item.slug}`} variant="gold" withArrow>
                Enquire Now
              </Button>
              <a
                href={whatsappLink(`Hi, I'm interested in your ${item.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink-900/20 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink-900 transition hover:border-gold-500 hover:text-gold-600"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            {item.note && <p className="mt-4 text-xs text-ink-700/55">{item.note}</p>}
          </Reveal>
        </Container>
      </section>

      {/* Business Goals */}
      {item.goals && item.goals.length > 0 && (
        <section className="bg-cream-50 py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Business Goals"
                title="Built for what you're actually trying to do."
                intro={`${item.title} is the right fit if any of these describe where your business is today.`}
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.goals.map((goal, i) => (
                <Reveal key={goal} delay={i * 80}>
                  <div className="card-premium flex h-full items-center gap-4 rounded-2xl bg-white p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-700">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-ink-900">{goal}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why Choose This */}
      {whyChoose.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Why Choose This" title={`Why founders pick ${item.title}.`} />
            </Reveal>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((reason, i) => (
                <Reveal key={reason} delay={i * 80}>
                  <li className="card-premium h-full rounded-2xl bg-cream-50 p-6 text-sm leading-relaxed text-ink-700/75">
                    {reason}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* What's Included */}
      <section className="bg-cream-50 py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What's Included" title="Everything in this plan." />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {item.features.map((f, i) => (
              <Reveal key={f} delay={(i % 4) * 60}>
                <li className="card-premium flex h-full items-start gap-3 rounded-xl bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink-700/80">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Comparison */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Comparison"
              title="How it compares to the rest of the collection."
              center
            />
          </Reveal>
          <div className="mt-10">
            {isFlagship ? (
              <Reveal>
                <SpacesComparisonMatrix highlightSlug={slug} />
              </Reveal>
            ) : (
              <Reveal>
                <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-ink-700/65">
                  {item.title} is available as a flexible add-on alongside any workspace plan.{" "}
                  <Link href="/spaces/#compare" className="font-semibold text-gold-600 hover:underline">
                    Compare the six flagship workspace solutions
                  </Link>{" "}
                  to find your base plan.
                </p>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-cream-50 py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  Questions about {item.title}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="card-premium mt-10 divide-y divide-cream-200 overflow-hidden rounded-2xl bg-white">
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
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      <CtaBand />

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Related Products" title="You might also consider." center />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 100}>
                  <Link
                    href={`/spaces/${r.slug}/`}
                    className="card-premium group flex h-full items-center gap-5 rounded-2xl bg-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="aspect-square h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Media imageKey={r.image} rounded="rounded-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-ink-900">{r.title}</h3>
                      <p className="mt-1 text-sm text-ink-700/60">{r.short}</p>
                      {r.price && (
                        <span className="mt-2 block text-sm font-semibold text-gold-600">{r.price}</span>
                      )}
                    </div>
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 shrink-0 text-ink-700/30 transition group-hover:translate-x-1 group-hover:text-gold-600"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: item.title,
            description: item.blurb,
            brand: { "@type": "Brand", name: site.name },
            url: `${site.url}/spaces/${item.slug}/`,
            ...(item.price && !item.price.startsWith("Pricing")
              ? {
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "AED",
                    price: item.price.replace(/[^0-9.]/g, ""),
                    availability: "https://schema.org/InStock",
                    url: `${site.url}/spaces/${item.slug}/`,
                  },
                }
              : {}),
          }),
        }}
      />
    </>
  );
}
