import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Calendar, Send, CheckCircle2, Navigation, Building2 } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_LOCATIONS, CLINIC_IMAGES, CALL_PHONE_NUMBER, CALL_DISPLAY_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone || !message) return;

    // Build direct WhatsApp message
    const waMsg = `Assalam o Alaikum Dr. Shakeel Anjum Ramay Clinic,\n\nName: ${senderName}\nPhone: ${senderPhone}\n\nMessage:\n${message}`;
    const waUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMsg)}`;

    window.open(waUrl, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Contact the Clinic
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Reach out via direct phone call, WhatsApp message, or visit our clinic at Adda Gamber, Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Fast Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-sky-50/80 p-6 rounded-2xl border border-sky-100 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Direct Phone & WhatsApp Line</span>
              </h3>

              <div className="space-y-2">
                <p className="text-2xl font-extrabold text-sky-900 tracking-tight">
                  {CALL_DISPLAY_NUMBER}
                </p>
                <p className="text-xs text-slate-600">
                  Mon – Sat: Morning & Evening Consultation Hours
                </p>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${CALL_PHONE_NUMBER}`}
                  id="contact-call-now-btn"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Location Summary Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-sky-800 text-sm block">Adda Gamber Clinic</span>
              <p className="text-slate-600">Adda Gamber, Punjab, Pakistan</p>
              <p className="text-slate-500 font-medium">Mon - Sat: Daily Consultation Hours</p>
              <a
                href="https://maps.app.goo.gl/YQFZvfHeKGPxiqP48"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-700 font-bold hover:underline pt-1"
              >
                <Navigation className="w-3 h-3" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>

            {/* Clinic Practice Facility Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs group">
              <img
                src={CLINIC_IMAGES.clinicFacilityVisual}
                alt="Dr. Shakeel Anjum Ramay Clinic Facility at Adda Gamber"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4 flex flex-col justify-end text-white">
                <p className="text-xs font-bold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Dr. Shakeel Anjum Ramay Practice Facility</span>
                </p>
                <p className="text-[11px] text-slate-300">Adda Gamber, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Book Appointment CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-sky-800 text-white flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm">Need a scheduled consultation?</p>
                <p className="text-xs text-sky-200">Reserve your date and time slot online.</p>
              </div>
              <button
                onClick={onOpenBooking}
                id="contact-book-cta-btn"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs transition-colors"
              >
                <Calendar className="w-4 h-4 inline mr-1 text-sky-600" />
                Book Visit
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Have a general inquiry? Fill in the form below to message the clinic directly.
            </p>

            {sentSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">Message Sent via WhatsApp</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Your message has been prepared for WhatsApp transmission to {CALL_DISPLAY_NUMBER}.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="text-xs font-bold text-emerald-800 underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="e.g. 0344 3335333"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your question or message regarding clinic timings, child symptoms, or location..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
