export interface ServiceItem {
  id: number;
  numberBadge: string;
  badgeColor: {
    bg: string;
    border: string;
    text: string;
    gradient: string;
  };
  title: string;
  subtitle: string;
  description: string;
  price: number;
  priceDisplay: string;
  deliveryTime: string;
  features: string[];
  popular?: boolean;
  category: "phd" | "paper" | "review" | "presentation";
}

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    numberBadge: "1",
    badgeColor: {
      bg: "bg-red-500",
      border: "border-red-400",
      text: "text-red-600",
      gradient: "from-red-500 to-rose-600",
    },
    title: "SYNOPSIS",
    subtitle: "Well-Structured Synopsis for PhD Submission",
    description: "Expertly structured research synopsis adhering strictly to university DRC/RDC guidelines. Includes problem formulation, objectives, hypotheses, methodology, and key bibliography.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "3 - 5 Days",
    features: [
      "Strict University DRC/RDC Compliance",
      "Clear Research Objectives & Hypotheses",
      "Robust Research Methodology Design",
      "Tentative Chapterization & Timeline",
      "Free Turnitin Similarity Report"
    ],
    category: "phd"
  },
  {
    id: 2,
    numberBadge: "2",
    badgeColor: {
      bg: "bg-blue-600",
      border: "border-blue-400",
      text: "text-blue-600",
      gradient: "from-blue-600 to-indigo-700",
    },
    title: "RESEARCH PAPER",
    subtitle: "High Quality, Well-Researched & Publication Ready",
    description: "Original, high-impact empirical or theoretical research papers tailored for UGC Care, Scopus, IEEE, Springer, and SCI indexed journals with publication-grade formatting.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "5 - 7 Days",
    features: [
      "Publication-Grade Writing & Layout",
      "IEEE / APA / Harvard Citation Style",
      "Statistical / Data Analysis Inclusion",
      "Targeted for Scopus & UGC Care Journals",
      "100% AI-Free & Plagiarism-Free Report"
    ],
    popular: true,
    category: "paper"
  },
  {
    id: 3,
    numberBadge: "3",
    badgeColor: {
      bg: "bg-emerald-600",
      border: "border-emerald-400",
      text: "text-emerald-600",
      gradient: "from-emerald-600 to-teal-700",
    },
    title: "REVIEW PAPER",
    subtitle: "In-Depth Literature Review with Critical Analysis & Insights",
    description: "Comprehensive narrative literature review synthesizing recent research breakthroughs (last 5-10 years), highlighting critical research gaps, and proposing future research directions.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "4 - 6 Days",
    features: [
      "Critical Synthesis of 40+ Peer-Reviewed Studies",
      "Identification of Genuine Research Gaps",
      "Comparative Summary Tables & Visuals",
      "High Citation Value & Analytical Depth",
      "Free Revisions until Acceptance"
    ],
    category: "review"
  },
  {
    id: 4,
    numberBadge: "4",
    badgeColor: {
      bg: "bg-purple-600",
      border: "border-purple-400",
      text: "text-purple-600",
      gradient: "from-purple-600 to-violet-800",
    },
    title: "SYSTEMATIC REVIEW PAPER & META ANALYSIS",
    subtitle: "PRISMA Based Studies with Meta-Analysis & Statistical Insights",
    description: "Methodologically rigorous systematic reviews following PRISMA 2020 guidelines with inclusion/exclusion flowcharts, bias risk assessment (ROB2 / Newcastle-Ottawa), and quantitative meta-analysis.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "7 - 10 Days",
    features: [
      "Complete PRISMA 2020 Guidelines & Flowchart",
      "Systematic Database Search (PubMed, Scopus, WoS)",
      "Risk of Bias Assessment & Forest Plots",
      "Heterogeneity & Sensitivity Analysis",
      "Publication Ready for High Q1/Q2 Journals"
    ],
    popular: true,
    category: "review"
  },
  {
    id: 5,
    numberBadge: "5",
    badgeColor: {
      bg: "bg-amber-600",
      border: "border-amber-400",
      text: "text-amber-600",
      gradient: "from-amber-500 to-orange-600",
    },
    title: "PHD THESIS",
    subtitle: "Comprehensive & High Quality PhD Thesis (All Chapters Included)",
    description: "End-to-end PhD thesis development covering Introduction, Literature Review, Methodology, Data Analysis/Findings, Discussion, Conclusion, and exhaustive bibliography according to your university template.",
    price: 8500,
    priceDisplay: "₹ 8,500",
    deliveryTime: "15 - 25 Days",
    features: [
      "All Chapters Included (1 to 5 / 6)",
      "Chapter-Wise Delivery & Review Milestones",
      "SPSS / R / Python / AMOS Analysis Integration",
      "University Formatting & Defense Prep Support",
      "Full Confidentiality & Turnitin Guarantee (<10%)"
    ],
    popular: true,
    category: "phd"
  },
  {
    id: 6,
    numberBadge: "6",
    badgeColor: {
      bg: "bg-teal-600",
      border: "border-teal-400",
      text: "text-teal-600",
      gradient: "from-teal-600 to-emerald-700",
    },
    title: "MASTER'S DISSERTATION",
    subtitle: "Well-Researched Dissertation for Master's Programs",
    description: "Premium academic dissertation for M.Tech, M.Sc, MBA, M.Pharm, and MA students with rigorous theoretical grounding, empirical data collection, and academic defense readiness.",
    price: 4000,
    priceDisplay: "₹ 4,000",
    deliveryTime: "10 - 15 Days",
    features: [
      "Tailored for M.Tech, MBA, M.Sc, M.Ed & M.Pharm",
      "Complete Empirical or Qualitative Analysis",
      "Plagiarism Below 10% Guaranteed",
      "Supervisor Feedback Corrections Included",
      "Includes Executive Summary & Abstract"
    ],
    category: "phd"
  },
  {
    id: 7,
    numberBadge: "7",
    badgeColor: {
      bg: "bg-rose-600",
      border: "border-rose-400",
      text: "text-rose-600",
      gradient: "from-rose-600 to-pink-700",
    },
    title: "RESEARCH PROPOSAL",
    subtitle: "Strong Research Proposal for PhD or Funding Purposes",
    description: "Persuasive and compelling research proposal designed to win university admissions (IITs, NITs, Central Universities, Foreign Universities) or grant funding from ICSSR, SERB, UGC, or DST.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "3 - 5 Days",
    features: [
      "High Approval & Selection Track Record",
      "Compelling Problem Statement & Novelty",
      "Budget & Timeline Milestones (Gantt Chart)",
      "Aligned with Funding Agency / University Criteria",
      "Interview & Viva Preparation Notes Included"
    ],
    category: "paper"
  },
  {
    id: 8,
    numberBadge: "8",
    badgeColor: {
      bg: "bg-cyan-600",
      border: "border-cyan-400",
      text: "text-cyan-600",
      gradient: "from-cyan-600 to-blue-700",
    },
    title: "PPT PRESENTATION",
    subtitle: "Professional PPTs for Defense, Seminars, Interviews & Viva",
    description: "Visually captivating, slide-by-slide academic presentation deck designed to impress DRC committees, external examiners, and conference audiences. Includes speaker notes.",
    price: 700,
    priceDisplay: "₹ 700",
    deliveryTime: "1 - 2 Days",
    features: [
      "Custom Graphic Design & Academic Diagrams",
      "Concise Bullet Points & Key Findings Highlight",
      "Speaker Notes for Confidence during Viva",
      "Available in 15 to 45 Slide Decks",
      "Fast 24-Hour Delivery Available"
    ],
    category: "presentation"
  }
];

