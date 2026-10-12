"use client";

import React from "react";
import { 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Globe, 
  ArrowUp
} from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/data/servicesData";

interface FooterProps {
  onOpenDeployGuide: () => void;
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-amber-400 shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  Creative <span className="text-blue-500">Content</span>
                </span>
                <p className="text-xs text-slate-400 font-semibold">
                  All-in-One Research Writing Services
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Quality Research. Perfect Results. Empowering PhD scholars, Master&apos;s researchers, and faculty members with authentic, publication-grade academic writing assistance.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Award className="w-4 h-4" />
                <span>Follow on: {CONTACT_INFO.socialChannel}</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Subscribe for PhD thesis tips, DRC viva guidance &amp; Scopus publication strategies.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>How to Deploy This Website Freely?</span>
              </button>
            </div>
          </div>

          {/* Core Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Academic Services &amp; Rates
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-white transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-900"
                >
                  <span className="truncate">#{s.id} {s.title}</span>
                  <span className="text-amber-400 font-bold shrink-0 ml-1">{s.priceDisplay}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Connect & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Where to Connect
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold">WhatsApp Academic Desk</div>
                  <div className="text-[11px] text-emerald-400/80">{CONTACT_INFO.displayPhone}</div>
                </div>
              </a>

              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 Creative Content Academic Research Writing Services. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Academic Disclaimer: All services are provided as academic consultation, reference research models, formatting, and proofreading support to assist scholars.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
