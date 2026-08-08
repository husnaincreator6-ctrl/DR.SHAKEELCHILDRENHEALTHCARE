import React from 'react';
import { MapPin, Navigation, Phone, Calendar, MessageCircle, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { CLINIC_LOCATIONS, CLINIC_IMAGES, CALL_PHONE_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';
import { LocationId } from '../types';

interface LocationsSectionProps {
  onBookAtLocation: (locationId: LocationId) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onBookAtLocation }) => {
  const gamberLoc = CLINIC_LOCATIONS[0];
  const mapsUrl = 'https://maps.app.goo.gl/YQFZvfHeKGPxiqP48';
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

  return (
    <section id="locations" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            OUR CLINIC LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Dr. Shakeel Anjum Ramay
          </h2>
          <p className="text-slate-600 mt-2 text-base font-semibold flex items-center justify-center gap-1.5">
            <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
            <span>Adda Gamber, Punjab, Pakistan</span>
          </p>
        </div>

        {/* Single Premium Location Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Location Details & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  Primary Child Healthcare Clinic
                </span>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Open Mon - Sat
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Adda Gamber Clinic</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Dr. Shakeel Anjum Ramay Child Health Practice
                </p>
              </div>

              <div className="space-y-3 bg-sky-50/70 p-4 rounded-2xl border border-sky-100 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Address:</strong> Adda Gamber, Punjab, Pakistan
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ExternalLink className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Google Maps Coordinates:</strong> 30.7475874, 73.3257228
                  </div>
                </div>
              </div>

              {/* 4 Action Buttons as explicitly requested */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-get-directions-btn"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-colors text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => onBookAtLocation('gamber')}
                  id="location-book-appointment-btn"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white hover:bg-sky-50 text-sky-800 border border-sky-300 font-bold text-xs shadow-xs transition-colors text-center"
                >
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${CALL_PHONE_NUMBER}`}
                  id="location-call-now-btn"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-us-btn"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>

            {/* Right Col: Interactive Map & Clinic Environment Visual */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Authentic Clinic Facility Photo */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  src={CLINIC_IMAGES.clinicFacilityVisual || CLINIC_IMAGES.clinicEnvironment}
                  alt="Dr. Shakeel Anjum Ramay Child Healthcare Clinic at Adda Gamber"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-3 flex items-end justify-between text-white">
                  <span className="text-xs font-bold text-sky-200">
                    Adda Gamber Clinic Facility
                  </span>
                  <span className="text-[10px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                    Verified Location
                  </span>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="relative h-52 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                <iframe
                  title="Google Maps Location - Adda Gamber Dr. Shakeel Anjum Ramay Clinic"
                  src={`https://maps.google.com/maps?q=${gamberLoc.coordinates?.lat},${gamberLoc.coordinates?.lng}&z=15&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
