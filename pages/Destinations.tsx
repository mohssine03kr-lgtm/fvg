
import React from 'react';

const destinations = [
  {
    title: "Collio Vineyard Retreat",
    location: "Cormòns, Gorizia",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    description: "Nestled among the rolling hills of the Collio wine region, this villa offers private tastings of world-class whites.",
    features: ["Private Cellar", "Infinity Pool", "Heliport"]
  },
  {
    title: "Grand Hotel Duchi d'Aosta",
    location: "Trieste, Italy",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Timeless luxury overlooking the majestic Piazza Unità d'Italia. Historic elegance with modern five-star service.",
    features: ["Michelin Dining", "Sea View", "Historical"]
  },
  {
    title: "Grado Lagoon Spa & Spa",
    location: "Grado, Gorizia",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=800",
    description: "An oasis of wellness on the Sunny Island of Grado. Thalassotherapy and private beach access.",
    features: ["Beach Access", "Thalasso Spa", "Yoga Deck"]
  },
  {
    title: "Dolomites Sky Lodge",
    location: "Sappada, Udine",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&q=80&w=800",
    description: "Modern alpine architecture meet traditional Friulian warmth. The ultimate high-altitude escape.",
    features: ["Ski-in/Ski-out", "Glass Sauna", "Chef Service"]
  }
];

const Destinations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="mb-16">
        <h2 className="serif text-5xl text-prosecco mb-4">Elite Sanctuaries</h2>
        <p className="text-white/60 tracking-widest uppercase text-xs">Handpicked luxury stays across Friuli-Venezia Giulia</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {destinations.map((dest, idx) => (
          <div key={idx} className="group relative rounded-[40px] overflow-hidden glass border border-white/10 h-[500px]">
            <img src={dest.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={dest.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-prosecco text-[10px] tracking-[0.3em] font-semibold">{dest.location}</span>
              <h3 className="serif text-3xl mt-2 mb-4">{dest.title}</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-2">{dest.description}</p>
              <div className="flex gap-4">
                {dest.features.map(f => (
                  <span key={f} className="text-[9px] px-3 py-1 rounded-full border border-white/20 text-white/40 uppercase tracking-widest">{f}</span>
                ))}
              </div>
              <button className="mt-8 bg-prosecco text-deep-teal px-8 py-3 rounded-full text-xs font-bold hover:scale-105 transition">
                BOOK EXPERIENCE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
