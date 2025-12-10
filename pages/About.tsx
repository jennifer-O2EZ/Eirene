import React from 'react';
import { CORE_VALUES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Animation variants for smooth scrolling reveals
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen w-full overflow-hidden">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
           {/* Atmospheric Background */}
           <img
             src="https://images.unsplash.com/photo-1533158326339-bef0d95d8206?q=80&w=1600&auto=format&fit=crop"
             alt="Marble Texture and Shadow"
             className="w-full h-full object-cover opacity-60 mix-blend-multiply"
           />
           <div className="absolute inset-0 bg-stone-200/40 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50" />
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative z-10 text-center space-y-6"
        >
          <span className="block text-xs md:text-sm tracking-[0.4em] uppercase text-stone-600 font-medium animate-pulse">The Origin</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-800 tracking-tight leading-none">
            Eirene
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-stone-600 max-w-lg mx-auto leading-relaxed pt-4">
            "Peace is not merely the absence of conflict, but the presence of harmony."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 z-10"
        >
          <ArrowDown className="text-stone-400 w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. Chapter I: The Vision (Editorial Layout) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Sticky Title */}
          <motion.div
             className="md:col-span-4 md:sticky md:top-32"
             {...fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">The Vision</h2>
            <div className="h-0.5 w-16 bg-gold-500" />
          </motion.div>

          {/* Scrolling Content */}
          <div className="md:col-span-8 space-y-16">
            <motion.div {...fadeInUp}>
              <p className="text-2xl md:text-4xl font-serif leading-tight text-stone-800">
                To create a sanctuary where peace, nourishment, and renewal converge — guiding individuals toward flourishing lives rooted in <span className="text-gold-600 italic">harmony</span> of body, mind, and spirit.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <p className="text-stone-600 leading-loose text-sm md:text-base font-light tracking-wide text-justify">
                 Eirene envisions a world where wellness is not a luxury, but a way of living. We draw from the deep wells of ancient Greek wisdom—where the body was a temple and food was medicine—and merge it with the precision of modern science.
               </p>
               <p className="text-stone-600 leading-loose text-sm md:text-base font-light tracking-wide text-justify">
                 In the hustle of modern existence, we often lose the rhythm of our own souls. Eirene is the pause, the breath, and the return. It is an invitation to step out of time and into a space of sacred restoration.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Chapter II: The Pillars (Dark Mode Sanctuary) */}
      <section className="bg-stone-900 text-stone-100 py-32 px-6 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-stone-800/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="mb-24 text-center md:text-left" {...fadeInUp}>
             <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold">Chapter II</span>
             <h2 className="font-serif text-5xl md:text-7xl mt-4 text-stone-50">The Six Pillars</h2>
             <p className="text-stone-400 mt-6 max-w-xl text-lg font-light">
               Our philosophy is built upon six timeless concepts from Greek antiquity, reimagined for the modern seeker.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.greek}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-default relative"
              >
                {/* Decorative Line */}
                <div className="absolute top-0 left-0 w-0 h-px bg-gold-500/50 group-hover:w-full transition-all duration-700 ease-in-out" />
                
                <div className="pt-6">
                   {value.icon && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: (index * 0.1) + 0.2, ease: "easeOut" }}
                        className="mb-6 text-stone-600 group-hover:text-gold-500 transition-colors duration-500"
                      >
                        <value.icon size={36} strokeWidth={1} />
                      </motion.div>
                   )}

                   <div className="flex items-baseline justify-between mb-4">
                      <h3 className="font-serif text-3xl md:text-4xl text-stone-200 group-hover:text-gold-100 transition-colors duration-300">
                        {value.greek}
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-gold-500 font-medium">
                        {value.english}
                      </span>
                   </div>
                   <p className="text-stone-400 font-light leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
                     {value.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Chapter III: The Mission (Split Screen Visual) */}
      <section className="min-h-screen flex flex-col md:flex-row">
         <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
            <motion.img
               initial={{ scale: 1.1 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 1.5 }}
               src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1200&auto=format&fit=crop"
               alt="Ritual and Wellness"
               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-1000" />
         </div>
         
         <div className="w-full md:w-1/2 bg-stone-100 flex items-center justify-center p-12 md:p-24">
            <div className="max-w-md space-y-10">
               <motion.div {...fadeInUp}>
                  <span className="text-stone-500 uppercase tracking-[0.2em] text-xs block mb-4">Our Promise</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-8">Palingenesis</h2>
                  <p className="text-stone-600 leading-loose mb-8 text-lg font-light">
                    We do not merely host retreats; we facilitate <span className="font-serif italic text-stone-900">rebirth</span>. 
                    Our mission is to empower you to:
                  </p>
                  
                  <ul className="space-y-6">
                    {[
                      "Restore balance and serenity.",
                      "Reconnect with nature and self.",
                      "Rebuild vitality through mindful nourishment.",
                      "Radiate peace into communities."
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-4 text-stone-700 group">
                          <span className="h-px w-8 bg-gold-400 shrink-0 mt-3 group-hover:w-12 transition-all duration-300" />
                          <span className="leading-relaxed">{item}</span>
                       </li>
                    ))}
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>
      
      {/* 5. Footer Quote */}
      <section className="py-24 px-6 bg-stone-50 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-serif text-2xl md:text-3xl italic text-stone-400">
            "We are not human beings having a spiritual experience. We are spiritual beings having a human experience."
          </p>
        </motion.div>
      </section>
    </div>
  );
};