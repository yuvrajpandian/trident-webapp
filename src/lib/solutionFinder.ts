/* ============================================================================
 * Solution Finder — decision-tree data & pure logic (no JSX).
 *
 * Consumed by the client component at src/components/SolutionFinder.tsx.
 * Every recommendation resolves to an ALREADY-EXISTING record in `spaces`,
 * `services` or `bundles` (src/lib/site.ts) — this file never invents a
 * price, feature, or product name. If you need to change what gets
 * recommended, change the mapping below; if you need to change a product's
 * price/features/title, change it in site.ts (the single source of truth)
 * and it will flow through here automatically.
 * ========================================================================== */

import { spaces, services, bundles } from "./site";

// ---- Step graph -------------------------------------------------------------
// Every question the tool can ask. "result" is the terminal state, not a
// question. See `getNextStep` below for the actual branching logic.
export type StepKey =
  | "q1_situation"
  | "a_support"
  | "a_frequency"
  | "b_need"
  | "b_address_ejari"
  | "b_address_workspace"
  | "b_ejari_usage"
  | "b_workspace_kind"
  | "b_compliance_kind"
  | "c_ejari"
  | "c_workspace_access"
  | "d_usage"
  | "e_workspace_kind"
  | "f_workspace"
  | "result";

export type QuestionKey = Exclude<StepKey, "result">;

// Answers are kept as plain strings (matching each question's option
// `value`s) rather than a per-question literal union, to keep this file
// readable — validity is enforced by only ever setting values that come
// from that question's own `options` array.
export type Answers = Partial<Record<QuestionKey, string>>;

export type Option = {
  value: string;
  label: string;
  sub?: string; // supporting text shown under the label
  icon?: string; // a key from Icon.tsx's icon dictionary
};

export type Question = {
  key: QuestionKey;
  level: number; // fixed position in its path, used for the progress bar
  title: string;
  options: Option[];
};

// ---- Questions --------------------------------------------------------------

const Q1_SITUATION: Question = {
  key: "q1_situation",
  level: 1,
  title: "What brings you to Trident Nexus today?",
  options: [
    {
      value: "newco",
      icon: "rocket",
      label: "I'm starting a new company in Dubai",
      sub: "I need help setting up the company from the beginning.",
    },
    {
      value: "haveco",
      icon: "building",
      label: "I already have a UAE company",
      sub: "My company exists, but I need workspace, Ejari or ongoing support.",
    },
    {
      value: "addressOnly",
      icon: "mail",
      label: "I only need a Dubai business address",
      sub: "I don't need a permanent desk or private office.",
    },
    {
      value: "needEjari",
      icon: "docCheck",
      label: "I need Ejari",
      sub: "I need an Ejari-backed business presence.",
    },
    {
      value: "needWorkspace",
      icon: "deskLamp",
      label: "I need somewhere to work",
      sub: "I need a desk, meeting room or private office.",
    },
    {
      value: "freeZone",
      icon: "shield",
      label: "My Free Zone company needs mainland presence",
      sub: "I need a compliant mainland address or workspace.",
    },
  ],
};

const A_SUPPORT: Question = {
  key: "a_support",
  level: 2,
  title: "How much support do you want?",
  options: [
    {
      value: "setupOnly",
      label: "Company setup only",
      sub: "Just the trade license and formation — I'll sort workspace separately.",
    },
    {
      value: "setupPlusSpace",
      label: "Setup + business address/workspace",
      sub: "Bundle my company formation with a workspace or address.",
    },
    {
      value: "complete",
      label: "Complete setup + ongoing support",
      sub: "Formation, workspace, visas and compliance — all handled.",
    },
  ],
};

const A_FREQUENCY: Question = {
  key: "a_frequency",
  level: 3,
  title: "Will you regularly work from the location?",
  options: [
    { value: "no", label: "No", sub: "I mainly need the registered address for my license." },
    { value: "occasionally", label: "Occasionally", sub: "I'll drop in sometimes, but I don't need a fixed desk." },
    { value: "regularly", label: "Regularly, or with a team", sub: "I need a consistent, dedicated place to work." },
  ],
};

