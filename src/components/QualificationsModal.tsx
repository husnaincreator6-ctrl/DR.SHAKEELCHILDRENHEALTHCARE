import React from 'react';
import { X, Award, CheckCircle, ShieldCheck, Building2, Phone, MapPin, ExternalLink } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_LOCATIONS, CLINIC_IMAGES, CALL_DISPLAY_NUMBER } from '../config/clinicData';

interface QualificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const QualificationsModal: React.FC<QualificationsModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sky-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-sky-100 text-sky-800">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Doctor Qualifications & Credentials</h3>
            <p className="text-xs text-sky-700 font-medium">Verified Professional Background Information</p>
          </div>
        </div>

        {/* Doctor Card Representation */}
        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white rounded-2xl p-6 shadow-lg border border-sky-700/50 mb-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-700">
                Official Doctor Card Info
              </span>
              <h4 className="text-2xl font-extrabold text-white mt-2">{DOCTOR_PROFILE.name}</h4>
              <p className="text-xs text-sky-200 font-medium">{DOCTOR_PROFILE.title}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-600/40">
                20+ Years Exp.
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-sky-700/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-bold text-sky-300 uppercase text-[10px] tracking-wider mb-1">Qualifications:</p>
              <ul className="space-y-0.5 text-slate-200">
                <li>• M.D. (Medicine)</li>
                <li>• MBBS</li>
                <li>• RMP (Registered Medical Practitioner)</li>
                <li>• D.A. (PGMI)</li>
                <li>• Diploma in Child Health</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-sky-300 uppercase text-[10px] tracking-wider mb-1">Key Experience & Roles:</p>
              <ul className="space-y-0.5 text-slate-200">
                <li>• Ex. DDHO Okara</li>
                <li>• Member PPA Punjab</li>
                <li>• Ex. Vice President PMA Okara</li>
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-sky-700/60 flex flex-wrap justify-between items-center text-xs text-sky-200">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              {CALL_DISPLAY_NUMBER}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              Adda Gamber Clinic
            </span>
          </div>
        </div>

        {/* Doctor & Clinic Verification Visual Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <img
              src={CLINIC_IMAGES.doctorPrimary}
              alt="Dr. Shakeel Anjum Ramay - Experienced Child Healthcare Doctor at Adda Gamber"
              className="w-16 h-16 rounded-xl object-cover object-top shrink-0 border border-sky-200"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="text-xs">
              <p className="font-bold text-slate-900">{DOCTOR_PROFILE.name}</p>
              <p className="text-slate-600">Child Healthcare Specialist</p>
              <p className="text-[11px] text-sky-700 font-semibold mt-0.5">20+ Years Clinical Practice</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <img
              src={CLINIC_IMAGES.clinicFacilityVisual}
              alt="Dr. Shakeel Anjum Ramay Practice Facility"
              className="w-16 h-16 rounded-xl object-cover shrink-0 border border-sky-200"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="text-xs">
              <p className="font-bold text-slate-900">Practice Facility</p>
              <p className="text-slate-600">Adda Gamber, Punjab</p>
              <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Verified Medical Credentials</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Qualification Declarations</span>
            </h5>
            <p className="leading-relaxed">
              Dr. Shakeel Anjum Ramay holds an M.D. in Medicine, MBBS degree, RMP registration, D.A. (PGMI), and Diploma in Child Health. He has been providing dedicated healthcare for children for more than 20 years.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Public Health Leadership</span>
            </h5>
            <p className="leading-relaxed">
              In addition to clinical practice, Dr. Shakeel Anjum Ramay served as Deputy District Health Officer (DDHO) Okara and held executive positions as General Secretary and Vice President of the Pakistan Medical Association (PMA) Okara.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <p>
              <strong>Transparent Professional Declaration:</strong> {DOCTOR_PROFILE.nonFcpsDisclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs"
          >
            Close Window
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md"
          >
            Book Appointment with Dr. Ramay
          </button>
        </div>

      </div>
    </div>
  );
};
