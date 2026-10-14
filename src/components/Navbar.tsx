import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Clock, MapPin, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio de Doces', href: '#produtos' },
    { label: 'Nossa História', href: '#sobre' },
    { label: 'Encomendas & Presentes', href: '#encomendas' },
    { label: 'Onde Estamos', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Barra superior de aviso de produção fresca */}
      <div className="bg-[#0284C7] text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-ping" />
            <span className="font-semibold tracking-wide">Produção do Dia:</span>
            <span className="hidden sm:inline">Copos da felicidade montados na hora, morangos cravejados e brigadeiros frescos</span>
            <span className="sm:hidden">Doces gourmet frescos todos os dias!</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium shrink-0">
            <a 
              href="tel:11953639605" 
              className="flex items-center gap-1 hover:text-sky-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(11) 95363-9605</span>
            </a>
            <span className="hidden md:flex items-center gap-1 opacity-90">
              <MapPin className="w-3.5 h-3.5" />
              <span>Av. Dr. José Maciel, 1053</span>
            </span>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200/80 py-3' 
            : 'bg-white/80 backdrop-blur-sm border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Marca */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                Pedaço do Céu
              </span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-600 block">
                Brigaderia & Confeitaria Gourmet
              </span>
            </div>
          </a>

          {/* Links para Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Ações: Sacola de Pedidos & CTA Principal */}
          <div className="flex items-center gap-3">
            {/* Botão da Sacola */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors border border-slate-200/80 cursor-pointer"
              aria-label="Ver sacola de doces"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-sky-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA Principal: "Entrar em contato" */}
            <button
              onClick={onContactClick}
              type="button"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Entrar em contato</span>
            </button>

            {/* Menu Hambúrguer Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Gaveta Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  type="button"
                  className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-center text-sm shadow-md shadow-sky-500/20"
                >
                  Entrar em contato
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Aberto de Terça a Domingo • Doces artesanais frescos</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
