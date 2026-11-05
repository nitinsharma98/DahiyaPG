import React from 'react';
import { GraduationCap, Briefcase, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function StudentEmployeeSuitability({ onOpenInquiry }) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Zap className="w-4 h-4 text-amber-600" />
            Tailored Accommodation
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ideal for Students & Working Professionals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Whether preparing for high-stakes competitive examinations or managing demanding shift hours in industrial areas, Dahiya PG has the exact lifestyle balance you need.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: For Students */}
          <div className="bg-gradient-to-br from-amber-50/50 via-white to-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-amber-200 shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Students & Aspirants
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Focus on Your Career & Exams
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                Studying away from home requires complete peace of mind, wholesome food on time, and an environment free from distractions.
              </p>

              <div className="space-y-3 mb-6 sm:mb-8">
                {[
                  { title: 'High-Speed Optical Wi-Fi', desc: 'Buffer-free video lectures, mock tests & downloads.' },
                  { title: 'Near Major Coachings & Libraries', desc: 'Only 2-5 minutes walk to local study centers.' },
                  { title: 'Quiet Study Hours', desc: 'Disciplined atmosphere strictly enforced after 10:00 PM.' },
                  { title: 'Homely Balanced Diet', desc: 'Light, energizing vegetarian meals so you stay healthy.' },
                  { title: '24x7 Power Backup', desc: 'No electricity disruptions during late-night exam revisions.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-800 font-bold block">{item.title}</strong>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-normal">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Student Room')}
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Student Admission Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: For Employees */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-700 shadow-xl text-white relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3 py-1 rounded-full uppercase tracking-wider">
                  Working Professionals
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Seamless Commute & Relaxing Rest
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                Engineered for engineers, supervisors, sales professionals, and corporate staff working in Rewari, IMT Bawal, Dharuhera, or Neemrana.
              </p>

              <div className="space-y-3 mb-6 sm:mb-8">
                {[
                  { title: '50m from Bawal Chowk Transit', desc: 'Catch company buses and shared autos within 60 seconds.' },
                  { title: 'Tiffin Packing Facility', desc: 'Take fresh homemade lunch to your workplace directly.' },
                  { title: 'Personal Steel Lockers', desc: 'Secure storage with individual keys for your laptop & cash.' },
                  { title: '24x7 Entry & CCTV Monitoring', desc: 'Safe entry under CCTV surveillance for odd shift workers.' },
                  { title: 'Hot Water & AC Comfort', desc: 'Relaxing geyser hot water and cooling AC rooms after work.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm text-white font-bold block">{item.title}</strong>
                      <span className="text-[11px] sm:text-xs text-slate-300 font-normal">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Working Professional Room')}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-98 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Employee Booking Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
