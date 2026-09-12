import { Container, Button } from "./ui";
import { Icon } from "./Icon";
import { Media } from "./Media";
import { whatsappLink, type Item } from "@/lib/site";

/* Alternating image + feature-list sections, shared by Services and Spaces. */
export function ItemDetailList({ items }: { items: Item[] }) {
  return (
    <section className="bg-white py-20">
      <Container className="space-y-20">
        {items.map((item, i) => (
          <div
            key={item.slug}
            id={item.slug}
            className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center"
          >
            {/* Image */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink-900/10">
                <Media imageKey={item.image} rounded="rounded-2xl" />
              </div>
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                {item.partnerDelivered && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink-700/70">
                    <Icon name="shield" className="h-3 w-3" />
                    Via Licensed Partner
                  </span>
                )}
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold text-ink-900">
                {item.title}
              </h2>

              {item.price && (
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-gold-600">
                    {item.price}
                  </span>
                  {item.priceNote && (
                    <span className="text-sm text-ink-700/60">
                      {item.priceNote}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-4 leading-relaxed text-ink-700/70">{item.blurb}</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink-700/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/" variant="gold">
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
              {item.note && (
                <p className="mt-3 text-xs text-ink-700/55">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
