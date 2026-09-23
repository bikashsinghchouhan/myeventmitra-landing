import React from 'react';
import { TrendingUp, Briefcase, MapPin } from 'lucide-react';

const POPULAR_ROLES = [
  { role: "Event Promoters", count: "120+ Gigs", tag: "High Demand" },
  { role: "VIP Ushers & Hospitality", count: "85+ Gigs", tag: "₹1,500/day" },
  { role: "Registration Desk Coordinators", count: "90+ Gigs", tag: "Top Rated" },
  { role: "Exhibition Stall Helpers", count: "140+ Gigs", tag: "Trade Fairs" },
  { role: "Stage & Backstage Crew", count: "60+ Gigs", tag: "Concerts" },
  { role: "Event Security & Bouncers", count: "45+ Gigs", tag: "₹2,000/day" },
  { role: "College Volunteers", count: "200+ Openings", tag: "Certificates" },
  { role: "Crowd Management Assistants", count: "75+ Gigs", tag: "Daily Wage" },
];

const TOP_CITIES = [
  "Delhi NCR", "Noida", "Gurugram", "Mumbai", "Bengaluru", "Pune", "Hyderabad", "Jaipur", "Chandigarh"
];

export default function SearchKeywords() {
  return (
    <section className="py-4 sm:py-8 border-y border-white/[0.06] bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <TrendingUp className="w-3 h-3" />
              <span>In-Demand Event Roles & Gigs</span>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
              Top Searched Event Opportunities & Manpower Services
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Connecting thousands of daily-paid event professionals with top brands, wedding hosts, and corporate summits.
          </p>
        </div>

        {/* Roles Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6">
          {POPULAR_ROLES.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-brand-500/40 hover:bg-brand-950/20 transition-all flex items-center justify-between group cursor-default"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-[10px] text-slate-500">{item.count}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Popular Cities Bar */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
            <MapPin className="w-3.5 h-3.5 text-brand-400" /> Active Cities:
          </span>
          {TOP_CITIES.map((city, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06] cursor-default"
            >
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
