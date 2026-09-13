import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, Button } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { SpacesComparisonMatrix } from "@/components/SpacesComparisonMatrix";
import { spaces, site, type Item } from "@/lib/site";
import { COMPARISON_DATA } from "@/lib/spacesContent";

export const metadata: Metadata = {
  title: "Workspace Solutions — Business Address, Ejari & Private Offices",
  description:
    "Compare every Trident Nexus workspace solution — Business Address, Virtual Office + Ejari, Virtual Office Plus + Ejari, Flexi Desk, Dedicated Desk and Private Office — and find the right fit for where your business is today.",
};

const spacesFaqs = [
  {
    q: "Which workspace is right for me?",
    a: "It depends on how often you need physical access and whether you're licensing a new company. Compare all six workspace solutions above, or use our Solution Finder for a personal recommendation.",
  },
  {
    q: "Do all workspace plans include Ejari?",
    a: "All except Business Address include an Ejari tenancy contract — Business Address is address-only by design, for licences that don't require Ejari.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes — every workspace tier has a clear upgrade path to the next one as your business grows, without starting the paperwork over.",
  },
  {
    q: "Do you offer a registered address for licensing?",
    a: "Absolutely. Every workspace solution here includes a registered, licence-ready address — Ejari-backed for every option except Business Address.",
  },
];

export default function SpacesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workspace Solutions"
        title="A workspace built around your business goals, not the other way round"
        intro="From a registered address to a private office for your team — every Trident Nexus workspace solution includes what your licence and your business actually need, with a clear path to upgrade as you grow."
      />

      {/* Collection */}
      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Collection"
              title="Six workspace solutions, one clear next step."
              intro="Every card below leads with who it's for and what it supports — the full feature list and pricing detail live one click away."
              center
            />
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n+1):nth-last-child(1)]:col-start-2">
            {spaces.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 90}>
                <SpacesPricingCard item={item} />
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-ink-700/55">
            Not sure where to start?{" "}
            <Link href="/#find-my-solution" className="font-semibold text-gold-600 hover:underline">
              Use our Solution Finder
            </Link>{" "}
            for a recommendation based on your situation.
          </p>
        </Container>
      </section>

      {/* Comparison */}
      <section id="compare" className="scroll-mt-24 bg-cream-50 py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compare Side By Side"
              title="Which Workspace Solution Fits You?"
              intro="The six flagship workspace solutions, compared on what actually decides a choice — address, Ejari, physical workspace, and where to go next."
              center
            />
          </Reveal>
          <div className="mt-14">
            <Reveal>
              <SpacesComparisonMatrix />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Frequently asked questions
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-premium mt-10 divide-y divide-cream-200 overflow-hidden rounded-2xl bg-white">
                {spacesFaqs.map((f) => (
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

      <CtaBand />

      {/* Collection schema — helps search engines understand this as a
          catalogue of distinct, priced products. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Trident Nexus Workspace Solutions",
            itemListElement: spaces.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/spaces/${item.slug}/`,
              name: item.title,
            })),
          }),
        }}
      />
    </>
  );
}

/* --------------------------------------------------------- SpacesPricingCard */
function SpacesPricingCard({ item }: { item: Item }) {
  const comparison = COMPARISON_DATA[item.slug as keyof typeof COMPARISON_DATA];

  return (
    <div
      id={item.slug}
      className="card-premium group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out hover:-translate-y-1.5"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Media
          imageKey={item.image}
          rounded="rounded-none"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>

        <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{item.short}</p>

        {item.goals && item.goals.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.goals.map((g) => (
              <span
                key={g}
                className="rounded-full bg-cream-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-700/55"
              >
                {g}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-gold-600">{item.price}</span>
          {item.priceNote && <span className="text-xs text-ink-700/55">{item.priceNote}</span>}
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {item.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700/75">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-700">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {comparison && (
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-700/40">
            Upgrade path{" "}
            <span className="font-normal normal-case text-ink-700/60">— {comparison.upgrade}</span>
          </p>
        )}

        <div className="mt-6 pt-2">
          <Button href={`/spaces/${item.slug}/`} variant="gold" withArrow className="w-full justify-center">
            View {item.title}
          </Button>
        </div>
      </div>
    </div>
  );
}
