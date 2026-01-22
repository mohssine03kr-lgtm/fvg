
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...chatHistory.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{text: h.text}] })), { role: 'user', parts: [{text: userMsg}] }],
        config: {
          systemInstruction: 'You are the Elite Concierge for the Friuli-Venezia Giulia Luxury Portal. You are sophisticated, knowledgeable, and provide high-end travel advice. Keep responses elegant and concise.',
        }
      });

      const aiText = response.text || "I apologize, I'm having trouble connecting to the concierge network. Please try again in a moment.";
      setChatHistory(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Our team is working on it." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-6 w-[350px] max-w-[90vw] glass rounded-[32px] overflow-hidden flex flex-col shadow-2xl border-prosecco/30 animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-prosecco/10 px-6 py-4 border-b border-prosecco/20 flex justify-between items-center">
            <div>
              <h3 className="serif text-prosecco text-lg leading-tight">Elite Concierge</h3>
              <p className="text-[10px] tracking-widest text-white/50 uppercase">Your Personal Aide</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
              ✕
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-deep-teal/40">
            {chatHistory.length === 0 && (
              <p className="text-xs text-white/40 italic text-center">How may I assist you with your FVG stay today?</p>
            )}
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  chat.role === 'user' ? 'bg-prosecco text-deep-teal rounded-tr-none' : 'glass text-white/90 rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass px-4 py-2 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-prosecco rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-prosecco rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-prosecco rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-black/20 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-prosecco/50 transition"
            />
            <button 
              onClick={handleSend}
              className="bg-prosecco text-deep-teal w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm hover:scale-105 transition"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* The Liquid Orb Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full liquid-orb flex items-center justify-center group relative cursor-pointer"
      >
        {!isOpen ? (
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-white/80 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold">AI</span>
            </div>
          </div>
        ) : (
          <span className="text-white font-bold">↓</span>
        )}
        
        {/* Hover Label */}
        <div className="absolute right-20 bg-deep-teal/80 px-4 py-1.5 rounded-full border border-prosecco/40 text-[10px] tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition translate-x-4 group-hover:translate-x-0">
          CONCIERGE
        </div>
      </button>
    </div>
  );
};

export default Concierge;
