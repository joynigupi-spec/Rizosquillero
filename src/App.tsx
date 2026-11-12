/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandEssence } from './components/BrandEssence';
import { ServicesSection } from './components/ServicesSection';
import { CombosShowcase } from './components/CombosShowcase';
import { CurlTypeGuide } from './components/CurlTypeGuide';
import { SalonExperience } from './components/SalonExperience';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InteractiveBookingModal } from './components/InteractiveBookingModal';
import { ServiceItem } from './data/salonData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  const [preselectedServiceName, setPreselectedServiceName] = useState<string | undefined>();

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedServiceName(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setPreselectedServiceId(service.id);
    setPreselectedServiceName(service.name);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithServiceName = (serviceName: string) => {
    setPreselectedServiceId(undefined);
    setPreselectedServiceName(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setPreselectedServiceId(undefined);
    setPreselectedServiceName(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F9EEDC] text-[#46200D] flex flex-col selection:bg-[#FBBA42] selection:text-[#46200D]">
      {/* Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Brand Concept & 3 Pillars: Cuidar, Definir, Celebrar */}
        <BrandEssence />

        {/* Visual Services Section (Cortes, Definición, Coloración, etc.) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* All-in-one Combos 2025 (Catalog Highlights) */}
        <CombosShowcase onSelectService={handleSelectService} />

        {/* Educational Interactive Texture Guide: ¿Cuál es tu tipo de rizo? */}
        <CurlTypeGuide onOpenBookingWithService={handleOpenBookingWithServiceName} />

        {/* Salon Experience & Estefani's Story */}
        <SalonExperience onOpenBooking={() => handleOpenBooking()} />

        {/* Transformation & Results Gallery */}
        <BeforeAfterShowcase onOpenBooking={() => handleOpenBooking()} />

        {/* Testimonials from Barranquilla Clients */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* Location & Contact in Barranquilla */}
        <LocationAndContact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Appointment Scheduler Modal */}
      <InteractiveBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
        preselectedServiceName={preselectedServiceName}
      />
    </div>
  );
}
