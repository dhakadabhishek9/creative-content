"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

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
    <section id="assignments" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24 bg-linear-to-b from-rose-50/30 via-transparent to-pink-50/20 border-b border-rose-100/80 relative overflow-hidden">
      
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-rose-400/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-800 bg-linear-to-r from-rose-100 via-pink-100 to-rose-100 border border-rose-300 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            <span>Coursework, Projects &amp; Folios</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Student Assignments &amp; Project Files
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Meticulously typed, formatted, and referenced according to your faculty&apos;s exact submission guidelines.
          </p>
        </div>

        {/* 2 Specimen Cards: Standard vs Designed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
          
          {/* Plain Academic Card */}
          <div 
            onClick={() => setFormat("plain")}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer bg-white relative ${
              format === "plain" 
                ? "border-indigo-500 ring-4 ring-indigo-500/15 shadow-xl shadow-indigo-500/5 -translate-y-0.5" 
                : "border-slate-200 hover:border-indigo-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
              <span className="text-xs font-extrabold text-indigo-900 tracking-wide uppercase">
                Standard Academic Print
              </span>
              <span className="text-xs font-black text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full font-mono">
                ₹35 / Page
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Standard university format with 1-inch margins, standard serif/sans typography, double or 1.5 line spacing, and clean references.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${format === "plain" ? "bg-indigo-600 text-white shadow-xs" : "border-2 border-slate-300 text-transparent"}`}>
                ✓
              </span>
              <span>{format === "plain" ? "Selected Format" : "Click to select Standard"}</span>
            </div>
          </div>

          {/* With Design Card */}
          <div 
            onClick={() => setFormat("designed")}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer bg-linear-to-br from-white via-white to-rose-50/50 relative ${
              format === "designed" 
                ? "border-rose-500 ring-4 ring-rose-500/20 shadow-xl shadow-rose-500/10 -translate-y-0.5" 
                : "border-slate-200 hover:border-rose-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
              <span className="text-xs font-extrabold text-rose-900 tracking-wide uppercase">
                Designed &amp; Illustrated Folio
              </span>
              <span className="text-xs font-black text-white bg-linear-to-r from-rose-600 to-pink-600 px-3 py-1 rounded-full font-mono shadow-xs">
                ₹65 / Page
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Polished editorial layout with bespoke cover page, distinct chapter headers, callout boxes, and elegant charts for maximum impact.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${format === "designed" ? "bg-rose-600 text-white shadow-xs" : "border-2 border-slate-300 text-transparent"}`}>
                ✓
              </span>
              <span>{format === "designed" ? "Selected Format (Recommended)" : "Click to select Designed"}</span>
            </div>
          </div>

        </div>

        {/* Real-time Order & Calculator Bar */}
        <div className="bg-white rounded-2xl border border-rose-200/80 p-6 shadow-md shadow-rose-500/5 mb-7">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Page Count Picker */}
            <div className="sm:col-span-5">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Page Count:
                </label>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  {format === "plain" ? "₹35 / pg" : "₹65 / pg"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[5, 10, 15, 20, 25, 30].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPages(num)}
                    className={`flex-1 py-2 px-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      pages === num
                        ? "bg-linear-to-r from-rose-600 to-pink-600 text-white border-rose-600 shadow-md shadow-rose-600/30 -translate-y-0.5"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-300 hover:bg-rose-50/50"
                    }`}
                  >
                    {num}p
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Input */}
            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Subject or Topic:
              </label>
              <input
                type="text"
                placeholder="e.g. Constitutional Law, Supply Chain, AI..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Total and CTA */}
            <div className="sm:col-span-3 text-right flex flex-col justify-end">
              <div className="text-xl font-black text-slate-900 mb-2 text-center sm:text-right font-heading">
                ₹{total} <span className="text-xs font-normal text-slate-500">({pages} pages)</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 btn-vibrant-emerald font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit Project Brief via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Quick Perks */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-2 font-medium">
            <span className="flex items-center gap-1 text-amber-800 font-semibold">⚡ 24–48 Hour Urgent Turnaround Available</span>
            <span className="text-emerald-700 font-semibold">✓ Includes Custom Cover Page &amp; Academic References</span>
            <span className="text-slate-600 font-semibold">✓ Ready for Direct Submission</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
          <span>✓ Strictly Confidential</span>
          <span>•</span>
          <span>Carefully Researched &amp; Handled with Privacy</span>
        </div>

      </div>
    </section>
  );
};