const B_NEED: Question = {
  key: "b_need",
  level: 2,
  title: "What do you need now?",
  options: [
    { value: "address", label: "Business address", sub: "A registered address for my existing company." },
    { value: "ejari", label: "Ejari", sub: "An Ejari-backed business presence." },
    { value: "workspace", label: "Workspace", sub: "A desk, meeting room or private office." },
    { value: "visaPro", label: "Visas / PRO", sub: "Investor visas, employment visas or Emirates ID support." },
    { value: "bank", label: "Corporate bank account support", sub: "Help opening or managing a UAE business account." },
    { value: "compliance", label: "VAT / accounting / compliance", sub: "Tax registration, bookkeeping or ongoing filing." },
  ],
};

const B_ADDRESS_EJARI: Question = {
  key: "b_address_ejari",
  level: 3,
  title: "Do you need Ejari included with that address?",
  options: [
    { value: "no", label: "No", sub: "Just the registered address and tenancy contract." },
    { value: "yes", label: "Yes", sub: "I need an Ejari tenancy for licensing." },
  ],
};

const B_ADDRESS_WORKSPACE: Question = {
  key: "b_address_workspace",
  level: 4,
  title: "Will you need physical workspace access?",
  options: [
    { value: "no", label: "No", sub: "Just the compliant address and Ejari." },
    { value: "occasionally", label: "Occasionally", sub: "I'll drop in sometimes." },
    { value: "regularly", label: "Regularly, or with a team", sub: "I need a consistent, dedicated place to work." },
  ],
};

const B_EJARI_USAGE: Question = {
  key: "b_ejari_usage",
  level: 3,
  title: "How will you use the workspace?",
  options: [
    { value: "addressOnly", label: "I only need the compliant address / Ejari", sub: "No physical desk needed." },
    { value: "occasionally", label: "I may work there occasionally", sub: "A shared desk when I need it." },
    { value: "regularDesk", label: "I need a regular desk", sub: "My own assigned spot, day to day." },
    { value: "privateTeam", label: "I need a private office / team space", sub: "A dedicated room for me or my team." },
  ],
};

const B_WORKSPACE_KIND: Question = {
  key: "b_workspace_kind",
  level: 3,
  title: "What kind of workspace do you need?",
  options: [
    { value: "meeting", label: "Meeting space occasionally", sub: "Book a room by the hour or day." },
    { value: "flexible", label: "Flexible / shared desk", sub: "A real place to work, without a fixed seat." },
    { value: "dedicated", label: "Dedicated desk", sub: "My own assigned desk with storage." },
    { value: "private", label: "Private office", sub: "A private, lockable cabin for me or my team." },
  ],
};

const B_COMPLIANCE_KIND: Question = {
  key: "b_compliance_kind",
  level: 3,
  title: "Which matches best?",
  options: [
    { value: "vat", label: "VAT / corporate tax registration", sub: "Getting registered and compliant." },
    { value: "bookkeeping", label: "Ongoing bookkeeping & accounting", sub: "Monthly books, reporting and payroll." },
  ],
};

const C_EJARI: Question = {
  key: "c_ejari",
  level: 2,
  title: "Do you specifically require Ejari?",
  options: [
    { value: "no", label: "No", sub: "Just a registered address and tenancy contract." },
    { value: "yes", label: "Yes", sub: "I need an Ejari tenancy for licensing." },
  ],
};

const C_WORKSPACE_ACCESS: Question = {
  key: "c_workspace_access",
  level: 3,
  title: "Will you need physical workspace access?",
  options: [
    { value: "no", label: "No", sub: "Just the compliant address and Ejari." },
    { value: "sometimes", label: "Sometimes", sub: "I'll drop in occasionally." },
    { value: "regularly", label: "Regularly", sub: "I need a consistent, dedicated place to work." },
  ],
};

const D_USAGE: Question = {
  key: "d_usage",
  level: 2,
  title: "How will you use the workspace?",
  options: [
    { value: "addressOnly", label: "I only need the compliant address / Ejari", sub: "No physical desk needed." },
    { value: "occasionally", label: "I may work there occasionally", sub: "A shared desk when I need it." },
    { value: "regularDesk", label: "I need a regular desk", sub: "My own assigned spot, day to day." },
    { value: "privateTeam", label: "I need a private office / team space", sub: "A dedicated room for me or my team." },
  ],
};

