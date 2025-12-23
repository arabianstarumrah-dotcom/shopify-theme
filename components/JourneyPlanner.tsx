
import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { getJourneyRecommendation } from '../services/gemini';

const JourneyPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const result = await getJourneyRecommendation(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-[#001F3F] p-8 md:p-12 rounded-lg border border-[#D4AF37]/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Sparkles className="w-32 h-32 text-[#D4AF37]" />
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white serif-font">AI Journey Planner</h2>
          <p className="text-gray-300 leading-relaxed">
            Not sure where to start? Tell our AI concierge about your group size, travel dates, and luxury preferences (e.g., "Family of 4, looking for 5-star hotels near the Haram in Makkah for 7 days").
          </p>
          <form onSubmit={handlePlan} className="space-y-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your dream pilgrimage..."
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all h-32 resize-none"
              />
            </div>
            <button
              disabled={loading}
              className="w-full md:w-auto flex items-center justify-center space-x-3 bg-gold-gradient text-black px-8 py-3 rounded-sm font-bold tracking-widest hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>CRAFTING YOUR PLAN...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>GET RECOMMENDATION</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="min-h-[300px] flex flex-col justify-center bg-black/40 p-8 rounded-sm border border-white/5 backdrop-blur-sm">
          {response ? (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center space-x-2 text-[#D4AF37]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest uppercase">Arabian Star Recommendation</span>
              </div>
              <div className="text-gray-200 leading-relaxed italic whitespace-pre-wrap text-sm md:text-base">
                {response}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 opacity-50">
              <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto" />
              <p className="text-gray-400 font-light italic">Your personalized recommendation will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyPlanner;
