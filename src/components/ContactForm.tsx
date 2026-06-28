"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { services, spaces, site, whatsappLink } from "@/lib/site";

const interests = [...spaces, ...services];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const hasKey = site.web3formsKey.trim().length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No key yet → fall back to opening a prefilled email so no lead is lost.
    if (!hasKey) {
      const body = `Name: ${data.get("name")}\nEmail: ${data.get(
        "email"
      )}\nPhone: ${data.get("phone")}\nService: ${data.get(
        "service"
      )}\n\n${data.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Website enquiry"
      )}&body=${encodeURIComponent(body)}`;
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
          <select name="service" defaultValue="" className={inputCls}>
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
          placeholder="Tell us a little about your business and what you're looking for..."
          className={`${inputCls} resize-none`}
        />
      </Field>

      {!hasKey && (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-xs text-amber-800">
          Setup note: add your free Web3Forms key in{" "}
          <code className="font-mono">src/lib/site.ts</code> to receive
          submissions by email. Until then, this button opens your email app
          with the message pre-filled.
        </p>
      )}

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
