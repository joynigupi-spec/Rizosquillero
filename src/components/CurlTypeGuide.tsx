import React, { useState } from 'react';
import { CURL_TYPES, CurlTypeInfo, SERVICES, ServiceItem } from '../data/salonData';
import { Sparkles, Check, ArrowRight, HelpCircle, Heart, MessageCircle } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';

interface CurlTypeGuideProps {
  onOpenBookingWithService?: (serviceName: string) => void;
}

export const CurlTypeGuide: React.FC<CurlTypeGuideProps> = ({ onOpenBookingWithService }) => {
  const [selectedType, setSelectedType] = useState<CurlTypeInfo>(CURL_TYPES[1]); // Type 3 default

  // Helper SVG visualizer for curl textures
  const renderCurlVisualizer = (id: string) => {
    switch (id) {
      case 'tipo-2':
        // Soft S Waves
        return (
          <svg viewBox="0 0 160 120" className="w-28 h-20 text-[#0C695F]" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M20 20 Q 50 20 50 60 T 50 100" />
            <path d="M60 20 Q 90 20 90 60 T 90 100" />
            <path d="M100 20 Q 130 20 130 60 T 130 100" />
          </svg>
        );
      case 'tipo-3':
        // Corkscrew spirals
        return (
          <svg viewBox="0 0 160 120" className="w-28 h-20 text-[#CF2844]" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M30 20 C 50 20, 50 40, 30 45 C 10 50, 10 70, 30 75 C 50 80, 50 100, 30 105" />
            <path d="M80 20 C 100 20, 100 40, 80 45 C 60 50, 60 70, 80 75 C 100 80, 100 100, 80 105" />
            <path d="M130 20 C 150 20, 150 40, 130 45 C 110 50, 110 70, 130 75 C 150 80, 150 100, 130 105" />
          </svg>
        );
      case 'tipo-4':
        // Tight Z and micro-coils
        return (
          <svg viewBox="0 0 160 120" className="w-28 h-20 text-[#FBBA42]" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
            <path d="M25 15 L35 25 L25 35 L35 45 L25 55 L35 65 L25 75 L35 85 L25 95 L35 105" />
            <path d="M55 15 L65 25 L55 35 L65 45 L55 55 L65 65 L55 75 L65 85 L55 95 L65 105" />
            <path d="M85 15 L95 25 L85 35 L95 45 L85 55 L95 65 L85 75 L95 85 L85 95 L95 105" />
            <path d="M115 15 L125 25 L115 35 L125 45 L115 55 L125 65 L115 75 L125 85 L115 95 L125 105" />
          </svg>
        );
      case 'transicion':
      default:
        // Dual texture: straight bottom, curly root
        return (
          <svg viewBox="0 0 160 120" className="w-28 h-20 text-[#46200D]" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
            <path d="M40 20 C 60 25, 60 45, 40 55 L 40 105" strokeDasharray="0 0 4 4" />
            <path d="M80 20 C 100 25, 100 45, 80 55 L 80 105" strokeDasharray="0 0 4 4" />
            <path d="M120 20 C 140 25, 140 45, 120 55 L 120 105" strokeDasharray="0 0 4 4" />
          </svg>
        );
    }
  };

  return (
    <section id="tipos-de-rizo" className="py-20 bg-[#F9EEDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#0C695F] uppercase">
            <span>Guía de Educación Capilar</span>
            <span aria-hidden="true">·</span>
            <span>Rizos Quilleros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            ¿Sabes cuál es tu <span className="text-[#0C695F]">tipo de rizo?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Conocer tu patrón es el primer paso para darle exactamente lo que pide: agua, nutrición o definición. Selecciona tu textura:
          </p>
        </div>

        {/* Texture Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {CURL_TYPES.map((type) => {
            const isSelected = selectedType.id === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0C695F] text-white border-[#0C695F] shadow-lg scale-[1.02]'
                    : 'bg-white/80 text-[#46200D] border-[#46200D]/10 hover:bg-white hover:border-[#0C695F]/40'
                }`}
              >
                <div>
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isSelected ? 'text-[#FBBA42]' : 'text-[#0C695F]'
                    }`}
                  >
                    {type.code}
                  </div>
                  <div className="font-bold text-base sm:text-lg">{type.label}</div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-medium">
                  <span className={isSelected ? 'text-[#F9EEDC]/90' : 'text-[#46200D]/60'}>
                    Ver recomendaciones
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FBBA42]' : 'text-[#0C695F]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Texture Details Showcase Card */}
        <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-[#46200D]/10 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Representation & Code */}
            <div className="lg:col-span-4 bg-[#F9EEDC]/60 rounded-2xl p-6 flex flex-col items-center text-center justify-center border border-[#46200D]/10 space-y-4">
              <div className="p-4 bg-white rounded-full shadow-inner">
                {renderCurlVisualizer(selectedType.id)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0C695F]">
                  Patrón Identificado
                </span>
                <h3 className="text-2xl font-extrabold text-[#46200D] mt-1">
                  {selectedType.code}
                </h3>
                <p className="text-xs text-[#46200D]/70 font-medium mt-1">
                  {selectedType.label}
                </p>
              </div>
            </div>

            {/* Description & Advice */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#46200D] mb-2">
                  Características de esta textura
                </h4>
                <p className="text-sm text-[#46200D]/85 leading-relaxed">
                  {selectedType.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedType.characteristics.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#46200D]">
                    <Check className="w-4 h-4 text-[#CF2844] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              {/* Recommended Routine in Salon & Home */}
              <div className="p-4 bg-[#0C695F]/5 rounded-xl border border-[#0C695F]/15 space-y-1.5">
                <div className="text-xs font-bold text-[#0C695F] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cuidado Clave en Rizos Quilleros</span>
                </div>
                <p className="text-xs text-[#46200D]/90 leading-relaxed">
                  {selectedType.recommendedCare}
                </p>
              </div>

              {/* Ideal Services & Fast Booking Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#46200D]/70 block">
                    Servicios recomendados para ti:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedType.idealServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-[#0C695F] bg-[#0C695F]/10 px-2.5 py-1 rounded-md"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingWithService && onOpenBookingWithService(selectedType.idealServices[0])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CF2844] hover:bg-[#B51D37] text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Diagnóstico en Salón</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
