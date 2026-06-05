import React from 'react';
import { ShieldCheck, ArrowLeft, CreditCard, CheckCircle, Truck, Package, Heart } from 'lucide-react';

export default function Checkout({ cartItems, clearCart, setView }) {
  const [step, setStep] = React.useState('form'); // 'form' | 'processing' | 'success'
  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150000;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 9990;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePay = (e) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate API authorization wait
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 2500);
  };

  if (step === 'processing') {
    return (
      <div className="max-w-md mx-auto px-4 py-32 text-center space-y-6">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-white/5" />
          <div className="absolute inset-0 rounded-full border-4 border-t-premium-gold animate-spin" />
        </div>
        <h2 className="text-xl font-bold text-white">Procesando Pago Seguro...</h2>
        <p className="text-xs text-gray-500 max-w-xs mx-auto">
          Estamos verificando tus datos y autorizando la transacción con tu banco. Por favor no cierres ni recargues la página.
        </p>
      </div>
    );
  }

  if (step === 'success') {
    const orderNumber = `LBO-${Math.floor(100000 + Math.random() * 900000)}`;
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8">
        <div className="w-16 h-16 bg-green-500/10 text-premium-gold rounded-full flex items-center justify-center mx-auto border border-premium-gold/30">
          <CheckCircle className="w-8 h-8 text-premium-gold fill-premium-dark" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-white">¡Gracias por tu compra!</h1>
          <p className="text-sm text-gray-400">
            Tu pedido <strong className="text-white">{orderNumber}</strong> ha sido recibido y está siendo preparado para despacho prioritario.
          </p>
        </div>

        <div className="bg-premium-lightDark border border-white/5 rounded-2xl p-6 text-left space-y-4">
          <h3 className="font-bold text-white text-sm border-b border-white/5 pb-3">Detalle del Despacho</h3>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-gray-500">Destinatario</p>
              <p className="text-white font-semibold mt-0.5">{formData.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Teléfono</p>
              <p className="text-white font-semibold mt-0.5">{formData.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-500">Dirección de Envío</p>
              <p className="text-white font-semibold mt-0.5">{formData.address}, {formData.city}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-premium-gold/10 border border-premium-gold/20 text-premium-gold p-3.5 rounded-xl text-xs">
            <Truck className="w-4 h-4 shrink-0" />
            <span>Te enviaremos el número de seguimiento por correo a <strong>{formData.email}</strong> en cuanto sea entregado a la empresa de transporte.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setView('home')}
            className="w-full sm:w-auto px-8 py-3.5 bg-premium-gold text-premium-dark font-extrabold text-xs rounded-xl hover:bg-white transition-colors"
          >
            Volver a la Página de Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left space-y-8">
      {/* Back Button */}
      <button 
        onClick={() => setView('home')}
        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al producto
      </button>

      <h1 className="text-3xl font-black text-white border-b border-white/5 pb-5">Finalizar Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Shipping & Payment Form */}
        <form onSubmit={handlePay} className="lg:col-span-7 space-y-8">
          
          {/* Shipping Form */}
          <div className="bg-premium-lightDark border border-white/5 rounded-2xl p-6 md:p-8 space-y-5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-premium-gold" /> Datos de Envío
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nombre@correo.com"
                  className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Teléfono de Contacto</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ej. +56 9 1234 5678"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Dirección</label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Calle, número, depto u oficina"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Ciudad / Región</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Ej. Santiago"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form (Simulation) */}
          <div className="bg-premium-lightDark border border-white/5 rounded-2xl p-6 md:p-8 space-y-5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-premium-gold" /> Pasarela de Pago Seguro (Simulada)
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Nombre en la Tarjeta</label>
                <input
                  type="text"
                  required
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="Ej. JUAN PEREZ L"
                  className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Número de Tarjeta</label>
                <input
                  type="text"
                  required
                  maxLength="19"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="4000 1234 5678 9010"
                  className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Vencimiento (MM/AA)</label>
                  <input
                    type="text"
                    required
                    maxLength="5"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="MM/AA"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">CVC / CVV</label>
                  <input
                    type="password"
                    required
                    maxLength="4"
                    name="cardCvv"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    placeholder="•••"
                    className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-premium-dark/50 border border-white/5 p-4 rounded-xl text-xs text-gray-500">
              <ShieldCheck className="w-5 h-5 text-premium-gold shrink-0" />
              <span>Esta es una transacción simulada con fines de prueba y demostración. Ningún cargo real será facturado.</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-premium-gold text-premium-dark font-black py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-white hover:shadow-lg transition-colors"
          >
            Pagar Seguro ${total.toLocaleString('es-CL')}
          </button>
        </form>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 bg-premium-lightDark border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Package className="w-5 h-5 text-premium-gold" /> Resumen de Pedido
          </h2>

          {/* Cart items list preview */}
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex gap-3 text-xs">
                <div className="w-12 h-12 bg-premium-dark rounded-md overflow-hidden shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-left">
                  <h4 className="font-bold text-white line-clamp-1">{item.product.name}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Var: {item.color} / {item.size} • Cant: {item.quantity}</p>
                </div>
                <span className="font-bold text-white shrink-0">${(item.product.price * item.quantity).toLocaleString('es-CL')}</span>
              </div>
            ))}
          </div>

          {/* Calculations */}
          <div className="border-t border-white/5 pt-4 space-y-2.5 text-xs sm:text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span className="text-white font-semibold">${subtotal.toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Envío</span>
              <span className={shipping === 0 ? 'text-premium-gold font-semibold' : 'text-white'}>
                {shipping === 0 ? 'Gratis' : `$${shipping.toLocaleString('es-CL')}`}
              </span>
            </div>
            <div className="flex justify-between border-t border-white/5 pt-4 text-base font-bold text-white">
              <span>Total a Pagar</span>
              <span className="text-premium-gold">${total.toLocaleString('es-CL')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
