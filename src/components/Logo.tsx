import Link from "next/link";
import { site } from "@/lib/site";

/* Official Trident Nexus lockup (icon + wordmark), from the brand identity
   suite. Two files cover both backgrounds:
   - light=false (default): dark-ink mark, for white/cream backgrounds
   - light=true: white/saffron mark, for dark backgrounds (hero, footer, nav-on-dark) */
export function Logo({ light = false }: { light?: boolean }) {
  const src = light
    ? "/images/brand/trident-logo-light-on-dark.png"
    : "/images/brand/trident-logo-dark-on-light.png";

  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label={`${site.fullName} — home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={site.fullName}
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
