
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const INGREDIENTS = [
  "Prosciutto di San Daniele", "Montasio Cheese", "Polenta", "Collio White Wine",
  "Truffles", "Asparagus of Tavagnacco", "Wild Game", "Sea Bass", "Gubana Cake"
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
        contents: `Create an elite, luxury Italian recipe using these FVG ingredients: ${selected.join(", ")}. Include a sophisticated title and wine pairing.`,
        config: {
            systemInstruction: "You are a Michelin-star chef specializing in Friuli-Venezia Giulia cuisine. Provide gourmet, high-end recipes with elegant formatting."
        }
      });
      setRecipe(response.text || "Something went wrong.");
    } catch (e) {
      console.error(e);
      setRecipe("The kitchen is currently closed for maintenance. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="serif text-6xl text-prosecco mb-8">Culinary <br/>Alchemy</h2>
          <p className="text-white/60 mb-12 text-sm leading-relaxed max-w-md">
            Select authentic ingredients from our region and let our Culinary AI curate a bespoke masterpiece for your table.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {INGREDIENTS.map(ing => (
              <button
                key={ing}
                onClick={() => toggleIngredient(ing)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest transition-all border ${
                  selected.includes(ing) 
                    ? 'bg-prosecco border-prosecco text-deep-teal' 
                    : 'glass border-white/10 text-white/60 hover:border-prosecco/50'
                }`}
              >
                {ing.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            onClick={generateRecipe}
            disabled={loading || selected.length === 0}
            className="bg-prosecco text-deep-teal px-12 py-4 rounded-full font-bold text-sm tracking-[0.2em] hover:scale-105 transition disabled:opacity-50 disabled:scale-100"
          >
            {loading ? 'CURATING...' : 'GENERATE MASTERPIECE'}
          </button>
        </div>

        <div className="glass rounded-[40px] p-10 min-h-[500px] border border-white/10 relative overflow-hidden">
          {!recipe && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center">
               <div className="w-20 h-20 mb-6 border border-prosecco/20 rounded-full flex items-center justify-center text-prosecco/40 text-4xl">
                 ✧
               </div>
               <p className="serif text-white/30 text-xl italic">Choose your ingredients to begin the culinary journey...</p>
            </div>
          )}
          {loading && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 border-2 border-prosecco border-t-transparent rounded-full animate-spin mb-6"></div>
              <p className="serif text-prosecco text-xl animate-pulse">Designing your menu...</p>
            </div>
          )}
          {recipe && (
            <div className="animate-in fade-in slide-in-from-right-10 prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-sm text-white/80 leading-relaxed font-light">
                {recipe}
              </div>
            </div>
          )}
          {/* Subtle Glow Background */}
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-prosecco/5 blur-[100px] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default Gastronomy;
