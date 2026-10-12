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
    subtitle: "Clear Synopsis for PhD Approval",
    description: "Well-structured research plan ready for university committee approval. Includes research topic, goals, questions, and research method.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "3 - 5 Days",
    features: [
      "Follows your university format strictly",
      "Clear research goals and questions",
      "Proper research plan & timeline",
      "Help with supervisor corrections",
      "Free plagiarism check report"
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
    subtitle: "Ready for Scopus & UGC Care Journals",
    description: "Original, high quality research paper ready to submit to good journals like Scopus, UGC Care, IEEE, or Springer with proper references.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "5 - 7 Days",
    features: [
      "Ready for journal submission",
      "Proper reference style (APA / IEEE / Harvard)",
      "Charts and data analysis included",
      "100% human written, zero AI",
      "Plagiarism below 10% guaranteed"
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
    subtitle: "In-Depth Study of Recent Research",
    description: "Detailed summary of 30+ recent research papers, highlighting what is missing in current research and giving clear comparison tables.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "4 - 6 Days",
    features: [
      "Summary of recent 30+ scientific papers",
      "Easy-to-read comparison tables",
      "Clear explanation of research gaps",
      "High reference value for students",
      "Free revisions until approved"
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
    title: "SYSTEMATIC REVIEW & PRISMA",
    subtitle: "PRISMA Chart & Meta-Analysis",
    description: "Step-by-step review following official PRISMA rules with search flowcharts, data graphs, and quality checks across PubMed and Scopus.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "7 - 10 Days",
    features: [
      "Official PRISMA flowchart included",
      "Search from PubMed, Scopus & Web of Science",
      "Easy data graphs & statistics",
      "High acceptance rate in Q1/Q2 journals",
      "Free reviewer correction support"
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
    subtitle: "Complete Thesis (All Chapters Included)",
    description: "Full PhD thesis from Chapter 1 to the end: Introduction, Literature Review, Methodology, Data Analysis (SPSS/Python), Discussion, and References.",
    price: 8500,
    priceDisplay: "₹ 8,500",
    deliveryTime: "15 - 25 Days",
    features: [
      "All chapters included (1 to 5 / 6)",
      "Delivered chapter-by-chapter for your review",
      "Data analysis in SPSS / Python / Excel",
      "Formatted to your university handbook",
      "Free viva & defense talking points"
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
    subtitle: "For M.Tech, MBA, M.Sc & M.Pharm",
    description: "High quality dissertation project for Master's students with research surveys, data charts, and clear project conclusions.",
    price: 4000,
    priceDisplay: "₹ 4,000",
    deliveryTime: "10 - 15 Days",
    features: [
      "Made for M.Tech, MBA, M.Sc, M.Ed & M.Pharm",
      "Real survey data & analysis included",
      "Low plagiarism under 10% guaranteed",
      "Guide corrections included for free",
      "Summary abstract and slide deck ready"
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
    subtitle: "For PhD Admission & Grants",
    description: "Strong, persuasive proposal to win PhD admission in top universities (IIT, Central Universities, Abroad) or get research funding.",
    price: 1000,
    priceDisplay: "₹ 1,000",
    deliveryTime: "3 - 5 Days",
    features: [
      "High approval rate in interviews",
      "Clear problem statement & fresh ideas",
      "Project timeline and budget plan",
      "Matches funding agency guidelines",
      "Interview prep notes included"
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
    subtitle: "For Viva, Seminars & Defense",
    description: "Clean, professional presentation slides designed to impress your examiners and teachers. Comes with simple speaker notes for your viva.",
    price: 700,
    priceDisplay: "₹ 700",
    deliveryTime: "1 - 2 Days",
    features: [
      "Clean slide design with charts & diagrams",
      "Clear bullet points that are easy to explain",
      "Speaker notes under slides for easy speaking",
      "15 to 30 slides as needed",
      "Urgent 24-hour delivery available"
    ],
    category: "presentation"
  }
];

export const GUARANTEES = [
  {
    icon: "ShieldCheck",
    title: "100% Original",
    description: "Written from scratch for your topic. No copy-paste."
  },
  {
    icon: "Cpu",
    title: "Zero AI Content",
    description: "Written by real human experts. 0% AI guaranteed."
  },
  {
    icon: "FileCheck",
    title: "Low Plagiarism",
    description: "Always under 10% with official Turnitin check report."
  },
  {
    icon: "Clock",
    title: "Always On Time",
    description: "Delivered on or before your deadline date."
  },
  {
    icon: "GraduationCap",
    title: "Subject Experts",
    description: "Experienced writers for all subjects and topics."
  },
  {
    icon: "IndianRupee",
    title: "Low Student Rates",
    description: "Affordable and transparent prices for every student."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  { title: "Well Researched & In-Depth Content", desc: "Written using real research papers and books." },
  { title: "100% Original Work (No Copy-Paste)", desc: "Fresh content crafted uniquely for your project." },
  { title: "Plagiarism Free (<10% Guarantee)", desc: "Free Turnitin PDF report included with every order." },
  { title: "Expert Writers in All Subjects", desc: "Engineering, Medical, Commerce, Law, Arts & Science." },
  { title: "On-Time Delivery, Every Time!", desc: "Get your work with enough time to read and submit." },
  { title: "Your Details are 100% Secret & Safe", desc: "We never share your topic or personal info with anyone." },
  { title: "Affordable Prices for Every Student", desc: "High quality help at student-friendly rates." }
];

export const SUBJECT_DOMAINS = [
  "Computer Science & AI",
  "Business & Management (MBA)",
  "Biotechnology & Life Sciences",
  "Engineering (Civil / Mechanical / Electrical)",
  "Pharmacy & Medicine",
  "Psychology & Social Sciences",
  "Education & Teaching",
  "Law & Legal Studies",
  "Commerce & Economics",
  "English & Literature",
  "Environmental Studies",
  "Mathematics & Physics"
];

export const FAQS = [
  {
    question: "What if I don't have a topic yet?",
    answer: "No problem! Just message Satyam Sir on WhatsApp with your subject. We will give you 3 to 4 easy, approved topic ideas for free."
  },
  {
    question: "Is the work written by AI or ChatGPT?",
    answer: "No. Every paper and assignment is written by real human subject experts. We scan it with Turnitin AI detector to ensure 0% AI before sending."
  },
  {
    question: "Can you follow my university format?",
    answer: "Yes! Just send us your college guidelines, font size, margins, or syllabus on WhatsApp. We follow them strictly."
  },
  {
    question: "What if my teacher or guide asks for changes?",
    answer: "We provide free revisions! Simply tell us what your teacher wants changed, and we will update it for you without extra charge."
  },
  {
    question: "How do I pay?",
    answer: "You only pay a small advance first. We write and share the first draft with you. Once you are happy, pay the balance via UPI (Google Pay, PhonePe, Paytm)."
  },
  {
    question: "Can you deliver urgent assignments in 24 hours?",
    answer: "Yes! For urgent college assignments or PPTs, we have a fast 24 to 48 hour delivery option."
  }
];

export const DEPLOYMENT_PLATFORMS = [
  {
    name: "Vercel (Recommended)",
    badge: "100% Free Forever",
    isRecommended: true,
    steps: [
      "Create a free account on vercel.com using GitHub.",
      "Push this folder to your GitHub account.",
      "Click 'Import' in Vercel and click 'Deploy'.",
      "Your website is live in 1 minute with a free domain like your-site.vercel.app!"
    ],
    domainNote: "Gives you a free *.vercel.app link. You can also add your own custom .in or .com domain for free."
  },
  {
    name: "Netlify",
    badge: "Free",
    steps: [
      "Sign up at netlify.com.",
      "Import your GitHub project.",
      "Get a live link like your-site.netlify.app instantly."
    ],
    domainNote: "100% free hosting with automatic security."
  },
  {
    name: "Cloudflare Pages",
    badge: "Free",
    steps: [
      "Sign up at dash.cloudflare.com.",
      "Connect your GitHub repository.",
      "Your site is live on pages.dev."
    ],
    domainNote: "Fast and reliable hosting."
  }
];

export const CONTACT_INFO = {
  brandName: "Creative Content",
  tagline: "All-in-One Research & Assignment Writing",
  motto: "Quality Research. Perfect Results.",
  whatsappNumber: "+919876543210",
  displayPhone: "+91 98765 43210",
  email: "support@creativecontentresearch.com",
  instagramHandle: "@creativecontent.academic",
  instagramUrl: "https://instagram.com",
  socialChannel: "Teaching Life By Satyam",
  workingHours: "24/7 Student Support",
  location: "Pan India Academic Help"
};
