import React from 'react';
import {
  Wifi,
  AirVent,
  ShieldCheck,
  UtensilsCrossed,
  Droplets,
  HeartPulse,
  Sparkles,
  Lock,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { facilities } from '../data/pgData';

export default function Facilities() {
  const iconMap = {
    Wifi,
    AirVent,
    ShieldCheck,
    UtensilsCrossed,
    Droplets,
    HeartPulse,
    Sparkles,
    Lock,
    Zap,
  };

  return (
    <section id="facilities" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Top-Notch Amenities
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need for a Seamless Living Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From optical fiber high-speed internet to 24x7 CCTV surveillance, medical first-aid kit, and chilled RO drinking water, Dahiya PG has you covered.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || CheckCircle;

            return (
              <div
                key={facility.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {facility.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {facility.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-semibold text-amber-600">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  Included in Standard Package
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Health Banner */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              Safety & Hygiene First
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-heading">
              24x7 Entry Monitored Under CCTV Surveillance
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Parents can rest easy knowing our premises are strictly guarded with multi-angle CCTV recording, emergency first-aid kit on site, and dedicated on-ground management.
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-white/15 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">24/7</div>
              <div className="text-[10px] sm:text-[11px] text-slate-300">CCTV Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-white/15 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-300">RO Drinking Water</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
