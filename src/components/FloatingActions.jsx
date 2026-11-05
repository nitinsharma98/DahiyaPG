import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { pgInfo } from '../data/pgData';

export default function FloatingActions({ onOpenInquiry }) {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-2 sm:bottom-6 inset-x-2 sm:inset-x-auto sm:right-6 z-40 flex items-center justify-center sm:justify-end"
    >
      {/* Mobile Sticky Bar - High-Converting 3-Action Thumb Bar */}
      <div className="flex sm:hidden w-full bg-slate-950/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-slate-800 gap-1.5 items-center">
        {/* Call Button */}
        <a
          href={`tel:${pgInfo.phones[0]}`}
          className="flex-1 py-3 px-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md border border-slate-700 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hi%20Dahiya%20PG%2C%20I%20want%20to%20inquire%20about%20room%20availability%20at%20Mata%20Chowk%20Rewari.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Visit Button */}
        <button
          onClick={onOpenInquiry}
          className="flex-1 py-3 px-2 bg-gradient-to-r from-amber-600 to-amber-500 active:scale-95 text-white rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Book Visit</span>
        </button>
      </div>

      {/* Desktop Floating Badges */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href={`tel:${pgInfo.phones[0]}`}
          className="group px-4 py-3 bg-slate-900 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-xl hover:bg-slate-800 transition-all hover:scale-105 border border-slate-700"
        >
          <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </span>
          <span>Call {pgInfo.phones[0]}</span>
        </a>

        <a
          href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hi%20Dahiya%20PG%2C%20I%20am%20interested%20in%20room%20inquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-4 py-3 bg-emerald-600 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-xl hover:bg-emerald-700 transition-all hover:scale-105 border border-emerald-500"
        >
          <span className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </span>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </aside>
  );
}
