import Image from 'next/image';
import Link from 'next/link';

export default function DogsPage() {
  const dogInfo = [
    {
      title: 'Sağlık Kontrolü',
      description: 'Köpekler için özel sağlık kontrolleri, aşılar ve koruyucu bakım hizmetlerimiz bulunmaktadır. Düzenli veteriner ziyaretleri, kedinizin sağlığını korumak için çok önemlidir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Cerrahi Operasyonlar',
      description: 'Köpeklerde kısırlaştırma, yumuşak doku, ortopedi ve duyu organları cerrahisi gibi operasyonları en steril ve donanımlı bir şekilde yapıyoruz.',
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
      description: 'Köpek dostlarımızın rütine uygun aşılar ve parazit kontrollerini sağlıklı bir şekilde takibini sağlıyoruz.',
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
      description: 'Köpeklerin diş sağlığı, genel sağlıkları için çok önemlidir. Diş temizliği, diş hastalıklarının tedavisi ve ev bakımı için rehberlik hizmetleri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const dogCareInfo = [
    {
      title: 'Aşı Takibi',
      description: 'Köpeğinizin yaşına ve yaşam tarzına uygun aşı programı ve düzenli hatırlatma servisi.'
    },
    {
      title: 'Parazit Kontrolü',
      description: 'İç ve dış parazitlere karşı koruma ve düzenli tedavi programları.'
    },
    {
      title: 'Tüy ve Cilt Bakımı',
      description: 'Köpeğinizin ırkına uygun tüy bakımı, tıraş ve cilt sağlığı hizmetleri.'
    },
    {
      title: 'Egzersiz ve Aktivite',
      description: 'Köpeğinizin ırkına ve yaşına uygun egzersiz ve aktivite önerileri.'
    },
    {
      title: 'Yaşlı Köpek Bakımı',
      description: 'Yaşlı köpeklerin özel ihtiyaçlarına yönelik bakım ve sağlık hizmetleri.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Köpek Sağlığı ve Bakımı</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak, köpeğinizin sağlığı ve mutluluğu için özel tasarlanmış kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Köpeğiniz İçin En İyi Bakım</h2>
            <p className="text-foreground/70 mb-6">
              Köpekler, sadık dostlarımız ve aile üyelerimizdir. AtaVet&apos;te, her köpeğin kendine özgü sağlık ihtiyaçlarını anlıyor ve ona göre özelleştirilmiş bakım sunuyoruz.
            </p>
            <p className="text-foreground/70 mb-6">
              Düzenli veteriner kontrolleri, doğru beslenme, uygun egzersiz ve koruyucu bakım ile köpeğinizin uzun, sağlıklı ve mutlu bir yaşam sürmesini sağlayabilirsiniz.
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
                src="/atavet-img/kopekbakimi.webp"
                alt="Köpek"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5L19 19"></path>
                <path d="M11.5 6.5L17.5 12.5"></path>
                <path d="M7.5 12.5L10.5 15.5"></path>
                <circle cx="3.5" cy="3.5" r="1"></circle>
                <circle cx="20.5" cy="20.5" r="1"></circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Köpek Sağlığı Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dogInfo.map((item, index) => (
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
          <h2 className="text-3xl font-bold mb-8 text-center">Köpek Bakım Rehberi</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dogCareInfo.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-2">Köpeğim için hangi aşılar gereklidir?</h3>
                <p className="text-foreground/70">
                  Köpekler için temel aşılar arasında Kuduz, Karma aşı (Distemper, Hepatit, Parvovirüs, Parainfluenza), Leptospiroz ve Bronşin (Kennel Cough), Corona virüs ve Lyme bulunur. Köpeğinizin yaşı, yaşam tarzı ve sağlık durumuna göre veteriner hekimimiz size özel bir aşı programı oluşturacaktır.
                </p>
              </div>
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Köpeğim ne sıklıkla veterinere götürülmelidir?</h3>
                <p className="text-foreground/70">
                  Yavru köpekler için aşılar ve erken sağlık taramaları için sık ziyaretler gereklidir. Yetişkin sağlıklı köpekler için yılda en az bir kez, yaşlı köpekler (7 yaş üstü) için ise yılda iki kez kontrol önerilir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Köpeğim için en iyi egzersiz rutini nedir?</h3>
                <p className="text-foreground/70">
                  Köpeğinizin ırkı, yaşı ve sağlık durumuna göre egzersiz ihtiyaçları değişir. Genel olarak, çoğu köpek günde en az 30 dakika aktif egzersiz gerektirir. Bazı aktif ırklar için daha fazla egzersiz gerekebilir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Köpeğiniz İçin Profesyonel Bakım</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Köpeğinizin sağlığı ve mutluluğu için AtaVet&apos;in uzman ekibine güvenin. Özel muayene ve tedavi hizmetlerimiz için hemen randevu alın.
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