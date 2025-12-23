
import React from 'react';
import { Star, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-[#D4AF37]" fill="#D4AF37" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest serif-font">ARABIAN STAR</span>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.2em] font-light">UMRAH SERVICES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing premium Umrah ground services with trusted visa processing, 5-star hotels, and private transport. Your spiritual journey is our priority.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-6 tracking-widest text-sm uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Visa Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hotel Bookings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ziyarat Tours</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-6 tracking-widest text-sm uppercase">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-6 tracking-widest text-sm uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>King Abdulaziz Rd, Jeddah, KSA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+966 500 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>info@arabianstarumrah.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Arabian Star Umrah Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
