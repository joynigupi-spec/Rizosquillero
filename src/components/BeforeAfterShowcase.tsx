import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Star, ShieldCheck, Heart } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';

interface TransformationCase {
  id: string;
  title: string;
  client: string;
  curlType: string;
  before: {
    status: string;
    details: string[];
    visualBg: string;
    frizzLevel: string;
    shineLevel: string;
  };
  after: {
    serviceApplied: string;
    results: string[];
    visualBg: string;
    frizzLevel: string;
    shineLevel: string;
    quote: string;
  };
}

const CASES: TransformationCase[] = [
  {
    id: 'case-1',
    title: 'De Rizos sin Forma a Definición con Rebote y Brillo',
    client: 'Carolina M. · 26 años',
    curlType: 'Patrón 3B / 3C',
    before: {
      status: 'Cabello opaco por exceso de siliconas y corte recto previo que generaba efecto triángulo.',
      details: ['Corte inadecuado en mojado', 'Acumulación de aceites pesados', 'Falta de hidratación interna'],
      visualBg: 'from-[#61341C]/60 to-[#46200D]',
      frizzLevel: '85%',
      shineLevel: '20%',
    },
    after: {
      serviceApplied: 'Combo 2: Lavado Profundo + Hidratación Ozono + Corte de Forma en Seco + Definición',
      results: ['Capas estratégicas en seco que liberan volumen', 'Corte de puntas dañadas respetando el largo', 'Rizo elástico con duración de 4 días'],
      visualBg: 'from-[#0C695F] to-[#074740]',
      frizzLevel: '10%',
      shineLevel: '95%',
      quote: '“¡No creí que mi pelo pudiera verse así sin plancha ni secador abrasivo! El rebote que tienen mis rizos es irreal.”',
    },
  },
  {
    id: 'case-2',
    title: 'Restauración y Máximo Volumen para Corona Afro',
    client: 'Yuliet P. · 29 años',
    curlType: 'Patrón 4B / 4C',
    before: {
      status: 'Puntas resecas por clima de Barranquilla, tirones en peluquerías tradicionales y encogimiento rígido.',
      details: ['Cuero cabelludo tirante', 'Quiebre por nudos apretados', 'Miedo a ir a salones'],
      visualBg: 'from-[#46200D] to-[#2E1407]',
      frizzLevel: '90%',
      shineLevel: '15%',
    },
    after: {
      serviceApplied: 'Combo 3: Rizos sin Nudos + Baño de Vapor con Ozono + Mascarilla Botánica + Silueta Redonda',
      results: ['Desenredo indoloro con dedos y acondicionador botánico', 'Apertura de rizo hidratada con aceite de jojoba', 'Silueta en halo equilibrada y suave al tacto'],
      visualBg: 'from-[#CF2844] to-[#9E1428]',
      frizzLevel: '15%',
      shineLevel: '90%',
      quote: '“Por primera vez salí de una peluquería sonriendo y sin dolor de cabeza. Mi afro luce como una reina.”',
    },
  },
  {
    id: 'case-3',
    title: 'Recuperación de Ondas y Transición Capilar',
    client: 'Marcela V. · 32 años',
    curlType: 'Ondulado 2C en Transición',
    before: {
      status: 'Raíz ondulada de 8 cm conviviendo con puntas lacias por keratina previa.',
      details: ['Extremos tiesos e inertes', 'Frizz descontrolado en la unión', 'Inseguridad con la textura'],
      visualBg: 'from-[#46200D]/80 to-[#2A1207]',
      frizzLevel: '75%',
      shineLevel: '25%',
    },
    after: {
      serviceApplied: 'Combo Transición: Tratamiento de Enlaces + Corte Gradual de Transición + Asesoría',
      results: ['Armonización de textura con técnicas de rizado suave', 'Eliminación progresiva del químico sin corte radical', 'Plan de hidratación semanal para casa'],
      visualBg: 'from-[#FBBA42] to-[#D99516]',
      frizzLevel: '12%',
      shineLevel: '88%',
      quote: '“Estefani me dio la paciencia y las herramientas que necesitaba para no volver a quemarme el pelo.”',
    },
  },
];

