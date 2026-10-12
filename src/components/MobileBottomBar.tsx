"use client";

import React from "react";
import { MessageCircle, Phone, Calculator, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface MobileBottomBarProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenCalculator,
  whatsappNumber
}) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content Team! I want to inquire about academic writing & assignments."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 sm:hidden shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call button */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <Phone className="w-5 h-5 text-blue-600 mb-0.5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </a>

        {/* Quick Quote / Calculator button */}
        <button
          onClick={onOpenCalculator}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <Calculator className="w-5 h-5 text-amber-500 mb-0.5" />
          <span className="text-[10px] font-bold">Get Quote</span>
        </button>

        {/* Assignments anchor */}
        <a
          href="#assignments"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <Sparkles className="w-5 h-5 text-rose-500 mb-0.5" />
          <span className="text-[10px] font-bold">Assignments</span>
        </a>

        {/* Main WhatsApp CTA */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 flex items-center justify-center gap-1.5 bg-emerald-600 active:scale-95 text-white font-black text-xs py-2.5 px-3 rounded-xl shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
