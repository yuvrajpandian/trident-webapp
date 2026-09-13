import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { whyDubai } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Dubai — The World's Best Place to Do Business",
  description:
    "0% personal income tax, 100% foreign ownership, world-class infrastructure, and access to global markets — discover why Dubai is the ideal base for your business.",
};

const detail = [
  {
    icon: "globe",
    title: "Gateway Between East & West",
    text: "Dubai sits at the crossroads of Europe, Asia, and Africa — within an 8-hour flight of two-thirds of the world's population and a third of it within four hours.",
  },
  {
    icon: "wallet",
    title: "Tax-Friendly Environment",
    text: "0% personal income tax and one of the most competitive corporate tax regimes in the world, with extensive double-taxation treaties.",
  },
  {
    icon: "shield",
    title: "100% Foreign Ownership",
    text: "Own your mainland company outright for most activities — no local partner required — with full repatriation of capital and profits.",
  },
  {
    icon: "building",
    title: "World-Class Infrastructure",
    text: "Cutting-edge offices, logistics, telecoms, and one of the busiest international airports and ports on the planet.",
  },
  {
    icon: "users",
    title: "Global, Diverse Talent",
    text: "A safe, cosmopolitan city where over 190 nationalities live and work, making it easy to hire and to do business in any language.",
  },
  {
    icon: "chart",
    title: "Pro-Business Government",
    text: "Streamlined regulations, fast company formation, and government initiatives designed to attract and support entrepreneurs.",
  },
];

export default function WhyDubaiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Dubai"
        title="The perfect hub for your business"
        intro="There's a reason the world's companies choose Dubai. Here's what makes it one of the most attractive places on earth to start, run, and grow a business."
      />

      {/* Stats strip */}
      <section className="bg-ink-950 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
            {whyDubai.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-ink-900/40 p-7 text-center">
                <Icon name={s.icon} className="mx-auto h-8 w-8 text-gold-500" />
                <div className="mt-4 font-display text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-cream-100/65">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Detail grid */}
      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Advantages"
              title="Everything in your favour"
              center
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {detail.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 90}>
                <div className="card-premium h-full rounded-2xl bg-cream-50 p-7 transition hover:bg-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
