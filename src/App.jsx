import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import BrandValue from './components/BrandValue';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ComingSoon />
        <BrandValue />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
