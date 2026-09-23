import React from 'react';
import { Hammer, Sparkles, Rocket } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-brand-950/60 via-slate-900 to-accent-950/40 border border-brand-500/20 shadow-2xl backdrop-blur-xl text-center">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs sm:text-sm font-semibold text-brand-300 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Currently in development</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Something Amazing Is Coming
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            We're working behind the scenes to bring you a smarter and simpler way to plan and manage events.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Full SaaS Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Hammer className="w-4 h-4 text-accent-400" />
              <span>Active Sprint Building</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span>Public Launch Ahead</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
