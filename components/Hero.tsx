
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nu live: v0.2.1
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Minder administratie, <br/>
              <span className="text-primary">meer tijd</span> voor onderwijs
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              De ultieme tool voor docenten om aanwezigheid en nablijf-meldingen moeiteloos te registreren, volgen en analyseren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                Probeer nu gratis
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
              <button className="bg-white border-2 border-slate-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Bekijk demo
              </button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://picsum.photos/seed/p1/100/100" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://picsum.photos/seed/p2/100/100" alt="avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://picsum.photos/seed/p3/100/100" alt="avatar" />
              </div>
              <p className="text-sm text-slate-500 font-medium">Door 500+ docenten vertrouwd</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-[32px] p-4 app-card-shadow border border-slate-100 transform lg:rotate-3 transition-transform duration-700 hover:rotate-0">
              <div className="bg-slate-50 rounded-2xl p-6 min-h-[400px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-6 w-32 bg-slate-200 rounded-full"></div>
                  <div className="h-10 w-10 bg-white rounded-full shadow-sm"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-8 h-2 bg-primary/30 rounded-full mb-3"></div>
                    <div className="w-12 h-8 bg-primary/10 rounded-lg"></div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-8 h-2 bg-secondary/30 rounded-full mb-3"></div>
                    <div className="w-12 h-8 bg-secondary/10 rounded-lg"></div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                   <div className="flex items-end gap-2 h-24">
                      <div className="w-4 bg-slate-100 h-12 rounded-t"></div>
                      <div className="w-4 bg-slate-200 h-16 rounded-t"></div>
                      <div className="w-4 bg-primary/20 h-24 rounded-t"></div>
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
};
