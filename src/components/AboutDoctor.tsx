import React from 'react';
import { Calendar, Stethoscope, CheckCircle, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES } from '../config/clinicData';

interface AboutDoctorProps {
  onOpenBooking: () => void;
  onOpenQualifications: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking, onOpenQualifications }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-slate-50/70 to-sky-50/30 border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Portrait Frame & Clinic Supporting Visual */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-sky-200/50 rounded-3xl transform rotate-2 scale-102 blur-xs"></div>

              {/* Doctor Image Frame */}
              <div className="relative bg-white p-3 rounded-3xl shadow-lg border border-sky-100 overflow-hidden">
                <img
                  src={CLINIC_IMAGES.doctorPrimary}
                  alt="Dr. Shakeel Anjum Ramay - Experienced Child Healthcare Doctor at Adda Gamber"
                  className="w-full h-auto rounded-2xl object-cover aspect-3/4 object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Patient-Centered Care</p>
                      <p className="text-[11px] text-slate-600">Thoughtful assessment for every child</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Supporting Healthcare Visual Card */}
            <div className="hidden sm:flex items-center gap-4 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
              <img
                src={CLINIC_IMAGES.medicalAssessmentVisual}
                alt="Comprehensive Medical Assessment for Children"
                className="w-24 h-20 rounded-xl object-cover shrink-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs">
                <p className="font-bold text-slate-900">Comprehensive Child Examination</p>
                <p className="text-slate-600 mt-0.5">Careful diagnostic routines & parent guidance at Adda Gamber practice.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200/60">
                Child Healthcare Practitioner
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
                Meet Dr. Shakeel Anjum Ramay
              </h2>
              <p className="text-sky-800 font-semibold text-sm sm:text-base mt-1">
                {DOCTOR_PROFILE.title} • 20+ Years Practice at Adda Gamber
              </p>
            </div>

            {/* Paragraph Bio */}
            <p className="text-slate-700 text-base leading-relaxed">
              Dr. Shakeel Anjum Ramay is an experienced medical practitioner providing child healthcare services to families at Adda Gamber. With more than 20 years of experience in treating children&apos;s diseases, his approach focuses on careful assessment, professional medical guidance and compassionate care.
            </p>

            {/* Credentials Badges */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Medical Credentials & Qualifications
              </h3>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-xs font-bold text-sky-900 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  M.D. (Medicine)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-xs font-bold text-sky-900 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  MBBS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-xs font-bold text-sky-900 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  RMP (Registered Medical Practitioner)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-xs font-bold text-sky-900 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  D.A. (PGMI)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-emerald-200 text-xs font-bold text-emerald-900 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Diploma in Child Health (DCH)
                </span>
              </div>
            </div>

            {/* Professional Background */}
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs space-y-2.5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Professional Leadership & Institutional Roles</span>
              </h4>

              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Member Pakistan Pediatric Association (PPA) Punjab
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Ex. Deputy District Health Officer (DDHO) Okara
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Ex. General Secretary / Vice President PMA Okara
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                id="about-book-consultation-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <button
                onClick={onOpenQualifications}
                id="about-view-docs-btn"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-sky-600" />
                <span>View Qualification Details</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
