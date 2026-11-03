"use client";

import React from "react";
import {
  MessageCircle,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Star,
  Sparkles,
  Check
} from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

const PILLARS = [
  "100% Human Written (0% AI)",
  "Turnitin Report (<10% Similarity)",
  "Free Supervisor Revisions",
  "Completely Confidential & Safe"
];

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const quickWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content team, I need help with my research paper / assignment. Can you share details and price?"
  )}`;

  return (
    <section className="relative overflow-hidden bg-hero-ink text-white pt-12 pb-14 sm:pt-24 sm:pb-24">

      {/* Faint architectural grid + gold hairline */}
      <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-up">

        {/* Editorial Subtitle Tag with golden accent */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-gold-300/30 text-gold-100 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-6 sm:mb-7 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400 shrink-0" />
          <span className="tracking-wide">Academic Research &amp; Writing Desk • Indore, MP</span>
        </div>

        {/* Headline */}
        <h1 className="text-[2rem] sm:text-5xl lg:text-[4.1rem] font-bold text-white tracking-tight leading-[1.12] font-heading">
          Academic Research &amp; Writing, <br className="hidden sm:block" />
          <span className="text-gold-foil font-serif italic font-medium">
            Crafted with Scholarly Care.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
          From <strong className="text-white font-semibold">PhD Theses &amp; Journal Research Papers</strong> to <strong className="text-white font-semibold">Course Assignments &amp; Reports</strong> — in-depth literature synthesis, methodology structuring, and publication-ready drafting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-9">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-vibrant-emerald font-bold text-sm px-7 py-3.5 rounded-full"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult Academic Coordinator</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold font-bold text-sm px-7 py-3.5 rounded-full cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Share Your Topic &amp; Requirements</span>
          </button>
        </div>

        {/* Live Support Indicator */}
        <p className="text-[11px] text-ink-300 mt-4 flex items-center justify-center gap-2">
          <span className="relative flex w-2.5 h-2.5 shrink-0">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
          </span>
          <span className="font-medium">Academic Desk Active • Direct WhatsApp (+91 96855 53703) • 5-Min Reply</span>
        </p>

        {/* 2 Portfolio Cards: Research vs Assignments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mt-10 sm:mt-12 text-left">

          {/* Card 1: For PhD & Research Papers */}
          <a
            href="#services"
            className="group relative p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold-300/50 hover:bg-white/[0.07] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-ink-600 to-ink-800 border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-gold-300" />
              </div>
              <span className="text-xs font-bold text-gold-200 bg-gold-400/10 border border-gold-300/25 px-2.5 py-1 rounded-full font-mono whitespace-nowrap">
                ₹700 – ₹8,500
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-ink-300 font-semibold mt-5">
              PORTFOLIO I
            </span>
            <h2 className="text-lg font-bold text-white mt-1 font-heading">
              PhD &amp; Research Papers
            </h2>
            <p className="text-xs text-ink-300 mt-1.5 leading-relaxed flex-1">
              PhD Theses, Synopses, Scopus &amp; UGC Care Papers, Systematic Reviews &amp; Viva Slides.
            </p>
            <div className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-white/10 text-xs">
              <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Free Turnitin Report
              </span>
              <span className="inline-flex items-center gap-1 font-bold text-gold-300 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                View 8 Services <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* Card 2: For Assignments & Projects */}
          <a
            href="#assignments"
            className="group relative p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold-300/50 hover:bg-white/[0.07] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-gold-300 to-gold-600 flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6 text-ink-900" />
              </div>
              <span className="text-xs font-bold text-gold-200 bg-gold-400/10 border border-gold-300/25 px-2.5 py-1 rounded-full font-mono whitespace-nowrap">
                From ₹35 / Page
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-ink-300 font-semibold mt-5">
              PORTFOLIO II
            </span>
            <h2 className="text-lg font-bold text-white mt-1 font-heading">
              Assignments &amp; Projects
            </h2>
            <p className="text-xs text-ink-300 mt-1.5 leading-relaxed flex-1">
              Subject assignments, case studies, project files &amp; reports. Plain or creative layouts.
            </p>
            <div className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-white/10 text-xs">
              <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 24–48h Express Delivery
              </span>
              <span className="inline-flex items-center gap-1 font-bold text-gold-300 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                Calculate Rates <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

        </div>

        {/* 4 Core Pillars: 2x2 on phones, single row on larger screens */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-x-4 sm:gap-x-6 gap-y-3 mt-10 text-left text-xs sm:text-[13px] font-medium text-ink-200">
          {PILLARS.map((pillar) => (
            <div key={pillar} className="flex items-start sm:items-center gap-2">
              <span className="w-4 h-4 mt-px sm:mt-0 rounded-full bg-gold-400/15 border border-gold-300/30 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-gold-300" strokeWidth={3} />
              </span>
              <span>{pillar}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
