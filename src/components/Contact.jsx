import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function Contact() {
  return (
    <section id="contact" className="py-4 sm:py-8 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="card-glass rounded-2xl p-6 sm:p-10 border border-white/[0.1] shadow-xl relative overflow-hidden">
          
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-5 h-5" />
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
            Have an event to plan?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
            Stay connected with {SITE_CONFIG.name} as we prepare for launch. Reach out directly for early access, partnership inquiries, or event consultation.
          </p>

          <div className="w-full sm:w-auto inline-block">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=Event%20Planning%20Inquiry%20-%20${SITE_CONFIG.name}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/25 transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Direct Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-400 hover:underline">{SITE_CONFIG.contactEmail}</a>
          </p>

        </div>

      </div>
    </section>
  );
}
