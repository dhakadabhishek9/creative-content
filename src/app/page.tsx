"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AssignmentsHub } from "@/components/AssignmentsHub";
import { InteractiveCalculator } from "@/components/InteractiveCalculator";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 pb-16 sm:pb-0">
      {/* Header Bar */}
      <Header
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
        onOpenOrderModal={handleScrollToCalculator}
        whatsappNumber={whatsappNumber}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Simple, attractive Hero */}
        <Hero
          onOpenCalculator={handleScrollToCalculator}
          whatsappNumber={whatsappNumber}
        />

        {/* 8 Academic Services from Flyer 1 */}
        <ServicesGrid
          onSelectServiceForCalculator={handleSelectServiceForCalculator}
          whatsappNumber={whatsappNumber}
        />

        {/* Assignments & Projects from Flyer 2 */}
        <AssignmentsHub
          whatsappNumber={whatsappNumber}
        />

        {/* Tell Us What You Want & Connect via WhatsApp */}
        <InteractiveCalculator
          selectedService={selectedService}
          whatsappNumber={whatsappNumber}
        />

        {/* Why Choose Us & 4-Step Process */}
        <WhyChooseUs />

        {/* Straightforward FAQs */}
        <FaqSection whatsappNumber={whatsappNumber} />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
        whatsappNumber={whatsappNumber}
      />

      {/* Floating WhatsApp Widget */}
      <div className="hidden sm:block">
        <FloatingWhatsApp
          whatsappNumber={whatsappNumber}
          onUpdateWhatsAppNumber={setWhatsappNumber}
        />
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar
        onOpenCalculator={handleScrollToCalculator}
        whatsappNumber={whatsappNumber}
      />

      {/* Free Deployment Guide Modal */}
      <DeployGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
