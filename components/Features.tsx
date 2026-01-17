
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="p-10 rounded-[32px] border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-primary/20 transition-all group">
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
      <span className="material-icons-outlined text-primary text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Slimme functies voor de moderne docent</h2>
          <p className="text-xl text-slate-500 font-light">Ontworpen door en voor onderwijsprofessionals. Geen gedoe meer met papieren lijsten of complexe Excel-sheets.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="calendar_today"
            title="Agenda Overzicht"
            description="Houd een duidelijk overzicht van alle meldingen per dag. Inclusief een handige kalenderweergave die direct toont wie er moet nablijven."
          />
          <FeatureCard 
            icon="bar_chart"
            title="Slimme Statistieken"
            description="Ontdek patronen in leerlinggedrag met geautomatiseerde top-3 lijsten van 'grootverbruikers' en voltooide inzet."
          />
          <FeatureCard 
            icon="add_circle_outline"
            title="Eenvoudig Invoeren"
            description="Voeg razendsnel nieuwe meldingen toe met de intuïtieve interface. Zoek op leerlingnaam of klas en registreer met één klik."
          />
        </div>
      </div>
    </section>
  );
};
