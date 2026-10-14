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
    <section id="faq" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-20 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200/90 text-stone-800 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>Scholarly Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Frequently Asked <span className="font-editorial italic font-normal text-blue-900">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 font-normal max-w-xl mx-auto">
            Practical details regarding research originality, Turnitin checks, chapter revisions, payment stages, and turnaround times.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-blue-300 bg-white shadow-sm ring-1 ring-blue-500/10"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific guideline, rubric, or urgent deadline?</h4>
            <p className="text-xs text-stone-500 mt-0.5">Reach out to our Academic Desk directly for personalized review and suggestions.</p>
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
              "Hi Creative Content team, I have a question about my research paper or assignment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-vibrant-emerald font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Academic Coordinator</span>
          </a>
        </div>

      </div>
    </section>
  );
};