interface BeforeAfterShowcaseProps {
  onOpenBooking: () => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewState, setViewState] = useState<'after' | 'before'>('after');
  const currentCase = CASES[activeTab];

  return (
    <section id="testimonios" className="py-20 bg-[#F9EEDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#CF2844] uppercase">
            <span>Resultados Reales</span>
            <span aria-hidden="true">·</span>
            <span>Casos en Barranquilla</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#46200D] tracking-tight">
            Transformaciones que <span className="text-[#CF2844]">Hablan por Sí Solas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#46200D]/80 leading-relaxed font-normal">
            No usamos filtros ni productos con fijación dura. Estos son resultados de salud, corte técnico y nutrición real en nuestro salón.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setViewState('after');
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0C695F] text-white shadow-md'
                  : 'bg-white/80 text-[#46200D] hover:bg-white border border-[#46200D]/10'
              }`}
            >
              {item.client} ({item.curlType})
            </button>
          ))}
        </div>

        {/* Main Transformation Card */}
        <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-[#46200D]/10 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-[#46200D]/10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0C695F]">
                {currentCase.curlType} · {currentCase.client}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#46200D] mt-1">
                {currentCase.title}
              </h3>
            </div>

            {/* Toggle Switch between Antes and Después */}
            <div className="flex items-center p-1.5 bg-[#F9EEDC] rounded-full border border-[#46200D]/10 shrink-0">
              <button
                onClick={() => setViewState('before')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewState === 'before'
                    ? 'bg-[#46200D] text-white shadow-xs'
                    : 'text-[#46200D]/70 hover:text-[#46200D]'
                }`}
              >
                Antes de Llegar
              </button>
              <button
                onClick={() => setViewState('after')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewState === 'after'
                    ? 'bg-[#CF2844] text-white shadow-xs'
                    : 'text-[#46200D]/70 hover:text-[#46200D]'
                }`}
              >
                ✨ Resultado Final
              </button>
            </div>
          </div>

          {/* Dynamic Content View depending on toggle */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual State Representation */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-2xl p-8 text-white bg-gradient-to-br shadow-inner transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px] ${
                  viewState === 'after' ? currentCase.after.visualBg : currentCase.before.visualBg
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-black/20 backdrop-blur-xs">
                    {viewState === 'after' ? 'En Rizos Quilleros' : 'Estado Previo'}
                  </span>
                  <span className="text-xs font-semibold text-white/90">
                    {currentCase.curlType}
                  </span>
                </div>

                {/* Metrics comparison */}
                <div className="space-y-3 my-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>Nivel de Definición & Brillo</span>
                      <span className="font-bold tabular-nums">
                        {viewState === 'after' ? currentCase.after.shineLevel : currentCase.before.shineLevel}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FBBA42] transition-all duration-500"
                        style={{
                          width: viewState === 'after' ? currentCase.after.shineLevel : currentCase.before.shineLevel,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                      <span>Control de Frizz y Sequedad</span>
                      <span className="font-bold tabular-nums">
                        {viewState === 'after' ? 'Controlado (95%)' : 'Descontrolado'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          viewState === 'after' ? 'bg-emerald-400' : 'bg-red-400'
                        }`}
                        style={{
                          width: viewState === 'after' ? '95%' : '20%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-white/80 italic">
                  {viewState === 'after'
                    ? 'Cabello lavado, hidratado con ozono y secado con difusor'
                    : 'Cabello seco con acumulación o corte no especializado'}
                </div>
              </div>
            </div>

            {/* Explanatory Details */}
            <div className="lg:col-span-7 space-y-5">
              {viewState === 'after' ? (
                <>
                  <div className="p-4 bg-[#0C695F]/5 rounded-2xl border border-[#0C695F]/15">
                    <span className="text-xs font-bold text-[#0C695F] uppercase tracking-wider block mb-1">
                      Servicio Aplicado:
                    </span>
                    <p className="text-sm font-semibold text-[#46200D]">
                      {currentCase.after.serviceApplied}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-[#46200D] uppercase tracking-wider">
                      Logros de la Sesión:
                    </h4>
                    {currentCase.after.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46200D]">
                        <Check className="w-4 h-4 text-[#0C695F] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="p-4 bg-[#F9EEDC]/60 rounded-xl border-l-2 border-[#CF2844] font-quote text-sm italic text-[#46200D]">
                    {currentCase.after.quote}
                  </blockquote>
                </>
              ) : (
                <>
                  <div className="p-4 bg-[#46200D]/5 rounded-2xl border border-[#46200D]/10">
                    <span className="text-xs font-bold text-[#46200D] uppercase tracking-wider block mb-1">
                      Diagnóstico Inicial:
                    </span>
                    <p className="text-sm text-[#46200D]/80">
                      {currentCase.before.status}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-[#46200D] uppercase tracking-wider">
                      Factores que impedían el lucimiento del rizo:
                    </h4>
                    {currentCase.before.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46200D]/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CF2844] shrink-0 mt-1.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setViewState('after')}
                      className="text-xs font-bold text-[#CF2844] hover:underline cursor-pointer"
                    >
                      Haz clic para ver cómo lo transformamos →
                    </button>
                  </div>
                </>
              )}

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#CF2844] hover:bg-[#B51D37] text-white text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Quiero una Transformación como Esta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
