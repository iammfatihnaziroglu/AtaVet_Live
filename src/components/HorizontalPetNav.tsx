'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HorizontalPetNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  // Footer görünürlüğünü kontrol et
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isVisible = footerRect.top <= window.innerHeight;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`transition-all duration-300 ${isMenuOpen ? 'bg-foreground/20 backdrop-blur-md border-t border-gray-100' : ''} shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] `}>
        <div className="container mx-auto px-2">
          {/* Ana Menü Butonu */}
          <div className="flex -mb-1 justify-center py-1.5">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 text-xs font-medium"
            >
              <span>Dostlarımızın Öyküleri</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
              >
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Kategori Menüsü */}
          <div className={`grid grid-cols-4 gap-1 pb-2 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <Link 
              href="/oykulerimiz?animal=kediler#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'kediler' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'kediler' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <span className="text-xl">🐱</span>
              </div>
              <span className="text-[10px] mt-1 font-medium">Kediler</span>
            </Link>

            <Link 
              href="/oykulerimiz?animal=kopekler#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'kopekler' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'kopekler' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <span className="text-xl">🐶</span>
              </div>
              <span className="text-[10px] mt-1 font-medium">Köpekler</span>
            </Link>

            <Link 
              href="/oykulerimiz?animal=kuslar#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'egzotik' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'egzotik' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <span className="text-xl">🦜</span>
              </div>
              <span className="text-[10px] mt-1 font-medium">Egzotik</span>
            </Link>
            
            <Link 
              href="/oykulerimiz#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === null 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === null 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-[10px] mt-1 font-medium">Tümü</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 