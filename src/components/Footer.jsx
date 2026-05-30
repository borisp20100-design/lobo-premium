import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Truck, RefreshCw, CreditCard } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ setView }) {
  return (
    <footer className="bg-premium-dark border-t border-white/10 text-gray-400 text-sm">
      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full text-premium-gold">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Envío Premium Garantizado</h4>
              <p className="text-xs text-gray-500">Importación rápida y rastreada 100%.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full text-premium-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Garantía Lobo Asegurada</h4>
              <p className="text-xs text-gray-500">12 meses de garantía oficial en fallas.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full text-premium-gold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Devolución en 14 Días</h4>
              <p className="text-xs text-gray-500">Satisfacción garantizada o reembolso.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-white/5 rounded-full text-premium-gold">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Pago Seguro Simulado</h4>
              <p className="text-xs text-gray-500">Protección SSL de última generación.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center">
              <Logo className="h-7 w-auto" textClass="text-white" />
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Somos importadores directos de productos premium exclusivos. Seleccionamos cuidadosamente cada gadget y accesorio para ofrecerte la más alta calidad y un rendimiento incomparable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h3 className="font-bold text-white text-base">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setView('home')} className="hover:text-premium-gold transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => setView('catalog')} className="hover:text-premium-gold transition-colors">
                  Catálogo de Productos
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-premium-gold transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <button onClick={() => setView('admin')} className="hover:text-premium-gold text-xs text-gray-600 transition-colors mt-2 block border-t border-white/5 pt-2">
                  🔒 Panel Administrador
                </button>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4 text-left">
            <h3 className="font-bold text-white text-base">Políticas y Confianza</h3>
            <ul className="space-y-2">
              <li>
                <a href="#devoluciones" className="hover:text-premium-gold transition-colors">
                  Políticas de Devolución
                </a>
              </li>
              <li>
                <a href="#privacidad" className="hover:text-premium-gold transition-colors">
                  Términos e Importación
                </a>
              </li>
              <li>
                <a href="#garantia" className="hover:text-premium-gold transition-colors">
                  Políticas de Garantía
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div id="contacto" className="space-y-4 text-left">
            <h3 className="font-bold text-white text-base">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-4.5 h-4.5 text-premium-gold shrink-0" />
                <span className="text-xs">Av. Apoquindo 4500, Las Condes, Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4.5 h-4.5 text-premium-gold shrink-0" />
                <span className="text-xs">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4.5 h-4.5 text-premium-gold shrink-0" />
                <span className="text-xs">soporte@lobopremium.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-premium-lightDark/50 py-6 text-center text-xs text-gray-600 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Lobo Premium. Todos los derechos reservados. Diseñado para un rendimiento excepcional.</p>
      </div>
    </footer>
  );
}
