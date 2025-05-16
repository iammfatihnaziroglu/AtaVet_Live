'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VerticalPetNav() {
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
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

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Oval frame containing buttons - Reduced size */}
      <div className="bg-white/80 dark:bg-foreground/10 backdrop-blur-md rounded-full py-3 px-2 shadow-lg border border-light-gray/50 dark:border-light-gray/20 flex flex-col items-center gap-2 relative overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Title label at top - Made smaller */}
        <div className="text-[10px] font-medium text-primary mb-1 rounded-full px-2 py-0.5 bg-primary/5 dark:bg-primary/10 text-center">
          Öyküler
        </div>
        
        {/* Divider - Made smaller */}
        <div className="h-[1px] w-6 bg-primary/20 rounded-full mb-1"></div>
        
        {/* Cat Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(1)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz?animal=kediler#stories" 
            className={`group flex items-center justify-center w-10 h-10 ${activeCategory === 'kediler' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2 transition-all duration-300`}
            title="Kedi Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M12 22C9.5 22 7.5 20.2 7.5 18C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 18C16.5 20.2 14.5 22 12 22Z" fill={activeCategory === 'kediler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M19.5 8C19.5 9.1 18.6 10 17.5 10C16.4 10 15.5 9.1 15.5 8C15.5 6.9 16.4 6 17.5 6C18.6 6 19.5 6.9 19.5 8Z" fill={activeCategory === 'kediler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M8.5 8C8.5 9.1 7.6 10 6.5 10C5.4 10 4.5 9.1 4.5 8C4.5 6.9 5.4 6 6.5 6C7.6 6 8.5 6.9 8.5 8Z" fill={activeCategory === 'kediler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M15.5 3.5C15.5 4.3 14.8 5 14 5C13.2 5 12.5 4.3 12.5 3.5C12.5 2.7 13.2 2 14 2C14.8 2 15.5 2.7 15.5 3.5Z" fill={activeCategory === 'kediler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M11.5 3.5C11.5 4.3 10.8 5 10 5C9.2 5 8.5 4.3 8.5 3.5C8.5 2.7 9.2 2 10 2C10.8 2 11.5 2.7 11.5 3.5Z" fill={activeCategory === 'kediler' ? '#FFFFFF' : '#E31E24'}/>
            </svg>
          </Link>
          {tooltipVisible === 1 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C9.5 22 7.5 20.2 7.5 18C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 18C16.5 20.2 14.5 22 12 22Z" fill="#E31E24"/>
                  <path d="M19.5 8C19.5 9.1 18.6 10 17.5 10C16.4 10 15.5 9.1 15.5 8C15.5 6.9 16.4 6 17.5 6C18.6 6 19.5 6.9 19.5 8Z" fill="#E31E24"/>
                  <path d="M8.5 8C8.5 9.1 7.6 10 6.5 10C5.4 10 4.5 9.1 4.5 8C4.5 6.9 5.4 6 6.5 6C7.6 6 8.5 6.9 8.5 8Z" fill="#E31E24"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Kedi Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Kedi dostlarımızın hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
          {activeCategory === 'kediler' && (
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>
        
        {/* Dog Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(2)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz?animal=kopekler#stories" 
            className={`group flex items-center justify-center w-10 h-10 ${activeCategory === 'kopekler' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2 transition-all duration-300`}
            title="Köpek Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M4 12C4 9.79 5.79 8 8 8H16C18.21 8 20 9.79 20 12V20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V12Z" fill={activeCategory === 'kopekler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 8.61 9.05 9.59 9.9 10.2C10.55 10.67 11.25 10.97 12 11C12.75 10.97 13.45 10.67 14.1 10.2C14.95 9.59 15.5 8.61 15.5 7.5C15.5 5.5 14 4 12 4Z" fill={activeCategory === 'kopekler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M17.5 13C16.67 13 16 13.67 16 14.5C16 15.33 16.67 16 17.5 16C18.33 16 19 15.33 19 14.5C19 13.67 18.33 13 17.5 13Z" fill={activeCategory === 'kopekler' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M6.5 13C5.67 13 5 13.67 5 14.5C5 15.33 5.67 16 6.5 16C7.33 16 8 15.33 8 14.5C8 13.67 7.33 13 6.5 13Z" fill={activeCategory === 'kopekler' ? '#FFFFFF' : '#E31E24'}/>
            </svg>
          </Link>
          {tooltipVisible === 2 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12C4 9.79 5.79 8 8 8H16C18.21 8 20 9.79 20 12V20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V12Z" fill="#E31E24"/>
                  <path d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 8.61 9.05 9.59 9.9 10.2C10.55 10.67 11.25 10.97 12 11C12.75 10.97 13.45 10.67 14.1 10.2C14.95 9.59 15.5 8.61 15.5 7.5C15.5 5.5 14 4 12 4Z" fill="#E31E24"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Köpek Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Sadık dostlarımızın hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
          {activeCategory === 'kopekler' && (
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>

        {/* Bird Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(3)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz?animal=kuslar#stories" 
            className={`group flex items-center justify-center w-10 h-10 ${activeCategory === 'kuslar' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2 transition-all duration-300`}
            title="Kuş Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M22 11.9998L19 14.9998V7.99979C19 5.99979 17.5 3.99979 15 3.99979C15 3.99979 13.5 3.99979 13 3.99979C12.5 3.99979 12 4.19979 11.61 4.58979L6.11 9.58979C5.5 10.1098 5.5 10.9998 6.11 11.5898L8.11 13.5898C8.88 14.3598 10.13 14.1998 10.62 13.1798L12 10.9998" fill={activeCategory === 'kuslar' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M14 14.4998V17.9998C14 19.3298 12.33 20.1598 11.21 19.3998L8.79 17.5998C8.28 17.2198 8 16.5998 8 15.9998V15.2998" stroke={activeCategory === 'kuslar' ? '#FFFFFF' : '#E31E24'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.91 16.9998C2.97 14.9598 2 12.4098 2 9.68979C2 4.58979 6.02 1.98979 9.63 4.99979" stroke={activeCategory === 'kuslar' ? '#FFFFFF' : '#E31E24'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          {tooltipVisible === 3 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.9998L19 14.9998V7.99979C19 5.99979 17.5 3.99979 15 3.99979C15 3.99979 13.5 3.99979 13 3.99979C12.5 3.99979 12 4.19979 11.61 4.58979L6.11 9.58979C5.5 10.1098 5.5 10.9998 6.11 11.5898L8.11 13.5898C8.88 14.3598 10.13 14.1998 10.62 13.1798L12 10.9998" fill="#E31E24"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Kuş Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Kanatlı dostlarımızın hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
          {activeCategory === 'kuslar' && (
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>

        {/* Rabbit Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(4)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz?animal=tavsan#stories" 
            className={`group flex items-center justify-center w-10 h-10 ${activeCategory === 'tavsan' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2 transition-all duration-300`}
            title="Tavşan Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M18 4C14.22 4 12 7.53 12 10C12 12.4 9.8 13.5 8.5 14C8.12 14.17 8 14.5 8 14.91V16.59C8 16.87 8.15 17.12 8.38 17.27L9.83 18.25C10.05 18.41 10.31 18.5 10.58 18.5H14.92C15.35 18.5 15.7 18.15 15.7 17.72C15.7 17.29 15.35 16.94 14.92 16.94H12.8C12.3 16.94 12 16.41 12 16.14C12 15.87 12.37 15.5 12.9 15.5H14.92C15.8 15.5 16.5 14.8 16.5 13.92V13.01C19.89 12.5 22 9.86 22 7V5.5C22 4.12 20.88 3 19.5 3H18.5C18.22 3 18 3.22 18 3.5V4Z" fill={activeCategory === 'tavsan' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M5.5 8C6.88 8 8 6.88 8 5.5C8 4.12 6.88 3 5.5 3C4.12 3 3 4.12 3 5.5C3 6.88 4.12 8 5.5 8Z" fill={activeCategory === 'tavsan' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M7.5 9H3.5C2.67 9 2 9.67 2 10.5V13.49C2 13.78 2.14 14.05 2.38 14.21L4.5 15.62V20C4.5 20.55 4.95 21 5.5 21C6.05 21 6.5 20.55 6.5 20V15C6.5 14.78 6.4 14.58 6.23 14.45L4 12.9V10.5H7C7.28 10.5 7.5 10.28 7.5 10V9Z" fill={activeCategory === 'tavsan' ? '#FFFFFF' : '#E31E24'}/>
            </svg>
          </Link>
          {tooltipVisible === 4 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4C14.22 4 12 7.53 12 10C12 12.4 9.8 13.5 8.5 14C8.12 14.17 8 14.5 8 14.91V16.59C8 16.87 8.15 17.12 8.38 17.27L9.83 18.25C10.05 18.41 10.31 18.5 10.58 18.5H14.92C15.35 18.5 15.7 18.15 15.7 17.72C15.7 17.29 15.35 16.94 14.92 16.94H12.8C12.3 16.94 12 16.41 12 16.14C12 15.87 12.37 15.5 12.9 15.5H14.92C15.8 15.5 16.5 14.8 16.5 13.92V13.01C19.89 12.5 22 9.86 22 7V5.5C22 4.12 20.88 3 19.5 3H18.5C18.22 3 18 3.22 18 3.5V4Z" fill="#E31E24"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Tavşan Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Sevimli tavşanların hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
          {activeCategory === 'tavsan' && (
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>

        {/* Other Animals Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(5)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz?animal=diger#stories" 
            className={`group flex items-center justify-center w-10 h-10 ${activeCategory === 'diger' ? 'bg-primary text-white' : 'bg-white'} rounded-full shadow-md border border-light-gray p-2 transition-all duration-300`}
            title="Diğer Hayvan Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M19 5.5C19 7.43 17.43 9 15.5 9C14.54 9 13.68 8.65 13.04 8.06C12.53 7.61 12.26 7.03 12.06 6.39C11.81 5.6 12.47 4.91 13.3 5.09C13.62 5.16 13.95 5.18 14.28 5.12C14.64 5.06 14.97 4.92 15.27 4.74C15.95 4.36 16.77 4.65 17.19 5.31C17.88 5.23 18.49 4.94 19 4.5C19 4.5 19 5.5 19 5.5Z" fill={activeCategory === 'diger' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M5.91 22C4.58 22 3.5 20.92 3.5 19.59C3.5 18.26 4.58 17.18 5.91 17.18C6.99 17.18 7.92 17.88 8.23 18.85C8.36 19.25 8.79 19.6 9.36 19.36C9.62 19.26 9.84 19.09 9.99 18.86C10.53 18.08 11.47 17.6 12.5 17.6C13.53 17.6 14.47 18.08 15.01 18.86C15.16 19.09 15.38 19.26 15.64 19.36C16.21 19.6 16.64 19.26 16.77 18.85C17.08 17.89 18.01 17.18 19.09 17.18C20.42 17.18 21.5 18.26 21.5 19.59C21.5 20.92 20.42 22 19.09 22C18.37 22 17.73 21.7 17.28 21.21C17.24 21.17 17.21 21.13 17.17 21.09C16.99 20.9 16.78 20.76 16.56 20.65C15.97 20.39 15.29 20.36 14.68 20.58C14.36 20.69 14.09 20.89 13.89 21.13C13.33 21.74 12.68 22 12 22C11.32 22 10.67 21.74 10.11 21.13C9.91 20.89 9.64 20.69 9.32 20.58C8.71 20.36 8.03 20.39 7.44 20.65C7.22 20.76 7.01 20.9 6.83 21.09C6.79 21.13 6.76 21.17 6.72 21.21C6.27 21.7 5.63 22 5.91 22Z" fill={activeCategory === 'diger' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M6 9C6 11.21 7.79 13 10 13C11.12 13 12.1 12.55 12.82 11.82C13.28 11.35 13.53 10.73 13.91 10.16C14.29 9.59 15.15 9.46 15.31 10.16C15.46 10.82 15.89 11.4 16.43 11.8C16.85 12.11 16.75 12.69 16.47 13.26C16.18 13.82 15.01 13.78 14.48 14.17C13.38 14.95 11.75 15.35 10.08 14.73C8.08 14 6.39 12.65 6.08 10.54C6.03 10.2 6 9.86 6 9.5C6 9.5 6 9 6 9Z" fill={activeCategory === 'diger' ? '#FFFFFF' : '#E31E24'}/>
              <path d="M2 5.5C2 7.43 3.57 9 5.5 9C6.46 9 7.32 8.65 7.96 8.06C8.47 7.61 8.74 7.03 8.94 6.39C9.19 5.6 8.53 4.91 7.7 5.09C7.38 5.16 7.05 5.18 6.73 5.12C6.36 5.06 6.03 4.92 5.73 4.74C5.05 4.36 4.23 4.65 3.81 5.31C3.12 5.23 2.51 4.94 2 4.5C2 4.5 2 5.5 2 5.5Z" fill={activeCategory === 'diger' ? '#FFFFFF' : '#E31E24'}/>
            </svg>
          </Link>
          {tooltipVisible === 5 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5.5C19 7.43 17.43 9 15.5 9C14.54 9 13.68 8.65 13.04 8.06C12.53 7.61 12.26 7.03 12.06 6.39C11.81 5.6 12.47 4.91 13.3 5.09C13.62 5.16 13.95 5.18 14.28 5.12C14.64 5.06 14.97 4.92 15.27 4.74C15.95 4.36 16.77 4.65 17.19 5.31C17.88 5.23 18.49 4.94 19 4.5C19 4.5 19 5.5 19 5.5Z" fill="#E31E24"/>
                  <path d="M6 9C6 11.21 7.79 13 10 13C11.12 13 12.1 12.55 12.82 11.82C13.28 11.35 13.53 10.73 13.91 10.16C14.29 9.59 15.15 9.46 15.31 10.16C15.46 10.82 15.89 11.4 16.43 11.8C16.85 12.11 16.75 12.69 16.47 13.26C16.18 13.82 15.01 13.78 14.48 14.17C13.38 14.95 11.75 15.35 10.08 14.73C8.08 14 6.39 12.65 6.08 10.54C6.03 10.2 6 9.86 6 9.5C6 9.5 6 9 6 9Z" fill="#E31E24"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Diğer Hayvan Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Farklı dostlarımızın hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
          {activeCategory === 'diger' && (
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/30"></span>
          )}
        </div>
        
        {/* Decorative divider - Made smaller */}
        <div className="h-[1px] w-6 bg-primary/20 rounded-full my-1"></div>
        
        {/* All Animals Button */}
        <div className="relative z-10" onMouseEnter={() => setTooltipVisible(6)} onMouseLeave={() => setTooltipVisible(null)}>
          <Link 
            href="/oykulerimiz#stories" 
            className="group flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full shadow-md border border-light-gray p-2 transition-all duration-300"
            title="Tüm Hayvan Öyküleri"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M8 3H5C3.9 3 3 3.9 3 5V8C3 9.1 3.9 10 5 10H8C9.1 10 10 9.1 10 8V5C10 3.9 9.1 3 8 3Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14H5C3.9 14 3 14.9 3 16V19C3 20.1 3.9 21 5 21H8C9.1 21 10 20.1 10 19V16C10 14.9 9.1 14 8 14Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 14H16C14.9 14 14 14.9 14 16V19C14 20.1 14.9 21 16 21H19C20.1 21 21 20.1 21 19V16C21 14.9 20.1 14 19 14Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 8H21" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17.5 4.5V11.5" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          {tooltipVisible === 6 && (
            <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-lg text-sm whitespace-nowrap border border-light-gray/30 animate-fadeIn z-[100] flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H5C3.9 3 3 3.9 3 5V8C3 9.1 3.9 10 5 10H8C9.1 10 10 9.1 10 8V5C10 3.9 9.1 3 8 3Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14H5C3.9 14 3 14.9 3 16V19C3 20.1 3.9 21 5 21H8C9.1 21 10 20.1 10 19V16C10 14.9 9.1 14 8 14Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 14H16C14.9 14 14 14.9 14 16V19C14 20.1 14.9 21 16 21H19C20.1 21 21 20.1 21 19V16C21 14.9 20.1 14 19 14Z" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-800 dark:text-white block">Tüm Hayvan Öyküleri</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">Tüm dostlarımızın hikayeleri</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-t border-light-gray/30"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 