
import React from 'react';
import { ShieldCheck, Hotel, Car, MapPin, Globe } from 'lucide-react';
import { Service, Package } from './types';

export const COLORS = {
  gold: '#D4AF37',
  navy: '#001F3F',
  black: '#0A0A0A',
  white: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Umrah Visa Services',
    description: 'Fast, secure, and reliable visa processing for individuals and groups worldwide.',
    icon: <ShieldCheck className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800',
    category: 'visa'
  },
  {
    id: '2',
    title: '5-Star Hotel Bookings',
    description: 'Exclusive stays at the most prestigious hotels in Makkah and Madinah with views of the Haram.',
    icon: <Hotel className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    category: 'hotel'
  },
  {
    id: '3',
    title: 'Economy Accommodations',
    description: 'Comfortable and affordable lodging options within walking distance of the holy mosques.',
    icon: <Hotel className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    category: 'hotel'
  },
  {
    id: '4',
    title: 'Private Luxury Transport',
    description: 'Seamless transfers from Jeddah to Makkah, Madinah, and back in premium luxury vehicles.',
    icon: <Car className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    category: 'transport'
  },
  {
    id: '5',
    title: 'Guided Ziyarat Tours',
    description: 'Explore the historical sites of Makkah and Madinah with expert multilingual guides.',
    icon: <MapPin className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    category: 'ziyarat'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    name: 'Platinum 5-Star Journey',
    price: 'From $2,499',
    duration: '10 Days / 9 Nights',
    description: 'A spiritual experience defined by luxury and proximity.',
    features: ['5-Star Hotels', 'Private GMC Transport', 'VIP Visa Service', 'Gourmet Meals'],
    imageUrl: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=800',
    tag: 'Luxury'
  },
  {
    id: 'p2',
    name: 'Spiritual Heritage Tour',
    price: 'From $1,599',
    duration: '14 Days / 13 Nights',
    description: 'Focus on devotion and history with extended Ziyarat tours.',
    features: ['4-Star Hotels', 'Shared Transport', 'Full Ziyarat Program', 'Visa Support'],
    imageUrl: 'https://images.unsplash.com/photo-1565552155433-358b2146860a?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular'
  },
  {
    id: 'p3',
    name: 'Essential Umrah Package',
    price: 'From $999',
    duration: '7 Days / 6 Nights',
    description: 'Perfect for a short, meaningful pilgrimage with essential services.',
    features: ['Economy Hotels', 'Bus Transport', 'Visa Processing', '24/7 Support'],
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800',
    tag: 'Economy'
  }
];
