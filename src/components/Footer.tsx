import React from 'react';
import { MessageCircle, Instagram, Heart, MapPin, Clock } from 'lucide-react';
import { HibiscusFlower } from './TropicalDecorations';
import { LOGO_ROUND_URL, HOSTING_ZIP_URL, SOURCE_ZIP_URL } from '../utils/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#46200D] text-[#F9EEDC] pt-16 pb-12 border-t border-[#46200D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_ROUND_URL}
                alt="Rizos Quilleros Logo"
                className="w-12 h-12 rounded-full object-cover bg-white p-0.5 shadow-sm"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Rizos Quilleros
                </span>
                <span className="text-xs text-[#FBBA42] font-semibold">
                  Rizos libres · Belleza natural
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F9EEDC]/80 leading-relaxed font-normal max-w-sm">
              Peluquería especializada en cabello rizado y afro en Barranquilla. Fundada por Estefani con más de 6 años de experiencia celebrando cada curvatura con amor, técnica en seco y fórmulas limpias.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FBBA42] font-medium pt-1">
              <span>Barranquilla</span>
              <span aria-hidden="true">·</span>
              <span>Atlántico</span>
              <span aria-hidden="true">·</span>
              <span>Caribe Colombiano</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FBBA42]">
              Navegación
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F9EEDC]/80">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios de Peluquería
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-white transition-colors">
                  Combos Todo en Uno
                </a>
              </li>
              <li>
                <a href="#tipos-de-rizo" className="hover:text-white transition-colors">
                  Guía de Tipos de Rizo
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  El Salón & Estefani
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Transformaciones Reales
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FBBA42]">
              Contacto & Redes
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-[#F9EEDC]/80">
              <p>Barranquilla, Atlántico (Sector Prado)</p>
              <p>WhatsApp Citas: +57 300 245 8920</p>
              <p>Instagram: @rizosquillero</p>
              <p className="text-[#FBBA42] font-medium pt-1">
                Atención exclusiva con cita previa
              </p>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip & Hosting Download */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F9EEDC]/60 border-t border-white/5 mt-4">
          <div>
            © {new Date().getFullYear()} Rizos Quilleros. Todos los derechos reservados.
          </div>

          {/* Direct ZIP Download Links for Hosting */}
          <div className="flex items-center gap-3">
            <a
              href={HOSTING_ZIP_URL}
              download="rizosquilleros-web-hosting.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBBA42] text-[#46200D] hover:bg-[#E6A228] font-bold rounded-lg shadow-xs transition-colors"
              title="Descargar paquete ZIP listo para subir a tu hosting (cPanel, Hostinger, Netlify, Vercel, etc.)"
            >
              <span>⬇ Descargar ZIP para Hosting</span>
            </a>
            <a
              href={SOURCE_ZIP_URL}
              download="rizosquilleros-codigo-fuente.zip"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-[#F9EEDC] rounded-lg transition-colors"
              title="Descargar código fuente completo del proyecto"
            >
              <span>Código Fuente (.zip)</span>
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>Hecho con amor y orgullo caribeño en Barranquilla</span>
            <HibiscusFlower size={14} color="#CF2844" className="inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
