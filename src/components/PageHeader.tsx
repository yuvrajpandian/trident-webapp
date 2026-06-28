import { Container } from "./ui";

/* Compact header used at the top of inner pages — dark band, gold eyebrow. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-10 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>
      <Container className="relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
            {eyebrow}
          </span>
          <span className="mt-3 block h-0.5 w-12 rounded bg-gold-500" />
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-100/75">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
