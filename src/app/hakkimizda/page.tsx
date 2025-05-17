export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet, 2016 yılından bu yana Isparta&apos;da evcil hayvan sağlığı ve refahı için çalışan profesyonel bir veteriner kliniğidir.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-primary/10 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-7xl font-bold text-primary/30">AtaVet</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
            <p className="text-foreground/70 mb-4">
              AtaVet, Kurucu Veteriner Hekim Tayfur Şener tarafından 2016 yılında kurulmuştur. Küçük bir muayenehane olarak başlayan kliniğimiz, sunduğu kaliteli hizmet ve hasta odaklı yaklaşımı sayesinde bölgenin en güvenilir veteriner kliniklerinden biri haline gelmiştir.
            </p>
            <p className="text-foreground/70 mb-4">
              Yıllar içinde ekibimizi genişlettik, modern ekipmanlarla donatılmış yeni binamıza taşındık ve hizmet yelpazemizi geliştirdik. Bugün 3 veteriner hekim ve 5 yardımcı personelle hizmet vermekte ve yılda 5000&apos;den fazla evcil hayvana sağlık hizmeti sunmaktayız.
            </p>
            <p className="text-foreground/70">
              Misyonumuz, evcil hayvanların sağlığını korumak, hastalıklarını tedavi etmek ve sahiplerine en doğru rehberliği sağlamaktır. Vizyonumuz ise Isparta ve çevresinde evcil hayvan sağlığı standartlarını yükseltmek ve her evcil hayvanın kaliteli veteriner hizmetine erişimini sağlamaktır.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-secondary p-8 rounded-2xl border border-light-gray">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-foreground/70 mb-4">
              AtaVet olarak misyonumuz, en yüksek standartlarda veteriner hekimliği hizmeti sunarak evcil hayvanların sağlıklı ve mutlu bir yaşam sürmelerine katkıda bulunmaktır. Bunu gerçekleştirmek için:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 space-y-2">
              <li>En güncel veteriner tıbbı bilgilerini ve tedavi yöntemlerini uygularız</li>
              <li>Her hastaya özel, bireyselleştirilmiş bakım planları geliştiririz</li>
              <li>Hayvan sahiplerini eğiterek bilinçli pet sahipliğini teşvik ederiz</li>
              <li>Şefkat ve profesyonellikle her hastaya yaklaşırız</li>
              <li>Toplum içinde hayvan sağlığı ve refahını destekleyen projeler geliştiririz</li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-2xl border border-light-gray">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-foreground/70 mb-4">
              Vizyonumuz, Isparta ve çevresinde veteriner hekimliği alanında öncü ve referans gösterilen bir kurum olmaktır. Hedeflerimiz:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 space-y-2">
              <li>En modern teşhis ve tedavi olanaklarını sunarak teknolojik gelişimleri yakından takip etmek</li>
              <li>Sürekli eğitim ve gelişimle ekip üyelerimizin uzmanlık alanlarını genişletmek</li>
              <li>Hayvan sağlığı konusunda toplumu bilinçlendirmek için eğitim programları ve etkinlikler düzenlemek</li>
              <li>Bölgemizdeki sahipsiz hayvanlar için destek projeleri geliştirmek</li>
              <li>Genç veteriner hekimlerin mesleki gelişimlerine katkıda bulunacak staj ve eğitim programları oluşturmak</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ekibimiz</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-foreground/5 rounded-2xl overflow-hidden shadow-lg border border-light-gray/10 dark:border-light-gray/5 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                <div className="h-80 bg-neutral flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/team-bg.jpg')] bg-cover bg-center opacity-10"></div>
                  <div className="relative z-10">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-6xl font-bold">TS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Tayfur Şener</h3>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Kurucu Veteriner Hekim
                  </div>
                </div>

                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-foreground/80 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime reprehenderit quo odio odit. Minus culpa esse qui ea, fuga consequatur possimus hic mollitia ipsam laborum ex suscipit eum beatae quam.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eveniet nobis officiis ea esse assumenda dolores, voluptate error exercitationem ipsa est rerum consectetur? Facere mollitia possimus esse nesciunt quod quasi?
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 bg-secondary/30 dark:bg-foreground/10 px-4 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-sm text-foreground/80">Veteriner Hekimliği</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 dark:bg-foreground/10 px-4 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-sm text-foreground/80">Cerrahi Uzmanı</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 dark:bg-foreground/10 px-4 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-sm text-foreground/80">İç Hastalıkları</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-secondary p-8 rounded-2xl border border-light-gray mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sertifikalarımız ve Üyeliklerimiz</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-background p-6 rounded-xl border border-light-gray">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                  <circle cx="12" cy="8" r="7"></circle>
                </svg>
              </div>
              <h3 className="font-bold mb-2">TVHB Üyeliği</h3>
              <p className="text-sm text-foreground/70">Türk Veteriner Hekimleri Birliği</p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-light-gray">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-bold mb-2">FECAVA Üyeliği</h3>
              <p className="text-sm text-foreground/70">Avrupa Küçük Hayvan Veteriner Hekimleri Federasyonu</p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-light-gray">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-bold mb-2">TSE Kalite Belgesi</h3>
              <p className="text-sm text-foreground/70">TS-EN-ISO 9001 Kalite Yönetim Sistemi</p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-light-gray">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">KHVHD Üyeliği</h3>
              <p className="text-sm text-foreground/70">Küçük Hayvan Veteriner Hekimleri Derneği</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Bize Ulaşın</h2>
          <div className="bg-secondary p-4 rounded-2xl border border-light-gray h-96 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4735303961774!2d30.553362677064618!3d37.76526587236629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b594c1c2eb63%3A0x96c081b6cef96208!2sIsparta%2C%20Turkey!5e0!3m2!1sen!2sus!4v1684140045650!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              className="rounded-xl" 
              style={{border: 0}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <a 
              href="https://www.google.com/maps?q=Isparta+Merkez,+Mehmet+Tönge+Cd.+No:15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 group hover:text-[#E31E24] transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">Adres</h3>
                <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">Isparta Merkez, Mehmet Tönge Cd. No:15</p>
              </div>
            </a>
            <a 
              href="tel:+902461234567" 
              className="flex items-center justify-center gap-4 group hover:text-[#E31E24] transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">Telefon</h3>
                <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">+90 246 123 4567</p>
              </div>
            </a>
            <a 
              href="mailto:info@atavet.com" 
              className="flex items-center justify-center gap-4 group hover:text-[#E31E24] transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">E-posta</h3>
                <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">info@atavet.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 