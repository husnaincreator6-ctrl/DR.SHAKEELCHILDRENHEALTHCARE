import React from 'react';
import { Calendar, Phone, MessageCircle, MapPin, CheckCircle2, Clock, Award } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES, CALL_PHONE_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQualifications: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQualifications }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50/50 py-12 md:py-20 lg:py-24 border-b border-sky-100">
      {/* Background Decorative Healthcare Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100/90 text-sky-900 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span>
              20+ YEARS OF EXPERIENCE IN CHILD HEALTHCARE
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight sm:leading-tight tracking-tight">
              Compassionate Child Healthcare,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-700 to-sky-900">
                You Can Trust
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Experienced medical care for children at Adda Gamber Clinic, with a focus on thoughtful diagnosis, guidance and compassionate support for parents and families.
            </p>

            {/* Doctor Credentials Line */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-slate-800 font-semibold bg-white/80 p-3 rounded-xl border border-sky-100 shadow-xs max-w-xl">
              <span className="text-sky-800 font-bold">Qualifications:</span>
              <span className="text-slate-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                MD (Medicine)
              </span>
              <span className="text-slate-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                MBBS
              </span>
              <span className="text-slate-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                RMP
              </span>
              <span className="text-slate-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                D.A. (PGMI)
              </span>
              <span className="text-slate-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                Diploma in Child Health
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                id="hero-book-appointment-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                id="hero-call-now-btn"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now</span>
              </a>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Line & Locations */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span><strong>Clinic Location:</strong> Adda Gamber, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Daily Practice:</strong> Mon – Sat Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Serving Adda Gamber & Surrounding Area</span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Photo Presentation Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative max-w-md w-full">
              
              {/* Outer Glowing Background Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-3xl blur-md opacity-30"></div>

              {/* Main Card Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-sky-100 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src={CLINIC_IMAGES.doctorPrimary}
                    alt="Dr. Shakeel Anjum Ramay - Experienced Child Healthcare Doctor in Adda Gamber"
                    className="w-full h-auto object-contain rounded-2xl hover:scale-101 transition-transform duration-500"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-sky-100 text-xs font-bold text-sky-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>20+ Years Practice</span>
                  </div>
                </div>

                {/* Profile Information Below Image (Ensures 100% full un-cropped view of photo) */}
                <div className="p-3 mt-1 bg-slate-900 text-white rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">{DOCTOR_PROFILE.name}</h3>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">{DOCTOR_PROFILE.title}</p>
                  <p className="text-[11px] text-slate-300 mt-1">MD (Medicine), MBBS, RMP, D.A. (PGMI), DCH</p>
                </div>

                {/* View Verification Button */}
                <div className="mt-3 px-2 pb-1 flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Verified Credentials</span>
                  <button
                    onClick={onOpenQualifications}
                    id="hero-view-credentials-btn"
                    className="text-sky-700 hover:text-sky-900 font-semibold underline underline-offset-2"
                  >
                    View Official Documents & Card →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