const E_WORKSPACE_KIND: Question = {
  key: "e_workspace_kind",
  level: 2,
  title: "What kind of workspace do you need?",
  options: [
    { value: "meeting", label: "Meeting space occasionally", sub: "Book a room by the hour or day." },
    { value: "flexible", label: "Flexible / shared desk", sub: "A real place to work, without a fixed seat." },
    { value: "dedicated", label: "Dedicated desk", sub: "My own assigned desk with storage." },
    { value: "private", label: "Private office", sub: "A private, lockable cabin for me or my team." },
  ],
};

const F_WORKSPACE: Question = {
  key: "f_workspace",
  level: 2,
  title: "Do you need physical workspace too?",
  options: [
    { value: "addressOnly", label: "No — just the compliant address / Ejari", sub: "I mainly need mainland compliance." },
    { value: "flexible", label: "Yes — flexible workspace", sub: "I'll use it occasionally, not every day." },
    { value: "permanentTeam", label: "Yes — permanent team workspace", sub: "I need a consistent space for me or my team." },
  ],
};

export const QUESTIONS: Record<QuestionKey, Question> = {
  q1_situation: Q1_SITUATION,
  a_support: A_SUPPORT,
  a_frequency: A_FREQUENCY,
  b_need: B_NEED,
  b_address_ejari: B_ADDRESS_EJARI,
  b_address_workspace: B_ADDRESS_WORKSPACE,
  b_ejari_usage: B_EJARI_USAGE,
  b_workspace_kind: B_WORKSPACE_KIND,
  b_compliance_kind: B_COMPLIANCE_KIND,
  c_ejari: C_EJARI,
  c_workspace_access: C_WORKSPACE_ACCESS,
  d_usage: D_USAGE,
  e_workspace_kind: E_WORKSPACE_KIND,
  f_workspace: F_WORKSPACE,
};

// ---- Branching ---------------------------------------------------------------
// Given the answers so far, which step should be shown next? Returns
// "result" once enough has been answered to make a recommendation.
export function getNextStep(answers: Answers): StepKey {
  const situation = answers.q1_situation;
  if (!situation) return "q1_situation";

  switch (situation) {
    case "newco": {
      const support = answers.a_support;
      if (!support) return "a_support";
      if (support === "setupPlusSpace") {
        return answers.a_frequency ? "result" : "a_frequency";
      }
      return "result"; // setupOnly | complete
    }

    case "haveco": {
      const need = answers.b_need;
      if (!need) return "b_need";
      if (need === "visaPro" || need === "bank") return "result";

      if (need === "address") {
        if (!answers.b_address_ejari) return "b_address_ejari";
        if (answers.b_address_ejari === "no") return "result";
        return answers.b_address_workspace ? "result" : "b_address_workspace";
      }
      if (need === "ejari") return answers.b_ejari_usage ? "result" : "b_ejari_usage";
      if (need === "workspace") return answers.b_workspace_kind ? "result" : "b_workspace_kind";
      if (need === "compliance") return answers.b_compliance_kind ? "result" : "b_compliance_kind";
      return "result";
    }

    case "addressOnly": {
      if (!answers.c_ejari) return "c_ejari";
      if (answers.c_ejari === "no") return "result";
      return answers.c_workspace_access ? "result" : "c_workspace_access";
    }

    case "needEjari":
      return answers.d_usage ? "result" : "d_usage";

    case "needWorkspace":
      return answers.e_workspace_kind ? "result" : "e_workspace_kind";

    case "freeZone":
      return answers.f_workspace ? "result" : "f_workspace";

    default:
      return "q1_situation";
  }
}

// How many total steps will this specific path take, once we know enough
// to estimate it? Used purely for the "Step X of N" progress indicator —
// it may refine (e.g. 3 -> 4) as the visitor answers further questions.
export function totalStepsForPath(answers: Answers): number {
  const situation = answers.q1_situation;
  if (!situation) return 1;

  switch (situation) {
    case "newco":
      return answers.a_support === "setupPlusSpace" ? 3 : 2;

    case "haveco": {
      const need = answers.b_need;
      if (need === "visaPro" || need === "bank") return 2;
      if (need === "address") return answers.b_address_ejari === "yes" ? 4 : 3;
      if (need === "ejari" || need === "workspace" || need === "compliance") return 3;
      return 2;
    }

    case "addressOnly":
      return answers.c_ejari === "yes" ? 3 : 2;

    case "needEjari":
    case "needWorkspace":
    case "freeZone":
      return 2;

    default:
      return 2;
  }
}

// ---- Recommendation resolution ------------------------------------------------

