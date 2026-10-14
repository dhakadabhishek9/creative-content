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
    <footer className="bg-[#090D16] text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient Lighting Orbs for Deep Architectural Aesthetics */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#25D366]/8 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Golden Hairline Accent along top border */}
      <div className="h-[1px] w-full bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <Logo size={46} />
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-cinzel block">
                  Creative <span className="text-blue-400">Content</span>
                </span>
                <p className="text-[10px] text-amber-400/90 font-semibold tracking-wider uppercase font-mono mt-0.5">
                  Research &amp; Writing Services • Indore
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Quality Research. Perfect Results. Supporting scholars and graduate students across India with original manuscripts, literature reviews, and supervisor-ready revisions.
            </p>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Services &amp; Rates</span>
                </a>
              </li>
              <li>
                <a href="#assignments" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-rose-400" />
                  <span>Assignments (₹35/pg)</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Discuss Your Topic</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Our Standards</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>FAQs &amp; Guidance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Catalog (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              Research Catalog
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-white transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-900/60 group"
                >
                  <span className="truncate group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px] font-semibold shrink-0 ml-1.5 group-hover:text-amber-300 transition-colors">
                    {s.priceDisplay}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Physical Presence (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              Contact &amp; Office
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              {/* WhatsApp Quick Action */}
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
                  "Hello, I'm reaching out through the website to discuss my research project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#075E54]/70 border border-[#25D366]/40 text-emerald-200 hover:bg-[#075E54] hover:border-[#25D366] transition-all shadow-md group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
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
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors p-1"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              {/* Email */}
              {/* <div className="flex items-center gap-2.5 text-slate-400 p-1">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-xs">{CONTACT_INFO.email}</span>
              </div> */}

              {/* Physical Address */}
              <div className="flex items-start gap-2.5 text-slate-400 p-1">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">{CONTACT_INFO.location}</span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5 text-slate-400 p-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px]">{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethics Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p className="font-medium text-slate-400">
              © 2026 Creative Content Academic Research &amp; Writing Services. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Academic Reference Policy: All deliverables are prepared as academic model papers, systematic literature analyses, and study references to assist scholars in ethical study and methodology development.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 border border-slate-800 shadow-sm shrink-0"
            aria-label="Scroll back to top"
          >
            <span className="text-xs font-semibold">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
