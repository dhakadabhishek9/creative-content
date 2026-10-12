"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";
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
  { name: "College / School Assignment", price: "₹35/pg" },
  { name: "Other Custom Requirement", price: "Custom" }
];

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  selectedService,
  whatsappNumber
}) => {
  const [chosenService, setChosenService] = useState<string>("Research Paper");
  const [topic, setTopic] = useState<string>("");

  useEffect(() => {
    if (selectedService) {
      setChosenService(selectedService.title);
    }
  }, [selectedService]);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const generateWhatsAppMessage = () => {
    let msg = `*🎓 ACADEMIC INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Service:* ${chosenService}\n`;
    msg += `*Topic / Details:* ${topic.trim() || "Need suggestions / discuss on call"}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi Joanna Mam, please let me know your availability and how we can proceed!`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="calculator" className="scroll-mt-18 sm:scroll-mt-20 py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Quick 1-Step Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Get an Instant Quote on WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Pick your service, enter your topic, and chat directly with Joanna Mam. No long forms to fill!
          </p>
        </div>

        {/* Minimal 2-Field Form */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7">
          
          {/* Field 1: Quick Clickable Service Pills */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              1. What service do you need?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {QUICK_SERVICES.map((s, idx) => {
                const isSelected = chosenService === s.name || (selectedService && selectedService.title === s.name);

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setChosenService(s.name)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight truncate">
                      {s.name}
                    </div>
                    <div className={`text-[10px] font-semibold mt-1 ${isSelected ? "text-amber-300" : "text-slate-500"}`}>
                      {s.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Field 2: Topic / Message */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              2. Your Topic or Subject (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Machine learning in healthcare, or Business management case studies..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Leave blank if you don&apos;t have a topic yet — we will suggest 3-4 topics for you.
            </p>
          </div>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp with Details →</span>
          </a>

          <p className="text-center text-[11px] text-slate-500 mt-2.5">
            ✓ 100% Confidential • Free Topic Suggestions • Fast Response in 5 Mins
          </p>

        </div>

      </div>
    </section>
  );
};
