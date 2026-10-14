import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, Clock, Star, Quote, Award } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const pillars = [
    {
      icon: Clock,
      title: 'Panela de Cobre & Fogo Brando',
      desc: 'O ponto perfeito do brigadeiro só nasce no calor homogêneo do cobre. Mexido pacientemente à mão até atingir o brilho acetinado que desmancha na boca.',
    },
    {
      icon: ShieldCheck,
      title: 'Chocolate Nobre Callebaut',
      desc: 'Diga adeus à gordura hidrogenada ou achocolatados comerciais. Nossas receitas levam cacau belga autêntico, manteiga pura e leite condensado de primeira linha.',
    },
    {
      icon: Sparkles,
      title: 'Morangos Frescos & Crocância',
      desc: 'Morangos selecionados diariamente, higienizados e secos com precisão para garantir a casquinha crocante dos morangos cravejados e o frescor dos copos.',
    },
    {
      icon: Heart,
      title: 'Afeto em Cada Camada',
      desc: 'Nosso nome não é por acaso: cada copo da felicidade, caixa de presente e brownie recheado é pensado para ser um pedaço do céu na sua rotina.',
    },
  ];

  const testimonials = [
    {
      name: 'Camila Mendonça',
      role: 'Cliente assídua há 3 anos',
      comment: 'O Copo da Felicidade de Ninho com Nutella e Morango é surreal de tão bom! As camadas são super fartas, morangos fresquinhos e o brigadeiro tem aquele ponto aveludado perfeito. Não tem igual no bairro!',
      rating: 5,
      date: 'Avaliação verificada no Google',
    },
    {
      name: 'Eduardo Silveira',
      role: 'Morador da Av. Dr. José Maciel',
      comment: 'Os morangos cravejados no chocolate belga são simplesmente um escândalo. A casquinha quebra na primeira mordida e o morango é gigante e docinho. A melhor brigaderia de São Paulo!',
      rating: 5,
      date: 'Avaliação verificada no Google',
    },
    {
      name: 'Beatriz Vasconcelos',
      role: 'Encomenda para aniversário e festa',
      comment: 'Encomendei 200 brigadeiros gourmets e mini copos da felicidade para o aniversário da minha filha. Todos os convidados ficaram encantados com a apresentação e o sabor. Chegou tudo impecável.',
      rating: 5,
      date: 'Avaliação de Encomenda',
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* História e Narrativa da Brigaderia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Coluna da Imagem com Moldura */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/5] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80"
                alt="Confeiteira enrolando brigadeiros gourmet com confeitos belgas finos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <p className="text-xs font-bold text-sky-600 uppercase tracking-wider">Tradição & Pureza</p>
                <p className="font-display font-bold text-slate-900 text-sm sm:text-base">
                  "O brigadeiro verdadeiro não aceita pressa: é apurado no ponto certo com amor e chocolate nobre."
                </p>
              </div>
            </div>

            {/* Selo Flutuante */}
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-sky-600 text-white p-3 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
              <Award className="w-5 h-5 text-amber-300 mb-0.5" />
              <span className="text-[10px] font-black uppercase leading-tight">100% Gourmet</span>
            </div>
          </motion.div>

          {/* Coluna de Texto da Tradição */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Nossa Paixão pelo Doce</span>
            </div>

            <h2 className="section-title-clamp font-display font-black text-slate-900 mb-6">
              A história de amor entre a panela de cobre e o chocolate belga
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              <p>
                A <strong className="text-slate-900 font-semibold">Brigaderia Pedaço do Céu</strong> nasceu com a missão de transformar o doce mais amado do Brasil em uma experiência sensorial inesquecível.
              </p>
              <p>
                Afastamo-nos dos conservantes e da gordura hidrogenada para honrar a panela pesada de cobre, o chocolate belga puro e a manteiga fresca. Ao longo dos anos, ampliamos nosso cardápio para os icônicos <strong className="text-slate-900 font-semibold">Copos da Felicidade</strong> repletos de camadas cremosas, os <strong className="text-slate-900 font-semibold">Morangos Cravejados</strong> e os <strong className="text-slate-900 font-semibold">Brownies fartos</strong> que conquistaram a região.
              </p>
              <p>
                Nossa loja na <strong className="text-slate-900 font-semibold">Avenida Doutor José Maciel, 1053</strong> é um verdadeiro refúgio para quem busca celebrar pequenas vitórias do dia com uma sobremesa memorável.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <p className="font-display font-bold text-slate-900 text-lg">Brigaderia Pedaço do Céu</p>
                <p className="text-xs text-slate-500 font-medium">Doces artesanais produzidos diariamente</p>
              </div>

              <button
                onClick={onContactClick}
                type="button"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Visitar nossa loja física
              </button>
            </div>
          </motion.div>

        </div>

        {/* Os 4 Pilares da Qualidade */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-3">
              Por que nossos doces são únicos
            </h3>
            <p className="text-sm text-slate-500">
              Ingredientes nobres, frutas frescas selecionadas a dedo e processos artesanais sem conservantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-[#FAF7F0] border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Depoimentos de Clientes Reais */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-sky-50/50 border border-sky-100 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-2">
              Quem prova, se apaixona
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Mais de 1.200 clientes avaliaram nossa doceria no Google com nota média de 4.9 estrelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-sky-200 absolute top-4 right-4" />
                <div className="mb-6">
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{testi.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-xs sm:text-sm text-slate-900">{testi.name}</p>
                  <p className="text-[11px] text-sky-600 font-semibold">{testi.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{testi.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
