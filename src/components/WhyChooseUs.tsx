import React from 'react';
import { Award, Heart, MapPin, CalendarCheck, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_IMAGES } from '../config/clinicData';

export const WhyChooseUs: React.FC = () => {
  const reasonCards = [
    {
      icon: Award,
      title: '20+ Years Experience',
      desc: 'Over two decades of hands-on medical experience evaluating and treating children\'s health conditions.',
      color: 'sky',
    },
    {
      icon: Heart,
      title: 'Child-Focused Care',
      desc: 'A gentle, caring, and patient family-friendly approach designed to make children feel safe and comfortable.',
      color: 'rose',
    },
    {
      icon: MapPin,
      title: 'Convenient Clinic Location',
      desc: 'Accessible location at Adda Gamber with Google Maps directions, daily consultation hours, and clear navigation.',
      color: 'emerald',
    },
    {
      icon: CalendarCheck,
      title: 'Easy Appointment Booking',
      desc: 'Choose your preferred date and time slot online with instant WhatsApp confirmation options.',
      color: 'cyan',
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      desc: 'Call or WhatsApp the clinic directly for quick coordination, directions, or appointment scheduling.',
      color: 'indigo',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Medical Background',
      desc: 'Clearly presented qualifications (MD, MBBS, DCH) and leadership experience in PPA Punjab and PMA Okara.',
      color: 'amber',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-slate-50/50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Why Parents Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Why Parents Choose Experienced Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            When it comes to your child&apos;s health, experience, thorough assessment, and accessibility matter most.
          </p>
        </div>

        {/* Family Healthcare Visual Feature Banner */}
        <div className="mb-12 bg-sky-900 text-white rounded-3xl overflow-hidden shadow-xl border border-sky-800 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-700/80 inline-block">
              Family & Child Healthcare Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              A Warm, Supportive Environment for Every Child & Family
            </h3>
            <p className="text-sky-100 text-xs sm:text-sm leading-relaxed max-w-xl">
              From newborn wellness checks to managing common childhood fevers and infections, Dr. Shakeel Anjum Ramay provides clear explanation and medical advice so parents feel confident and reassured.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-sky-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Individualized Patient Attention
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Clear Parent Counseling
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[240px]">
            <img
              src={CLINIC_IMAGES.familyWellnessVisual}
              alt="Family Guidance and Child Wellness Consultation"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 via-transparent to-transparent lg:block hidden"></div>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
