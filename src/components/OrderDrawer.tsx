import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Store, Truck } from 'lucide-react';
import { Product } from '../data/products';

export interface CartEntry {
  product: Product;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartEntry[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('retirada');
  const [clientName, setClientName] = useState('');
  const [notes, setNotes] = useState('');

  const total = items.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let text = `🍫 *Novo Pedido de Doces - Brigaderia Pedaço do Céu*\n`;
    if (clientName) {
      text += `*Cliente:* ${clientName}\n`;
    }
    text += `*Modalidade:* ${deliveryType === 'retirada' ? 'Retirada na Loja (Av. Dr. José Maciel, 1053)' : 'Entrega no Bairro (Delivery)'}\n\n`;
    text += `*Itens Selecionados:*\n`;

    items.forEach((entry) => {
      const sub = (entry.product.price * entry.quantity).toFixed(2).replace('.', ',');
      text += `• ${entry.quantity}x ${entry.product.name} (R$ ${sub})\n`;
    });

    text += `\n*Total Estimado:* R$ ${total.toFixed(2).replace('.', ',')}\n`;

    if (notes.trim()) {
      text += `*Observações:* ${notes.trim()}\n`;
    }

    text += `\nPor favor, confirmem a disponibilidade dos doces na vitrine e o prazo para retirada ou entrega!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511953639605?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Topo da Gaveta */}
              <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-[#FAF7F0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">
                      Sua Sacola de Doces
                    </h3>
                    <p className="text-xs text-slate-500">
                      {items.length} {items.length === 1 ? 'doce selecionado' : 'doces selecionados'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={onClearCart}
                      type="button"
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Esvaziar sacola"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    type="button"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lista de Itens */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-400 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="font-display font-bold text-slate-800 text-lg mb-1">
                      Sua sacola está vazia
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs mb-6">
                      Que tal adicionar um copo da felicidade, um morango cravejado ou nossos brigadeiros de panela de cobre?
                    </p>
                    <button
                      onClick={onClose}
                      type="button"
                      className="px-5 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold hover:bg-sky-600 transition-colors cursor-pointer"
                    >
                      Explorar Cardápio de Doces
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {items.map((entry) => (
                        <div
                          key={entry.product.id}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80"
                        >
                          <img
                            src={entry.product.image}
                            alt={entry.product.name}
                            className="w-16 h-16 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-800 truncate">
                              {entry.product.name}
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              R$ {entry.product.price.toFixed(2).replace('.', ',')}
                            </p>
                            <span className="text-xs font-bold text-sky-600 block mt-1">
                              Subtotal: R${' '}
                              {(entry.product.price * entry.quantity)
                                .toFixed(2)
                                .replace('.', ',')}
                            </span>
                          </div>

                          {/* Controles de Quantidade */}
                          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shrink-0">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(entry.product.id, entry.quantity - 1)
                              }
                              className="p-1 hover:text-sky-600 transition-colors cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold w-5 text-center text-slate-800">
                              {entry.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(entry.product.id, entry.quantity + 1)
                              }
                              className="p-1 hover:text-sky-600 transition-colors cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Preferências de Retirada / Entrega */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Como prefere receber?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('retirada')}
                          className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            deliveryType === 'retirada'
                              ? 'bg-sky-50 border-sky-500 text-sky-800'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <Store className="w-3.5 h-3.5" />
                          <span>Retirada Loja</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeliveryType('entrega')}
                          className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            deliveryType === 'entrega'
                              ? 'bg-sky-50 border-sky-500 text-sky-800'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <Truck className="w-3.5 h-3.5" />
                          <span>Delivery</span>
                        </button>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Seu Nome (Opcional):
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: Amanda Lima"
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Observações do Pedido:
                        </label>
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Ex: Colocar laço de presente, enviar colheres extras..."
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-sky-500 resize-none"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Rodapé com Total e Botão WhatsApp */}
              {items.length > 0 && (
                <div className="p-5 border-t border-slate-200 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">Total do Pedido</span>
                    <span className="text-2xl font-display font-black text-slate-900">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckoutWhatsApp}
                    type="button"
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Concluir Pedido no WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Ao clicar, o WhatsApp será aberto com o resumo para o telefone <strong>(11) 95363-9605</strong>.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
