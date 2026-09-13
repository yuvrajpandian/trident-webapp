import Link from "next/link";
import { Button } from "./ui";
import { Icon } from "./Icon";
import { COMPARISON_SLUGS, COMPARISON_DATA, getSpace, type ComparisonRow } from "@/lib/spacesContent";

/* ============================================================================
 * The Spaces comparison matrix — deliberately the strongest conversion
 * section on the Workspace Collection: every locked flagship product,
 * side by side, on the attributes that actually decide a choice (address,
 * Ejari, workspace type, meeting-room credit, mail handling, who it's for,
 * and where to go next). Every value is read from existing product data —
 * see src/lib/spacesContent.ts for the sourcing.
 *
 * `highlightSlug` lets a product detail page embed this matrix with its
 * own column visually emphasised, without duplicating the table.
 *
 * Accessibility: column/row headers use proper <th scope>, included/not
 * included cells carry visually-hidden text (not just an aria-hidden icon),
 * and every "View" CTA names the product it links to.
 *
 * Mobile: a compact expandable summary per product (name + price + billing
 * period always visible; full attribute breakdown behind a disclosure) —
 * no horizontal scrolling, and billing period is never dropped.
 * ========================================================================== */

type Row = {
  key: string;
  label: string;
  render: (row: ComparisonRow, item: ReturnType<typeof getSpace>) => React.ReactNode;
};

const ROWS: Row[] = [
  {
    key: "price",
    label: "Starting Price",
    render: (_row, item) => (
      <span className="font-semibold text-ink-900">
        {item.price}
        {item.priceNote && <span className="block text-xs font-normal text-ink-700/50">{item.priceNote}</span>}
      </span>
    ),
  },
  { key: "address", label: "Registered Address", render: (row) => <CheckOrDash value={row.address} /> },
  { key: "ejari", label: "Ejari Tenancy", render: (row) => <CheckOrDash value={row.ejari} /> },
  { key: "workspace", label: "Physical Workspace", render: (row) => row.workspace },
  { key: "meeting", label: "Meeting Room Credit", render: (row) => row.meetingCredit },
  { key: "mail", label: "Mail Handling", render: (row) => row.mail },
  { key: "idealFor", label: "Ideal For", render: (row) => row.idealFor },
  { key: "upgrade", label: "Upgrade Path", render: (row) => row.upgrade },
];

export function SpacesComparisonMatrix({ highlightSlug }: { highlightSlug?: string }) {
  return (
    <div>
      {/* Table — tablet landscape and up */}
      <div className="hidden overflow-x-auto rounded-2xl border border-cream-200 bg-white lg:block">
        <table className="w-full min-w-[880px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparison of the six Trident Nexus workspace solutions by price, registered address, Ejari
            tenancy, physical workspace, meeting room credit, mail handling, ideal customer and upgrade path.
          </caption>
          <thead>
            <tr className="border-b border-cream-200 bg-cream-50">
              <th scope="col" className="w-44 px-5 py-5 text-xs font-bold uppercase tracking-wider text-ink-700/45">
                Compare Plans
              </th>
              {COMPARISON_SLUGS.map((slug) => {
                const item = getSpace(slug);
                const active = highlightSlug === slug;
                return (
                  <th key={slug} scope="col" className={`px-5 py-5 align-top ${active ? "bg-gold-500/10" : ""}`}>
                    <Link
                      href={`/spaces/${slug}/`}
                      className="font-display text-base font-bold leading-snug text-ink-900 hover:text-gold-600"
                    >
                      {item.title}
                    </Link>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.key} className="border-b border-cream-200 last:border-0">
                <th scope="row" className="px-5 py-4 text-left font-semibold text-ink-900">
                  {row.label}
                </th>
                {COMPARISON_SLUGS.map((slug) => {
                  const active = highlightSlug === slug;
                  return (
                    <td key={slug} className={`px-5 py-4 text-ink-700/70 ${active ? "bg-gold-500/5" : ""}`}>
                      {row.render(COMPARISON_DATA[slug], getSpace(slug))}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <th scope="row" className="px-5 py-5">
                <span className="sr-only">View product</span>
              </th>
              {COMPARISON_SLUGS.map((slug) => {
                const item = getSpace(slug);
                const active = highlightSlug === slug;
                return (
                  <td key={slug} className={`px-5 py-5 ${active ? "bg-gold-500/10" : ""}`}>
                    <Button
                      href={`/spaces/${slug}/`}
                      variant={active ? "gold" : "outline"}
                      className="w-full justify-center"
                      withArrow
                    >
                      View {item.title}
                    </Button>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Compact expandable summaries — below tablet landscape. Name, price
          and billing period are always visible; the full breakdown sits
          behind a disclosure, matching the FAQ pattern used elsewhere on
          the site, to keep mobile comparison short without dropping the
          billing period or introducing horizontal scrolling. */}
      <div className="space-y-4 lg:hidden">
        {COMPARISON_SLUGS.map((slug) => {
          const item = getSpace(slug);
          const row = COMPARISON_DATA[slug];
          const active = highlightSlug === slug;
          return (
            <details
              key={slug}
              className={`card-premium group overflow-hidden rounded-2xl bg-white ${active ? "ring-1 ring-gold-400/50" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5">
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-display text-base font-bold text-ink-900">{item.title}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-gold-600">
                    {item.price}
                    {item.priceNote && (
                      <span className="ml-1 text-xs font-normal text-ink-700/50">{item.priceNote}</span>
                    )}
                  </span>
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ink-700 transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-ink-700/65">{row.idealFor}</p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <Detail label="Address" value={<CheckOrDash value={row.address} />} />
                  <Detail label="Ejari" value={<CheckOrDash value={row.ejari} />} />
                  <Detail label="Workspace" value={row.workspace} />
                  <Detail label="Meeting Credit" value={row.meetingCredit} />
                  <Detail label="Mail Handling" value={row.mail} />
                  <Detail label="Upgrade Path" value={row.upgrade} />
                </dl>
                <Button
                  href={`/spaces/${slug}/`}
                  variant={active ? "gold" : "outline"}
                  className="mt-5 w-full justify-center"
                  withArrow
                >
                  View {item.title}
                </Button>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-ink-700/45">{label}</dt>
      <dd className="mt-1 font-medium text-ink-900">{value}</dd>
    </div>
  );
}

function CheckOrDash({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center gap-1.5">
      <Icon name="check" className="h-4 w-4 text-gold-600" />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-ink-700/25">
      <span aria-hidden="true">—</span>
      <span className="sr-only">Not included</span>
    </span>
  );
}
