import React from 'react';
import { SITE_CONFIG } from '../constants/config';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5">
              <img 
                src="/logo-icon.jpg" 
                alt="MyEventMitra Icon" 
                className="w-7 h-7 rounded-lg object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                MyEvent<span className="text-brand-400">Mitra</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 mt-1.5">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Legal and Copyright Right */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-slate-600">•</span>
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-xs text-slate-500">
              © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
