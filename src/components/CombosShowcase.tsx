import React from 'react';
import { SERVICES, ServiceItem } from '../data/salonData';
import { Sparkles, MessageCircle, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';

interface CombosShowcaseProps {
  onSelectService: (service: ServiceItem) => void;
}

export const CombosShowcase: React.FC<CombosShowcaseProps> = ({ onSelectService }) => {
  const combos = SERVICES.filter((s) => s.category === 'combos');

  return (
    <section id="combos" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#CF2844] uppercase">
            <span>03 · Todo en Uno para tus Rizos</span>
            <span aria-hidden="true">·</span>
            <span>Paquetes Integrales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            Combos <span className="text-[#CF2844]">Especiales Rizos Quilleros</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Ahorra tiempo y dinero con nuestras experiencias integrales diseñadas para mimar tu melena desde el cuero cabelludo hasta las puntas.
          </p>
        </div>

        {/* 6 Combos Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo) => {
            const isHighlight = combo.popular;
            return (
              <div
                key={combo.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-[#0C695F] text-white shadow-xl scale-[1.02] ring-2 ring-[#FBBA42]'
                    : 'bg-[#F9EEDC]/50 border border-[#46200D]/10 hover:shadow-lg text-[#46200D]'
                }`}
              >
                {/* Popular or Specialty Ribbon */}
                {combo.tag && (
                  <div
                    className={`absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-bold shadow-xs flex items-center gap-1 ${
                      isHighlight
                        ? 'bg-[#FBBA42] text-[#46200D]'
                        : 'bg-[#CF2844] text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{combo.tag}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isHighlight ? 'text-[#FBBA42]' : 'text-[#0C695F]'
                      }`}
                    >
                      {combo.name.split(':')[0]}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isHighlight ? 'text-white/70' : 'text-[#46200D]/70'
                      }`}
                    >
                      {combo.duration}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold tracking-tight ${
                      isHighlight ? 'text-white' : 'text-[#46200D]'
                    }`}
                  >
                    {combo.name.includes(':') ? combo.name.split(':')[1] : combo.name}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold tabular-nums ${
                        isHighlight ? 'text-[#FBBA42]' : 'text-[#CF2844]'
                      }`}
                    >
                      {combo.price}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isHighlight ? 'text-white/70' : 'text-[#46200D]/60'
                      }`}
                    >
                      COP
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isHighlight ? 'text-[#F9EEDC]/90' : 'text-[#46200D]/80'
                    }`}
                  >
                    {combo.description}
                  </p>

                  {/* Bullet points of inclusions */}
                  <div
                    className={`pt-4 border-t space-y-2.5 ${
                      isHighlight ? 'border-white/15' : 'border-[#46200D]/10'
                    }`}
                  >
                    {combo.details?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlight ? 'text-[#FBBA42]' : 'text-[#0C695F]'
                          }`}
                        />
                        <span className={isHighlight ? 'text-white/95' : 'text-[#46200D]'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectService(combo)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] ${
                      isHighlight
                        ? 'bg-[#FBBA42] text-[#46200D] hover:bg-[#E6A228]'
                        : 'bg-[#CF2844] text-white hover:bg-[#B51D37]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current/20" />
                    <span>Agendar este Combo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
