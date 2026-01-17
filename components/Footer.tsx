
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="text-primary font-extrabold text-2xl tracking-tight mb-6 block">SorryDocent™</span>
            <p className="text-slate-500 max-w-sm leading-relaxed text-lg font-light">
              Wij maken administratie in het onderwijs makkelijker, zodat de focus weer kan liggen waar het hoort: bij de leerling.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Product</h5>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Over ons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Functies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prijzen</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Support & Juridisch</h5>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Algemene Voorwaarden</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© 2024 SorryDocent™. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined">facebook</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined">language</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
