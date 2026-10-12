"use client";

import React, { useState } from "react";
import { 
  Heart, 
  Sparkles, 
  Send, 
  Check, 
  Clock, 
  ShieldCheck, 
  Lightbulb, 
  Coins, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  PenTool, 
  FileText,
  Paperclip,
  Laptop,
  CheckCircle2,
  Copy
} from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

import { 
  ASSIGNMENT_PACKAGES, 
  ASSIGNMENT_CATEGORIES, 
  ASSIGNMENT_PILLARS, 
  CONTACT_INFO 
} from "@/data/servicesData";

interface AssignmentsHubProps {
  whatsappNumber: string;
}

export const AssignmentsHub: React.FC<AssignmentsHubProps> = ({ whatsappNumber }) => {
  const [selectedFormat, setSelectedFormat] = useState<"plain" | "designed">("designed");
  const [pageCount, setPageCount] = useState<number>(10);
  const [workType, setWorkType] = useState<"College Assignment" | "School Project" | "Office Report" | "Notes / Summary">("College Assignment");
  const [deliveryMode, setDeliveryMode] = useState<"Digital Print (PDF/Word)" | "Handwritten (Physical Delivery)">("Digital Print (PDF/Word)");
  const [subjectTitle, setSubjectTitle] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  // Rates
  const baseRatePerPage = selectedFormat === "plain" ? 35 : 65;
  const handwrittenSurcharge = deliveryMode.includes("Handwritten") ? 15 : 0;
  const totalPerPage = baseRatePerPage + handwrittenSurcharge;
  const totalPrice = totalPerPage * pageCount;

  const generateWhatsAppMessage = () => {
    let msg = `*📚 NEW ASSIGNMENT & PROJECT INQUIRY - CREATIVE CONTENT*\n`;
    msg += `------------------------------------\n`;
    msg += `*Category:* ${workType}\n`;
    msg += `*Format Style:* ${selectedFormat === "plain" ? "Plain (Per Page)" : "With Design (Per Page - Attractive Layouts & Borders)"}\n`;
    msg += `*Delivery Mode:* ${deliveryMode}\n`;
    msg += `*Number of Pages:* ${pageCount} Pages\n`;
    msg += `*Subject / Topic:* ${subjectTitle.trim() || "To be discussed"}\n`;
    msg += `*Rate:* ₹${totalPerPage} / Page\n`;
    msg += `*Estimated Total:* ₹${totalPrice.toLocaleString()}\n`;
    msg += `------------------------------------\n`;
    msg += `*Requirement Note:* Looking for neat & clean work with attractive formatting & on-time delivery.\n\n`;
    msg += `Hi Creative Content team, please confirm your availability and delivery schedule! ♥`;
    return msg;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="assignments" className="py-20 bg-linear-to-b from-amber-50/60 via-rose-50/30 to-slate-50 relative overflow-hidden">
      
      {/* Decorative notebook doodle borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Stickers Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Left Pink Note sticker: "Study Better Score Higher ♡" */}
          <div className="bg-pink-100/90 text-pink-900 border-2 border-pink-300 p-3 rounded-2xl shadow-md rotate-[-3deg] hover:rotate-0 transition-transform font-bold text-xs flex items-center gap-2">
            <Paperclip className="w-4 h-4 text-pink-600" />
            <div>
              <p className="font-extrabold text-[11px] leading-tight">Study Better Score Higher ♡</p>
            </div>
          </div>

          {/* Center Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-rose-200 text-rose-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Making Assignments &amp; Projects Effortless</span>
          </div>

          {/* Right Sticker: "Your Work, Our Help ♥" */}
          <div className="bg-amber-100/90 text-amber-950 border-2 border-amber-300 p-3 rounded-2xl shadow-md rotate-[3deg] hover:rotate-0 transition-transform font-bold text-xs flex items-center gap-2">
            <span>✈️</span>
            <div>
              <p className="font-extrabold text-[11px] leading-tight">Your Work, Our Help ♥</p>
            </div>
          </div>
        </div>

        {/* Central Bold Title matching image */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">
            ═ Making ═
          </p>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-heading leading-tight">
            ASSIGNMENTS &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-600 via-pink-600 to-indigo-600">
              PROJECTS
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-700 mt-2 font-heading">
            for College <span className="text-rose-500">|</span> School <span className="text-rose-500">|</span> Offices ♥
          </p>

          <p className="text-sm text-slate-500 mt-3 font-medium max-w-xl mx-auto">
            From typed assignments with creative layouts to pristine handwritten files. Designed to impress your professors and score top grades!
          </p>
        </div>

        {/* Two Big Cards: Plain vs With Design (directly matching the 2 big post-it cards in image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Plain (Per Page) - Purple/Lavender Note */}
          <div className={`relative p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between ${
            selectedFormat === "plain" 
              ? "bg-purple-50/80 border-purple-400 ring-4 ring-purple-300/30 shadow-xl" 
              : "bg-white border-purple-200 hover:border-purple-300 shadow-sm"
          }`}>
            {/* Top paperclip icon */}
            <div className="absolute -top-4 left-8 bg-purple-200 text-purple-800 p-2 rounded-xl shadow-xs border border-purple-300">
              <Paperclip className="w-5 h-5" />
            </div>

            <div>
              <div className="text-center pb-6 border-b border-purple-200">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">
                  ═ Plain ═
                </span>
                <h3 className="text-3xl font-black text-purple-950 font-heading mt-1">
                  Per Page Format
                </h3>
                <div className="mt-3 inline-block bg-purple-200/70 text-purple-900 font-extrabold text-sm px-4 py-1.5 rounded-full">
                  Starting @ ₹35 / Page ♡
                </div>
              </div>

              {/* Icon & Details */}
              <div className="py-6 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-24 bg-white border-2 border-dashed border-purple-300 rounded-xl shadow-xs flex flex-col justify-center items-center p-3 space-y-2">
                  <div className="w-12 h-1.5 bg-slate-300 rounded"></div>
                  <div className="w-10 h-1.5 bg-slate-300 rounded"></div>
                  <div className="w-12 h-1.5 bg-slate-300 rounded"></div>
                  <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                </div>

                <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
                  Ideal for standard university submissions, theory answers, and straightforward lab file assignments.
                </p>

                <ul className="text-xs text-slate-700 text-left space-y-2 w-full pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Clean &amp; error-free typing or neat handwriting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Standard academic margins, spacing &amp; citations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Fast 24 to 48 hours delivery available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-200 flex flex-col gap-2">
              <button
                onClick={() => setSelectedFormat("plain")}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                  selectedFormat === "plain"
                    ? "bg-purple-700 text-white shadow-md shadow-purple-600/30"
                    : "bg-purple-100 hover:bg-purple-200 text-purple-900"
                }`}
              >
                {selectedFormat === "plain" ? "✓ Plain Format Selected" : "Select Plain Format"}
              </button>
            </div>
          </div>

          {/* Card 2: With Design (Per Page) - Pink/Rose Note with Washi Tape */}
          <div className={`relative p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between ${
            selectedFormat === "designed" 
              ? "bg-rose-50/80 border-rose-400 ring-4 ring-rose-300/30 shadow-xl" 
              : "bg-white border-rose-200 hover:border-rose-300 shadow-sm"
          }`}>
            {/* Washi tape effect top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-300/80 text-rose-900 text-[10px] font-black px-4 py-1 rounded-sm shadow-xs border border-rose-400/50 uppercase tracking-widest">
              ★ Popular With Students ★
            </div>

            <div>
              <div className="text-center pb-6 border-b border-rose-200">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">
                  ═ With Design ═
                </span>
                <h3 className="text-3xl font-black text-rose-950 font-heading mt-1">
                  Per Page Format
                </h3>
                <div className="mt-3 inline-block bg-rose-200/80 text-rose-900 font-extrabold text-sm px-4 py-1.5 rounded-full">
                  Starting @ ₹65 / Page ♥
                </div>
              </div>

              {/* Icon & Details directly from the poster image */}
              <div className="py-6 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-24 bg-white border-2 border-rose-400 rounded-xl shadow-md flex flex-col justify-between p-2.5 relative overflow-hidden">
                  <div className="absolute top-1 right-1 text-[8px] text-rose-500">🌸</div>
                  <div className="w-full h-2 bg-rose-200 rounded"></div>
                  <div className="space-y-1.5">
                    <div className="w-12 h-1 bg-rose-300 rounded"></div>
                    <div className="w-14 h-1 bg-slate-300 rounded"></div>
                    <div className="w-10 h-1 bg-slate-300 rounded"></div>
                  </div>
                  <div className="text-center text-[8px] text-rose-600 font-bold">♥ Designed</div>
                </div>

                <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
                  Elevates your submission with eye-catching aesthetics, borders, headers, and creative styling.
                </p>

                {/* Bullets directly from the image */}
                <ul className="text-xs text-slate-800 text-left space-y-2 w-full pt-2">
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0" />
                    <span><strong>Attractive layouts</strong> tailored to your topic</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0" />
                    <span><strong>Proper formatting</strong> with clean typography</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0" />
                    <span><strong>Headings &amp; decorative borders</strong> included</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0" />
                    <span><strong>Creative designs &amp; color schemes</strong></span>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-rose-700">
                    <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Makes your work look 100% professional!</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-rose-200 flex flex-col gap-2">
              <button
                onClick={() => setSelectedFormat("designed")}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                  selectedFormat === "designed"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "bg-rose-100 hover:bg-rose-200 text-rose-900"
                }`}
              >
                {selectedFormat === "designed" ? "✓ With Design Format Selected" : "Select With Design Format"}
              </button>
            </div>
          </div>

        </div>

        {/* Customization Available Banner (Directly from Image) */}
        <div className="bg-amber-100/80 border-2 border-dashed border-amber-300 rounded-3xl p-6 sm:p-7 text-center mb-12 shadow-xs">
          <div className="text-amber-800 font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-2 mb-1">
            <span>═</span>
            <span className="text-base sm:text-lg">Customization Available</span>
            <span>═</span>
          </div>
          <p className="text-sm font-semibold text-slate-800">
            (Your choice of design, colour, format, title page, etc.) ♥
          </p>
          <p className="text-xs text-slate-600 mt-2 max-w-lg mx-auto">
            Tell us your college or school guidelines, preferred color theme (Pastel, Dark Minimal, Corporate, Academic), and font styles.
          </p>
        </div>

        {/* We Make Grid & 4 Trust Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          
          {/* We Make List (Left 6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-rose-100 text-rose-800 font-black text-xs px-3 py-1 rounded-full uppercase">
                We Make
              </span>
              <h4 className="text-lg font-black text-slate-900 font-heading">
                For College, School &amp; Corporate Needs
              </h4>
            </div>

            <div className="space-y-3 pt-2">
              {ASSIGNMENT_CATEGORIES.map((cat, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{cat.name}</p>
                      <p className="text-[11px] text-slate-500">{cat.desc}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">Available</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 italic pt-2 text-center">
              Because your assignments deserve the best! ♥
            </p>
          </div>

          {/* 4 Trust Badges from the Image (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-3xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                  <Clock className="w-6 h-6" />
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  On-Time Delivery
                </h5>
                <p className="text-[11px] text-slate-500 mt-1">Guaranteed on or before your deadline</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 border border-emerald-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Neat &amp; Clean Work
                </h5>
                <p className="text-[11px] text-slate-500 mt-1">Flawless writing, no messy corrections</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 border border-amber-100">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Creative Designs
                </h5>
                <p className="text-[11px] text-slate-500 mt-1">Modern headings, covers &amp; layouts</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 border border-rose-100">
                  <Coins className="w-6 h-6" />
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Affordable Prices
                </h5>
                <p className="text-[11px] text-slate-500 mt-1">Starting at ₹35/page for students</p>
              </div>

            </div>

            {/* Quote Badge */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 text-center shadow-lg relative overflow-hidden">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                ═ Good Work Builds Bright Futures ♥ ═
              </p>
              <p className="text-sm text-slate-300 font-medium">
                Plan • Write • Create • Achieve ♡
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Per-Page Assignment Quote Box */}
        <div className="bg-white rounded-3xl border-2 border-rose-200 shadow-xl p-6 sm:p-9 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-3 py-1 rounded-full">
              Quick Assignment Cost Calculator
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-heading mt-2">
              Calculate Your Assignment &amp; Send on WhatsApp
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                1. Select Type:
              </label>
              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                <option>College Assignment</option>
                <option>School Project</option>
                <option>Office Report</option>
                <option>Notes / Summary</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                2. Style &amp; Layout:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFormat("plain")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedFormat === "plain"
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-slate-50 text-slate-700 border-slate-300"
                  }`}
                >
                  Plain (₹35/pg)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFormat("designed")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedFormat === "designed"
                      ? "bg-rose-600 text-white border-rose-600"
                      : "bg-slate-50 text-slate-700 border-slate-300"
                  }`}
                >
                  Designed (₹65/pg)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                3. Delivery Format:
              </label>
              <select
                value={deliveryMode}
                onChange={(e) => setDeliveryMode(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                <option>Digital Print (PDF/Word)</option>
                <option>Handwritten (Physical Delivery)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                4. Number of Pages: <span className="text-rose-600 font-extrabold">({pageCount} Pages)</span>
              </label>
              <input
                type="range"
                min={2}
                max={50}
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>2 Pages</span>
                <span>25 Pages</span>
                <span>50 Pages</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              5. Topic / Subject / Questions (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Psychology Chapter 4 assignment, Business Law case studies..."
              value={subjectTitle}
              onChange={(e) => setSubjectTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 placeholder-slate-400 mb-6"
            />
          </div>

          {/* Pricing Total Strip */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-rose-800 uppercase">Estimated Total Cost:</span>
              <div className="text-2xl font-black text-rose-950">
                ₹{totalPrice.toLocaleString()} <span className="text-xs font-medium text-slate-600">(@ ₹{totalPerPage}/page × {pageCount} pages)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                onClick={handleCopy}
                className="p-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                title="Copy details"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Contact Now Strip directly from the Image */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-800 font-heading">
                ═ Contact Now ═
              </span>
              <span className="text-xs text-slate-500 font-medium">(DM for queries)</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-linear-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:opacity-90 transition-opacity"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram (DM Queries)</span>
              </a>

              <a
                href={`https://api.whatsapp.com/send?phone=${cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Fast Reply</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
