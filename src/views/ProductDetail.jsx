import React from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, ShoppingCart, ArrowLeft, Check, Play, FileText } from 'lucide-react';
import ProductReviews from '../components/ProductReviews';

export default function ProductDetail({ product, setView, onAddToCart, onAddReview }) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.variants?.colors?.[0]?.name || "Estándar");
  const [selectedSize, setSelectedSize] = React.useState(product.variants?.sizes?.[0] || "Única");
  const [quantity, setQuantity] = React.useState(1);
  const [addedNotify, setAddedNotify] = React.useState(false);
  const [zoomStyle, setZoomStyle] = React.useState({ display: 'none' });

  // Reset states when product changes
  React.useEffect(() => {
    setSelectedImage(product.images[0]);
    setSelectedColor(product.variants?.colors?.[0]?.name || "Estándar");
    setSelectedSize(product.variants?.sizes?.[0] || "Única");
    setQuantity(1);
  }, [product]);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    onAddToCart({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    setAddedNotify(true);
    setTimeout(() => setAddedNotify(false), 2000);
  };

  // Image Magnifier / Hover Zoom effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-left">
      {/* Back Button */}
      <button 
        onClick={() => setView('catalog')}
        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al catálogo
      </button>

      {/* Main product presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image Gallery with Magnifier */}
        <div className="space-y-4">
          <div 
            className="aspect-square bg-premium-lightDark rounded-2xl overflow-hidden border border-white/5 relative cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Display default image */}
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />

            {/* Magnifier glass overlay */}
            <div 
              className="absolute inset-0 pointer-events-none hidden md:block border border-white/10 rounded-2xl"
              style={zoomStyle}
            />

            {/* Price discount label */}
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-premium-gold text-premium-dark font-extrabold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails grid */}
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

        {/* Right Column: Order Configuration */}
        <div className="space-y-8 flex flex-col justify-center">
          {/* Header titles */}
          <div className="space-y-3">
            <span className="text-xs bg-premium-gold/10 text-premium-gold border border-premium-gold/20 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.tags?.[0] || 'Importación Exclusiva'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {product.name}
            </h1>
            
            {/* Reviews summary */}
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
              <span className="text-xs text-gray-500">({product.reviewsCount} opiniones de compradores)</span>
            </div>
          </div>

          {/* Price display */}
          <div className="flex items-baseline gap-4 py-4 border-y border-white/5">
            <span className="text-3xl font-black text-white">
              ${product.price.toLocaleString('es-CL')}
            </span>
            {product.originalPrice && (
              <span className="text-base text-gray-500 line-through">
                ${product.originalPrice.toLocaleString('es-CL')}
              </span>
            )}
            <span className="text-xs text-green-500 font-bold ml-2">En Stock (Listo para despacho)</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {product.description}
          </p>

          {/* Variants selectors */}
          <div className="space-y-6">
            {/* Colors */}
            {product.variants?.colors && (
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Color: <span className="text-white normal-case font-bold">{selectedColor}</span>
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
            )}

            {/* Sizes / Options */}
            {product.variants?.sizes && (
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Especificación: <span className="text-white normal-case font-bold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
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
            )}
          </div>

          {/* Quantity Selector & Add CTA */}
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

          {/* Trust assurances block */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-premium-lightDark/30 border border-white/5 rounded-xl text-center">
            <div className="space-y-1">
              <Truck className="w-4 h-4 text-premium-gold mx-auto" />
              <p className="text-[10px] font-bold text-white">Despacho Fast</p>
              <p className="text-[9px] text-gray-500">24-48h RM</p>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-4 h-4 text-premium-gold mx-auto" />
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

      {/* Tabs / Specifications & Demo Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-white/5">
        {/* Specs Table */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-premium-gold" /> Ficha Técnica
          </h3>
          <div className="border border-white/5 rounded-2xl overflow-hidden bg-premium-lightDark/20 divide-y divide-white/5 text-xs sm:text-sm">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="grid grid-cols-3 p-4">
                <span className="font-semibold text-gray-400 col-span-1">{key}</span>
                <span className="text-white col-span-2">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Embed */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-premium-gold" /> Video Demostrativo
          </h3>
          <div className="aspect-video bg-premium-lightDark rounded-2xl border border-white/5 overflow-hidden relative group">
            {product.videoUrl ? (
              <iframe
                src={product.videoUrl}
                title={`Video demostrativo de ${product.name}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <span>Video demostrativo no disponible</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Block */}
      <ProductReviews 
        reviews={product.reviews} 
        onAddReview={(newReview) => onAddReview(product.id, newReview)} 
      />
    </div>
  );
}
