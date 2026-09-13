import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, spaces, services, site, bookTourMessage, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/65">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {site.social.instagram && (
                <SocialLink href={site.social.instagram} label="Instagram" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
              )}
              {site.social.linkedin && (
                <SocialLink href={site.social.linkedin} label="LinkedIn" d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 9h3v11.5h-3zM9 9h2.88v1.57h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v6.9h-3v-6.12c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.23v6.22H9z" />
              )}
              {site.social.facebook && (
                <SocialLink href={site.social.facebook} label="Facebook" d="M13.5 9V7.5c0-.7.3-1 1-1H16V3.5h-2.5C11 3.5 10 5 10 7v2H8v3h2v8.5h3.5V12H16l.5-3z" />
              )}
            </div>
          </div>

          {/* Spaces */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Spaces
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {spaces.map((s) => (
                <li key={s.slug}>
                  <Link href={`/spaces/${s.slug}/`} className="text-cream-100/65 transition hover:text-gold-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/#${s.slug}`} className="text-cream-100/65 transition hover:text-gold-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream-100/65 transition hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/65">
              <li className="flex gap-3">
                <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="flex gap-3 hover:text-gold-400">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-500" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-gold-400">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-gold-500" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-gold-500" />
                {site.hours}
              </li>
            </ul>
            <a
              href={whatsappLink(bookTourMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink-900 transition hover:bg-gold-600"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-100/45 sm:flex-row">
          <p>© {year} {site.fullName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Premium workspaces &amp; business setup in Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, d }: { href: string; label: string; d: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-gold-500 hover:text-gold-400"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d={d} />
      </svg>
    </a>
  );
}