export type ResultSpec =
  | { kind: "space"; slug: string }
  | { kind: "service"; slug: string }
  | { kind: "bundle"; slug: string }
  | { kind: "freeZoneMainland" };

// Pure mapping from a completed answer path to a recommendation. Every
// branch below mirrors `getNextStep` exactly — if you add a question there,
// add its resolution here too.
export function resolveResult(answers: Answers): ResultSpec | null {
  const situation = answers.q1_situation;
  if (!situation) return null;

  switch (situation) {
    case "newco": {
      const support = answers.a_support;
      if (support === "setupOnly") return { kind: "bundle", slug: "launch" };
      if (support === "complete") return { kind: "bundle", slug: "launch-grow" };
      if (support === "setupPlusSpace") {
        switch (answers.a_frequency) {
          case "no":
            return { kind: "space", slug: "virtual-office" };
          case "occasionally":
            return { kind: "space", slug: "flexi-desk" };
          case "regularly":
            return { kind: "space", slug: "private-office" };
          default:
            return null;
        }
      }
      return null;
    }

    case "haveco": {
      const need = answers.b_need;
      if (need === "visaPro") return { kind: "service", slug: "pro-visa-services" };
      if (need === "bank") return { kind: "service", slug: "bank-account" };

      if (need === "compliance") {
        return answers.b_compliance_kind === "bookkeeping"
          ? { kind: "service", slug: "accounting" }
          : { kind: "service", slug: "corporate-services" };
      }

      if (need === "address") {
        if (answers.b_address_ejari === "no") return { kind: "space", slug: "virtual-office-address" };
        switch (answers.b_address_workspace) {
          case "no":
            return { kind: "space", slug: "virtual-office" };
          case "occasionally":
            return { kind: "space", slug: "flexi-desk" };
          case "regularly":
            return { kind: "space", slug: "private-office" };
          default:
            return null;
        }
      }

      if (need === "ejari") {
        switch (answers.b_ejari_usage) {
          case "addressOnly":
            return { kind: "space", slug: "virtual-office" };
          case "occasionally":
            return { kind: "space", slug: "flexi-desk" };
          case "regularDesk":
            return { kind: "space", slug: "dedicated-desk" };
          case "privateTeam":
            return { kind: "space", slug: "private-office" };
          default:
            return null;
        }
      }

      if (need === "workspace") {
        switch (answers.b_workspace_kind) {
          case "meeting":
            return { kind: "space", slug: "meeting-room" };
          case "flexible":
            return { kind: "space", slug: "flexi-desk" };
          case "dedicated":
            return { kind: "space", slug: "dedicated-desk" };
          case "private":
            return { kind: "space", slug: "private-office" };
          default:
            return null;
        }
      }

      return null;
    }

    case "addressOnly": {
      if (answers.c_ejari === "no") return { kind: "space", slug: "virtual-office-address" };
      switch (answers.c_workspace_access) {
        case "no":
          return { kind: "space", slug: "virtual-office" };
        case "sometimes":
          return { kind: "space", slug: "flexi-desk" };
        case "regularly":
          return { kind: "space", slug: "private-office" };
        default:
          return null;
      }
    }

    case "needEjari": {
      switch (answers.d_usage) {
        case "addressOnly":
          return { kind: "space", slug: "virtual-office" };
        case "occasionally":
          return { kind: "space", slug: "flexi-desk" };
        case "regularDesk":
          return { kind: "space", slug: "dedicated-desk" };
        case "privateTeam":
          return { kind: "space", slug: "private-office" };
        default:
          return null;
      }
    }

    case "needWorkspace": {
      switch (answers.e_workspace_kind) {
        case "meeting":
          return { kind: "space", slug: "meeting-room" };
        case "flexible":
          return { kind: "space", slug: "flexi-desk" };
        case "dedicated":
          return { kind: "space", slug: "dedicated-desk" };
        case "private":
          return { kind: "space", slug: "private-office" };
        default:
          return null;
      }
    }

    case "freeZone": {
      switch (answers.f_workspace) {
        case "addressOnly":
          return { kind: "space", slug: "virtual-office" };
        case "flexible":
          return { kind: "space", slug: "flexi-desk" };
        case "permanentTeam":
          return { kind: "space", slug: "private-office" };
        default:
          return null;
      }
    }

    default:
      return null;
  }
}

// ---- Turning a ResultSpec into displayable content, from EXISTING data -------

