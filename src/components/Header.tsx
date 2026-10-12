"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Globe, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  Award,
  ChevronRight
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
    "Hello Creative Content Team, I am looking for academic research writing services. Please share details and pricing."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Banner Bar */}
      <div className="bg-linear-to-r from-slate-900 via-blue-950 to-indigo-950 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Quality Research. Perfect Results.
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="text-slate-200 font-medium">
              100% Original • AI-Free • Plagiarism-Free Guarantee
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold text-amber-300"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Follow: {CONTACT_INFO.socialChannel}
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>{CONTACT_INFO.workingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-heading">
                  Creative <span className="text-blue-700">Content</span>
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-amber-300">
                  ESTD.
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 tracking-wide">
                All-in-One Research Writing Services
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors">
              Services &amp; Pricing
            </a>
            <a href="#assignments" className="hover:text-rose-600 transition-colors flex items-center gap-1 font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
              <Sparkles className="w-3.5 h-3.5" />
              Assignments &amp; Projects
            </a>
            <a href="#calculator" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Get Quote
            </a>
            <a href="#why-choose-us" className="hover:text-blue-700 transition-colors">
              Why Us
            </a>
            <a href="#samples" className="hover:text-blue-700 transition-colors">
              Samples
            </a>
            <a href="#testimonials" className="hover:text-blue-700 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">
              FAQ
            </a>
            <button
              onClick={onOpenDeployGuide}
              className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              Free Deploy Guide
            </button>
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2.5 rounded-xl shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-2.5 font-medium text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-sm font-semibold flex items-center justify-between"
            >
              <span>Academic Writing (Thesis &amp; Papers)</span>
              <span className="text-xs text-blue-700 font-bold">@ ₹700 - ₹8500</span>
            </a>
            <a
              href="#assignments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 text-sm font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>Assignments &amp; Projects Hub</span>
              </span>
              <span className="text-xs bg-rose-200 text-rose-900 px-2 py-0.5 rounded font-extrabold">Plain &amp; Design</span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-sm font-semibold flex items-center justify-between"
            >
              <span>Instant Quote Builder</span>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded font-bold">Interactive</span>
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-100 text-base"
            >
              Why Choose Us & Guarantees
            </a>
            <a
              href="#samples"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-100 text-base"
            >
              Academic Samples & PRISMA
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-100 text-base"
            >
              Scholar Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-100 text-base"
            >
              Frequently Asked Questions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full text-left py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-sm flex items-center justify-between border border-emerald-200"
            >
              <span>Where Can I Deploy Freely? Guide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
            <a
              href={`tel:${cleanPhone}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call Academic Coordinator
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
