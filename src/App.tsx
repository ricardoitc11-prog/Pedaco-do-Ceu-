import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { EncomendasCalculator } from './components/EncomendasCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer, CartEntry } from './components/OrderDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mapeamento de quantidades para os cards de produto
  const cartItemsMap = React.useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((item) => {
      map[item.product.id] = item.quantity;
    });
    return map;
  }, [cartItems]);

  const totalCartCount = React.useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const productsElem = document.getElementById('produtos');
    if (productsElem) {
      productsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-900 font-sans selection:bg-sky-500/20 selection:text-sky-900">
      {/* Barra de Navegação */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onContactClick={handleContactClick}
      />

      <main>
        {/* 1. Início (Hero) */}
        <Hero
          onContactClick={handleContactClick}
          onExploreMenu={handleExploreMenu}
        />

        {/* 2. Produtos (Cardápio Digital) */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          cartItemsMap={cartItemsMap}
          onOpenCart={() => setIsCartOpen(true)}
          onContactClick={handleContactClick}
        />

        {/* 3. Sobre (História & Tradição) */}
        <AboutSection onContactClick={handleContactClick} />

        {/* Encomendas Especiais (Simulador) */}
        <EncomendasCalculator onContactClick={handleContactClick} />

        {/* 4. Contato (Localização, Horários & Atendimento) */}
        <ContactSection />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Gaveta da Sacola de Pedidos */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
