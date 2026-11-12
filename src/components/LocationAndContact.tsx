import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { HibiscusFlower, TropicalLeaf } from './TropicalDecorations';

interface LocationAndContactProps {
  onOpenBooking: () => void;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conversion Banner: "Tus rizos merecen la mejor versión" */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0C695F] via-[#08453E] to-[#46200D] text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden mb-16">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-15 pointer-events-none">
            <HibiscusFlower size={240} color="#FBBA42" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FBBA42] block">
              Agenda tu Transformación Hoy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              ¿Lista para celebrar la fuerza y belleza de tus rizos?
            </h2>
            <p className="text-base sm:text-lg text-[#F9EEDC]/90 font-normal leading-relaxed">
              Reserva tu espacio en nuestra agenda con Estefani y el equipo de Rizos Quilleros. Cada hebra es tratada con dedicación, técnica y amor caribeño.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#CF2844] hover:bg-[#B51D37] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 transition-transform group-hover:scale-110" />
                <span>[AGENDA TU CITA POR WHATSAPP]</span>
              </button>

              <span className="text-xs text-[#F9EEDC]/80 font-medium">
                Respuesta rápida en minutos · Cupos limitados por día
              </span>
            </div>
          </div>
        </div>

        {/* Location & Salon Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Item 1: Location */}
          <div className="p-7 rounded-3xl bg-[#F9EEDC]/50 border border-[#46200D]/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0C695F]/10 text-[#0C695F] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#46200D]">Ubicación en Barranquilla</h3>
            <p className="text-sm text-[#46200D]/80 leading-relaxed">
              Carrera 53 # 76-85, Sector Prado / Alto Prado.<br />
              Barranquilla, Atlántico, Colombia.
            </p>
            <div className="text-xs text-[#0C695F] font-semibold pt-1">
              Fácil acceso y parqueaderos cercanos
            </div>
          </div>

          {/* Item 2: Hours */}
          <div className="p-7 rounded-3xl bg-[#F9EEDC]/50 border border-[#46200D]/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#CF2844]/10 text-[#CF2844] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#46200D]">Horarios de Atención</h3>
            <p className="text-sm text-[#46200D]/80 leading-relaxed">
              <strong>Martes a Sábado:</strong> 8:30 a.m. – 6:30 p.m.<br />
              <strong>Domingos & Festivos:</strong> Con cita previa confirmada.<br />
              <strong>Lunes:</strong> Descanso y mantenimiento.
            </p>
          </div>

          {/* Item 3: Social & Contact */}
          <div className="p-7 rounded-3xl bg-[#F9EEDC]/50 border border-[#46200D]/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FBBA42]/20 text-[#46200D] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#46200D]">Canales Oficiales</h3>
            <p className="text-sm text-[#46200D]/80 leading-relaxed">
              <strong>WhatsApp Reservas:</strong> +57 300 245 8920<br />
              <strong>Instagram:</strong> @rizosquillero<br />
              <strong>Ciudad:</strong> Barranquilla · Curramba la Bella
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
