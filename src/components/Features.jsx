import React from 'react';
import { CalendarCheck, Kanban, Store, Users, Send, CreditCard } from 'lucide-react';

const FEATURE_LIST = [
  {
    icon: CalendarCheck,
    title: "Event Planning",
    description: "Plan every detail of your event from one place.",
    gradient: "from-blue-500/20 to-indigo-500/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Kanban,
    title: "Event Management",
    description: "Manage schedules, tasks, guests and event activities efficiently.",
    gradient: "from-purple-500/20 to-indigo-500/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Store,
    title: "Vendor Management",
    description: "Discover and manage the vendors needed for your event.",
    gradient: "from-indigo-500/20 to-pink-500/5",
    iconColor: "text-indigo-400",
  },
  {
    icon: Users,
    title: "Guest Management",
    description: "Keep your guest list organized and make event coordination easier.",
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Send,
    title: "Invitations",
    description: "Create and manage beautiful digital invitations.",
    gradient: "from-pink-500/20 to-rose-500/5",
    iconColor: "text-pink-400",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Keep event-related payments and transactions organized.",
    gradient: "from-amber-500/20 to-yellow-500/5",
    iconColor: "text-amber-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-4 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-400 mb-1">
            Core Capabilities
          </p>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
            Everything You Need to Plan Better Events
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            A comprehensive suite of tools built to empower organizers, planners, and hosts with effortless coordination.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {FEATURE_LIST.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="card-glass rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} border border-white/[0.08] flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Feature 0{idx + 1}</span>
                  <span className="text-brand-400/80">Coming Soon</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
