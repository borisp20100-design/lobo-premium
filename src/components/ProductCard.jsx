import React from 'react';
import { Star, Eye, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onAddToCart }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    onAddToCart({
      product,
      color: product.variants?.colors?.[0]?.name || "Estándar",
      size: product.variants?.sizes?.[0] || "Única",
      quantity: 1
    });
  };

  return (
    <div 
      onClick={() => onViewDetails(product.id)}
      className="group bg-premium-lightDark rounded-xl overflow-hidden border border-white/5 hover:border-premium-gold/30 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
    >
      {/* Badge de Descuento */}
      {discount > 0 && (
        <span className="absolute top-3 left-3 z-10 bg-premium-gold text-premium-dark font-extrabold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
          -{discount}% OFF
        </span>
      )}

      {/* Tags */}
      {product.tags && product.tags.map((tag, idx) => (
        <span key={idx} className="absolute top-3 right-3 z-10 bg-white/10 backdrop-blur-md text-white font-semibold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10">
          {tag}
        </span>
      ))}

      {/* Imagen con Zoom Container */}
      <div className="zoom-container aspect-square bg-premium-dark flex items-center justify-center relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="zoom-image w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay hover actions */}
        <div className="absolute inset-0 bg-premium-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); onViewDetails(product.id); }}
            className="p-3 bg-white text-premium-dark rounded-full hover:bg-premium-gold hover:text-premium-dark transition-all duration-200 shadow-lg transform translate-y-4 group-hover:translate-y-0"
            title="Ver detalles"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={handleQuickAdd}
            className="p-3 bg-premium-gold text-premium-dark rounded-full hover:bg-white transition-all duration-200 shadow-lg transform translate-y-4 group-hover:translate-y-0 delay-75"
            title="Añadir rápido"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Información del Producto */}
      <div className="p-5 flex flex-col flex-grow text-left">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-premium-gold">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs text-white font-semibold">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviewsCount})</span>
        </div>

        {/* Título */}
        <h3 className="font-bold text-white text-base group-hover:text-premium-gold transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Subtítulo o tagline */}
        <p className="text-xs text-gray-400 line-clamp-2 mb-4 flex-grow">
          {product.tagline}
        </p>

        {/* Precios */}
        <div className="flex items-baseline gap-2.5">
          <span className="text-lg font-black text-white">
            ${product.price.toLocaleString('es-CL')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              ${product.originalPrice.toLocaleString('es-CL')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
