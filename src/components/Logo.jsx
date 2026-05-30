import React from 'react';
import logoImg from '../assets/logo-original.png';

export default function Logo({ className = "h-9 w-auto" }) {
  return (
    <div className="flex items-center select-none overflow-hidden">
      <img 
        src={logoImg} 
        alt="Lobo Premium Logo" 
        className={`${className} object-contain`}
        style={{ 
          filter: 'invert(1) brightness(1.2)', 
          mixBlendMode: 'screen' 
        }}
      />
    </div>
  );
}
