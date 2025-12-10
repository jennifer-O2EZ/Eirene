import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Serene Landscape" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-stone-100/30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-800 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
          >
            Welcome to the Sanctuary
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-8 leading-tight"
          >
            The Art of <br/> Harmonious Living
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link to="/reset">
              <Button variant="primary">Discover The Reset</Button>
            </Link>
            <Link to="/story">
              <Button variant="text">Our Philosophy <ArrowRight className="inline ml-2 w-4 h-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block w-px h-16 bg-stone-300 mx-auto mb-8"></span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8 leading-relaxed">
            Where peace becomes prosperity, healing becomes renewal, and nourishment becomes flourishing.
          </h2>
          <p className="font-sans text-stone-600 leading-loose tracking-wide">
            Eirene is a sanctuary where ancient Greek wisdom meets modern wellness science. 
            We offer transformative retreat programs designed to bridge the gap between high-end hospitality 
            and holistic health in the heart of Hong Kong.
          </p>
        </div>
      </section>

      {/* Visual Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
        <div className="relative overflow-hidden group">
           <img 
            src="https://picsum.photos/800/1200" 
            alt="Wellness Yoga" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
           <div className="absolute bottom-12 left-12 text-stone-50">
             <h3 className="font-serif text-3xl mb-2">Restoration</h3>
             <p className="uppercase tracking-widest text-xs">Body & Mind</p>
           </div>
        </div>
        <div className="relative overflow-hidden group">
           <img 
            src="https://picsum.photos/801/1200" 
            alt="Fine Dining" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
          <div className="absolute bottom-12 left-12 text-stone-50">
             <h3 className="font-serif text-3xl mb-2">Ambrosia</h3>
             <p className="uppercase tracking-widest text-xs">Functional Fine Dining</p>
           </div>
        </div>
      </section>
    </div>
  );
};
