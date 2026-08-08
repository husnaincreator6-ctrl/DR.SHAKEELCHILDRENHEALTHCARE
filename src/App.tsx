import React, { useState } from 'react';
import { Header } from './components/Header';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Hero } from './components/Hero';
import { TrustCredentials } from './components/TrustCredentials';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationsSection } from './components/LocationsSection';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QualificationsModal } from './components/QualificationsModal';
import { AdminPanel } from './components/AdminPanel';
import { SeoStructuredData } from './components/SeoStructuredData';
import { LocationId } from './types';

export default function App() {
  const [qualificationsModalOpen, setQualificationsModalOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [bookingLocation, setBookingLocation] = useState<LocationId>('gamber');
  const [bookingReason, setBookingReason] = useState('');

  const scrollToBooking = (loc?: LocationId, reason?: string) => {
    if (loc) setBookingLocation(loc);
    if (reason) setBookingReason(reason);

    const bookingEl = document.getElementById('appointments');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-200 selection:text-sky-900 pb-16 lg:pb-0">
      
      {/* SEO Schema Injection */}
      <SeoStructuredData />

      {/* 1. Sticky Header */}
      <Header
        onOpenBooking={() => scrollToBooking()}
        onToggleAdmin={() => setAdminPanelOpen(!adminPanelOpen)}
        isAdminOpen={adminPanelOpen}
      />

      {/* Main Content Sections in Exact Order */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenQualifications={() => setQualificationsModalOpen(true)}
        />

        {/* 3. Trust / 20+ Years Experience */}
        <TrustCredentials
          onOpenQualifications={() => setQualificationsModalOpen(true)}
        />

        {/* 4. About Doctor */}
        <AboutDoctor
          onOpenBooking={() => scrollToBooking()}
          onOpenQualifications={() => setQualificationsModalOpen(true)}
        />

        {/* 5. Child Healthcare Services */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => scrollToBooking(undefined, serviceTitle)}
        />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Locations – Okara + Adda Gamber */}
        <LocationsSection
          onBookAtLocation={(locationId) => scrollToBooking(locationId)}
        />

        {/* 8. Appointment Booking */}
        <BookingSection
          initialLocation={bookingLocation}
          initialReason={bookingReason}
        />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. FAQs Accordion */}
        <FaqSection />

        {/* 11. Contact Section */}
        <ContactSection
          onOpenBooking={() => scrollToBooking()}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenQualifications={() => setQualificationsModalOpen(true)}
      />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <MobileBottomBar onOpenBooking={() => scrollToBooking()} />

      {/* Modals & Overlays */}
      <QualificationsModal
        isOpen={qualificationsModalOpen}
        onClose={() => setQualificationsModalOpen(false)}
        onOpenBooking={() => scrollToBooking()}
      />

      <AdminPanel
        isOpen={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
      />

    </div>
  );
}
