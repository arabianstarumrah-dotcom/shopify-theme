
import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Packages', value: 'packages' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-[#D4AF37]" fill="#D4AF37" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-white leading-tight serif-font">ARABIAN STAR</span>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.2em] font-light">UMRAH SERVICES</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setPage(link.value)}
                  className={`${
                    currentPage === link.value 
                      ? 'text-[#D4AF37]' 
                      : 'text-gray-300 hover:text-[#D4AF37]'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-widest`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                className="bg-[#D4AF37] text-[#0A0A0A] px-6 py-2 rounded-sm text-sm font-bold hover:bg-[#B38728] transition-colors"
              >
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#D4AF37]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  setPage(link.value);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
