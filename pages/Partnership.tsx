import React from 'react';
import { Building2, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Partnership: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
       <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-5xl text-stone-800 mb-6">Partnership Model</h1>
        <p className="text-stone-600 text-lg">
          A Joint Venture for the Ultimate Urban Sanctuary.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
           <h2 className="font-serif text-3xl text-stone-800 mb-6">The Concept</h2>
           <p className="text-stone-600 leading-relaxed mb-6">
             We propose a strategic joint venture between Eirene (Wellness Software) and Premier Hotels (Hardware). 
             Together, we launch "The Eirene Sanctuary," utilizing the hotel's existing assets and activating them with Eirene's proprietary programming.
           </p>
           <ul className="space-y-4">
             <li className="flex items-start gap-3">
               <Building2 className="text-gold-600 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="block text-stone-800 uppercase text-xs tracking-wider mb-1">The Hardware (Hotel)</strong>
                 <p className="text-sm text-stone-600">Luxury accommodation, dining venues, and operations.</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <Briefcase className="text-gold-600 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="block text-stone-800 uppercase text-xs tracking-wider mb-1">The Software (Eirene)</strong>
                 <p className="text-sm text-stone-600">Program design, world-class practitioners, nutritional consulting, and branding.</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <TrendingUp className="text-gold-600 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="block text-stone-800 uppercase text-xs tracking-wider mb-1">Value Proposition</strong>
                 <p className="text-sm text-stone-600">Increased RevPAR, differentiation in a crowded market, and attraction of wellness-conscious HNWIs.</p>
               </div>
             </li>
           </ul>
        </div>
        <div className="bg-stone-200 h-96 w-full relative">
           <img 
            src="https://picsum.photos/800/800?grayscale" 
            alt="Hotel Lobby" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-stone-900 text-stone-300 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-serif text-3xl text-stone-50 mb-8">Target Audience</h2>
           <p className="text-lg font-light leading-relaxed mb-12">
             C-Suite Executives, Entrepreneurs, and HNWIs seeking stress relief and luxury wellness tourists who desire a seamless blend of high-end hospitality and life-changing holistic health without leaving the city.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6 border border-stone-700">
               <h3 className="text-gold-400 mb-2 font-serif text-xl">Low CapEx</h3>
               <p className="text-sm">Utilizing existing infrastructure.</p>
             </div>
             <div className="p-6 border border-stone-700">
               <h3 className="text-gold-400 mb-2 font-serif text-xl">High Value</h3>
               <p className="text-sm">Targeting price-insensitive demographics.</p>
             </div>
             <div className="p-6 border border-stone-700">
               <h3 className="text-gold-400 mb-2 font-serif text-xl">Differentiation</h3>
               <p className="text-sm">Tangible life improvement beyond generic stays.</p>
             </div>
           </div>
        </div>
      </div>

      <div className="py-24 text-center">
         <h2 className="font-serif text-3xl text-stone-800 mb-6">Become a Partner</h2>
         <Link to="/contact">
            <Button variant="outline">Schedule a Meeting</Button>
         </Link>
      </div>
    </div>
  );
};
