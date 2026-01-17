
import React from 'react';

const Step: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
  <div className="relative flex flex-col items-center text-center bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-50">
    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">
      {number}
    </div>
    <h4 className="text-2xl font-bold mb-4 text-slate-900">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{text}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50" id="hoe-het-werkt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-slate-900 mb-20">Hoe het werkt</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          <Step 
            number="1"
            title="Voeg student toe"
            text="Importeer je klassenlijst of voeg studenten handmatig toe aan het systeem."
          />
          <Step 
            number="2"
            title="Registreer melding"
            text="Selecteer de student, kies de reden (bijv. 'Te laat') en de datum van het nablijven."
          />
          <Step 
            number="3"
            title="Genereer rapportage"
            text="Download Excel-overzichten of bekijk statistieken voor oudergesprekken of administratie."
          />
        </div>
      </div>
    </section>
  );
};
