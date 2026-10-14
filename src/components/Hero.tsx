"use client";

import React from "react";
import { 
  MessageCircle, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Star, 
  Sparkles
} from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const quickWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content team, I need help with my research paper / assignment. Can you share details and price?"
  )}`;

  return (
    <section className="relative overflow-hidden py-14 sm:py-24 border-b border-slate-200/80 bg-linear-to-b from-blue-50/40 via-[#FAF9F6] to-amber-50/20">
      
      {/* Radiant ambient glow blobs */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 translate-x-1/2 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Editorial Subtitle Tag with golden accent */}
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-50 via-white to-amber-50 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span className="tracking-wide">Academic Research &amp; Writing Desk • Indore, MP</span>
        </div>

        {/* Dynamic Colorful Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14] font-heading">
          Academic Research &amp; Writing, <br />
          <span className="bg-linear-to-r from-blue-700 via-indigo-600 to-blue-900 bg-clip-text text-transparent font-serif-editorial italic font-bold">
            Crafted with Scholarly Care.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From <strong>PhD Theses &amp; Journal Research Papers</strong> to <strong>Course Assignments &amp; Reports</strong> — in-depth literature synthesis, methodology structuring, and publication-ready drafting.
        </p>

        {/* 2 Attractive Cards: Research vs Assignments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mt-9 text-left">
          
          {/* Card 1: For PhD & Research Papers */}
          <a
            href="#services"
            className="p-6 rounded-2xl bg-linear-to-br from-white via-white to-blue-50/50 border border-blue-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-blue-700 font-bold bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  PORTFOLIO I
                </span>
                <span className="text-xs font-black text-blue-900 bg-blue-100/80 border border-blue-300 px-2.5 py-0.5 rounded-full font-mono">
                  ₹700 – ₹8,500
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mt-2 group-hover:text-blue-900 transition-colors">
                PhD &amp; Research Papers
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                PhD Theses, Synopses, Scopus &amp; UGC Care Papers, Systematic Reviews &amp; Viva Slides.
              </p>
              <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-blue-100 text-xs">
                <span className="text-[11px] font-bold text-emerald-700">✓ Free Turnitin Report</span>
                <span className="inline-flex items-center gap-1 font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                  View 8 Services <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </a>

          {/* Card 2: For Assignments & Projects */}
          <a
            href="#assignments"
            className="p-6 rounded-2xl bg-linear-to-br from-white via-white to-rose-50/50 border border-rose-200/90 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-500/30 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-rose-700 font-bold bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                  PORTFOLIO II
                </span>
                <span className="text-xs font-black text-rose-900 bg-rose-100/80 border border-rose-300 px-2.5 py-0.5 rounded-full font-mono">
                  From ₹35 / Page
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mt-2 group-hover:text-rose-900 transition-colors">
                Assignments &amp; Projects
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Subject assignments, case studies, project files &amp; reports. Plain or creative layouts.
              </p>
              <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-rose-100 text-xs">
                <span className="text-[11px] font-bold text-rose-700">✓ 24–48h Express Delivery</span>
                <span className="inline-flex items-center gap-1 font-bold text-rose-700 group-hover:translate-x-1 transition-transform">
                  Calculate Rates <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </a>

        </div>

        {/* 4 Core Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-9 text-xs sm:text-[13px] font-semibold text-slate-700">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>100% Human Written (0% AI)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Turnitin Report (&lt;10% Similarity)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Free Supervisor Revisions</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Completely Confidential &amp; Safe</span>
          </div>
        </div>

        {/* Attractive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-vibrant-emerald font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult Academic Coordinator</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-vibrant-blue font-bold text-sm px-7 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Share Your Topic &amp; Requirements</span>
          </button>
        </div>

        {/* Live Support Indicator with radiant green dot */}
        <p className="text-[11px] text-slate-600 mt-3 flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shadow-[0_0_10px_#25D366] animate-pulse"></span>
          <span className="font-semibold">Academic Desk Active • Direct WhatsApp (+91 96855 53703) • 5-Min Reply</span>
        </p>
      </div>
    </section>
  );
};
