import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '5511953639605';
  const defaultMessage = encodeURIComponent(
    'Olá, Brigaderia Pedaço do Céu! Gostaria de consultar os doces disponíveis na vitrine hoje (copos da felicidade, morangos cravejados, brownies e brigadeiros) e fazer um pedido.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Balão de Mensagem Amigável */}
      {showTooltip && (
        <div className="mb-2 max-w-[220px] bg-white p-3 rounded-2xl shadow-xl border border-slate-200/90 text-xs text-slate-800 relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 cursor-pointer"
            aria-label="Fechar dica"
            type="button"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Fale com a Brigaderia</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Consulte nossos copos da felicidade, morangos e brigadeiros no WhatsApp!
          </p>
        </div>
      )}

      {/* Botão Flutuante Principal com Pulso */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a Brigaderia Pedaço do Céu"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Anel de Pulso */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
      </a>
    </div>
  );
};
