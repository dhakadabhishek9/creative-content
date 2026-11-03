"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  Menu,
  X,
  MapPin,
  ChevronRight
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
  const [activeSection, setActiveSection] = useState<string>("");

  // Highlight the nav link for the section currently on screen
  useEffect(() => {
    const ids = ["services", "assignments", "calculator", "why-choose-us", "faq"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const navLinkClass = (id: string) =>
    `px-3 py-2 rounded-full transition-all ${
      activeSection === id
        ? "text-ink-900 bg-gold-100/80 ring-1 ring-gold-200"
        : "hover:text-ink-900 hover:bg-ink-900/5"
    }`;

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content team, I need help with my research paper / assignment. Can you share details and price?"
  )}`;

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Top Academic Notice Bar (Desktop) */}
      <div className="bg-ink-950 text-ink-300 text-[11px] py-2 px-4 hidden lg:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-gold-300 font-semibold">
              <MapPin className="w-3 h-3" />
              <span>Indore Academic Desk</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <span className="font-medium">Turnitin Verified Originality</span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <span className="font-medium">100% Human Drafting</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ink-400 font-medium">9:00 AM – 9:00 PM (IST)</span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <a
              href={`tel:${cleanPhone}`}
              className="text-white hover:text-gold-300 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className="bg-paper/85 backdrop-blur-xl border-b border-line/90 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_24px_-18px_rgba(11,21,48,0.35)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-3">

            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
              <Logo size={40} className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-105 duration-200" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-ink-900 font-heading whitespace-nowrap">
                    Creative <span className="font-serif italic font-medium text-gold-600">Content</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[9px] uppercase tracking-widest font-bold text-gold-700 bg-gold-50 border border-gold-200 px-1.5 py-0.5 rounded-md">
                    Indore
                  </span>
                </div>
                <span className="text-[10px] text-ink-400 font-medium tracking-wide hidden sm:block">
                  Research &amp; Assignment Mentorship
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 font-semibold text-[13px] text-ink-600 whitespace-nowrap">
              <a
                href="#services"
                aria-current={activeSection === "services" ? "true" : undefined}
                className={navLinkClass("services")}
              >
                Services &amp; Rates
              </a>
              <a
                href="#assignments"
                aria-current={activeSection === "assignments" ? "true" : undefined}
                className={`${navLinkClass("assignments")} flex items-center gap-1.5`}
              >
                <span>Assignments</span>
                <span className="text-[10px] bg-gold-100 text-gold-700 border border-gold-200 font-bold px-1.5 py-0.5 rounded-full">
                  ₹35/pg
                </span>
              </a>
              <a
                href="#calculator"
                aria-current={activeSection === "calculator" ? "true" : undefined}
                className={navLinkClass("calculator")}
              >
                Discuss Topic
              </a>
              <a
                href="#why-choose-us"
                aria-current={activeSection === "why-choose-us" ? "true" : undefined}
                className={navLinkClass("why-choose-us")}
              >
                Our Standards
              </a>
              <a
                href="#faq"
                aria-current={activeSection === "faq" ? "true" : undefined}
                className={navLinkClass("faq")}
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex lg:hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-ink-700 hover:text-ink-900 px-3.5 py-2 rounded-full bg-white hover:bg-ink-50 border border-line transition-all"
                title="Call Indore Academic Desk"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-vibrant-emerald font-bold text-xs sm:text-sm px-4 py-2 rounded-full active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-70 animate-ping"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-white"></span>
                </span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full btn-vibrant-emerald flex items-center justify-center active:scale-95 transition-transform sm:hidden"
                aria-label="Direct WhatsApp Contact"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full border border-line bg-white hover:bg-ink-50 text-ink-800 flex items-center justify-center cursor-pointer active:scale-95 transition-all"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-line bg-paper/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-xl animate-drop-in">
            <nav className="flex flex-col space-y-1 text-sm font-semibold text-ink-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3.5 rounded-2xl hover:bg-white flex items-center justify-between transition-colors"
              >
                <span className="font-bold">Research Services &amp; Rates</span>
                <span className="text-xs font-bold text-ink-700 bg-ink-50 border border-ink-100 px-2 py-0.5 rounded-full">From ₹700</span>
              </a>
              <a
                href="#assignments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3.5 rounded-2xl bg-gold-50 hover:bg-gold-100 text-ink-900 flex items-center justify-between border border-gold-200/70 transition-colors"
              >
                <span className="font-bold">Assignments &amp; Projects</span>
                <span className="text-xs font-bold btn-gold px-2 py-0.5 rounded-full">From ₹35/pg</span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3.5 rounded-2xl hover:bg-white flex items-center justify-between transition-colors"
              >
                <span className="font-bold">Discuss Topic &amp; Get Outline</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Free</span>
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3.5 rounded-2xl hover:bg-white text-ink-600 flex items-center justify-between transition-colors"
              >
                <span>Our Standards &amp; Turnitin Process</span>
                <ChevronRight className="w-4 h-4 text-ink-300" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3.5 rounded-2xl hover:bg-white text-ink-600 flex items-center justify-between transition-colors"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-ink-300" />
              </a>
            </nav>

            {/* Mobile Drawer Quick Action Buttons */}
            <div className="pt-3 border-t border-line grid grid-cols-2 gap-2">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-white border border-line hover:bg-ink-50 text-ink-800 text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Desk</span>
              </a>
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-full btn-vibrant-emerald text-xs font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-ink-400 font-medium">
              <MapPin className="w-3 h-3" />
              88 Empire Victory, Palda, Indore • +91 96855 53703
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
