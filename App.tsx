
import React, { useState, useEffect } from 'react';

// --- Dynamische Merknaam Component ---
const BrandName: React.FC<{ className?: string }> = ({ className }) => {
  const names = ["SorryApp™", "SorryJuf™", "SorryMeester™", "SorryDocent™"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const isMainBrand = names[index] === "SorryApp™";
    const timeoutDuration = isMainBrand ? 3000 : 1500;

    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % names.length);
        setFade(true);
      }, 300); // Duur van de fade-out
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <span className={`${className} transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {names[index]}
    </span>
  );
};

// --- Sub-componenten ---

const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center">
          <BrandName className="text-[#36827F] font-extrabold text-2xl tracking-tight" />
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-slate-600 font-medium hover:text-[#36827F] transition-colors">Functies</a>
          <a href="#hoe-het-werkt" className="text-slate-600 font-medium hover:text-[#36827F] transition-colors">Hoe het werkt</a>
          <button className="bg-[#36827F] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md shadow-[#36827F]/20">
            Probeer nu gratis
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36827F]/10 text-[#36827F] text-xs font-bold border border-[#36827F]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36827F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#36827F]"></span>
            </span>
            Nu live: v0.2.1
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Minder administratie, <br/>
            <span className="text-[#36827F]">meer tijd</span> voor onderwijs
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
            De ultieme tool voor docenten om aanwezigheid en nablijf-meldingen moeiteloos te registreren, volgen en analyseren via <BrandName className="font-bold text-[#36827F]" />.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#36827F] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#36827F]/30 flex items-center justify-center gap-2">
              Start nu gratis
              <span className="material-icons-outlined">arrow_forward</span>
            </button>
            <button className="bg-white border-2 border-slate-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Bekijk demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#36827F]/5 rounded-full blur-3xl"></div>
          <div className="relative bg-white rounded-[32px] p-4 shadow-[0_20px_50px_rgba(54,130,127,0.12)] border border-slate-100 transform lg:rotate-3 transition-transform duration-500 hover:rotate-0">
            <div className="bg-slate-50 rounded-2xl p-6 min-h-[400px]">
              <div className="flex items-center justify-between mb-8">
                <div className="h-6 w-32 bg-slate-200 rounded-full"></div>
                <div className="h-10 w-10 bg-white rounded-full shadow-sm"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-8 h-2 bg-[#36827F]/30 rounded-full mb-3"></div>
                  <div className="w-12 h-8 bg-[#36827F]/10 rounded-lg"></div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-8 h-2 bg-[#F97066]/30 rounded-full mb-3"></div>
                  <div className="w-12 h-8 bg-[#F97066]/10 rounded-lg"></div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                 <div className="flex items-end gap-2 h-24">
                    <div className="w-4 bg-slate-100 h-12 rounded-t"></div>
                    <div className="w-4 bg-slate-200 h-16 rounded-t"></div>
                    <div className="w-4 bg-[#36827F]/20 h-24 rounded-t"></div>
                    <div className="w-4 bg-slate-100 h-8 rounded-t"></div>
                 </div>
                 <div className="mt-4 w-40 h-2 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-24 bg-white" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-20">Slimme functies</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: 'calendar_today', title: 'Agenda Overzicht', text: 'Houd een duidelijk overzicht van alle meldingen per dag.' },
          { icon: 'bar_chart', title: 'Slimme Statistieken', text: 'Ontdek patronen in leerlinggedrag met geautomatiseerde data.' },
          { icon: 'add_circle_outline', title: 'Eenvoudig Invoeren', text: 'Voeg razendsnel nieuwe meldingen toe met één klik.' }
        ].map((f, i) => (
          <div key={i} className="p-10 rounded-[32px] bg-slate-50/50 border border-slate-50 hover:bg-white hover:shadow-xl transition-all group">
            <span className="material-icons-outlined text-[#36827F] text-4xl mb-6 block group-hover:scale-110 transition-transform">{f.icon}</span>
            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <BrandName className="text-[#36827F] font-extrabold text-xl" />
      <p className="mt-4 text-slate-400 text-sm">© 2024 Alle rechten voorbehouden.</p>
    </div>
  </footer>
);

// --- Main App Page ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-[#36827F]/10 selection:text-[#36827F]">
      <Navbar />
      <Hero />
      <Features />
      <section className="py-24 bg-[#36827F]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">Klaar om te beginnen met <BrandName />?</h2>
          <button className="bg-white text-[#36827F] px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:scale-105 transition-transform active:scale-95">
            Start nu gratis
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
