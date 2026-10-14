"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Settings, 
  ShieldCheck
} from "lucide-react";

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  onUpdateWhatsAppNumber: (newNumber: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappNumber,
  onUpdateWhatsAppNumber
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappNumber);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const quickPrompts = [
    "I need help with a PhD Thesis writing & chapters",
    "I want to publish a Scopus / UGC Care Research Paper",
    "I need a PRISMA Systematic Literature Review",
    "I need a Synopsis for PhD submission (@ ₹1000)",
    "I want to check custom pricing and timeline"
  ];

  const handleSend = (customText?: string) => {
    const textToSend = customText || userMsg || "Hello Creative Content Team, I want to inquire about research writing services.";
    const fullText = `*Academic Research Inquiry - Creative Content*\n\n${textToSend}\n\nPlease share availability, pricing, and turnaround time. Thank you!`;
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank");
    setUserMsg("");
    setIsOpen(false);
  };

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPhone.trim()) {
      onUpdateWhatsAppNumber(tempPhone.trim());
      setShowConfig(false);
    }
  };

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end">
      
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-[90vw] sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-linear-to-r from-[#075E54] to-[#128C7E] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-white text-base border border-white/30">
                  CC
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full shadow-[0_0_8px_#25D366]"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Creative Content Academic Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  <span>Online</span> | <span>Indore Desk • Reply ~5m</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Change WhatsApp Number"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Optional Phone Number Config Toggle for the owner */}
          {showConfig && (
            <form onSubmit={handleSavePhone} className="bg-slate-100 p-3 border-b border-slate-200 text-xs">
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Configure Your WhatsApp Number (Owner Settings):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="+919685553703"
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs w-full font-mono text-slate-800"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-3 py-1 rounded-lg font-bold text-xs shrink-0 cursor-pointer"
                >
                  Save
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">
                Include country code (e.g. +91 for India).
              </p>
            </form>
          )}

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD]/60 space-y-3 max-h-80 overflow-y-auto">
            
            {/* Academic Coordinator Chat Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#128C7E] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                CC
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">
                  Hello Scholar! 👋
                </p>
                <p>
                  Welcome to <strong>Creative Content</strong>! How can we help you with your research writing today?
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#128C7E]" />
                  <span>100% Original • Free Turnitin &amp; AI Reports</span>
                </div>
              </div>
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-[11px] p-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-[#25D366] text-slate-700 font-medium transition-colors cursor-pointer block shadow-2xs"
                >
                  💬 {prompt}
                </button>
              ))}
            </div>

          </div>

          {/* Custom Message Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your topic or question..."
                className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              />
              <button
                onClick={() => handleSend()}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 fill-white" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
              Direct connection with Academic Coordinator via WhatsApp
            </p>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 btn-vibrant-emerald p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-bold text-xs sm:text-sm tracking-wide">
          {isOpen ? "Close Desk" : "Academic Desk • Online"}
        </span>

        {/* Live indicator dot */}
        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
      </button>

    </div>
  );
};
