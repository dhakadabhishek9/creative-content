"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  FileText, 
  Users, 
  Clock, 
  Lock, 
  IndianRupee, 
  Award,
  Sparkles,
  FileCheck,
  AlertCircle
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS, SUBJECT_DOMAINS } from "@/data/servicesData";

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"turnitin" | "ai" | "confidentiality">("turnitin");

  return (
    <section id="why-choose-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Academic Rigor &amp; Trust</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-200">Creative Content?</span>
          </h2>
          <p className="text-base text-slate-300 mt-3 font-medium">
            Over 500+ successful PhD submissions and journal publications. Here is why scholars nationwide place their complete confidence in our academic writing services.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (Why Choose Us Card from Poster): 6 cols */}
          <div className="lg:col-span-6 bg-linear-to-br from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-7 sm:p-9 border border-blue-500/30 shadow-2xl flex flex-col justify-between relative">
            
            {/* Red Shield from Poster: "We've Got You Covered!" */}
            <div className="absolute -top-5 right-6 bg-linear-to-r from-red-600 to-rose-600 text-white font-black text-xs px-4 py-2 rounded-2xl shadow-lg border border-red-400 flex items-center gap-1.5 uppercase tracking-wider">
              <span>🛡️ We&apos;ve Got You Covered!</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-blue-400">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-heading">
                    Why Choose Us?
                  </h3>
                  <p className="text-xs text-blue-300">As featured in our official standards</p>
                </div>
              </div>

              {/* Points list from poster */}
              <div className="space-y-4">
                {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/40 hover:bg-white/10 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* University subjects covered pills */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5">
                50+ Academic Disciplines Covered:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUBJECT_DOMAINS.slice(0, 8).map((domain, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-[11px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700"
                  >
                    {domain}
                  </span>
                ))}
                <span className="text-[11px] bg-blue-900/60 text-blue-200 px-2.5 py-1 rounded-lg font-bold">
                  + 40 More
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Turnitin & AI Report Simulator (6 cols) */}
          <div className="lg:col-span-6 bg-slate-800/60 rounded-3xl p-7 sm:p-9 border border-slate-700/80 backdrop-blur-xl flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex items-center gap-2 mb-6 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-700">
                <button
                  onClick={() => setActiveTab("turnitin")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "turnitin"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Turnitin Similarity (4%)
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "ai"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  0% AI Verification
                </button>
                <button
                  onClick={() => setActiveTab("confidentiality")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "confidentiality"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Scholar NDA
                </button>
              </div>

              {/* Tab Content 1: Turnitin Simulator */}
              {activeTab === "turnitin" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xl">
                        T
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Official Turnitin Similarity Index</h4>
                        <p className="text-xs text-slate-400">Sample Dissertation Plagiarism Audit</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-emerald-400">3.8%</span>
                      <p className="text-[10px] text-emerald-300 font-bold uppercase">Pass (Threshold &lt; 10%)</p>
                    </div>
                  </div>

                  {/* Progress Breakdown */}
                  <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Internet Sources</span>
                        <span className="font-bold text-emerald-400">1.4%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[1.4%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Publications &amp; Journals</span>
                        <span className="font-bold text-emerald-400">1.8%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[1.8%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Student Papers</span>
                        <span className="font-bold text-emerald-400">0.6%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[0.6%]"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    ✓ You receive an official, un-excluded Turnitin digital PDF report with highlighted sources prior to final handover.
                  </p>
                </div>
              )}

              {/* Tab Content 2: 0% AI Verification */}
              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xl">
                        AI
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Generative AI Detector Audit</h4>
                        <p className="text-xs text-slate-400">Turnitin AI + GPTZero Authenticity Test</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-emerald-400">0%</span>
                      <p className="text-[10px] text-emerald-300 font-bold uppercase">100% Human Authored</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Zero ChatGPT / LLM Generation Hallucinations</span>
                    </div>
                    <p className="text-slate-400">
                      Every paragraph, statistical chart, and literature synthesis is researched from authentic indexed scientific papers (PubMed, IEEE Xplore, ScienceDirect).
                    </p>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Scholar NDA & Confidentiality */}
              {activeTab === "confidentiality" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Full Academic Non-Disclosure</h4>
                        <p className="text-xs text-slate-400">Data, Topic &amp; Identity Protection</p>
                      </div>
                    </div>
                    <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-2.5 py-1 rounded-md border border-amber-400/30">
                      Protected
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs text-slate-300">
                    <p>
                      • We will <strong>never</strong> re-publish, sell, or disclose your research topics, draft chapters, or raw dataset.
                    </p>
                    <p>
                      • Your personal contact information remains strictly confidential within our encrypted internal communications.
                    </p>
                    <p>
                      • Full ownership and intellectual property of the finalized research manuscript belongs exclusively to you.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 pt-5 border-t border-slate-700 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official YouTube channel: <strong className="text-amber-400">Teaching Life By Satyam</strong>
              </span>
              <a
                href="#services"
                className="text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                Browse Starting Rates →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
