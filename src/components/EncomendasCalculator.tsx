import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Users, Calendar, Sparkles, MessageCircle, Cake, Coffee, Heart } from 'lucide-react';

interface EncomendasCalculatorProps {
  onContactClick: () => void;
}

export const EncomendasCalculator: React.FC<EncomendasCalculatorProps> = ({ onContactClick }) => {
  const [eventType, setEventType] = useState<'aniversario' | 'corporativo' | 'casamento' | 'presente'>('aniversario');
  const [guestCount, setGuestCount] = useState<number>(20);
  const [includeBrownies, setIncludeBrownies] = useState<boolean>(true);
  const [includeMorangos, setIncludeMorangos] = useState<boolean>(true);
  const [includeCopos, setIncludeCopos] = useState<boolean>(false);

  // Cálculos artesanais da brigaderia
  const brigadeirosCount = guestCount * 4;
  const browniesCount = includeBrownies ? Math.round(guestCount * 0.8) : 0;
  const morangosCount = includeMorangos ? Math.round(guestCount * 0.6) : 0;
  const coposCount = includeCopos ? Math.round(guestCount * 0.5) : 0;

  // Estimativa média de valor
  const estimatedTotal =
    brigadeirosCount * 6.5 +
    browniesCount * 14.0 +
    morangosCount * 18.0 +
    coposCount * 22.0;

  const handleWhatsAppOrder = () => {
    const eventLabels = {
      aniversario: 'Aniversário & Festa Familiar',
      corporativo: 'Evento Corporativo / Coffee Break',
      casamento: 'Casamento / Batizado Especial',
      presente: 'Caixa de Presente & Lembrancinhas Luxo',
    };

    const text = `Olá, Brigaderia Pedaço do Céu! Gostaria de um orçamento para doces artesanais:
• Ocasião: ${eventLabels[eventType]}
• Número de Pessoas: ${guestCount} convidados
• Brigadeiros Gourmet: ~${brigadeirosCount} unidades
${includeBrownies ? `• Brownies Artesanais: ~${browniesCount} fatias\n` : ''}${includeMorangos ? `• Morangos Cravejados: ~${morangosCount} unidades\n` : ''}${includeCopos ? `• Copos da Felicidade: ~${coposCount} unidades\n` : ''}
Poderiam me enviar o catálogo de sabores e disponibilidade de data?`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511953639605?text=${encoded}`, '_blank');
  };

  return (
    <section id="encomendas" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wide uppercase mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span>Mesa de Doces, Festas & Presentes</span>
          </div>
          <h2 className="section-title-clamp font-display font-black text-slate-900 mb-4">
            Encomendas personalizadas para os momentos mais doces
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Monte a combinação perfeita de brigadeiros gourmet, fatias de brownie, morangos cravejados e copos da felicidade para o seu evento ou presente.
          </p>
        </div>

        {/* Caixa Interativa do Simulador */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lado Esquerdo: Controles */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Seleção do Tipo de Ocasião */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  1. Qual é a ocasião?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setEventType('aniversario')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                      eventType === 'aniversario'
                        ? 'border-sky-500 bg-sky-50/70 text-sky-900'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Cake className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Aniversário / Festa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventType('corporativo')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                      eventType === 'corporativo'
                        ? 'border-sky-500 bg-sky-50/70 text-sky-900'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Coffee className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Empresas & Reuniões</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventType('casamento')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                      eventType === 'casamento'
                        ? 'border-sky-500 bg-sky-50/70 text-sky-900'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Heart className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Casamento & Batizado</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEventType('presente')}
                    className={`p-3 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                      eventType === 'presente'
                        ? 'border-sky-500 bg-sky-50/70 text-sky-900'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Gift className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Presentes & Caixas Luxo</span>
                  </button>
                </div>
              </div>

              {/* Slider de Quantidade de Pessoas */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Quantidade de Convidados / Pessoas
                  </label>
                  <span className="text-sm font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-100">
                    {guestCount} pessoas
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>Presente / Encontro Íntimo (5)</span>
                  <span>Festa Média (50)</span>
                  <span>Grande Recepção (100+)</span>
                </div>
              </div>

              {/* Opções extras de doces */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  3. O que deseja incluir no pacote?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={includeBrownies}
                      onChange={(e) => setIncludeBrownies(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span>Brownies Fartos</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={includeMorangos}
                      onChange={(e) => setIncludeMorangos(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span>Morangos Cravejados</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={includeCopos}
                      onChange={(e) => setIncludeCopos(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span>Copos da Felicidade</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Lado Direito: Resumo Calculado */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-slate-700 shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-sky-400">Sugestão da Confeiteira</span>
                  <span className="text-xs text-slate-400">{guestCount} pessoas</span>
                </div>

                <div className="space-y-3.5 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Brigadeiros Belgas & Sortidos</span>
                    <span className="font-bold text-amber-400">{brigadeirosCount} un</span>
                  </div>

                  {includeBrownies && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Brownies Recheados</span>
                      <span className="font-bold text-amber-400">{browniesCount} un</span>
                    </div>
                  )}

                  {includeMorangos && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Morangos Cravejados</span>
                      <span className="font-bold text-amber-400">{morangosCount} un</span>
                    </div>
                  )}

                  {includeCopos && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Copos da Felicidade</span>
                      <span className="font-bold text-amber-400">{coposCount} un</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Estimativa média sugerida:</span>
                    <span className="text-lg font-display font-black text-white">
                      R$ {estimatedTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal mb-6">
                  * Valores aproximados baseados na tabela oficial da loja. Montamos caixas e bandejas personalizadas.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="w-full py-2.5 text-center text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Ou preencher formulário de contato
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
