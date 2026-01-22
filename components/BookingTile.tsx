import React from 'react';

const BookingTile: React.FC = () => {
  return (
    <div className="glass rounded-[40px] p-8 border border-white/10 flex flex-col justify-between h-full bento-card">
      <div>
        <span className="text-prosecco/50 text-[10px] tracking-[0.4em] font-black uppercase mb-4 block">Reservation</span>
        <h3 className="serif text-3xl mb-4">Secure your sanctuary.</h3>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[9px] text-white/40 block mb-1">DATES</span>
            <span className="text-xs font-medium">Oct 12 — Oct 19, 2025</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[9px] text-white/40 block mb-1">GUESTS</span>
            <span className="text-xs font-medium">2 Adults, 1 Child</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-prosecco text-deep-teal py-4 rounded-2xl text-[10px] tracking-[0.2em] font-black hover:brightness-110 transition mt-8 uppercase">
        Check Availability
      </button>
    </div>
  );
};

export default BookingTile;