import React, { useState } from 'react';
import {
  Stethoscope, Activity, Thermometer, Wind, Apple, TrendingUp,
  Baby, Utensils, ShieldAlert, ShieldCheck, Users, CalendarCheck,
  Calendar, ArrowRight, Heart
} from 'lucide-react';
import { SERVICES_LIST, CLINIC_IMAGES } from '../config/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Stethoscope,
  Activity,
  Thermometer,
  Wind,
  Apple,
  TrendingUp,
  Baby,
  Utensils,
  ShieldAlert,
  ShieldCheck,
  Users,
  CalendarCheck,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Illness', 'Development', 'Preventive'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Dedicated Care for Children
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Child Healthcare Services
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Thoughtful medical consultation, developmental guidance, and illness assessment tailored for infants, toddlers, and growing children at Adda Gamber Clinic.
          </p>
        </div>

        {/* Healthcare Visual Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-md h-52 group">
            <img
              src={CLINIC_IMAGES.childHealthcareVisual}
              alt="Child Healthcare and Pediatric Medical Examination at Adda Gamber Clinic"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold text-sky-300 tracking-wider bg-sky-950/80 px-2 py-0.5 rounded w-fit border border-sky-800/80">
                Gentle Pediatric Care
              </span>
              <h3 className="text-base font-bold mt-1">Pediatric Illness Evaluation</h3>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-2">
                Detailed symptom checks for fevers, infections, and growth routines.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-md h-52 group">
            <img
              src={CLINIC_IMAGES.pediatricCareNew}
              alt="Pediatric Consultation and Child Medical Guidance at Adda Gamber Clinic"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded w-fit border border-emerald-800/80">
                Child Health Practice
              </span>
              <h3 className="text-base font-bold mt-1">Clinical Child Examination</h3>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-2">
                Thorough pediatric diagnosis and treatment plans for infants and toddlers.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-md h-52 group">
            <img
              src={CLINIC_IMAGES.medicalAssessmentVisual}
              alt="Comprehensive Medical Assessment for Children"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold text-cyan-300 tracking-wider bg-cyan-950/80 px-2 py-0.5 rounded w-fit border border-cyan-800/80">
                Parent Health Guidance
              </span>
              <h3 className="text-base font-bold mt-1">Comprehensive Consultation</h3>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-2">
                Clear advice regarding nutrition, preventive routines, and follow-up care.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat} Services
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const IconComponent = ICON_MAP[service.iconName] || Stethoscope;
            return (
              <div
                key={service.id}
                className="bg-slate-50/80 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                    {service.category}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Experienced Care</span>
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    id={`service-book-${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-sky-900 to-sky-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Have questions regarding your child&apos;s symptoms?</h3>
            <p className="text-xs sm:text-sm text-sky-200">
              Contact our clinic staff directly or book an appointment for careful medical evaluation.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking('General Child Consultation')}
            id="services-bottom-cta-btn"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <Calendar className="w-4 h-4 inline mr-2 text-sky-600" />
            Schedule Visit Now
          </button>
        </div>

      </div>
    </section>
  );
};
