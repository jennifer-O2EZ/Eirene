import React, { useState } from 'react';
import { ITINERARY } from '../constants';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check, Moon, Sun, Wind, Shield, Droplets, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const DATES = [
  { id: 1, month: 'Nov', days: '10-12', year: '2024', status: 'Available' },
  { id: 2, month: 'Dec', days: '08-10', year: '2024', status: 'Limited' },
  { id: 3, month: 'Jan', days: '12-14', year: '2025', status: 'Waitlist' },
  { id: 4, month: 'Feb', days: '09-11', year: '2025', status: 'Available' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const Experiences: React.FC = () => {
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBookNow = () => {
    const selected = DATES.find(d => d.id === selectedDateId);
    const dateStr = selected ? `${selected.month} ${selected.days}, ${selected.year}` : '';
    navigate('/contact', { state: { type: 'Booking Inquiry', date: dateStr } });
  };

  return (
    <div className="bg-stone-50 w-full overflow-hidden">
      
      {/* 1. Cinematic Hero */}
      <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Minimalist Luxury Spa" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 text-center text-stone-50 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="block text-xs md:text-sm tracking-[0.4em] uppercase text-stone-200 mb-6 font-medium">Signature Program</span>
            <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">
              The Reset
            </h1>
            <div className="h-px w-24 bg-stone-300/50 mx-auto mb-8" />
            <p className="font-light text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed text-stone-100/90">
              A 48-hour recalibration of the nervous system. <br className="hidden md:block"/>
              Where ancient ritual meets circadian science.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. The Alchemy (Science vs Spirit) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="font-serif text-4xl text-stone-800 mb-6">The Alchemy of Rest</h2>
          <p className="text-stone-600 max-w-2xl mx-auto leading-loose">
            We do not believe in passive relaxation. The Reset is an active engagement with your body’s recovery systems, bridging the gap between the clinical and the spiritual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="border-l-2 border-stone-300 pl-6">
              <h3 className="font-serif text-2xl text-stone-800 mb-2">Modern Science</h3>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">The Clinical Approach</p>
              <p className="text-stone-600 leading-relaxed font-light">
                We utilize bio-hacks designed to lower cortisol and regulate the circadian rhythm. From blue-light filtration protocols to nutrient-dense meals specifically timed to optimize melatonin production, every element is data-driven.
              </p>
            </div>
            <div className="bg-stone-100 p-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-stone-700"><Shield size={18} className="text-stone-400"/> Vagus Nerve Stimulation</li>
                <li className="flex items-center gap-3 text-stone-700"><Sun size={18} className="text-stone-400"/> Circadian Light Therapy</li>
                <li className="flex items-center gap-3 text-stone-700"><Droplets size={18} className="text-stone-400"/> Lymphatic Drainage</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:mt-12"
          >
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="font-serif text-2xl text-stone-800 mb-2">Ancient Wisdom</h3>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">The Classical Approach</p>
              <p className="text-stone-600 leading-relaxed font-light">
                Science explains *how* we heal, but wisdom explains *why*. We draw from Stoic philosophy and Asclepian rituals to quiet the mind, using sound baths and guided introspection to clear the psychic debris of modern life.
              </p>
            </div>
             <div className="bg-stone-100 p-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-stone-700"><Wind size={18} className="text-gold-500"/> Breathwork (Pranayama)</li>
                <li className="flex items-center gap-3 text-stone-700"><Music size={18} className="text-gold-500"/> Sound Healing Frequencies</li>
                <li className="flex items-center gap-3 text-stone-700"><Moon size={18} className="text-gold-500"/> Digital Detox Silence</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Sanctuary Suites (Dark Mode) */}
      <section className="bg-stone-900 text-stone-100 py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
             <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold block mb-4">The Environment</span>
             <h2 className="font-serif text-4xl md:text-5xl mb-6">Your Private Temple</h2>
             <p className="text-stone-400 leading-loose mb-8 font-light">
               The "Sanctuary Suite" is not merely a hotel room; it is a hyper-controlled environment engineered for deep sleep and cognitive restoration.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
               <div>
                 <h4 className="font-serif text-xl text-stone-200 mb-2">Hepa-Filtered Air</h4>
                 <p className="text-sm text-stone-500 leading-relaxed">Hospital-grade purification to remove urban pollutants and allergens.</p>
               </div>
               <div>
                 <h4 className="font-serif text-xl text-stone-200 mb-2">Sound Isolation</h4>
                 <p className="text-sm text-stone-500 leading-relaxed">Acoustic dampening materials ensure absolute silence from the city.</p>
               </div>
               <div>
                 <h4 className="font-serif text-xl text-stone-200 mb-2">Organic Bedding</h4>
                 <p className="text-sm text-stone-500 leading-relaxed">GOTS-certified linens and a pillow menu curated for cervical support.</p>
               </div>
               <div>
                 <h4 className="font-serif text-xl text-stone-200 mb-2">Aromatherapy</h4>
                 <p className="text-sm text-stone-500 leading-relaxed">Custom Eirene blends diffused to trigger parasympathetic response.</p>
               </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop" 
              alt="Dark Mood Sanctuary Room" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 border border-stone-700/50 m-4 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 4. Gastronomy Section */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="font-serif text-4xl text-stone-800 mb-4">Gastronomy as Medicine</h2>
             <p className="text-stone-500">The Ambrosia Protocol</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             <div className="relative group overflow-hidden h-96">
               <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop" alt="Green Salad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
               <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors" />
               <div className="absolute bottom-6 left-6 text-white">
                 <h3 className="font-serif text-2xl">Living Greens</h3>
                 <p className="text-xs uppercase tracking-widest opacity-80">Enzyme Rich</p>
               </div>
             </div>
             <div className="relative group overflow-hidden h-96">
               <img src="https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=800&auto=format&fit=crop" alt="Herbal Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
               <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors" />
               <div className="absolute bottom-6 left-6 text-white">
                 <h3 className="font-serif text-2xl">Elixirs</h3>
                 <p className="text-xs uppercase tracking-widest opacity-80">Adaptogenic</p>
               </div>
             </div>
             <div className="relative group overflow-hidden h-96">
               <img src="https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=800&auto=format&fit=crop" alt="Plated Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
               <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors" />
               <div className="absolute bottom-6 left-6 text-white">
                 <h3 className="font-serif text-2xl">Clean Protein</h3>
                 <p className="text-xs uppercase tracking-widest opacity-80">Rebuilding</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. The Journey (Itinerary) */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-800">The Journey</h2>
          <div className="h-px w-12 bg-gold-400 mx-auto mt-6" />
        </div>

        {ITINERARY.map((day, dayIndex) => (
          <motion.div 
            key={day.day} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 last:mb-0"
          >
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-5xl md:text-6xl font-serif text-stone-200">{day.day.split(' ')[1]}</h3>
              <div className="flex flex-col">
                <span className="text-lg font-serif text-stone-900">{day.day.split(' ')[0]} Day</span>
                <span className="text-gold-600 uppercase tracking-widest text-xs font-bold">{day.theme}</span>
              </div>
            </div>

            <div className="space-y-0 relative border-l border-stone-200 ml-4 md:ml-8">
              {day.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative pl-8 md:pl-12 pb-16 last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border border-stone-400 bg-stone-50 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300"></div>
                  
                  <div className="md:flex md:gap-16 items-start">
                    <div className="md:w-24 shrink-0 mb-2 md:mb-0">
                      <span className="font-serif italic text-stone-400">{item.time}</span>
                    </div>
                    
                    <div className="md:w-full">
                      <h4 className="font-serif text-xl text-stone-800 mb-2 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                      <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* 6. Date Selection & Booking Section (Preserved) */}
      <section className="bg-stone-900 py-24 px-6 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-4">Reserve Your Sanctuary</h3>
            <p className="text-stone-400 font-light">Select an upcoming retreat date to begin your inquiry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DATES.map((date) => {
              const isSelected = selectedDateId === date.id;
              const isWaitlist = date.status === 'Waitlist';
              
              return (
                <button
                  key={date.id}
                  onClick={() => setSelectedDateId(date.id)}
                  className={`
                    relative p-8 border text-left transition-all duration-300 flex flex-col justify-between min-h-[200px] group w-full
                    ${isSelected 
                      ? 'bg-stone-800 border-gold-500 text-stone-50 shadow-2xl scale-105 z-10 ring-1 ring-gold-500' 
                      : 'bg-stone-900 border-stone-700 text-stone-400 hover:border-gold-500/50 hover:bg-stone-800'
                    }
                  `}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className={`text-xs uppercase tracking-widest font-medium ${isSelected ? 'text-gold-400' : 'text-stone-600'}`}>
                      {date.year}
                    </span>
                    {isSelected && <Check size={16} className="text-gold-400" />}
                  </div>

                  <div>
                    <span className={`block text-3xl font-serif mb-1 ${isSelected ? 'text-stone-50' : 'text-stone-200'}`}>
                      {date.days}
                    </span>
                    <span className={`block text-sm uppercase tracking-wider ${isSelected ? 'text-stone-400' : 'text-stone-600'}`}>
                      {date.month}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-dashed border-stone-700 w-full">
                     <span className={`
                       text-xs font-medium uppercase tracking-widest
                       ${isWaitlist ? 'text-red-400' : (isSelected ? 'text-stone-300' : 'text-gold-600')}
                     `}>
                       {date.status}
                     </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-center flex flex-col items-center space-y-6">
            <p className="text-stone-400 italic font-serif text-lg max-w-lg">
              "To find health should be the object of the doctor. Anyone can find disease."
            </p>
            
            <div className="pt-8">
              <Button 
                variant="primary" 
                onClick={handleBookNow}
                className="min-w-[240px] bg-stone-50 text-stone-900 hover:bg-stone-200 hover:text-stone-900"
              >
                {selectedDateId ? 'Request Reservation' : 'General Inquiry'}
              </Button>
              <p className="text-xs text-stone-500 mt-4 uppercase tracking-widest">
                {selectedDateId ? 'You will be redirected to complete your request' : 'Select a date above or proceed with general questions'}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};