"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GuaranteeStrip } from "@/components/GuaranteeStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { InteractiveCalculator } from "@/components/InteractiveCalculator";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SampleShowcase } from "@/components/SampleShowcase";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { DeployGuideModal } from "@/components/DeployGuideModal";
import { ServiceItem, CONTACT_INFO } from "@/data/servicesData";

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string>(CONTACT_INFO.whatsappNumber);

  const handleSelectServiceForCalculator = (service: ServiceItem) => {
    setSelectedService(service);
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-amber-400 selection:text-slate-900">
      {/* Header Bar */}
      <Header
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
        onOpenOrderModal={handleScrollToCalculator}
        whatsappNumber={whatsappNumber}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching poster title, banners & badges */}
        <Hero
          onOpenCalculator={handleScrollToCalculator}
          whatsappNumber={whatsappNumber}
        />

        {/* 6 Guarantee Badges directly from the poster */}
        <GuaranteeStrip />

        {/* All 8 Core Services with #1 to #8 color-coded numbered badges */}
        <ServicesGrid
          onSelectServiceForCalculator={handleSelectServiceForCalculator}
          whatsappNumber={whatsappNumber}
        />

        {/* Interactive Quote Builder: Tell us where to connect & what you want */}
        <InteractiveCalculator
          selectedService={selectedService}
          whatsappNumber={whatsappNumber}
        />

        {/* Why Choose Us & Turnitin/AI Authenticity Proof Card */}
        <WhyChooseUs />

        {/* Academic Quality Blueprint Showcase */}
        <SampleShowcase />

        {/* Scholar Testimonials & Numbers */}
        <Testimonials />

        {/* Comprehensive FAQs */}
        <FaqSection whatsappNumber={whatsappNumber} />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
        whatsappNumber={whatsappNumber}
      />

      {/* Floating Interactive WhatsApp Chat Widget */}
      <FloatingWhatsApp
        whatsappNumber={whatsappNumber}
        onUpdateWhatsAppNumber={setWhatsappNumber}
      />

      {/* Free Deployment Guide Modal (Vercel, Netlify, Free Domains) */}
      <DeployGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
