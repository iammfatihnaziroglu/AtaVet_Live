import Image from 'next/image';
import Link from 'next/link';

export default function OtherPetsPage() {
  const otherPetsInfo = [
    {
      title: 'Sağlık Kontrolü',
      description: 'Hamster, guinea pig, şinşila, iguana, ve diğer egzotik türler için özel sağlık kontrolleri, koruyucu bakım ve tedavi hizmetleri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Beslenme Danışmanlığı',
      description: 'Her tür için özel beslenme planları oluşturuyoruz. Doğru beslenme, farklı hayvan türlerinin sağlığı için kritik öneme sahiptir.',
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
      title: 'Yaşam Alanı Danışmanlığı',
      description: 'Her tür için uygun kafes, teraryum veya yaşam alanı düzenlemesi konusunda uzman önerileri sunuyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      title: 'Egzotik Tür Uzmanları',
      description: 'Ekibimiz, nadir ve egzotik türler konusunda özel eğitim almış veteriner hekimlerden oluşmaktadır.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const otherPetsCareInfo = [
    {
      title: 'Kemirgenler',
      description: 'Hamster, gerbil, guinea pig ve ratlar için bakım ve sağlık rehberi.'
    },
    {
      title: 'Sürüngenler',
      description: 'Kaplumbağa, iguana, yılan ve kertenkele türleri için özel bakım ihtiyaçları.'
    },
    {
      title: 'Küçük Memeliler',
      description: 'Şinşila, degu ve diğer küçük memeliler için yaşam koşulları ve sağlık önerileri.'
    },
    {
      title: 'Amfibiler',
      description: 'Kurbağa, semender ve diğer amfibiler için nem ve sıcaklık dengeleri.'
    },
    {
      title: 'Akuatik Türler',
      description: 'Akvaryum canlıları için su kalitesi, beslenme ve sağlık rehberi.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Diğer Evcil Hayvan Türleri</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak, tüm evcil hayvan türleri için özel tasarlanmış kapsamlı hizmetler sunuyoruz. Kedi ve köpek dışındaki tüm dostlarınız için uzman bakımı.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tüm Evcil Dostlarınız İçin Uzman Bakım</h2>
            <p className="text-foreground/70 mb-6">
              Evcil hayvan dostlarınız ne kadar küçük, egzotik veya sıra dışı olursa olsun, her birinin özel sağlık ihtiyaçlarını karşılamak için buradayız. Kemirgenlerden sürüngenlere, küçük memelilerden egzotik kuşlara kadar birçok tür için özelleştirilmiş bakım sunuyoruz.
            </p>
            <p className="text-foreground/70 mb-6">
              AtaVet&apos;te, veteriner hekimlerimiz farklı türlerin benzersiz ihtiyaçlarını anlamak için özel eğitim almıştır. Size ve evcil hayvanınıza güvenli, kapsamlı ve şefkatli bakım sunmaktan gurur duyuyoruz.
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
                src="/images/exotic-pets.jpg"
                alt="Egzotik Hayvanlar"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 5.5C19 7.43 17.43 9 15.5 9C14.54 9 13.68 8.65 13.04 8.06C12.53 7.61 12.26 7.03 12.06 6.39C11.81 5.6 12.47 4.91 13.3 5.09C13.62 5.16 13.95 5.18 14.28 5.12C14.64 5.06 14.97 4.92 15.27 4.74C15.95 4.36 16.77 4.65 17.19 5.31C17.88 5.23 18.49 4.94 19 4.5C19 4.5 19 5.5 19 5.5Z" fill="#E31E24"/>
                <path d="M5.91 22C4.58 22 3.5 20.92 3.5 19.59C3.5 18.26 4.58 17.18 5.91 17.18C6.99 17.18 7.92 17.88 8.23 18.85C8.36 19.25 8.79 19.6 9.36 19.36C9.62 19.26 9.84 19.09 9.99 18.86C10.53 18.08 11.47 17.6 12.5 17.6C13.53 17.6 14.47 18.08 15.01 18.86C15.16 19.09 15.38 19.26 15.64 19.36C16.21 19.6 16.64 19.26 16.77 18.85C17.08 17.89 18.01 17.18 19.09 17.18C20.42 17.18 21.5 18.26 21.5 19.59C21.5 20.92 20.42 22 19.09 22C18.37 22 17.73 21.7 17.28 21.21C17.24 21.17 17.21 21.13 17.17 21.09C16.99 20.9 16.78 20.76 16.56 20.65C15.97 20.39 15.29 20.36 14.68 20.58C14.36 20.69 14.09 20.89 13.89 21.13C13.33 21.74 12.68 22 12 22C11.32 22 10.67 21.74 10.11 21.13C9.91 20.89 9.64 20.69 9.32 20.58C8.71 20.36 8.03 20.39 7.44 20.65C7.22 20.76 7.01 20.9 6.83 21.09C6.79 21.13 6.76 21.17 6.72 21.21C6.27 21.7 5.63 22 5.91 22Z" fill="#E31E24"/>
                <path d="M6 9C6 11.21 7.79 13 10 13C11.12 13 12.1 12.55 12.82 11.82C13.28 11.35 13.53 10.73 13.91 10.16C14.29 9.59 15.15 9.46 15.31 10.16C15.46 10.82 15.89 11.4 16.43 11.8C16.85 12.11 16.75 12.69 16.47 13.26C16.18 13.82 15.01 13.78 14.48 14.17C13.38 14.95 11.75 15.35 10.08 14.73C8.08 14 6.39 12.65 6.08 10.54C6.03 10.2 6 9.86 6 9.5C6 9.5 6 9 6 9Z" fill="#E31E24"/>
                <path d="M2 5.5C2 7.43 3.57 9 5.5 9C6.46 9 7.32 8.65 7.96 8.06C8.47 7.61 8.74 7.03 8.94 6.39C9.19 5.6 8.53 4.91 7.7 5.09C7.38 5.16 7.05 5.18 6.73 5.12C6.36 5.06 6.03 4.92 5.73 4.74C5.05 4.36 4.23 4.65 3.81 5.31C3.12 5.23 2.51 4.94 2 4.5C2 4.5 2 5.5 2 5.5Z" fill="#E31E24"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Özel Bakım Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPetsInfo.map((item, index) => (
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
          <h2 className="text-3xl font-bold mb-8 text-center">Tür Bazlı Rehberler</h2>
          <div className="bg-secondary p-6 rounded-xl border border-light-gray">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPetsCareInfo.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-2">Hangi egzotik türler için hizmet veriyorsunuz?</h3>
                <p className="text-foreground/70">
                  AtaVet olarak kemirgenler (hamster, guinea pig, fare, gerbil), sürüngenler (kaplumbağa, iguana, yılan), küçük memeliler (şinşila, degu), amfibiler ve çeşitli kuş türleri dahil olmak üzere geniş bir yelpazede egzotik evcil hayvan türleri için hizmet sunuyoruz. Lütfen spesifik bir türle ilgili sorularınız için bizimle iletişime geçin.
                </p>
              </div>
              <div className="border-b border-light-gray pb-4">
                <h3 className="text-xl font-semibold mb-2">Egzotik evcil hayvanımı ne sıklıkla muayene ettirmeliyim?</h3>
                <p className="text-foreground/70">
                  Egzotik evcil hayvanlar için türe bağlı olarak genellikle yılda 1-2 kez sağlık kontrolü önerilir. Ancak, kısa ömürlü türler veya yaşlı hayvanlar için daha sık kontroller gerekebilir. Ayrıca, herhangi bir davranış değişikliği, iştah kaybı, dışkılama/idrar alışkanlıklarında değişiklik veya fiziksel semptomlar gözlemlerseniz hemen veterinere başvurmanız önemlidir.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Egzotik evcil hayvanların özel bakım ihtiyaçları nelerdir?</h3>
                <p className="text-foreground/70">
                  Egzotik evcil hayvanların bakımı türe göre büyük farklılıklar gösterir. Doğru sıcaklık ve nem seviyeleri, özel beslenme, uygun barınma koşulları ve türe özgü sosyal ihtiyaçlar gibi faktörler hayvanınızın sağlığı için kritik öneme sahiptir. AtaVet&apos;te, evcil hayvanınızın türüne özel bakım rehberleri ve danışmanlık hizmeti sunuyoruz. Özel bakım ihtiyaçları için randevu alarak veteriner hekimlerimizle görüşebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Egzotik Dostunuz İçin Profesyonel Bakım</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Tüm evcil hayvanlarınızın sağlığı ve mutluluğu için AtaVet&apos;in uzman ekibine güvenin. Özel muayene ve tedavi hizmetlerimiz için hemen randevu alın.
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