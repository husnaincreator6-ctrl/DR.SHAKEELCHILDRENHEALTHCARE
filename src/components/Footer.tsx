import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_LOCATIONS, CALL_PHONE_NUMBER, CALL_DISPLAY_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQualifications: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQualifications }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Doctor Branding & Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold font-serif text-lg">
                DR
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{DOCTOR_PROFILE.name}</h3>
                <p className="text-xs text-sky-400 font-medium">Child Healthcare Clinic | Adda Gamber</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Experienced Child Healthcare at Adda Gamber, backed by 20+ years of clinical practice in pediatric diseases, careful diagnostic assessment, and parent health guidance.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
              <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">MD (Medicine)</span>
              <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">MBBS</span>
              <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">RMP</span>
              <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">D.A. (PGMI)</span>
              <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Diploma in Child Health</span>
            </div>

            <button
              onClick={onOpenQualifications}
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-2 block pt-1"
            >
              View Official Credentials & Qualification Card →
            </button>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Child Care Services</a></li>
              <li><a href="#why-us" className="hover:text-sky-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#locations" className="hover:text-sky-400 transition-colors">Locations</a></li>
              <li><a href="#testimonials" className="hover:text-sky-400 transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-sky-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact Clinic</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Practice Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Locations
            </h4>

            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>{CALL_DISPLAY_NUMBER}</span>
              </a>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>WhatsApp: {CALL_DISPLAY_NUMBER}</span>
              </a>

              <div className="pt-2 border-t border-slate-900 space-y-2">
                <div>
                  <strong className="text-white block">Clinic Location:</strong>
                  <p className="text-[11px] text-slate-400">Adda Gamber, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Book Appointment CTA */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Book Appointment
            </h4>
            <p className="text-xs text-slate-400">
              Schedule your child&apos;s visit online or contact our clinic directly via WhatsApp or Phone call.
            </p>

            <button
              onClick={onOpenBooking}
              id="footer-book-appointment-btn"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Serving families in Adda Gamber & surrounding area</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Medical Disclaimer */}
        <div className="pt-8 space-y-4 text-center md:flex md:items-center md:justify-between md:text-left text-xs text-slate-500">
          <p>
            © {currentYear} Dr. Shakeel Anjum Ramay. All Rights Reserved.
          </p>

          <p className="max-w-2xl text-[11px] text-slate-500 leading-normal">
            <strong>Medical Disclaimer:</strong> Medical information on this website is for general informational purposes only and does not replace professional medical consultation, diagnosis, or treatment. Always seek direct medical evaluation from a qualified doctor.
          </p>
        </div>

      </div>
    </footer>
  );
};
