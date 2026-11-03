"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "@/data/servicesData";

interface FaqSectionProps {
  whatsappNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ whatsappNumber }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Scholarly Inquiries</span>
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-ink-900 tracking-tight mt-3 font-heading leading-tight">
            Frequently Asked <span className="font-serif italic font-medium text-gold-600">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-3 max-w-xl mx-auto">
            Practical details regarding research originality, Turnitin checks, chapter revisions, payment stages, and turnaround times.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold-300 bg-white shadow-lg shadow-ink-900/5"
                    : "border-line bg-white/70 hover:bg-white hover:border-ink-200"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 sm:px-6 text-left text-sm sm:text-base font-semibold text-ink-900 cursor-pointer"
                >
                  <span className="flex items-center gap-3.5">
                    <span className={`font-serif italic text-base shrink-0 ${isOpen ? "text-gold-500" : "text-ink-300"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-ink-900 text-gold-300" : "bg-paper text-ink-500"
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pl-[3.1rem] sm:pl-[3.65rem] text-xs sm:text-sm text-ink-500 leading-relaxed animate-drop-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-3xl bg-ink-900 text-white flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute -left-10 -top-16 w-56 h-56 rounded-full bg-[#25D366]/10 blur-3xl pointer-events-none" />
          <div className="relative text-center sm:text-left">
            <h4 className="text-base font-bold font-heading">Have a specific guideline, rubric, or urgent deadline?</h4>
            <p className="text-xs text-ink-300 mt-1">Reach out to our Academic Desk directly for personalized review and suggestions.</p>
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
              "Hi Creative Content team, I have a question about my research paper or assignment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-2 btn-vibrant-emerald font-bold text-xs px-5 py-3 rounded-full"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Academic Coordinator</span>
          </a>
        </div>

      </div>
    </section>
  );
};