export type ResolvedRecommendation = {
  title: string;
  price?: string;
  priceNote?: string;
  benefits: string[];
  href: string;
  short: string;
  icon: string; // Icon.tsx key — presentational only, for the result card's icon badge
};

// Bundles don't carry an `icon` field in site.ts (only spaces/services do),
// so this presentational-only mapping picks a suitable existing Icon.tsx
// icon per bundle — it changes nothing about bundle data or logic.
const BUNDLE_ICONS: Record<string, string> = {
  address: "docCheck",
  work: "deskLamp",
  launch: "rocket",
  "launch-grow": "diamond",
};

export function getRecommendation(spec: ResultSpec): ResolvedRecommendation | null {
  if (spec.kind === "space") {
    const item = spaces.find((s) => s.slug === spec.slug);
    if (!item) return null;
    return {
      title: item.title,
      price: item.price,
      priceNote: item.priceNote,
      benefits: item.features.slice(0, 5),
      href: `/spaces/#${item.slug}`,
      short: item.short,
      icon: item.icon,
    };
  }

  if (spec.kind === "service") {
    const item = services.find((s) => s.slug === spec.slug);
    if (!item) return null;
    return {
      title: item.title,
      price: item.price,
      priceNote: item.priceNote,
      benefits: item.features.slice(0, 5),
      href: `/services/#${item.slug}`,
      short: item.short,
      icon: item.icon,
    };
  }

  if (spec.kind === "bundle") {
    const bundle = bundles.find((b) => b.slug === spec.slug);
    if (!bundle) return null;
    return {
      title: bundle.name,
      price: bundle.price,
      priceNote: bundle.priceNote,
      benefits: bundle.features.slice(0, 5),
      href: "#bundles",
      short: bundle.positioning,
      icon: BUNDLE_ICONS[bundle.slug] ?? "diamond",
    };
  }

  // Not currently reachable from resolveResult (the freeZone branch always
  // resolves to a specific space product), kept for type completeness.
  return {
    title: "Mainland Presence",
    benefits: [],
    href: "/free-zone-mainland/",
    short: "The fast mainland Ejari and address solution for free zone companies.",
    icon: "shield",
  };
}

// ---- "Your Next Steps" ------------------------------------------------------
// Deliberately generic and honest (no invented timelines, guarantees, or
// approval claims) so it stays true for every possible recommendation.
export type NextStep = { title: string; text: string };

export function getNextSteps(recommendationTitle: string): NextStep[] {
  return [
    {
      title: "Review Your Recommendation",
      text: `Take a look at the ${recommendationTitle} details and pricing above.`,
    },
    {
      title: "Talk To An Advisor",
      text: "Confirm it's the right fit for your exact situation — WhatsApp us directly.",
    },
    {
      title: "We Handle The Rest",
      text: "Once confirmed, our team takes care of the paperwork and setup.",
    },
  ];
}

// ---- "Why this fits you" copy ------------------------------------------------
// One short, honest recap sentence per leaf (mirrors resolveResult's
// structure so the two stay easy to keep in sync), followed by the
// recommended item's own existing tagline from site.ts.

