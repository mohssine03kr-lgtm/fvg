
import React from 'react';

const events = [
  {
    date: "OCT 12, 2025",
    title: "Barcolana 57",
    location: "Gulf of Trieste",
    status: "COMING SOON",
    image: "https://images.unsplash.com/photo-1544641974-9b8849673981?auto=format&fit=crop&q=80&w=800",
    description: "The world's largest sailing regatta returns to the heart of the Adriatic. Join 2,000 boats for a historic spectacle."
  },
  {
    date: "JAN 15, 2026",
    title: "Science+Fiction Festival",
    location: "Politeama Rossetti, Trieste",
    status: "OPEN REGISTRATION",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
    description: "Celebrating the intersection of cinema and future technology. FVG's premiere sci-fi event."
  },
  {
    date: "JUN 04, 2026",
    title: "Collio Wine & Jazz",
    location: "Vigneti d'Autore, Cormòns",
    status: "TICKET SALES OPEN",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800",
    description: "An evening of smooth jazz and world-renowned white wines under the stars of the FVG countryside."
  }
];

const LiveEvents: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="serif text-7xl text-white mb-2">FVG LIVE</h2>
          <p className="text-prosecco tracking-[0.3em] uppercase text-xs font-semibold">Pulse of the Region • Real-time Updates</p>
        </div>
        <div className="flex gap-4">
           <div className="glass px-6 py-2 rounded-full flex items-center gap-3">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
             <span className="text-[10px] tracking-widest text-white/50">LIVE NOW: TRIESTE HARBOR FEED</span>
           </div>
        </div>
      </div>

      <div className="space-y-8">
        {events.map((event, idx) => (
          <div key={idx} className="glass rounded-[40px] overflow-hidden flex flex-col md:flex-row h-auto md:h-80 group border border-white/10 hover:border-prosecco/40 transition-all duration-500">
            <div className="w-full md:w-1/3 overflow-hidden">
               <img src={event.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={event.title} />
            </div>
            <div className="flex-grow p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                   <span className="text-prosecco text-xs tracking-widest font-bold">{event.date}</span>
                   <span className="text-[8px] tracking-[0.2em] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/40 uppercase">{event.status}</span>
                </div>
                <h3 className="serif text-4xl mb-4 text-white/90">{event.title}</h3>
                <p className="text-sm text-white/50 max-w-2xl leading-relaxed">{event.description}</p>
                <div className="mt-4 flex items-center gap-2 text-white/40 text-[10px] tracking-widest">
                   <span>📍</span> {event.location.toUpperCase()}
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="bg-prosecco text-deep-teal px-8 py-2 rounded-full text-xs font-bold hover:brightness-110 transition">RESERVE SEAT</button>
                <button className="border border-white/20 text-white/60 px-8 py-2 rounded-full text-xs hover:border-prosecco hover:text-prosecco transition">DETAILS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
