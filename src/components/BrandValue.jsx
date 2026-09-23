import React from 'react';
import { Compass, CheckCircle2, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function BrandValue() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-400">
              <Compass className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Plan. Organize. Celebrate.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From the first idea to the final celebration, {SITE_CONFIG.name} is being built to make event management simpler, smarter and more connected.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Unified Workflow:</strong> Eliminate fragmented spreadsheets, messy chat groups, and lost vendor contacts.
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Confidence in Execution:</strong> Keep everyone from hosts to volunteers coordinated in real-time.
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Memorable Outcomes:</strong> Focus on cherishing the moment while the platform takes care of the logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="card-glass rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
              <div className="text-2xl font-black text-brand-400 mb-1">01</div>
              <h3 className="text-lg font-bold text-white mb-1.5">Intelligent Event Blueprints</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Pre-configured timelines, checklists, and vendor milestones customized for corporate summits, weddings, and festivals.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6 sm:p-7 border border-brand-500/20 bg-brand-950/20">
              <div className="text-2xl font-black text-accent-400 mb-1">02</div>
              <h3 className="text-lg font-bold text-white mb-1.5">Connected Community Hub</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Collaborative spaces bridging event organizers with dependable manpower, helpers, and skilled service partners.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
              <div className="text-2xl font-black text-emerald-400 mb-1">03</div>
              <h3 className="text-lg font-bold text-white mb-1.5">Transparent Tracking</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Clear budget overviews, guest RSVP metrics, and instant payment settlement logs for complete peace of mind.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
