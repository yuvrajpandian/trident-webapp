import Link from "next/link";
import { Container, SectionHeading, Button } from "./ui";
import { Icon } from "./Icon";
import { Media } from "./Media";
import { Reveal } from "./Reveal";
import { SpacesComparisonMatrix } from "./SpacesComparisonMatrix";
import { spaces, type Item } from "@/lib/site";

/* ============================================================================
 * Homepage "Spaces" section — Homepage V2 Stage 2, updated for the
 * Workspace Solutions build-out.
 *
 * Editorial, premium redesign of what used to be a flat 7-card grid: two
 * dominant "featured" products (large imagery, large type, no card chrome),
 * a smaller secondary grid for the rest, and the same comparison matrix
 * used on /spaces/ (single source of truth — see spacesContent.ts — rather
 * than a second, slightly-different comparison table living here).
 *
 * All copy/pricing/features are read directly from `spaces` in site.ts —
 * nothing here is invented.
 * ========================================================================== */

const bySlug = (slug: string): Item => {
  const item = spaces.find((s) => s.slug === slug);
  if (!item) {
    throw new Error(`HomepageSpaces: no spaces[] entry for slug "${slug}"`);
  }
  return item;
};

// Curated selection — the full catalogue still lives on /spaces/. Virtual
// Office Plus + Ejari (an upsell tier of the Virtual Office + Ejari featured
// product) is intentionally left off this homepage teaser to keep it to a
// tight, premium set rather than showing all 7 products at once.
const FEATURED_SLUGS = ["virtual-office", "private-office"] as const;
const SECONDARY_SLUGS = ["flexi-desk", "dedicated-desk", "meeting-room", "virtual-office-address"] as const;

export function HomepageSpaces() {
  const featured = FEATURED_SLUGS.map(bySlug);
  const secondary = SECONDARY_SLUGS.map(bySlug);

  return (
    <section className="bg-cream-50 py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Spaces"
            title="Where Your Business Works Matters."
            intro="Create the right first impression with workspace solutions that grow with your business—from a professional business address to private offices for your team."
            center
          />
        </Reveal>

        {/* Featured products — two only, dominating the section */}
        <div className="mt-20 space-y-24 lg:mt-24 lg:space-y-32">
          {featured.map((item, i) => (
            <Reveal key={item.slug}>
              <FeaturedProduct item={item} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        {/* Secondary options — smaller, quieter grid */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              More Ways To Work With Us
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <SecondaryCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Comparison matrix — same data/component as /spaces/#compare */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Which Workspace Solution Fits You?
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10">
              <SpacesComparisonMatrix />
            </div>
          </Reveal>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-700/55">
            Need help choosing?{" "}
            <Link href="#find-my-solution" className="font-semibold text-gold-600 hover:underline">
              Use our Solution Finder.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Featured --- */
function FeaturedProduct({ item, reverse = false }: { item: Item; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/15 lg:aspect-[5/4]">
          <Media imageKey={item.image} rounded="rounded-[2rem]" className="scale-105" />
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
          <Icon name={item.icon} className="h-4 w-4" />
          Featured Workspace
        </span>
        <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
          {item.title}
        </h3>

        {item.price && (
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-gold-600">{item.price}</span>
            {item.priceNote && <span className="text-sm text-ink-700/55">{item.priceNote}</span>}
          </div>
        )}

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-700/70">{item.blurb}</p>

        <ul className="mt-7 space-y-4">
          {item.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <span className="text-base text-ink-700/80">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <Button href={`/spaces/${item.slug}/`} variant="dark" withArrow>
            Explore {item.title}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- SecondaryCard */
function SecondaryCard({ item }: { item: Item }) {
  return (
    <Link
      href={`/spaces/${item.slug}/`}
      className="card-premium group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out hover:-translate-y-1.5"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Media
          imageKey={item.image}
          rounded="rounded-none"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <h4 className="mt-4 font-display text-lg font-bold text-ink-900">{item.title}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700/60">{item.short}</p>
        <div className="mt-5 flex items-center justify-between border-t border-cream-200 pt-4">
          {item.price ? (
            <span className="text-sm font-bold text-gold-600">
              {item.price}
              {item.priceNote && (
                <span className="ml-1 text-xs font-normal text-ink-700/50">{item.priceNote}</span>
              )}
            </span>
          ) : (
            <span />
          )}
          <Icon
            name="arrowRight"
            className="h-4 w-4 text-ink-700/30 transition group-hover:translate-x-1 group-hover:text-gold-600"
          />
        </div>
      </div>
    </Link>
  );
}

