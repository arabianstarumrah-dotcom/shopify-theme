
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <section className="py-20 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h1 className="text-5xl font-bold serif-font uppercase tracking-widest">Our Services</h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Premium ground handling and travel solutions for a seamless Umrah pilgrimage. We focus on luxury, comfort, and reliability.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-lg group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="relative z-10 w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 rounded-full text-[#D4AF37]">
                    {service.icon}
                  </div>
                  <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">Arabian Star Signature</span>
                </div>
                <h2 className="text-4xl font-bold text-[#0A0A0A] serif-font uppercase tracking-wide">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{service.description}"
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Priority Processing", 
                    "24/7 Ground Support", 
                    "Customized Scheduling", 
                    "Verified Documentation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center space-x-2 text-black font-bold tracking-widest text-sm bg-gray-100 hover:bg-[#D4AF37] px-8 py-4 rounded-sm transition-all group">
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gold-gradient py-20 mt-12">
         <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black serif-font uppercase">Tailored Solutions for Your Group?</h2>
            <p className="text-black/80 text-lg">Contact our specialized group travel desk for custom quotes on visa, hotels, and fleet transport.</p>
            <button className="bg-black text-white px-12 py-4 rounded-sm font-bold tracking-widest text-sm hover:opacity-80 transition-all">
               CONSULT WITH AN EXPERT
            </button>
         </div>
      </section>
    </div>
  );
};

export default Services;
