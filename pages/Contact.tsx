import React from 'react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-stone-50 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="font-serif text-4xl text-stone-800 mb-8 text-center">Begin the Conversation</h1>
        <p className="text-stone-600 text-center mb-12">
          Whether you are seeking a personal reset or a partnership opportunity, we are here to listen.
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500">Name</label>
              <input type="text" className="bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500">Email</label>
              <input type="email" className="bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors" />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500">Subject</label>
            <select className="bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors text-stone-700">
              <option>Booking Inquiry</option>
              <option>Partnership Proposal</option>
              <option>Press & Media</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500">Message</label>
            <textarea rows={4} className="bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors resize-none"></textarea>
          </div>

          <div className="pt-4 text-center">
            <Button type="button">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
