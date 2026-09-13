"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "./Icon";
import { services, spaces, site, whatsappLink, bookTourMessage } from "@/lib/site";

const interests = [...spaces, ...services];

type Status = "idle" | "submitting" | "success" | "whatsapp" | "error";

/* Enquiry delivery:
 *  - Primary, production path: POST to Web3Forms (api.web3forms.com) once
 *    `site.web3formsKey` is set — see the TODO comment on that field in
 *    src/lib/site.ts for exactly what's needed. No visitor-facing setup
 *    note is shown; this is documented for the developer/owner only.
 *  - Until a key is set: submitting composes the same enquiry as a
 *    WhatsApp message and opens it in a new tab — a real, working channel
 *    already used elsewhere on the site, rather than relying on the
 *    visitor's local email client (mailto). */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const hasKey = site.web3formsKey.trim().length > 0;
  const searchParams = useSearchParams();

  const serviceSlug = searchParams.get("service");
  const intent = searchParams.get("intent");

  const preselectedService = useMemo(() => {
    if (!serviceSlug) return "";
    const match = interests.find((i) => i.slug === serviceSlug);
    return match?.title ?? "";
  }, [serviceSlug]);

  const defaultMessage = useMemo(() => {
    if (intent === "tour") return bookTourMessage;
    if (preselectedService) return `Hi, I'm interested in your ${preselectedService}.`;
    return "";
  }, [intent, preselectedService]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No key yet → open a prefilled WhatsApp message instead of relying on
    // the visitor's local email app. This is a real, working channel (the
    // same one used site-wide), not a developer placeholder.
    if (!hasKey) {
      const parts = [
        `Hi Trident Nexus, I'd like to enquire.`,
        `Name: ${data.get("name")}`,
        data.get("phone") ? `Phone: ${data.get("phone")}` : null,
        data.get("service") ? `Service: ${data.get("service")}` : null,
        `Message: ${data.get("message")}`,
      ].filter(Boolean);
      window.open(whatsappLink(parts.join("\n")), "_blank", "noopener,noreferrer");
      setStatus("whatsapp");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-700/70">
          Your enquiry has been sent. One of our advisors will be in touch
          shortly. For anything urgent, message us on WhatsApp.
        </p>
        <a
          href={whatsappLink("Hi, I just submitted an enquiry on your website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    );
  }

  if (status === "whatsapp") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
          <Icon name="whatsapp" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
          Almost there!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-700/70">
          We&apos;ve opened WhatsApp with your enquiry details filled in —
          just hit send there and our team will reply directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-ink-700/60 underline-offset-4 hover:underline"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Web3Forms hidden fields */}
      <input type="hidden" name="access_key" value={site.web3formsKey} />
      <input
        type="hidden"
        name="subject"
        value={`New website enquiry — ${site.name}`}
      />
      {/* Honeypot spam trap */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            name="name"
            required
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone / WhatsApp">
          <input
            name="phone"
            placeholder="+971 ..."
            className={inputCls}
          />
        </Field>
        <Field label="Service of interest">
          <select name="service" defaultValue={preselectedService} className={inputCls}>
            <option value="" disabled>
              Select a service
            </option>
            {interests.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </Field>
      </div>

      <Field label="How can we help?" required>
        <textarea
          name="message"
          required
          rows={4}
          defaultValue={defaultMessage}
          placeholder="Tell us a little about your business and what you're looking for..."
          className={`${inputCls} resize-none`}
        />
      </Field>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-md shadow-gold-600/20 transition hover:brightness-105 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
        {status !== "submitting" && <Icon name="arrowRight" className="h-4 w-4" />}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
