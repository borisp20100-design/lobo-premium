import React from 'react';
import { X, Plus, Minus, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, setView }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150000;
  const missingForFreeShipping = freeShippingThreshold - subtotal;

  const handleCheckout = () => {
    onClose();
    setView('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md transform transition-all duration-500 ease-in-out">
          <div className="h-full flex flex-col bg-premium-lightDark border-l border-white/10 shadow-2xl">
            
            {/* Header */}
            <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Tu Carrito <span className="text-xs bg-premium-gold/20 text-premium-gold font-bold px-2 py-0.5 rounded-full">{cartItems.length}</span>
              </h2>
              <button 
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {cartItems.length > 0 && (
              <div className="bg-premium-dark/50 px-6 py-3 border-b border-white/5 text-xs">
                {missingForFreeShipping > 0 ? (
                  <p className="text-gray-400">
                    Agrega <strong className="text-premium-gold">${missingForFreeShipping.toLocaleString('es-CL')}</strong> más para obtener <strong className="text-white">Envío Premium Gratis</strong>
                  </p>
                ) : (
                  <p className="text-premium-gold font-semibold flex items-center gap-1">
                    🎉 ¡Calificas para Envío Premium Gratis!
                  </p>
                )}
                <div className="w-full bg-premium-dark rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-premium-gold h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex-1 py-4 overflow-y-auto px-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-500 mb-4">
                    <X className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-white text-base">Tu carrito está vacío</h3>
                  <p className="text-xs text-gray-500 max-w-xs mt-1 leading-relaxed">
                    Personaliza tus smart glasses Lobo Air y agrégalas al carrito para iniciar tu compra.
                  </p>
                  <button 
                    onClick={() => { onClose(); setView('home'); }}
                    className="mt-6 px-6 py-2.5 bg-premium-gold text-premium-dark font-bold text-xs rounded-full hover:bg-white transition-all duration-200"
                  >
                    Ver Producto
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-3 bg-premium-dark/30 border border-white/5 rounded-lg">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-premium-dark rounded-md overflow-hidden shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col text-left">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-white text-sm line-clamp-1 pr-2">{item.product.name}</h4>
                        <button 
                          onClick={() => onRemoveItem(idx)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Variants */}
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Var: <span className="text-white">{item.color}</span> / <span className="text-white">{item.size}</span>
                      </p>

                      {/* Controls and Price */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-white/10 rounded-full overflow-hidden">
                          <button 
                            onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                            className="p-1 px-2.5 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs text-white px-2 font-bold select-none">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 px-2.5 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-extrabold text-white text-sm">
                          ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="px-6 py-6 border-t border-white/5 space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">${subtotal.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Envío</span>
                    <span className={subtotal >= freeShippingThreshold ? 'text-premium-gold font-semibold' : 'text-white'}>
                      {subtotal >= freeShippingThreshold ? 'Gratis' : '$9.990'}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3 text-base font-bold text-white">
                    <span>Total Estimado</span>
                    <span className="text-premium-gold">
                      ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 9990)).toLocaleString('es-CL')}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-premium-gold text-premium-dark font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  Proceder al Pago <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust Footer */}
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-premium-gold" />
                  <span>Pago cifrado y procesado de forma 100% segura.</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
