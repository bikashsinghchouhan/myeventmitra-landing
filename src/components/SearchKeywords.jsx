import React from 'react';
import { TrendingUp, Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';

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

const CITY_EVENT_HUBS = [
  {
    city: "Bangalore / Bengaluru",
    popularEvents: "Tech Summits (BIEC), Live Music Concerts, Startup Meetups, College Fests",
    highlight: "Top Tech Hub",
  },
  {
    city: "Delhi NCR & Noida",
    popularEvents: "Pragati Maidan Expos, Auto Shows, Corporate Conferences, Luxury Weddings",
    highlight: "Capital Region",
  },
  {
    city: "Mumbai",
    popularEvents: "Film Awards, Trade Shows (BKC, Nesco), Celebrity Events, Marathon Drives",
    highlight: "Entertainment Hub",
  },
  {
    city: "Pune & Hyderabad",
    popularEvents: "HITEX Summits, Cultural Fests, Sports Leagues, Food Festivals",
    highlight: "High Growth",
  },
];

export default function SearchKeywords() {
  return (
    <section className="py-4 sm:py-8 border-y border-white/[0.06] bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <TrendingUp className="w-3 h-3" />
              <span>Trending Searches & City Hubs</span>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
              Popular Events & Staffing Gigs by City
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Discover upcoming events in Bangalore, Delhi NCR, Mumbai, and hire verified local event staff.
          </p>
        </div>

        {/* City Event Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6">
          {CITY_EVENT_HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-brand-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    {hub.city}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
                    {hub.highlight}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {hub.popularEvents}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Events & Daily Gigs Live</span>
              </div>
            </div>
          ))}
        </div>

        {/* Roles Pill Grid */}
        <div className="pt-4 border-t border-white/[0.06]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-brand-400" />
            In-Demand Roles (Daily Paid ₹1,000 - ₹3,500/day):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {POPULAR_ROLES.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
              >
                <span className="text-xs font-medium text-slate-300">
                  {item.role}
                </span>
                <span className="text-[10px] font-bold text-emerald-400">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
