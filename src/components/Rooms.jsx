import React from 'react';
import { BedDouble, Check, Sparkles, MessageCircle, Info } from 'lucide-react';
import { roomTypes, pgInfo } from '../data/pgData';

export default function Rooms({ onOpenInquiry, onSelectImage }) {
  const roomImages = {
    single: '/images/room-lockers.jpg',
    double: '/images/room-beds.jpg',
    triple: '/images/room-beds-2.jpg',
  };

  return (
    <section id="rooms" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <BedDouble className="w-4 h-4 text-amber-600" />
            Comfortable Accommodations
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Single, Double & Triple Sharing Rooms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            All rooms are newly constructed and fully furnished with solid wooden beds, clean mattresses, individual heavy-duty steel almirahs, and bedside sockets. Available in both <strong className="text-slate-800">AC & Non-AC</strong> options.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {roomTypes.map((room) => {
            const isFeatured = room.id === 'double';
            const roomImg = roomImages[room.id] || '/images/room-beds.jpg';

            return (
              <div
                key={room.id}
                className={`relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  isFeatured
                    ? 'border-amber-500 shadow-lg ring-1 ring-amber-400/40 md:-translate-y-2'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-3 right-3 z-10 bg-amber-500 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Most Demanded
                  </div>
                )}

                {/* Top Image Preview */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 group">
                  <img
                    src={roomImg}
                    alt={`${room.name} Dahiya PG`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => onSelectImage(roomImg)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-[11px] font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {room.type}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {room.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1.5">
                      {room.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-3.5">
                      {room.subtitle}
                    </p>

                    {/* Pricing guidance */}
                    <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-200/80">
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Monthly Rent (Food + Wi-Fi Included)
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                          {room.priceEstimate}
                        </span>
                        <span className="text-xs text-slate-500">/ month</span>
                      </div>
                      <p className="text-[11px] text-amber-700 font-semibold mt-1">
                        * AC & Non-AC options • Call for special discounts
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        What's Included:
                      </div>
                      {room.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best for */}
                    <div className="bg-amber-50/60 rounded-xl p-2.5 text-xs text-amber-900 border border-amber-200/60 mb-5 flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Recommended for:</strong> {room.recommendedFor}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <button
                      onClick={() => onOpenInquiry(room.name)}
                      className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-amber-500/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Inquire / Reserve Room
                    </button>

                    <a
                      href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(room.name)}%20at%20Dahiya%20PG%20Rewari.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Ask Availability on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Zero Brokerage */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            🔔 <strong className="text-amber-700 font-black">Direct Owner Deal:</strong> Zero brokerage, no hidden charges. Flexible payment terms with clear receipts.
          </p>
          <div className="mt-1.5 text-[11px] sm:text-xs text-slate-500">
            For custom quotes or group reservations, call directly at{' '}
            <a href={`tel:${pgInfo.phones[0]}`} className="font-bold text-slate-900 underline">
              {pgInfo.phones[0]}
            </a>{' '}
            or{' '}
            <a href={`tel:${pgInfo.phones[1]}`} className="font-bold text-slate-900 underline">
              {pgInfo.phones[1]}
            </a>
            .
          </div>
        </div>

      </div>
    </section>
  );
}
