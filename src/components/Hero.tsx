"use client";

import React from "react";
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck,
  Star
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface HeroProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const quickWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Satyam Sir / Creative Content Team, I need assistance with research writing / assignments. Please share details and pricing."
  )}`;

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Simple top trust pill */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold mb-6">
          <span className="flex items-center gap-1 text-amber-600">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>QUALITY RESEARCH. PERFECT RESULTS.</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-700">Teaching Life By Satyam</span>
        </div>

        {/* Human, clear headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          All-In-One Research &amp; <br />
          <span className="text-blue-700">Academic Writing Services</span>
        </h1>

        {/* Clear subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From <strong>PhD Theses &amp; Scopus Research Papers</strong> to <strong>College Assignments &amp; School Projects</strong> — 100% original, plagiarism-free, and crafted strictly to your university guidelines.
        </p>

        {/* Key flyer guarantees in a clean horizontal strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Original Content</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>AI-Free &amp; Plagiarism-Free</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Any Subject, Any Topic</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            <span>View Services &amp; Rates (@ ₹700 – ₹8500)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#assignments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
          >
            <span>Assignments &amp; Projects (@ ₹35/page)</span>
          </a>
        </div>

        {/* Sticky note banner from flyer */}
        <div className="mt-10 max-w-xl mx-auto p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">📌</span>
            <div>
              <p className="text-xs font-bold text-amber-950">Your Goals Our Priority!</p>
              <p className="text-[11px] text-amber-800">
                Direct guidance for Synopsis, PRISMA reviews, Thesis DRC defense &amp; College files.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCalculator}
            className="shrink-0 text-xs font-bold bg-white text-slate-800 border border-amber-300 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Quick Quote
          </button>
        </div>

      </div>
    </section>
  );
};
