import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Check, Info, ShoppingBag, ArrowRight, Sparkles, X, Heart } from 'lucide-react';
import { Product, CATEGORIES, PRODUCTS } from '../data/products';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
  cartItemsMap: Record<string, number>;
  onOpenCart: () => void;
  onContactClick: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToCart,
  cartItemsMap,
  onOpenCart,
  onContactClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todos' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalItemsInCart = useMemo(() => {
    return Object.values(cartItemsMap).reduce((acc, qty) => acc + qty, 0);
  }, [cartItemsMap]);

  return (
    <section id="produtos" className="py-20 lg:py-32 bg-[#FAF7F0] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Cardápio Digital da Brigaderia</span>
          </div>
          <h2 className="section-title-clamp font-display font-black text-slate-900 mb-4">
            Copos da Felicidade, Morangos Cravejados & Brigadeiros
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Doces artesanais preparados com chocolate nobre belga, morangos frescos e receitas autorais apuradas em panela de cobre. Adicione à sua sacola para entrega rápida ou retirada.
          </p>
        </div>

        {/* Barra de Filtros e Pesquisa */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Categorias */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar copo, morango, brigadeiro, brownie..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                type="button"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 max-w-md mx-auto">
            <p className="text-slate-500 text-sm mb-4">Nenhum doce encontrado com essa busca.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              type="button"
              className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-semibold hover:bg-sky-600 transition-colors"
            >
              Ver todos os doces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const qtyInCart = cartItemsMap[product.id] || 0;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Foto com Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Tag Superior */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-bold tracking-wide">
                        {product.badge}
                      </span>
                    )}

                    {/* Botão de Ver Detalhes */}
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      type="button"
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:text-sky-600 hover:bg-white shadow-sm transition-all"
                      title="Ver receita e ingredientes"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Informações */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                        {product.categoryLabel}
                      </span>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Rodapé do Card com Preço e Ação */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">Preço</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-semibold text-slate-500">R$</span>
                          <span className="text-xl font-display font-extrabold text-slate-900">
                            {product.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block">{product.unit}</span>
                      </div>

                      <button
                        onClick={() => onAddToCart(product)}
                        type="button"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          qtyInCart > 0
                            ? 'bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100'
                            : 'bg-sky-500 text-white hover:bg-sky-600 shadow-md shadow-sky-500/20 active:scale-95'
                        }`}
                      >
                        {qtyInCart > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{qtyInCart} na sacola</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Adicionar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Faixa Inferior de Ação: Sacola de Pedidos */}
        {totalItemsInCart > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky bottom-6 z-30 mt-12 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Você tem {totalItemsInCart} {totalItemsInCart === 1 ? 'doce' : 'doces'} na sua sacola
                </p>
                <p className="text-xs text-slate-400">
                  Pronto para pedir seus brigadeiros, copos da felicidade e morangos?
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCart}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Conferir Sacola de Doces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Modal Informativo do Doce */}
        <AnimatePresence>
          {selectedProductForModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
              >
                <div className="relative aspect-video w-full bg-slate-100">
                  <img
                    src={selectedProductForModal.image}
                    alt={selectedProductForModal.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProductForModal(null)}
                    type="button"
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    {selectedProductForModal.categoryLabel}
                  </span>
                  <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
                    {selectedProductForModal.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {selectedProductForModal.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 mb-6">
                    <p className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
                      Ingredientes Selecionados:
                    </p>
                    <p className="text-xs text-amber-800 leading-normal">
                      {selectedProductForModal.ingredients}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Valor</span>
                      <span className="text-2xl font-display font-black text-slate-900">
                        R$ {selectedProductForModal.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-[11px] text-slate-500 block">{selectedProductForModal.unit}</span>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(selectedProductForModal);
                        setSelectedProductForModal(null);
                      }}
                      type="button"
                      className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all"
                    >
                      Adicionar à Sacola
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
