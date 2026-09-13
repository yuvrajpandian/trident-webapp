"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "./ui";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/site";
import {
  QUESTIONS,
  getNextStep,
  totalStepsForPath,
  resolveResult,
  getRecommendation,
  explainRecommendation,
  getNextSteps,
  ctaWhatsappMessage,
  trackFinderEvent,
  type Answers,
  type StepKey,
  type QuestionKey,
  type Question,
  type ResolvedRecommendation,
} from "@/lib/solutionFinder";

/* The real, guided "Find My Solution" tool — replaces the old static
   six-card Route Finder. A visitor answers 2-4 short questions and gets a
   single, clear recommendation pulled from EXISTING spaces/services/bundles
   data in site.ts (never invented pricing or products). Entirely
   client-side state — no backend, no external quiz library.

   Presented as a guided conversation rather than a form: a recap trail
   shows what the visitor has told us so far, progress is a quiet row of
   dots rather than a labelled bar, and the result reads like an advisor's
   recommendation rather than a quiz score. */
export function SolutionFinder() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState<StepKey>("q1_situation");

  function selectAnswer(key: QuestionKey, value: string) {
    const isFirstAnswer = Object.keys(answers).length === 0;
    const next: Answers = { ...answers, [key]: value };

    if (isFirstAnswer) trackFinderEvent("solution_finder_started");
    trackFinderEvent("solution_finder_answer", { step: key, value });

    setAnswers(next);
    const nextStep = getNextStep(next);
    setStep(nextStep);
    if (nextStep === "result") {
      trackFinderEvent("solution_finder_completed", { answers: next });
    }
  }

  function reset() {
    setAnswers({});
    setStep("q1_situation");
  }

  const spec = step === "result" ? resolveResult(answers) : null;
  const recommendation = spec ? getRecommendation(spec) : null;

  // A running recap of what's been answered so far, in the order it was
  // answered — shown as small conversational pills above the next question,
  // like a transcript, instead of a form the visitor has to re-check.
  const recap = Object.entries(answers)
    .map(([key, value]) => {
      const question = QUESTIONS[key as QuestionKey];
      return question?.options.find((o) => o.value === value)?.label;
    })
    .filter((label): label is string => Boolean(label));

  return (
    <section id="find-my-solution" className="scroll-mt-24 bg-cream-50 py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              <Icon name="trident" className="h-3.5 w-3.5" />
              Find My Solution
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Tell Us What You Need.
              <br />
              We&apos;ll Show You The Simplest Route.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700/70">
              Answer a few quick questions and we&apos;ll recommend the
              workspace, address or business support that best fits where you
              are today.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-700/40">
              Takes less than 60 seconds.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {step !== "result" && (
            <div key={`${step}-nav`} className="animate-pop-in">
              {recap.length > 0 && (
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                  {recap.map((label, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-700/55 shadow-sm shadow-ink-900/5"
                    >
                      <Icon name="check" className="h-3 w-3 text-gold-500" />
                      {label}
                    </span>
                  ))}
                </div>
              )}
              <DotProgress level={QUESTIONS[step].level} total={totalStepsForPath(answers)} />
            </div>
          )}

          <Reveal key={step}>
            <div className="animate-pop-in">
              {step === "result" && spec && recommendation ? (
                <ResultCard answers={answers} recommendation={recommendation} onReset={reset} />
              ) : step === "result" ? (
                <FallbackResult onReset={reset} />
              ) : (
                <QuestionCard question={QUESTIONS[step]} onSelect={(value) => selectAnswer(step, value)} />
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ DotProgress - */
// A quiet progress cue: small dots, the current one elongated into a soft
// gold pill. No "Step X of Y" label competing for attention.
function DotProgress({ level, total }: { level: number; total: number }) {
  const count = Math.max(total, level);
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const idx = i + 1;
        const done = idx < level;
        const current = idx === level;
        return (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              current ? "w-7 bg-gold-500" : done ? "w-1.5 bg-gold-500/50" : "w-1.5 bg-ink-900/10"
            }`}
          />
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ QuestionCard  */
function QuestionCard({
  question,
  onSelect,
}: {
  question: Question;
  onSelect: (value: string) => void;
}) {
  const cols = question.options.length >= 5 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div>
      <h3 className="text-center font-display text-2xl font-bold text-ink-900 sm:text-3xl">
        {question.title}
      </h3>
      <div className={`mt-10 grid gap-5 ${cols}`}>
        {question.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="card-premium group flex w-full items-start gap-4 rounded-2xl bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-gold-400/30 active:scale-[0.99]"
          >
            {opt.icon && (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-400 transition-transform duration-300 group-hover:scale-105">
                <Icon name={opt.icon} className="h-6 w-6" />
              </span>
            )}
            <span className="flex-1">
              <span className="block font-semibold text-ink-900">{opt.label}</span>
              {opt.sub && <span className="mt-1.5 block text-sm leading-relaxed text-ink-700/60">{opt.sub}</span>}
            </span>
            <Icon
              name="arrowRight"
              className="mt-1 h-4 w-4 shrink-0 text-ink-700/25 transition group-hover:translate-x-1 group-hover:text-gold-600"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- ResultCard */
// The single most visually dominant element in the section — a dark,
// spacious "advisor's recommendation" card rather than another form card.
function ResultCard({
  answers,
  recommendation,
  onReset,
}: {
  answers: Answers;
  recommendation: ResolvedRecommendation;
  onReset: () => void;
}) {
  const why = explainRecommendation(answers, recommendation);
  const steps = getNextSteps(recommendation.title);
  const message = ctaWhatsappMessage(recommendation);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 text-white shadow-2xl shadow-ink-950/25 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
      {/* Decorative glow — purely visual, matches the site's existing
          dark-section accent language (WhyDubai/Journey use the same
          blurred-circle technique). */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="relative">
        <div className="flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400 sm:h-16 sm:w-16">
            <Icon name={recommendation.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <div className="pt-1">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">
              Your Best Fit
            </span>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl">
              {recommendation.title}
            </h3>
          </div>
        </div>

        {recommendation.price && (
          <div className="mt-7 flex items-baseline gap-2 sm:ml-[76px]">
            <span className="font-display text-2xl font-bold text-white sm:text-3xl">
              {recommendation.price}
            </span>
            {recommendation.priceNote && (
              <span className="text-sm text-cream-100/60">{recommendation.priceNote}</span>
            )}
          </div>
        )}

        <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
            <Icon name="support" className="h-4 w-4" />
            Why We Recommend This
          </span>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/85 sm:text-base">{why}</p>
        </div>

        {answers.q1_situation === "freeZone" && (
          <p className="mt-5 text-xs leading-relaxed text-cream-100/55">
            Since your company is Free Zone-based, this also addresses the
            mainland presence many free zone companies now need under
            Executive Council Resolution 11 of 2025.{" "}
            <Link href="/free-zone-mainland/" className="font-semibold text-gold-400 hover:underline">
              Learn more about mainland compliance
            </Link>
            .
          </p>
        )}

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {recommendation.benefits.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-100/45">
                What&apos;s Included
              </h4>
              <ul className="mt-5 space-y-4">
                {recommendation.benefits.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-cream-100/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-100/45">
              Your Next Steps
            </h4>
            <ol className="mt-5 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-xs font-bold text-gold-400">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <div className="mt-0.5 text-sm leading-relaxed text-cream-100/60">{s.text}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-10 sm:flex-row">
          <Button
            href={recommendation.href}
            variant="gold"
            withArrow
            className="w-full sm:w-auto"
            onClick={() =>
              trackFinderEvent("solution_finder_cta_clicked", {
                cta: "view",
                href: recommendation.href,
              })
            }
          >
            View This Option
          </Button>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackFinderEvent("solution_finder_cta_clicked", { cta: "whatsapp" })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp an Advisor
          </a>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="mt-6 text-xs font-semibold uppercase tracking-wider text-cream-100/45 transition hover:text-gold-400"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ FallbackResult */
// Defensive only — every path in resolveResult() is exhaustive for valid
// option values, so this should be unreachable in practice.
function FallbackResult({ onReset }: { onReset: () => void }) {
  return (
    <div className="card-premium rounded-3xl bg-white p-8 text-center sm:p-12">
      <p className="text-ink-700/70">
        We couldn&apos;t quite match that combination — let&apos;s talk it
        through directly.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/contact/" variant="gold">
          Talk to an Advisor
        </Button>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-ink-700/60 underline-offset-4 hover:underline"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
