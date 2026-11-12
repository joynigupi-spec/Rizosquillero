import React from 'react';
import { Heart, Sparkles, Scissors, Droplets, CheckCircle2, ShieldCheck, Coffee, Sun } from 'lucide-react';
import { HibiscusFlower, TropicalLeaf } from './TropicalDecorations';

interface SalonExperienceProps {
  onOpenBooking: () => void;
}

export const SalonExperience: React.FC<SalonExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="experiencia" className="py-20 bg-white relative overflow-hidden border-b border-[#46200D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Estefani's Story & The Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual card with Founder badge & Tropical styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Backdrop */}
              <div className="bg-[#0C695F] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-20">
                  <TropicalLeaf size={140} color="#F9EEDC" />
                </div>
                <div className="absolute bottom-0 right-0 p-4 opacity-30">
                  <HibiscusFlower size={70} color="#FBBA42" />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Founder Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold text-[#FBBA42] tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Liderado por Estefani</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                    “Aquí no alisamos rizos, los empoderamos.”
                  </h3>

                  <p className="text-sm text-[#F9EEDC]/90 leading-relaxed font-normal">
                    Con más de 6 años de experiencia especializada exclusivamente en cabello afro, rizado y ondulado en Barranquilla, Estefani creó Rizos Quilleros como un refugio seguro donde aprenderás a enamorarte de tu hebra natural.
                  </p>

                  <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <div className="text-2xl font-black text-[#FBBA42] tabular-nums">6+</div>
                      <div className="text-[11px] text-[#F9EEDC]/80 mt-0.5">Años de Especialización</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <div className="text-2xl font-black text-[#FBBA42] tabular-nums">100%</div>
                      <div className="text-[11px] text-[#F9EEDC]/80 mt-0.5">Libre de Químicos Alisadores</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#F9EEDC] text-[#46200D] p-4 rounded-2xl border border-[#46200D]/10 shadow-lg max-w-[260px]">
                <p className="font-quote text-xs italic text-[#CF2844]">
                  “Aquí, tu cabello es el protagonista.”
                </p>
                <span className="text-[10px] text-[#46200D]/60 block mt-1 font-semibold uppercase tracking-wider">
                  Diferencial Rizos Quilleros
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Key Differentials & Salon Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-widest text-[#0C695F] uppercase">
                Diferencial & Experiencia en Salón
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#46200D] tracking-tight">
                El Método Rizos Quilleros: <br />
                <span className="text-[#0C695F]">Cuidado Consciente en Cada Detalle</span>
              </h2>
              <p className="text-base text-[#46200D]/80 leading-relaxed">
                Olvídate de las peluquerías tradicionales donde te tiran del pelo o intentan convencerte de que te hagas queratinas. En nuestro salón en Barranquilla cada sesión es un ritual de amor propio:
              </p>
            </div>

            {/* 4 Pillars of Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-2xl bg-[#F9EEDC]/40 border border-[#46200D]/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#0C695F]/10 text-[#0C695F] flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#46200D]">Corte en Seco Exclusivo</h4>
                <p className="text-xs text-[#46200D]/80 leading-relaxed">
                  Cortamos con tu cabello seco mechón por mechón para respetar tu encogimiento exacto. Sin sorpresas al secar.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9EEDC]/40 border border-[#46200D]/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#CF2844]/10 text-[#CF2844] flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#46200D]">Vapor de Ozono Terapéutico</h4>
                <p className="text-xs text-[#46200D]/80 leading-relaxed">
                  Abre la cutícula capilar con suavidad extrema permitiendo que las mascarillas vegetales penetren hasta el córtex.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9EEDC]/40 border border-[#46200D]/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#FBBA42]/20 text-[#46200D] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#46200D]">Asesoría de Rutina en Casa</h4>
                <p className="text-xs text-[#46200D]/80 leading-relaxed">
                  Te explicamos cómo lavar, aplicar productos, hacer scrunch y conservar tus rizos durante varios días.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9EEDC]/40 border border-[#46200D]/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#0C695F]/10 text-[#0C695F] flex items-center justify-center">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#46200D]">Ambiente Costeño Cálido</h4>
                <p className="text-xs text-[#46200D]/80 leading-relaxed">
                  Espacio acogedor con aire acondicionado, café colombiano, aromáticas y atención personalizada con cita previa.
                </p>
              </div>

            </div>

            {/* Quick CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#CF2844] hover:bg-[#B51D37] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Vive la Experiencia Rizos Quilleros</span>
              </button>
              <span className="text-xs text-[#46200D]/70 font-medium">
                Atención exclusiva con cita previa por WhatsApp
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
