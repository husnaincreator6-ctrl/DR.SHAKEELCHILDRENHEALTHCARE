import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MessageCircle, UserCheck } from 'lucide-react';
import { DOCTOR_PROFILE, CALL_PHONE_NUMBER, CALL_DISPLAY_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onToggleAdmin, isAdminOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Child Care', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Locations', href: '#locations' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-sky-700/60 text-sky-100 px-2 py-0.5 rounded-full text-[11px] font-medium border border-sky-600/40">
              <ShieldCheck className="w-3 h-3 text-emerald-300" /> 20+ Years Experience
            </span>
            <span className="hidden sm:inline text-sky-200">
              Child Healthcare Clinic • Adda Gamber, Punjab
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href={`tel:${CALL_PHONE_NUMBER}`}
              id="header-top-call"
              className="hover:text-sky-200 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{CALL_DISPLAY_NUMBER}</span>
            </a>

            <button
              onClick={onToggleAdmin}
              id="header-admin-portal-btn"
              className={`text-[11px] px-2.5 py-0.5 rounded font-medium transition-all ${
                isAdminOpen
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'bg-sky-800/80 hover:bg-sky-700 text-sky-100 border border-sky-600/50'
              }`}
              title="Clinic Admin Appointment Dashboard"
            >
              <UserCheck className="w-3 h-3 inline mr-1" />
              {isAdminOpen ? 'Exit Admin Portal' : 'Clinic Staff Login'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" id="header-brand-link" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-cyan-700 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform">
            <span className="font-serif">DR</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors leading-tight">
              {DOCTOR_PROFILE.name}
            </h1>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Child Healthcare Clinic | Adda Gamber
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CALL_PHONE_NUMBER}`}
            id="header-desktop-call-btn"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Call Now</span>
          </a>

          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="header-desktop-wa-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="header-desktop-book-btn"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            id="header-mobile-quick-book"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="header-hamburger-btn"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex gap-2">
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                id="header-mobile-drawer-call"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                id="header-mobile-drawer-wa"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="header-mobile-drawer-book-btn"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
