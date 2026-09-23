import React from 'react';
import { ArrowRight, Mail, Sparkles, ShieldCheck, Zap, Users } from 'lucide-react';
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
          <span>Official Pre-Launch Portal</span>
        </div>

        {/* Main Heading */}
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto w-full mb-10 sm:mb-14">
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

        {/* ================= BIG PROFESSIONAL LAUNCHING SOON SHOWCASE ================= */}
        <div className="relative rounded-2xl overflow-hidden border border-brand-500/30 shadow-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-brand-950/40 p-5 sm:p-8 max-w-2xl mx-auto backdrop-blur-xl">
          
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

          {/* Header Row: Live Radar & Brand Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3.5 mb-5 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                System Status: Pre-Release
              </span>
            </div>
            
            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
              Q4 2026 Rollout
            </span>
          </div>

          {/* Big Bold Launching Soon Title */}
          <div className="space-y-2 mb-6">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-400">
              MyEventMitra Platform
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none drop-shadow-md">
              LAUNCHING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-300 to-indigo-200">
                SOON
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto pt-1 leading-relaxed">
              India's smart event management ecosystem and verified temporary manpower marketplace is being prepared for public launch.
            </p>
          </div>

          {/* 3 Core System Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-left mb-6">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Verified Manpower</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Pre-screened event staff & ushers</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Daily Paid Gigs</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Instant shift payout system</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Smart Planning</p>
                <p className="text-[10px] text-slate-400 mt-0.5">End-to-end event coordination</p>
              </div>
            </div>
          </div>

          {/* Quick Notification Action */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">
                Want early access or need event staff now?
              </span>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=Early%20Access%20Request%20-%20MyEventMitra`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-white/[0.08] hover:bg-brand-600 border border-white/[0.12] hover:border-brand-500 transition-all cursor-pointer"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
