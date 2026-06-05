import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header({ currentView, setView, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigateToSection = (sectionId) => {
    setView('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => { setView('home'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo className="h-10 md:h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button 
              onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`hover:text-premium-gold transition-colors duration-200 ${currentView === 'home' ? 'text-premium-gold' : 'text-gray-300'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => navigateToSection('features')} 
              className="hover:text-premium-gold text-gray-300 transition-colors duration-200"
            >
              Características
            </button>
            <button 
              onClick={() => navigateToSection('specs')} 
              className="hover:text-premium-gold text-gray-300 transition-colors duration-200"
            >
              Ficha Técnica
            </button>
            <button 
              onClick={() => navigateToSection('video')} 
              className="hover:text-premium-gold text-gray-300 transition-colors duration-200"
            >
              Video
            </button>
            <button 
              onClick={() => navigateToSection('opinions')} 
              className="hover:text-premium-gold text-gray-300 transition-colors duration-200"
            >
              Opiniones
            </button>
            <button 
              onClick={() => navigateToSection('faq')} 
              className="hover:text-premium-gold text-gray-300 transition-colors duration-200"
            >
              Preguntas
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Direct Buy Button */}
            <button 
              onClick={() => navigateToSection('buy-section')}
              className="hidden sm:inline-flex px-5 py-2.5 bg-premium-gold text-premium-dark font-extrabold text-xs rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              Comprar Ahora
            </button>

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
              onClick={() => { setView('home'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5"
            >
              Inicio
            </button>
            <button 
              onClick={() => navigateToSection('features')} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5 text-left"
            >
              Características
            </button>
            <button 
              onClick={() => navigateToSection('specs')} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5 text-left"
            >
              Ficha Técnica
            </button>
            <button 
              onClick={() => navigateToSection('video')} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5 text-left"
            >
              Video
            </button>
            <button 
              onClick={() => navigateToSection('opinions')} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5 text-left"
            >
              Opiniones
            </button>
            <button 
              onClick={() => navigateToSection('faq')} 
              className="py-2 text-base font-medium text-gray-200 border-b border-white/5 text-left"
            >
              Preguntas Frecuentes
            </button>
            <button 
              onClick={() => navigateToSection('buy-section')} 
              className="w-full py-3 bg-premium-gold text-premium-dark font-extrabold text-sm rounded-xl hover:bg-white text-center transition-colors"
            >
              Comprar Ahora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
