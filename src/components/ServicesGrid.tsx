"use client";

import React, { useState } from "react";
import { 
  Check, 
  MessageCircle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  ChevronRight,
  Filter
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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const categories = [
    { id: "all", label: "All 8 Services" },
    { id: "phd", label: "PhD & Dissertations" },
    { id: "paper", label: "Research Papers & Proposals" },
    { id: "review", label: "Review & Meta Analysis" },
    { id: "presentation", label: "Defense & Viva PPTs" }
  ];

  const filteredServices = activeCategory === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const text = `Hello Creative Content Team! 🎓\n\nI want to order your service:\n*Service:* #${service.id} ${service.title}\n*Package Rate:* ${service.priceDisplay}\n*Expected Timeline:* ${service.deliveryTime}\n\n*My Academic Details:*\n- Subject / Department: [Please specify]\n- Research Topic / Title: [Please specify]\n- University / Journal Target: [Please specify]\n- Deadline Date: [Please specify]\n\nPlease let me know the next steps to start!`;
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-20 bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent Pricing • Student Friendly</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Our All-In-One <span className="text-blue-700">Writing Services</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 font-medium">
            Directly modeled to solve every stage of your academic journey. Choose your service below or connect on WhatsApp for instant onboarding.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const waUrl = getServiceWhatsAppUrl(service);

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  service.popular
                    ? "border-amber-400/80 ring-2 ring-amber-400/20 shadow-lg"
                    : "border-slate-200/80 hover:border-blue-400 shadow-xs"
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Card Top Info */}
                <div className="p-6">
                  {/* Top Bar: Colored Circle Badge from poster + Price Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-9 h-9 rounded-full ${service.badgeColor.bg} text-white font-black text-sm flex items-center justify-center shadow-md`}>
                        {service.numberBadge}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Service #{service.id}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900 bg-amber-100/90 text-amber-950 border border-amber-300 px-2.5 py-1 rounded-lg">
                        @ {service.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 mb-4">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 leading-tight">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Delivery time pill */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Delivery: {service.deliveryTime}</span>
                  </div>

                  {/* Features list */}
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions (WhatsApp + Interactive Calculator) */}
                <div className="p-6 pt-0 space-y-2 border-t border-slate-100/80 mt-4">
                  {/* WhatsApp Direct Order Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-xs py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Order via WhatsApp</span>
                  </a>

                  {/* Customize / Calculate button */}
                  <button
                    onClick={() => onSelectServiceForCalculator(service)}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 py-2.5 px-3 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Customize & Add Details</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need a Customized Academic Requirement?</h4>
              <p className="text-xs text-slate-500">
                Data analysis in SPSS/R/Python, IEEE LaTeX formatting, or single chapter review? We handle all customized requests.
              </p>
            </div>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
              "Hello Creative Content Team! I have a customized academic project requirement. Can we discuss scope and pricing?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all"
          >
            Discuss Custom Requirement →
          </a>
        </div>

      </div>
    </section>
  );
};
