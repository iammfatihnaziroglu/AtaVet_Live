import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'muayene',
      title: 'Genel Muayene',
      description: 'Evcil hayvanınızın sağlığını düzenli kontrol etmek için kapsamlı muayene hizmetimiz.',
      longDescription: 'Evcil hayvanınızın sağlık durumunu düzenli olarak kontrol etmek, hastalıkları erken teşhis etmenin ve önlemenin en etkili yoludur. Muayene sırasında evcil hayvanınızın kilosu, vücut sıcaklığı, kalp atış hızı, solunum sayısı gibi temel yaşamsal değerleri ölçülür ve genel sağlık durumu değerlendirilir. Ayrıca beslenme düzeni, davranış değişiklikleri ve yaşam koşulları hakkında bilgi alınır. Genel muayene sayesinde, henüz belirtiler ortaya çıkmadan önce pek çok hastalık erken dönemde tespit edilebilir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      benefits: [
        'Erken hastalık teşhisi',
        'Düzenli sağlık takibi',
        'Özelleştirilmiş beslenme önerileri',
        'Davranış değerlendirmesi',
        'Yaşa özel sağlık tavsiyeleri'
      ]
    },
    {
      id: 'asilar',
      title: 'Aşılar',
      description: 'Evcil hayvanınızı hastalıklardan korumak için gerekli tüm aşılar ve koruyucu bakım.',
      longDescription: 'Aşılama, evcil hayvanınızı ciddi ve potansiyel olarak ölümcül hastalıklara karşı korumanın en etkili yoludur. Kliniğimiz, kediler ve köpekler için kuduz, karma, lösemi, kennel cough gibi çeşitli aşıları sunmaktadır. Aşı programı, evcil hayvanınızın yaşına, yaşam tarzına ve sağlık durumuna göre özelleştirilmektedir. Düzenli aşı takvimine uymak, hem evcil hayvanınızın hem de ailenizin sağlığını korumak için büyük önem taşır.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      ),
      benefits: [
        'Ölümcül hastalıklara karşı koruma',
        'Özelleştirilmiş aşı takvimi',
        'Uluslararası seyahat belgeleri',
        'Aşı takip kartı',
        'Hatırlatma servisi'
      ]
    },
    {
      id: 'cerrahi',
      title: 'Cerrahi Operasyonlar',
      description: 'Modern ekipmanlarla gerçekleştirilen güvenli ve profesyonel cerrahi müdahaleler.',
      longDescription: 'Kliniğimizde, modern ekipmanlar ve deneyimli veteriner hekimlerimiz ile güvenli ve profesyonel cerrahi operasyonlar gerçekleştiriyoruz. Kısırlaştırma, diş çekimi, tümör alımı, ortopedik ameliyatlar ve daha birçok cerrahi işlem sunmaktayız. Her operasyon öncesinde detaylı bir preoperatif değerlendirme yapılmakta ve en uygun anestezi protokolü belirlenmektedir. Operasyon sonrasında ise ağrı yönetimi ve bakım talimatları hakkında detaylı bilgilendirme yapılmaktadır.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <line x1="9" y1="9" x2="10" y2="9"></line>
          <line x1="9" y1="13" x2="15" y2="13"></line>
          <line x1="9" y1="17" x2="15" y2="17"></line>
        </svg>
      ),
      benefits: [
        'Modern cerrahi ekipmanlar',
        'Deneyimli veteriner cerrahlar',
        'Detaylı preoperatif değerlendirme',
        'Etkili ağrı yönetimi',
        'Kapsamlı postoperatif bakım'
      ]
    },
    {
      id: 'bakim',
      title: 'Bakım ve Tıraş',
      description: 'Uzman ekibimiz tarafından dostunuz için özel bakım, tıraş ve kuaförlük hizmetleri.',
      longDescription: 'Evcil hayvanınızın görünümü ve sağlığı için profesyonel bakım hizmetleri sunuyoruz. Uzman ekibimiz, ırka özgü bakım ihtiyaçlarını bilerek, evcil hayvanınızın cilt ve tüy yapısına uygun ürünler kullanır. Tüy kesimi, yıkama, tırnak kesimi, kulak temizliği ve diş bakımı gibi hizmetlerimizle dostunuzun hem güzel görünmesini hem de sağlıklı olmasını sağlıyoruz. Tüm bakım işlemleri, stres faktörünü en aza indirmek için özel tasarlanmış bir ortamda gerçekleştirilmektedir.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
          <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
          <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </svg>
      ),
      benefits: [
        'Irka özgü bakım teknikleri',
        'Doğal ve hassas ciltler için özel ürünler',
        'Stres azaltıcı ortam',
        'Mevsimsel tüy bakımı',
        'Temel sağlık kontrolü'
      ]
    },
    {
      id: 'laboratuvar',
      title: 'Laboratuvar Hizmetleri',
      description: 'Yerinde tanı testleri ve laboratuvar hizmetleri ile hızlı ve doğru sonuçlar.',
      longDescription: 'Kliniğimizde, hızlı ve doğru teşhis için modern laboratuvar ekipmanları bulunmaktadır. Kan tahlilleri, idrar analizleri, dışkı testleri, mikroskobik incelemeler ve hormon testleri gibi önemli laboratuvar hizmetlerini sunuyoruz. Yerinde yapılan testler sayesinde sonuçları hızlı bir şekilde değerlendirip, tedaviye en kısa sürede başlayabiliyoruz. Ayrıca gerekli durumlarda dış laboratuvarlar ile işbirliği yaparak daha spesifik testler de gerçekleştirebiliyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3l9 9a1.5 1.5 0 0 1 0 2.121l-9 9L3 16.5 9 9z"></path>
          <path d="M14 8L9 3 3 9l5 5"></path>
        </svg>
      ),
      benefits: [
        'Hızlı sonuç alma',
        'Geniş test yelpazesi',
        'Yüksek doğruluk oranı',
        'Detaylı sonuç değerlendirmesi',
        'Tedavi takibi için tekrarlı testler'
      ]
    },
    {
      id: 'acil',
      title: 'Acil Hizmetler',
      description: 'Acil durumlarda 7/24 hizmet veren acil müdahale ekibimiz her zaman yanınızda.',
      longDescription: 'Evcil hayvanınızın sağlığıyla ilgili acil durumlar için 7/24 hizmet sunuyoruz. Zehirlenme, travma, solunum güçlüğü, doğum komplikasyonları gibi acil durumlarda deneyimli ekibimiz hızlı ve etkili müdahale için her zaman hazırdır. Acil durumlarda, teşhis ve tedavi sürecini hızlandırmak için gerekli tüm ekipmanlara sahip olan kliniğimiz, kritik durumlarda hayat kurtarıcı müdahaleleri yapabilmektedir. Acil durumlar için ayrı bir telefon hattımız bulunmaktadır.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      benefits: [
        '7/24 hizmet',
        'Deneyimli acil müdahale ekibi',
        'Modern acil ekipmanları',
        'Hızlı müdahale',
        'Kritik bakım ünitesi'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Hizmetlerimiz</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            AtaVet olarak evcil hayvanlarınızın sağlığı ve mutluluğu için kapsamlı veterinerlik hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="text-primary mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-foreground/70 mb-6">
                  {service.longDescription}
                </p>
                <div className="bg-secondary p-6 rounded-xl border border-light-gray">
                  <h3 className="font-bold mb-4">Faydaları ve Özellikler</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? 'md:col-start-1' : ''} h-64 md:h-96 bg-primary/10 rounded-2xl flex items-center justify-center`}>
                <div className="text-7xl font-bold text-primary/30">AtaVet</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 md:p-12 text-center border border-light-gray">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Evcil Hayvanınız İçin En İyi Bakımı Sunuyoruz</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Evcil hayvanınızın sağlığı ve mutluluğu için profesyonel ekibimizle hizmetinizdeyiz. Hemen randevu alın veya sorularınız için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/randevu" className="btn-primary">
              Randevu Al
            </Link>
            <Link href="/iletisim" className="btn-secondary">
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Müşteri Yorumları</h2>
          <div className="bg-secondary p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-light-gray">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#E31E24" className="sm:w-6 sm:h-6">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <span className="font-bold text-sm sm:text-base">4.8</span>
                <span className="text-foreground/70 text-xs sm:text-base">Google Değerlendirmeleri (120+ Yorum)</span>
              </div>
              <a 
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline text-sm sm:text-base"
              >
                Tüm Yorumları Gör
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-background p-3 sm:p-4 rounded-lg sm:rounded-xl border border-light-gray">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral flex items-center justify-center text-primary font-bold text-sm sm:text-base">M</div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Mustafa Yılmaz</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#E31E24" className="sm:w-4 sm:h-4">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/70">
                  &ldquo;Kedimiz Boncuk&apos;un tedavisi için AtaVet&apos;i tercih ettik ve çok memnun kaldık. Dr. Ahmet Bey&apos;in ilgisi ve uzmanlığı sayesinde kedimiz kısa sürede iyileşti. Tüm evcil hayvan sahiplerine tavsiye ederim.&rdquo;
                </p>
              </div>
              
              <div className="bg-background p-3 sm:p-4 rounded-lg sm:rounded-xl border border-light-gray">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral flex items-center justify-center text-primary font-bold text-sm sm:text-base">A</div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Ayşe Demir</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#E31E24" className="sm:w-4 sm:h-4">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/70">
                  &ldquo;Köpeğimiz Max&apos;in acil durumu için gece yarısı aradığımızda hemen yanıt aldık ve kliniğe gittiğimizde tedaviye başlandı. Profesyonel ve şefkatli yaklaşımları için AtaVet ekibine çok teşekkür ederiz.&rdquo;
                </p>
              </div>
              
              <div className="bg-background p-3 sm:p-4 rounded-lg sm:rounded-xl border border-light-gray">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral flex items-center justify-center text-primary font-bold text-sm sm:text-base">E</div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Emre Koç</h4>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#E31E24" className="sm:w-4 sm:h-4">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" className="sm:w-4 sm:h-4">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/70">
                  &ldquo;Tavşanımızın bakımı için düzenli olarak AtaVet&apos;e gidiyoruz. Hem fiyatlar makul hem de hizmet kalitesi yüksek. Tek sorun bazen randevu almak için birkaç gün beklemek gerekebiliyor.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 