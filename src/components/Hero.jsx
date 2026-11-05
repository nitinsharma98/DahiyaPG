import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, CheckCircle2, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { pgInfo, stats } from '../data/pgData';

export default function Hero({ onOpenInquiry, onSelectImage }) {
  const [activeHeroImg, setActiveHeroImg] = useState('/images/corridor.jpg');

  const heroThumbnails = [
    { url: '/images/corridor.jpg', label: 'Corridor' },
    { url: '/images/room-beds.jpg', label: 'Twin Beds' },
    { url: '/images/room-lockers.jpg', label: 'Lockers' },
    { url: '/images/pg-banner.jpg', label: 'PG Board' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-slate-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-xs">
                <Sparkles className="w-3 h-3" />
                Newly Opened
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                Exclusive For Boys
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Admissions Open 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Clean & Comfortable Living at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                Dahiya PG
              </span>{' '}
              Rewari
            </h1>

            {/* Subheading / Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Brand new, sparkling clean paying guest hostel for{' '}
              <strong className="text-slate-900 font-bold">boys & working professionals</strong> at{' '}
              <strong className="text-slate-900 font-bold">Mata Chowk</strong>. Just a{' '}
              <span className="bg-amber-100 text-amber-950 px-1.5 py-0.5 rounded font-bold">
                1-minute walk (50m)
              </span>{' '}
              from Rewari Bus Stand & Bawal Chowk, and{' '}
              <span className="font-bold text-slate-900">1.8 km</span> from Railway Station.
            </p>

            {/* Quick feature highlights checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1">
              {[
                'Single, Double, Triple Rooms',
                'AC & Non-AC Options',
                '24x7 CCTV Surveillance',
                'High-Speed Wi-Fi Internet',
                '3 Homely Meals + Tea Mess',
                'RO Cold & Normal Water',
                'Personal Steel Lockers',
                'Daily Room Cleaning',
                'First-Aid Medical Kit',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs - Mobile-First Layout */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 active:scale-98 text-white font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <span>Book a Free Room Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2">
                <a
                  href={`tel:${pgInfo.phones[0]}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call {pgInfo.phones[0]}</span>
                </a>

                <a
                  href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hello%20Dahiya%20PG%2C%20I%20am%20interested%20in%20room%20availability%20and%20rates.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location quick summary */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Address:</strong> Mata Chowk, Near By Bus Stand & Bawal Chowk, Rewari
              </span>
            </div>
          </div>

          {/* Right Column: Real Photos Showcase */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-slate-200">
              
              {/* Main Featured Photo Box */}
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 group">
                <img
                  src={activeHeroImg}
                  alt="Dahiya PG Rewari Real Premises"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Real Pictures of Dahiya PG
                </div>

                {/* Zoom / Lightbox Trigger */}
                <button
                  onClick={() => onSelectImage(activeHeroImg)}
                  className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-slate-900 text-[11px] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-md transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-600" />
                  Enlarge
                </button>

                {/* Floating Bottom Info Tag */}
                <div className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-md">
                  📍 Mata Chowk, Rewari
                </div>
              </div>

              {/* Thumbnails to switch hero preview */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                {heroThumbnails.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHeroImg(item.url)}
                    className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                      activeHeroImg === item.url
                        ? 'border-amber-500 ring-2 ring-amber-400/50 scale-102'
                        : 'border-slate-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={item.url} alt={item.label} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-[9px] sm:text-[10px] text-white font-bold py-0.5 truncate text-center px-0.5">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Trust Callout */}
              <div className="mt-2.5 pt-2.5 sm:mt-3.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                <span className="flex items-center gap-1 font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Ready to Move-in
                </span>
                <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                  Zero Brokerage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip - Mobile-Friendly 2x2 grid */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-slate-200 shadow-xs hover:border-amber-400 transition-colors"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-heading">
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-amber-600 mt-0.5 truncate">
                {s.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
