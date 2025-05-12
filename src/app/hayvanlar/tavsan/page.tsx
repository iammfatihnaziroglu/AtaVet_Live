import Image from 'next/image';
import Link from 'next/link';

export default function RabbitsPage() {
  const rabbitInfo = [
    {
      title: 'Sağlık Kontrolü',
      description: 'Tavşanlar için özel sağlık kontrolleri, aşılar ve koruyucu bakım hizmetlerimiz bulunmaktadır. Düzenli veteriner ziyaretleri, tavşanınızın sağlığını korumak için çok önemlidir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Beslenme Danışmanlığı',
      description: 'Tavşanınızın yaşına ve sağlık durumuna göre özel beslenme planları oluşturuyoruz. Doğru beslenme, tavşanınızın uzun ve sağlıklı bir yaşam sürmesi için temel faktördür.',
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
      title: 'Diş Bakımı',
      description: 'Tavşanların diş sağlığı, genel sağlıkları için çok önemlidir. Sürekli büyüyen dişlerin kontrolü, diş hastalıklarının tedavisi ve ev bakımı için rehberlik hizmetleri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Tırnak ve Tüy Bakımı',
      description: 'Tavşanların tırnak ve tüy bakımı, sağlıkları için düzenli olarak yapılmalıdır. Profesyonel bakım hizmetlerimizle tavşanınızın konforunu artırıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  const rabbitCareInfo = [
    {
      title: 'Barınma Koşulları',
      description: 'Tavşanınız için uygun kafes boyutu, yerleşim ve egzersiz alanları hakkında öneriler.'
    },
    {
      title: 'Doğru Beslenme',
      description: 'Saman, taze sebzeler ve pelet yem dengesi içeren beslenme rehberi.'
    },
    {
      title: 'Diş Sağlığı',
      description: 'Sürekli büyüyen dişlerin sağlığını korumak için beslenme ve bakım önerileri.'
    },
    {
      title: 'Sosyalleşme ve Egzersiz',
      description: 'Tavşanınızın fiziksel ve zihinsel sağlığı için gereken aktiviteler.'
    },
    {
      title: 'Acil Durumlar',
      description: 'Tavşanlar için acil müdahale gerektiren durumlar ve ilk yardım rehberi.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Tavşan Sağlığı ve Bakımı</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak, tavşanınızın sağlığı ve mutluluğu için özel tasarlanmış kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tavşanınız İçin En İyi Bakım</h2>
            <p className="text-foreground/70 mb-6">
              Tavşanlar, sevimli ve sevecen doğaları ile harika evcil hayvanlardır. Ancak özel bakım ihtiyaçları vardır. AtaVet&apos;te, tavşanların kendine özgü sağlık ihtiyaçlarını anlıyor ve ona göre özelleştirilmiş bakım sunuyoruz.
            </p>
            <p className="text-foreground/70 mb-6">
              Düzenli veteriner kontrolleri, doğru beslenme ve koruyucu bakım ile tavşanınızın uzun, sağlıklı ve mutlu bir yaşam sürmesini sağlayabilirsiniz.
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
                src="/images/rabbit-care.jpg"
                alt="Tavşan"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 4C14.22 4 12 7.53 12 10C12 12.4 9.8 13.5 8.5 14C8.12 14.17 8 14.5 8 14.91V16.59C8 16.87 8.15 17.12 8.38 17.27L9.83 18.25C10.05 18.41 10.31 18.5 10.58 18.5H14.92C15.35 18.5 15.7 18.15 15.7 17.72C15.7 17.29 15.35 16.94 14.92 16.94H12.8C12.3 16.94 12 16.41 12 16.14C12 15.87 12.37 15.5 12.9 15.5H14.92C15.8 15.5 16.5 14.8 16.5 13.92V13.01C19.89 12.5 22 9.86 22 7V5.5C22 4.12 20.88 3 19.5 3H18.5C18.22 3 18 3.22 18 3.5V4Z" fill="#E31E24"/>
                <path d="M5.5 8C6.88 8 8 6.88 8 5.5C8 4.12 6.88 3 5.5 3C4.12 3 3 4.12 3 5.5C3 6.88 4.12 8 5.5 8Z" fill="#E31E24"/>
                <path d="M7.5 9H3.5C2.67 9 2 9.67 2 10.5V13.49C2 13.78 2.14 14.05 2.38 14.21L4.5 15.62V20C4.5 20.55 4.95 21 5.5 21C6.05 21 6.5 20.55 6.5 20V15C6.5 14.78 6.4 14.58 6.23 14.45L4 12.9V10.5H7C7.28 10.5 7.5 10.28 7.5 10V9Z" fill="#E31E24"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tavşan Sağlığı Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rabbitInfo.map((item, index) => (
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
          <h2 className="text-3xl font-bold mb-8 text-center">Tavşan Bakım Rehberi</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rabbitCareInfo.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-2">Tavşanım için hangi sağlık kontrolleri gereklidir?</h3>
                <p className="text-foreground/70">
                  Tavşanlar için yılda en az bir kez genel sağlık kontrolü önerilir. Bu kontroller sırasında diş sağlığı, sindirim sistemi, tüy ve tırnak durumu değerlendirilir. Ayrıca, tavşanınızın davranışında veya iştahında değişiklik fark ederseniz hemen veterinere başvurmalısınız.
                </p>
              </div>
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Tavşanlar için doğru beslenme nasıl olmalıdır?</h3>
                <p className="text-foreground/70">
                  Tavşanların diyeti esas olarak sınırsız yüksek kaliteli samandan oluşmalıdır. Bunun yanında günlük taze sebzeler, sınırlı miktarda pelet yem ve nadiren meyve verilebilir. Tavşanlar, sindirim sistemlerinin sağlıklı çalışması ve sürekli büyüyen dişlerinin aşınması için lifli gıdalara ihtiyaç duyarlar.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tavşanımın yaşam alanı nasıl düzenlenmelidir?</h3>
                <p className="text-foreground/70">
                  Tavşanlar için geniş, güvenli ve temiz bir yaşam alanı önemlidir. Kafeslerinin yanı sıra günlük egzersiz yapabilecekleri alanlar sağlanmalıdır. Yaşam alanında temiz su, yem kabı, saman haznesi, tuvalet kutusu ve saklanabilecekleri bir köşe bulunmalıdır. Oda sıcaklığı 15-22°C arasında tutulmalı ve direkt güneş ışığı ve cereyandan korunmalıdırlar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tavşanınız İçin Profesyonel Bakım</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Tavşanınızın sağlığı ve mutluluğu için AtaVet&apos;in uzman ekibine güvenin. Özel muayene ve tedavi hizmetlerimiz için hemen randevu alın.
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