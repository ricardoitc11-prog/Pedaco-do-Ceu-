import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, MessageCircle, Navigation, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    assunto: 'pedido',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const assuntoLabels: Record<string, string> = {
        pedido: 'Retirada rápida de doces / Balcão',
        encomenda: 'Encomenda de brigadeiros / Caixa de presente',
        copos: 'Copos da felicidade & Brownies',
        duvida: 'Dúvidas sobre sabores e alérgenos',
      };

      const text = `Olá, Brigaderia Pedaço do Céu! Meu nome é ${formData.nome}.
Telefone: ${formData.telefone}
Tipo de interesse: ${assuntoLabels[formData.assunto] || 'Atendimento'}
Mensagem: ${formData.mensagem}`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/5511953639605?text=${encoded}`, '_blank');
    }, 600);
  };

  const address = 'Avenida Doutor José Maciel, 1053';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Avenida Doutor José Maciel, 1053')}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Avenida Doutor José Maciel, 1053')}`;

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nossa Loja Física</span>
          </div>
          <h2 className="section-title-clamp font-display font-black text-slate-900 mb-4">
            Venha conhecer nossa vitrine de doces
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Faça seu pedido antecipado para retirar rapidinho, encomende caixas personalizadas ou passe para saborear um copo da felicidade bem geladinho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coluna 1: Informações de Localização, Horários e Loja */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Card de Endereço */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                    Endereço da Brigaderia
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-800">
                    {address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fácil parada em frente e localização privilegiada no bairro.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-800 hover:text-sky-600 border border-slate-200 text-xs font-bold shadow-sm transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-sky-500" />
                      <span>Abrir no Google Maps</span>
                    </a>
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-800 hover:text-sky-600 border border-slate-200 text-xs font-bold shadow-sm transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-sky-500" />
                      <span>Navegar pelo Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Telefone e WhatsApp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                    Telefone & WhatsApp de Pedidos
                  </h3>
                  <a
                    href="https://wa.me/5511953639605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-black text-slate-900 hover:text-emerald-600 transition-colors block"
                  >
                    (11) 95363-9605
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Atendimento ágil para reservas de morangos cravejados, copos e encomendas.
                  </p>
                </div>
              </div>
            </div>

            {/* Horários de Funcionamento */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-display font-bold text-white">
                  Horários de Atendimento & Produção
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Terça a Sábado</span>
                  <span className="font-bold text-sky-300">10h00 às 20h00</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Domingos e Feriados</span>
                  <span className="font-bold text-sky-300">11h00 às 18h00</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Segunda-feira</span>
                  <span className="text-amber-400 font-medium">Dia de Produção de Bases (Fechado)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Morangos e Copos Frescos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Os morangos cravejados e copos da felicidade são finalizados fresca e continuamente durante todo o dia.
                </p>
              </div>
            </div>

          </div>

          {/* Coluna 2: Formulário de Contato Direto */}
          <div className="lg:col-span-6 bg-[#FAF7F0] p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-display font-black text-slate-900 mb-2">
              Envie uma mensagem para a nossa equipe
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Quer reservar um doce da vitrine ou tirar dúvidas sobre presentes? Responderemos bem rapidinho.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-emerald-900 mb-1">
                  Mensagem Encaminhada!
                </h4>
                <p className="text-xs text-emerald-800 mb-4">
                  Sua conversa foi direcionada para nossa equipe no WhatsApp ((11) 95363-9605).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Mariana Silva"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    WhatsApp para Retorno
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Assunto Principal
                  </label>
                  <select
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all"
                  >
                    <option value="pedido">Reserva de Doces para Hoje (Balcão / Delivery)</option>
                    <option value="copos">Copos da Felicidade & Morangos Cravejados</option>
                    <option value="encomenda">Encomenda de Brigadeiros & Caixas Presente</option>
                    <option value="duvida">Informações sobre Ingredientes e Alérgenos</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Como podemos adoçar o seu dia?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte quais doces deseja reservar ou qual dúvida deseja esclarecer..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Entrar em contato</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 pt-2">
                  Atendimento oficial no WhatsApp: <strong>(11) 95363-9605</strong>
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
