import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CALL_PHONE_NUMBER, WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CALL_PHONE_NUMBER}`}
          id="mobile-bottom-call-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 text-sky-800 font-semibold text-xs border border-sky-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-wa-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          id="mobile-bottom-book-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
