"use client";

import React, { useState } from "react";
import { MessageCircle, Check, FileText, Palette, Zap, ShieldCheck } from "lucide-react";

interface AssignmentsHubProps {
  whatsappNumber: string;
}

export const AssignmentsHub: React.FC<AssignmentsHubProps> = ({ whatsappNumber }) => {
  const [format, setFormat] = useState<"plain" | "designed">("designed");
  const [pages, setPages] = useState<number>(10);
  const [topic, setTopic] = useState<string>("");

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const pricePerPage = format === "plain" ? 35 : 65;
  const total = pricePerPage * pages;

  const generateWhatsAppMessage = () => {
    let msg = `*📚 ASSIGNMENT INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Format:* ${format === "plain" ? "Plain (₹35/page)" : "With Design (₹65/page - Creative Borders & Layouts)"}\n`;
    msg += `*Pages:* ${pages} Pages\n`;
    msg += `*Topic / Subject:* ${topic.trim() || "To be discussed on chat"}\n`;
    msg += `*Estimated Cost:* ₹${total}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi Creative Content team, please confirm delivery timeline and price!`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="assignments" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24 bg-paper-deep/70 border-y border-line relative overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-gold-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-10 w-[24rem] h-[24rem] bg-ink-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            <span className="w-6 h-px bg-gold-400" />
            Coursework, Projects &amp; Folios
            <span className="w-6 h-px bg-gold-400" />
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-ink-900 tracking-tight mt-3 font-heading leading-tight">
            Student Assignments &amp; <span className="font-serif italic font-medium text-gold-600">Project Files</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-3">
            Meticulously typed, formatted, and referenced according to your faculty&apos;s exact submission guidelines.
          </p>
        </div>

        {/* 2 Specimen Cards: Standard vs Designed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6" role="radiogroup" aria-label="Assignment format">

          {/* Plain Academic Card */}
          <div
            role="radio"
            aria-checked={format === "plain"}
            tabIndex={0}
            onClick={() => setFormat("plain")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFormat("plain");
              }
            }}
            className={`p-5 sm:p-7 rounded-3xl border-2 transition-all duration-300 cursor-pointer bg-white relative ${
              format === "plain"
                ? "border-ink-800 shadow-xl shadow-ink-900/10 -translate-y-0.5"
                : "border-transparent shadow-sm hover:border-ink-200 hover:shadow-md"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="w-11 h-11 rounded-2xl bg-ink-50 border border-ink-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-ink-700" />
              </span>
              <span className="text-sm font-bold text-ink-900 bg-ink-50 border border-ink-100 px-3 py-1 rounded-full font-mono">
                ₹35 / Page
              </span>
            </div>
            <h3 className="text-sm font-bold text-ink-900 tracking-wide uppercase font-heading">
              Standard Academic Print
            </h3>
            <p className="text-xs text-ink-500 leading-relaxed mt-2 mb-5">
              Standard university format with 1-inch margins, standard serif/sans typography, double or 1.5 line spacing, and clean references.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-700">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${format === "plain" ? "bg-ink-900 text-white" : "border-2 border-ink-200"}`}>
                {format === "plain" && <Check className="w-3 h-3" strokeWidth={3} />}
              </span>
              <span>{format === "plain" ? "Selected Format" : "Click to select Standard"}</span>
            </div>
          </div>

          {/* With Design Card */}
          <div
            role="radio"
            aria-checked={format === "designed"}
            tabIndex={0}
            onClick={() => setFormat("designed")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFormat("designed");
              }
            }}
            className={`p-5 sm:p-7 rounded-3xl border-2 transition-all duration-300 cursor-pointer bg-linear-to-br from-white to-gold-50 relative ${
              format === "designed"
                ? "border-gold-400 shadow-xl shadow-gold-500/15 -translate-y-0.5"
                : "border-transparent shadow-sm hover:border-gold-200 hover:shadow-md"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="w-11 h-11 rounded-2xl bg-linear-to-br from-gold-300 to-gold-500 flex items-center justify-center shadow-md shadow-gold-500/25">
                <Palette className="w-5 h-5 text-ink-900" />
              </span>
              <span className="text-sm font-bold btn-gold px-3 py-1 rounded-full font-mono">
                ₹65 / Page
              </span>
            </div>
            <h3 className="text-sm font-bold text-ink-900 tracking-wide uppercase font-heading">
              Designed &amp; Illustrated Folio
            </h3>
            <p className="text-xs text-ink-500 leading-relaxed mt-2 mb-5">
              Polished editorial layout with bespoke cover page, distinct chapter headers, callout boxes, and elegant charts for maximum impact.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-700">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${format === "designed" ? "bg-gold-500 text-white" : "border-2 border-gold-200"}`}>
                {format === "designed" && <Check className="w-3 h-3" strokeWidth={3} />}
              </span>
              <span>{format === "designed" ? "Selected Format (Recommended)" : "Click to select Designed"}</span>
            </div>
          </div>

        </div>

        {/* Real-time Order & Calculator Bar */}
        <div className="card-elevated rounded-3xl p-5 sm:p-7 mb-7">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-end">

            {/* Page Count Picker */}
            <div className="sm:col-span-5">
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-[11px] font-bold text-ink-500 uppercase tracking-[0.15em]">
                  Page Count
                </label>
                <span className="text-[11px] font-bold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                  {format === "plain" ? "₹35 / pg" : "₹65 / pg"}
                </span>
              </div>
              <div className="flex items-center gap-1 p-1 rounded-2xl bg-paper border border-line">
                {[5, 10, 15, 20, 25, 30].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPages(num)}
                    className={`flex-1 py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      pages === num
                        ? "bg-ink-900 text-white shadow-md shadow-ink-900/25"
                        : "text-ink-500 hover:text-ink-900 hover:bg-white"
                    }`}
                  >
                    {num}p
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Input */}
            <div className="sm:col-span-4">
              <label htmlFor="assignment-topic" className="block text-[11px] font-bold text-ink-500 uppercase tracking-[0.15em] mb-2.5">
                Subject or Topic
              </label>
              <input
                id="assignment-topic"
                type="text"
                placeholder="e.g. Constitutional Law, Supply Chain, AI..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-paper border border-line rounded-2xl px-3.5 py-3 text-xs text-ink-900 placeholder-ink-300 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-300/25 transition-all"
              />
            </div>

            {/* Total and CTA */}
            <div className="sm:col-span-3 flex flex-col">
              <div className="flex items-baseline justify-center sm:justify-end gap-1.5 mb-2.5">
                <span className="text-3xl font-bold text-ink-900 font-heading tabular-nums">₹{total}</span>
                <span className="text-xs text-ink-400">({pages} pages)</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 btn-vibrant-emerald font-bold text-xs py-3 px-3 rounded-full"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit Project Brief via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Quick Perks */}
          <div className="mt-6 pt-5 border-t border-line/70 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center sm:justify-between text-[11px] text-ink-500 gap-x-5 gap-y-2 font-medium">
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500" /> 24–48 Hour Urgent Turnaround Available</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Includes Custom Cover Page &amp; Academic References</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Ready for Direct Submission</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-ink-500">
          <ShieldCheck className="w-4 h-4 text-gold-500" />
          <span>Strictly Confidential</span>
          <span className="text-ink-200">•</span>
          <span>Carefully Researched &amp; Handled with Privacy</span>
        </div>

      </div>
    </section>
  );
};
