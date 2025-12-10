import React from 'react';
import { ITINERARY } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Experiences: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      
      {/* Hero */}
      <div className="relative h-[60vh] w-full bg-stone-900 flex items-center justify-center overflow-hidden mb-16">
        <img 
          src="https://picsum.photos/1920/800" 
          alt="Singing Bowls" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-stone-50 px-6">
          <h1 className="font-serif text-5xl md:text-7xl mb-4">The Eirene Reset</h1>
          <p className="uppercase tracking-widest text-sm max-w-xl mx-auto">
            A luxury detox and nutrition journey designed to restore clarity and balance.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h2 className="font-serif text-3xl text-stone-800 mb-6">An Urban Sanctuary</h2>
        <p className="text-stone-600 leading-loose">
          Our signature offering is a 2-Day, 1-Night urban retreat package. 
          We move away from "diet food" to "luxury nourishment", and from simple relaxation to deep restoration.
        </p>
      </div>

      {/* Itinerary */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {ITINERARY.map((day) => (
          <div key={day.day} className="mb-16 last:mb-0">
            <div className="flex items-baseline gap-4 mb-8 border-b border-stone-200 pb-4">
              <h3 className="text-4xl font-serif text-stone-900">{day.day}</h3>
              <span className="text-gold-600 uppercase tracking-widest text-sm font-medium">{day.theme}</span>
            </div>

            <div className="space-y-0 relative border-l border-stone-200 ml-4 md:ml-0">
              {day.items.map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 md:flex md:gap-12 pb-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 group-hover:bg-gold-500 transition-colors md:hidden"></div>
                  
                  <div className="md:w-32 md:text-right shrink-0">
                    <span className="font-serif text-lg text-stone-400">{item.time}</span>
                  </div>
                  
                  <div className="md:w-full">
                    <h4 className="font-serif text-xl text-stone-800 mb-2">{item.title}</h4>
                    <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center p-12 bg-stone-100 rounded-sm">
          <h3 className="font-serif text-2xl mb-6 text-stone-800">Begin Your Journey</h3>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto">
            Ready to experience true harmony? Contact us to book your Eirene Reset or inquire about corporate packages.
          </p>
          <Link to="/contact">
            <Button variant="primary">Inquire Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
