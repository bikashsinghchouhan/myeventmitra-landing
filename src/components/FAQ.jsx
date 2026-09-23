import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "How can I find daily paid event jobs on MyEventMitra?",
    a: "MyEventMitra lists daily paid gigs for event promoters, ushers, registration desk coordinators, and stage crews. You can apply directly through the platform, attend the pre-shift briefing, and receive guaranteed daily payouts (ranging from ₹1,000 to ₹3,500/day depending on the role)."
  },
  {
    q: "How can event organizers hire temporary event manpower?",
    a: "Event planners, wedding organizers, and corporate agencies can submit their staffing requirements directly on MyEventMitra. We provide pre-screened, ID-verified candidates with our signature 2-hour backup standby guarantee to eliminate no-shows."
  },
  {
    q: "Do volunteers receive certificates and honorariums?",
    a: "Yes! Every verified volunteer completing their assigned shift on MyEventMitra receives an official digital Certificate of Event Experience signed by the organizer, along with daily travel/food stipends and networking opportunities."
  },
  {
    q: "In which cities is MyEventMitra active?",
    a: "MyEventMitra currently operates across major Indian event hubs including Delhi-NCR, Noida, Gurugram, Mumbai, Bengaluru, Pune, Hyderabad, Jaipur, and Chandigarh."
  },
  {
    q: "When will the full platform launch?",
    a: "The full web and mobile platform is currently under active development. You can get early access and join our community WhatsApp and Telegram channels today by reaching out via our contact section."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Learn more about how MyEventMitra connects event organizers with daily paid staff and volunteers.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-400' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
