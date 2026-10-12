import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Content | All-In-One Research Writing Services",
  description: "Quality Research. Perfect Results. PhD Thesis, Research Papers, Review Papers, Dissertations, Synopsis & PPTs at affordable prices. 100% Original, AI-Free & Plagiarism Free.",
  keywords: "research paper writing, PhD thesis writing, synopsis for PhD, master dissertation, review paper writing, systematic review PRISMA, academic research writing India",
  authors: [{ name: "Creative Content Academic Services" }],
  openGraph: {
    title: "Creative Content | All-In-One Research Writing Services",
    description: "Quality Research. Perfect Results. PhD Thesis, Research Papers, Dissertations, and Synopsis at student-friendly prices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans selection:bg-amber-400 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}

