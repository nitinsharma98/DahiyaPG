import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { pgInfo } from '../data/pgData';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-8 sm:pt-16 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shrink-0">
                D
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-heading">
                  DAHIYA <span className="text-amber-500">PG</span>
                </span>
                <span className="bg-red-950 text-red-400 border border-red-800/80 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shrink-0">
                  Boys Only
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Newly opened premium Boys PG situated at Mata Chowk, Rewari. Providing high-speed Wi-Fi, AC/Non-AC rooms, 24x7 CCTV security, pure vegetarian hygienic mess, and daily housekeeping in a peaceful environment.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                50m from Bus Stand
              </span>
              <span className="text-[11px] sm:text-xs bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                50m from Bawal Chowk
              </span>
              <span className="text-[11px] sm:text-xs bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                1.8km from Railway Station
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About PG
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Room Options
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Facilities & Amenities
                </a>
              </li>
              <li>
                <a href="#food" className="hover:text-amber-400 transition-colors">
                  Weekly Food Menu
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms & Occupancy */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              Room Occupancy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>• Single Occupancy AC Room</li>
              <li>• Single Occupancy Non-AC Room</li>
              <li>• Double Sharing AC Room</li>
              <li>• Double Sharing Non-AC Room</li>
              <li>• Triple Sharing AC Room</li>
              <li>• Triple Sharing Non-AC Room</li>
              <li>• Personal Steel Lockers with Key</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Mata Chowk, Near By Bus Stand & Bawal Chowk, Rewari, Haryana - 123401
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="space-x-1.5">
                  <a href={`tel:${pgInfo.phones[0]}`} className="text-white font-bold hover:text-amber-400">
                    {pgInfo.phones[0]}
                  </a>
                  <span>/</span>
                  <a href={`tel:${pgInfo.phones[1]}`} className="text-white font-bold hover:text-amber-400">
                    {pgInfo.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hi%20Dahiya%20PG%2C%20I%20am%20inquiring%20about%20room%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  WhatsApp Chat (Click here)
                </a>
              </div>
            </div>

            <button
              onClick={onOpenInquiry}
              className="mt-2 w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Book Physical Room Visit
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
          <p>© {currentYear} Dahiya PG Rewari. All Rights Reserved. Exclusively For Boys.</p>
          <div className="flex items-center gap-2">
            <span>Clean, Safe & Comfortable Living</span>
            <span>•</span>
            <span>Mata Chowk, Rewari</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
