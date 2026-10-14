import React from 'react';
import { Sparkles, Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Apresentação da Marca */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  Pedaço do Céu
                </span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-400 block">
                  Brigaderia & Confeitaria Gourmet
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tradição em brigadeiros artesanais de panela de cobre, copos da felicidade montados em camadas fartas, morangos gigantes cravejados e brownies chocolatudos. O pedaço mais doce do seu dia.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>Feito à mão com chocolate nobre belga</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-sky-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-sky-400 transition-colors">
                  Cardápio de Doces & Copos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-sky-400 transition-colors">
                  Nossa História & Segredos
                </a>
              </li>
              <li>
                <a href="#encomendas" className="hover:text-sky-400 transition-colors">
                  Encomendas & Presentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-sky-400 transition-colors">
                  Onde Estamos & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Dados de Contato e Localização */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Onde nos encontrar
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Avenida Doutor José Maciel, 1053</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href="https://wa.me/5511953639605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 95363-9605 (WhatsApp)
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p>Terça a Sábado: 10h00 às 20h00</p>
                  <p>Domingos e Feriados: 11h00 às 18h00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Linha de Direitos Autorais e Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Brigaderia Pedaço do Céu. Todos os direitos reservados. Feito com amor para o Brasil.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
