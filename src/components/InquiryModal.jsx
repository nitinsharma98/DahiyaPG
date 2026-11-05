import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MapPin } from 'lucide-react';
import { pgInfo } from '../data/pgData';

export default function InquiryModal({ isOpen, onClose, initialRoom = '' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('Double Sharing (AC / Non-AC)');
  const [role, setRole] = useState('Student');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialRoom) {
      const timer = setTimeout(() => {
        setRoomType(initialRoom);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [initialRoom]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your name and phone number');
      return;
    }

    const waText = `Hi Dahiya PG, I want to book a physical visit / inquire for a bed!%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Selected Room:* ${encodeURIComponent(
      roomType
    )}%0A*Category:* ${encodeURIComponent(role)}%0A*Preferred Visit Date:* ${encodeURIComponent(
      preferredDate || 'Earliest Possible'
    )}`;

    setIsSuccess(true);
    window.open(`https://wa.me/91${pgInfo.whatsappNumber}?text=${waText}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Room Inquiry Modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Dahiya PG • Boys Only
            </span>
            <h3 className="text-lg sm:text-xl font-black font-heading mt-0.5">
              Schedule Free Room Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content with scroll on small screens */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                Inquiry Generated!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                WhatsApp has been launched with your booking summary. You can also call directly at{' '}
                <strong className="text-slate-900">{pgInfo.phones[0]}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Room Type
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-amber-500 outline-hidden"
                  >
                    <option value="Single Room (AC / Non-AC)">Single Room</option>
                    <option value="Double Sharing (AC / Non-AC)">Double Sharing</option>
                    <option value="Triple Sharing (AC / Non-AC)">Triple Sharing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Occupation
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-amber-500 outline-hidden"
                  >
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 active:scale-98 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Send on WhatsApp</span>
              </button>

              <div className="pt-2 text-center text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                Mata Chowk, Near By Bus Stand (50m), Rewari
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
