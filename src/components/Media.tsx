import { Icon } from "./Icon";
import { images } from "@/lib/site";

/* Renders a real photo when a path is set in site.ts `images`, otherwise an
   elegant labelled placeholder so the design always looks finished.
   `imageKey` is a key in the `images` map. */
export function Media({
  imageKey,
  className = "",
  rounded = "rounded-2xl",
  dark = false,
}: {
  imageKey: string;
  className?: string;
  rounded?: string;
  dark?: boolean;
}) {
  const entry = images[imageKey];
  const src = entry?.src?.trim();
  const label = entry?.label ?? "Image";

  if (src) {
    return (
      // Intentional plain <img>: arbitrary image paths supplied via the
      // `images` map, resolved at static-export build time with no
      // next/image loader configured — switching to next/image would need
      // per-image loader work outside this cleanup's scope.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        className={`photo-grade h-full w-full object-cover ${rounded} ${className}`}
      />
    );
  }

  // Deliberate branded placeholder tile — used only where no real photo
  // exists yet. Styled as an intentional product tile (brand mark, gold
  // ring, "Photography Coming Soon" micro-label) rather than a checkerboard
  // "broken image" pattern, so it never reads as an error.
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${rounded} ${className} ${
        dark
          ? "from-ink-800 to-ink-900 text-cream-100/70"
          : "from-cream-100 to-cream-50 text-ink-900/55"
      }`}
    >
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full border ${
            dark
              ? "border-gold-400/30 bg-white/5 text-gold-400"
              : "border-gold-500/25 bg-white text-gold-600"
          } shadow-sm`}
        >
          <Icon name="trident" className="h-6 w-6" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide">
          {label}
        </span>
        <span className="text-[0.65rem] uppercase tracking-widest opacity-60">
          Photography Coming Soon
        </span>
      </div>
    </div>
  );
}
