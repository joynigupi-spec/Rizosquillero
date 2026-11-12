import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, Check, Heart, Scissors, Droplets } from 'lucide-react';
import { HibiscusFlower, TropicalLeaf } from './TropicalDecorations';
import { LOGO_ROUND_URL } from '../utils/assets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#F9EEDC]">
      {/* Subtle organic background gradients and shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#FBBA42]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#0C695F]/10 blur-3xl pointer-events-none" />

      {/* Decorative botanical vectors */}
      <div className="absolute top-12 left-4 md:left-12 opacity-80 pointer-events-none hidden sm:block animate-pulse duration-1000">
        <HibiscusFlower size={56} color="#CF2844" />
      </div>
      <div className="absolute top-36 right-8 md:right-20 opacity-70 pointer-events-none hidden md:block">
        <TropicalLeaf size={68} color="#0C695F" />
      </div>
      <div className="absolute bottom-8 right-1/3 opacity-50 pointer-events-none hidden lg:block">
        <HibiscusFlower size={42} color="#FBBA42" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Unboxed kicker (Zero-pill discipline) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#0C695F] uppercase">
              <span>Barranquilla, Atlántico</span>
              <span aria-hidden="true">·</span>
              <span>Peluquería Especializada en Rizos y Afro</span>
              <span aria-hidden="true">·</span>
              <span>Fundada por Estefani</span>
            </div>

            {/* Main Headline (Exact requested title) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#46200D] tracking-tight leading-[1.08] text-balance">
              ¡TUS RIZOS, <br className="hidden sm:inline" />
              <span className="text-[#0C695F]">TU ESENCIA!</span>
            </h1>

            {/* Subtitle (Exact requested subtitle) */}
            <p className="text-lg sm:text-xl text-[#46200D]/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Celebramos la belleza natural de tus rizos con el cuidado y estilo que merecen.
            </p>

            {/* Brand Essence quote (Lora Italic) */}
            <div className="py-2 border-y border-[#46200D]/10 max-w-xl mx-auto lg:mx-0">
              <p className="font-quote text-lg md:text-xl text-[#CF2844] italic">
                “Tu cabello natural es una celebración.”
              </p>
            </div>

            {/* CTAs: Exact requested labels with hover states & responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#CF2844] hover:bg-[#B51D37] active:scale-[0.98] rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                aria-label="Agendar cita por WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 transition-transform group-hover:scale-110" />
                <span className="whitespace-nowrap">AGENDA TU CITA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#0C695F] bg-white/70 hover:bg-white active:scale-[0.98] border border-[#0C695F]/30 hover:border-[#0C695F] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <span>CONOCE NUESTROS SERVICIOS</span>
              </a>
            </div>

            {/* Unboxed trust proof markers with clean separators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs md:text-sm text-[#46200D]/75">
              <div className="flex items-center gap-1.5 font-medium">
                <Scissors className="w-4 h-4 text-[#0C695F]" />
                <span>Corte en Seco Mechón a Mechón</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Droplets className="w-4 h-4 text-[#0C695F]" />
                <span>Ozono & Productos Limpios</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Heart className="w-4 h-4 text-[#CF2844]" />
                <span>Asesoría para Casa Incluida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Emblem & Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Circular frame with coastal layering and tropical aesthetics */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer decorative rings reflecting brand colors (Verde, Mango, Hibisco) */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0C695F]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute -inset-3 rounded-full border border-[#FBBA42]/40" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#0C695F]/15 via-[#FBBA42]/10 to-transparent" />

              {/* Main high-res circular logo */}
              <div className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden shadow-2xl bg-white p-1">
                <img
                  src={LOGO_ROUND_URL}
                  alt="Logotipo oficial de Rizos Quilleros - Especialistas en cabello afro y rizado"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating badges anchored to the circle */}
              <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-sm border border-[#0C695F]/15 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FBBA42]/20 flex items-center justify-center text-[#46200D] font-bold text-lg">
                  6+
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#46200D]">Años de Experiencia</div>
                  <div className="text-[11px] text-[#0C695F]">En cabello rizado y afro</div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-right-4 z-20 bg-[#0C695F] text-white rounded-2xl p-3 shadow-lg flex items-center gap-2">
                <HibiscusFlower size={24} color="#FBBA42" />
                <div className="text-left pr-1">
                  <div className="text-xs font-bold">100% Caribeña</div>
                  <div className="text-[10px] text-[#F9EEDC]/80">Hecho en Barranquilla</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
