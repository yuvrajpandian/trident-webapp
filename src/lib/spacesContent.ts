/* ============================================================================
 * Spaces content — comparison matrix, "why choose this", FAQ and related-
 * product data for the Workspace Collection and individual product pages.
 *
 * This is presentation content, not a new data model for products: every
 * fact here (prices, Ejari inclusion, workspace type, meeting-room credit,
 * mail handling) is a direct read of what's already published in `spaces`
 * (site.ts). Nothing is invented — no new prices, no new claims, no
 * guarantees. Kept in its own file (rather than growing site.ts further)
 * since it's structural/comparative content specific to the Spaces pages.
 * ========================================================================== */

import { spaces } from "./site";

// Canonical display order for the full catalogue (used for "related
// products" navigation between detail pages).
export const SPACES_ORDER = [
  "virtual-office-address",
  "virtual-office",
  "virtual-office-plus",
  "flexi-desk",
  "dedicated-desk",
  "private-office",
  "meeting-room",
] as const;

// The locked, flagship six — the comparison matrix is scoped to exactly
// these, per the locked product catalogue. Meeting Room is a supporting
// à la carte product (also included as credits with most workspace plans)
// rather than a primary tier, so it's not part of this matrix, though it
// still gets its own detail page.
export const COMPARISON_SLUGS = [
  "virtual-office-address",
  "virtual-office",
  "virtual-office-plus",
  "flexi-desk",
  "dedicated-desk",
  "private-office",
] as const;

export type ComparisonRow = {
  address: boolean;
  ejari: boolean;
  workspace: string;
  meetingCredit: string;
  mail: string;
  idealFor: string;
  upgrade: string;
};

export const COMPARISON_DATA: Record<string, ComparisonRow> = {
  "virtual-office-address": {
    address: true,
    ejari: false,
    workspace: "—",
    meetingCredit: "—",
    mail: "Collection point",
    idealFor: "Compliance-only founders who don't need a desk",
    upgrade: "Virtual Office + Ejari",
  },
  "virtual-office": {
    address: true,
    ejari: true,
    workspace: "—",
    meetingCredit: "2 hrs/month",
    mail: "Collection & forwarding",
    idealFor: "New licenses needing fast, compliant Ejari",
    upgrade: "Virtual Office Plus + Ejari",
  },
  "virtual-office-plus": {
    address: true,
    ejari: true,
    workspace: "Lounge access (3 hrs/day)",
    meetingCredit: "6 hrs/month",
    mail: "Collection, forwarding & PO Box",
    idealFor: "Growing teams needing lounge access & inspection support",
    upgrade: "Flexi Desk + Ejari — adds a desk; meeting credit changes to 4 hrs/month (from 6)",
  },
  "flexi-desk": {
    address: true,
    ejari: true,
    workspace: "Shared desk",
    meetingCredit: "4 hrs/month",
    mail: "Not included",
    idealFor: "Founders who want a real desk without a fixed seat",
    upgrade: "Dedicated Desk + Ejari",
  },
  "dedicated-desk": {
    address: true,
    ejari: true,
    workspace: "Assigned desk",
    meetingCredit: "6 hrs/month",
    mail: "Included",
    idealFor: "Solo operators wanting a consistent, permanent spot",
    upgrade: "Private Office",
  },
  "private-office": {
    address: true,
    ejari: true,
    workspace: "Private cabin",
    meetingCredit: "8 hrs/month",
    mail: "Reception & mail handling included",
    idealFor: "Teams needing a private, permanent office",
    upgrade: "Top tier — ask about multi-cabin suites",
  },
};

// "Why choose this" — value-proposition angles distinct from the raw
// feature list (which is shown separately as "What's Included").
export const WHY_CHOOSE: Record<string, string[]> = {
  "virtual-office-address": [
    "The simplest way to get a compliant registered address without paying for a desk you won't use.",
    "A clear upgrade path the moment your licence needs Ejari.",
    "Backed by the same team who'll handle your Ejari and workspace needs later.",
  ],
  "virtual-office": [
    "Ejari issued in as little as 15–30 minutes, not days.",
    "A prestigious Dubai address without the overhead of a physical office.",
    "Built-in meeting room credit for the times you do need to meet clients in person.",
  ],
  "virtual-office-plus": [
    "Everything in Virtual Office + Ejari, with real support for growing teams.",
    "A dedicated landline and daily lounge access make it feel like a genuine office presence.",
    "Government inspection support means you're not navigating a DED, Labour or Bank visit alone.",
  ],
  "flexi-desk": [
    "A real desk to work from, without committing to a private office.",
    "Ejari included, so your workspace and your licence stay in step.",
    "An easy step up from a virtual address as your business grows.",
  ],
  "dedicated-desk": [
    "Your own assigned spot — no daily scramble for a desk.",
    "Lockable storage for documents and equipment you'd rather not carry home.",
    "A priority upgrade path when you're ready for a private office.",
  ],
  "private-office": [
    "A private, lockable cabin sized to your team, not a one-size-fits-all seat count.",
    "Reception, utilities, internet and maintenance handled for you.",
    "Instalment payment plans, so cash flow isn't a barrier to the right space.",
  ],
  "meeting-room": [
    "Book by the hour or the day — no long-term commitment required.",
    "Included as credits with most workspace plans, so it's rarely an extra cost.",
    "A professional setting for client meetings, interviews or board sessions.",
  ],
};

