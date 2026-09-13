import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Dubai Business Setup Insights & Guides",
  description:
    "Practical guides and insights on setting up and growing your business in Dubai — licenses, visas, costs, workspaces, and more from Trident Nexus Business Centre.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Guides for doing business in Dubai"
        intro="Practical advice on company formation, licensing, visas, and workspace — written to help you make confident decisions about your business."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <article className="card-premium group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <Media imageKey={p.image} rounded="rounded-none" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 font-semibold uppercase tracking-wide text-gold-700">
                        {p.category}
                      </span>
                      <span className="text-ink-700/55">{p.date}</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold leading-snug text-ink-900">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/70">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                      Read Article
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ink-700/55">
            More articles coming soon. Have a question in the meantime?{" "}
            <a href="/contact/" className="font-semibold text-gold-600 hover:underline">
              Get in touch
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
