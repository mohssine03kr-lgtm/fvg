
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D22] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex flex-col mb-6">
              <span className="serif text-3xl font-bold tracking-widest text-prosecco leading-none">FVG</span>
              <span className="text-[12px] tracking-[0.3em] font-light text-white/50">LUXURY PORTAL</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Curating the most exclusive experiences in the heart of Friuli-Venezia Giulia. From the Dolomites to the Adriatic Sea.
            </p>
          </div>

          <div>
            <h4 className="serif text-prosecco text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>Piazza Unità d'Italia, 1, 34121 Trieste</li>
              <li>+39 040 123 4567</li>
              <li>concierge@fvg-luxury.it</li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-prosecco text-xl mb-6">Discover</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/destinations" className="hover:text-prosecco transition">Luxury Stays</Link></li>
              <li><Link to="/gastronomy" className="hover:text-prosecco transition">Gastronomy AI</Link></li>
              <li><Link to="/events" className="hover:text-prosecco transition">FVG Live Events</Link></li>
              <li><Link to="/" className="hover:text-prosecco transition">Exclusive Experiences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-prosecco text-xl mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              {['FB', 'IG', 'YT', 'IN'].map(icon => (
                <div key={icon} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-prosecco hover:text-prosecco transition cursor-pointer text-xs">
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/30 italic">Newsletter subscription for private offers</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] tracking-[0.2em] text-white/30">
          <div className="mb-4 md:mb-0 uppercase">© 2025 FRIULI-VENEZIA GIULIA LUXURY TRAVEL. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-white cursor-pointer">COOKIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
