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
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-400 mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need to Plan Better Events
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A comprehensive suite of tools built to empower organizers, planners, and hosts with effortless coordination.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURE_LIST.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="card-glass rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} border border-white/[0.08] flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-slate-500">
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
