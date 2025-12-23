
import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, PACKAGES } from '../constants';
import JourneyPlanner from '../components/JourneyPlanner';
import { Page } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero setPage={setPage} />

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">Our Core Pillars</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] serif-font">The Ultimate Umrah Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group p-8 text-center border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-300 rounded-lg bg-gray-50/50"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-white shadow-sm text-[#D4AF37] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0A0A0A] mb-3 serif-font uppercase tracking-wider">{service.title.split(' ')[0]}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">Special Offers</h2>
              <h3 className="text-4xl md:text-5xl font-bold serif-font">Featured Packages</h3>
            </div>
            <button 
              onClick={() => setPage('packages')}
              className="flex items-center space-x-2 text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all text-sm font-bold tracking-widest"
            >
              <span>VIEW ALL PACKAGES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="group relative overflow-hidden rounded-lg bg-[#111] border border-white/5 hover:border-[#D4AF37]/40 transition-all shadow-2xl">
                <div className="h-72 overflow-hidden">
                  <img 
                    src={pkg.imageUrl} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                      {pkg.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold serif-font">{pkg.name}</h4>
                    <p className="text-[#D4AF37] font-bold text-lg">{pkg.price}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">{pkg.duration}</p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-bold text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
                    PACKAGE DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Planner Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JourneyPlanner />
        </div>
      </section>
      
      {/* Testimonial / Trust Bar */}
      <section className="py-16 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 uppercase tracking-[0.5em] text-xs font-bold mb-10">Trusted by thousands of pilgrims worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale filter">
               <img src="https://picsum.photos/200/50?random=1" alt="partner" className="mx-auto" />
               <img src="https://picsum.photos/200/50?random=2" alt="partner" className="mx-auto" />
               <img src="https://picsum.photos/200/50?random=3" alt="partner" className="mx-auto" />
               <img src="https://picsum.photos/200/50?random=4" alt="partner" className="mx-auto" />
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
