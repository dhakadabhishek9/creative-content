"use client";

import React from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Award,
  Zap,
  BookOpen
} from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface HeroProps {
  onOpenCalculator: () => void;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const quickWhatsAppUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
    "Hello Creative Content Team, I need help with academic writing (Research Paper / Thesis / Dissertation). Please assist me with pricing and delivery timeline."
  )}`;

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-20">
      {/* Background Subtle Grid & Glowing Orbs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge Bar (matches poster header) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-inner">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>QUALITY RESEARCH. PERFECT RESULTS.</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>

          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/40 text-blue-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Follow: Teaching Life By Satyam</span>
          </div>
        </div>

        {/* Main Grid: Left copy & Right Visual Poster Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Super Tagline */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-300 px-3.5 py-1.5 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Accepting New PhD & Research Paper Submissions</span>
            </div>

            {/* Big Main Title */}
            <div className="space-y-2">
              <h2 className="text-amber-400 font-extrabold tracking-widest text-sm sm:text-base uppercase flex items-center justify-center lg:justify-start gap-2">
                <span>✦ ALL-IN-ONE ✦</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white font-heading">
                RESEARCH <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-300 to-amber-300">
                  WRITING SERVICES
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium pt-2">
                Quality Research. Perfect Results.
                <span className="inline-flex items-center gap-0.5 ml-2 text-amber-400">
                  {"★★★★★"}
                </span>
              </p>
            </div>

            {/* Bullet Highlights from Poster */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tailored academic writing for PhD Scholars, Master&apos;s Students & Researchers. From 
              <strong className="text-white"> Synopsis (@ ₹1000)</strong>, 
              <strong className="text-white"> Scopus/UGC Care Papers (@ ₹1000)</strong> to 
              <strong className="text-white"> Complete PhD Theses (@ ₹8500)</strong> with 100% Originality guarantee.
            </p>

            {/* Mega Badges from Poster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                <span>100% Original • AI Free • Plagiarism Free</span>
              </div>
              
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black text-xs px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Any Subject • Any Topic • We Do It All!</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-base px-7 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-500" />
                <span>Connect on WhatsApp Directly</span>
              </a>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-base px-6 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Calculate Price & Quote</span>
              </button>
            </div>

            {/* Trust Mini Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800 text-center lg:text-left">
              <div>
                <p className="text-2xl font-black text-amber-400">8+</p>
                <p className="text-xs text-slate-400 font-medium">Core Academic Services</p>
              </div>
              <div>
                <p className="text-2xl font-black text-sky-400">&lt; 10%</p>
                <p className="text-xs text-slate-400 font-medium">Turnitin Similarity Guaranteed</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">0%</p>
                <p className="text-xs text-slate-400 font-medium">AI Content Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Poster Card that visually matches the uploaded poster */}
          <div className="lg:col-span-5 relative">
            
            {/* Sticky Note "Your Goals Our Priority!" from the poster */}
            <div className="absolute -top-6 -right-2 sm:-right-4 z-20 bg-linear-to-br from-yellow-300 to-amber-300 text-slate-900 font-black px-4 py-3 rounded-lg shadow-xl rotate-6 transform hover:rotate-0 transition-transform border border-amber-400 cursor-default">
              <div className="text-[11px] uppercase tracking-wider text-amber-950 font-bold">Priority</div>
              <div className="text-sm font-black flex items-center gap-1">
                Your Goals Our Priority! 📌
              </div>
            </div>

            {/* Academic Stacked Card */}
            <div className="relative bg-slate-900/90 rounded-3xl border border-slate-700/80 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Creative Content</h2>
                    <p className="text-xs text-slate-400">Quality Research. Perfect Results.</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Active 24/7
                  </span>
                </div>
              </div>

              {/* Pricing Snapshot list reflecting the poster */}
              <div className="py-4 space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Popular Starting Rates:
                </div>
                
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white font-black text-xs flex items-center justify-center">1</span>
                    <div>
                      <p className="text-xs font-bold text-white">Synopsis for PhD Submission</p>
                      <p className="text-[10px] text-slate-400">University DRC/RDC Standard</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/30">
                    @ ₹1,000
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center">2</span>
                    <div>
                      <p className="text-xs font-bold text-white">Research Paper (Publication Ready)</p>
                      <p className="text-[10px] text-slate-400">Scopus / UGC Care Indexed</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/30">
                    @ ₹1,000
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">5</span>
                    <div>
                      <p className="text-xs font-bold text-white">PhD Thesis (All Chapters)</p>
                      <p className="text-[10px] text-slate-400">Complete End-to-End Delivery</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/30">
                    @ ₹8,500
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center">6</span>
                    <div>
                      <p className="text-xs font-bold text-white">Master&apos;s Dissertation</p>
                      <p className="text-[10px] text-slate-400">M.Tech / MBA / M.Sc / M.Pharm</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/30">
                    @ ₹4,000
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-black text-xs flex items-center justify-center">8</span>
                    <div>
                      <p className="text-xs font-bold text-white">Viva & Defense PPT Presentation</p>
                      <p className="text-[10px] text-slate-400">Professional Slides + Speaker Notes</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/30">
                    @ ₹700
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer Action */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="#services"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  View All 8 Services <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free Turnitin Report</span>
                </div>
              </div>

            </div>

            {/* Megaphone Badge from Poster */}
            <div className="mt-4 bg-linear-to-r from-blue-700 to-indigo-800 p-3.5 rounded-2xl border border-blue-400/40 shadow-lg flex items-center gap-3">
              <span className="text-2xl">📢</span>
              <div>
                <p className="text-xs font-black text-amber-300 uppercase tracking-wide">
                  ANY SUBJECT • ANY TOPIC • WE DO IT ALL!
                </p>
                <p className="text-[11px] text-slate-200">
                  Engineering, Medical, Commerce, Humanities, Science & Law
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
