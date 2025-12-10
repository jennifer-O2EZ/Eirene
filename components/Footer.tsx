import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-stone-50 font-serif text-2xl tracking-widest uppercase mb-4">Eirene</h2>
          <p className="text-xs uppercase tracking-widest max-w-xs leading-relaxed">
            Luxury. Timeless. Peace.
          </p>
        </div>
        
        <div className="flex flex-col text-center md:text-right space-y-2">
          <a href="mailto:contact@eirene-retreats.com" className="hover:text-stone-50 transition-colors">contact@eirene-retreats.com</a>
          <p className="text-sm">Hong Kong, Central</p>
          <p className="text-xs pt-8 text-stone-600">© {new Date().getFullYear()} Eirene. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
