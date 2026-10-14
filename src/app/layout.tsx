import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FAQS } from "@/data/servicesData";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://creativecontentresearch.com"),
  title: {
    default: "Creative Content | Academic Research, PhD Thesis & Assignment Writing Services",
    template: "%s | Creative Content"
  },
  description:
    "Quality Research. Perfect Results. Professional PhD thesis writing, Scopus & UGC Care research papers, synopsis, systematic PRISMA reviews, dissertations, and assignments. 100% Human-written with Turnitin originality report.",
  keywords: [
    "research paper writing service",
    "PhD thesis writing service",
    "synopsis writing for PhD",
    "Scopus research paper writing",
    "UGC Care journal paper writing",
    "systematic literature review PRISMA",
    "master dissertation writing service",
    "assignment writing service India",
    "research paper writing India",
    "thesis data analysis SPSS Python",
    "academic research paper drafting",
    "viva presentation slides preparation",
    "Turnitin plagiarism check service",
    "academic research desk Indore",
    "review paper writing service"
  ],
  authors: [{ name: "Creative Content Academic Research Desk" }],
  creator: "Creative Content",
  publisher: "Creative Content",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creative Content | Academic Research, PhD Thesis & Assignment Writing Services",
    description:
      "Quality Research. Perfect Results. Professional PhD thesis writing, Scopus & UGC Care research papers, synopsis, PRISMA reviews, and assignments.",
    url: "https://creativecontentresearch.com",
    siteName: "Creative Content",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Content Academic Research & Writing Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Content | Academic Research & Writing Services",
    description:
      "Quality Research. Perfect Results. PhD thesis, research papers, synopsis, and assignments with Turnitin reports.",
    images: ["/brand-logo.jpg"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/brand-icon.jpg",
  },
  category: "Education & Research",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Local Business & Professional Academic Service Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Creative Content",
    "alternateName": "Creative Content Academic Research Desk",
    "url": "https://creativecontentresearch.com",
    "logo": "https://creativecontentresearch.com/logo.svg",
    "image": "https://creativecontentresearch.com/brand-logo.jpg",
    "description": "Professional academic research, PhD thesis writing, Scopus & UGC Care research papers, synopsis formulation, and assignment services.",
    "telephone": "+919685553703",
    "priceRange": "₹35 - ₹8500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "88 Empire Victory, Udhyog Nagar, Palda",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.6868",
      "longitude": "75.8755"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academic Research Writing Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PhD Thesis Writing Service",
            "description": "Complete PhD thesis from introduction to conclusion with SPSS/Python empirical data analysis."
          },
          "price": "8500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scopus & UGC Care Research Paper Writing",
            "description": "Original academic manuscripts prepared for indexed journal submission."
          },
          "price": "1000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PhD Synopsis Formulation",
            "description": "Structured doctoral research plan for university committee evaluation."
          },
          "price": "1000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Systematic Literature Review (PRISMA)",
            "description": "Evidence-based reviews using PRISMA 2020 protocol across major scientific databases."
          },
          "price": "1000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Coursework Assignment Writing Service",
            "description": "Academic course assignments with custom cover page and citations."
          },
          "price": "35",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  // Schema.org FAQPage for Google Search Rich Results Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Inject Structured Data for Rich Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F5] text-slate-900 antialiased font-sans selection:bg-amber-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
