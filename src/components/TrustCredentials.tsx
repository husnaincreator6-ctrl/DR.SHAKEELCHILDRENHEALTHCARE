import React from 'react';
import { Award, GraduationCap, FileCheck, Stethoscope, Building2, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES } from '../config/clinicData';

interface TrustCredentialsProps {
  onOpenQualifications: () => void;
}

export const TrustCredentials: React.FC<TrustCredentialsProps> = ({ onOpenQualifications }) => {
  const statCards = [
    {
      number: '20+',
      label: 'Years of Experience',
      sublabel: 'Dedicated to Child Healthcare in Adda Gamber',
      icon: Award,
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      textColor: 'text-sky-800',
    },
    {
      number: 'MD',
      label: 'Medicine',
      sublabel: 'Postgraduate Medical Doctor Qualification',
      icon: GraduationCap,
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      textColor: 'text-cyan-800',
    },
    {
      number: 'MBBS',
      label: 'Medical Degree',
      sublabel: 'Registered Medical Practitioner (RMP)',
      icon: Stethoscope,
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-800',
    },
    {
      number: 'D.C.H.',
      label: 'Child Health Diploma',
      sublabel: 'Specialized Training in Pediatric Medicine',
      icon: FileCheck,
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-800',
    },
  ];

  return (
    <section id="trust" className="py-16 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Proven Track Record
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
            Experience You Can Trust
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Over two decades of hands-on patient care, diagnostic thoroughness, and medical leadership in Punjab child healthcare.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.label}
                className={`p-6 rounded-2xl ${card.bgColor} border ${card.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl font-extrabold ${card.textColor} tracking-tight`}>
                    {card.number}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-white/80 shadow-2xs ${card.textColor}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900">{card.label}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-snug">{card.sublabel}</p>
              </div>
            );
          })}
        </div>

        {/* Professional Background & Clinic Visual Showcase */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-700" />
                <span>Professional Background & Leadership Roles</span>
              </h3>

              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Member:</strong> Pakistan Pediatric Association (PPA) Punjab</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Ex. Deputy District Health Officer (DDHO):</strong> Okara</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Ex. General Secretary / Vice President:</strong> Pakistan Medical Association (PMA) Okara</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenQualifications}
                  id="trust-view-card-doc-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md transition-colors"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>View Doctor Card & Qualifications</span>
                </button>
              </div>
            </div>

            {/* Clinic Environment Image (Image 1) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-md group">
                <img
                  src={CLINIC_IMAGES.clinicEnvironment}
                  alt="Dr. Shakeel Anjum Ramay Children Clinic Practice at Adda Gamber"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-xs font-bold">Dedicated Healthcare Environment</p>
                  <p className="text-[11px] text-slate-200">Adda Gamber Practice Facility</p>
                </div>
              </div>
            </div>

          </div>

          {/* Transparent Credentials Accuracy Note */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Transparent Professional Declaration:</strong> {DOCTOR_PROFILE.nonFcpsDisclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
