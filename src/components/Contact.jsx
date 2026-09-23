import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-white/[0.1] shadow-2xl relative overflow-hidden">
          
          <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have an event to plan?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Stay connected with {SITE_CONFIG.name} as we prepare for launch. Reach out directly for early access, partnership inquiries, or event consultation.
          </p>

          <div className="inline-block">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=Event%20Planning%20Inquiry%20-%20${SITE_CONFIG.name}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Direct Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-400 hover:underline">{SITE_CONFIG.contactEmail}</a>
          </p>

        </div>

      </div>
    </section>
  );
}
