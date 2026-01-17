
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[48px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-[0.05] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white opacity-[0.05] rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">Klaar om tijd te besparen?</h2>
          <p className="text-xl lg:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-light">
            Sluit je aan bij honderden docenten die hun administratie al hebben versimpeld.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105">
              Start gratis proefperiode
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Neem contact op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
