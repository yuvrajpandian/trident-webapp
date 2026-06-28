import Link from "next/link";
import { site } from "@/lib/site";

/* Trident wordmark. Swap for an <Image> of your real logo when ready
   (drop it in /public and reference it here). */
export function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-ink-900";
  const sub = light ? "text-white/60" : "text-ink-900/55";
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.fullName} — home`}
    >
      {/* Trident mark */}
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold-500" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M8.5 21h7" />
        <path d="M5 6.5c0 4 2.8 6.5 7 6.5s7-2.5 7-6.5" />
        <path d="M5 6.5V4M19 6.5V4M12 13V4" />
      </svg>
      <span className="leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${text}`}>
          TRIDENT
        </span>
        <span className="ml-2 align-middle font-display text-lg font-semibold text-gold-500">
          {site.accent}
        </span>
        <span className={`block text-[0.6rem] font-medium uppercase tracking-[0.3em] ${sub}`}>
          Business Center
        </span>
      </span>
    </Link>
  );
}
