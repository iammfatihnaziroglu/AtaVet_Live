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
                href="https://www.tiktok.com/@ispartaatavet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
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
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
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
                  scroll={false}
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Genel Muayene
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#asilar"
                  scroll={false}
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Aşılar
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#cerrahi"
                  scroll={false}
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Cerrahi Operasyonlar
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#bakim"
                  scroll={false}
                  className="text-background/80 hover:text-[#E31E24] transition-colors"
                >
                  Bakım ve Tıraş
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler#laboratuvar"
                  scroll={false}
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
                  href="https://www.google.com.tr/maps/place/ATAVET+Veteriner+Klini%C4%9Fi/@37.7557922,30.570474,17z/data=!3m1!4b1!4m6!3m5!1s0x14c5b588aece1129:0x125daa561440e1da!8m2!3d37.755788!4d30.5730489!16s%2Fg%2F11wj5nch51?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" 
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
                  Ayazmana Mah. 124. Cadde No.63-65/1 Isparta/Merkez
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+905426011232"
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
                  <span className="text-background/80 group-hover:text-[#E31E24]">+90 542 601 12 32</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vettsener@gmail.com"
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
                  <span className="text-background/80 group-hover:text-[#E31E24]">vettsener@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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
                  Pzt-Cmt: 09:30 - 20:00
                  <br />
                  Pazar: 10:00 - 19:00
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
