"use client";

import React, { useState, useEffect } from "react";
import { 
  Calculator, 
  MessageCircle, 
  Copy, 
  Check, 
  ShieldCheck,
  Send
} from "lucide-react";
import { SERVICES, ServiceItem, SUBJECT_DOMAINS } from "@/data/servicesData";

interface InteractiveCalculatorProps {
  selectedService: ServiceItem | null;
  whatsappNumber: string;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  selectedService,
  whatsappNumber
}) => {
  const [serviceId, setServiceId] = useState<number>(selectedService ? selectedService.id : 2);
  const [academicLevel, setAcademicLevel] = useState<string>("PhD / Post Graduate");
  const [subjectDomain, setSubjectDomain] = useState<string>("Computer Science & AI/ML");
  const [researchTopic, setResearchTopic] = useState<string>("");
  const [targetDeadline, setTargetDeadline] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  const activeService = SERVICES.find(s => s.id === serviceId) || SERVICES[1];
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");

  const generateWhatsAppMessage = () => {
    let message = `*🎓 ACADEMIC REQUIREMENT INQUIRY - CREATIVE CONTENT*\n`;
    message += `------------------------------------\n`;
    message += `*Service:* #${activeService.id} ${activeService.title} (${activeService.priceDisplay})\n`;
    message += `*Academic Level:* ${academicLevel}\n`;
    message += `*Subject / Domain:* ${subjectDomain}\n`;
    message += `*Topic / Idea:* ${researchTopic.trim() || "Need suggestions from your team"}\n`;
    message += `*Required Deadline:* ${targetDeadline || "Standard timeline"}\n`;
    message += `------------------------------------\n`;
    message += `Hi Satyam Sir, please let me know your availability and how we can proceed!`;
    return message;
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Direct Requirement Builder
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Tell Us What You Want
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Fill in your details below and connect directly with Satyam on WhatsApp with your requirement brief.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                1. Select Service:
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(parseInt(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    #{s.id} {s.title} ({s.priceDisplay})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                2. Academic Level:
              </label>
              <select
                value={academicLevel}
                onChange={(e) => setAcademicLevel(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                <option>PhD Scholar / Doctoral</option>
                <option>Master&apos;s (M.Tech / MBA / M.Sc / M.Pharm)</option>
                <option>Bachelor&apos;s / Under-Graduate</option>
                <option>Faculty / Post-Doctoral</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                3. Subject / Academic Domain:
              </label>
              <select
                value={subjectDomain}
                onChange={(e) => setSubjectDomain(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                {SUBJECT_DOMAINS.map((domain, dIdx) => (
                  <option key={dIdx} value={domain}>{domain}</option>
                ))}
                <option value="Other Subject">Other Subject</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                4. Target Deadline:
              </label>
              <input
                type="date"
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-semibold text-slate-800"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              5. Research Topic or Brief Questions:
            </label>
            <input
              type="text"
              placeholder="e.g. AI applications in smart grids, literature review on supply chain..."
              value={researchTopic}
              onChange={(e) => setResearchTopic(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              (You can leave this blank if you want us to suggest topics)
            </p>
          </div>

          {/* Pricing Summary & 1-Click WhatsApp Send */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Starting Package:</span>
                <span className="text-xl font-black text-slate-900">{activeService.priceDisplay}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Includes 100% Original Content + Plagiarism &amp; AI-free verification.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send via WhatsApp</span>
              </a>

              <button
                onClick={handleCopy}
                className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                title="Copy message"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
