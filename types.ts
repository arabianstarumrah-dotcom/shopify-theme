
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  category: 'visa' | 'hotel' | 'transport' | 'ziyarat';
}

export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  imageUrl: string;
  tag: 'Luxury' | 'Economy' | 'Popular';
}

export type Page = 'home' | 'about' | 'services' | 'packages' | 'contact';
