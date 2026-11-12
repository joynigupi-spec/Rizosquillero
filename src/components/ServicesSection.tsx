import React, { useState } from 'react';
import { CATEGORIES, SERVICES, ServiceItem } from '../data/salonData';
import { MessageCircle, Clock, Check, Sparkles, Scissors, Droplets, Heart } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredServices = activeCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicios" className="py-20 bg-[#F9EEDC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#0C695F] uppercase">
            <span>Catálogo Oficial 2025</span>
            <span aria-hidden="true">·</span>
            <span>Precios en Pesos Colombianos (COP)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            Nuestros <span className="text-[#0C695F]">Servicios Especializados</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Cada rizo tiene una historia única. Nuestros servicios están diseñados con técnicas respetuosas, productos limpios y dedicación exclusiva.
          </p>
        </div>

        {/* Interactive Filter Tabs (Segmented control) */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0C695F] text-white shadow-md'
                    : 'bg-white/80 text-[#46200D] hover:bg-white hover:text-[#0C695F] border border-[#46200D]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                service.popular
                  ? 'border-[#FBBA42] shadow-md ring-1 ring-[#FBBA42]/50 relative'
                  : 'border-[#46200D]/10 shadow-xs'
              }`}
            >
              {/* Highlight Badge */}
              {service.tag && (
                <div className="absolute -top-3 right-6 bg-[#FBBA42] text-[#46200D] text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{service.tag}</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Category & duration metadata */}
                <div className="flex items-center justify-between text-xs text-[#0C695F] font-medium">
                  <span>{service.categoryLabel}</span>
                  {service.duration && (
                    <div className="flex items-center gap-1 text-[#46200D]/70">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-[#46200D] tracking-tight">
                  {service.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#CF2844] tabular-nums">
                    {service.price}
                  </span>
                  <span className="text-xs text-[#46200D]/60 font-medium">COP</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#46200D]/80 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Service Details / Inclusions */}
                {service.details && service.details.length > 0 && (
                  <div className="pt-3 border-t border-[#46200D]/5 space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#46200D]/85">
                        <Check className="w-3.5 h-3.5 text-[#0C695F] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-[#46200D]/10">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer bg-[#0C695F] text-white hover:bg-[#074740] active:scale-[0.98]"
                  aria-label={`Agendar ${service.name} por WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Agendar este servicio</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick reminder on custom diagnosis */}
        <div className="mt-14 max-w-2xl mx-auto p-5 bg-white/70 rounded-2xl border border-[#0C695F]/20 text-center">
          <p className="text-sm text-[#46200D]/80 font-normal">
            ¿No estás segura de qué servicio necesita tu melena?{' '}
            <button
              onClick={() => onSelectService(SERVICES[0])}
              className="font-bold text-[#CF2844] hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Escríbenos para una asesoría previa personalizada sin costo</span>
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
