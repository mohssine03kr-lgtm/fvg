import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
          systemInstruction: `You are the Elite Concierge for the Friuli-Venezia Giulia Luxury Portal. Keep your language elegant, poetic, and concise. Focus exclusively on the region of FVG, Italy.`,
        }
      });

      const aiText = response.text || "My sincerest apologies, I am momentarily indisposed.";
      setChatHistory(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "A technical interruption has occurred." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      {/* Redundant concierge logic - App uses AIConcierge instead */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-prosecco shadow-xl flex items-center justify-center text-deep-teal font-bold"
      >
        {isOpen ? '✕' : 'AI'}
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 glass rounded-2xl p-4 flex flex-col">
          <div ref={scrollRef} className="flex-grow overflow-y-auto space-y-2 mb-4">
             {chatHistory.map((c, i) => (
               <div key={i} className={`p-2 rounded ${c.role === 'user' ? 'bg-prosecco/20 text-right' : 'bg-white/5'}`}>{c.text}</div>
             ))}
          </div>
          <div className="flex gap-2">
            <input className="bg-white/5 flex-grow p-2 rounded" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} />
            <button onClick={handleSend} className="bg-prosecco px-3 rounded text-deep-teal">→</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concierge;