/* ============================================================================
 * SITE CONTENT — edit everything here.
 *
 * Single source of truth for the website. Update the values below and the whole
 * site updates. Lines marked  // TODO  are placeholders to confirm/replace.
 *
 * PRODUCT & PRICING STRUCTURE (Sept 2026): restructured from a market-research
 * report — see /product-decision-report for the source. Company Formation and
 * Mainland Expansion are delivered directly by Trident (in-house). PRO/Visa,
 * Golden Visa, Corporate Tax/VAT, Accounting and Bank Account items are marked
 * `partnerDelivered: true` and are facilitated through licensed partners — never
 * billed as Trident's own regulated service. Bundle prices are real proposed
 * pricing, not placeholders — update `bundles` and item `price` fields directly
 * as pricing is finalised.
 *
 * IMAGES: every photo on the site is an entry in the `images` map at the bottom.
 * Drop your real photo into /public/images and set its path here (e.g.
 * "/images/hero.jpg"). While a path is empty (""), an elegant labelled
 * placeholder is shown instead — so the site always looks finished.
 * ========================================================================== */

export const site = {
  // ---- Brand -------------------------------------------------------------
  // Matches the official brand identity suite / logo pack.
  name: "Trident Nexus",
  accent: "Nexus", // the gold sub-brand shown next to the logo
  fullName: "Trident Nexus Business Centre",
  tagline: "Everything your business needs to start, work and grow in Dubai",
  description:
    "Trident Nexus Business Centre provides premium workspaces and end-to-end business setup in Dubai — flexi desks, private offices, meeting rooms, virtual offices, company formation and PRO services.",

  // ---- Contact details ---------------------------------------------------
  phone: "+971 50 123 4567", // TODO: confirm real number
  phoneHref: "+971501234567", // TODO: confirm, digits only
  whatsapp: "971501234567", // TODO: confirm
  email: "info@tridentnx.com", // TODO: confirm — founder's own address is yuvaraj@tridentnx.com if preferred
  address: {
    line1: "Office 000, Tower Name", // TODO: exact office & tower
    line2: "Business Bay", // TODO
    city: "Dubai, United Arab Emirates",
  },
  mapsQuery: "Business Bay, Dubai", // TODO: exact location

  hours: "Sunday – Thursday, 9:00 AM – 6:00 PM",

  social: {
    instagram: "", // e.g. "https://instagram.com/tridentnexus"
    linkedin: "",
    facebook: "",
  },

  // Free, no-backend form handling. Sign up at https://web3forms.com, paste key.
  web3formsKey: "", // TODO: paste your Web3Forms access key

  url: "https://tridentnx.com", // confirmed real domain (from brand signature)
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const bookTourMessage =
  "Hi, I'd like to book a tour of Trident Nexus Business Centre.";

// ---- Navigation -----------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Spaces", href: "/spaces/" },
  { label: "Why Dubai", href: "/why-dubai/" },
  { label: "India Founders", href: "/india-founders/" },
  { label: "Mainland Presence", href: "/free-zone-mainland/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

// ---- Hero trust badges ----------------------------------------------------
export const heroBadges = [
  { icon: "building", title: "Prime Locations", text: "in Dubai" },
  { icon: "bolt", title: "15–30 Min Ejari", text: "Not Days" },
  { icon: "support", title: "Dedicated Support", text: "Every Step of the Way" },
];

// ---- Shared product/service item shape -------------------------------------
export type Item = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  blurb: string;
  features: string[];
  image: string; // key in `images`
  price?: string; // e.g. "AED 4,500" — real proposed price, shown on-site
  priceNote?: string; // e.g. "per year" or "+ government fees"
  partnerDelivered?: boolean; // shows a "Delivered via licensed partner" disclosure
};

// ---- Spaces (workspace & Ejari products — all delivered directly) ---------
export const spaces: Item[] = [
  {
    slug: "ejari-fast-track",
    icon: "bolt",
    title: "Ejari Fast-Track",
    short: "Already have a company or space? Get compliant Ejari in 15–30 minutes.",
    blurb:
      "If you already have a company or workspace elsewhere and just need fast, compliant Ejari registration, this is the quickest route — issued in as little as 15–30 minutes, with light desk access included.",
    features: [
      "Ejari issued in 15–30 minutes",
      "Light shared-desk access included",
      "No long-term desk commitment required",
      "Ideal for renewals or switching centres",
      "Full DLD / Trakheesi compliance",
    ],
    image: "spaceEjari",
    price: "AED 3,200",
    priceNote: "per year",
  },
  {
    slug: "virtual-office",
    icon: "mail",
    title: "Virtual Office + Ejari",
    short: "A prestigious Dubai address with fast, compliant Ejari.",
    blurb:
      "Get a prestigious Dubai business address, professional mail handling, and call answering — with Ejari included, so your license stays fully compliant without the cost of a full-time office.",
    features: [
      "Prestigious Dubai business address",
      "Ejari tenancy contract included",
      "Mail collection & forwarding",
      "Dedicated phone & call handling",
      "2 hrs/month meeting room credit",
    ],
    image: "spaceVirtualOffice",
    price: "AED 4,500",
    priceNote: "per year",
  },
  {
    slug: "flexi-desk",
    icon: "deskLamp",
    title: "Flexi Desk + Ejari",
    short: "A real place to work, with Ejari and shared-desk access.",
    blurb:
      "A cost-effective, professional workspace that comes with an Ejari tenancy contract — ideal for founders who want a real place to work without committing to a private office.",
    features: [
      "Ejari tenancy contract included",
      "Shared professional workspace access",
      "High-speed internet & utilities included",
      "4 hrs/month meeting room credit",
      "Upgrade path to a Dedicated Desk",
    ],
    image: "spaceFlexiDesk",
    price: "AED 7,900",
    priceNote: "per year",
  },
  {
    slug: "dedicated-desk",
    icon: "doorOffice",
    title: "Dedicated Desk + Ejari",
    short: "Your own assigned desk, with lockable storage and Ejari.",
    blurb:
      "A permanently assigned desk with lockable storage — for founders and small teams who want the consistency of their own spot without the cost of a private office.",
    features: [
      "Permanently assigned desk",
      "Lockable storage included",
      "Ejari tenancy contract included",
      "6 hrs/month meeting room credit",
      "Priority upgrade path to Private Office",
    ],
    image: "spaceDedicatedDesk",
    price: "AED 13,500",
    priceNote: "per year",
  },
  {
    slug: "private-office",
    icon: "diamond",
    title: "Private Office",
    short: "Fully furnished private offices, priced per seat.",
    blurb:
      "Move into a fully-furnished, lockable private office sized for your team. Reception, utilities, internet and maintenance are all taken care of — priced per seat for teams of any size.",
    features: [
      "Fully furnished & move-in ready",
      "Priced per seat — scales with your team",
      "Reception & mail handling included",
      "Ejari tenancy for visas & licensing",
      "Custom quote for larger teams",
    ],
    image: "spacePrivateOffice",
    price: "From AED 2,200",
    priceNote: "per seat, per month",
  },
  {
    slug: "meeting-room",
    icon: "users",
    title: "Meeting Room",
    short: "Book by the hour or day — no membership required.",
    blurb:
      "Modern, well-equipped meeting and conference rooms available by the hour or day. Included as monthly credits with every workspace plan, or booked à la carte if you're not yet a member.",
    features: [
      "Book by the hour or full day",
      "Screens & video-conferencing ready",
      "Seats 4–20 guests",
      "Included as credits with every workspace plan",
      "Central, easy-to-reach location",
    ],
    image: "spaceMeetingRoom",
    price: "AED 120/hr",
    priceNote: "or AED 750/day, non-members",
  },
];

// ---- Services ---------------------------------------------------------------
// Company Formation & Mainland Expansion: delivered directly by Trident.
// Everything else: facilitated through licensed partners (partnerDelivered).
export const services: Item[] = [
  {
    slug: "company-formation",
    icon: "building",
    title: "Company Formation & Trade License",
    short: "Delivered directly by Trident — mainland setup, start to finish.",
    blurb:
      "End-to-end Dubai mainland company formation, delivered directly by our own team — choosing the right structure and activity, securing approvals, and issuing your trade license alongside your Ejari-ready workspace.",
    features: [
      "Mainland trade license setup & renewal",
      "Business activity selection & DED approvals",
      "Memorandum of Association (MOA) drafting",
      "Name reservation & initial approvals",
      "Delivered in-house — one team, start to finish",
    ],
    image: "serviceFormation",
    price: "AED 9,900",
    priceNote: "+ government fees (activity-dependent)",
  },
  {
    slug: "mainland-expansion",
    icon: "rocket",
    title: "Mainland Expansion",
    short: "Fast mainland Ejari & address for free zone companies — not a new company.",
    blurb:
      "Under Executive Council Resolution 11 of 2025, many free zone companies operating outside their zone must become mainland-compliant by 21 March 2026. We provide the mainland Ejari-ready address and coordinate the branch filing directly — unlocking direct UAE sales, tender eligibility, and smoother banking, without replacing your free zone licence.",
    features: [
      "Mainland Ejari-ready registered address",
      "Branch licence filing coordination",
      "Unlocks direct UAE customer sales",
      "Meets bank & government-tender mainland requirements",
      "Delivered in-house — one team, start to finish",
    ],
    image: "serviceExpansion",
    price: "From AED 12,900",
    priceNote: "+ government fees",
  },
  {
    slug: "pro-visa-services",
    icon: "passport",
    title: "PRO & Visa Services",
    short: "Visas, Emirates ID & government liaison — via licensed partner.",
    blurb:
      "Our licensed PRO partner handles all your government paperwork — investor and employment visas, Emirates ID, medical typing, and document attestation — accurately and on time.",
    features: [
      "Investor, partner & employment visas",
      "Visa renewals, cancellations & status changes",
      "Emirates ID & medical typing",
      "Document attestation & legal translation",
      "Government liaison (GDRFA, MOHRE, DED)",
    ],
    image: "serviceVisa",
    price: "From AED 2,800",
    priceNote: "per visa",
    partnerDelivered: true,
  },
  {
    slug: "golden-visa",
    icon: "diamond",
    title: "Golden & Investor Visa Track",
    short: "Long-term UAE residency — via licensed immigration partner.",
    blurb:
      "We coordinate your Golden Visa or investor visa application through our licensed immigration partner, from eligibility review through to Emirates ID issuance.",
    features: [
      "Eligibility review & document preparation",
      "Coordination via ICP / GDRFA-linked partner",
      "Investor & Golden Visa tracks",
      "Family sponsorship guidance",
      "Status updates throughout",
    ],
    image: "serviceGoldenVisa",
    price: "From AED 4,500",
    priceNote: "+ government fees",
    partnerDelivered: true,
  },
  {
    slug: "corporate-services",
    icon: "shield",
    title: "Corporate Tax & VAT",
    short: "Registration and ongoing compliance — via FTA-registered agent.",
    blurb:
      "Corporate tax and VAT registration and filing, delivered through our FTA-registered tax agent partner — keeping your business compliant and audit-ready.",
    features: [
      "Corporate tax registration",
      "VAT registration & filing",
      "Ongoing compliance retainer",
      "Annual filing support",
      "FTA-registered tax agent partner",
    ],
    image: "serviceCorporate",
    price: "AED 2,500",
    priceNote: "registration + AED 500/mo retainer",
    partnerDelivered: true,
  },
  {
    slug: "accounting",
    icon: "docCheck",
    title: "Accounting & Bookkeeping",
    short: "Monthly bookkeeping and reporting — via partner firm.",
    blurb:
      "Keep your books accurate and your filings on time with monthly bookkeeping, reporting, and payroll support, delivered through our accounting partner.",
    features: [
      "Monthly bookkeeping",
      "VAT-ready reporting",
      "Payroll & WPS support",
      "Annual financial statements",
      "Delivered via partner accounting firm",
    ],
    image: "serviceAccounting",
    price: "From AED 750",
    priceNote: "per month",
    partnerDelivered: true,
  },
  {
    slug: "bank-account",
    icon: "wallet",
    title: "Bank Account Concierge",
    short: "Documentation and introductions — final approval is the bank's.",
    blurb:
      "We prepare your application and introduce you to relationship managers at leading UAE banks. Approval always remains at the bank's sole discretion.",
    features: [
      "Guidance on the right bank for you",
      "Application preparation & document review",
      "Introductions to relationship managers",
      "Support through compliance checks",
      "Facilitation only — approval is the bank's decision",
    ],
    image: "serviceBank",
    price: "AED 1,500",
    priceNote: "flat facilitation fee",
    partnerDelivered: true,
  },
];

// ---- Route finder ("What do you need?") -----------------------------------
// A homepage segmentation section — helps a visitor self-select before they
// know what a "package" is called, and routes them straight to the right page.
export const routeFinder = [
  {
    n: "01",
    title: "I need a business address",
    text: "Explore virtual office and Ejari-ready address options for your license.",
    cta: "Explore Virtual Office",
    href: "/spaces/#virtual-office",
  },
  {
    n: "02",
    title: "I'm starting a company",
    text: "Bring your trade license, visas and workspace together in one journey.",
    cta: "Start My Company",
    href: "/services/#company-formation",
  },
  {
    n: "03",
    title: "I need somewhere to work",
    text: "Compare flexi desks, meeting rooms and fully furnished private offices.",
    cta: "View Workspaces",
    href: "/spaces/",
  },
  {
    n: "04",
    title: "I already have a company",
    text: "Add visa, PRO, banking, accounting and compliance support as you grow.",
    cta: "Explore Services",
    href: "/services/",
  },
  {
    n: "05",
    title: "I'm not sure where to start",
    text: "Tell us where you are today and we'll map out the clearest route forward.",
    cta: "Talk to an Advisor",
    href: "/contact/",
  },
  {
    n: "06",
    title: "My free zone company needs mainland presence",
    text: "Get compliant fast — mainland Ejari and address for banking, tenders, and selling to UAE customers.",
    cta: "Explore Mainland Presence",
    href: "/free-zone-mainland/",
  },
];

// ---- Why Dubai ------------------------------------------------------------
export const whyDubai = {
  reasons: [
    "Strategic Location Between East & West",
    "100% Foreign Ownership",
    "World-Class Infrastructure",
    "Tax Benefits & Business-Friendly Policies",
    "Access to Global Markets",
  ],
  stats: [
    { icon: "building", value: "0%", label: "Personal Income Tax" },
    { icon: "globe", value: "190+", label: "Nationalities Doing Business" },
    { icon: "chart", value: "#1", label: "Global Business Destination" },
    { icon: "plane", value: "4 Hours", label: "Flight to 1/3 of the World" },
  ],
};

// ---- Stats (about / trust) ------------------------------------------------
export const stats = [
  { value: "500+", label: "Companies Formed" }, // TODO: real numbers
  { value: "10+", label: "Years in Dubai" },
  { value: "1,200+", label: "Visas Processed" },
  { value: "98%", label: "Client Retention" },
];

// ---- Process steps ("the journey") -----------------------------------------
// More than an office — this is the Start / Establish / Operate / Grow
// narrative used on the homepage and About page.
export const processSteps = [
  {
    n: "01",
    title: "Start",
    text: "Tell us your business activity and goals — we help you choose the right license, workspace and visa route from day one.",
  },
  {
    n: "02",
    title: "Establish",
    text: "We coordinate your trade license, Ejari tenancy and workspace together, so the foundations of your company are set up right.",
  },
  {
    n: "03",
    title: "Operate",
    text: "From visas and Emirates ID to bank account opening and compliance — we handle the practical next steps as you start trading.",
  },
  {
    n: "04",
    title: "Grow",
    text: "Move from a flexi desk to a private office and add services as you need them — your setup evolves with your business, not against it.",
  },
];

// ---- Bundles ("A Simpler Way to Compare") -----------------------------------
// Real proposed bundle pricing (from a market-research restructure, Sept 2026),
// not placeholders. Company Formation is delivered in-house; the "ask us about
// instalments" note is deliberate — no financing partner is confirmed yet, so we
// don't promise interest-free terms until one is signed.
export type Bundle = {
  slug: string;
  tierLabel: string;
  name: string;
  positioning: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  note?: string;
};

export const bundles: Bundle[] = [
  {
    slug: "address",
    tierLabel: "Compliance Only",
    name: "Address",
    positioning:
      "Already have a company? Just need a compliant address and fast Ejari.",
    price: "AED 4,500",
    priceNote: "per year",
    features: [
      "Virtual office & registered address",
      "Ejari tenancy included",
      "Mail handling & call answering",
      "2 hrs/month meeting room credit",
    ],
    cta: "Explore Virtual Office",
    href: "/spaces/#virtual-office",
  },
  {
    slug: "work",
    tierLabel: "Most Flexible",
    name: "Work",
    positioning: "Need a real place to work, with the right address built in.",
    price: "AED 7,900",
    priceNote: "per year",
    features: [
      "Flexi Desk & Ejari included",
      "4 hrs/month meeting room credit",
      "Upgrade path to Dedicated Desk",
      "Company setup add-ons available",
    ],
    cta: "Compare Workspaces",
    href: "/spaces/",
    highlight: true,
  },
  {
    slug: "launch",
    tierLabel: "New Founders",
    name: "Launch",
    positioning: "Brand-new company — license, workspace and Ejari, one bill.",
    price: "AED 14,500",
    priceNote: "all-in, Year 1 · govt fees excl.",
    features: [
      "Mainland company formation (in-house)",
      "Flexi Desk + Ejari, 12 months",
      "1 investor visa facilitation",
      "Bank account concierge",
    ],
    cta: "Start My Company",
    href: "/services/#company-formation",
    note: "Ask us about instalment options.",
  },
  {
    slug: "launch-grow",
    tierLabel: "Complete",
    name: "Launch + Grow",
    positioning:
      "Everything handled — ideal for remote and India-based founders.",
    price: "AED 24,900",
    priceNote: "all-in, Year 1 · govt/partner fees excl.",
    features: [
      "Everything in Launch",
      "Dedicated Desk (upgraded workspace)",
      "Corporate tax & VAT registration",
      "1st-year accounting discount + Golden Visa consult",
    ],
    cta: "Talk to an Advisor",
    href: "/contact/",
    note: "Ask us about instalment options.",
  },
];

// ---- India Founders ---------------------------------------------------------
// The positioning wedge from the market-research report: no Bur Dubai centre
// combines fast Ejari + transparent pricing + India-founder onboarding.
export const indiaFounders = {
  eyebrow: "For India-Based Founders",
  title: "Launch your Dubai company without flying in.",
  intro:
    "You don't need to be in Dubai to start your company here. We handle the setup remotely, and WhatsApp is our primary channel from your first question to your trade license.",
  points: [
    {
      icon: "docCheck",
      title: "Remote, POA-based onboarding",
      text: "Sign via a notarised Power of Attorney — no need to travel to Dubai for company formation.",
    },
    {
      icon: "whatsapp",
      title: "WhatsApp-first service",
      text: "One WhatsApp thread from enquiry to trade license — document collection, updates, everything in one place.",
    },
    {
      icon: "wallet",
      title: "Rupee-equivalent pricing on request",
      text: "Ask us for an indicative rupee price alongside any AED quote.",
    },
    {
      icon: "bolt",
      title: "The same fast, compliant Ejari",
      text: "Every Trident client gets 15–30 minute Ejari issuance — without needing to be physically present.",
    },
  ],
  cta: "Ask About Remote Setup",
};

// ---- Remote onboarding steps (India Founders page) -------------------------
export const remoteOnboardingSteps = [
  {
    n: "01",
    title: "Message us on WhatsApp",
    text: "Tell us your business activity and goals. One thread, from first question to trade license.",
  },
  {
    n: "02",
    title: "Send your documents",
    text: "Share scanned passport, photos and activity details — we tell you exactly what's needed, nothing more.",
  },
  {
    n: "03",
    title: "Sign a notarised Power of Attorney",
    text: "A local notary in India certifies your POA, so our team can sign on your behalf in Dubai.",
  },
  {
    n: "04",
    title: "We file, you get updates",
    text: "Trade license, Ejari and any visa filing proceed while you get status updates over WhatsApp.",
  },
];

export const indiaFaqs = [
  {
    q: "Do I need to travel to Dubai to set up my company?",
    a: "No. With a notarised Power of Attorney, our team can complete company formation and Ejari registration on your behalf. Some steps — like certain visa medical tests or Emirates ID biometrics — do require your physical presence in the UAE, and we'll flag those clearly upfront.",
  },
  {
    q: "What is a Power of Attorney (POA), and how do I get one from India?",
    a: "A POA is a notarised document authorising a representative to sign on your behalf. We provide the exact wording needed, you get it notarised (and apostilled, if required) in India, and courier it to us — we guide you through each step over WhatsApp.",
  },
  {
    q: "Can I see pricing in rupees?",
    a: "Yes — ask us for an indicative rupee equivalent alongside any AED quote. We publish AED as our primary pricing and provide a rupee reference on request, since exchange rates move regularly.",
  },
  {
    q: "How do you communicate with clients based in India?",
    a: "WhatsApp is our primary channel — from your first enquiry through document collection, status updates, and after your company is formed. No need to juggle emails across time zones.",
  },
];

// ---- Free Zone → Mainland presence -----------------------------------------
// A second target segment, distinct from new founders: existing free zone
// companies that need mainland compliance. Trident is positioned as the fast
// mainland Ejari + address solution here — not a free zone formation provider.
export const freeZoneMainland = {
  eyebrow: "For Free Zone Companies",
  title: "Your free zone licence, backed by a mainland presence.",
  intro:
    "A free zone licence alone can't sell directly to UAE customers, and banks increasingly expect mainland substance. We provide the fast mainland Ejari and address that makes you compliant — not a new company, just what's missing.",
  deadline: {
    label: "Compliance Deadline",
    text: "Executive Council Resolution 11 of 2025 requires many free zone companies operating outside their zone to become mainland-compliant by 21 March 2026.",
  },
  reasons: [
    {
      icon: "shield",
      title: "You can't sell directly to UAE customers",
      text: "A free zone licence alone doesn't permit direct sales into the UAE mainland market — a registered mainland presence does.",
    },
    {
      icon: "wallet",
      title: "Banks scrutinise free zone accounts harder",
      text: "Major UAE banks — including Emirates NBD, ADCB, Mashreq and RAK Bank — generally prefer mainland-licensed businesses and apply extra scrutiny to free-zone-only accounts.",
    },
    {
      icon: "building",
      title: "Only mainland companies can bid on government tenders",
      text: "Government tenders are typically restricted to mainland-licensed entities — a free zone licence alone shuts that door.",
    },
    {
      icon: "chart",
      title: "Mainland presence signals credibility",
      text: "A mainland address and Ejari registration reads as more substantial to banks and larger enterprise clients than a free zone address alone.",
    },
  ],
  cta: "Check My Compliance Options",
};

export const freeZoneFaqs = [
  {
    q: "What is Executive Council Resolution 11 of 2025?",
    a: "It's a Dubai regulation requiring many free zone companies operating outside their free zone to establish mainland compliance — including a mainland-registered address — by 21 March 2026. Requirements vary by activity and free zone, so we recommend confirming your specific obligation with us or your legal advisor.",
  },
  {
    q: "Do I need to form an entirely new mainland company?",
    a: "Not necessarily. In many cases, what's required is a compliant mainland branch presence — a registered Ejari address and the associated branch filing — rather than dissolving or replacing your free zone company. We coordinate the branch filing directly.",
  },
  {
    q: "Can I keep operating my free zone licence at the same time?",
    a: "Yes — a mainland branch presence typically works alongside your existing free zone licence, giving you both the benefits you already have and mainland compliance where you need it.",
  },
  {
    q: "What happens if I miss the 21 March 2026 deadline?",
    a: "We can't advise on penalties — that's a question for DET or your legal counsel. What we can tell you is that mainland Ejari and address setup typically takes far less time than most companies expect, so there's no reason to wait until the deadline is close.",
  },
];

// ---- Testimonials ---------------------------------------------------------
export const testimonials = [
  {
    quote:
      "Trident made setting up my company in Dubai effortless. From the trade license to my visa, everything was handled in under two weeks.",
    name: "A. Rahman", // TODO: real testimonials
    role: "Founder, Tech Startup",
  },
  {
    quote:
      "The team is responsive and genuinely knowledgeable. The private office is excellent and the PRO support saved me countless trips.",
    name: "S. Mehta",
    role: "Managing Director, Trading Co.",
  },
  {
    quote:
      "Transparent and professional. I now run my entire UAE operation from their virtual office. Highly recommended.",
    name: "L. Fernandes",
    role: "Consultant",
  },
];

// ---- FAQ ------------------------------------------------------------------
export const faqs = [
  {
    q: "How long does it take to set up a company in Dubai?",
    a: "Most mainland trade licenses are issued within 3–7 working days once documentation is complete. Visa processing typically takes an additional 1–2 weeks.",
  },
  {
    q: "Do I need a local sponsor for a mainland license?",
    a: "For most activities, 100% foreign ownership is now permitted on the mainland. We'll confirm the rules for your specific activity during your free consultation.",
  },
  {
    q: "Can you help me open a corporate bank account?",
    a: "Yes. We introduce you to leading UAE banks and prepare your application to maximise approval chances. Final approval is always at the bank's discretion.",
  },
  {
    q: "Do you offer a registered address for licensing?",
    a: "Absolutely. Our Flexi Desk, virtual office, and private office packages include a registered, license-ready address with an Ejari tenancy contract.",
  },
  {
    q: "Can you guarantee my bank account, license or visa will be approved?",
    a: "No approval can ever be guaranteed — final decisions always rest with the relevant bank or government authority. What we guarantee is thorough preparation and honest guidance, to give your application the best possible chance.",
  },
  {
    q: "Which of your services are delivered by Trident directly, and which through partners?",
    a: "Company Formation, Mainland Expansion, and every workspace and Ejari product are delivered directly by our own team. PRO & Visa Services, Golden Visa, Corporate Tax & VAT, Accounting, and Bank Account Concierge are facilitated through licensed partners — we coordinate them closely, but they are never billed as Trident's own regulated service.",
  },
];

// ---- Blog (placeholder articles) ------------------------------------------
export const blogPosts = [
  {
    slug: "mainland-vs-freezone",
    title: "Mainland vs Free Zone: Which Is Right for Your Business?",
    excerpt:
      "Understand the key differences in ownership, office requirements, and market access to choose the best setup for your Dubai company.",
    category: "Business Setup",
    date: "June 2026",
    image: "blog1",
  },
  {
    slug: "cost-of-setup-2026",
    title: "The Real Cost of Setting Up a Company in Dubai in 2026",
    excerpt:
      "A transparent breakdown of license fees, visa costs, and office expenses so you can budget your Dubai business with confidence.",
    category: "Guides",
    date: "May 2026",
    image: "blog2",
  },
  {
    slug: "virtual-office-benefits",
    title: "5 Reasons a Virtual Office Makes Sense for New Founders",
    excerpt:
      "From a prestigious address to lower overheads, here's why a virtual office is the smart first step for many Dubai entrepreneurs.",
    category: "Workspace",
    date: "April 2026",
    image: "blog3",
  },
];

// ---- IMAGES ---------------------------------------------------------------
// Set a path (e.g. "/images/hero.jpg") to use a real photo; leave "" for an
// elegant labelled placeholder. Drop files into /public/images.
// NOTE: the office photos below are architectural renders of the actual
// finished Trident Nexus office — real photography hasn't been shot yet.
// Swap each `src` for a real photo once the shoot happens; nothing else
// needs to change.
export const images: Record<string, { src: string; label: string }> = {
  hero: { src: "/images/office/reception.jpg", label: "Reception desk with Trident Nexus signage" },
  aboutReception: { src: "/images/office/reception.jpg", label: "Reception desk with Trident logo" },
  whyDubai: { src: "", label: "Dubai skyline at night" },

  // No distinct render exists yet for Ejari Fast-Track — the only other
  // candidate (hero-open-workspace.jpg) is a near-duplicate crop of the same
  // desk row used for Flexi Desk, so this stays a placeholder rather than
  // showing a misleading third copy of the same shot.
  spaceEjari: { src: "", label: "Fast Ejari registration desk" },
  spaceFlexiDesk: { src: "/images/office/flexi-desk-workspace.jpg", label: "Flexi desk workspace" },
  spaceDedicatedDesk: { src: "/images/office/dedicated-desk-hallway.jpg", label: "Dedicated desk with storage" },
  spacePrivateOffice: { src: "/images/office/private-office-glass.jpg", label: "Private office" },
  spaceMeetingRoom: { src: "/images/office/meeting-room.jpg", label: "Meeting room" },
  spaceVirtualOffice: { src: "/images/office/lounge.jpg", label: "Virtual office lounge" },

  serviceFormation: { src: "", label: "Company formation" },
  serviceExpansion: { src: "", label: "Mainland expansion consultation" },
  serviceVisa: { src: "", label: "PRO & visa services" },
  serviceGoldenVisa: { src: "", label: "Golden visa consultation" },
  serviceCorporate: { src: "", label: "Corporate tax & VAT" },
  serviceAccounting: { src: "", label: "Accounting & bookkeeping" },
  serviceBank: { src: "", label: "Bank account opening" },

  indiaFounders: { src: "", label: "Remote onboarding for India-based founders" },
  freeZoneMainland: { src: "", label: "Mainland office and Ejari for free zone companies" },

  blog1: { src: "", label: "Article cover" },
  blog2: { src: "", label: "Article cover" },
  blog3: { src: "", label: "Article cover" },
};
