import { Container } from "./ui";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

/* Slim dark "Ready to Elevate Your Business?" bar used at the foot of pages,
   matching the reference design. */
export function CtaBand() {
  return (
    <section className="bg-ink-950">
      <Container className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4 text-center lg:text-left">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-900 sm:flex">
            <Icon name="phone" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-sm text-cream-100/60">
              Book a tour or speak with our business experts today.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/90 hover:text-gold-400"
          >
            <Icon name="phone" className="h-4 w-4 text-gold-500" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/90 hover:text-gold-400"
          >
            <Icon name="mail" className="h-4 w-4 text-gold-500" />
            {site.email}
          </a>
          <a
            href="/contact/"
            className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-ink-900 transition hover:bg-gold-600"
          >
            Book a Tour
          </a>
        </div>
      </Container>
    </section>
  );
}
