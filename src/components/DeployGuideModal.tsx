"use client";

import React, { useState } from "react";
import { 
  Globe, 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  Terminal,
  Zap,
  HelpCircle
} from "lucide-react";
import { DEPLOYMENT_PLATFORMS } from "@/data/servicesData";

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitSteps = [
    { label: "1. Initialize & Commit Code", cmd: "git add .\ngit commit -m \"Initial commit of Creative Content website\"" },
    { label: "2. Push to your GitHub", cmd: "git remote add origin https://github.com/YOUR_USERNAME/creative-content.git\ngit branch -M main\ngit push -u origin main" },
    { label: "3. Import into Vercel", cmd: "Go to vercel.com -> New Project -> Import Git Repository -> Click Deploy" }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-linear-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>100% Free Hosting &amp; Domain Guide</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Where &amp; How Can I Deploy This Next.js Website Freely?
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl font-medium">
            Next.js can be deployed on top-tier global cloud platforms completely free of charge with free subdomains or custom domains.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Top 3 Free Hosting Platforms */}
          <div>
            <h4 className="text-base font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" />
              <span>Top 3 Zero-Cost Cloud Platforms</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DEPLOYMENT_PLATFORMS.map((platform, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    platform.isRecommended
                      ? "bg-blue-50/70 border-blue-400 ring-2 ring-blue-400/20"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-600 text-white">
                      {platform.badge}
                    </span>
                    {platform.isRecommended && (
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                        ★ Recommended
                      </span>
                    )}
                  </div>

                  <h5 className="text-sm font-black text-slate-900 mb-2">
                    {platform.name}
                  </h5>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {platform.domainNote}
                  </p>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-200/80 pt-3">
                    {platform.steps.map((st, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick 3-Step Vercel Guide with Copyable Commands */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Quick Terminal Commands to Deploy to Vercel (3 Mins)
                </h4>
              </div>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                Easiest Method
              </span>
            </div>

            <div className="space-y-3">
              {gitSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-400 mb-1.5 font-sans font-bold">
                    <span>{step.label}</span>
                    <button
                      onClick={() => copyCode(step.cmd, idx)}
                      className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono text-amber-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {step.cmd}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* How to get Free Custom Domains */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                How to Get Proper &amp; Free Custom Domains
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-700">1. Free .vercel.app / .netlify.app:</span>
                <p className="text-slate-600">
                  Provided automatically upon deployment (e.g. <code>creative-content.vercel.app</code>). Completely free forever with instant SSL!
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-purple-700">2. GitHub Student Developer Pack:</span>
                <p className="text-slate-600">
                  If you have a student email (.edu or college ID), you get a <strong>FREE 1-year .me or .tech domain</strong> on Namecheap!
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-emerald-700">3. Cheap Indian .in Domain (₹99 - ₹299):</span>
                <p className="text-slate-600">
                  Buy <code>creativecontent.in</code> on Hostinger/GoDaddy for under ₹300, then connect it to Vercel for 0 extra fees with free automatic SSL.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-amber-700">4. Free DNS Setup in Vercel:</span>
                <p className="text-slate-600">
                  In Vercel project settings → Domains, simply add your custom domain and set CNAME record to <code>cname.vercel-dns.com</code>.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-5 sm:px-8 flex items-center justify-between border-t border-slate-200">
          <span className="text-xs text-slate-500 font-medium">
            Need help deploying? Contact our tech support anytime.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
