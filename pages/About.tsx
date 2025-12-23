
import React from 'react';
import { Star, Clock, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1920")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white serif-font uppercase tracking-widest">Who We Are</h1>
          <p className="text-[#D4AF37] tracking-[0.3em] font-light uppercase">Legacy of Trust and Service</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#0A0A0A] serif-font leading-tight">Providing Complete Umrah Ground Services with Devotion.</h2>
            <div className="w-20 h-1 bg-[#D4AF37]" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Arabian Star Umrah Services is a premium provider of specialized pilgrimage services. We understand that Umrah is more than just a trip—it is a spiritual milestone. That is why we dedicate ourselves to ensuring every detail of your journey is handled with professional care.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From the moment you start your visa application to your final farewell in Makkah, we are with you. Our team is local, experienced, and committed to providing a peaceful and memorable experience for every pilgrim.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <span className="text-3xl font-bold text-[#D4AF37] serif-font">15+</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-bold text-[#D4AF37] serif-font">50k+</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Pilgrims Served</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-[#D4AF37]/20 rounded-lg translate-x-8 translate-y-8 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800" 
              alt="About Us" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-[#0A0A0A] serif-font">The Arabian Star Standard</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Clock />, title: "24/7 Support", desc: "Our team is available round-the-clock for any ground assistance." },
              { icon: <Users />, title: "Trusted Team", desc: "Local experts who know every corner of Makkah and Madinah." },
              { icon: <Star />, title: "Luxury Options", desc: "Access to premium 5-star properties and VIP transport." },
              { icon: <Heart />, title: "Spiritual Guided", desc: "Expert guides for Ziyarat to enrich your religious understanding." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:border-[#D4AF37]/50 transition-all text-center group">
                <div className="text-[#D4AF37] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {React.cloneElement(value.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h4 className="text-xl font-bold mb-4 serif-font uppercase tracking-wide">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
