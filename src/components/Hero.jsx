import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-brand-600/20 via-accent-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs sm:text-sm font-medium text-slate-300 mb-8 backdrop-blur-sm shadow-sm hover:border-brand-500/30 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>We're launching soon</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          Making Every Event{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-indigo-300">
            Effortless
          </span>
        </h1>

        {/* Supporting Statement */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10">
          {SITE_CONFIG.supportingStatement}
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Explore MyEventMitra
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20about%20MyEventMitra`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            Contact Us
          </a>
        </div>

        {/* Brand Full Preview Banner */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/80 bg-slate-900/60 p-2 sm:p-3 max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-white/[0.05] bg-gradient-to-b from-slate-800/40 to-slate-950 flex flex-col items-center justify-center py-10 px-6 sm:py-16">
            <img 
              src="/logo-full.jpg" 
              alt="MyEventMitra Official Logo" 
              className="max-h-20 sm:max-h-28 object-contain rounded-xl drop-shadow-xl"
            />
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Next-Generation Event Intelligence & Management Hub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
