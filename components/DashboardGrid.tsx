import React from 'react';
import { Link } from 'react-router-dom';
import MapSection from './MapSection.tsx';
import LiveSection from './LiveSection.tsx';

const DashboardGrid: React.FC = () => {
  return (
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

      <MapSection />

      <LiveSection />

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
  );
};

export default DashboardGrid;