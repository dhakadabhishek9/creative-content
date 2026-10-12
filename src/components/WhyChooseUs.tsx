"use client";

import React from "react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Clock, 
  GraduationCap, 
  IndianRupee,
  FileCheck,
  Award
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS, SUBJECT_DOMAINS } from "@/data/servicesData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Our Standards
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Choose Creative Content?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dedicated academic writing assistance built on genuine scholarly rigor and student trust.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: 7 Points from Flyer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <span>Our Core Commitments</span>
              </h3>
              <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                🛡️ We&apos;ve Got You Covered!
              </span>
            </div>

            <div className="space-y-3.5">
              {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{pt.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How We Work (4 Simple Steps) */}
          <div className="space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4">
                How Your Order Is Completed:
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <p className="font-bold text-slate-900">Share Requirements on WhatsApp</p>
                    <p className="text-slate-500">Send your topic, university guidelines, or syllabus.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <p className="font-bold text-slate-900">Research &amp; Drafting</p>
                    <p className="text-slate-500">Our subject specialists prepare original, referenced content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <p className="font-bold text-slate-900">Plagiarism &amp; AI Verification</p>
                    <p className="text-slate-500">Double-checked for &lt;10% similarity and 0% AI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                  <div>
                    <p className="font-bold text-slate-900">Delivery &amp; Free Corrections</p>
                    <p className="text-slate-500">On-time submission file + free revisions based on feedback.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Life Banner */}
            <div className="bg-blue-900 text-white rounded-2xl p-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-amber-300">Teaching Life By Satyam</p>
                <p className="text-xs text-blue-100 mt-0.5">
                  Academic mentoring for research scholars &amp; students.
                </p>
              </div>
              <a
                href="#services"
                className="shrink-0 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-3 py-2 rounded-lg transition-colors"
              >
                Browse Services
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
