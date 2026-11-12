import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Clock, Sparkles, Check, Copy, CheckCheck, MapPin } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/salonData';
import { HibiscusFlower } from './TropicalDecorations';

interface InteractiveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedServiceName?: string;
}

export const InteractiveBookingModal: React.FC<InteractiveBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedServiceName,
}) => {
  const [clientName, setClientName] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || 'combo-2'
  );
  const [curlType, setCurlType] = useState('Rizos Tipo 3 (3A · 3B · 3C)');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeShift, setTimeShift] = useState('Mañana (8:30 a.m. - 12:30 p.m.)');
  const [clientNotes, setClientNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync preselection
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    } else if (preselectedServiceName) {
      const match = SERVICES.find((s) =>
        s.name.toLowerCase().includes(preselectedServiceName.toLowerCase())
      );
      if (match) setSelectedServiceId(match.id);
    }
  }, [preselectedServiceId, preselectedServiceName]);

  // Set default tomorrow date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const generateWhatsAppMessage = () => {
    const name = clientName.trim() || 'Clienta';
    let text = `¡Hola Rizos Quilleros! 🌸\n\n`;
    text += `Quiero agendar una cita en su salón de Barranquilla:\n`;
    text += `• Nombre: ${name}\n`;
    text += `• Servicio: ${currentService.name} (${currentService.price} COP)\n`;
    text += `• Textura de cabello: ${curlType}\n`;
    text += `• Fecha estimada: ${preferredDate || 'Por coordinar'}\n`;
    text += `• Jornada preferida: ${timeShift}\n`;
    if (clientNotes.trim()) {
      text += `• Detalle adicional: ${clientNotes.trim()}\n`;
    }
    text += `\n¿Tienen disponibilidad para esta fecha? ¡Quedo atenta, muchas gracias! ✨`;
    return text;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    // Official WhatsApp phone number for Barranquilla (+57 300 245 8920)
    const phone = '573002458920';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#46200D]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#46200D]/10 overflow-hidden my-8 z-10">
        
        {/* Decorative subtle header pattern */}
        <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-15 pointer-events-none">
          <HibiscusFlower size={120} color="#CF2844" />
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#46200D]/10 relative z-10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/brand/rizos_quilleros_logo_round.png"
              alt="Rizos Quilleros"
              className="w-10 h-10 rounded-full object-cover shadow-xs"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#46200D]">
                Agenda tu Cita por WhatsApp
              </h3>
              <p className="text-xs text-[#0C695F] font-semibold">
                Rizos Quilleros · Salón Barranquilla
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#46200D]/60 hover:text-[#CF2844] hover:bg-[#F9EEDC] rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className="mt-6 space-y-5 text-sm">
          
          {/* Client Name */}
          <div>
            <label className="block text-xs font-bold text-[#46200D] uppercase tracking-wider mb-1.5">
              ¿Cuál es tu nombre? *
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ej: Laura Salcedo"
              className="w-full px-4 py-2.5 rounded-xl border border-[#46200D]/20 focus:outline-none focus:ring-2 focus:ring-[#0C695F] focus:border-transparent bg-[#F9EEDC]/30 text-[#46200D]"
            />
          </div>

          {/* Service Picker */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-[#46200D] uppercase tracking-wider">
                Servicio o Combo deseado *
              </label>
              <span className="text-xs font-bold text-[#CF2844] tabular-nums">
                {currentService.price} COP
              </span>
            </div>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#46200D]/20 focus:outline-none focus:ring-2 focus:ring-[#0C695F] focus:border-transparent bg-[#F9EEDC]/30 text-[#46200D] font-medium"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.price} ({s.duration || 'Consulta previa'})
                </option>
              ))}
            </select>
          </div>

          {/* Texture & Date Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Texture */}
            <div>
              <label className="block text-xs font-bold text-[#46200D] uppercase tracking-wider mb-1.5">
                Tu Tipo de Cabello
              </label>
              <select
                value={curlType}
                onChange={(e) => setCurlType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#46200D]/20 focus:outline-none focus:ring-2 focus:ring-[#0C695F] focus:border-transparent bg-[#F9EEDC]/30 text-[#46200D]"
              >
                <option value="Ondulado Tipo 2 (2A · 2B · 2C)">Ondulado Tipo 2 (2A · 2B · 2C)</option>
                <option value="Rizos Tipo 3 (3A · 3B · 3C)">Rizos Tipo 3 (3A · 3B · 3C)</option>
                <option value="Afro Tipo 4 (4A · 4B · 4C)">Afro Tipo 4 (4A · 4B · 4C)</option>
                <option value="En Transición Capilar">En Transición Capilar</option>
                <option value="No sé mi tipo (Deseo Asesoría)">No sé mi tipo (Deseo Asesoría)</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-[#46200D] uppercase tracking-wider mb-1.5">
                Fecha Estimada
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#46200D]/20 focus:outline-none focus:ring-2 focus:ring-[#0C695F] focus:border-transparent bg-[#F9EEDC]/30 text-[#46200D]"
              />
            </div>
          </div>

          {/* Time Shift */}
          <div>
            <label className="block text-xs font-bold text-[#46200D] uppercase tracking-wider mb-1.5">
              Jornada Preferida
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimeShift('Mañana (8:30 a.m. - 12:30 p.m.)')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  timeShift.includes('Mañana')
                    ? 'bg-[#0C695F] text-white border-[#0C695F]'
                    : 'bg-white text-[#46200D] border-[#46200D]/20 hover:bg-[#F9EEDC]'
                }`}
              >
                Mañana (8:30am - 12:30pm)
              </button>
              <button
                type="button"
                onClick={() => setTimeShift('Tarde (2:00 p.m. - 6:30 p.m.)')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  timeShift.includes('Tarde')
                    ? 'bg-[#0C695F] text-white border-[#0C695F]'
                    : 'bg-white text-[#46200D] border-[#46200D]/20 hover:bg-[#F9EEDC]'
                }`}
              >
                Tarde (2:00pm - 6:30pm)
              </button>
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs font-bold text-[#46200D] uppercase tracking-wider mb-1.5">
              Comentarios o dudas adicionales (Opcional)
            </label>
            <input
              type="text"
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              placeholder="Ej: Tengo cabello abundante, me decoloré hace 6 meses..."
              className="w-full px-4 py-2 rounded-xl border border-[#46200D]/20 focus:outline-none focus:ring-2 focus:ring-[#0C695F] focus:border-transparent bg-[#F9EEDC]/30 text-[#46200D] text-xs"
            />
          </div>

          {/* WhatsApp Preview Box */}
          <div className="p-3.5 bg-[#F9EEDC]/70 rounded-2xl border border-[#46200D]/10 text-xs text-[#46200D]/90 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#0C695F] uppercase tracking-wider">
              <span>Mensaje que enviaremos a WhatsApp:</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-[#CF2844] hover:underline cursor-pointer"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Copiar texto'}</span>
              </button>
            </div>
            <p className="font-mono text-[11px] text-[#46200D]/80 whitespace-pre-line bg-white/70 p-2.5 rounded-lg border border-[#46200D]/5">
              {generateWhatsAppMessage()}
            </p>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-5 border-t border-[#46200D]/10 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleSendWhatsApp}
            className="w-full sm:flex-1 py-3.5 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>ENVIAR CITA A WHATSAPP (+57)</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-[#46200D]/70 hover:text-[#46200D] cursor-pointer"
          >
            Volver a la página
          </button>
        </div>

      </div>
    </div>
  );
};
