import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { galleryImages } from '../data/pgData';

export default function ImageModal({ activeImageUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeImageUrl) return null;

  const currentItem = galleryImages.find((img) => img.url === activeImageUrl) || {
    title: 'Dahiya PG Premise',
    desc: 'Real picture of Dahiya PG at Mata Chowk, Rewari',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="truncate pr-2">
            <h4 className="text-white font-bold text-sm sm:text-base font-heading truncate">
              {currentItem.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-400 truncate">
              {currentItem.desc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 bg-black/40 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <img
            src={activeImageUrl}
            alt={currentItem.title}
            loading="eager"
            decoding="async"
            className="max-w-full max-h-[60vh] sm:max-h-[72vh] object-contain rounded-lg sm:rounded-xl shadow-2xl"
          />
        </div>

        {/* Footer Tag */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Dahiya PG • Mata Chowk, Rewari (50m from Bus Stand)
          </span>
          <span className="text-slate-500 hidden sm:inline">Click outside or press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
