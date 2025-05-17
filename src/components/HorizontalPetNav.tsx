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
      else if (animalParam === 'kuslar') setActiveCategory('kuslar');
      else if (animalParam === 'tavsan') setActiveCategory('tavsan');
      else if (animalParam === 'diger') setActiveCategory('diger');
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
          <div className={`grid grid-cols-5 gap-1 pb-2 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'}`}>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C9.5 22 7.5 20.2 7.5 18C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 18C16.5 20.2 14.5 22 12 22Z" fill={activeCategory === 'kediler' ? '#E31E24' : '#6B7280'}/>
                  <path d="M19.5 8C19.5 9.1 18.6 10 17.5 10C16.4 10 15.5 9.1 15.5 8C15.5 6.9 16.4 6 17.5 6C18.6 6 19.5 6.9 19.5 8Z" fill={activeCategory === 'kediler' ? '#E31E24' : '#6B7280'}/>
                  <path d="M8.5 8C8.5 9.1 7.6 10 6.5 10C5.4 10 4.5 9.1 4.5 8C4.5 6.9 5.4 6 6.5 6C7.6 6 8.5 6.9 8.5 8Z" fill={activeCategory === 'kediler' ? '#E31E24' : '#6B7280'}/>
                </svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12C4 9.79 5.79 8 8 8H16C18.21 8 20 9.79 20 12V20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V12Z" fill={activeCategory === 'kopekler' ? '#E31E24' : '#6B7280'}/>
                  <path d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 8.61 9.05 9.59 9.9 10.2C10.55 10.67 11.25 10.97 12 11C12.75 10.97 13.45 10.67 14.1 10.2C14.95 9.59 15.5 8.61 15.5 7.5C15.5 5.5 14 4 12 4Z" fill={activeCategory === 'kopekler' ? '#E31E24' : '#6B7280'}/>
                </svg>
              </div>
              <span className="text-[10px] mt-1 font-medium">Köpekler</span>
            </Link>

            <Link 
              href="/oykulerimiz?animal=kuslar#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'kuslar' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'kuslar' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.9998L19 14.9998V7.99979C19 5.99979 17.5 3.99979 15 3.99979C15 3.99979 13.5 3.99979 13 3.99979C12.5 3.99979 12 4.19979 11.61 4.58979L6.11 9.58979C5.5 10.1098 5.5 10.9998 6.11 11.5898L8.11 13.5898C8.88 14.3598 10.13 14.1998 10.62 13.1798L12 10.9998" fill={activeCategory === 'kuslar' ? '#E31E24' : '#6B7280'}/>
                </svg>
              </div>
              <span className="text-[10px] mt-1 font-medium">Kuşlar</span>
            </Link>

            <Link 
              href="/oykulerimiz?animal=tavsan#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'tavsan' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'tavsan' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4C14.22 4 12 7.53 12 10C12 12.4 9.8 13.5 8.5 14C8.12 14.17 8 14.5 8 14.91V16.59C8 16.87 8.15 17.12 8.38 17.27L9.83 18.25C10.05 18.41 10.31 18.5 10.58 18.5H14.92C15.35 18.5 15.7 18.15 15.7 17.72C15.7 17.29 15.35 16.94 14.92 16.94H12.8C12.3 16.94 12 16.41 12 16.14C12 15.87 12.37 15.5 12.9 15.5H14.92C15.8 15.5 16.5 14.8 16.5 13.92V13.01C19.89 12.5 22 9.86 22 7V5.5C22 4.12 20.88 3 19.5 3H18.5C18.22 3 18 3.22 18 3.5V4Z" fill={activeCategory === 'tavsan' ? '#E31E24' : '#6B7280'}/>
                </svg>
              </div>
              <span className="text-[10px] mt-1 font-medium">Tavşanlar</span>
            </Link>

            <Link 
              href="/oykulerimiz?animal=diger#stories" 
              className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                activeCategory === 'diger' 
                  ? 'text-primary scale-105' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                activeCategory === 'diger' 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5.5C19 7.43 17.43 9 15.5 9C14.54 9 13.68 8.65 13.04 8.06C12.53 7.61 12.26 7.03 12.06 6.39C11.81 5.6 12.47 4.91 13.3 5.09C13.62 5.16 13.95 5.18 14.28 5.12C14.64 5.06 14.97 4.92 15.27 4.74C15.95 4.36 16.77 4.65 17.19 5.31C17.88 5.23 18.49 4.94 19 4.5C19 4.5 19 5.5 19 5.5Z" fill={activeCategory === 'diger' ? '#E31E24' : '#6B7280'}/>
                </svg>
              </div>
              <span className="text-[10px] mt-1 font-medium">Diğer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 