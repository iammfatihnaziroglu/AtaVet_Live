import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content area */}
          <div className="lg:col-span-6 z-10">
            {/* Top badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold animate-fade-in">
                <svg 
                  width="16" 
                  height="16" 
                  className="mr-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                7+ Yıllık Deneyim
              </span>
              <span className="inline-flex items-center bg-neutral text-foreground px-3 py-1 rounded-full text-sm font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <svg 
                  width="16" 
                  height="16" 
                  className="mr-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                En İyi Veteriner Kliniği
              </span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 animate-slide-up">
              Dostlarınızın <span className="text-primary">Sağlığı</span> İçin Profesyonel Bakım
            </h1>
            
            {/* Description */}
            <p className="text-lg mb-8 text-foreground/80 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              AtaVet olarak, evcil hayvanlarınıza özel sağlık hizmetleri sunuyoruz. 
              Onların sağlığı ve mutluluğu bizim önceliğimiz.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl font-bold text-primary">1500+</span>
                <span className="text-sm text-foreground/70">Mutlu Müşteri</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl font-bold text-primary">7/24</span>
                <span className="text-sm text-foreground/70">Acil Destek</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl font-bold text-primary">%98</span>
                <span className="text-sm text-foreground/70">Müşteri Memnuniyeti</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/randevu" className="btn-primary text-center flex items-center justify-center">
                <span className="mr-2">Hemen Randevu Al</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/hizmetler" className="btn-secondary text-center">
                Hizmetlerimizi Keşfet
              </Link>
            </div>
          </div>
          
          {/* Right image area */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Background decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 animate-pulse"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main hero image */}
              <div className="relative z-10 animate-float">
                <Image
                  src="/images/dog-hero.jpg"
                  alt="Mutlu ve sağlıklı köpek"
                  width={600}
                  height={600}
                  className="object-cover rounded-xl shadow-lg"
                  priority
                />
                
                {/* Image decorative elements */}
                <div className="absolute -top-1 -right-1 bg-white p-3 rounded-full shadow-lg animate-bounce-in">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#E31E24">
                      <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
                      <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
                      <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
                      <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
                      <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
                    </g>
                  </svg>
                </div>
                
                <div className="absolute -bottom-1 -left-1 bg-white p-3 rounded-full shadow-lg animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#E31E24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md animate-slide-right" style={{ animationDelay: '0.6s' }}>
                  <span className="text-primary font-bold">AtaVet</span>
                  <span className="text-foreground ml-1 dark:text-black">Kliniği</span>
                </div>
                
                <div className="absolute -bottom-2 right-2 bg-primary text-white px-4 py-2 rounded-xl shadow-md animate-slide-left" style={{ animationDelay: '0.8s' }}>
                  <span className="font-bold">Isparta&apos;da</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scattered paw prints */}
      <div className="absolute top-1/4 left-[5%] w-8 h-8 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#E31E24">
            <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
            <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
            <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
            <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
            <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
          </g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-[5%] w-8 h-8 opacity-20 animate-pulse" style={{ animationDelay: '0.8s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#E31E24">
            <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
            <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
            <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
            <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
            <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
          </g>
        </svg>
      </div>
    </section>
  );
} 