export const GUARANTEES = [
  {
    icon: "ShieldCheck",
    title: "100% Original",
    description: "Authentic scholarly writing crafted from scratch by subject matter specialists."
  },
  {
    icon: "Cpu",
    title: "AI Free Content",
    description: "Zero generative-AI hallucinations; verified with premium AI detectors (Turnitin / GPTZero)."
  },
  {
    icon: "FileCheck",
    title: "Plagiarism Free",
    description: "Guaranteed under university threshold (<10%) with verified Turnitin similarity report."
  },
  {
    icon: "Clock",
    title: "On-Time Delivery",
    description: "Strict deadline adherence with milestone chapter updates. Never miss a submission."
  },
  {
    icon: "GraduationCap",
    title: "Expert Writers",
    description: "PhD & Post-Doctoral scholars across 50+ diverse academic disciplines."
  },
  {
    icon: "IndianRupee",
    title: "Affordable Prices",
    description: "Student-friendly, transparent pricing with no hidden charges or milestone traps."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  { title: "Well Researched & In-Depth Content", desc: "Peer-reviewed citations from indexed scientific databases." },
  { title: "100% Original Scholarly Work", desc: "Crafted specifically to your unique topic and problem statement." },
  { title: "Plagiarism Free (<10% Guarantee)", desc: "Includes authentic Turnitin similarity PDF report." },
  { title: "Expert Writers in All Subjects", desc: "STEM, Medical, Humanities, Commerce, Law & Social Sciences." },
  { title: "On-Time Delivery, Every Time!", desc: "Prompt chapter delivery allowing you enough time to review." },
  { title: "Strict Confidentiality Guaranteed", desc: "Your identity, topic, and documents are protected under strict NDA." },
  { title: "Affordable Prices for Every Student", desc: "High quality academic support at democratic rates." }
];

export const SUBJECT_DOMAINS = [
  "Computer Science & AI/ML",
  "Biotechnology & Life Sciences",
  "Management (MBA) & Finance",
  "Mechanical & Civil Engineering",
  "Pharmacy & Medical Research",
  "Psychology & Social Sciences",
  "Education & Pedagogy",
  "Law & Legal Studies",
  "Commerce & Economics",
  "English Literature & Linguistics",
  "Environmental Science",
  "Physics & Applied Mathematics"
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rohit Verma",
    institution: "IIT Roorkee Scholar",
    service: "PhD Thesis & Defense PPT",
    comment: "The depth of literature review and methodology support I received from Creative Content was outstanding. They followed my university DRC guidelines down to the last font size. Defense went smoothly!",
    rating: 5
  },
  {
    name: "Ananya Mukherjee",
    institution: "Delhi University",
    service: "Systematic Review Paper (PRISMA)",
    comment: "Needed a PRISMA-compliant meta-analysis paper for a Scopus journal. Satyam Sir's team delivered within 8 days with pristine forest plots and zero plagiarism. Truly life-saving service!",
    rating: 5
  },
  {
    name: "Mohd. Tariq Khan",
    institution: "Aligarh Muslim University",
    service: "PhD Synopsis & Research Proposal",
    comment: "My synopsis was approved on the first DRC meeting without revisions! The team understood the core hypotheses and theoretical framework perfectly. Very budget-friendly.",
    rating: 5
  },
  {
    name: "Pooja Deshmukh",
    institution: "Pune University",
    service: "Master's Dissertation (MBA)",
    comment: "100% authentic work! The Turnitin report showed only 4% similarity and 0% AI. They even helped me understand the statistical charts for my viva.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What if I don't have a finalized research topic yet?",
    answer: "No problem at all! Simply tell us your department or broad area of interest on WhatsApp. Our mentors will suggest 3 to 4 trending, researchable topics with clear problem statements and novelty angles for you to discuss with your supervisor."
  },
  {
    question: "How do you guarantee that the content is 100% human-written and not AI?",
    answer: "Every thesis, research paper, and assignment is written from scratch by subject matter specialists citing authentic peer-reviewed papers. Prior to delivery, every file is scanned using Turnitin's official AI detector and similarity index to guarantee 0% AI and under 10% similarity."
  },
  {
    question: "Can you format my thesis according to my university's specific guidelines?",
    answer: "Yes, absolutely! Just share your university's DRC/RDC ordinance or guideline PDF (e.g. Times New Roman 12pt, 1.5 line spacing, 1.5-inch left margin, specific chapter structure, APA 7th or IEEE citation). We strictly format every page accordingly."
  },
  {
    question: "What if my guide or DRC committee asks for corrections?",
    answer: "We offer free revisions aligned with your supervisor's or committee's feedback until your work is accepted. Simply send us their marked comments or review notes."
  },
  {
    question: "How does the payment process work?",
    answer: "We follow a safe, milestone-based approach. You pay a small booking advance, we prepare and share chapter drafts for your review, and balance is settled milestone-by-milestone via UPI (Google Pay / PhonePe / Paytm) or Bank Transfer."
  },
  {
    question: "How quickly can you deliver an urgent assignment or paper?",
    answer: "For college assignments and school projects, we can deliver within 24 to 48 hours. For research papers and synopsis, our standard turnaround is 3 to 7 days, with express priority options available if you have an imminent deadline."
  }
];

