"use client";

import React, { useState } from "react";
import { 
  FileText, 
  GitBranch, 
  Presentation, 
  GraduationCap, 
  Check, 
  Sparkles, 
  ArrowRight,
  Download,
  BookOpen
} from "lucide-react";

export const SampleShowcase: React.FC = () => {
  const [activeSample, setActiveSample] = useState<"thesis" | "prisma" | "paper" | "ppt">("thesis");

  return (
    <section id="samples" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Excellence &amp; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Quality Research <span className="text-blue-700">In Every Detail</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 font-medium">
            Explore sample structural frameworks for PhD Theses, PRISMA Systematic Reviews, and Research Papers designed to meet DRC and Scopus standards.
          </p>

          {/* Sample Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveSample("thesis")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSample === "thesis"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>PhD Thesis Blueprint (@ ₹8,500)</span>
            </button>

            <button
              onClick={() => setActiveSample("prisma")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSample === "prisma"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <GitBranch className="w-4 h-4 text-purple-400" />
              <span>PRISMA Systematic Review (@ ₹1,000)</span>
            </button>

            <button
              onClick={() => setActiveSample("paper")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSample === "paper"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Scopus Research Paper (@ ₹1,000)</span>
            </button>

            <button
              onClick={() => setActiveSample("ppt")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSample === "ppt"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <Presentation className="w-4 h-4 text-emerald-400" />
              <span>Defense &amp; Viva PPT (@ ₹700)</span>
            </button>
          </div>
        </div>

        {/* Tab Showcase Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
          
          {/* Sample 1: PhD Thesis */}
          {activeSample === "thesis" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Service #5 • Complete PhD Thesis
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Comprehensive 5-to-6 Chapter Doctoral Blueprint
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored according to your university ordinance. Every chapter is developed through progressive milestones with supervisor review cycles.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="font-bold text-xs bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Chapter 1: Introduction &amp; Theoretical Framework</h4>
                      <p className="text-[11px] text-slate-500">Problem background, research rationale, research questions &amp; hypotheses formulation.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="font-bold text-xs bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Chapter 2: Comprehensive Literature Review</h4>
                      <p className="text-[11px] text-slate-500">Critique of 120+ scholarly studies, thematic synthesis, conceptual model &amp; research gaps.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="font-bold text-xs bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Chapter 3: Robust Research Methodology</h4>
                      <p className="text-[11px] text-slate-500">Research philosophy, sampling techniques, measurement scale reliability &amp; validity (Cronbach Alpha).</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="font-bold text-xs bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Chapter 4 &amp; 5: Data Analysis, Discussion &amp; DRC Viva Prep</h4>
                      <p className="text-[11px] text-slate-500">SPSS regression, SEM AMOS path analysis, hypothesis testing, policy implications &amp; viva notes.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
                  >
                    <span>Request Thesis Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Graphic Mockup Right */}
              <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 shadow-inner font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-amber-400 font-bold">📄 PhD_Thesis_Final_Draft_v4.pdf</span>
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Turnitin: 3.2%</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-slate-500">// Chapter Breakdown</p>
                  <p>├── Chapter 1: Introduction (pp. 1–32)</p>
                  <p>├── Chapter 2: Literature Review (pp. 33–88)</p>
                  <p>├── Chapter 3: Research Design &amp; Methodology (pp. 89–135)</p>
                  <p>├── Chapter 4: Data Presentation &amp; Statistical Analysis (pp. 136–210)</p>
                  <p>├── Chapter 5: Discussion &amp; Theoretical Implications (pp. 211–245)</p>
                  <p>├── Chapter 6: Conclusion, Limitations &amp; Recommendations (pp. 246–265)</p>
                  <p>├── References (300+ APA 7th Citations)</p>
                  <p>└── Appendices (Questionnaires, SEM Charts, Ethics Approval)</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px]">
                  <strong>DRC Compliance Guarantee:</strong> Formatted to exact font specifications (Times New Roman 12pt, 1.5 line spacing, 1.5&quot; left binding margin).
                </div>
              </div>
            </div>
          )}

          {/* Sample 2: PRISMA */}
          {activeSample === "prisma" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Service #4 • Systematic Review &amp; Meta-Analysis
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  PRISMA 2020 Compliant Systematic Methodology
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We formulate systematic database search strategies across PubMed, Scopus, Web of Science, and Embase with complete screening flowcharts and bias assessments.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                    <h4 className="text-xs font-bold text-purple-900">PRISMA Flowchart</h4>
                    <p className="text-[11px] text-purple-700 mt-1">Identification → Screening → Eligibility → Included studies diagram.</p>
                  </div>
                  <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                    <h4 className="text-xs font-bold text-purple-900">Risk of Bias (RoB)</h4>
                    <p className="text-[11px] text-purple-700 mt-1">Cochrane RoB 2, ROBINS-I, or Newcastle-Ottawa scale grading.</p>
                  </div>
                  <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                    <h4 className="text-xs font-bold text-purple-900">Meta-Analysis Insights</h4>
                    <p className="text-[11px] text-purple-700 mt-1">Odds ratios, Forest plots, and Funnel plots for publication bias.</p>
                  </div>
                  <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                    <h4 className="text-xs font-bold text-purple-900">PROSPERO Registration</h4>
                    <p className="text-[11px] text-purple-700 mt-1">Assistance with international prospective register protocol.</p>
                  </div>
                </div>
              </div>

              {/* Graphic Flowchart Mockup */}
              <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 shadow-inner text-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-purple-400 font-bold">📊 PRISMA_2020_Flow_Diagram.svg</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Standard 2020</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                    <span className="text-sky-300 font-bold">1. Identification:</span> 1,420 records identified from PubMed, Scopus &amp; WoS
                  </div>
                  <div className="text-center text-slate-500 text-sm">↓ (Duplicates removed: n=380)</div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                    <span className="text-sky-300 font-bold">2. Screening:</span> 1,040 titles &amp; abstracts screened (912 excluded)
                  </div>
                  <div className="text-center text-slate-500 text-sm">↓</div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                    <span className="text-sky-300 font-bold">3. Eligibility:</span> 128 full-text articles assessed for eligibility
                  </div>
                  <div className="text-center text-slate-500 text-sm">↓</div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-center text-emerald-300 font-bold">
                    4. Included: 34 studies included in systematic review &amp; quantitative synthesis
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sample 3: Research Paper */}
          {activeSample === "paper" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Service #2 • Scopus &amp; UGC Care Research Paper
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Publication-Ready Manuscripts from First Draft
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Crafted following the rigorous IMRaD format (Introduction, Methods, Results, and Discussion) with verified journal-standard references and high visual clarity figures.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Compelling 250-word Abstract with high-ranking SEO keywords</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Empirical or simulation models (MATLAB, Python, SPSS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Tailored to Guide for Authors of Elsevier, Springer &amp; IEEE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Free Peer Review response letter support upon submission</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 shadow-inner text-xs space-y-3 font-mono">
                <div className="text-sky-400 font-bold pb-2 border-b border-slate-800">
                  📄 Manuscript_Final_Format_Scopus_Q1.docx
                </div>
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-300">
                  <p className="text-amber-300 font-bold">[Title]: Machine Learning Optimization in Renewable Energy Microgrids</p>
                  <p className="text-[11px] text-slate-400 mt-1">[Authors]: Creative Content Scholar Collaboration</p>
                  <p className="text-[11px] text-slate-400 mt-2"><strong>Abstract:</strong> This study develops a hybrid LSTM-Transformer network to predict load demand in islanded microgrids... (250 words)</p>
                  <p className="text-[11px] text-slate-400 mt-1"><strong>Keywords:</strong> Smart Grids; Deep Learning; Renewable Integration; Power Dispatch</p>
                </div>
                <div className="text-emerald-400 text-[11px]">
                  ✓ Plagiarism: 2.1% (Turnitin verified) | AI Detection: 0.0%
                </div>
              </div>
            </div>
          )}

          {/* Sample 4: PPT Presentation */}
          {activeSample === "ppt" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Service #8 • Defense &amp; Viva PPT Presentation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  High-Impact Visuals Built for Examiner Approval
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We condense 200+ pages of thesis work into 20 crisp, visually persuasive slides complete with speaker notes to ace your viva committee defense.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Clear 15-to-25 slide defense roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Custom vector graphics, conceptual diagrams &amp; chart styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Hidden Speaker Notes under each slide with answers to examiner FAQs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 shadow-inner text-xs space-y-3 font-mono">
                <div className="text-emerald-400 font-bold pb-2 border-b border-slate-800">
                  📽️ PhD_Viva_Defense_Deck_Final.pptx (@ ₹700)
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
                    <p className="font-bold text-amber-300">Slide 1-3</p>
                    <p className="text-slate-400">Title, Research Problem &amp; Scope</p>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
                    <p className="font-bold text-amber-300">Slide 4-7</p>
                    <p className="text-slate-400">Literature Gap &amp; Conceptual Model</p>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
                    <p className="font-bold text-amber-300">Slide 8-12</p>
                    <p className="text-slate-400">Methodology &amp; Sampling Design</p>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded border border-slate-700 text-center">
                    <p className="font-bold text-amber-300">Slide 13-18</p>
                    <p className="text-slate-400">Key Findings, SEM &amp; Hypotheses</p>
                  </div>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Includes full PowerPoint (.pptx) &amp; high-res PDF backup for offline presentation projectors.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
