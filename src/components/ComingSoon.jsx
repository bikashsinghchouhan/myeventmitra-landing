import React from 'react';
import { Hammer, Sparkles, Rocket } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="py-4 sm:py-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-brand-950/60 via-slate-900 to-accent-950/40 border border-brand-500/20 shadow-xl backdrop-blur-xl text-center">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-semibold text-brand-300 mb-4">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
            </span>
            <span>Currently in development</span>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
            Something Amazing Is Coming
          </h2>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            We're working behind the scenes to bring you a smarter and simpler way to plan and manage events.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Full SaaS Architecture</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <Hammer className="w-3.5 h-3.5 text-accent-400" />
              <span>Active Sprint Building</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span>Public Launch Ahead</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
