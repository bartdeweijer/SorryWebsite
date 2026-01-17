
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-primary font-extrabold text-2xl tracking-tight">SorryDocent™</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-slate-600 font-medium hover:text-primary transition-colors">Functies</a>
            <a href="#hoe-het-werkt" className="text-slate-600 font-medium hover:text-primary transition-colors">Hoe het werkt</a>
            <a href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">Prijzen</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md shadow-primary/20">
              Probeer nu gratis
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-icons-outlined text-3xl">menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
