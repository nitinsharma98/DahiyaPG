import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import FoodSchedule from './components/FoodSchedule';
import LocationAdvantage from './components/LocationAdvantage';
import Gallery from './components/Gallery';
import StudentEmployeeSuitability from './components/StudentEmployeeSuitability';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ImageModal from './components/ImageModal';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryRoomType, setInquiryRoomType] = useState('');

  // Lock background scroll when any modal is open
  useEffect(() => {
    if (selectedImage || isInquiryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage, isInquiryModalOpen]);

  const handleOpenInquiry = (roomName = '') => {
    setInquiryRoomType(typeof roomName === 'string' ? roomName : '');
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-amber-500 selection:text-white relative pb-20 sm:pb-0">
      {/* Top Mobile-First Navbar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onSelectImage={(url) => setSelectedImage(url)}
        />

        {/* About Section */}
        <About
          onSelectImage={(url) => setSelectedImage(url)}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Room Types & Pricing */}
        <Rooms
          onOpenInquiry={(room) => handleOpenInquiry(room)}
          onSelectImage={(url) => setSelectedImage(url)}
        />

        {/* Facilities & Amenities */}
        <Facilities />

        {/* 7-Day Homely Food & Meal Schedule */}
        <FoodSchedule />

        {/* Location Advantage & Live Map */}
        <LocationAdvantage />

        {/* Real Photo Gallery */}
        <Gallery onSelectImage={(url) => setSelectedImage(url)} />

        {/* Tailored for Students & Employees */}
        <StudentEmployeeSuitability onOpenInquiry={(type) => handleOpenInquiry(type)} />

        {/* FAQs */}
        <FAQ />

        {/* Direct Contact & Visit Booking */}
        <ContactSection prefilledRoom={inquiryRoomType} />
      </main>

      {/* Rich Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Mobile-First Floating Sticky Bar & Action Buttons */}
      <FloatingActions onOpenInquiry={() => handleOpenInquiry()} />

      {/* Image Lightbox Modal */}
      <ImageModal
        activeImageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Room Reservation / Visit Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        initialRoom={inquiryRoomType}
      />
    </div>
  );
}
