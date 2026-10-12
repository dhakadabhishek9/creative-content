"use client";

import React from "react";
import { Star, Quote, CheckCircle, GraduationCap } from "lucide-react";
import { TESTIMONIALS } from "@/data/servicesData";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-100/70 relative section-optimize">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Verified Scholar Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Trusted by <span className="text-blue-700">PhD &amp; Master&apos;s Scholars</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 font-medium">
            Read how researchers across India successfully defended their theses and published in Scopus/UGC Care journals with our support.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Scholar Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-black text-sm flex items-center justify-center">
                    {item.name.charAt(3) || "D"}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.institution}</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust numbers banner */}
        <div className="mt-12 bg-linear-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-amber-400">500+</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">PhD Theses &amp; Dissertations</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-sky-400">1,200+</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Research &amp; Review Papers</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-emerald-400">99.8%</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">DRC Committee Approval</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-amber-300">0%</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">AI Detection Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
};
