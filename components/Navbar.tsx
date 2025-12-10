import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine navbar text color based on route and scroll state to ensure contrast
  const getTextColorClasses = () => {
    if (isScrolled || isOpen) return 'text-stone-900';

    switch (location.pathname) {
      case '/reset': // Experiences page has a dark hero image
        return 'text-stone-50 hover:text-stone-200';
      case '/': // Home page has white text on mobile hero, dark on desktop
        return 'text-stone-50 md:text-stone-900 hover:text-stone-200 md:hover:text-stone-600';
      default: // Other pages (Story, Partnership, etc) have light backgrounds
        return 'text-stone-800 hover:text-stone-600';
    }
  };

  const textColorClass = getTextColorClasses();

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="z-50 group relative">
            <h1 className={`font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${textColorClass}`}>
              Eirene
            </h1>
            <span className={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${
              (isScrolled || isOpen) ? 'bg-stone-900' : 'bg-current'
            }`}></span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => `
                  text-xs uppercase tracking-widest font-medium transition-colors duration-300
                  ${isActive ? 'border-b pb-1 border-current' : ''}
                  ${textColorClass}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 transition-colors duration-300 ${isOpen ? 'text-stone-800' : textColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with Fade In */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-stone-50 shadow-2xl z-50 flex flex-col items-center justify-center space-y-8 md:hidden border-l border-stone-200"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `
                      text-xl font-serif tracking-widest transition-colors duration-300
                      ${isActive ? 'text-stone-900 border-b border-gold-400' : 'text-stone-500 hover:text-stone-800'}
                    `}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">The Art of Living</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};