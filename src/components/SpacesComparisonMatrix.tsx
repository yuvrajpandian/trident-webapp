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
          <thead>
            <tr className="border-b border-cream-200 bg-cream-50">
              <th className="w-44 px-5 py-5 text-xs font-bold uppercase tracking-wider text-ink-700/45">
                Compare Plans
              </th>
              {COMPARISON_SLUGS.map((slug) => {
                const item = getSpace(slug);
                const active = highlightSlug === slug;
                return (
                  <th key={slug} className={`px-5 py-5 align-top ${active ? "bg-gold-500/10" : ""}`}>
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
                <td className="px-5 py-4 font-semibold text-ink-900">{row.label}</td>
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
              <td className="px-5 py-5" />
              {COMPARISON_SLUGS.map((slug) => {
                const active = highlightSlug === slug;
                return (
                  <td key={slug} className={`px-5 py-5 ${active ? "bg-gold-500/10" : ""}`}>
                    <Button
                      href={`/spaces/${slug}/`}
                      variant={active ? "gold" : "outline"}
                      className="w-full justify-center"
                      withArrow
                    >
                      View
                    </Button>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Stacked cards — below tablet landscape, avoids horizontal scrolling */}
      <div className="space-y-5 lg:hidden">
        {COMPARISON_SLUGS.map((slug) => {
          const item = getSpace(slug);
          const row = COMPARISON_DATA[slug];
          const active = highlightSlug === slug;
          return (
            <div
              key={slug}
              className={`card-premium rounded-2xl bg-white p-6 ${active ? "ring-1 ring-gold-400/50" : ""}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <Link
                  href={`/spaces/${slug}/`}
                  className="font-display text-lg font-bold text-ink-900 hover:text-gold-600"
                >
                  {item.title}
                </Link>
                <span className="shrink-0 text-right text-sm font-semibold text-gold-600">{item.price}</span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <Detail label="Address" value={<CheckOrDash value={row.address} />} />
                <Detail label="Ejari" value={<CheckOrDash value={row.ejari} />} />
                <Detail label="Workspace" value={row.workspace} />
                <Detail label="Meeting Credit" value={row.meetingCredit} />
                <Detail label="Mail Handling" value={row.mail} />
                <Detail label="Upgrade Path" value={row.upgrade} />
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-ink-700/65">{row.idealFor}</p>
              <Button href={`/spaces/${slug}/`} variant={active ? "gold" : "outline"} className="mt-5 w-full justify-center" withArrow>
                View {item.title}
              </Button>
            </div>
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
    <Icon name="check" className="h-4 w-4 text-gold-600" />
  ) : (
    <span className="text-ink-700/25">—</span>
  );
}
