import React from 'react';
import { ShoppingBag, Search, Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Header({ currentView, setView, cartCount, openCart, onSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [localSearch, setLocalSearch] = React.useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearch);
    setView('catalog');
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => { setView('home'); setMobileMenuOpen(false); }}>
            <Logo className="h-9 w-auto" textClass="text-white hover:text-premium-gold transition-colors" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button 
              onClick={() => setView('home')} 
              className={`hover:text-premium-gold transition-colors duration-200 ${currentView === 'home' ? 'text-premium-gold' : 'text-gray-300'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => { setView('catalog'); onSearch(''); setLocalSearch(''); }} 
              className={`hover:text-premium-gold transition-colors duration-200 ${currentView === 'catalog' ? 'text-premium-gold' : 'text-gray-300'}`}
            >
              Catálogo
            </button>
            <a href="#faq" onClick={() => setView('home')} className="hover:text-premium-gold text-gray-300 transition-colors duration-200">
              Preguntas Frecuentes
            </a>
            <a href="#contacto" className="hover:text-premium-gold text-gray-300 transition-colors duration-200">
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-premium-lightDark border border-gray-700 rounded-full px-3 py-1.5 w-64 transition-all duration-300">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    className="bg-transparent text-sm w-full outline-none pr-6 text-white"
                    autoFocus
                  />
                  <button type="submit" className="absolute right-3 text-gray-400 hover:text-white">
                    <Search className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => { setSearchOpen(false); setLocalSearch(''); onSearch(''); }} className="absolute right-8 text-gray-500 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-full hover:bg-white/5 text-gray-300 hover:text-premium-gold transition-colors"
                  aria-label="Buscar"
                >
                  <Search className="w-5.5 h-5.5" />
                </button>
              )}
            </div>

            {/* Cart trigger */}
            <button 
              onClick={openCart}
              className="p-2.5 rounded-full hover:bg-white/5 text-gray-300 hover:text-premium-gold transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingBag className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-premium-gold text-[10px] font-extrabold text-premium-dark ring-2 ring-premium-dark">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full hover:bg-white/5 text-gray-300 hover:text-premium-gold transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-white/10 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col text-left">
            <button 
              onClick={() => { setView('home'); setMobileMenuOpen(false); }} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5"
            >
              Inicio
            </button>
            <button 
              onClick={() => { setView('catalog'); onSearch(''); setMobileMenuOpen(false); }} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5"
            >
              Catálogo Completo
            </button>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5"
            >
              Preguntas Frecuentes
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 text-base font-medium text-gray-200"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
