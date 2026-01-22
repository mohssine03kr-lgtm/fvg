import React from 'react';
import DashboardGrid from '../components/DashboardGrid.tsx';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
      {/* Introduction Header */}
      <div className="mb-20 flex flex-col items-center text-center mt-8">
        <span className="text-prosecco tracking-[0.6em] text-[11px] uppercase mb-6 animate-pulse font-bold">Refining the Adriatic Experience</span>
        <h2 className="serif text-6xl md:text-8xl mb-6 font-light leading-tight">Italian Elegance,<br/><span className="italic font-normal">Reimagined.</span></h2>
        <div className="w-24 h-px bg-prosecco/30 mb-8"></div>
        <p className="text-white/50 max-w-xl text-sm leading-relaxed tracking-wide">
          A digital gateway to the hidden sanctuaries of Friuli-Venezia Giulia. Where alpine majesty meets the sophisticated pulse of Trieste.
        </p>
      </div>

      <DashboardGrid />
    </div>
  );
};

export default Home;