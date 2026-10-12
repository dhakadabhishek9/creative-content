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
    "Hello Satyam Sir, I need help with my research paper / assignment. Can you share details and price?"
  )}`;

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Mentor Tag */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold mb-5">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Quality Research. Perfect Results.</span>
          <span className="text-slate-300">•</span>
          <span className="font-bold text-slate-800">Teaching Life By Satyam</span>
        </div>

        {/* Easy Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Research &amp; Assignment <br />
          <span className="text-blue-700">Writing Services</span>
        </h1>

        {/* Easy Subtitle */}
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From <strong>PhD Theses &amp; Research Papers</strong> to <strong>College Assignments &amp; School Projects</strong> — 100% original work, low plagiarism (under 10%), zero AI, and always delivered on time.
        </p>

        {/* 2 Simple Cards: Research vs Assignments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-7 text-left">
          
          {/* Card 1: For PhD & Master's */}
          <a
            href="#services"
            className="p-5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 transition-all flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">PhD &amp; Master&apos;s Help</h2>
                <span className="text-[11px] font-extrabold text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200">
                  ₹700 – ₹8,500
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                PhD Thesis, Synopsis, Research Papers, Review Papers &amp; Viva Slides.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 mt-2">
                See 8 Services &amp; Prices <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Card 2: For College & School Assignments */}
          <a
            href="#assignments"
            className="p-5 rounded-2xl bg-rose-50/70 hover:bg-rose-100/70 border border-rose-200 transition-all flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">Assignments &amp; Projects</h2>
                <span className="text-[11px] font-extrabold text-rose-800 bg-white px-2 py-0.5 rounded border border-rose-200">
                  From ₹35 / Page
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                College assignments, school files &amp; office reports. Plain or with creative design.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 mt-2">
                See Page Rates &amp; Formats <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

        </div>

        {/* Simple Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-7 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Original Work</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>0% AI (No ChatGPT)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Free Plagiarism Report</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Free Teacher Corrections</span>
          </div>
        </div>

        {/* Clean Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp with Satyam Sir</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Get a Quick Price Quote</span>
          </button>
        </div>

        {/* Note from flyer */}
        <div className="mt-8 max-w-lg mx-auto p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2">
            <span className="text-lg">📌</span>
            <p className="text-xs text-amber-950 font-medium">
              <strong>Your Goals Our Priority!</strong> Any Subject, Any Topic, We Do It All!
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 text-xs font-bold text-blue-700 hover:underline"
          >
            See Rates →
          </a>
        </div>

      </div>
    </section>
  );
};
