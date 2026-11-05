import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Calendar,
  MapPin,
  ChevronRight,
  BedDouble,
  Utensils,
  ShieldCheck,
  Camera,
  Info,
} from 'lucide-react';
import { pgInfo } from '../data/pgData';

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About PG', href: '#about', icon: Info, desc: 'Why choose Dahiya PG' },
    { name: 'Rooms & Rent', href: '#rooms', icon: BedDouble, desc: 'Single, Double, Triple' },
    { name: 'Facilities', href: '#facilities', icon: ShieldCheck, desc: 'Wi-Fi, AC, RO, CCTV' },
    { name: 'Food Mess', href: '#food', icon: Utensils, desc: '7-Day Homely Menu' },
    { name: 'Location 50m', href: '#location', icon: MapPin, desc: 'Near Bus Stand & Bawal Chowk' },
    { name: 'Photos Gallery', href: '#gallery', icon: Camera, desc: '100% Real Pictures' },
    { name: 'Contact & Visit', href: '#contact', icon: Phone, desc: 'Map & Instant Booking' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 relative transition-all duration-200 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/90'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200'
      }`}
    >
      {/* Top Micro-Bar (Ultra-compact, perfect down to 320px) */}
      <div className="bg-slate-900 text-slate-200 text-[11px] py-1 px-2.5 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5">
          {/* Left: Status & Boys badge */}
          <div className="flex items-center gap-1.5 truncate">
            <span className="inline-flex items-center gap-1 font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 px-1.5 py-0.2 rounded-full text-[9px] sm:text-[10px] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {pgInfo.status}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-300 truncate">
              <strong className="text-amber-400 font-bold">{pgInfo.category}</strong>
              <span className="hidden xs:inline text-slate-400"> • Mata Chowk, Rewari</span>
            </span>
          </div>

          {/* Right: Instant Phone Call */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${pgInfo.phones[0]}`}
              className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 text-[10px] sm:text-xs bg-slate-800/80 hover:bg-slate-800 px-2 py-0.5 rounded-md transition-colors"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 shrink-0" />
              <span>{pgInfo.phones[0]}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href={`tel:${pgInfo.phones[1]}`}
              className="hidden md:inline text-slate-300 hover:text-amber-300 text-xs font-medium transition-colors"
            >
              {pgInfo.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18">
          
          {/* Brand Logo - Designed for 320px+ with zero overflow */}
          <a href="#" className="flex items-center gap-2 group min-w-0 pr-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 flex items-center justify-center text-white shadow-sm shadow-amber-600/30 group-hover:scale-105 transition-transform shrink-0">
              <span className="text-base sm:text-lg font-black tracking-tight">D</span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 font-heading leading-tight truncate">
                  DAHIYA <span className="text-amber-600">PG</span>
                </span>
                <span className="bg-red-50 text-red-700 text-[9px] font-black px-1.5 py-0.2 rounded border border-red-200 uppercase shrink-0">
                  Boys
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate leading-tight mt-0.5 max-w-[150px] xs:max-w-[210px] sm:max-w-none">
                50m from Bus Stand & Bawal Chowk
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hello%20Dahiya%20PG%2C%20I%20am%20interested%20in%20room%20inquiry%20at%20Mata%20Chowk%20Rewari.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-xs font-bold shadow-md shadow-amber-600/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Room Visit</span>
            </button>
          </div>

          {/* Mobile Right Controls - Compact & touch-optimized for 320px */}
          <div className="lg:hidden flex items-center gap-1.5 shrink-0">
            {/* Quick Visit CTA Pill */}
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 active:from-amber-700 active:to-amber-600 text-white font-extrabold text-[11px] sm:text-xs shadow-xs cursor-pointer transition-transform active:scale-95"
            >
              <Calendar className="w-3 h-3 shrink-0" />
              <span>Visit</span>
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer border border-slate-200/80"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-600" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (App-like, super clean on 320px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[76px] sm:top-[96px] bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down Drawer Body */}
          <div className="relative z-10 bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100dvh-80px)] overflow-y-auto animate-in slide-in-from-top-4">
            
            {/* Location & Status Banner */}
            <div className="bg-amber-50/70 border-b border-amber-200/60 px-3.5 py-2.5 flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-amber-900">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                Mata Chowk, Rewari (50m to Bus Stand)
              </span>
              <span className="bg-emerald-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Open
              </span>
            </div>

            {/* Quick Navigation Links List */}
            <nav className="p-2.5 sm:p-4 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 active:bg-amber-100/80 text-slate-800 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-amber-500 group-hover:text-white text-slate-600 flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                          {link.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium truncate">
                          {link.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 shrink-0 transition-colors" />
                  </a>
                );
              })}
            </nav>

            {/* Bottom Call to Actions Panel */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${pgInfo.phones[0]}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-900 active:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs active:scale-98 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Call Warden</span>
                </a>

                <a
                  href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hello%20Dahiya%20PG%2C%20I%20am%20interested%20in%20room%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs active:scale-98 transition-transform"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-xl text-xs sm:text-sm font-black shadow-md shadow-amber-600/25 active:scale-98 transition-transform flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Schedule Free Physical Room Visit</span>
              </button>

              <div className="text-center pt-1">
                <span className="text-[10px] text-slate-400 font-medium">
                  Direct Owner Booking • Zero Brokerage
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
