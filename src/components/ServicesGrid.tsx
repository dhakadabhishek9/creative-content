"use client";

import React, { useState } from "react";
import { 
  Check, 
  MessageCircle, 
  Clock
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
    <section id="services" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-20 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-200/90 px-3.5 py-1 rounded-full font-bold">
            Scholarly Writing &amp; Research
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-heading">
            Academic Services &amp; Fixed Rates
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            Transparent, fixed rates for every stage of your research. Select a service to view deliverables or message us on WhatsApp.
          </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-linear-to-r from-blue-700 to-indigo-700 text-white shadow-md shadow-blue-600/30 -translate-y-0.5"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8 Attractive Color-Accented Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredServices.map((service) => {
          const waUrl = getServiceWhatsAppUrl(service);

          return (
            <div
              key={service.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between p-5 relative hover:shadow-xl hover:-translate-y-1 ${
                service.popular
                  ? "border-blue-400 ring-2 ring-blue-400/20 shadow-md"
                  : "border-slate-200/90 hover:border-blue-300"
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 right-4 bg-linear-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md shadow-amber-500/20">
                  ★ Most Requested
                </span>
              )}

              <div>
                {/* Top Bar: Vibrant Number Box + Price Stamp */}
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-xl ${service.badgeColor.bg} text-white font-mono font-black text-xs flex items-center justify-center shadow-xs`}>
                      {service.numberBadge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      #{service.id}
                    </span>
                  </div>

                  <span className="text-xs font-black text-slate-900 bg-amber-50 text-amber-900 border border-amber-300/80 px-2.5 py-0.5 rounded-full font-mono shadow-2xs">
                    {service.priceDisplay}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-blue-700 mt-1 mb-2">
                  {service.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                  {service.description}
                </p>

                {/* Delivery time pill */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 mb-3.5 bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/80 w-fit">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Timeline: {service.deliveryTime}</span>
                </div>

                {/* Deliverables List */}
                <ul className="space-y-1.5 text-[11px] text-slate-700 border-t border-slate-100 pt-2.5">
                  {service.features.slice(0, 3).map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 btn-vibrant-emerald font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectServiceForCalculator(service)}
                  className="w-full text-center text-[11px] font-bold text-slate-600 hover:text-blue-700 py-1 transition-colors cursor-pointer"
                >
                  Custom Requirements →
                </button>
              </div>

            </div>
          );
        })}
      </div>

        {/* Any Subject Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-slate-800 shadow-sm">
          <div className="flex items-center gap-3.5">
            <span className="text-2xl">📚</span>
            <div>
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                All Disciplines &amp; Academic Streams Welcome
              </p>
              <p className="text-xs text-stone-300 mt-0.5">
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
            className="shrink-0 bg-white hover:bg-stone-100 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-2xs"
          >
            Chat on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
