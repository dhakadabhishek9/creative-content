"use client";

import React from "react";
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  Star,
  Sparkles
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface HeroProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const quickWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Joanna Mam, I am looking for academic guidance / writing support. Can you share availability and details?"
  )}`;

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Mentor Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Quality Research. Perfect Results.</span>
          <span className="text-slate-300">•</span>
          <span className="font-bold text-slate-800">Teaching Life By Joanna Mam</span>
        </div>

        {/* Clear, Relatable Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Complete Academic Writing &amp; <br />
          <span className="text-blue-700">Research Paper Services</span>
        </h1>

        {/* Practical Subtitle addressing real student stress */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From <strong>PhD Theses &amp; Scopus Research Papers</strong> to <strong>College Assignments &amp; School Projects</strong> — 100% human-crafted to your university ordinance, verified under 10% similarity, and delivered on-time.
        </p>

        {/* 2 Clear Student Gateway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8 text-left">
          
          {/* Card 1: For PhD & Masters */}
          <a
            href="#services"
            className="group p-5 rounded-2xl bg-blue-50/60 hover:bg-blue-50 border border-blue-200/80 transition-all flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">Research &amp; Thesis Desk</h2>
                <span className="text-[11px] font-extrabold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  From ₹700 – ₹8,500
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                PhD Thesis, Synopsis for DRC, Scopus Papers, PRISMA Reviews &amp; Viva PPTs.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 mt-2">
                Browse 8 Research Services <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Card 2: For College & School Assignments */}
          <a
            href="#assignments"
            className="group p-5 rounded-2xl bg-rose-50/60 hover:bg-rose-50 border border-rose-200/80 transition-all flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">Assignments &amp; Projects Desk</h2>
                <span className="text-[11px] font-extrabold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">
                  From ₹35 / Page
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                College assignments, school files &amp; office reports. Plain or With Creative Design.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 mt-2">
                Explore Formats &amp; Calculator <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

        </div>

        {/* Guarantees Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Original Content</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>0% AI Detection Guaranteed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Turnitin Similarity Report Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Free Guide Corrections</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp Directly</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Get an Instant Quote Brief</span>
          </button>
        </div>

        {/* Poster Sticky Note Callout */}
        <div className="mt-8 max-w-xl mx-auto p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">📌</span>
            <div>
              <p className="text-xs font-bold text-amber-950">Your Goals Our Priority!</p>
              <p className="text-[11px] text-amber-800">
                Any Subject, Any Topic, We Do It All — Engineering, Medical, Humanities, Commerce, Law &amp; Science.
              </p>
            </div>
          </div>
          <a
            href="#services"
            className="shrink-0 text-xs font-bold text-blue-700 hover:underline"
          >
            View Pricing →
          </a>
        </div>

      </div>
    </section>
  );
};
