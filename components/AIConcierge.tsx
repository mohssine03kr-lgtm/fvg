import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Safe API Key access
  const getApiKey = () => {
    try {
      return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY || '' : '';
    } catch (e) {
      return '';
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = getApiKey();
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...chatHistory.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{text: h.text}] })), 
          { role: 'user', parts: [{text: userMsg}] }
        ],
        config: {
          systemInstruction: `You are the Elite Concierge for the Friuli-Venezia Giulia Luxury Portal. 
          Your persona: Extremely sophisticated, worldly, knowledgeable, discreet, and welcoming. 
          You provide elite recommendations for Michelin-star restaurants, private vineyard tours in Collio, luxury yachts in Trieste, and high-altitude alpine stays in the Dolomites. 
          Keep your language elegant, poetic, and concise. Focus exclusively on the region of FVG, Italy. 
          Use sophisticated typography hints in your responses (like headers or bold text for highlights).`,
        }
      });

      const aiText = response.text || "My sincerest apologies, I am momentarily indisposed. How else may I serve your interests?";
      setChatHistory(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "A technical interruption has occurred. Please allow me a moment to reconnect with the grand library." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-8 w-[450px] max-w-[90vw] glass rounded-[48px] overflow-hidden flex flex-col shadow-[0_40px_120px_rgba(0,0,0,0.6)] border-white/20 animate-in fade-in zoom-in slide-in-from-bottom-12 duration-500 origin-bottom-right backdrop-blur-3xl">
          <div className="bg-white/10 px-10 py-8 border-b border-white/10 flex justify-between items-center backdrop-blur-2xl">
            <div className="flex items-center gap-5">
              <div className="w-3 h-3 bg-prosecco rounded-full animate-pulse shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
              <div>
                <h3 className="serif text-prosecco text-2xl tracking-wide font-bold">Elite Concierge</h3>
                <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mt-1 font-black">Personal Liaison • FVG</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/20 transition-all text-white/40 hover:text-white">
              ✕
            </button>
          </div>
          
          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-10 space-y-8 scrollbar-hide bg-black/20">
            {chatHistory.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                <span className="text-5xl text-prosecco/50">✧</span>
                <p className="text-[15px] italic serif leading-relaxed tracking-wide">Good evening. <br/>How may I assist you with your <br/>Friulian itinerary today?</p>
              </div>
            )}
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[32px] px-7 py-5 text-[14px] leading-relaxed tracking-wide shadow-xl ${
                  chat.role === 'user' 
                    ? 'bg-prosecco text-deep-teal font-bold rounded-tr-none' 
                    : 'glass-dark text-white/80 rounded-tl-none border border-white/10'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-dark px-6 py-4 rounded-[24px] rounded-tl-none flex gap-2 items-center">
                  <div className="w-2 h-2 bg-prosecco rounded-full animate-bounce [animation-duration:0.8s]"></div>
                  <div className="w-2 h-2 bg-prosecco rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.15s]"></div>
                  <div className="w-2 h-2 bg-prosecco rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-black/40 border-t border-white/10 flex gap-4 items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about exclusive sanctuaries..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-prosecco/60 transition-all shadow-inner tracking-wide"
            />
            <button 
              onClick={handleSend}
              className="bg-prosecco text-deep-teal w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
            >
              <span className="text-xl font-black">↑</span>
            </button>
          </div>
        </div>
      )}

      {/* The Liquid Orb Button */}
      <div className="relative group">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-24 h-24 rounded-full liquid-orb flex items-center justify-center z-50 relative cursor-pointer overflow-hidden shadow-2xl transition-all hover:shadow-prosecco/50"
        >
          {!isOpen ? (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-white/90 rounded-full flex items-center justify-center mb-1">
                <span className="text-[10px] font-black tracking-tighter">AI</span>
              </div>
              <span className="text-[8px] font-black tracking-[0.3em] text-white">CONCIERGE</span>
            </div>
          ) : (
            <span className="text-white font-bold text-2xl">✕</span>
          )}
        </button>
        
        {!isOpen && (
          <div className="absolute right-28 top-1/2 -translate-y-1/2 bg-deep-teal/95 backdrop-blur-2xl px-8 py-3 rounded-full border border-prosecco/40 text-[10px] tracking-[0.5em] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none text-prosecco shadow-2xl">
            SUMMON ASSISTANT
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConcierge;