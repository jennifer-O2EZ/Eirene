import React from 'react';
import { Building2, Briefcase, ArrowRight, ShieldCheck, Gem, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const Partnership: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen w-full overflow-hidden">
      
      {/* 1. Cinematic Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Hotel Architecture" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center text-stone-50 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
             <span className="block text-xs md:text-sm tracking-[0.4em] uppercase text-gold-400 mb-6 font-medium">B2B Opportunities</span>
             <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
               The Future of Hospitality <br/> is Restorative.
             </h1>
             <p className="font-light text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
               Partner with Eirene to transform underutilized hotel assets into high-yield wellness sanctuaries.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Market Shift */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl text-stone-800 mb-8">The Silent Demand</h2>
            <div className="h-0.5 w-16 bg-gold-500 mb-8" />
            <p className="text-stone-600 leading-loose text-lg font-light mb-6">
              The modern luxury traveler seeks more than opulence; they seek result-oriented restoration. The era of the generic "hotel gym" and "spa menu" is ending. 
            </p>
            <p className="text-stone-600 leading-loose text-lg font-light">
              Eirene addresses the "Wellness Gap"—the disconnect between standard hospitality offerings and the sophisticated, bio-individual needs of high-net-worth individuals.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] w-full bg-stone-200 overflow-hidden"
          >
             <img 
               src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop" 
               alt="Modern Minimalist Interior"
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 bg-stone-900/80 p-8 text-stone-50 max-w-xs backdrop-blur-sm">
                <p className="font-serif text-2xl italic">"Wellness tourism is projected to hit $1.3 Trillion by 2025."</p>
                <p className="text-xs uppercase tracking-widest mt-4 text-stone-400">Global Wellness Institute</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Synergy Model */}
      <section className="bg-stone-900 text-stone-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
             <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold block mb-4">The Joint Venture</span>
             <h2 className="font-serif text-4xl md:text-5xl">The Eirene Integration</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Hardware */}
              <motion.div 
                {...fadeInUp}
                className="bg-stone-800 p-10 border border-stone-700/50 hover:border-gold-500/30 transition-colors duration-500"
              >
                <Building2 className="text-stone-400 mb-6" size={40} strokeWidth={1} />
                <h3 className="font-serif text-2xl mb-4 text-stone-200">Your Hardware</h3>
                <p className="text-stone-400 leading-relaxed font-light mb-6">
                  You provide the physical asset. We optimize under-performing floors or wings, utilizing existing room inventory and kitchen facilities without heavy construction.
                </p>
                <ul className="space-y-3 text-sm text-stone-500">
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Operational Excellence</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Prime Real Estate</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Staffing Infrastructure</li>
                </ul>
              </motion.div>

              {/* Center: The Fusion */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gold-600 p-10 transform md:-translate-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <Gem className="text-white mb-6" size={40} strokeWidth={1} />
                <h3 className="font-serif text-2xl mb-4 text-white">The Sanctuary</h3>
                <p className="text-gold-100 leading-relaxed font-light mb-6">
                  The result is a "Hotel within a Hotel"—a premium wellness wing commanded by higher ADRs and driven by exclusive package bookings.
                </p>
                <div className="border-t border-white/20 pt-6 mt-6">
                  <p className="text-white font-serif text-xl italic">
                    "Seamless integration. <br/> Tangible transformation."
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Software */}
              <motion.div 
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-stone-800 p-10 border border-stone-700/50 hover:border-gold-500/30 transition-colors duration-500"
              >
                <Briefcase className="text-stone-400 mb-6" size={40} strokeWidth={1} />
                <h3 className="font-serif text-2xl mb-4 text-stone-200">Our Software</h3>
                <p className="text-stone-400 leading-relaxed font-light mb-6">
                  We inject the intellectual property: the clinical protocols, the "Ambrosia" culinary training, the brand mystique, and the roster of master practitioners.
                </p>
                <ul className="space-y-3 text-sm text-stone-500">
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Proprietary Programming</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Brand Magnetism</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={14} /> Expert Network</li>
                </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. Strategic Benefits (Stats) */}
      <section className="py-32 px-6 bg-stone-100">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="space-y-4">
                 <span className="block text-5xl font-serif text-gold-600">30%</span>
                 <p className="uppercase tracking-widest text-xs font-bold text-stone-800">Higher ADR</p>
                 <p className="text-stone-500 text-sm leading-relaxed">Compared to standard luxury room rates.</p>
              </div>
              <div className="space-y-4">
                 <span className="block text-5xl font-serif text-gold-600">48hr</span>
                 <p className="uppercase tracking-widest text-xs font-bold text-stone-800">Minimum Stay</p>
                 <p className="text-stone-500 text-sm leading-relaxed">Ensuring consistent occupancy blocks.</p>
              </div>
              <div className="space-y-4">
                 <span className="block text-5xl font-serif text-gold-600">0%</span>
                 <p className="uppercase tracking-widest text-xs font-bold text-stone-800">Heavy CapEx</p>
                 <p className="text-stone-500 text-sm leading-relaxed">Utilization of soft goods and tech upgrades only.</p>
              </div>
              <div className="space-y-4">
                 <span className="block text-5xl font-serif text-gold-600">NEW</span>
                 <p className="uppercase tracking-widest text-xs font-bold text-stone-800">Demographic</p>
                 <p className="text-stone-500 text-sm leading-relaxed">Attracting the health-conscious HNWI.</p>
              </div>
            </div>
         </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto border border-stone-200 p-12 md:p-20 relative bg-white shadow-sm">
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-50 px-6">
             <Users className="text-stone-400" size={32} />
           </div>
           
           <h2 className="font-serif text-4xl text-stone-800 mb-6">Join the Vanguard</h2>
           <p className="text-stone-600 mb-10 leading-loose">
             We are currently selecting launch partners for Q4 2025. 
             If you represent a luxury hospitality group interested in elevating your portfolio, we invite you to a private briefing.
           </p>
           
           <Link to="/contact">
              <Button variant="primary" className="min-w-[200px]">
                Request Prospectus <ArrowRight className="inline ml-2 w-4 h-4" />
              </Button>
           </Link>
         </div>
      </section>

    </div>
  );
};