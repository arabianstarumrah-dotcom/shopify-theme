
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1920")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <h2 className="text-[#D4AF37] tracking-[0.4em] text-sm md:text-base font-light uppercase">Welcome to Arabian Star</h2>
          <h1 className="text-5xl md:text-7xl font-bold serif-font leading-[1.1]">
            Your Luxury Umrah <br />
            <span className="gold-gradient">Journey Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
            Complete Umrah solutions including fast visas, 5-star hotels, private transport, and guided Ziyarat tours in Makkah, Madinah & Jeddah.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4 justify-center md:justify-start">
            <button 
              onClick={() => setPage('packages')}
              className="bg-gold-gradient text-black px-10 py-4 rounded-sm font-bold tracking-widest text-sm hover:opacity-90 transition-all shadow-xl"
            >
              BOOK UMRAH NOW
            </button>
            <button 
              onClick={() => window.open('https://wa.me/yournumber', '_blank')}
              className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-sm font-bold tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              CONTACT ON WHATSAPP
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
