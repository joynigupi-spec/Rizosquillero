import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#46200D] px-3.5 py-2 rounded-2xl shadow-xl border border-[#46200D]/10 text-xs font-semibold animate-bounce">
          <span>🌸 ¿Quieres agendar tu cita?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#46200D]/40 hover:text-[#46200D] p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={onOpenBooking}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Abrir WhatsApp para agendar cita en Rizos Quilleros"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </button>
    </aside>
  );
};
