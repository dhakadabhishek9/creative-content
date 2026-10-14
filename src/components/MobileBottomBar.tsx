"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-stone-200/90 px-3 py-2 sm:hidden shadow-lg safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call button */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-stone-600 mb-0.5" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* Discuss Topic button */}
        <button
          onClick={onOpenCalculator}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-600 mb-0.5" />
          <span className="text-[10px] font-bold">Topic</span>
        </button>

        {/* Assignments anchor */}
        <a
          href="#assignments"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <span className="text-xs font-bold text-rose-800 mb-0.5">₹35</span>
          <span className="text-[10px] font-bold">Assign.</span>
        </a>

        {/* Main WhatsApp CTA */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 flex items-center justify-center gap-1.5 btn-vibrant-emerald text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};

