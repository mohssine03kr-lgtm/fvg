import React from 'react';
import { Link } from 'react-router-dom';

const LiveSection: React.FC = () => {
  return (
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
  );
};

export default LiveSection;