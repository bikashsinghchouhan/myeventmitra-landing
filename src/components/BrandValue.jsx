import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function BrandValue() {
  return (
    <section id="about" className="py-4 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-400">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </div>
            
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
              Plan. Organize. Celebrate.
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From the first idea to the final celebration, {SITE_CONFIG.name} is being built to make event management simpler, smarter and more connected.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Unified Workflow:</strong> Eliminate fragmented spreadsheets, messy chat groups, and lost vendor contacts.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Confidence in Execution:</strong> Keep everyone from hosts to volunteers coordinated in real-time.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Memorable Outcomes:</strong> Focus on cherishing the moment while the platform takes care of the logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Pillars */}
          <div className="lg:col-span-6 space-y-2 sm:space-y-3">
            <div className="card-glass rounded-xl p-4 sm:p-5 border border-white/[0.08]">
              <div className="text-lg font-black text-brand-400 mb-0.5">01</div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Intelligent Event Blueprints</h3>
              <p className="text-xs text-slate-400">
                Pre-configured timelines, checklists, and vendor milestones customized for corporate summits, weddings, and festivals.
              </p>
            </div>

            <div className="card-glass rounded-xl p-4 sm:p-5 border border-brand-500/20 bg-brand-950/20">
              <div className="text-lg font-black text-accent-400 mb-0.5">02</div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Connected Community Hub</h3>
              <p className="text-xs text-slate-400">
                Collaborative spaces bridging event organizers with dependable manpower, helpers, and skilled service partners.
              </p>
            </div>

            <div className="card-glass rounded-xl p-4 sm:p-5 border border-white/[0.08]">
              <div className="text-lg font-black text-emerald-400 mb-0.5">03</div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Transparent Tracking</h3>
              <p className="text-xs text-slate-400">
                Clear budget overviews, guest RSVP metrics, and instant payment settlement logs for complete peace of mind.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
