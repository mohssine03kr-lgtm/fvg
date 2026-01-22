
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Gastronomy from './pages/Gastronomy';
import LiveEvents from './pages/LiveEvents';
import Concierge from './components/Concierge';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Decorative Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#004D54]/20 blur-[120px] pointer-events-none z-0"></div>

        <Navbar />
        
        <main className="flex-grow z-10 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gastronomy" element={<Gastronomy />} />
            <Route path="/events" element={<LiveEvents />} />
          </Routes>
        </main>

        <Footer />
        <Concierge />
      </div>
    </HashRouter>
  );
};

export default App;
