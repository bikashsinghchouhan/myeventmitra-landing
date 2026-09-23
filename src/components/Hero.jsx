import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-4 sm:pt-28 sm:pb-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-brand-600/20 via-accent-600/15 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-slate-300 mb-4 sm:mb-6 backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>We're launching soon</span>
        </div>

        {/* Main Heading - Responsive Rule */}
        <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white leading-snug mb-3 sm:mb-4">
          Making Every Event{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-indigo-300">
            Effortless
          </span>
        </h1>

        {/* Supporting Statement */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-6 sm:mb-8">
          {SITE_CONFIG.supportingStatement}
        </p>

        {/* Dual Call to Actions - Full Width on Mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto w-full">
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/25 transition-all cursor-pointer"
          >
            <span>Explore MyEventMitra</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20about%20MyEventMitra`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Brand Full Preview Banner */}
        <div className="mt-8 sm:mt-12 relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-slate-900/60 p-2 sm:p-3 max-w-xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-white/[0.05] bg-gradient-to-b from-slate-800/40 to-slate-950 flex flex-col items-center justify-center py-6 px-4 sm:py-10">
            <img 
              src="/logo-full.jpg" 
              alt="MyEventMitra Official Logo" 
              className="max-h-14 sm:max-h-20 object-contain rounded-lg drop-shadow-md"
            />
            <div className="mt-3 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-medium text-center">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 shrink-0" />
              <span>Next-Generation Event Intelligence & Management Hub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
