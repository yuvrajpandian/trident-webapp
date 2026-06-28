/* ============================================================================
 * SITE CONTENT — edit everything here.
 *
 * Single source of truth for the website. Update the values below and the whole
 * site updates. Lines marked  // TODO  are placeholders to confirm/replace.
 *
 * IMAGES: every photo on the site is an entry in the `images` map at the bottom.
 * Drop your real photo into /public/images and set its path here (e.g.
 * "/images/hero.jpg"). While a path is empty (""), an elegant labelled
 * placeholder is shown instead — so the site always looks finished.
 * ========================================================================== */

export const site = {
  // ---- Brand -------------------------------------------------------------
  name: "Trident Business Center",
  accent: "Nexus", // the gold sub-brand shown next to the logo
  fullName: "Trident Business Center Nexus",
  tagline: "Premium Business Solutions in the Heart of Dubai",
  description:
    "Trident Business Center Nexus provides premium workspaces and end-to-end business setup in Dubai — flexi desks, private offices, meeting rooms, virtual offices, company formation and PRO services.",

  // ---- Contact details ---------------------------------------------------
  phone: "+971 50 123 4567",
  phoneHref: "+971501234567",
  whatsapp: "971501234567",
  email: "info@tridentnexus.ae",
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

  url: "https://tridentnexus.ae",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const bookTourMessage =
  "Hi, I'd like to book a tour of Trident Business Center Nexus.";

// ---- Navigation -----------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Spaces", href: "/spaces/" },
  { label: "Why Dubai", href: "/why-dubai/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

// ---- Hero trust badges ----------------------------------------------------
export const heroBadges = [
  { icon: "building", title: "Prime Locations", text: "in Dubai" },
  { icon: "docCheck", title: "Flexible Solutions", text: "for Every Business" },
  { icon: "support", title: "Dedicated Support", text: "Every Step of the Way" },
];

// ---- Spaces (the "Our Solutions" cards) -----------------------------------
export type Item = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  blurb: string;
  features: string[];
  image: string; // key in `images`
};

export const spaces: Item[] = [
  {
    slug: "flexi-desk",
    icon: "deskLamp",
    title: "Flexi Desk",
    short: "Professional workspace with Ejari for your business setup.",
    blurb:
      "A cost-effective, professional workspace that comes with an Ejari tenancy contract — ideal for new companies that need a licensed address and a place to work.",
    features: [
      "Ejari tenancy contract for licensing",
      "Access to shared professional workspace",
      "High-speed internet & utilities included",
      "Use of reception & common areas",
      "Meeting room credits",
    ],
    image: "spaceFlexiDesk",
  },
  {
    slug: "private-office",
    icon: "doorOffice",
    title: "Private Office",
    short: "Fully furnished private offices tailored for your team.",
    blurb:
      "Move into a fully-furnished, lockable private office sized for your team. Reception, utilities, internet and maintenance are all taken care of.",
    features: [
      "Fully furnished & move-in ready",
      "Lockable, dedicated to your team",
      "Reception & mail handling included",
      "Scalable as your team grows",
      "Ejari tenancy for visas & licensing",
    ],
    image: "spacePrivateOffice",
  },
  {
    slug: "meeting-room",
    icon: "users",
    title: "Meeting Room",
    short: "Modern meeting rooms equipped for successful collaborations.",
    blurb:
      "Book modern, well-equipped meeting and conference rooms by the hour or day — complete with displays, video conferencing, and refreshment service.",
    features: [
      "Book by the hour or full day",
      "Screens & video-conferencing ready",
      "Seats 4–20 guests",
      "Refreshments & reception support",
      "Central, easy-to-reach location",
    ],
    image: "spaceMeetingRoom",
  },
  {
    slug: "virtual-office",
    icon: "mail",
    title: "Virtual Office",
    short: "Establish your business presence with a prestigious Dubai address.",
    blurb:
      "Get a prestigious Dubai business address, professional mail handling, and call answering — without the cost of a full-time physical office.",
    features: [
      "Prestigious Dubai business address",
      "Mail collection & forwarding",
      "Dedicated phone & call handling",
      "Registered address for your license",
      "Meeting rooms on demand",
    ],
    image: "spaceVirtualOffice",
  },
  {
    slug: "business-setup",
    icon: "diamond",
    title: "Business Setup",
    short: "End-to-end company formation and PRO services.",
    blurb:
      "From trade license to visas and bank account, our consultants handle your entire Dubai company formation so you can start operating quickly and compliantly.",
    features: [
      "Mainland trade license setup & renewal",
      "PRO & visa services",
      "Bank account opening assistance",
      "Corporate compliance & accounting",
      "One dedicated advisor, end to end",
    ],
    image: "spaceBusinessSetup",
  },
];

// ---- Services (the business-setup services page) --------------------------
export const services: Item[] = [
  {
    slug: "company-formation",
    icon: "building",
    title: "Company Formation & Trade License",
    short: "Mainland setup, licensing & renewals.",
    blurb:
      "End-to-end Dubai mainland company formation — choosing the right structure and activity, securing approvals, and issuing and renewing your trade license.",
    features: [
      "Mainland trade license setup & renewal",
      "Business activity selection & DED approvals",
      "Memorandum of Association (MOA) drafting",
      "Name reservation & initial approvals",
      "License amendments & activity additions",
    ],
    image: "serviceFormation",
  },
  {
    slug: "pro-visa-services",
    icon: "passport",
    title: "PRO & Visa Services",
    short: "Visas, Emirates ID & government liaison.",
    blurb:
      "Our PRO team handles all your government paperwork — investor and employment visas, Emirates ID, medical typing, and document attestation — accurately and on time.",
    features: [
      "Investor, partner & employment visas",
      "Visa renewals, cancellations & status changes",
      "Emirates ID & medical typing",
      "Document attestation & legal translation",
      "Government liaison (GDRFA, MOHRE, DED)",
    ],
    image: "serviceVisa",
  },
  {
    slug: "corporate-services",
    icon: "shield",
    title: "Corporate Services",
    short: "Accounting, VAT, corporate tax & compliance.",
    blurb:
      "Keep your business compliant and running smoothly — bookkeeping, VAT and corporate tax filing, auditing, and ongoing regulatory compliance, all under one roof.",
    features: [
      "Accounting & bookkeeping",
      "VAT registration & filing",
      "Corporate tax registration & compliance",
      "Annual auditing & advisory",
      "Payroll & WPS support",
    ],
    image: "serviceCorporate",
  },
  {
    slug: "bank-account",
    icon: "wallet",
    title: "Bank Account Opening",
    short: "Corporate bank account introductions.",
    blurb:
      "We introduce you to leading UAE banks and prepare your application to maximise approval chances, so you can start transacting as soon as your company is live.",
    features: [
      "Guidance on the right bank for you",
      "Application preparation & document review",
      "Introductions to relationship managers",
      "Support through compliance checks",
      "Ongoing banking advisory",
    ],
    image: "serviceBank",
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

// ---- Process steps --------------------------------------------------------
export const processSteps = [
  { n: "01", title: "Free Consultation", text: "Tell us your goals. We recommend the right space, license, and visa package." },
  { n: "02", title: "Documentation & Approvals", text: "We prepare your paperwork and secure approvals and name reservation." },
  { n: "03", title: "License Issued", text: "Your trade license is issued and your company is officially registered." },
  { n: "04", title: "Move In & Operate", text: "We process visas, open your bank account, and hand over the keys to your space." },
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
export const images: Record<string, { src: string; label: string }> = {
  hero: { src: "", label: "Office with Dubai skyline view" },
  aboutReception: { src: "", label: "Reception desk with Trident logo" },
  whyDubai: { src: "", label: "Dubai skyline at night" },

  spaceFlexiDesk: { src: "", label: "Flexi desk workspace" },
  spacePrivateOffice: { src: "", label: "Private office" },
  spaceMeetingRoom: { src: "", label: "Meeting room" },
  spaceVirtualOffice: { src: "", label: "Virtual office lounge" },
  spaceBusinessSetup: { src: "", label: "Business setup consultation" },

  serviceFormation: { src: "", label: "Company formation" },
  serviceVisa: { src: "", label: "PRO & visa services" },
  serviceCorporate: { src: "", label: "Corporate services" },
  serviceBank: { src: "", label: "Bank account opening" },

  blog1: { src: "", label: "Article cover" },
  blog2: { src: "", label: "Article cover" },
  blog3: { src: "", label: "Article cover" },
};
