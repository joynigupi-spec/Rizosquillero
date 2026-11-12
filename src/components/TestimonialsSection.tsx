import React from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Star, Quote, Heart } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-[#46200D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#0C695F] uppercase">
            <span>Comunidad Rizos Quilleros</span>
            <span aria-hidden="true">·</span>
            <span>Orgullo Barranquillero</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            Lo que Dicen <span className="text-[#0C695F]">Nuestras Clientas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Historias reales de reconciliación y amor por la textura natural en Barranquilla y la Costa Caribe.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F9EEDC]/40 rounded-3xl p-8 border border-[#46200D]/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#FBBA42]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBA42]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#46200D]/90 leading-relaxed font-normal">
                  “{t.text}”
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-6 border-t border-[#46200D]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#46200D]">{t.name}</h4>
                  <div className="text-xs text-[#0C695F] font-semibold">{t.curlType}</div>
                  <div className="text-[11px] text-[#46200D]/60">{t.role}</div>
                </div>

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xs"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Proof Strip */}
        <div className="mt-14 max-w-4xl mx-auto p-6 bg-[#0C695F] text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Únete a la Comunidad de Rizos Quilleros
            </h3>
            <p className="text-xs sm:text-sm text-[#F9EEDC]/85">
              Comparte tus avances, rutinas y tips en nuestro Instagram oficial @rizosquillero
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FBBA42] hover:bg-[#E6A228] text-[#46200D] font-bold text-xs sm:text-sm rounded-full shadow-md transition-all whitespace-nowrap shrink-0"
          >
            Seguir en Instagram
          </a>
        </div>

      </div>
    </section>
  );
};
