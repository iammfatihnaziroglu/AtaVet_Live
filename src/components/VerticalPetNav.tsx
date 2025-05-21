'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VerticalPetNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Check URL to set active category
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const searchParams = new URL(url).searchParams;
      const animalParam = searchParams.get('animal');

      if (animalParam === 'kediler') setActiveCategory('kediler');
      else if (animalParam === 'kopekler') setActiveCategory('kopekler');
      else if (animalParam === 'kuslar' || animalParam === 'tavsan' || animalParam === 'diger') setActiveCategory('egzotik');
    }
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Oval frame containing buttons - Increased size */}
      <div className="bg-white/80 dark:bg-foreground/10 backdrop-blur-md rounded-full py-4 px-3 shadow-lg border border-light-gray/50 dark:border-light-gray/20 flex flex-col items-center gap-3 relative overflow-visible hover:shadow-xl transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Title label at top - Made larger */}
        <div className="text-xs font-medium text-primary mb-1 rounded-full px-3 py-1 bg-white border border-primary/80 tracking-wider text-center">
          Öyküler
        </div>
        
        {/* Divider - Made larger */}
        <div className="h-[1px] w-8 bg-primary/20 rounded-full mb-1"></div>
        
        {/* Cat Button */}
        <div className="relative z-10 group">
          <Link 
            href="/oykulerimiz?animal=kediler#stories" 
            className={`flex items-center justify-center w-12 h-12 ${activeCategory === 'kediler' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2.5 transition-all duration-300 hover:scale-110`}
            title="Kedi Öyküleri"
          >
            <span className="text-2xl">🐱</span>
          </Link>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-white border border-primary backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap  opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 z-[100]">
            <span className="text-[#E31E24] font-medium">Kedi Öyküleri</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white backdrop-blur-sm rotate-45 border-r border-t border-primary"></div>
          </div>
          {activeCategory === 'kediler' && (
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>
        
        {/* Dog Button */}
        <div className="relative z-10 group">
          <Link 
            href="/oykulerimiz?animal=kopekler#stories" 
            className={`flex items-center justify-center w-12 h-12 ${activeCategory === 'kopekler' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2.5 transition-all duration-300 hover:scale-110`}
            title="Köpek Öyküleri"
          >
            <span className="text-2xl">🐶</span>
          </Link>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-white backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 z-[100]">
            <span className="text-[#E31E24] font-medium">Köpek Öyküleri</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white backdrop-blur-sm rotate-45 border-r border-t border-primary"></div>
          </div>
          {activeCategory === 'kopekler' && (
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>

        {/* Exotic Button (formerly Bird Button) */}
        <div className="relative z-10 group">
          <Link 
            href="/oykulerimiz?animal=kuslar#stories" 
            className={`flex items-center justify-center w-12 h-12 ${activeCategory === 'egzotik' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2.5 transition-all duration-300 hover:scale-110`}
            title="Egzotik Hayvan Öyküleri"
          >
            <span className="text-2xl">🦜</span>
          </Link>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-white backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 z-[100]">
            <span className="text-[#E31E24] font-medium">Egzotik Hayvan Öyküleri</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white backdrop-blur-sm rotate-45 border-r border-t border-primary"></div>
          </div>
          {activeCategory === 'egzotik' && (
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>
        
        {/* Decorative divider - Made larger */}
        <div className="h-[1px] w-8 bg-primary/20 rounded-full my-1"></div>
        
        {/* All Animals Button */}
        <div className="relative z-10 group">
          <Link 
            href="/oykulerimiz#stories" 
            className="group flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full shadow-md border border-light-gray p-2.5 transition-all duration-300 hover:scale-110"
            title="Tüm Hayvan Öyküleri"
          >
            <span className="text-2xl">🐾</span>
          </Link>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-white backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 z-[100]">
            <span className="text-[#E31E24] font-medium">Tüm Hayvan Öyküleri</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white backdrop-blur-sm rotate-45 border-r border-t border-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 