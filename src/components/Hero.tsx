import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreMenu: () => void;
}

function useCounter(target: number, durationMs: number = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, durationMs]);

  return count;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreMenu }) => {
  const years = useCounter(14, 1500);
  const kgBrigadeiro = useCounter(280, 2000);
  const totalFlavors = useCounter(24, 1600);

  return (
    <section id="inicio" className="relative pt-6 pb-20 lg:pt-14 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/50 via-[#FAF7F0] to-[#FAF7F0]">
      {/* Elementos decorativos de fundo suaves */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-200/25 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-sky-300/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto Principal */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm w-fit mb-6"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Brigaderia Artesanal na Av. Dr. José Maciel, 1053
              </span>
              <span className="hidden sm:inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Chocolate Nobre & Pura Nutella
              </span>
            </motion.div>

            {/* Headline Magnético da Brigaderia */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="hero-title-clamp font-display font-black text-slate-900 tracking-tight mb-6"
            >
              O sabor do brigadeiro perfeito.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-sky-800 block">
                A doçura que abraça o seu dia.
              </span>
            </motion.h1>

            {/* Subheadline Focado no Cardápio Real */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl"
            >
              Brigadeiros gourmet apurados na panela de cobre, copos da felicidade montados em camadas fartas, brownies artesanais molhadinhos e morangos gigantes cravejados no chocolate belga.
            </motion.p>

            {/* CTAs de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <button
                onClick={onContactClick}
                type="button"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreMenu}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-sky-50 text-slate-800 hover:text-sky-600 font-semibold text-base border border-slate-200/90 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Ver Cardápio de Doces</span>
              </button>
            </motion.div>

            {/* Selos de Qualidade da Brigaderia */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">100% Chocolate Nobre</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">Panela pesada de cobre</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">Morangos frescos diários</span>
              </div>
            </motion.div>

          </div>

          {/* Coluna Visual e Composição de Imagens */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Moldura Principal de Destaque: Copo da Felicidade & Brigadeiros */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80"
                  alt="Copo da felicidade com camadas de brigadeiro, ninho, brownie e morangos frescos"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Card Informativo no rodapé da imagem */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-sky-600">Destaque do Balcão</p>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">Copo da Felicidade: Ninho & Nutella</h4>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-100 text-emerald-800">
                      Montado na Hora
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Flutuante 1: Morango Cravejado */}
              <motion.div
                initial={{ opacity: 0, x: -25, y: 25 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -top-6 -left-6 sm:-left-10 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[270px]"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=200&q=80"
                    alt="Morango cravejado no chocolate belga"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">Novidade</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Morango Cravejado</p>
                  <p className="text-[11px] text-slate-500">Banhado em chocolate belga</p>
                </div>
              </motion.div>

              {/* Card Flutuante 2: Avaliação Google */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: -25 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                    <span>4.9 de 5.0</span>
                    <span className="text-slate-400 font-normal">no Google</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">+1.200 clientes apaixonados</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Métricas e Estatísticas Animadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-sky-200 hover:shadow-md transition-all">
            <span className="text-3xl sm:text-4xl font-display font-black text-sky-600">
              +{years} anos
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
              De paixão pela confeitaria artesanal
            </span>
            <span className="text-[11px] text-slate-500 mt-1">Tradição em panelas de cobre</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-sky-200 hover:shadow-md transition-all">
            <span className="text-3xl sm:text-4xl font-display font-black text-amber-500">
              {totalFlavors} sabores
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
              De brigadeiros & recheios nobres
            </span>
            <span className="text-[11px] text-slate-500 mt-1">Do Belga 70% ao Pistache Puro</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-sky-200 hover:shadow-md transition-all">
            <span className="text-3xl sm:text-4xl font-display font-black text-sky-600">
              +{kgBrigadeiro} kg
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
              De brigadeiro enrolado todo mês
            </span>
            <span className="text-[11px] text-slate-500 mt-1">Textura que derrete na boca</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-sky-200 hover:shadow-md transition-all">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-display font-black text-slate-900">100%</span>
              <span className="text-sm font-bold text-sky-600">puro</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
              Sem gordura hidrogenada
            </span>
            <span className="text-[11px] text-slate-500 mt-1">Manteiga extra e chocolate belga</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
