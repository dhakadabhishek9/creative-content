"use client";

import React, { useState } from "react";
import { 
  Heart, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  MessageCircle
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface AssignmentsHubProps {
  whatsappNumber: string;
}

export const AssignmentsHub: React.FC<AssignmentsHubProps> = ({ whatsappNumber }) => {
  const [format, setFormat] = useState<"plain" | "designed">("designed");
  const [pages, setPages] = useState<number>(10);
  const [topic, setTopic] = useState<string>("");

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const pricePerPage = format === "plain" ? 35 : 65;
  const total = pricePerPage * pages;

  const generateWhatsAppMessage = () => {
    let msg = `*📚 ASSIGNMENT INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Format:* ${format === "plain" ? "Plain (₹35/page)" : "With Design (₹65/page - Creative Borders & Layouts)"}\n`;
    msg += `*Pages:* ${pages} Pages\n`;
    msg += `*Topic / Subject:* ${topic.trim() || "To be discussed on chat"}\n`;
    msg += `*Estimated Cost:* ₹${total}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi Joanna Mam, please confirm delivery timeline and availability! ♥`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="assignments" className="scroll-mt-18 sm:scroll-mt-20 py-12 sm:py-16 bg-rose-50/40 border-b border-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from poster */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-3 py-0.5 rounded-full mb-2">
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            <span>Study Better, Score Higher ♡</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Making ASSIGNMENTS &amp; PROJECTS
          </h2>
          <p className="text-sm font-bold text-slate-700 mt-1">
            for College <span className="text-rose-500">|</span> School <span className="text-rose-500">|</span> Offices ♥
          </p>
        </div>

        {/* 2 Cards: Plain vs With Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          
          {/* Plain Card */}
          <div 
            onClick={() => setFormat("plain")}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              format === "plain" 
                ? "bg-white border-purple-500 shadow-sm ring-2 ring-purple-200" 
                : "bg-white/80 border-slate-200 hover:border-purple-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-purple-700 uppercase">═ Plain Format ═</span>
              <span className="text-xs font-black text-purple-900 bg-purple-100 px-2 py-0.5 rounded">
                ₹35 / Page
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Standard clean academic writing with proper margins, error-free typing or neat handwriting.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
              <Check className="w-4 h-4" />
              <span>{format === "plain" ? "Selected" : "Click to select Plain"}</span>
            </div>
          </div>

          {/* With Design Card */}
          <div 
            onClick={() => setFormat("designed")}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              format === "designed" 
                ? "bg-white border-rose-500 shadow-sm ring-2 ring-rose-200" 
                : "bg-white/80 border-slate-200 hover:border-rose-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-rose-700 uppercase">═ With Design Format ═</span>
              <span className="text-xs font-black text-rose-900 bg-rose-100 px-2 py-0.5 rounded">
                ₹65 / Page ♥
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Attractive layouts, creative headings, borders, and custom title page that make your work look professional!
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-700">
              <Check className="w-4 h-4" />
              <span>{format === "designed" ? "Selected (Most Popular)" : "Click to select Design"}</span>
            </div>
          </div>

        </div>

        {/* Minimal Fast Order Bar (Fewer details) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* Quick Page Picker */}
            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Number of Pages:
              </label>
              <div className="flex items-center gap-1.5">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPages(num)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      pages === num
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {num} pgs
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Topic Field */}
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Topic or Subject (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Psychology, Business Law, Physics file..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-800"
              />
            </div>

            {/* Price & Action */}
            <div className="sm:col-span-3 text-right flex flex-col justify-end">
              <div className="text-lg font-black text-slate-900 mb-1 text-center sm:text-right">
                ₹{total} <span className="text-[11px] font-normal text-slate-500">({pages} pgs)</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Quick Footer Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-600">
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-600 hover:underline"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>DM queries on Instagram</span>
          </a>
          <span>•</span>
          <span className="text-slate-500">Neat &amp; Clean Work Guaranteed ♥</span>
        </div>

      </div>
    </section>
  );
};
