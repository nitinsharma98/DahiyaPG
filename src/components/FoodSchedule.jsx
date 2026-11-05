import React, { useState } from 'react';
import { Utensils, Clock, Calendar, Sparkles, Coffee } from 'lucide-react';
import { mealSchedule } from '../data/pgData';

export default function FoodSchedule() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const activeDay = mealSchedule.days[selectedDayIdx];

  return (
    <section id="food" className="py-14 sm:py-20 bg-amber-50/40 border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-300 mb-3">
            <Utensils className="w-4 h-4 text-amber-700" />
            Hygienic Homely Food Mess
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Delicious & Nutritious 7-Day Meal Plan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            100% pure vegetarian, freshly cooked home-style meals with varied daily menus. Includes early tiffin packing for office and coaching students.
          </p>
        </div>

        {/* Meal Timings Cards - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {mealSchedule.timings.map((slot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-amber-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Slot {idx + 1}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-slate-900 truncate">{slot.meal}</h4>
                <div className="mt-1 text-sm sm:text-lg font-black text-slate-800 font-heading">
                  {slot.time}
                </div>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs text-slate-500 font-medium line-clamp-2">
                {slot.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Day Selector Pills - Smooth horizontal swipe container */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Day:</span>
            <span className="text-[11px] text-amber-700 font-bold sm:hidden">Swipe days →</span>
          </div>
          <div className="bg-white rounded-2xl p-1.5 shadow-xs border border-amber-200/80 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 min-w-max">
              {mealSchedule.days.map((item, idx) => (
                <button
                  key={item.day}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    selectedDayIdx === idx
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50 active:bg-amber-100'
                  }`}
                >
                  {item.day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Day Meals Detailed Display */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-amber-200/90 shadow-lg mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-600">
                Weekly Meal Schedule
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 mt-0.5">
                What’s on the Menu this {activeDay.day}?
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              100% Pure Veg • Cooked in RO Water
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 pt-5">
            
            {/* Breakfast */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                    Breakfast
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">7:30 - 9:30 AM</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
                  Morning Fuel
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {activeDay.breakfast}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-amber-200/50 text-[11px] text-amber-900 font-medium">
                Served hot with freshly brewed Masala Chai
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full">
                    Lunch
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">12:30 - 2:30 PM</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
                  Wholesome Thali
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {activeDay.lunch}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-200/50 text-[11px] text-emerald-900 font-medium flex items-center justify-between">
                <span>Tiffin packing option</span>
                <span className="font-bold">Unlimited Roti</span>
              </div>
            </div>

            {/* Dinner */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-200/80 px-2 py-0.5 rounded-full">
                    Dinner
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">8:00 - 10:00 PM</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
                  Nourishing Dinner
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {activeDay.dinner}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-blue-200/50 text-[11px] text-blue-900 font-medium">
                Cooked fresh every night before service
              </div>
            </div>

          </div>
        </div>

        {/* Tiffin & Hygiene Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Tiffin Packing for Employees & Students
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Heading early to IMT Bawal or coaching institutes? Pack your lunch tiffin right after breakfast without any hassle!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Morning & Evening Hot Masala Chai
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Hot tea in the morning before starting your day, and an evening refreshment cup at 5:00 PM to recharge after work or study.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
