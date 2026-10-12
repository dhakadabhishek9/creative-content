"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Menu, 
  X, 
  Sparkles,
  Globe,
  ArrowRight
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface HeaderProps {
  onOpenDeployGuide: () => void;
  onOpenOrderModal: () => void;
  whatsappNumber: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenDeployGuide, 
  onOpenOrderModal,
  whatsappNumber 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Joanna Mam, I am looking for research writing / assignment assistance. Please share details!"
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center text-amber-300 shadow-xs group-hover:bg-blue-800 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-heading">
                  Creative <span className="text-blue-700">Content</span>
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded border border-amber-200">
                  By Joanna Mam
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                All-in-One Research &amp; Assignment Services
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors">
              Services &amp; Rates
            </a>
            <a href="#assignments" className="hover:text-rose-600 transition-colors flex items-center gap-1">
              <span>Assignments</span>
              <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.2 rounded">
                ₹35/pg
              </span>
            </a>
            <a href="#calculator" className="hover:text-blue-700 transition-colors">
              Quick Quote
            </a>
            <a href="#why-choose-us" className="hover:text-blue-700 transition-colors">
              Why Us
            </a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">
              FAQ
            </a>
            {/* <button
              onClick={onOpenDeployGuide}
              className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer transition-colors"
              title="Where to deploy freely"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Deploy Guide</span>
            </button> */}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-xl text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Research Services &amp; Rates</span>
              <span className="text-xs text-blue-700">@ ₹700 – ₹8500</span>
            </a>
            <a
              href="#assignments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-between"
            >
              <span>Assignments &amp; Projects</span>
              <span className="text-xs bg-rose-200 text-rose-900 px-2 py-0.5 rounded font-bold">From ₹35/pg</span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Quick Quote (Fewer Details)
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Why Choose Creative Content
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Frequently Asked Questions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full text-left py-2 px-3 rounded-lg text-emerald-800 bg-emerald-50 text-xs font-bold flex items-center justify-between cursor-pointer"
            >
              <span>Free Next.js Deployment Guide</span>
              <Globe className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
