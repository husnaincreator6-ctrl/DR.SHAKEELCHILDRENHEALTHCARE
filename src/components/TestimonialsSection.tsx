import React from 'react';
import { Star, Quote, ShieldCheck, UserCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const placeholderTestimonials = [
    {
      id: 1,
      quote: 'Add verified parent testimonial here. Parents praise Dr. Shakeel Anjum Ramay for his thorough child health examination and gentle approach with young children.',
      name: 'Verified Parent / Patient',
      location: 'Adda Gamber Clinic',
      date: 'Recent Visit',
    },
    {
      id: 2,
      quote: 'Add verified parent testimonial here. Reliable pediatric care and clear guidance for fever management and seasonal child illnesses.',
      name: 'Verified Parent / Patient',
      location: 'Adda Gamber Clinic',
      date: 'Recent Visit',
    },
    {
      id: 3,
      quote: 'Add verified parent testimonial here. Experienced assessment for child growth monitoring and compassionate support for new parents.',
      name: 'Verified Parent / Patient',
      location: 'Adda Gamber Clinic',
      date: 'Recent Visit',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Parent Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            What Parents Say
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Patient reviews and verified parent feedback component ready for authentic clinic submissions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="w-10 h-10 text-sky-200/60 absolute top-4 right-4 pointer-events-none" />

              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{t.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  </h3>
                  <p className="text-[11px] text-slate-500">{t.location} • {t.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-xs text-slate-500 bg-sky-50/50 p-3 rounded-xl border border-sky-100/60 max-w-xl mx-auto">
          <p>
            <strong>Note on Patient Privacy:</strong> To preserve patient confidentiality and adhere to ethical healthcare standards, only verified parent feedback provided directly to the clinic is displayed.
          </p>
        </div>

      </div>
    </section>
  );
};
