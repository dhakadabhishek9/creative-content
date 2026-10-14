"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US_POINTS, SUBJECT_DOMAINS } from "@/data/servicesData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-20 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 bg-stone-100 border border-stone-200/90 px-3.5 py-1 rounded-full">
            Scholarly Standards
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-heading">
            Why Scholars Work with Creative Content
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            Reliable academic writing and mentoring grounded in real subject research and transparent ethics.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: 7 Points from Flyer */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <span>Our Core Commitments</span>
              </h3>
              <span className="text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full">
                Indore Academic Desk
              </span>
            </div>

            <div className="space-y-4">
              {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">✓</span>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">{pt.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How We Work (4 Simple Steps) */}
          <div className="space-y-5">
            
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4">
                Our 4-Stage Editorial Workflow:
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">01</span>
                  <div>
                    <p className="font-extrabold text-slate-900">Consultation &amp; Requirement Review</p>
                    <p className="text-slate-500 mt-0.5">We review your topic, rubric, target journal, or institutional formatting guidelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-linear-to-br from-indigo-600 to-violet-700 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">02</span>
                  <div>
                    <p className="font-extrabold text-slate-900">Literature Synthesis &amp; Drafting</p>
                    <p className="text-slate-500 mt-0.5">Specialized subject mentors compose original chapters with verified peer-reviewed citations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-linear-to-br from-purple-600 to-pink-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">03</span>
                  <div>
                    <p className="font-extrabold text-slate-900">Turnitin Plagiarism &amp; AI Verification</p>
                    <p className="text-slate-500 mt-0.5">Full scan on Turnitin to ensure similarity remains under 10% with zero AI detection.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-linear-to-br from-emerald-600 to-teal-700 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">04</span>
                  <div>
                    <p className="font-extrabold text-slate-900">Delivery &amp; Free Supervisor Corrections</p>
                    <p className="text-slate-500 mt-0.5">On-time milestone delivery, followed by free revisions based on supervisor feedback.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Academic Desk Banner */}
            <div className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 flex items-center justify-between gap-4 border border-blue-900/40 shadow-md">
              <div>
                <p className="text-xs font-bold text-amber-300">Direct Academic Desk • Indore</p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Connect directly on WhatsApp for immediate topic evaluation and guidance.
                </p>
              </div>
              <a
                href="#calculator"
                className="shrink-0 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shadow-xs"
              >
                Discuss Topic →
              </a>
            </div>

          </div>

        </div>

        {/* Subject Domains Showcase */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-0.5 rounded-full">
              Broad Scholarly Coverage
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 mt-2 font-heading">
              Subject Disciplines We Support
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Experienced writers and subject experts across diverse academic streams:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {SUBJECT_DOMAINS.map((domain, dIdx) => (
              <span
                key={dIdx}
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-2xs hover:shadow-xs"
              >
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{domain}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
