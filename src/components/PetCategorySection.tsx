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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M12 22C9.5 22 7.5 20.2 7.5 18C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 18C16.5 20.2 14.5 22 12 22Z" fill="#E31E24"/>
                <path d="M19.5 8C19.5 9.1 18.6 10 17.5 10C16.4 10 15.5 9.1 15.5 8C15.5 6.9 16.4 6 17.5 6C18.6 6 19.5 6.9 19.5 8Z" fill="#E31E24"/>
                <path d="M8.5 8C8.5 9.1 7.6 10 6.5 10C5.4 10 4.5 9.1 4.5 8C4.5 6.9 5.4 6 6.5 6C7.6 6 8.5 6.9 8.5 8Z" fill="#E31E24"/>
                <path d="M15.5 3.5C15.5 4.3 14.8 5 14 5C13.2 5 12.5 4.3 12.5 3.5C12.5 2.7 13.2 2 14 2C14.8 2 15.5 2.7 15.5 3.5Z" fill="#E31E24"/>
                <path d="M11.5 3.5C11.5 4.3 10.8 5 10 5C9.2 5 8.5 4.3 8.5 3.5C8.5 2.7 9.2 2 10 2C10.8 2 11.5 2.7 11.5 3.5Z" fill="#E31E24"/>
              </svg>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Kediler</span>
          </Link>
          
          <Link href="/hayvanlar/kopekler" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M4 12C4 9.79 5.79 8 8 8H16C18.21 8 20 9.79 20 12V20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V12Z" fill="#E31E24"/>
                <path d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 8.61 9.05 9.59 9.9 10.2C10.55 10.67 11.25 10.97 12 11C12.75 10.97 13.45 10.67 14.1 10.2C14.95 9.59 15.5 8.61 15.5 7.5C15.5 5.5 14 4 12 4Z" fill="#E31E24"/>
                <path d="M17.5 13C16.67 13 16 13.67 16 14.5C16 15.33 16.67 16 17.5 16C18.33 16 19 15.33 19 14.5C19 13.67 18.33 13 17.5 13Z" fill="#E31E24"/>
                <path d="M6.5 13C5.67 13 5 13.67 5 14.5C5 15.33 5.67 16 6.5 16C7.33 16 8 15.33 8 14.5C8 13.67 7.33 13 6.5 13Z" fill="#E31E24"/>
              </svg>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Köpekler</span>
          </Link>
          
          <Link href="/hayvanlar/kuslar" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M22 11.9998L19 14.9998V7.99979C19 5.99979 17.5 3.99979 15 3.99979C15 3.99979 13.5 3.99979 13 3.99979C12.5 3.99979 12 4.19979 11.61 4.58979L6.11 9.58979C5.5 10.1098 5.5 10.9998 6.11 11.5898L8.11 13.5898C8.88 14.3598 10.13 14.1998 10.62 13.1798L12 10.9998" fill="#E31E24"/>
                <path d="M14 14.4998V17.9998C14 19.3298 12.33 20.1598 11.21 19.3998L8.79 17.5998C8.28 17.2198 8 16.5998 8 15.9998V15.2998" stroke="#E31E24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.91 16.9998C2.97 14.9598 2 12.4098 2 9.68979C2 4.58979 6.02 1.98979 9.63 4.99979" stroke="#E31E24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Kuşlar</span>
          </Link>
          
          <Link href="/hayvanlar/tavsan" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M18 4C14.22 4 12 7.53 12 10C12 12.4 9.8 13.5 8.5 14C8.12 14.17 8 14.5 8 14.91V16.59C8 16.87 8.15 17.12 8.38 17.27L9.83 18.25C10.05 18.41 10.31 18.5 10.58 18.5H14.92C15.35 18.5 15.7 18.15 15.7 17.72C15.7 17.29 15.35 16.94 14.92 16.94H12.8C12.3 16.94 12 16.41 12 16.14C12 15.87 12.37 15.5 12.9 15.5H14.92C15.8 15.5 16.5 14.8 16.5 13.92V13.01C19.89 12.5 22 9.86 22 7V5.5C22 4.12 20.88 3 19.5 3H18.5C18.22 3 18 3.22 18 3.5V4Z" fill="#E31E24"/>
                <path d="M5.5 8C6.88 8 8 6.88 8 5.5C8 4.12 6.88 3 5.5 3C4.12 3 3 4.12 3 5.5C3 6.88 4.12 8 5.5 8Z" fill="#E31E24"/>
                <path d="M7.5 9H3.5C2.67 9 2 9.67 2 10.5V13.49C2 13.78 2.14 14.05 2.38 14.21L4.5 15.62V20C4.5 20.55 4.95 21 5.5 21C6.05 21 6.5 20.55 6.5 20V15C6.5 14.78 6.4 14.58 6.23 14.45L4 12.9V10.5H7C7.28 10.5 7.5 10.28 7.5 10V9Z" fill="#E31E24"/>
              </svg>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Tavşan</span>
          </Link>
          
          <Link href="/hayvanlar/diger" className="group flex flex-col items-center">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full bg-background shadow-md border border-light-gray p-1.5 sm:p-3 mb-1 sm:mb-2 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M19 5.5C19 7.43 17.43 9 15.5 9C14.54 9 13.68 8.65 13.04 8.06C12.53 7.61 12.26 7.03 12.06 6.39C11.81 5.6 12.47 4.91 13.3 5.09C13.62 5.16 13.95 5.18 14.28 5.12C14.64 5.06 14.97 4.92 15.27 4.74C15.95 4.36 16.77 4.65 17.19 5.31C17.88 5.23 18.49 4.94 19 4.5C19 4.5 19 5.5 19 5.5Z" fill="#E31E24"/>
                <path d="M5.91 22C4.58 22 3.5 20.92 3.5 19.59C3.5 18.26 4.58 17.18 5.91 17.18C6.99 17.18 7.92 17.88 8.23 18.85C8.36 19.25 8.79 19.6 9.36 19.36C9.62 19.26 9.84 19.09 9.99 18.86C10.53 18.08 11.47 17.6 12.5 17.6C13.53 17.6 14.47 18.08 15.01 18.86C15.16 19.09 15.38 19.26 15.64 19.36C16.21 19.6 16.64 19.26 16.77 18.85C17.08 17.89 18.01 17.18 19.09 17.18C20.42 17.18 21.5 18.26 21.5 19.59C21.5 20.92 20.42 22 19.09 22C18.37 22 17.73 21.7 17.28 21.21C17.24 21.17 17.21 21.13 17.17 21.09C16.99 20.9 16.78 20.76 16.56 20.65C15.97 20.39 15.29 20.36 14.68 20.58C14.36 20.69 14.09 20.89 13.89 21.13C13.33 21.74 12.68 22 12 22C11.32 22 10.67 21.74 10.11 21.13C9.91 20.89 9.64 20.69 9.32 20.58C8.71 20.36 8.03 20.39 7.44 20.65C7.22 20.76 7.01 20.9 6.83 21.09C6.79 21.13 6.76 21.17 6.72 21.21C6.27 21.7 5.63 22 5.91 22Z" fill="#E31E24"/>
                <path d="M6 9C6 11.21 7.79 13 10 13C11.12 13 12.1 12.55 12.82 11.82C13.28 11.35 13.53 10.73 13.91 10.16C14.29 9.59 15.15 9.46 15.31 10.16C15.46 10.82 15.89 11.4 16.43 11.8C16.85 12.11 16.75 12.69 16.47 13.26C16.18 13.82 15.01 13.78 14.48 14.17C13.38 14.95 11.75 15.35 10.08 14.73C8.08 14 6.39 12.65 6.08 10.54C6.03 10.2 6 9.86 6 9.5C6 9.5 6 9 6 9Z" fill="#E31E24"/>
                <path d="M2 5.5C2 7.43 3.57 9 5.5 9C6.46 9 7.32 8.65 7.96 8.06C8.47 7.61 8.74 7.03 8.94 6.39C9.19 5.6 8.53 4.91 7.7 5.09C7.38 5.16 7.05 5.18 6.73 5.12C6.36 5.06 6.03 4.92 5.73 4.74C5.05 4.36 4.23 4.65 3.81 5.31C3.12 5.23 2.51 4.94 2 4.5C2 4.5 2 5.5 2 5.5Z" fill="#E31E24"/>
              </svg>
            </div>
            <span className="font-medium text-[10px] sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors text-center">Diğer</span>
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
                src="/images/cat-hero.jpg"
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
                src="/images/dog-hero.jpg"
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