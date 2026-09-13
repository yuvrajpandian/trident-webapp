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
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={label}
        className={`photo-grade h-full w-full object-cover ${rounded} ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${rounded} ${className} ${
        dark
          ? "bg-ink-800 text-cream-100/60"
          : "bg-cream-100 text-ink-900/45 placeholder-grid"
      }`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            dark ? "bg-white/10 text-gold-400" : "bg-white text-gold-600"
          } shadow-sm`}
        >
          <Icon name="image" className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
