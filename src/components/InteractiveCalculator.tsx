"use client";

import React, { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface InteractiveCalculatorProps {
  selectedService: ServiceItem | null;
  whatsappNumber: string;
}

const QUICK_SERVICES = [
  { name: "Synopsis for PhD", price: "₹1,000" },
  { name: "Research Paper", price: "₹1,000" },
  { name: "Review / PRISMA Paper", price: "₹1,000" },
  { name: "PhD Thesis (All Chapters)", price: "₹8,500" },
  { name: "Master's Dissertation", price: "₹4,000" },
  { name: "Viva / Defense PPT", price: "₹700" },
  { name: "Assignments & Projects", price: "₹35/pg" },
  { name: "Other Custom Requirement", price: "Custom" }
];

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  selectedService,
  whatsappNumber
}) => {
  const [chosenService, setChosenService] = useState<string>("Research Paper");
  const [prevSelectedService, setPrevSelectedService] = useState<ServiceItem | null>(null);

  if (selectedService !== prevSelectedService) {
    setPrevSelectedService(selectedService);
    if (selectedService) {
      setChosenService(selectedService.title);
    }
  }

  const [topic, setTopic] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("Standard (3–5 Days)");

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const generateWhatsAppMessage = () => {
    let msg = `*🎓 ACADEMIC INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Service:* ${chosenService}\n`;
    msg += `*Timeline:* ${deadline}\n`;
    msg += `*Topic / Details:* ${topic.trim() || "Need suggestions / discuss on call"}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi Creative Content team, please guide me on this topic and how to get started!`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="calculator" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200/90 px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Topic &amp; Research Discussion</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 font-heading">
            Share Your Topic &amp; Requirements
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
            Select your academic level and enter your tentative topic to get free topic ideas and structural outlines on WhatsApp.
          </p>
        </div>

        {/* 3-Field Consultation Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-lg shadow-slate-900/5">
          
          {/* Field 1: Quick Clickable Service Pills */}
          <div className="mb-7">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              1. Academic Service Required:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {QUICK_SERVICES.map((s, idx) => {
                const isSelected = chosenService === s.name;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setChosenService(s.name)}
                    className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-linear-to-r from-blue-700 to-indigo-700 text-white border-blue-600 shadow-md shadow-blue-600/30 -translate-y-0.5"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight truncate">
                      {s.name}
                    </div>
                    <div className={`text-[11px] font-extrabold mt-1 ${isSelected ? "text-amber-300" : "text-slate-500"}`}>
                      {s.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Field 2: Target Deadline */}
          <div className="mb-7">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              2. Target Timeline:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "⚡ Urgent (24–48h)", val: "Urgent (24–48 Hours)" },
                { label: "📅 Standard (3–5 Days)", val: "Standard (3–5 Days)" },
                { label: "⏳ Flexible (7+ Days)", val: "Flexible (7+ Days)" }
              ].map((d, dIdx) => (
                <button
                  key={dIdx}
                  type="button"
                  onClick={() => setDeadline(d.val)}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold border-2 transition-all cursor-pointer ${
                    deadline === d.val
                      ? "bg-linear-to-r from-indigo-700 to-blue-700 text-white border-indigo-600 shadow-md shadow-indigo-600/25 -translate-y-0.5"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Field 3: Topic / Message */}
          <div className="mb-7">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              3. Subject or Tentative Topic (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Deep learning in healthcare, or Business management case studies..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
            <p className="text-[11px] text-slate-500 mt-2 font-medium">
              Leave blank if you don&apos;t have a confirmed topic yet — we will suggest 3-4 approved topics tailored to your subject.
            </p>
          </div>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 btn-vibrant-emerald font-bold text-sm sm:text-base py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Discuss Requirements on WhatsApp →</span>
          </a>

          <p className="text-center text-[11px] text-slate-500 mt-3.5 font-medium">
            ✓ 100% Confidential • Complimentary Topic Ideas • Fast Reply (~5 Mins)
          </p>

        </div>

      </div>
    </section>
  );
};
