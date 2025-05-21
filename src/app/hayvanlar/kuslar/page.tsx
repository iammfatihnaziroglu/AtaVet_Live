import Image from 'next/image';
import Link from 'next/link';

export default function BirdsPage() {
  const birdInfo = [
    {
      title: 'Sağlık Kontrolü',
      description: 'Kuşlar için özel sağlık kontrolleri, aşılar ve koruyucu bakım hizmetlerimiz bulunmaktadır. Düzenli veteriner ziyaretleri, kuşunuzun sağlığını korumak için çok önemlidir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Beslenme Danışmanlığı',
      description: 'Kuşunuzun türüne, yaşına ve sağlık durumuna göre özel beslenme planları oluşturuyoruz. Doğru beslenme, kuşunuzun uzun ve sağlıklı bir yaşam sürmesi için temel faktördür.',
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
      title: 'Davranış Rehberliği',
      description: 'Kuş davranışları konusunda rehberlik ve eğitim hizmetlerimizle, problematik davranışları anlama ve çözme konusunda size destek oluyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: 'Gaga ve Tırnak Bakımı',
      description: 'Kuşların gaga ve tırnak sağlığı, genel sağlıkları için çok önemlidir. Gaga ve tırnak bakımı, hastalıkların tedavisi ve ev bakımı için rehberlik hizmetleri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const birdCareInfo = [
    {
      title: 'Parazit Kontrolü',
      description: 'Kuşların iç ve dış parazitlerden korunması için düzenli tedavi ve önlemler hakkında bilgilendirme.'
    },
    {
      title: 'Tüy Bakımı',
      description: 'Kuşunuzun tüy sağlığını korumak için bakım ve besleme önerileri.'
    },
    {
      title: 'Kafes Hijyeni',
      description: 'Kafes temizliği ve hijyeni için öneriler ve kuşunuzun sağlıklı bir ortamda yaşaması için ipuçları.'
    },
    {
      title: 'Yavrular İçin Bakım',
      description: 'Yavru kuşların özel ihtiyaçlarına yönelik bakım ve beslenme rehberi.'
    },
    {
      title: 'Acil Durumlar',
      description: 'Kuşlar için acil müdahale gerektiren durumlar ve ilk yardım rehberi.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Egzotik Sağlığı ve Bakımı</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak, egzotik hayvanlarınızın sağlığı ve mutluluğu için özel tasarlanmış kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Egzotik Hayvanlarınız İçin En İyi Bakım</h2>
            <p className="text-foreground/70 mb-6">
              Egzotik hayvanlar, narin yapıları ve özel ihtiyaçlarıyla benzersiz evcil hayvanlardır. AtaVet&apos;te, her kuş türünün kendine özgü sağlık ihtiyaçlarını anlıyor ve ona göre özelleştirilmiş bakım sunuyoruz. 
            </p>
            <p className="text-foreground/70 mb-6">
              Düzenli veteriner kontrolleri, doğru beslenme ve koruyucu bakım ile egzotik hayvanınızın uzun, sağlıklı ve mutlu bir yaşam sürmesini sağlayabilirsiniz.
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
                src="/images/bird-care.jpg"
                alt="Kuş"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.9998L19 14.9998V7.99979C19 5.99979 17.5 3.99979 15 3.99979C15 3.99979 13.5 3.99979 13 3.99979C12.5 3.99979 12 4.19979 11.61 4.58979L6.11 9.58979C5.5 10.1098 5.5 10.9998 6.11 11.5898L8.11 13.5898C8.88 14.3598 10.13 14.1998 10.62 13.1798L12 10.9998" fill="#E31E24"/>
                <path d="M14 14.4998V17.9998C14 19.3298 12.33 20.1598 11.21 19.3998L8.79 17.5998C8.28 17.2198 8 16.5998 8 15.9998V15.2998" stroke="#E31E24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.91 16.9998C2.97 14.9598 2 12.4098 2 9.68979C2 4.58979 6.02 1.98979 9.63 4.99979" stroke="#E31E24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Kuş Sağlığı Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {birdInfo.map((item, index) => (
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
          <h2 className="text-3xl font-bold mb-8 text-center">Kuş Bakım Rehberi</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {birdCareInfo.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-2">Kuşum için hangi sağlık kontrolleri gereklidir?</h3>
                <p className="text-foreground/70">
                  Kuşlar için en az yılda bir kez genel sağlık kontrolü önerilir. Bu kontroller sırasında gaga, tüy, tırnak, solunum ve sindirim sistemi değerlendirmesi yapılır. Kuşunuzun davranışında veya görünümünde herhangi bir değişiklik fark ederseniz hemen veterinere başvurmalısınız.
                </p>
              </div>
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Kuşlar için en uygun beslenme nasıl olmalıdır?</h3>
                <p className="text-foreground/70">
                  Kuşlar için dengeli beslenme, türüne göre değişiklik göstermekle birlikte genellikle kaliteli tohum karışımları, taze meyve ve sebzeler, vitamin takviyeleri ve temiz su içerir. Kuşunuzun türüne ve ihtiyaçlarına özel beslenme planı için veterinerimize danışabilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kuşumun bakımında dikkat etmem gereken temel noktalar nelerdir?</h3>
                <p className="text-foreground/70">
                  Kuşunuzun bakımında kafes temizliği ve hijyeni, düzenli beslenme, temiz içme suyu sağlanması, tüy bakımı ve düzenli sağlık kontrolleri önemlidir. Ayrıca, kuşunuzun sosyal ihtiyaçlarını karşılamak ve zihinsel uyarım sağlamak için onunla vakit geçirmeniz önerilir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Kuşunuz İçin Profesyonel Bakım</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Kuşunuzun sağlığı ve mutluluğu için AtaVet&apos;in uzman ekibine güvenin. Özel muayene ve tedavi hizmetlerimiz için hemen randevu alın.
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