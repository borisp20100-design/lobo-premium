import React, { useState } from 'react';
import { ArrowRight, Sparkles, HelpCircle, ChevronDown, Award, Shield, Speaker, Play, Star, Sparkle, ShoppingCart, Check, RefreshCw, Eye } from 'lucide-react';
import ProductReviews from '../components/ProductReviews';

export default function Home({ products, setView, onAddToCart, onAddReview }) {
  const product = products[0]; // El producto único: Lobo Air
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Galería de imágenes y variantes del producto único
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants?.colors?.[0]?.name || "Estándar");
  const [selectedSize, setSelectedSize] = useState(product.variants?.sizes?.[0] || "Única");
  const [quantity, setQuantity] = useState(1);
  const [addedNotify, setAddedNotify] = useState(false);

  React.useEffect(() => {
    setSelectedImage(product.images[0]);
  }, [product.images]);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    onAddToCart({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    setAddedNotify(true);
    setTimeout(() => setAddedNotify(false), 2500);
  };

  const faqs = [
    {
      q: "¿Cómo funcionan los altavoces de audio abierto?",
      a: "Nuestras gafas utilizan altavoces direccionales integrados en las patillas que proyectan el sonido directamente a tus oídos. Esto te permite escuchar tu música, podcasts o llamadas con total claridad mientras mantienes la conciencia de lo que sucede a tu alrededor."
    },
    {
      q: "¿Tienen protección solar los lentes?",
      a: "Sí, todos nuestros cristales cuentan con protección total UV400, bloqueando el 100% de los rayos UVA y UVB dañinos. Además, la opción de lentes polarizadas reduce drásticamente el deslumbramiento."
    },
    {
      q: "¿Es compatible con asistentes de voz?",
      a: "Totalmente. Al conectarse por Bluetooth 5.3, puedes activar Siri o Google Assistant manteniendo presionado el panel táctil lateral, permitiéndote dar instrucciones sin sacar tu teléfono."
    },
    {
      q: "¿Qué cobertura de garantía ofrecen?",
      a: "Ofrecemos una garantía premium de 12 meses para cualquier falla de fábrica y soporte técnico personalizado en español. Además, si no estás satisfecho con tu compra, tienes 14 días para realizar una devolución."
    }
  ];

  return (
    <div className="space-y-28 pb-20 text-left">
      
      {/* Hero Showcase (Inspirado en Ray-Ban/Oakley) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Gradients y Grid de Fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-premium-navy/50 via-premium-dark to-premium-dark z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Información Principal */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-premium-gold/15 border border-premium-gold/30 text-premium-gold px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> High-Tech Wearables 2026
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              LOBO AIR<br/>
              <span className="bg-gradient-to-r from-premium-gold via-yellow-200 to-white bg-clip-text text-transparent">Smart Glasses</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
              {product.tagline} Experimenta el sonido de alta definición open-ear y mantente conectado con el asistente de voz integrado. Todo envuelto en un chasis aerodinámico ultra ligero.
            </p>

            {/* Micro-especificaciones del Hero */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-premium-gold border border-white/5">
                  <Speaker className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Audio Open-Ear</p>
                  <p className="text-[10px] text-gray-500">Sonido Direccional</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-premium-gold border border-white/5">
                  <Sparkle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">38g de Peso</p>
                  <p className="text-[10px] text-gray-500">Chasis Ergonómico</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#buy-section" 
                className="w-full sm:w-auto px-8 py-4 bg-premium-gold text-premium-dark font-extrabold text-sm rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-premium-gold/10"
              >
                Comprar Ahora <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                Ver Características
              </a>
            </div>
          </div>

          {/* Columna Derecha: Render 3D / Imagen Principal */}
          <div className="relative flex justify-center items-center">
            {/* Círculo brillante de fondo */}
            <div className="absolute w-72 h-72 bg-premium-gold/5 rounded-full blur-3xl" />
            <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden border border-white/5 bg-premium-lightDark/40 p-4 flex items-center justify-center group">
              <img 
                src={selectedImage} 
                alt="Lobo Air Smart Glasses" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 right-4 bg-black/60 text-white/80 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                Imágenes Reales del Producto
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Características Destacadas */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs text-premium-gold font-black uppercase tracking-widest bg-premium-gold/10 px-3.5 py-1.5 rounded-full border border-premium-gold/20">
            Ingeniería de Precisión
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Tecnología Sin Límites</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">Diseñadas para integrarse en tu estilo de vida activo y mantenerte al frente de la innovación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Speaker className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Audio Open-Ear Coaxial</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Disfruta de un campo acústico tridimensional con una fuga de sonido mínima. Mantente conectado a tu música sin bloquear tus oídos.
            </p>
          </div>
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Lentes Polarizadas UV400</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Material TAC de alta densidad para una claridad visual óptima. Bloquea destellos y protege contra los rayos UV en cualquier condición climática.
            </p>
          </div>
          <div className="bg-premium-lightDark border border-white/5 p-8 rounded-2xl space-y-4 hover:border-premium-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-premium-gold/10 text-premium-gold rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Certificación IPX4</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Resistencia certificada contra salpicaduras de agua y sudor. Ideales para entrenamientos intensos al aire libre o caminatas bajo la lluvia.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demostrativo */}
      <section id="video" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-white flex items-center justify-center gap-2">
            <Play className="w-6 h-6 text-premium-gold fill-current" /> Video Demostrativo
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">Observa las gafas inteligentes Lobo Air en acción y descubre sus capacidades interactivas.</p>
        </div>
        <div className="aspect-video bg-premium-lightDark rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <iframe
            src={product.videoUrl}
            title="Video Demostrativo Lobo Air"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Sección de Compra Directa (Buy Section) */}
      <section id="buy-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Galería Interactiva */}
          <div className="space-y-4">
            <div className="aspect-square bg-premium-lightDark rounded-2xl overflow-hidden border border-white/5 relative flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-300"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-premium-gold text-premium-dark font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  -{discount}% OFF
                </span>
              )}
            </div>
            
            {/* Selector de miniaturas */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden border bg-premium-lightDark transition-all ${
                    selectedImage === img 
                      ? 'border-premium-gold scale-95 shadow-md' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <img src={img} alt={`Vista ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Configuración del pedido */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs bg-premium-gold/10 text-premium-gold border border-premium-gold/20 font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Envío Gratis Prioritario
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {product.name}
              </h2>
              
              <div className="flex items-center gap-2">
                <div className="flex text-premium-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-current ${i < Math.round(product.rating) ? 'text-premium-gold' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-white font-semibold">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviewsCount} opiniones reales)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 py-4 border-y border-white/5">
              <span className="text-3xl font-black text-white">
                ${product.price.toLocaleString('es-CL')}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString('es-CL')}
                </span>
              )}
              <span className="text-xs text-green-500 font-bold ml-2">Listo para despacho prioritario</span>
            </div>

            {/* Variantes */}
            <div className="space-y-6">
              {/* Marco */}
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Color de Montura: <span className="text-white normal-case font-bold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.variants.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === color.name 
                          ? 'border-premium-gold scale-110 shadow-lg' 
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check className="w-4 h-4 text-white drop-shadow-md mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lente */}
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tipo de Cristal: <span className="text-white normal-case font-bold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 text-xs font-bold rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-premium-gold border-premium-gold text-premium-dark'
                          : 'bg-premium-lightDark/50 border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cantidad y botón de compra */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="flex items-center border border-white/10 rounded-xl overflow-hidden h-14 w-full sm:w-auto justify-between sm:justify-start">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-lg"
                >
                  -
                </button>
                <span className="text-sm font-bold text-white px-5 select-none">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-lg"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className={`w-full h-14 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  addedNotify
                    ? 'bg-green-600 text-white shadow-green-950/20'
                    : 'bg-premium-gold text-premium-dark hover:bg-white hover:shadow-lg'
                }`}
              >
                {addedNotify ? (
                  <>
                    <Check className="w-5 h-5" /> ¡Agregado al Carrito!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4.5 h-4.5" /> Añadir al Carrito
                  </>
                )}
              </button>
            </div>

            {/* Assurances */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-premium-lightDark/30 border border-white/5 rounded-xl text-center">
              <div className="space-y-1">
                <Award className="w-4 h-4 text-premium-gold mx-auto" />
                <p className="text-[10px] font-bold text-white">Despacho Fast</p>
                <p className="text-[9px] text-gray-500">24-48h RM</p>
              </div>
              <div className="space-y-1">
                <Shield className="w-4 h-4 text-premium-gold mx-auto" />
                <p className="text-[10px] font-bold text-white">12m Garantía</p>
                <p className="text-[9px] text-gray-500">Fallas de fábrica</p>
              </div>
              <div className="space-y-1">
                <RefreshCw className="w-4 h-4 text-premium-gold mx-auto" />
                <p className="text-[10px] font-bold text-white">Retorno Fácil</p>
                <p className="text-[9px] text-gray-500">14 días de prueba</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ficha Técnica Interactiva */}
      <section id="specs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 justify-center">
          Ficha Técnica Detallada
        </h3>
        <div className="border border-white/5 rounded-2xl overflow-hidden bg-premium-lightDark/20 divide-y divide-white/5 text-xs sm:text-sm">
          {Object.entries(product.specs).map(([key, val]) => (
            <div key={key} className="grid grid-cols-3 p-4">
              <span className="font-semibold text-gray-400 col-span-1">{key}</span>
              <span className="text-white col-span-2">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Opiniones de Clientes */}
      <section id="opinions" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductReviews 
          reviews={product.reviews} 
          onAddReview={(newReview) => onAddReview(product.id, newReview)} 
        />
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
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

    </div>
  );
}
