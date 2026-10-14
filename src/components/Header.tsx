"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  Phone, 
  Menu, 
  X,
  MapPin
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";
import { Logo } from "@/components/Logo";

interface HeaderProps {
  onOpenOrderModal?: () => void;
  whatsappNumber: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  whatsappNumber 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content team, I need help with my research paper / assignment. Can you share details and price?"
  )}`;

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Top Academic Notice Bar (Desktop) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Indore Academic Desk</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">Turnitin Verified Originality</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">100% Human Drafting</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium">9:00 AM – 9:00 PM (IST)</span>
            <span className="text-slate-600">•</span>
            <a 
              href={`tel:${cleanPhone}`} 
              className="text-white hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
              <Logo size={40} className="w-9 h-9 sm:w-11 sm:h-11 transition-transform group-hover:scale-105 duration-200" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 font-heading">
                    Creative <span className="text-blue-700">Content</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/90 px-1.5 py-0.2 rounded">
                    Indore
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-normal hidden sm:block">
                  Research &amp; Assignment Mentorship
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 font-bold text-[13px] text-slate-700">
              <a 
                href="#services" 
                className="px-3 py-1.5 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-all"
              >
                Services &amp; Rates
              </a>
              <a 
                href="#assignments" 
                className="px-3 py-1.5 rounded-lg hover:text-rose-700 hover:bg-rose-50/80 transition-all flex items-center gap-1.5"
              >
                <span>Assignments</span>
                <span className="text-[10px] bg-rose-600 text-white font-extrabold px-1.5 py-0.2 rounded-full shadow-2xs">
                  ₹35/pg
                </span>
              </a>
              <a 
                href="#calculator" 
                className="px-3 py-1.5 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-all"
              >
                Discuss Topic
              </a>
              <a 
                href="#why-choose-us" 
                className="px-3 py-1.5 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-all"
              >
                Our Standards
              </a>
              <a 
                href="#faq" 
                className="px-3 py-1.5 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-all"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/90 transition-all shadow-2xs"
                title="Call Indore Academic Desk"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white flex items-center justify-center shadow-xs active:scale-95 transition-transform"
                aria-label="Direct WhatsApp Contact"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-800 flex items-center justify-center cursor-pointer shadow-2xs active:scale-95 transition-all"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span className="font-bold text-slate-800">Research Services &amp; Rates</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">From ₹700</span>
              </a>
              <a
                href="#assignments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-rose-50/80 hover:bg-rose-100/80 text-rose-900 flex items-center justify-between border border-rose-200/60 transition-colors"
              >
                <span className="font-bold">Assignments &amp; Projects</span>
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-md">From ₹35/pg</span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span className="font-bold text-slate-800">Discuss Topic &amp; Get Outline</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md">Free</span>
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors"
              >
                Our Standards &amp; Turnitin Process
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors"
              >
                Frequently Asked Questions
              </a>
            </nav>

            {/* Mobile Drawer Quick Action Buttons */}
            <div className="pt-3 border-t border-slate-200/90 grid grid-cols-2 gap-2">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>Call Desk</span>
              </a>
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-slate-500 font-medium">
              📍 88 Empire Victory, Palda, Indore • +91 96855 53703
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
