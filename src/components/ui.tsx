import Link from "next/link";
import { Icon } from "./Icon";

/* Shared layout + UI primitives used across pages. */

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-600 ${
        center ? "flex-col" : ""
      }`}
    >
      {children}
      {center && <span className="divider-gold" />}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={center ? "flex flex-col items-center" : ""}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            {eyebrow}
          </span>
          <span className={`mt-3 block h-0.5 w-12 rounded bg-gold-500 ${center ? "" : ""}`} />
        </div>
      )}
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-cream-100/75" : "text-ink-700/70"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "outlineLight";
  className?: string;
  external?: boolean;
  withArrow?: boolean;
  onClick?: () => void;
};

const variants: Record<string, string> = {
  gold: "bg-gold-500 text-ink-900 hover:bg-gold-600 shadow-sm",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  outline: "border border-ink-900/20 text-ink-900 hover:border-gold-500 hover:text-gold-600",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  external = false,
  withArrow = false,
  onClick,
}: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}
