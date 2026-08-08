import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_BASE_URL, WHATSAPP_DEFAULT_TEXT } from '../config/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end group">
      
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-900 text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <div>
            <p className="font-bold text-emerald-900">Need Quick Help?</p>
            <p className="text-[11px] text-slate-600">Chat with Dr. Ramay&apos;s Clinic on WhatsApp</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Repeating Pulse Rings for Attention */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-pulse pointer-events-none"></span>

        <MessageCircle className="w-8 h-8 fill-white/20 relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10"></span>
      </a>
    </div>
  );
};
