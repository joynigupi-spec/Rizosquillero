import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Calendar, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F9EEDC]/95 backdrop-blur-md shadow-sm border-b border-[#46200D]/10 py-3'
            : 'bg-[#F9EEDC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark & circular logo */}
            <a
              href="#"
              className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C695F] rounded-lg"
              aria-label="Rizos Quilleros - Inicio"
            >
              <img
                src="/assets/brand/rizos_quilleros_logo_round.png"
                alt="Logo Rizos Quilleros"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-sm transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-tight text-[#46200D]">
                  Rizos Quilleros
                </span>
                <span className="text-[11px] font-medium text-[#0C695F] tracking-wide -mt-1 hidden sm:block">
                  Barranquilla · Rizos & Afro
                </span>
              </div>
            </a>

            {/* Zone 2: 4-5 clean single-line nav links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#46200D]">
              <a
                href="#servicios"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                Servicios & Precios
              </a>
              <a
                href="#combos"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                Combos 2025
              </a>
              <a
                href="#tipos-de-rizo"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                Guía de Rizos
              </a>
              <a
                href="#experiencia"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                El Salón & Estefani
              </a>
              <a
                href="#testimonios"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                Resultados
              </a>
              <a
                href="#faq"
                className="hover:text-[#CF2844] transition-colors whitespace-nowrap shrink-0"
              >
                Preguntas
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action (Agenda tu Cita por WhatsApp) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#CF2844] hover:bg-[#B51D37] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agenda tu Cita</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#46200D] hover:text-[#0C695F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C695F] rounded-lg cursor-pointer"
                aria-label="Abrir menú de navegación"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#46200D]/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-[#F9EEDC] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#46200D]/10">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#46200D]/10 flex items-center gap-3">
                <img
                  src="/assets/brand/rizos_quilleros_logo_round.png"
                  alt="Rizos Quilleros"
                  className="w-10 h-10 rounded-full object-cover shadow-xs"
                />
                <div>
                  <div className="font-bold text-[#46200D]">Rizos Quilleros</div>
                  <div className="text-xs text-[#0C695F]">Rizos libres · Belleza natural</div>
                </div>
              </div>

              <nav className="flex flex-col space-y-3">
                <a
                  href="#servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  Servicios & Precios
                </a>
                <a
                  href="#combos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  Combos Todo en Uno
                </a>
                <a
                  href="#tipos-de-rizo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  ¿Cuál es tu tipo de rizo?
                </a>
                <a
                  href="#experiencia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  El Salón & Estefani
                </a>
                <a
                  href="#testimonios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  Resultados Reales
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#46200D] hover:text-[#CF2844] hover:bg-[#FBBA42]/15 rounded-lg transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#46200D]/10 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-white bg-[#CF2844] hover:bg-[#B51D37] rounded-xl shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Agendar Cita en WhatsApp</span>
              </button>

              <div className="text-xs text-[#46200D]/70 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0C695F]" />
                  <span>Barranquilla, Atlántico</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0C695F]" />
                  <span>Mar a Sáb: 8:30 a.m. - 6:30 p.m.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