export type ProductFaq = { q: string; a: string };

export const PRODUCT_FAQS: Record<string, ProductFaq[]> = {
  "virtual-office-address": [
    {
      q: "Does this include Ejari?",
      a: "No — Business Address is a registered address and tenancy contract only. If your licence needs Ejari, Virtual Office + Ejari is the next step up.",
    },
    {
      q: "Can I upgrade later?",
      a: "Yes — you can move up to Virtual Office + Ejari at any time as your requirements change.",
    },
    {
      q: "Is this enough on its own to register a company?",
      a: "It provides your registered address and signed tenancy contract; confirm with our team whether your specific licence also requires Ejari.",
    },
  ],
  "virtual-office": [
    {
      q: "How fast is Ejari issued?",
      a: "In as little as 15–30 minutes once your documents are ready.",
    },
    {
      q: "Can I use this for a licence renewal or when switching centres?",
      a: "Yes — it's commonly used for new licenses, renewals, and switching business centres.",
    },
    {
      q: "What if I need more support later?",
      a: "You can upgrade to Virtual Office Plus + Ejari anytime for a dedicated landline, daily lounge access and more meeting room credit.",
    },
  ],
  "virtual-office-plus": [
    {
      q: "What's different from Virtual Office + Ejari?",
      a: "Everything in Virtual Office + Ejari, plus a dedicated UAE landline, PO Box and courier notifications, daily lounge access, triple the meeting room credit, and support through DED, Labour and Bank inspections.",
    },
    {
      q: "How much notice do you need for inspection support?",
      a: "We ask for a 48-hour notice window to prepare and support you through a DED, Labour or Bank inspection.",
    },
    {
      q: "Is this suitable for a growing team?",
      a: "Yes — the daily lounge access and higher meeting room credit are built for businesses past their earliest stage.",
    },
  ],
  "flexi-desk": [
    {
      q: "Do I get my own desk?",
      a: "No — Flexi Desk + Ejari gives you shared professional workspace access, not a permanently assigned seat. For your own desk, see Dedicated Desk + Ejari.",
    },
    {
      q: "Is Ejari included?",
      a: "Yes — an Ejari tenancy contract is included.",
    },
    {
      q: "Can I upgrade to a permanent desk later?",
      a: "Yes — there's a direct upgrade path to a Dedicated Desk.",
    },
  ],
  "dedicated-desk": [
    {
      q: "Is this a shared desk?",
      a: "No — it's a permanently assigned desk with lockable storage, not shared with other members.",
    },
    {
      q: "Does it include Ejari?",
      a: "Yes — an Ejari tenancy contract is included.",
    },
    {
      q: "What's the next step up?",
      a: "Dedicated Desk + Ejari has a priority upgrade path to Private Office once you need a private, enclosed space.",
    },
  ],
  "private-office": [
    {
      q: "Why isn't there a fixed price shown?",
      a: "Private Office is rented on an annual lease per cabin, and cabins vary in size — pricing is quote-based, so get in touch for a tailored quote.",
    },
    {
      q: "Are instalments available?",
      a: "Yes — instalment payment plans are available; ask us for options.",
    },
    {
      q: "What's included?",
      a: "A fully furnished, move-in ready private cabin with reception and mail handling, plus an Ejari tenancy for your visas and licensing.",
    },
  ],
  "meeting-room": [
    {
      q: "Do I need to be a member to book?",
      a: "No — Meeting Room can be booked à la carte even if you're not a workspace member, though it's also included as monthly credits with most workspace plans.",
    },
    {
      q: "How many guests can it seat?",
      a: "Our meeting and conference rooms seat 4–20 guests.",
    },
    {
      q: "Can I book by the day?",
      a: "Yes — by the hour or the full day.",
    },
  ],
};

// Hand-curated related-product pairs — the products a visitor comparing
// this one would plausibly also consider.
export const RELATED_SLUGS: Record<string, string[]> = {
  "virtual-office-address": ["virtual-office", "flexi-desk"],
  "virtual-office": ["virtual-office-address", "virtual-office-plus"],
  "virtual-office-plus": ["virtual-office", "dedicated-desk"],
  "flexi-desk": ["virtual-office", "dedicated-desk"],
  "dedicated-desk": ["flexi-desk", "private-office"],
  "private-office": ["dedicated-desk", "virtual-office-plus"],
  "meeting-room": ["flexi-desk", "dedicated-desk"],
};

export function getSpace(slug: string) {
  const item = spaces.find((s) => s.slug === slug);
  if (!item) {
    throw new Error(`spacesContent: no spaces[] entry for slug "${slug}"`);
  }
  return item;
}

export function getRelatedSpaces(slug: string) {
  return (RELATED_SLUGS[slug] ?? []).map(getSpace);
}
