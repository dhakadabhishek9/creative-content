"use client";

import React from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/data/servicesData";
import { Logo } from "@/components/Logo";


interface FooterProps {
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-950 text-white relative overflow-hidden">
      {/* Ambient Lighting Orbs for Deep Architectural Aesthetics */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-ink-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#25D366]/8 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Golden Hairline Accent along top border */}
      <div className="h-[1px] w-full bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <Logo size={46} tone="light" />
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-cinzel block">
                  Creative <span className="text-gold-foil">Content</span>
                </span>
                <p className="text-[10px] text-gold-300/90 font-semibold tracking-wider uppercase font-mono mt-0.5">
                  Research &amp; Writing Services • Indore
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-300 leading-relaxed max-w-sm">
              Quality Research. Perfect Results. Supporting scholars and graduate students across India with original manuscripts, literature reviews, and supervisor-ready revisions.
            </p>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-ink-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-gold-500" />
                  <span>Services &amp; Rates</span>
                </a>
              </li>
              <li>
                <a href="#assignments" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-gold-500" />
                  <span>Assignments (₹35/pg)</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-gold-500" />
                  <span>Discuss Your Topic</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-gold-500" />
                  <span>Our Standards</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-gold-500" />
                  <span>FAQs &amp; Guidance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Catalog (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-bold">
              Research Catalog
            </h4>
            <div className="space-y-1.5 text-xs text-ink-300">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-white transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-white/5 group"
                >
                  <span className="truncate group-hover:text-white transition-colors">
                    {s.title}
                  </span>
                  <span className="text-ink-400 font-mono text-[11px] font-semibold shrink-0 ml-1.5 group-hover:text-gold-300 transition-colors">
                    {s.priceDisplay}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Physical Presence (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-bold">
              Contact &amp; Office
            </h4>
            
            <div className="space-y-3 text-xs text-ink-200">
              {/* WhatsApp Quick Action */}
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
                  "Hello, I'm reaching out through the website to discuss my research project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-emerald-200 hover:bg-[#25D366]/15 hover:border-[#25D366]/60 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>Chat on WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  </div>
                  <div className="text-[11px] text-[#25D366] font-mono font-semibold">{CONTACT_INFO.displayPhone}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2.5 text-ink-300 hover:text-white transition-colors p-1"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              {/* Email */}
              {/* <div className="flex items-center gap-2.5 text-ink-300 p-1">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-mono text-xs">{CONTACT_INFO.email}</span>
              </div> */}

              {/* Physical Address */}
              <div className="flex items-start gap-2.5 text-ink-300 p-1">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">{CONTACT_INFO.location}</span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5 text-ink-300 p-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-[11px]">{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethics Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <div>
            <p className="font-medium text-ink-300">
              © 2026 Creative Content Academic Research &amp; Writing Services. All rights reserved.
            </p>
            <p className="text-[11px] text-ink-400 mt-1 max-w-2xl leading-relaxed">
              Academic Reference Policy: All deliverables are prepared as academic model papers, systematic literature analyses, and study references to assist scholars in ethical study and methodology development.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-ink-200 hover:text-white transition-all cursor-pointer flex items-center gap-2 border border-white/10 shrink-0"
            aria-label="Scroll back to top"
          >
            <span className="text-xs font-semibold">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-ink-400">
          Website created by{" "}
          <span className="font-semibold text-gold-300">Abhishek Dhakad</span>
          {" · "}Contact for website development:{" "}
          <a
            href={`https://api.whatsapp.com/send?phone=918966879130&text=${encodeURIComponent(
              "Hi Abhishek, I'd like to discuss a website development project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Abhishek Dhakad on WhatsApp"
            className="group inline-flex items-center gap-2 align-middle font-mono font-semibold text-ink-200 hover:text-white transition-colors"
          >
            <span>+91 89668 79130</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366] text-white group-hover:scale-110 transition-transform">
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};