export const DEPLOYMENT_PLATFORMS = [
  {
    name: "Vercel (Most Recommended)",
    badge: "Free Forever",
    isRecommended: true,
    steps: [
      "Create a free account on vercel.com with your GitHub account.",
      "Push this repository to your GitHub (e.g. github.com/your-username/creative-content).",
      "Click 'Add New Project' in Vercel and import your repository.",
      "Click 'Deploy'. In 45 seconds, your site is live with a free domain like `creative-content.vercel.app`!",
      "Free SSL certificate & global CDN are automatically enabled."
    ],
    domainNote: "Gives you a free *.vercel.app domain instantly. You can also connect any custom domain (e.g. creativecontent.in) with 0 extra cost."
  },
  {
    name: "Netlify",
    badge: "100% Free",
    steps: [
      "Sign up at netlify.com with GitHub.",
      "Click 'Add new site' -> 'Import an existing project'.",
      "Select your repo; build command is `npm run build` and publish directory is `.next`.",
      "Get a free live domain like `creative-content.netlify.app`."
    ],
    domainNote: "Includes 100GB monthly bandwidth, free HTTPS, and custom domain support."
  },
  {
    name: "Cloudflare Pages",
    badge: "Unlimited Bandwidth",
    steps: [
      "Create a free account on dash.cloudflare.com.",
      "Navigate to 'Workers & Pages' -> 'Create application' -> 'Pages'.",
      "Connect GitHub repository and choose Next.js preset.",
      "Site goes live on `creative-content.pages.dev` with world-class DDoS protection."
    ],
    domainNote: "Ultra-fast global edge network with completely free SSL."
  }
];

