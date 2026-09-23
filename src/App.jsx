import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchKeywords from './components/SearchKeywords';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import BrandValue from './components/BrandValue';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchKeywords />
        <Features />
        <ComingSoon />
        <BrandValue />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
