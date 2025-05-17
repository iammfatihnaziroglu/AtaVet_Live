import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 md:gap-2 transition duration-300 hover:opacity-90"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 -ml-0 md:-ml-2">
                <Image
                  src="/atavetLogo.svg"
                  alt="AtaVet Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain mt-[2px] md:mt-[3px]"
                />
              </div>
              <div className="flex flex-col mt-[5px] md:mt-[7px]">
                <span className="text-4xl md:text-5xl font-bold text-primary font-pathway leading-none">
                  ATAVET
                </span>
                <span className="text-base md:text-md uppercase tracking-wider text-primary font-pathway mt-0.5 md:mt-1">
                  VETERİNER KLİNİĞİ
                </span>
              </div>
            </Link>

            <p className="text-sm mb-4 text-background/80">
              Isparta&apos;nın en güvenilir ve modern veteriner kliniği.
              Dostlarınız için en iyi bakımı sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Atavet-Veteriner-Klini%C4%9FiIsparta/61567290032914/?locale=tr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/atavetisparta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-background">Sayfalar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/oykulerimiz"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Öykülerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/sss"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-background">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetler#muayene"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Genel Muayene
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#asilar"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Aşılar
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#cerrahi"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Cerrahi Operasyonlar
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#bakim"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Bakım ve Tıraş
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#laboratuvar"
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Laboratuvar Hizmetleri
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-background">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Isparta+Merkez,+Mehmet+Tönge+Cd.+No:15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-[#E31E24] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#E31E24] group-hover:text-[#E31E24]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-background/80 group-hover:text-[#E31E24]">
                    Isparta Merkez, Mehmet Tönge Cd. No:15
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+902461234567"
                  className="flex items-center gap-3 group hover:text-[#E31E24] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#E31E24] group-hover:text-[#E31E24]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-background/80 group-hover:text-[#E31E24]">+90 246 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@atavet.com"
                  className="flex items-center gap-3 group hover:text-[#E31E24] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#E31E24] group-hover:text-[#E31E24]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-background/80 group-hover:text-[#E31E24]">info@atavet.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E31E24]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-background/80">
                  Pzt-Cmt: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} M.Fatih. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
