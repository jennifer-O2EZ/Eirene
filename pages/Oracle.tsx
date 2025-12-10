import React, { useState } from 'react';
import { getOracleWisdom } from '../services/geminiService';
import { Button } from '../components/Button';
import { Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Oracle: React.FC = () => {
  const [mood, setMood] = useState('');
  const [wisdom, setWisdom] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setIsLoading(true);
    setWisdom('');
    
    const result = await getOracleWisdom(mood);
    setWisdom(result);
    setIsLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="mx-auto text-gold-500 mb-6" size={48} strokeWidth={1} />
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">The Eirene Oracle</h1>
          <p className="text-stone-600 mb-12 font-light">
            Share your current state of mind, and receive a fragment of ancient wisdom tailored to your soul's need.
          </p>

          <form onSubmit={handleSubmit} className="mb-12 relative">
            <input 
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g., I feel overwhelmed by the city noise..."
              className="w-full bg-transparent border-b border-stone-400 py-4 text-center text-xl text-stone-800 placeholder-stone-300 focus:outline-none focus:border-gold-500 transition-colors font-serif"
            />
            <div className="mt-8">
              <Button type="submit" disabled={isLoading} variant="outline">
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Consult the Oracle'}
              </Button>
            </div>
          </form>

          {wisdom && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-stone-100 p-8 md:p-12 border border-stone-200 shadow-sm relative"
            >
              <span className="absolute top-4 left-4 text-4xl text-gold-300 font-serif leading-none">“</span>
              <p className="font-serif text-xl md:text-2xl text-stone-800 italic leading-relaxed">
                {wisdom}
              </p>
              <span className="absolute bottom-4 right-4 text-4xl text-gold-300 font-serif leading-none">”</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
