import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experiences } from './pages/Experiences';
import { Partnership } from './pages/Partnership';
import { Oracle } from './pages/Oracle';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-gold-200 selection:text-stone-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<About />} />
            <Route path="/reset" element={<Experiences />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/oracle" element={<Oracle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
