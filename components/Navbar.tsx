
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'DESTINATIONS', path: '/destinations' },
    { name: 'GASTRONOMY', path: '/gastronomy' },
    { name: 'EVENTS', path: '/events' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-4 rounded-[40px] border border-white/10">
        <Link to="/" className="flex flex-col">
          <span className="serif text-xl font-bold tracking-widest text-prosecco leading-none">FVG</span>
          <span className="text-[10px] tracking-[0.3em] font-light leading-none">LUXURY PORTAL</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] tracking-[0.2em] font-medium transition-colors hover:text-prosecco ${
                location.pathname === link.path ? 'text-prosecco' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-white/10 hover:bg-prosecco hover:text-deep-teal transition-all px-6 py-2 rounded-full text-[11px] tracking-[0.2em] font-semibold border border-white/20">
            MEMBERSHIP
          </button>
        </div>

        {/* Mobile Menu Trigger (Stylized) */}
        <div className="md:hidden">
          <div className="w-6 h-0.5 bg-prosecco mb-1.5"></div>
          <div className="w-4 h-0.5 bg-prosecco ml-auto"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
