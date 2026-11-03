"use client";

import React from "react";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";
import { WHY_CHOOSE_US_POINTS, SUBJECT_DOMAINS } from "@/data/servicesData";

const WORKFLOW_STEPS = [
  {
    title: "Consultation & Requirement Review",
    desc: "We review your topic, rubric, target journal, or institutional formatting guidelines."
  },
  {
    title: "Literature Synthesis & Drafting",
    desc: "Specialized subject mentors compose original chapters with verified peer-reviewed citations."
  },
  {
    title: "Turnitin Plagiarism & AI Verification",
    desc: "Full scan on Turnitin to ensure similarity remains under 10% with zero AI detection."
  },
  {
    title: "Delivery & Free Supervisor Corrections",
    desc: "On-time milestone delivery, followed by free revisions based on supervisor feedback."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24 bg-paper-deep/70 border-y border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            <span className="w-6 h-px bg-gold-400" />
            Scholarly Standards
            <span className="w-6 h-px bg-gold-400" />
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-ink-900 tracking-tight mt-3 font-heading leading-tight">
            Why Scholars Work with <span className="font-serif italic font-medium text-gold-600">Creative Content</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-3 leading-relaxed">
            Reliable academic writing and mentoring grounded in real subject research and transparent ethics.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">

          {/* Left Column: Core Commitments */}
          <div className="card-elevated rounded-3xl p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-line/70 mb-6">
              <h3 className="text-base font-bold text-ink-900 flex items-center gap-2.5 font-heading">
                <span className="w-9 h-9 rounded-xl bg-ink-900 flex items-center justify-center">
                  <ShieldCheck className="w-4.5 h-4.5 text-gold-300" />
                </span>
                <span>Our Core Commitments</span>
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                Indore Academic Desk
              </span>
            </div>

            <div className="space-y-5">
              {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-ink-900">{pt.title}</h4>
                    <p className="text-xs text-ink-500 leading-relaxed mt-0.5">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How We Work (4 Simple Steps) */}
          <div className="space-y-5">

            <div className="card-elevated rounded-3xl p-5 sm:p-8">
              <h3 className="text-[11px] font-bold text-ink-500 uppercase tracking-[0.18em] mb-6">
                Our 4-Stage Editorial Workflow
              </h3>

              <ol className="relative">
                {WORKFLOW_STEPS.map((step, idx) => (
                  <li key={step.title} className="relative flex items-start gap-4 pb-6 last:pb-0">
                    {idx < WORKFLOW_STEPS.length - 1 && (
                      <span className="absolute left-[17px] top-10 bottom-1 w-px bg-linear-to-b from-gold-300 to-line" />
                    )}
                    <span className="relative w-9 h-9 rounded-full bg-ink-900 text-gold-300 font-serif italic text-base flex items-center justify-center shrink-0 ring-4 ring-gold-50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-ink-900">{step.title}</p>
                      <p className="text-xs text-ink-500 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct Academic Desk Banner */}
            <div className="relative overflow-hidden bg-ink-900 text-white rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="absolute -right-8 -bottom-12 w-48 h-48 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="text-xs font-bold text-gold-300 uppercase tracking-[0.12em]">Direct Academic Desk • Indore</p>
                <p className="text-xs text-ink-200 mt-1.5 leading-relaxed">
                  Connect directly on WhatsApp for immediate topic evaluation and guidance.
                </p>
              </div>
              <a
                href="#calculator"
                className="relative shrink-0 self-start sm:self-auto inline-flex items-center gap-1 btn-gold text-xs font-bold px-4 py-2.5 rounded-full"
              >
                Discuss Topic <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Subject Domains Showcase */}
        <div className="mt-8 card-elevated rounded-3xl p-5 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
              Broad Scholarly Coverage
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mt-2 font-heading">
              Subject Disciplines We Support
            </h3>
            <p className="text-xs sm:text-sm text-ink-500 mt-1">
              Experienced writers and subject experts across diverse academic streams:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {SUBJECT_DOMAINS.map((domain, dIdx) => (
              <span
                key={dIdx}
                className="inline-flex items-center gap-2 bg-paper hover:bg-white border border-line hover:border-gold-300 text-ink-700 hover:text-ink-900 text-xs font-medium px-3.5 py-2 rounded-full transition-all hover:shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>{domain}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
