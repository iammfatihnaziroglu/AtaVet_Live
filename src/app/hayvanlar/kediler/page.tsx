import Image from 'next/image';
import Link from 'next/link';

export default function CatsPage() {
  const catInfo = [
    {
      title: 'Sağlık Kontrolü',
      description: 'Kediler için özel sağlık kontrolleri, aşılar ve koruyucu bakım hizmetlerimiz bulunmaktadır. Düzenli veteriner ziyaretleri, kedinizin sağlığını korumak için çok önemlidir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Cerrahi Operasyonlar',
      description: 'Kedilerde kısırlaştırma, yumuşak doku, ortopedi ve duyu organları cerrahisi gibi operasyonları en steril ve donanımlı bir şekilde yapıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      title: 'Aşılama ve Parazit Kontrolü',
      description: 'Evcil dostlarımızın rütine uygun aşılar ve parazit kontrollerini sağlıklı bir şekilde takibini sağlıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5L19 19"></path>
          <path d="M11.5 6.5L17.5 12.5"></path>
          <path d="M7.5 12.5L10.5 15.5"></path>
          <circle cx="3.5" cy="3.5" r="1"></circle>
          <circle cx="20.5" cy="20.5" r="1"></circle>
        </svg>
      )
    },
    {
      title: 'Diş Bakımı',
      description: 'Kedilerin diş sağlığı, genel sağlıkları için çok önemlidir. Diş temizliği, diş hastalıklarının tedavisi ve ev bakımı için rehberlik hizmetleri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const catCareInfo = [
    {
      title: 'İç Parazit Kontrolü',
      description: 'Kedilerin iç parazitlerden korunması için düzenli tedavi ve önlemler hakkında bilgilendirme.'
    },
    {
      title: 'Dış Parazit Kontrolü',
      description: 'Pire, kene ve diğer dış parazitlere karşı koruyucu önlemler ve tedavi yöntemleri.'
    },
    {
      title: 'Tüy Bakımı',
      description: 'Kedinizin tüy yapısına uygun bakım, tıraş ve temizlik hizmetleri.'
    },
    {
      title: 'Yaşlanma Bakımı',
      description: 'Yaşlı kedilerin özel ihtiyaçlarına yönelik bakım ve sağlık hizmetleri.'
    },
    {
      title: 'Acil Durumlar',
      description: 'Kediler için acil müdahale gerektiren durumlar ve ilk yardım rehberi.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Kedi Sağlığı ve Bakımı</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak, kedinizin sağlığı ve mutluluğu için özel tasarlanmış kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Kediniz İçin En İyi Bakım</h2>
            <p className="text-foreground/70 mb-6">
              Kediler, bağımsız doğaları ve özel ihtiyaçlarıyla benzersiz evcil hayvanlardır. AtaVet&apos;te, her kedinin kendine özgü sağlık ihtiyaçlarını anlıyor ve ona göre özelleştirilmiş bakım sunuyoruz. 
            </p>
            <p className="text-foreground/70 mb-6">
              Düzenli veteriner kontrolleri, doğru beslenme ve koruyucu bakım ile kedinizin uzun, sağlıklı ve mutlu bir yaşam sürmesini sağlayabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/randevu" className="btn-primary text-center">
                Randevu Al
              </Link>
              <Link href="/iletisim" className="btn-secondary text-center">
                Bize Ulaşın
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/atavet-img/kedibakimi.webp"
                alt="Kedi"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
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
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Kedi Sağlığı Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catInfo.map((item, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl border border-light-gray hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Care Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Kedi Bakım Rehberi</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catCareInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="space-y-4">
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Kedim için hangi aşılar gereklidir?</h3>
                <p className="text-foreground/70">
                  Kediler için temel aşılar arasında kuduz, karma aşı (Panleukopenia, Herpesvirus ve Calicivirus) ve FeLV (Feline Leukemia Virus) bulunur. Kedinizin yaşı, yaşam tarzı ve sağlık durumuna göre veterinerimiz size özel bir aşı programı oluşturacaktır.
                </p>
              </div>
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Kedim ne sıklıkla veterinere götürülmelidir?</h3>
                <p className="text-foreground/70">
                  Yavru kediler için sık ziyaretler gereklidir, özellikle aşılar ve erken sağlık taramaları için. Yetişkin sağlıklı kediler için yılda en az bir kez, yaşlı kediler (7 yaş üstü) için ise yılda iki kez kontrol önerilir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kedim için en iyi besleme rutini nedir?</h3>
                <p className="text-foreground/70">
                  Kediler genellikle günde birkaç küçük öğün yemeyi tercih ederler. Yüksek kaliteli, yaşa uygun kedi maması ve her zaman taze su sağlamak önemlidir. Özel beslenme ihtiyaçları için veterinerimize danışabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Kediniz İçin Profesyonel Bakım</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Kedinizin sağlığı ve mutluluğu için AtaVet&apos;in uzman ekibine güvenin. Özel muayene ve tedavi hizmetlerimiz için hemen randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/randevu" className="btn-primary">
              Randevu Al
            </Link>
            <Link href="/iletisim" className="btn-secondary">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 