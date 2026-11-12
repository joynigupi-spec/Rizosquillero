import React from 'react';
import { Droplets, Sparkles, PartyPopper, Check, HeartHandshake } from 'lucide-react';
import { HibiscusFlower, TropicalLeaf } from './TropicalDecorations';

export const BrandEssence: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-[#46200D]/5">
      {/* Background soft botanical touches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#0C695F] uppercase">
            02 · Concepto & Filosofía de Marca
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#46200D] tracking-tight">
            Rizos Libres. <span className="text-[#0C695F]">Belleza Natural.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            Somos una peluquería barranquillera nacida para honrar la autenticidad de cada textura: ondas, rizos y afro. Unimos la calidez y alegría del Caribe con el rigor y amor por la salud capilar.
          </p>
        </div>

        {/* 3 Pillars of Brand Territory (CUIDAR, DEFINIR, CELEBRAR) from Brand Board page 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          
          {/* Pillar 1: CUIDAR */}
          <div className="group relative bg-[#0C695F] text-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
              <TropicalLeaf size={80} color="#F9EEDC" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-[#FBBA42]">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-widest text-[#FBBA42] font-semibold">
                Territorio 01
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                CUIDAR
              </h3>
              <p className="text-sm text-[#F9EEDC]/90 leading-relaxed">
                Lavado respetuoso, mascarillas nutritivas según porosidad y terapia de vapor con ozono para devolverle la hidratación profunda a la hebra.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FBBA42]">
                <span>Nutrición</span>
                <span aria-hidden="true">·</span>
                <span>Salud Capilar</span>
                <span aria-hidden="true">·</span>
                <span>Suavidad</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: DEFINIR */}
          <div className="group relative bg-[#CF2844] text-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-25 group-hover:opacity-35 transition-opacity">
              <HibiscusFlower size={80} color="#FBBA42" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                Territorio 02
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                DEFINIR
              </h3>
              <p className="text-sm text-white/95 leading-relaxed">
                Corte en seco mechón a mechón respetando la contracción natural. Técnicas de fitagem y difusor para rizos elásticos, con forma y sin frizz.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F9EEDC]">
                <span>Forma</span>
                <span aria-hidden="true">·</span>
                <span>Textura Real</span>
                <span aria-hidden="true">·</span>
                <span>Sin Frizz</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: CELEBRAR */}
          <div className="group relative bg-[#FBBA42] text-[#46200D] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-25 group-hover:opacity-35 transition-opacity">
              <HibiscusFlower size={80} color="#CF2844" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#46200D]/10 text-[#46200D]">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-widest text-[#46200D]/70 font-semibold">
                Territorio 03
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#46200D]">
                CELEBRAR
              </h3>
              <p className="text-sm text-[#46200D]/90 leading-relaxed">
                Peinados para eventos, ondas playeras sirena, trenzas, colorimetría protectora y maquillaje para tus días más especiales.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#46200D]/15 relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#46200D]">
                <span>Eventos</span>
                <span aria-hidden="true">·</span>
                <span>Color</span>
                <span aria-hidden="true">·</span>
                <span>Glam</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Personality Strip (Alegre, Orgánica, Auténtica, Libre, Caribeña, Cálida, Segura) */}
        <div className="mt-14 p-6 bg-[#F9EEDC]/60 rounded-2xl border border-[#46200D]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C695F] block">
                Nuestra Personalidad
              </span>
              <span className="font-quote text-base sm:text-lg text-[#46200D] italic">
                Cercano, divertido, caribeño y empoderador.
              </span>
            </div>

            {/* Unboxed personality traits */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#46200D]">
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Alegre</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Orgánica</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Auténtica</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Libre</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Caribeña</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Cálida</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-2xs">Segura</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
