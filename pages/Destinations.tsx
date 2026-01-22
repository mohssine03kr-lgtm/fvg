import React from 'react';

const destinations = [
  {
    title: "Collio Vineyard Retreat",
    location: "Cormòns, Gorizia",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=90&w=1200",
    description: "An architectural masterpiece nestled among the rolling hills of the Collio wine region. Experience private vintage vertical tastings under the stars.",
    features: ["Private Cellar", "Infinity Pool", "Heliport", "Chef on Call"]
  },
  {
    title: "Grand Hotel Duchi d'Aosta",
    location: "Trieste, Italy",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=90&w=1200",
    description: "Centuries of history meet modern five-star opulence. Overlooking the most majestic square in Europe, this is the soul of Trieste.",
    features: ["Michelin Dining", "Adriatic Views", "Historical Salon"]
  },
  {
    title: "Grado Lagoon Spa",
    location: "Grado, Gorizia",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=90&w=1200",
    description: "The 'Sunny Island' sanctuary. Holistic thalassotherapy integrated into the ancient Venetian lagoon landscape.",
    features: ["Beach Club", "Thalasso Spa", "Yacht Mooring"]
  },
  {
    title: "Dolomites Sky Lodge",
    location: "Sappada, Udine",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&q=90&w=1200",
    description: "Sustainable luxury in the shadow of the Three Cime. A high-altitude retreat for the discerning adventurer.",
    features: ["Ski-in/Ski-out", "Glass Sauna", "Obsidian Fireplace"]
  }
];

const Destinations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 pt-8">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-16">
        <div className="max-w-2xl">
          <span className="text-prosecco tracking-[0.6em] text-[11px] uppercase mb-4 block font-bold">The Sanctuaries</span>
          <h2 className="serif text-7xl text-white mb-6">Elite Stays.</h2>
          <p className="text-white/50 tracking-wide text-sm leading-relaxed uppercase">Curated hospitality for the world's most discerning travelers.</p>
        </div>
        <div className="flex gap-4">
          <button className="glass px-8 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold text-white/40 hover:text-prosecco hover:border-prosecco/40 transition">Filter: Alps</button>
          <button className="glass px-8 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold text-white/40 hover:text-prosecco hover:border-prosecco/40 transition">Filter: Coast</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {destinations.map((dest, idx) => (
          <div key={idx} className="group relative rounded-[48px] overflow-hidden glass border border-white/10 h-[650px] bento-card">
            <img src={dest.image} className="absolute inset-0 w-full h-full object-cover parallax-img brightness-75 group-hover:brightness-90" alt={dest.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 z-10">
              <span className="text-prosecco text-[11px] tracking-[0.5em] font-black uppercase mb-3 block">{dest.location}</span>
              <h3 className="serif text-5xl mt-2 mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-700">{dest.title}</h3>
              <p className="text-[15px] text-white/60 mb-8 leading-relaxed line-clamp-2 max-w-lg tracking-wide">{dest.description}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                {dest.features.map(f => (
                  <span key={f} className="text-[10px] px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/40 uppercase tracking-[0.2em] font-medium">{f}</span>
                ))}
              </div>
              <button className="bg-prosecco text-deep-teal px-12 py-5 rounded-full text-xs font-black tracking-[0.2em] hover:scale-105 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all flex items-center gap-4">
                REQUEST BOOKING <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;