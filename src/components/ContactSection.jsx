import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { pgInfo } from '../data/pgData';

export default function ContactSection({ prefilledRoom = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: prefilledRoom || 'Double Sharing (AC / Non-AC)',
    role: 'Student',
    moveInDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number');
      return;
    }

    // Prepare WhatsApp message
    const waText = `Hi Dahiya PG, I want to book a room visit / inquire!%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Room:* ${encodeURIComponent(
      formData.roomType
    )}%0A*Category:* ${encodeURIComponent(formData.role)}%0A*Expected Date:* ${encodeURIComponent(
      formData.moveInDate || 'Immediate'
    )}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`;

    setSubmitted(true);

    // Open WhatsApp
    window.open(`https://wa.me/91${pgInfo.whatsappNumber}?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Phone className="w-4 h-4 text-amber-600" />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Schedule Your Visit to Dahiya PG
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Rooms in our newly opened building are filling quickly! Call directly or submit your details to schedule a physical tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contacts & Highlights */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Phone Card 1 */}
            <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-800 flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Direct Owner & Warden
                </span>
                <div className="mt-1 space-y-1">
                  <a
                    href={`tel:${pgInfo.phones[0]}`}
                    className="text-xl sm:text-2xl font-black font-heading hover:text-amber-400 transition-colors block text-white"
                  >
                    +91 {pgInfo.phones[0]}
                  </a>
                  <a
                    href={`tel:${pgInfo.phones[1]}`}
                    className="text-xl sm:text-2xl font-black font-heading hover:text-amber-400 transition-colors block text-white"
                  >
                    +91 {pgInfo.phones[1]}
                  </a>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-2">
                  Tap any number to call immediately • 24x7 Available
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/91${pgInfo.whatsappNumber}?text=Hi%20Dahiya%20PG%2C%20I%20am%20interested%20in%20room%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold font-heading">
                    Instant WhatsApp Chat
                  </h4>
                  <p className="text-[11px] sm:text-xs text-emerald-100">
                    Get photos, pricing & live location on chat
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white text-emerald-800 px-3 py-1.5 rounded-xl group-hover:scale-105 shrink-0">
                Chat →
              </span>
            </a>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Hostel Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                    <strong>Dahiya PG (Only For Boys)</strong><br />
                    Mata Chowk, Near By Bus Stand & Bawal Chowk,<br />
                    Rewari, Haryana - 123401
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-800 font-bold mt-1.5">
                    📍 Less than 50m walk from Bus Stand & Bawal Chowk!
                  </p>
                </div>
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="bg-amber-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-amber-200/80 flex items-center gap-3.5">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-700 font-medium">
                <strong>Room Visit Timings:</strong> 8:00 AM – 9:00 PM (Monday to Sunday).
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-xl relative">
              
              <div className="mb-5 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-600">
                  Quick Room Reservation
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                  Book a Visit or Reserve a Bed
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill details and we will immediately connect via WhatsApp or direct phone call.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-emerald-900">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. WhatsApp has been opened with your inquiry details. Our manager will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Room Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Room Type
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all bg-white"
                      >
                        <option value="Single Room (AC / Non-AC)">Single Room (AC / Non-AC)</option>
                        <option value="Double Sharing (AC / Non-AC)">Double Sharing (AC / Non-AC)</option>
                        <option value="Triple Sharing (AC / Non-AC)">Triple Sharing (AC / Non-AC)</option>
                      </select>
                    </div>

                    {/* Resident Category */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        You Are A:
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all bg-white"
                      >
                        <option value="Student (Coaching / College)">Student (Coaching / College)</option>
                        <option value="Working Professional (IMT Bawal / Rewari)">Working Professional (IMT Bawal / Rewari)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Move in Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Expected Move-In Date
                    </label>
                    <input
                      type="date"
                      value={formData.moveInDate}
                      onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Any Questions / Requests (Optional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Inquiring for AC room starting next week..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 active:scale-98 text-white font-black text-sm sm:text-base shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are strictly confidential. No spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
