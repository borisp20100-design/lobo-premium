import React from 'react';
import { ArrowRight, Sparkles, HelpCircle, ChevronDown, Award, Globe, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Home({ products, setView, setSelectedProductId, onAddToCart }) {
  const [activeFaq, setActiveFaq] = React.useState(null);

  const featuredProducts = products.filter(p => p.tags.includes('Destacado')).slice(0, 3);

  const faqs = [
    {
      q: "¿Los productos son originales y cuentan con garantía?",
      a: "Sí, todos nuestros productos son importados directamente desde los distribuidores oficiales de las marcas en Europa, Asia y Norteamérica. Cada producto cuenta con 12 meses de garantía oficial por cualquier defecto de fábrica."
    },
    {
      q: "¿Cuánto tiempo demora el envío a regiones?",
      a: "El tiempo estimado de entrega para la Región Metropolitana es de 24 a 48 horas hábiles. Para otras regiones de Chile, el envío demora de 3 a 5 días hábiles a través de nuestro operador logístico prioritario."
    },
    {
      q: "¿Cómo realizo una devolución o cambio?",
      a: "Ofrecemos una política de satisfacción garantizada de 14 días. Si el producto no cumple con tus expectativas o deseas cambiarlo, contáctanos a soporte@lobopremium.com y coordinaremos el retiro sin costo para ti."
    },
    {
      q: "¿Cuáles son los métodos de pago disponibles?",
      a: "Aceptamos tarjetas de crédito, débito (Redcompra) y transferencias bancarias a través de nuestra pasarela de pagos segura y encriptada SSL."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Background gradient grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-premium-navy/40 via-premium-dark to-premium-dark z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-premium-gold/10 border border-premium-gold/20 text-premium-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-bounce">
            <Sparkles className="w-3.5 h-3.5" /> Importaciones Exclusivas de Alta Gama
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white max-w-4xl mx-auto">
            Descubre el Estándar de la <span className="bg-gradient-to-r from-premium-gold via-yellow-200 to-white bg-clip-text text-transparent">Ingeniería Premium</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Curaduría de gadgets tecnológicos, accesorios de cuero de grano completo y equipamiento de alto rendimiento directamente a tu puerta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setView('catalog')}
              className="w-full sm:w-auto px-8 py-4 bg-premium-gold text-premium-dark font-extrabold text-sm rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Explorar Catálogo <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Hablar con Soporte
            </a>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-10 text-center border-t border-white/5">
            <div>
              <p className="text-2xl font-black text-white">100%</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Originales</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">24/48h</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Despacho RM</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">1 Años</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Garantía</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Value Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl text-left space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Curaduría Rigurosa</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              No importamos masivamente. Cada artículo de nuestro catálogo pasa por rigurosas pruebas de calidad y durabilidad antes de ser seleccionado para la venta.
            </p>
          </div>
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl text-left space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Envío Directo Seguro</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Trabajamos con aerolíneas aliadas para reducir tiempos de tránsito de aduanas. Tu paquete viaja asegurado ante cualquier eventualidad.
            </p>
          </div>
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl text-left space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Soporte VIP Personalizado</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Atención directa sin bots. Nuestro equipo técnico en Santiago te asesora pre y post-venta para resolver cualquier consulta en minutos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div>
            <h2 className="text-3xl font-black text-white">Colección Destacada</h2>
            <p className="text-sm text-gray-400 mt-1">Los artículos más codiciados por nuestros clientes este mes.</p>
          </div>
          <button 
            onClick={() => setView('catalog')}
            className="text-xs text-premium-gold font-bold uppercase tracking-wider flex items-center gap-1.5 hover:text-white transition-colors self-start sm:self-auto"
          >
            Ver catálogo completo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={(id) => { setSelectedProductId(id); setView('product-detail'); }}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Trust & FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-premium-gold bg-premium-gold/5 border border-premium-gold/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Centro de Dudas
          </div>
          <h2 className="text-3xl font-black text-white">Preguntas Frecuentes</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">Resolvemos tus dudas sobre compras, garantías y envíos prioritarios.</p>
        </div>

        <div className="border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5 bg-premium-lightDark/30">
          {faqs.map((faq, idx) => (
            <div key={idx} className="transition-all duration-200">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-white font-bold text-sm sm:text-base hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === idx ? 'transform rotate-180 text-premium-gold' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed animate-slide-down">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-premium-lightDark border border-white/5 rounded-3xl p-8 md:p-14 relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 bg-gradient-to-r from-premium-navy/20 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-black text-white">Acceso Exclusivo a Preventas</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Suscríbete para recibir notificaciones sobre nuevos cargamentos, ofertas flash y productos exclusivos de edición limitada antes que nadie.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("¡Gracias por suscribirte! Te enviaremos novedades pronto."); }} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2 relative z-10">
            <input 
              type="email" 
              required
              placeholder="Ingresa tu correo electrónico" 
              className="bg-premium-dark border border-white/10 px-5 py-3.5 text-xs text-white rounded-xl outline-none focus:border-premium-gold transition-colors flex-grow"
            />
            <button 
              type="submit"
              className="px-6 py-3.5 bg-white text-premium-dark font-extrabold text-xs rounded-xl hover:bg-premium-gold transition-colors shrink-0"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