export const ASSIGNMENT_PACKAGES = {
  plain: {
    id: "plain",
    title: "Plain Format",
    badge: "Simple & Clean",
    pricePerPage: 35,
    priceDisplay: "Starting @ ₹35 / Page",
    description: "Standard typed or neat handwritten assignment with proper academic paragraphing and references.",
    features: [
      "Standard academic margins & spacing",
      "Grammar & spell-checked content",
      "Proper citations & bibliography",
      "Delivery in Word / PDF / Print-Ready",
      "Neat & Clean layout guaranteed"
    ]
  },
  designed: {
    id: "designed",
    title: "With Design Format",
    badge: "Most Loved by Students ♡",
    pricePerPage: 65,
    priceDisplay: "Starting @ ₹65 / Page",
    description: "Visually captivating, professionally styled assignments with colorful headers, borders, illustrations, and custom title page.",
    features: [
      "Attractive layouts & aesthetic typography",
      "Proper formatting with stylish headings & borders",
      "Creative color schemes & infographic diagrams",
      "Custom decorative Title Page included",
      "Makes your work look 100% professional!"
    ]
  }
};

export const ASSIGNMENT_CATEGORIES = [
  { name: "College Assignments", icon: "GraduationCap", desc: "Engineering, Commerce, Arts, Medical, Management & Science assignments." },
  { name: "School Projects", icon: "BookOpen", desc: "CBSE, ICSE & State board practical files, charts, models & project files." },
  { name: "Office Reports", icon: "Briefcase", desc: "Corporate presentations, executive project summaries, market surveys." },
  { name: "Presentations (Print / Handwritten)", icon: "PenTool", desc: "Handcrafted physical files or digital presentation decks." },
  { name: "Notes & Summaries", icon: "FileText", desc: "Exam-oriented revision sheets, flowcharts & mind maps." }
];

export const ASSIGNMENT_PILLARS = [
  { title: "On-Time Delivery", desc: "Never miss your submission deadline", icon: "Clock" },
  { title: "Neat & Clean Work", desc: "Flawless handwriting and formatting", icon: "ShieldCheck" },
  { title: "Creative Designs", desc: "Eye-catching aesthetics that boost scores", icon: "Sparkles" },
  { title: "Affordable Prices", desc: "Pocket-friendly rates for every student", icon: "Coins" }
];

export const CONTACT_INFO = {
  brandName: "Creative Content",
  tagline: "All-in-One Research Writing Services & Academic Projects",
  motto: "Quality Research. Perfect Results.",
  whatsappNumber: "+919876543210", // Users can replace this with their actual number
  displayPhone: "+91 98765 43210",
  email: "support@creativecontentresearch.com",
  instagramHandle: "@creativecontent.academic",
  instagramUrl: "https://instagram.com",
  socialChannel: "Teaching Life By Satyam",
  workingHours: "24/7 Academic Support",
  location: "New Delhi / Pan India Research Support"
};

