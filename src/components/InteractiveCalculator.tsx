"use client";

import React, { useState, useEffect } from "react";
import { 
  Calculator, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Send, 
  HelpCircle, 
  FileText,
  Calendar,
  Layers,
  GraduationCap,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import { SERVICES, ServiceItem, SUBJECT_DOMAINS } from "@/data/servicesData";
import confetti from "canvas-confetti";

interface InteractiveCalculatorProps {
  selectedService: ServiceItem | null;
  whatsappNumber: string;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  selectedService,
  whatsappNumber
}) => {
  // Form State
  const [serviceId, setServiceId] = useState<number>(selectedService ? selectedService.id : 2);
  const [academicLevel, setAcademicLevel] = useState<string>("PhD Scholar");
  const [subjectDomain, setSubjectDomain] = useState<string>("Computer Science & AI/ML");
  const [customSubject, setCustomSubject] = useState<string>("");
  const [researchTopic, setResearchTopic] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(6000);
  const [urgency, setUrgency] = useState<"standard" | "express" | "superExpress">("standard");
  const [targetDeadline, setTargetDeadline] = useState<string>("");
  const [targetJournal, setTargetJournal] = useState<string>("Scopus Indexed / UGC Care");
  const [specialInstructions, setSpecialInstructions] = useState<string>("");

  // Add-ons
  const [includeStats, setIncludeStats] = useState<boolean>(false);
  const [includeLatex, setIncludeLatex] = useState<boolean>(false);
  const [includeDefensePpt, setIncludeDefensePpt] = useState<boolean>(false);

  const [copied, setCopied] = useState<boolean>(false);

  // Sync when selectedService prop changes from outside
  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
      if (selectedService.id === 5) {
        setWordCount(45000); // PhD Thesis
        setAcademicLevel("PhD Scholar");
      } else if (selectedService.id === 6) {
        setWordCount(15000); // Master's Dissertation
        setAcademicLevel("Master's / Post Graduate");
      } else if (selectedService.id === 8) {
        setWordCount(25); // PPT slides
      }
    }
  }, [selectedService]);

  const activeService = SERVICES.find(s => s.id === serviceId) || SERVICES[1];

  // Price Calculation Logic
  const calculateTotal = () => {
    let base = activeService.price;

    // Urgency surcharge
    if (urgency === "express") {
      base += 500;
    } else if (urgency === "superExpress") {
      base += 1200;
    }

    // Addons
    if (includeStats) base += 1500;
    if (includeLatex) base += 500;
    if (includeDefensePpt && activeService.id !== 8) base += 700;

    return base;
  };

  const estimatedTotal = calculateTotal();

  // Generate dynamic formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const finalSubject = subjectDomain === "Other (Specify Below)" ? customSubject || "Specified in notes" : subjectDomain;
    const finalTopic = researchTopic.trim() ? researchTopic.trim() : "Topic to be finalized with your experts";
    const deadlineText = targetDeadline || (urgency === "standard" ? "Standard (as per package)" : urgency === "express" ? "Urgent (3-4 Days)" : "Super Express (48 Hours)");

    const addonsList: string[] = [];
    if (includeStats) addonsList.push("Statistical Data Analysis (SPSS/Python/R)");
    if (includeLatex) addonsList.push("LaTeX / Journal Publication Formatting");
    if (includeDefensePpt && activeService.id !== 8) addonsList.push("Defense & Viva PPT Deck");

    let message = `*🎓 NEW RESEARCH INQUIRY - CREATIVE CONTENT*\n`;
    message += `------------------------------------\n`;
    message += `*Selected Service:* #${activeService.id} ${activeService.title}\n`;
    message += `*Academic Level:* ${academicLevel}\n`;
    message += `*Subject / Domain:* ${finalSubject}\n`;
    message += `*Research Topic / Area:* ${finalTopic}\n`;
    message += `*Estimated Length:* ${activeService.id === 8 ? `${wordCount} Slides` : `${wordCount.toLocaleString()} Words / Equivalent`}\n`;
    message += `*Target Publication / Standard:* ${targetJournal}\n`;
    message += `*Submission Deadline:* ${deadlineText}\n`;
    
    if (addonsList.length > 0) {
      message += `*Add-ons Requested:* ${addonsList.join(", ")}\n`;
    }
    
    if (specialInstructions.trim()) {
      message += `*Specific Guidelines / Notes:* ${specialInstructions.trim()}\n`;
    }

    message += `------------------------------------\n`;
    message += `*Estimated Budget:* ₹${estimatedTotal.toLocaleString()} (Starting Package)\n`;
    message += `*Guarantees Required:* 100% Original, AI-Free Report & Turnitin Plagiarism Report\n\n`;
    message += `Hi Satyam Sir / Creative Content Team, please review my requirements and confirm availability & next steps!`;

    return message;
  };

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchWhatsApp = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // ignore
    }
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Quote &amp; Order Builder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Tell Us What You Want &amp; <span className="text-blue-700">Connect Directly</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 font-medium">
            Customize your academic writing requirements, calculate estimated rates, and reach our academic coordinators instantly via WhatsApp with a ready-made requirement brief.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, Live Estimate & WhatsApp Message Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                1. Select Academic Service:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setServiceId(s.id);
                      if (s.id === 5) setWordCount(45000);
                      else if (s.id === 6) setWordCount(15000);
                      else if (s.id === 8) setWordCount(25);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      serviceId === s.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${s.badgeColor.bg} text-white`}>
                        {s.id}
                      </span>
                      <span className={`text-[10px] font-black ${serviceId === s.id ? "text-amber-400" : "text-slate-900"}`}>
                        {s.priceDisplay}
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate leading-tight">
                      {s.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Academic Level & Domain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  2. Academic Level:
                </label>
                <select
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>PhD Scholar / Doctoral Candidate</option>
                  <option>Master&apos;s / Post Graduate (M.Tech/MBA/M.Sc)</option>
                  <option>Bachelor&apos;s / Undergraduate</option>
                  <option>Post-Doctoral Researcher</option>
                  <option>University Faculty / Professor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  3. Subject / Academic Domain:
                </label>
                <select
                  value={subjectDomain}
                  onChange={(e) => setSubjectDomain(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {SUBJECT_DOMAINS.map((domain, dIdx) => (
                    <option key={dIdx} value={domain}>{domain}</option>
                  ))}
                  <option value="Other (Specify Below)">Other Subject (Specify)</option>
                </select>
              </div>
            </div>

            {subjectDomain === "Other (Specify Below)" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter your specific subject/discipline..."
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Step 3: Topic & Target Journal / Standard */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    4. Research Topic / Title / Area of Interest:
                  </label>
                  <span className="text-[11px] text-slate-400">Can leave blank if you need us to suggest topics</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Impact of Artificial Intelligence in Healthcare Diagnostics..."
                  value={researchTopic}
                  onChange={(e) => setResearchTopic(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    5. Target Standard / Journal Index:
                  </label>
                  <select
                    value={targetJournal}
                    onChange={(e) => setTargetJournal(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Scopus / Web of Science (SCI)</option>
                    <option>UGC Care List (Group I &amp; II)</option>
                    <option>IEEE / Springer / Elsevier</option>
                    <option>University PhD DRC Submission Format</option>
                    <option>Master&apos;s Dissertation Guidelines</option>
                    <option>Conference Presentation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    6. Target Submission Deadline:
                  </label>
                  <input
                    type="date"
                    value={targetDeadline}
                    onChange={(e) => setTargetDeadline(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Urgency & Delivery Speed */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                7. Delivery Speed:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency("standard")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    urgency === "standard"
                      ? "bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-400/20"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="font-bold text-xs">Standard Timeline</div>
                  <div className="text-[11px] text-slate-500">{activeService.deliveryTime}</div>
                  <div className="text-[11px] font-extrabold text-emerald-600 mt-1">Free / Standard Rate</div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("express")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    urgency === "express"
                      ? "bg-amber-50 border-amber-500 text-amber-900 ring-2 ring-amber-400/20"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Express Priority</span>
                  </div>
                  <div className="text-[11px] text-slate-500">3 - 4 Days</div>
                  <div className="text-[11px] font-extrabold text-amber-700 mt-1">+₹500 Surcharge</div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("superExpress")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    urgency === "superExpress"
                      ? "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-400/20"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1 text-rose-700">
                    <Zap className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                    <span>Super Express 48h</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Within 48 Hours</div>
                  <div className="text-[11px] font-extrabold text-rose-700 mt-1">+₹1,200 Surcharge</div>
                </button>
              </div>
            </div>

            {/* Step 5: Optional Add-ons */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                8. Optional Add-ons &amp; Enhancements:
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeStats}
                      onChange={(e) => setIncludeStats(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Statistical Data Analysis &amp; Interpretation
                      </p>
                      <p className="text-[11px] text-slate-500">
                        SPSS / R / Python / AMOS SEM charts and hypothesis testing
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-700">+₹1,500</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLatex}
                      onChange={(e) => setIncludeLatex(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        LaTeX Formatting / Journal Template Conversion
                      </p>
                      <p className="text-[11px] text-slate-500">
                        IEEE, Springer, Elsevier or Overleaf source files included
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-700">+₹500</span>
                </label>

                {activeService.id !== 8 && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeDefensePpt}
                        onChange={(e) => setIncludeDefensePpt(e.target.checked)}
                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          Add Viva / Defense PPT Presentation Deck
                        </p>
                        <p className="text-[11px] text-slate-500">
                          20-25 Custom Designed Slides with Speaker Defense Notes
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-700">+₹700</span>
                  </label>
                )}
              </div>
            </div>

            {/* Step 6: Special Instructions */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                9. Specific University Guidelines / Supervisor Comments (Optional):
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific DRC guidelines, required chapters, citation style (APA 7th, IEEE, Harvard), or supervisor suggestions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary + Live WhatsApp Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Price Estimate Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Instant Quote Estimate
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {activeService.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-amber-400">
                    ₹{estimatedTotal.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400">All-Inclusive Starting Rate</span>
                </div>
              </div>

              {/* Guarantees Included */}
              <div className="py-4 space-y-2 text-xs text-slate-300 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Official Turnitin Similarity Report (&lt; 10%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>0% AI Detection Authenticity Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Supervisor Feedback Revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Confidentiality &amp; Academic Non-Disclosure</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-emerald-500" />
                  <span>Connect &amp; Send via WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyMessage}
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-3 px-4 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied Requirement Brief to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Formatted Brief for Email / Chat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live WhatsApp Message Bubble Preview */}
            <div className="bg-slate-100 rounded-3xl p-5 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Live WhatsApp Message Preview:
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Auto-sent on click</span>
              </div>

              {/* Chat Bubble UI */}
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-xs font-mono text-slate-800 whitespace-pre-line leading-relaxed max-h-72 overflow-y-auto shadow-inner">
                {generateWhatsAppMessage()}
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  Clicking &quot;Connect &amp; Send via WhatsApp&quot; will open your WhatsApp with this exact text preloaded. No re-typing needed!
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
