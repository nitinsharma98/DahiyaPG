import React, { useState } from 'react';
import { Camera, Eye, CheckCircle2 } from 'lucide-react';
import { galleryImages } from '../data/pgData';

export default function Gallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Rooms', 'Premises', 'Amenities'];

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Camera className="w-4 h-4 text-amber-600" />
            Photo Tour
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Take a Look Inside Dahiya PG
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Real photos of our premises: wide tiled corridors, heavy steel lockers, solid beds, and official verified banners.
          </p>

          {/* Genuine photo guarantee */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-3.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            100% Real Pictures of Dahiya PG
          </div>
        </div>

        {/* Filter Tabs - Mobile scrollable */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-2xl shadow-xs border border-slate-200 flex gap-1 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => onSelectImage(image.url)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl active:scale-99 transition-all duration-300 cursor-pointer"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Pill */}
                <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {image.category}
                </span>

                {/* Mobile tap indicator */}
                <div className="absolute bottom-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 sm:hidden">
                  <Eye className="w-3 h-3 text-amber-400" />
                  Tap to Zoom
                </div>

                {/* Desktop Hover Overlay */}
                <div className="hidden sm:flex absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
                  <div className="bg-white/95 text-slate-900 font-bold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4 text-amber-600" />
                    Click to Enlarge
                  </div>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  {image.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
