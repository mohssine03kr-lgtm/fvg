import React from 'react';
import { Link } from 'react-router-dom';
import MapSection from './MapSection.tsx';
import LiveSection from './LiveSection.tsx';
import BookingTile from './BookingTile.tsx';
import GastronomyTile from './GastronomyTile.tsx';

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

      {/* Gastronomy Tile */}
      <GastronomyTile />

      {/* Booking Tile Tile */}
      <div className="md:col-span-1 md:row-span-2">
        <BookingTile />
      </div>

      {/* Style/Boutique Tile */}
      <div className="md:col-span-1 md:row-span-1 relative rounded-[40px] overflow-hidden group bento-card">
        <img src="https://images.unsplash.com/photo-1548036659-3545976f5fdf?auto=format&fit=crop&q=85&w=800" className="absolute inset-0 w-full h-full object-cover brightness-[0.6] parallax-img" alt="Boutique" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B32] to-transparent opacity-80"></div>
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