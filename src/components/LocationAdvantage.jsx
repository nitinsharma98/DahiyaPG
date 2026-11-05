import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Bus,
  Train,
  Compass,
  ShoppingBag,
  GraduationCap,
  Building2,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { pgInfo, locationPerks } from '../data/pgData';

export default function LocationAdvantage() {
  const [showMap, setShowMap] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window));
  const mapRef = useRef(null);

  useEffect(() => {
    if (showMap || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, [showMap]);

  const iconMap = {
    Bus,
    Compass,
    Train,
    ShoppingBag,
    GraduationCap,
    Building2,
  };

  return (
    <section id="location" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Compass className="w-4 h-4 text-amber-600" />
            Strategic Prime Location
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            50-Meter Radius from Bus Stand & Bawal Chowk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Positioned at <strong>Mata Chowk, Rewari</strong>, you are in the prime hub of the city. Catch local, intercity buses, company shuttles, or walk into the main market in seconds.
          </p>
        </div>

        {/* Location Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {locationPerks.map((perk, idx) => {
            const Icon = iconMap[perk.icon] || MapPin;
            const isHighlight = idx < 2; // Bus stand and Bawal chowk are 50m

            return (
              <div
                key={idx}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-br from-amber-500/10 via-white to-amber-50 border-amber-400 shadow-md ring-1 ring-amber-300'
                    : 'bg-slate-50 hover:bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm sm:text-base font-black text-slate-900 font-heading block">
                        {perk.dist}
                      </span>
                      <span className="text-[11px] font-bold text-amber-600">
                        {perk.time}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>

                {isHighlight && (
                  <div className="mt-3.5 pt-2.5 border-t border-amber-200/80 text-[11px] font-bold text-amber-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
                    Walking Distance (50m Radius)
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Embedded Interactive Google Map & Address Section */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Address Details & Transit Guide */}
          <div className="lg:col-span-5 p-6 sm:p-10 text-white flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full mb-3">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Live Map Location
              </div>

              <h3 className="text-xl sm:text-3xl font-black font-heading leading-tight">
                Mata Chowk, Near By Bus Stand, Rewari
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Haryana - 123401. Walking distance from Rewari Main Bus Stand entrance and Bawal Chowk roundabout.
              </p>

              <div className="mt-5 space-y-2.5 pt-3.5 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bus Stand:</span>
                  <span className="font-bold text-emerald-400">50 meters (1 min walk)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bawal Chowk:</span>
                  <span className="font-bold text-emerald-400">50 meters (1 min walk)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Railway Station:</span>
                  <span className="font-bold text-amber-400">1.8 Km (5 mins ride)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">City Main Market:</span>
                  <span className="font-bold text-slate-200">100 meters (2 min walk)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="https://maps.google.com/?q=Mata+Chowk,+Rewari,+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Need navigation help? Call us at <strong className="text-white">{pgInfo.phones[0]}</strong>
              </p>
            </div>
          </div>

          {/* Embedded Google Map (Lazy loaded on scroll) */}
          <div ref={mapRef} className="lg:col-span-7 h-[300px] sm:h-[380px] lg:h-auto min-h-[300px] w-full bg-slate-900 relative">
            {showMap ? (
              <>
                <iframe
                  title="Dahiya PG Location Mata Chowk Rewari"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.064506826645!2d76.6133!3d28.1926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d507bfa7c5c0d%3A0x1efd3683f81014e0!2sMata%20Chowk%2C%20Rewari%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale-[10%] contrast-[105%]"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Map Pin Marker Overlay badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                  Dahiya PG • Mata Chowk Rewari
                </div>
              </>
            ) : (
              <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-950/50">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-300">Dahiya PG Location</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Mata Chowk, Rewari</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
