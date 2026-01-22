import React from 'react';
import { Link } from 'react-router-dom';

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[240px]">
        
        {/* 2x2 Hero Tile - Piazza Unità */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-[40px] overflow-hidden glass border border-white/10 bento-card">
          <img 
            src="https://images.unsplash.com/photo-1549421263-524687bc129c?auto=format&fit=crop&q=95&w=1400" 
            alt="Piazza Unità d'Italia"
            className="absolute inset-0 w-full h-full object-cover parallax-img brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <div className="glass px-8 py-5 rounded-full border border-white/20 flex items-center gap-5 mb-10 max-w-lg backdrop-blur-2xl transition-all hover:border-prosecco/40 group/search">
              <span className="text-prosecco/60 text-lg">⚲</span>
              <input 
                type="text" 
                placeholder="Inquire about exclusive tours..." 
                className="bg-transparent text-[13px] w-full outline-none placeholder:text-white/30 text-white font-medium tracking-wide"
              />
            </div>
            <div>
              <h1 className="serif text-7xl leading-none mb-3">Trieste</h1>
              <div className="flex items-center gap-6 mt-4">
                <span className="text-[11px] tracking-[0.4em] text-prosecco uppercase font-bold">Imperial Gateway</span>
                <div className="h-px w-24 bg-prosecco/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Interactive Map Tile */}
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
          
          {/* Stylized Golden Map */}
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

        {/* FVG Live Tile */}
        <div className="md:col-span-1 md:row-span-1 glass rounded-[40px] p-10 border border-white/10 flex flex-col justify-between bento-card bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase font-black">PULSE</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-[9px] text-red-500 font-bold">LIVE</span>
            </div>
          </div>
          <div className="flex items-center gap-2 h-14">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i} 
                className="waveform-bar flex-grow" 
                style={{ animationDelay: `${i * 0.06}s`, height: `${Math.random() * 30 + 10}px` }}
              ></div>
            ))}
          </div>
          <Link to="/events" className="text-prosecco text-[11px] tracking-[0.2em] font-black flex items-center gap-3 group/link">
            REAL-TIME <span className="group-hover/link:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        {/* Gastronomy Tile (2-span) */}
        <div className="md:col-span-2 md:row-span-1 glass rounded-[40px] p-6 flex gap-8 items-center border border-white/10 group cursor-pointer overflow-hidden bento-card">
           <div className="w-56 h-full rounded-[30px] overflow-hidden shrink-0 relative">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=85&w=600" className="w-full h-full object-cover parallax-img" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
           </div>
           <div className="pr-10">
              <h4 className="serif text-3xl mb-3 leading-tight">Gastronomy AI</h4>
              <p className="text-[13px] text-white/40 leading-relaxed tracking-wide">Michelin-grade synthesis of regional terroir.</p>
              <Link to="/gastronomy" className="inline-block mt-6 text-prosecco text-[11px] tracking-[0.3em] font-black uppercase border-b border-prosecco/20 pb-1 hover:border-prosecco transition-all">Curate Experience</Link>
           </div>
        </div>

        {/* Luxury Stays Tile */}
        <div className="md:col-span-1 md:row-span-1 glass rounded-[40px] p-10 border border-white/10 flex flex-col justify-between group cursor-pointer bento-card relative overflow-hidden bg-gradient-to-tr from-prosecco/[0.03] to-transparent">
          <div className="z-10 relative">
            <h4 className="serif text-2xl mb-3">ELITE STAYS</h4>
            <p className="text-[11px] text-white/40 leading-relaxed">The vineyards of Collio await your arrival.</p>
          </div>
          <Link to="/destinations" className="z-10 text-[10px] tracking-[0.3em] uppercase font-black text-prosecco mt-auto">DISCOVER</Link>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-prosecco/10 blur-[80px] group-hover:bg-prosecco/30 transition-all duration-700"></div>
        </div>

        {/* Style/Boutique Tile */}
        <div className="md:col-span-1 md:row-span-1 relative rounded-[40px] overflow-hidden group bento-card">
          <img src="https://images.unsplash.com/photo-1548036659-3545976f5fdf?auto=format&fit=crop&q=85&w=800" className="absolute inset-0 w-full h-full object-cover brightness-[0.6] parallax-img" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal to-transparent opacity-80"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            <div>
              <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-1 block">Luxury Goods</span>
              <h4 className="serif text-2xl">BOUTIQUE</h4>
            </div>
            <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] tracking-[0.2em] font-black px-8 py-3 rounded-full w-fit hover:bg-prosecco hover:text-deep-teal transition-all shadow-xl">
              CURATE STYLE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;