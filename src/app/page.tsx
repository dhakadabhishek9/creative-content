"use client";

import React, { useState, useEffect } from "react";
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
import { ServiceItem, CONTACT_INFO } from "@/data/servicesData";

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [whatsappNumber, setWhatsappNumber] = useState<string>(CONTACT_INFO.whatsappNumber);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      if (href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (href.startsWith("#") && href.length > 1) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const headerOffset = 76;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth"
          });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      const headerOffset = 76;
      const elementPosition = calculatorSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
    }
  };

  const handleSelectServiceForCalculator = (service: ServiceItem) => {
    setSelectedService(service);
    scrollToCalculator();
  };

  const handleScrollToCalculator = () => {
    scrollToCalculator();
  };

  return (
    <div className="min-h-screen flex flex-col bg-scholarly-canvas text-slate-900 pb-16 sm:pb-0">
      {/* Header Bar */}
      <Header
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
    </div>
  );
}
