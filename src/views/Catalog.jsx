import React from 'react';
import { SlidersHorizontal, ArrowUpDown, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Catalog({ products, searchQuery, setSearchQuery, setView, setSelectedProductId, onAddToCart }) {
  const [activeTag, setActiveTag] = React.useState('Todos');
  const [sortBy, setSortBy] = React.useState('default');

  const tags = ['Todos', 'Destacado', 'Best Seller', 'Nuevo'];

  // Filter products by Tag and Search Query
  const filteredProducts = products.filter(product => {
    const matchesTag = activeTag === 'Todos' || product.tags.includes(activeTag);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default
  });

  const clearFilters = () => {
    setActiveTag('Todos');
    setSortBy('default');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      {/* Page Title & Stats */}
      <div className="border-b border-white/5 pb-6">
        <h1 className="text-3xl font-black text-white">Catálogo Premium</h1>
        <p className="text-sm text-gray-400 mt-1">
          {searchQuery ? (
            <span>Resultados de búsqueda para "{searchQuery}" ({filteredProducts.length} encontrados)</span>
          ) : (
            <span>Explora nuestra exclusiva colección de importaciones ({filteredProducts.length} productos)</span>
          )}
        </p>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-premium-lightDark/30 border border-white/5 p-4 rounded-xl">
        {/* Category Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                activeTag === tag
                  ? 'bg-premium-gold border-premium-gold text-premium-dark'
                  : 'bg-premium-lightDark border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sorting and Clear Actions */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Clear Filters Button (conditional) */}
          {(activeTag !== 'Todos' || sortBy !== 'default' || searchQuery) && (
            <button 
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Limpiar filtros
            </button>
          )}

          <div className="relative flex items-center bg-premium-lightDark border border-white/5 rounded-xl px-3 py-2">
            <ArrowUpDown className="w-4 h-4 text-gray-500 mr-2" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs text-white outline-none cursor-pointer pr-4 font-semibold"
            >
              <option value="default" className="bg-premium-dark">Ordenar por</option>
              <option value="price-asc" className="bg-premium-dark">Precio: Menor a Mayor</option>
              <option value="price-desc" className="bg-premium-dark">Precio: Mayor a Menor</option>
              <option value="rating" className="bg-premium-dark">Calificación</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Products */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-20 bg-premium-lightDark/10 border border-white/5 rounded-2xl">
          <SlidersHorizontal className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="font-bold text-white text-base">No se encontraron productos</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            Prueba ajustando tus términos de búsqueda o cambiando los filtros seleccionados.
          </p>
          <button 
            onClick={clearFilters}
            className="mt-6 px-6 py-2.5 bg-premium-gold text-premium-dark font-extrabold text-xs rounded-full hover:bg-white transition-colors"
          >
            Limpiar Todos los Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(id) => { setSelectedProductId(id); setView('product-detail'); }}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
