"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, bookTourMessage, whatsappLink } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change. Adjusted during render (the
  // React-recommended pattern for resetting state when a prop/value
  // changes) instead of an effect, so there's no extra render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-sm shadow-ink-900/10" : ""
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.replace(/\/$/, ""));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.8rem] font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-gold-600" : "text-ink-800 hover:text-gold-600"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-gold-500" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact/?intent=tour"
            className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink-900 shadow-sm transition hover:bg-gold-600"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-900 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-cream-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact/?intent=tour"
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink-900"
            >
              Book a Tour
            </Link>
            <a
              href={whatsappLink(bookTourMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm border border-cream-200 px-5 py-3 text-sm font-semibold text-ink-900"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
