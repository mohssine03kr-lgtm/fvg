
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-4 gap-6 min-h-[100vh]">
        
        {/* 2x2 Hero Tile - Piazza Unità */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-[32px] overflow-hidden glass border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1549421263-524687bc129c?auto=format&fit=crop&q=80&w=1200" 
            alt="Piazza Unità d'Italia"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass px-6 py-4 rounded-3xl border border-white/20 flex items-center gap-4">
              <input 
                type="text" 
                placeholder="Search for Exclusive Experiences..." 
                className="bg-transparent text-sm w-full outline-none placeholder:text-white/50"
              />
              <div className="w-10 h-10 bg-prosecco rounded-full flex items-center justify-center text-deep-teal cursor-pointer hover:rotate-90 transition">
                <span className="text-lg">⚲</span>
              </div>
            </div>
            <h1 className="serif text-5xl mt-6">Trieste</h1>
            <p className="text-sm tracking-widest text-prosecco mt-2 uppercase">The Gateway to Central Europe</p>
          </div>
        </div>

        {/* Interactive Map Tile */}
        <div className="md:col-span-2 md:row-span-2 glass rounded-[32px] p-8 border border-white/10 flex flex-col justify-between relative group overflow-hidden">
          <div className="z-10">
            <h3 className="serif text-3xl mb-4">INTERACTIVE MAP</h3>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              The immersive map of the Friuli-Venezia Giulia region and its highlighted luxury key points.
            </p>
            <button className="mt-8 bg-transparent border border-prosecco px-6 py-2 rounded-full text-[10px] tracking-widest text-prosecco hover:bg-prosecco hover:text-deep-teal transition">
              EXPLORE FVG REGION
            </button>
          </div>
          
          {/* Abstract SVG Map Representation */}
          <div className="absolute bottom-4 right-4 w-64 h-64 opacity-60 pointer-events-none transition-transform group-hover:scale-110">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-prosecco fill-none">
               <path d="M40,160 Q60,140 100,150 T160,130 Q180,110 170,70 T130,40 Q90,20 50,50 T40,100 Z" strokeWidth="0.5" strokeDasharray="5,2" />
               <circle cx="100" cy="150" r="3" fill="#D4AF37" className="animate-pulse" />
               <circle cx="160" cy="130" r="3" fill="#D4AF37" className="animate-pulse [animation-delay:1s]" />
               <circle cx="50" cy="50" r="3" fill="#D4AF37" className="animate-pulse [animation-delay:0.5s]" />
               <path d="M100,150 L160,130 M160,130 L130,40 M130,40 L50,50" strokeWidth="0.2" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* FVG Live Tile */}
        <div className="md:col-span-1 md:row-span-1 glass rounded-[32px] p-6 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-widest text-white/50 uppercase">FVG LIVE</span>
            <div className="waveform mt-4">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="waveform-bar" 
                  style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 30 + 10}px` }}
                ></div>
              ))}
            </div>
          </div>
          <Link to="/events" className="text-prosecco text-xs flex items-center gap-2 hover:gap-4 transition-all">
            WATCH LIVE UPDATES <span>→</span>
          </Link>
        </div>

        {/* Luxury Stays Tile */}
        <div className="md:col-span-1 md:row-span-1 glass rounded-[32px] p-6 border border-white/10 flex flex-col justify-between group cursor-pointer hover:border-prosecco/30 transition">
          <div>
            <h4 className="serif text-xl">LUXURY STAYS:</h4>
            <p className="text-sm text-white/50 mt-2">Collio Vineyard Retreats.</p>
            <p className="text-xs text-prosecco mt-1 italic">Book your private escape.</p>
          </div>
          <Link to="/destinations" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-prosecco">VIEW ALL STAYS</Link>
        </div>

        {/* Luxury Shopping Tile */}
        <div className="md:col-span-1 md:row-span-2 relative rounded-[32px] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1548036659-3545976f5fdf?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div>
              <h4 className="serif text-2xl">LUXURY SHOPPING</h4>
              <p className="text-sm text-white/80 mt-2">Via San Nicolò Boutiques.</p>
            </div>
            <button className="bg-prosecco text-deep-teal text-[10px] tracking-widest font-bold px-6 py-2 rounded-full w-fit hover:scale-105 transition">
              EXPLORE BRANDS
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md p-4 flex gap-4 overflow-hidden whitespace-nowrap text-[8px] tracking-[0.2em]">
             {['GUCCI', 'PRADA', 'ARMANI', 'VERSACE', 'FENDI'].map(b => <span key={b}>{b}</span>)}
          </div>
        </div>

        {/* Vineyard Image Tile */}
        <div className="md:col-span-1 md:row-span-1 rounded-[32px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
        </div>

        {/* Gastronomy Tile */}
        <div className="md:col-span-2 md:row-span-1 glass rounded-[32px] p-6 flex gap-6 items-center border border-white/10 group cursor-pointer overflow-hidden">
           <div className="w-32 h-full rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
           </div>
           <div>
              <h4 className="serif text-2xl">GASTRONOMY:</h4>
              <p className="text-sm text-white/50 mt-1">Culinary Masterpieces.</p>
              <Link to="/gastronomy" className="inline-block mt-3 text-prosecco text-xs hover:underline decoration-prosecco underline-offset-4">Explore the taste of FVG →</Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
