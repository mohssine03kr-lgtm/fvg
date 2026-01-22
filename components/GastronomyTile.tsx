import React from 'react';
import { Link } from 'react-router-dom';

const GastronomyTile: React.FC = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 glass rounded-[40px] p-6 flex gap-8 items-center border border-white/10 group cursor-pointer overflow-hidden bento-card h-full">
       <div className="w-56 h-full rounded-[30px] overflow-hidden shrink-0 relative">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=85&w=600" className="w-full h-full object-cover parallax-img" alt="Gastronomy" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
       </div>
       <div className="pr-10">
          <h4 className="serif text-3xl mb-3 leading-tight">Gastronomy AI</h4>
          <p className="text-[13px] text-white/40 leading-relaxed tracking-wide">Michelin-grade synthesis of regional terroir.</p>
          <Link to="/gastronomy" className="inline-block mt-6 text-prosecco text-[11px] tracking-[0.3em] font-black uppercase border-b border-prosecco/20 pb-1 hover:border-prosecco transition-all">Curate Experience</Link>
       </div>
    </div>
  );
};

export default GastronomyTile;