"use client";

import React, { useState } from "react";
import {
  Check,
  MessageCircle,
  Clock,
  ArrowRight,
  Library
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/servicesData";

interface ServicesGridProps {
  onSelectServiceForCalculator: (service: ServiceItem) => void;
  whatsappNumber: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectServiceForCalculator,
  whatsappNumber
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const categories = [
    { id: "all", label: "All 8 Services" },
    { id: "phd", label: "PhD & Thesis" },
    { id: "paper", label: "Research Papers" },
    { id: "review", label: "Review Papers" },
    { id: "presentation", label: "Viva PPT Slides" }
  ];

  const filteredServices = selectedCategory === "all"
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const text = `Hello Creative Content Team! 🎓\n\nI want to order:\n*Service:* #${service.id} ${service.title}\n*Price:* ${service.priceDisplay}\n*Delivery:* ${service.deliveryTime}\n\n*My Details:*\n- Subject: [Enter subject]\n- Topic: [Enter topic or leave blank]\n- Deadline: [Enter date]\n\nPlease let me know how to start!`;
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            <span className="w-6 h-px bg-gold-400" />
            Scholarly Writing &amp; Research
            <span className="w-6 h-px bg-gold-400" />
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-bold text-ink-900 tracking-tight mt-3 font-heading leading-tight">
            Academic Services &amp; <span className="font-serif italic font-medium text-gold-600">Fixed Rates</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-500 mt-3 leading-relaxed">
            Transparent, fixed rates for every stage of your research. Select a service to view deliverables or message us on WhatsApp.
          </p>
        </div>

        {/* Category Filter Tabs: scroll sideways on phones */}
        <div className="-mx-4 px-4 overflow-x-auto no-scrollbar mb-8 sm:mb-10">
          <div className="flex w-max mx-auto items-center gap-1 p-1 rounded-full bg-white border border-line shadow-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-ink-900 text-white shadow-md shadow-ink-900/20"
                    : "text-ink-500 hover:text-ink-900 hover:bg-ink-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards: swipeable row on phones, grid from tablet up */}
        <p className="sm:hidden -mt-4 mb-4 text-center text-[11px] font-medium text-ink-400">
          Showing {filteredServices.length} · swipe to browse →
        </p>
        <div className="-mx-4 px-4 pt-3 pb-2 scroll-pl-4 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible">
          {filteredServices.map((service) => {
            const waUrl = getServiceWhatsAppUrl(service);

            return (
              <div
                key={service.id}
                className={`group w-[85%] shrink-0 snap-start sm:w-auto rounded-3xl transition-all duration-300 flex flex-col justify-between p-6 relative hover:-translate-y-1 animate-fade-up ${
                  service.popular
                    ? "bg-ink-900 text-white border border-ink-700 shadow-xl shadow-ink-900/25"
                    : "card-elevated hover:shadow-xl hover:shadow-ink-900/10 hover:border-gold-200"
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-6 btn-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    ★ Most Requested
                  </span>
                )}

                <div>
                  {/* Top Bar: Number + Price */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-serif italic text-3xl leading-none ${service.popular ? "text-gold-300" : "text-gold-500"}`}>
                      {service.numberBadge}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full font-mono ${
                      service.popular
                        ? "bg-white/10 text-gold-200 border border-white/15"
                        : "bg-gold-50 text-gold-700 border border-gold-200"
                    }`}>
                      {service.priceDisplay}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-base font-bold tracking-wide leading-snug font-heading ${service.popular ? "text-white" : "text-ink-900"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs font-semibold mt-1 mb-3 ${service.popular ? "text-gold-300" : "text-gold-600"}`}>
                    {service.subtitle}
                  </p>

                  <p className={`text-xs leading-relaxed mb-4 ${service.popular ? "text-ink-200" : "text-ink-500"}`}>
                    {service.description}
                  </p>

                  {/* Delivery time pill */}
                  <div className={`flex items-center gap-1.5 text-[11px] font-semibold mb-4 py-1 px-2.5 rounded-full w-fit ${
                    service.popular ? "bg-white/5 text-ink-200 border border-white/10" : "bg-paper text-ink-600 border border-line"
                  }`}>
                    <Clock className={`w-3.5 h-3.5 ${service.popular ? "text-gold-300" : "text-gold-500"}`} />
                    <span>Timeline: {service.deliveryTime}</span>
                  </div>

                  {/* Deliverables List */}
                  <ul className={`space-y-2 text-[11px] pt-4 border-t ${service.popular ? "border-white/10 text-ink-100" : "border-line/70 text-ink-600"}`}>
                    {service.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-px ${service.popular ? "bg-emerald-400/15" : "bg-emerald-50"}`}>
                          <Check className={`w-2.5 h-2.5 ${service.popular ? "text-emerald-300" : "text-emerald-600"}`} strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-5 mt-5 space-y-1.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 btn-vibrant-emerald font-bold text-xs py-2.5 px-3 rounded-full"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceForCalculator(service)}
                    className={`w-full flex items-center justify-center gap-1 text-xs font-semibold py-2 rounded-full border transition-colors cursor-pointer ${
                      service.popular
                        ? "border-white/15 text-ink-100 hover:border-gold-300/60 hover:text-gold-200"
                        : "border-line text-ink-600 hover:border-ink-300 hover:text-ink-900"
                    }`}
                  >
                    Custom Requirements <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Any Subject Banner */}
        <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-ink-900 text-white flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left relative overflow-hidden">
          <div className="absolute -right-10 -top-16 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center gap-4 relative">
            <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Library className="w-6 h-6 text-gold-300" />
            </span>
            <div>
              <p className="text-xs font-bold text-gold-300 uppercase tracking-[0.15em]">
                All Disciplines &amp; Academic Streams Welcome
              </p>
              <p className="text-sm text-ink-200 mt-1">
                Engineering, Medical &amp; Pharmacy, Management (MBA), Commerce, Law, Social Sciences, &amp; Humanities.
              </p>
            </div>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
              "Hi Creative Content team, I have a research topic to discuss. Can you guide me?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-1.5 bg-white hover:bg-gold-50 text-ink-900 text-xs font-bold px-5 py-3 rounded-full transition-colors"
          >
            Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
