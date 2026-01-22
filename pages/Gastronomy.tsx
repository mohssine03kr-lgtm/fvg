import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const INGREDIENTS = [
  "Prosciutto di San Daniele", "Montasio Cheese", "Polenta Taragna", 
  "Collio Ribolla Gialla", "Black Winter Truffle", "Asparagus of Tavagnacco", 
  "Friulian Sea Bass", "Gubana", "Sclopit Herbs"
];

const Gastronomy: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleIngredient = (ing: string) => {
    setSelected(prev => prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]);
  };

  const generateRecipe = async () => {
    if (selected.length === 0) return;
    setLoading(true);
    setRecipe(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I have selected these local Friuli-Venezia Giulia ingredients: ${selected.join(", ")}. 
                   Please create an ultra-luxury, Michelin-star recipe that reflects the elegance of Friulian cuisine. 
                   Include a poetic description, technical preparation steps, and a sophisticated local wine pairing (e.g., from Collio or Colli Orientali). 
                   Format with elegant headers.`,
        config: {
            systemInstruction: "You are the Executive Chef of a Michelin 3-star restaurant in Friuli, Italy. Your tone is sophisticated, poetic, and authoritative. Use elegant formatting for your recipes."
        }
      });
      setRecipe(response.text || "The culinary muses are silent. Please try again.");
    } catch (e) {
      console.error(e);
      setRecipe("Our grand kitchen is momentarily closed. Please consult the concierge.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        <div>
          <span className="text-prosecco tracking-[0.4em] text-[10px] uppercase mb-4 block">Haute Cuisine AI</span>
          <h2 className="serif text-6xl md:text-7xl text-white mb-8 leading-tight">Culinary<br/><span className="italic">Alchemy.</span></h2>
          <p className="text-white/50 mb-12 text-sm leading-relaxed max-w-md">
            The flavors of Friuli are ancient and diverse. Select your preferred local ingredients and allow our AI Chef to synthesize a bespoke gourmet experience for your palate.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {INGREDIENTS.map(ing => (
              <button
                key={ing}
                onClick={() => toggleIngredient(ing)}
                className={`text-left px-6 py-4 rounded-2xl text-[10px] tracking-[0.1em] transition-all border ${
                  selected.includes(ing) 
                    ? 'bg-prosecco border-prosecco text-deep-teal font-bold shadow-lg shadow-prosecco/20' 
                    : 'glass border-white/5 text-white/50 hover:border-white/20'
                }`}
              >
                {ing.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            onClick={generateRecipe}
            disabled={loading || selected.length === 0}
            className="group relative bg-prosecco text-deep-teal px-12 py-5 rounded-full font-bold text-xs tracking-[0.3em] overflow-hidden transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100"
          >
            <span className="relative z-10">{loading ? 'CURATING MASTERPIECE...' : 'REVEAL THE RECIPE'}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        <div className="glass rounded-[48px] p-12 min-h-[600px] border border-white/10 relative overflow-hidden flex flex-col">
          {!recipe && !loading && (
            <div className="flex-grow flex flex-col items-center justify-center text-center px-10">
               <div className="w-24 h-24 mb-8 border border-prosecco/20 rounded-full flex items-center justify-center text-prosecco/30 text-5xl">
                 ✧
               </div>
               <p className="serif text-white/30 text-2xl italic leading-relaxed">The table is set. <br/>Awaiting your choice of ingredients...</p>
            </div>
          )}
          
          {loading && (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border-2 border-prosecco border-t-transparent rounded-full animate-spin mb-8"></div>
              <p className="serif text-prosecco text-2xl animate-pulse tracking-widest">Designing the Experience...</p>
            </div>
          )}
          
          {recipe && (
            <div className="animate-in fade-in slide-in-from-bottom-10 flex-grow prose prose-invert max-w-none">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-grow bg-prosecco/20"></div>
                  <span className="serif text-prosecco text-sm italic">Bespoke Creation</span>
                  <div className="h-px flex-grow bg-prosecco/20"></div>
               </div>
              <div className="whitespace-pre-wrap text-[13px] text-white/80 leading-loose font-light tracking-wide">
                {recipe}
              </div>
            </div>
          )}
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-1/4 -right-1/4 w-[70%] h-[70%] bg-prosecco/5 blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[70%] h-[70%] bg-white/5 blur-[120px] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default Gastronomy;