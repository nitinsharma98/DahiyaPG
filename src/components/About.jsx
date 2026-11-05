import React from 'react';
import { ShieldCheck, Sparkles, MapPin, CheckCircle, Award, Coffee, Eye } from 'lucide-react';
import { pgInfo } from '../data/pgData';

export default function About({ onSelectImage, onOpenInquiry }) {
  const pillars = [
    {
      title: 'Hygienic Homely Meals',
      desc: 'Pure vegetarian 3 meals cooked fresh daily in our kitchen, plus morning & evening tea. Tiffin packing is available for coaching & office hours.',
      icon: Coffee,
      color: 'bg-amber-100 text-amber-700',
    },
    {
      title: '24x7 Monitored Security',
      desc: 'Complete CCTV surveillance covers common areas and main gates. Only registered boy residents have entry access, ensuring peace of mind.',
      icon: ShieldCheck,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Spacious & Clean Living',
      desc: 'Brand new construction featuring wide tiled corridors, cross-ventilated rooms, daily housekeeping, and individual steel lockers with keys.',
      icon: Sparkles,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Prime 50m Connectivity',
      desc: 'Located at Mata Chowk, less than 50 meters from Rewari Bus Stand & Bawal Chowk. 1.8 km from Railway Station with instant transport access.',
      icon: MapPin,
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Award className="w-4 h-4 text-amber-600" />
            About Dahiya PG
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Rewari’s Brand New Standard in Boys Accommodation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Built to provide a disciplined, clean, safe, and nurturing environment where students can study without distraction and working professionals can recharge in comfort.
          </p>
        </div>

        {/* Story & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Image side - Banner preview */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/pg-banner.jpg"
                  alt="Dahiya PG Official Banner Notice"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[280px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    Verified Property Notice
                  </span>
                  <p className="text-white font-bold text-base sm:text-lg">
                    Official Dahiya PG Board at Mata Chowk
                  </p>
                  <p className="text-slate-300 text-xs mt-0.5">
                    Contact: {pgInfo.phones[0]} • {pgInfo.phones[1]}
                  </p>
                  <button
                    onClick={() => onSelectImage('/images/pg-banner.jpg')}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 px-3 py-1.5 rounded-lg w-fit transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text story side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-md">
              A Home Away From Home
            </div>
            
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Why Parents & Residents Trust Dahiya PG
            </h3>

            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              Moving to Rewari for coaching institutes or employment in nearby industrial zones like IMT Bawal, Neemrana, or Dharuhera shouldn't mean compromising on health, safety, or good food.
            </p>

            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              At <strong>Dahiya PG</strong>, with brand new bedding, spotless vitrified tile flooring, wide ventilated corridors, high-speed Wi-Fi connectivity, RO water purifiers on all floors, and an on-premises first-aid kit, we attend to every day-to-day requirement.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                'Strictly for Boys - Calm, disciplined & focused ambience',
                'Super close to Bus Stand & Bawal Chowk (under 50m radius)',
                'Freshly prepared homemade food with weekly menu variations',
                'Daily housekeeping for rooms, corridors, and bathrooms',
                'Zero disturbance study atmosphere during competitive exams',
              ].map((bullet, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer text-center"
              >
                Inquire for Admission
              </button>
              <a
                href="#location"
                className="text-amber-700 hover:text-amber-800 font-bold text-xs sm:text-sm flex items-center gap-1"
              >
                View on Map 📍
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-amber-50/50 rounded-2xl p-5 sm:p-6 border border-slate-200 transition-all group"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3.5 transition-transform group-hover:scale-110 ${item.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