function pathSummary(answers: Answers): string {
  const situation = answers.q1_situation;

  switch (situation) {
    case "newco": {
      const support = answers.a_support;
      if (support === "setupOnly") {
        return "You're starting a new company and want the formation handled cleanly, without bundling in a workspace yet.";
      }
      if (support === "complete") {
        return "You're starting a new company and want everything handled — formation, workspace and ongoing support in one place.";
      }
      if (support === "setupPlusSpace") {
        switch (answers.a_frequency) {
          case "no":
            return "You're starting a new company and want your formation paired with a compliant address, without needing to work from it regularly.";
          case "occasionally":
            return "You're starting a new company and want your formation paired with a place you can work from occasionally.";
          case "regularly":
            return "You're starting a new company and need a consistent, dedicated place to work — for yourself or your team — alongside the formation.";
        }
      }
      return "";
    }

    case "haveco": {
      const need = answers.b_need;
      if (need === "visaPro") return "You already have a UAE company and need help with visas or PRO services.";
      if (need === "bank") return "You already have a UAE company and need support opening or managing a corporate bank account.";
      if (need === "compliance") {
        return answers.b_compliance_kind === "bookkeeping"
          ? "You already have a UAE company and need ongoing bookkeeping and accounting support."
          : "You already have a UAE company and need VAT or corporate tax registration.";
      }
      if (need === "address") {
        if (answers.b_address_ejari === "no") {
          return "You already have a UAE company and just need a registered business address, without Ejari.";
        }
        switch (answers.b_address_workspace) {
          case "no":
            return "You already have a UAE company, need Ejari, and don't need to work from the location regularly.";
          case "occasionally":
            return "You already have a UAE company, need Ejari, and want somewhere you can work occasionally.";
          case "regularly":
            return "You already have a UAE company, need Ejari, and want a consistent place to work — for yourself or your team.";
        }
      }
      if (need === "ejari") {
        switch (answers.b_ejari_usage) {
          case "addressOnly":
            return "You already have a UAE company and need Ejari for a compliant address, without a physical desk.";
          case "occasionally":
            return "You already have a UAE company, need Ejari, and want a shared desk for occasional use.";
          case "regularDesk":
            return "You already have a UAE company, need Ejari, and want your own assigned desk day to day.";
          case "privateTeam":
            return "You already have a UAE company, need Ejari, and want a private space for yourself or your team.";
        }
      }
      if (need === "workspace") {
        switch (answers.b_workspace_kind) {
          case "meeting":
            return "You already have a UAE company and mainly need meeting space on an occasional basis.";
          case "flexible":
            return "You already have a UAE company and want a flexible, shared desk to work from.";
          case "dedicated":
            return "You already have a UAE company and want your own dedicated desk.";
          case "private":
            return "You already have a UAE company and want a private office for yourself or your team.";
        }
      }
      return "";
    }

    case "addressOnly": {
      if (answers.c_ejari === "no") return "You need a Dubai business address, without Ejari.";
      switch (answers.c_workspace_access) {
        case "no":
          return "You need a Dubai business address with Ejari, without regular workspace access.";
        case "sometimes":
          return "You need a Dubai business address with Ejari, and a desk you can use sometimes.";
        case "regularly":
          return "You need a Dubai business address with Ejari, and a consistent place to work regularly.";
      }
      return "";
    }

    case "needEjari": {
      switch (answers.d_usage) {
        case "addressOnly":
          return "You need an Ejari-backed business presence, without a physical desk.";
        case "occasionally":
          return "You need Ejari and a shared desk you can use occasionally.";
        case "regularDesk":
          return "You need Ejari and your own regular desk.";
        case "privateTeam":
          return "You need Ejari and a private office for yourself or your team.";
      }
      return "";
    }

    case "needWorkspace": {
      switch (answers.e_workspace_kind) {
        case "meeting":
          return "You mainly need meeting space on an occasional basis.";
        case "flexible":
          return "You need a flexible, shared desk to work from.";
        case "dedicated":
          return "You need your own dedicated desk.";
        case "private":
          return "You need a private office for yourself or your team.";
      }
      return "";
    }

    case "freeZone": {
      switch (answers.f_workspace) {
        case "addressOnly":
          return "Your Free Zone company needs mainland compliance, without a physical desk.";
        case "flexible":
          return "Your Free Zone company needs mainland compliance, plus a flexible workspace you'll use occasionally.";
        case "permanentTeam":
          return "Your Free Zone company needs mainland compliance, plus a consistent workspace for yourself or your team.";
      }
      return "";
    }

    default:
      return "";
  }
}

export function explainRecommendation(answers: Answers, rec: ResolvedRecommendation): string {
  const clause = pathSummary(answers);
  return clause ? `${clause} ${rec.title} — ${rec.short}` : `${rec.title} — ${rec.short}`;
}

export function ctaWhatsappMessage(rec: ResolvedRecommendation): string {
  return `Hi Trident Nexus, I used the Find My Solution tool and it recommended ${rec.title}. I'd like to discuss this.`;
}

// ---- Analytics-ready instrumentation (no provider wired up yet) -------------

export type FinderEvent =
  | "solution_finder_started"
  | "solution_finder_answer"
  | "solution_finder_completed"
  | "solution_finder_cta_clicked";

/* Every call site in SolutionFinder.tsx already fires the right event at
   the right moment. When a real analytics provider (GA4/Plausible/etc.) is
   added, wire the actual dispatch call in here — nothing else needs to
   change. Intentionally a no-op today. */
export function trackFinderEvent(event: FinderEvent, payload?: Record<string, unknown>): void {
  void event;
  void payload;
}
