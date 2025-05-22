import Link from 'next/link';
import Image from 'next/image';

export default function PetCategorySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium rounded-full text-sm mb-3 md:mb-4">
            Evcil Dostlarınız İçin
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5">Özelleştirilmiş Bakım</h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            AtaVet olarak, her evcil hayvanın kendine has ihtiyaçlarını anlıyor ve türüne özel profesyonel bakım hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Pet Categories Icons */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
          <Link href="/hayvanlar/kediler" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <span className="text-xl sm:text-3xl md:text-4xl">🐱</span>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Kediler</span>
          </Link>
          
          <Link href="/hayvanlar/kopekler" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <span className="text-xl sm:text-3xl md:text-4xl">🐶</span>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Köpekler</span>
          </Link>
          
          <Link href="/hayvanlar/egzotik" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <span className="text-xl sm:text-3xl md:text-4xl">🦜</span>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Egzotik</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Cat Category Card */}
          <Link 
            href="/hayvanlar/kediler" 
            className="group relative bg-background rounded-2xl overflow-hidden border border-light-gray hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <div className="relative aspect-[3/2] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/30 group-hover:to-foreground/40 transition-all duration-300 z-10"></div>
              <Image
                src="/atavet-img/kedibakimi.webp"
                alt="Kedi Bakımı"
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-primary text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold z-20 shadow-md">
                Kediler
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 sm:p-3 rounded-lg shadow-lg z-20 transform group-hover:rotate-12 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <g fill="#E31E24">
                    <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
                    <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
                    <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
                    <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
                    <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">Kedi Sağlığı ve Bakımı</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">
                Kedilerin özel sağlık ihtiyaçları, beslenme önerileri, davranış rehberliği ve daha fazlası için detaylı bilgilerimize göz atın.
              </p>
              <div className="flex items-center text-primary font-semibold text-sm sm:text-base">
                <span>Daha Fazla Bilgi</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="flex flex-wrap mt-3 sm:mt-5 gap-1 sm:gap-2">
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Aşılar</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Beslenme</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Bakım</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Davranış</span>
              </div>
            </div>
          </Link>

          {/* Dog Category Card */}
          <Link 
            href="/hayvanlar/kopekler" 
            className="group relative bg-background rounded-2xl overflow-hidden border border-light-gray hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <div className="relative aspect-[3/2] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/30 group-hover:to-foreground/40 transition-all duration-300 z-10"></div>
              <Image
                src="/atavet-img/kopekbakimi.webp"
                alt="Köpek Bakımı"
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-primary text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold z-20 shadow-md">
                Köpekler
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 sm:p-3 rounded-lg shadow-lg z-20 transform group-hover:rotate-12 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <g fill="#E31E24">
                    <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
                    <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
                    <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
                    <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
                    <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">Köpek Sağlığı ve Bakımı</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">
                Köpeklerin özel sağlık ihtiyaçları, beslenme önerileri, eğitim tavsiyeleri ve daha fazlası için detaylı bilgilerimize göz atın.
              </p>
              <div className="flex items-center text-primary font-semibold text-sm sm:text-base">
                <span>Daha Fazla Bilgi</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="flex flex-wrap mt-3 sm:mt-5 gap-1 sm:gap-2">
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Aşılar</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Eğitim</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Aktivite</span>
                <span className="inline-block bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">Bakım</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Additional feature badges at the bottom */}
        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3 bg-background rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-light-gray">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <span className="font-medium text-xs sm:text-sm md:text-base">Profesyonel Bakım</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-background rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-light-gray">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span className="font-medium text-xs sm:text-sm md:text-base">Güvenilir Hizmet</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-background rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-light-gray">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="font-medium text-xs sm:text-sm md:text-base">Sevgi Dolu Yaklaşım</span>
          </div>
        </div>
      </div>
    </section>
  );
} 