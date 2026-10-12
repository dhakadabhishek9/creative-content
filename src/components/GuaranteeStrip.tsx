"use client";

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  FileCheck, 
  Clock, 
  GraduationCap, 
  IndianRupee,
  Sparkles,
  Target
} from "lucide-react";
import { GUARANTEES } from "@/data/servicesData";

export const GuaranteeStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-blue-600" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-emerald-600" />;
      case "FileCheck":
        return <FileCheck className="w-7 h-7 text-rose-600" />;
      case "Clock":
        return <Clock className="w-7 h-7 text-amber-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-7 h-7 text-purple-600" />;
      case "IndianRupee":
        return <IndianRupee className="w-7 h-7 text-teal-600" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-blue-600" />;
    }
  };

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner matching poster: "Let's Achieve Your Academic Goals Together! ☆" */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        
        <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Target className="w-4 h-4 text-blue-600" />
            <span>Our Commitment to Scholars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Let&apos;s Achieve <span className="text-blue-700">Your Academic Goals</span> Together! ☆
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mt-1 font-medium">
            Every submission is backed by ironclad academic integrity guarantees and transparent pricing.
          </p>
        </div>

        {/* 6 Core Badges from the poster */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {GUARANTEES.map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-200/70 hover:border-blue-400 transition-all text-center flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-xs group-hover:scale-110 flex items-center justify-center transition-transform mb-3 border border-slate-100">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
