import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { stats, processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — More Than a Workspace",
  description:
    "Trident Business Center Nexus is a Dubai-based partner providing premium workspaces and end-to-end business setup, helping companies thrive in Dubai's dynamic market.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="More than a workspace, we're your business partner"
        intro="We provide sophisticated business solutions that help entrepreneurs and companies establish, license, and grow in Dubai — under one roof, with one dedicated team."
      />

      {/* Story */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
              <Media imageKey="aboutReception" rounded="rounded-2xl" />
            </div>
          </div>
          <div className="space-y-5 text-ink-700/75">
            <SectionHeading eyebrow="Our Story" title="Built for founders, by people who know Dubai" />
            <p className="leading-relaxed">
              Setting up a business in a new country can be overwhelming —
              unfamiliar regulations, government departments, and paperwork at
              every turn. We built {site.name} to remove that friction entirely.
            </p>
            <p className="leading-relaxed">
              From a single point of contact, our clients get everything they
              need to establish and operate in the UAE: workspace, trade
              licenses, visas, and ongoing corporate compliance. We pride
              ourselves on clear advice, honest pricing, and getting things done.
            </p>
            <p className="leading-relaxed">
              Today we&apos;re proud to be the partner of choice for founders,
              SMEs, and international companies expanding into the region.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-ink-950 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900/40 px-6 py-8 text-center">
                <div className="font-display text-4xl font-bold text-gold-500">{s.value}</div>
                <div className="mt-1 text-sm text-cream-100/65">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream-50 py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: "rocket", title: "Our Mission", text: "To make business in Dubai simple, transparent, and fast — so founders can focus on building, not bureaucracy." },
              { icon: "shield", title: "Our Promise", text: "Honest, all-inclusive guidance and fully compliant service. No hidden fees, no surprises, ever." },
              { icon: "support", title: "Our Approach", text: "One dedicated advisor who knows your business and stays with you from formation through to growth." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-cream-200 bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Your business in four simple steps" center />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className="rounded-2xl border border-cream-200 bg-cream-50 p-6">
                <span className="font-display text-4xl font-bold text-gold-500">{step.n}</span>
                <h3 className="mt-3 font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
