import React, { useState } from 'react';
import { FAQS } from '../data/salonData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F9EEDC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#0C695F] uppercase">
            <span>Resolvemos tus Dudas</span>
            <span aria-hidden="true">·</span>
            <span>Atención Clara</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            Preguntas <span className="text-[#0C695F]">Frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Todo lo que necesitas saber antes de visitar nuestro salón en Barranquilla.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#46200D]/10 overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#0C695F]/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C695F]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#46200D]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0C695F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#46200D]/85 leading-relaxed border-t border-[#46200D]/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-12 text-center p-6 bg-white/70 rounded-2xl border border-[#46200D]/10">
          <p className="text-sm text-[#46200D] font-medium">
            ¿Tienes otra duda o un caso específico de porosidad o cuero cabelludo sensible?
          </p>
          <button
            onClick={onOpenBooking}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#CF2844] hover:text-[#B51D37] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pregúntanos directamente por WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
