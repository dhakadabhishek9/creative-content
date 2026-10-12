"use client";

import React, { useState } from "react";
import { 
  Check, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
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
    { id: "phd", label: "PhD & Dissertations" },
    { id: "paper", label: "Research Papers & Proposals" },
    { id: "review", label: "Review & PRISMA" },
    { id: "presentation", label: "Defense & Viva PPTs" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const text = `Hello Creative Content Team! 🎓\n\nI want to order:\n*Service:* #${service.id} ${service.title}\n*Price:* ${service.priceDisplay}\n*Timeline:* ${service.deliveryTime}\n\n*My Details:*\n- Subject: [Specify subject]\n- Topic: [Specify topic or leave blank]\n- University / Journal: [Specify]\n- Deadline: [Specify date]\n\nPlease let me know how to start!`;
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="scroll-mt-18 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, authentic header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            All-In-One Writing Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Research Services &amp; Starting Rates
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Transparent pricing directly as shown on our flyer. No hidden charges.
          </p>

          {/* Simple category filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const waUrl = getServiceWhatsAppUrl(service);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between p-5"
              >
                <div>
                  {/* Top Bar: Circle Number + Price Tag */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-full ${service.badgeColor.bg} text-white font-black text-xs flex items-center justify-center`}>
                        {service.numberBadge}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        #{service.id}
                      </span>
                    </div>

                    <span className="text-xs font-extrabold text-slate-900 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                      @ {service.priceDisplay}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mt-1 mb-2">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 text-[11px] text-slate-700 border-t border-slate-100 pt-3">
                    {service.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                    className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Order via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceForCalculator(service)}
                    className="w-full text-center text-[11px] font-semibold text-slate-600 hover:text-blue-700 py-1 transition-colors cursor-pointer"
                  >
                    Customize &amp; Calculate Total →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Banner from flyer: Any Subject, Any Topic */}
        <div className="mt-8 p-4 rounded-xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <div>
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                Any Subject • Any Topic • We Do It All!
              </p>
              <p className="text-xs text-blue-100">
                Engineering, Medical, Commerce, Humanities, Science, Law &amp; Management.
              </p>
            </div>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
              "Hi Joanna Mam, I have a specific academic topic to discuss. Can you guide me?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Chat with Academic Expert
          </a>
        </div>

      </div>
    </section>
  );
};
