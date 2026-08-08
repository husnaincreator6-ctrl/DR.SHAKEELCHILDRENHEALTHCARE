import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS_LIST, CALL_PHONE_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Open first by default

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-gradient-to-b from-slate-50/50 to-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Essential information regarding Dr. Shakeel Anjum Ramay&apos;s credentials, locations, appointment scheduling, and clinic procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-sky-300 shadow-md ring-1 ring-sky-300/30'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  id={`faq-btn-${faq.id}`}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-sky-600' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50 border border-sky-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Still have questions for the clinic?</h3>
            <p className="text-xs text-slate-600">Our clinic staff is ready to help you with directions or appointment slots.</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${CALL_PHONE_NUMBER}`}
              id="faq-call-btn"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-sky-800 border border-sky-200 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Clinic</span>
            </a>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="faq-wa-btn"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
