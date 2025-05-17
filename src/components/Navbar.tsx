'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('atavet-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-theme');
    }

    // Add scroll event listener with debounce for better performance
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('atavet-theme', 'light');
    } else {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('atavet-theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Calculate opacity based on scroll position
  const navOpacity = Math.min(0.2 + (scrollPosition / 100) * 0.8, 0.9);
  const navShadow = scrollPosition > 20 ? 'shadow-md' : 'shadow-none';
  const navBlur = scrollPosition > 50 ? 'backdrop-blur-[1px]' : 'backdrop-blur-[2px]';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navShadow} ${navBlur}`}
      style={{
        backgroundColor: `rgba(var(--rgb-background), ${navOpacity})`,
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 transition duration-300 hover:opacity-90">
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image 
              src="/atavetLogo.svg" 
              alt="AtaVet Logo" 
              width={96}
              height={96}
              className="w-full h-full object-contain mt-[3px]"
            />
          </div>
          <div className="flex flex-col mt-[7px]">
            <span className="text-3xl md:text-5xl font-bold text-primary font-pathway">ATAVET</span>
            <span className="text-sm md:text-md uppercase tracking-wider text-primary font-pathway">VETERİNER KLİNİĞİ</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Ana Sayfa
          </Link>
          <Link href="/hizmetler" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Hizmetlerimiz
          </Link>
          <Link href="/oykulerimiz" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Öykülerimiz
          </Link>
          <Link href="/hakkimizda" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            İletişim
          </Link>
          <Link href="/sss" className="text-foreground hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            SSS
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            className="p-2 rounded-full bg-neutral/80 hover:bg-neutral transition-all duration-300 hover:shadow-md"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <Link href="/iletisim" className="btn-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Randevu Al
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            className="p-2 rounded-full bg-neutral/80 hover:bg-neutral transition-all duration-300 hover:shadow-md"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <button 
            className="p-2 rounded-full bg-neutral/80 hover:bg-neutral transition-all duration-300 text-foreground hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 w-full backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: `rgba(var(--rgb-background), 0.98)`,
        }}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col divide-y divide-light-gray/20">
          <Link 
            href="/" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">Ana Sayfa</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <Link 
            href="/hizmetler" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">Hizmetlerimiz</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <Link 
            href="/oykulerimiz" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">Öykülerimiz</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <Link 
            href="/hakkimizda" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">Hakkımızda</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <Link 
            href="/iletisim" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">İletişim</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <Link 
            href="/sss" 
            className="py-3 flex items-center justify-between text-foreground hover:text-primary transition-all duration-300 hover:pl-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-lg">SSS</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
          <div className="pt-3 pb-2">
            <Link 
              href="/randevu" 
              className="btn-primary w-full text-center py-3 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 