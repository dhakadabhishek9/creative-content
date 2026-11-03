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
    <section id="calculator" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Topic &amp; Research Discussion</span>
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-ink-900 tracking-tight mt-3 font-heading leading-tight">
            Share Your Topic &amp; <span className="font-serif italic font-medium text-gold-600">Requirements</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-3 max-w-lg mx-auto">
            Select your academic level and enter your tentative topic to get free topic ideas and structural outlines on WhatsApp.
          </p>
        </div>

        {/* 3-Field Consultation Card */}
        <div className="relative card-elevated rounded-[2rem] p-5 sm:p-10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-ink-800 via-gold-400 to-ink-800" />
          
          {/* Field 1: Quick Clickable Service Pills */}
          <div className="mb-8">
            <label className="flex items-center gap-2.5 text-xs font-bold text-ink-900 uppercase tracking-[0.12em] mb-3.5">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-gold-300 font-serif italic text-sm flex items-center justify-center normal-case shrink-0">1</span>
              Academic Service Required
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {QUICK_SERVICES.map((s, idx) => {
                const isSelected = chosenService === s.name;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setChosenService(s.name)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-ink-900 text-white border-ink-900 shadow-lg shadow-ink-900/20 -translate-y-0.5"
                        : "bg-paper text-ink-800 border-line hover:border-gold-300 hover:bg-white"
                    }`}
                  >
                    <div className="text-xs font-semibold leading-tight line-clamp-2">
                      {s.name}
                    </div>
                    <div className={`text-[11px] font-bold mt-1 font-mono ${isSelected ? "text-gold-300" : "text-ink-400"}`}>
                      {s.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Field 2: Target Deadline */}
          <div className="mb-8">
            <label className="flex items-center gap-2.5 text-xs font-bold text-ink-900 uppercase tracking-[0.12em] mb-3.5">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-gold-300 font-serif italic text-sm flex items-center justify-center normal-case shrink-0">2</span>
              Target Timeline
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-paper border border-line">
              {[
                { label: "⚡ Urgent (24–48h)", val: "Urgent (24–48 Hours)" },
                { label: "📅 Standard (3–5 Days)", val: "Standard (3–5 Days)" },
                { label: "⏳ Flexible (7+ Days)", val: "Flexible (7+ Days)" }
              ].map((d, dIdx) => (
                <button
                  key={dIdx}
                  type="button"
                  onClick={() => setDeadline(d.val)}
                  className={`p-2.5 rounded-xl text-center text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                    deadline === d.val
                      ? "bg-white text-ink-900 shadow-md shadow-ink-900/10 ring-1 ring-gold-300"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Field 3: Topic / Message */}
          <div className="mb-8">
            <label htmlFor="calculator-topic" className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-ink-900 uppercase tracking-[0.12em] mb-3.5">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-gold-300 font-serif italic text-sm flex items-center justify-center normal-case shrink-0">3</span>
              Subject or Tentative Topic <span className="text-ink-300 normal-case tracking-normal font-medium">(Optional)</span>
            </label>
            <input
              id="calculator-topic"
              type="text"
              placeholder="e.g. Deep learning in healthcare, or Business management case studies..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-paper border border-line rounded-2xl px-4 py-3.5 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:bg-white focus:border-gold-400 focus:ring-4 focus:ring-gold-300/25 transition-all"
            />
            <p className="text-[11px] text-ink-400 mt-2.5 font-medium">
              Leave blank if you don&apos;t have a confirmed topic yet — we will suggest 3-4 approved topics tailored to your subject.
            </p>
          </div>

          {/* Live summary of the WhatsApp message */}
          <div className="mb-5 rounded-2xl bg-paper border border-dashed border-gold-300 p-4" aria-live="polite">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-700 mb-2.5">
              Your WhatsApp message will include
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs">
              <dt className="text-ink-400">Service</dt>
              <dd className="font-semibold text-ink-900">{chosenService}</dd>
              <dt className="text-ink-400">Timeline</dt>
              <dd className="font-semibold text-ink-900">{deadline}</dd>
              <dt className="text-ink-400">Topic</dt>
              <dd className={`break-words ${topic.trim() ? "font-semibold text-ink-900" : "italic text-ink-400"}`}>
                {topic.trim() || "Need suggestions / discuss on call"}
              </dd>
            </dl>
          </div>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 btn-vibrant-emerald font-bold text-sm sm:text-base py-4 px-4 sm:px-6 rounded-full whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Discuss Requirements on WhatsApp →</span>
          </a>

          <p className="text-center text-[11px] text-ink-400 mt-4 font-medium">
            ✓ 100% Confidential • Complimentary Topic Ideas • Fast Reply (~5 Mins)
          </p>

        </div>

      </div>
    </section>
  );
};
