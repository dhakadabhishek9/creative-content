"use client";

import React, { useState } from "react";
import { 
  Heart, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  MessageCircle, 
  Paperclip,
  ArrowRight
} from "lucide-react";
import { 
  ASSIGNMENT_CATEGORIES, 
  ASSIGNMENT_PILLARS, 
  CONTACT_INFO 
} from "@/data/servicesData";

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
  const [selectedFormat, setSelectedFormat] = useState<"plain" | "designed">("designed");
  const [pageCount, setPageCount] = useState<number>(10);
  const [workType, setWorkType] = useState<string>("College Assignment");
  const [deliveryMode, setDeliveryMode] = useState<string>("Digital Print (PDF/Word)");
  const [subjectTitle, setSubjectTitle] = useState<string>("");

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const ratePerPage = selectedFormat === "plain" ? 35 : 65;
  const isHandwritten = deliveryMode.includes("Handwritten");
  const totalPerPage = ratePerPage + (isHandwritten ? 15 : 0);
  const totalPrice = totalPerPage * pageCount;

  const generateWhatsAppMessage = () => {
    let msg = `*📚 NEW ASSIGNMENT & PROJECT INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Category:* ${workType}\n`;
    msg += `*Style:* ${selectedFormat === "plain" ? "Plain (Per Page)" : "With Design (Per Page - Creative Layouts & Borders)"}\n`;
    msg += `*Delivery:* ${deliveryMode}\n`;
    msg += `*Total Pages:* ${pageCount} Pages\n`;
    msg += `*Subject / Topic:* ${subjectTitle.trim() || "To be discussed"}\n`;
    msg += `*Rate:* ₹${totalPerPage} / Page\n`;
    msg += `*Estimated Budget:* ₹${totalPrice.toLocaleString()}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi Satyam Sir / Creative Content team, please share your availability for this assignment! ♥`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="assignments" className="py-14 sm:py-20 bg-rose-50/40 border-b border-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header directly from poster */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Study Better, Score Higher ♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Making ASSIGNMENTS &amp; PROJECTS
          </h2>
          <p className="text-base font-bold text-slate-700 mt-1">
            for College <span className="text-rose-500">|</span> School <span className="text-rose-500">|</span> Offices ♥
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Your Work, Our Help ♥ — High quality typed or handwritten assignments crafted with care.
          </p>
        </div>

        {/* 2 Comparison Cards: Plain vs With Design (matching poster cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Plain */}
          <div 
            onClick={() => setSelectedFormat("plain")}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedFormat === "plain" 
                ? "bg-white border-purple-400 shadow-md ring-2 ring-purple-200" 
                : "bg-white/80 border-slate-200 hover:border-purple-300"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                ═ Plain Format ═
              </span>
              <span className="text-sm font-black text-purple-950 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
                Starting @ ₹35 / Page
              </span>
            </div>

            <div className="py-4 space-y-2 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Simple &amp; clean academic writing:</p>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Neat, error-free typing or neat handwriting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Standard margins, font sizing &amp; citations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Ready for submission in PDF / Word / Print</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-purple-700">
                {selectedFormat === "plain" ? "✓ Currently Selected" : "Click to Select"}
              </span>
              <span className="text-slate-400 text-[11px]">Best for theory answers</span>
            </div>
          </div>

          {/* Card 2: With Design */}
          <div 
            onClick={() => setSelectedFormat("designed")}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedFormat === "designed" 
                ? "bg-white border-rose-400 shadow-md ring-2 ring-rose-200" 
                : "bg-white/80 border-slate-200 hover:border-rose-300"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                ═ With Design Format ═
              </span>
              <span className="text-sm font-black text-rose-950 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                Starting @ ₹65 / Page ♥
              </span>
            </div>

            <div className="py-4 space-y-2 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Makes your work look professional:</p>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Attractive layouts &amp; proper formatting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Creative headings, borders &amp; color schemes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Custom decorative Title Cover page included</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-rose-700">
                {selectedFormat === "designed" ? "✓ Currently Selected (Recommended)" : "Click to Select"}
              </span>
              <span className="text-slate-400 text-[11px]">Most popular with students</span>
            </div>
          </div>

        </div>

        {/* Customization Available Note from poster */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-center text-xs text-amber-900 font-semibold mb-8">
          <span>═ Customization Available: </span>
          <span className="font-normal text-slate-700">Your choice of design, colour, format, title page, etc. ♥</span>
        </div>

        {/* Simple Interactive Calculator Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs mb-8">
          <h4 className="text-sm font-bold text-slate-900 mb-4">
            Quick Assignment Calculator:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-xs">
            <div>
              <label className="block text-slate-600 font-medium mb-1">Assignment Type:</label>
              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium"
              >
                <option>College Assignment</option>
                <option>School Project</option>
                <option>Office Report</option>
                <option>Notes / Summary</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">Delivery Style:</label>
              <select
                value={deliveryMode}
                onChange={(e) => setDeliveryMode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium"
              >
                <option>Digital Print (PDF/Word)</option>
                <option>Handwritten (+₹15/page)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Number of Pages: <strong className="text-rose-700">({pageCount} Pages)</strong>
              </label>
              <input
                type="range"
                min={2}
                max={40}
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full accent-rose-600 mt-2 cursor-pointer"
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Topic or subject (e.g. Commerce Case Studies, Chemistry practical file...)"
              value={subjectTitle}
              onChange={(e) => setSubjectTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-800"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <div>
              <span className="text-xs text-slate-500">Estimated Total:</span>
              <div className="text-xl font-black text-slate-900">
                ₹{totalPrice.toLocaleString()} <span className="text-xs font-normal text-slate-500">(@ ₹{totalPerPage}/page)</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors"
                title="DM queries on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>DM on Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars from flyer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <p className="font-bold text-slate-900">On-Time Delivery</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
            <p className="font-bold text-slate-900">Neat &amp; Clean Work</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <Sparkles className="w-4 h-4 text-amber-500 mx-auto mb-1" />
            <p className="font-bold text-slate-900">Creative Designs</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <Coins className="w-4 h-4 text-rose-600 mx-auto mb-1" />
            <p className="font-bold text-slate-900">Affordable Prices</p>
          </div>
        </div>

      </div>
    </section>
  );
};
