import React from 'react';
import { SITE_CONFIG } from '../constants/config';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] py-4 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Brand Left */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/logo-icon.jpg" 
                alt="MyEventMitra Icon" 
                className="w-6 h-6 rounded-md object-contain"
              />
              <span className="text-sm font-bold tracking-tight text-white">
                MyEvent<span className="text-brand-400">Mitra</span>
              </span>
            </a>
            <p className="text-[11px] text-slate-500 mt-1">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Legal and Copyright Right */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-1.5">
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-slate-600">•</span>
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-[10px] text-slate-500">
              © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
