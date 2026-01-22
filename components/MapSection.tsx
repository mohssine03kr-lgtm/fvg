import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="md:col-span-2 md:row-span-2 glass rounded-[40px] p-12 border border-white/10 flex flex-col justify-between relative group overflow-hidden bento-card">
      <div className="z-10 relative">
        <span className="text-prosecco/50 text-[10px] tracking-[0.5em] font-bold uppercase block mb-4">Cartographic Art</span>
        <h3 className="serif text-5xl mb-6">Regional Gold</h3>
        <p className="text-sm text-white/40 max-w-xs leading-relaxed tracking-wide">
          Navigate the golden veins of FVG. From the Carnic Alps to the sparkling Grado Lagoon.
        </p>
        <button className="mt-12 group/btn relative overflow-hidden bg-transparent border border-prosecco/30 px-10 py-4 rounded-full text-[11px] tracking-[0.3em] text-prosecco transition-all hover:bg-prosecco hover:text-deep-teal font-bold">
          EXPLORE GEOGRAPHY
        </button>
      </div>
      
      <div className="absolute -bottom-16 -right-16 w-[450px] h-[450px] opacity-30 pointer-events-none transition-all duration-1000 group-hover:scale-105 group-hover:opacity-50 group-hover:rotate-2">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-prosecco fill-none">
           <path d="M30,170 Q50,150 90,160 T170,140 Q190,120 180,60 T120,30 Q80,10 40,40 T30,110 Z" strokeWidth="0.6" strokeDasharray="8,4" />
           <circle cx="100" cy="155" r="5" fill="#D4AF37" className="animate-pulse" />
           <circle cx="165" cy="135" r="5" fill="#D4AF37" className="animate-pulse [animation-delay:0.8s]" />
           <circle cx="50" cy="45" r="5" fill="#D4AF37" className="animate-pulse [animation-delay:1.5s]" />
           <circle cx="120" cy="80" r="5" fill="#D4AF37" className="animate-pulse [animation-delay:2.2s]" />
           <path d="M100,155 L165,135 M165,135 L120,80 M120,80 L50,45" strokeWidth="0.2" strokeDasharray="3,3" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

export default MapSection;