'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  // Adding more testimonials with photos
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      petName: 'Paşa',
      text: 'Kedim Paşa\'nın böbrek yetmezliği için AtaVet\'te özel bir diyet ve tedavi programı uygulandı. Dr. Ayşe Hanım\'ın yakın takibi ve özenli bakımı sayesinde Paşa\'nın değerleri normale döndü ve şimdi çok daha enerjik.',
      rating: 5,
      pet: 'Kedi',
      ownerImage: '/images/stories/pet-owner-1.jpg',
      petImage: '/atavet-img/pasa-1.webp',
      date: '2 hafta önce'
    },
    {
      id: 2,
      name: 'Zeynep Demir',
      petName: 'Max',
      text: 'Köpeğim Max\'in kalça displazisi için AtaVet\'te fizik tedavi ve rehabilitasyon hizmetleri aldık. 3 aylık tedavi sonucunda Max şimdi rahatça koşup oynayabiliyor. Profesyonel yaklaşımları ve sevgi dolu ortamları için teşekkür ediyorum.',
      rating: 5,
      pet: 'Köpek',
      ownerImage: '/images/stories/pet-owner-2.jpg',
      petImage: '/atavet-img/max-1.webp',
      date: '1 ay önce'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      petName: 'Şans',
      text: 'Kedim Şans\'ın diş enfeksiyonu ciddi bir hal almıştı. AtaVet\'te diş taşı temizliği ve gerekli diş çekimleri yapıldı. Operasyon sonrası bakım sürecinde de sürekli bilgilendirilmemiz bizi çok rahatlattı. Şans şimdi çok daha sağlıklı besleniyor.',
      rating: 4,
      pet: 'Kedi',
      ownerImage: '/images/stories/avatar-1.jpg',
      petImage: '/atavet-img/sans-1.webp',
      date: '2 ay önce'
    },
    {
      id: 4,
      name: 'Ebru Öztürk',
      petName: 'Dex',
      text: 'Köpeğim Dex\'in aniden başlayan epilepsi nöbetleri için gece yarısı AtaVet acil servisini aradım. Hemen müdahale ettiler ve doğru teşhisle uygun ilaç tedavisine başladık. 6 aydır nöbet geçirmiyor ve yaşam kalitesi arttı.',
      rating: 5,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-2.jpg',
      petImage: '/atavet-img/dex-1.webp',
      date: '3 hafta önce'
    },
    {
      id: 5,
      name: 'Murat Demir',
      petName: 'Kakao',
      text: 'Kedimiz Kakao\'nun metabolik rahatsızlığı için AtaVet\'e başvurduk. Dr. Emre\'nin önerdiği tedavi ve beslenme düzeni sayesinde sağlığına kavuştu ve eski enerjisine geri döndü.',
      rating: 5,
      pet: 'Kedi',
      ownerImage: '/images/stories/avatar-3.jpg',
      petImage: '/atavet-img/kakaovefistik-1.webp',
      date: '1 hafta önce'
    },
    {
      id: 6,
      name: 'Selin Kaya',
      petName: 'Pamuk',
      text: 'Tavşanımız Pamuk\'un diş problemleri yemek yemesini engelliyordu. AtaVet\'te uzman kemirgen doktoru özel kesim ve törpüleme işlemiyle dişlerini düzenledi. Artık düzenli kontrollerle bu sorunu yönetebiliyoruz ve Pamuk tekrar sağlıklı bir şekilde beslenebiliyor.',
      rating: 5,
      pet: 'Tavşan',
      ownerImage: '/images/stories/pet-owner-2.jpg',
      petImage: '/atavet-img/tavsan-1.webp',
      date: '1 gün önce'
    },
    {
      id: 7,
      name: 'Cem Yıldırım',
      petName: 'Boncuk',
      text: 'Muhabbet kuşum Boncuk\'un kanat travması için AtaVet\'e başvurduk. Kırık tedavisi sonrası özel rehabilitasyon süreci uygulandı. 2 ay içinde tekrar uçmaya başladı. Kuş sağlığı konusunda uzman bir klinik olmaları büyük şans.',
      rating: 5,
      pet: 'Kuş',
      ownerImage: '/images/stories/avatar-1.jpg',
      petImage: '/atavet-img/kus-1.webp',
      date: '5 gün önce'
    },
    {
      id: 8,
      name: 'Deniz Korkmaz',
      petName: 'Max',
      text: 'Köpeğimiz Max\'in düzenli kontrolleri ve aşıları için AtaVet\'i tercih ediyoruz. Profesyonel ekipleri ve hijyenik ortamları ile evcil dostlarımız için en iyi hizmeti sunuyorlar.',
      rating: 4,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-2.jpg',
      petImage: '/atavet-img/max-2.webp',
      date: '2 hafta önce'
    },
    {
      id: 9,
      name: 'Merve Aydın',
      petName: 'Lili',
      text: 'Kedimiz Lili\'nin idrar yolu enfeksiyonu için AtaVet\'te yapılan tedavi ve sonrasında önerilen özel mamalarla tamamen iyileşti. Düzenli kontroller ve önleyici bakım önerileriyle şimdi çok daha sağlıklı bir yaşam sürüyor.',
      rating: 5,
      pet: 'Kedi',
      ownerImage: '/images/stories/pet-owner-1.jpg',
      petImage: '/atavet-img/lili-1.webp',
      date: '3 gün önce'
    },
    {
      id: 10,
      name: 'Bora Tekin',
      petName: 'Dex',
      text: 'Köpeğimiz Dex\'in atopik dermatit kaynaklı cilt alerjisi için uzun süredir tedavi görüyoruz. Dr. Ahmet\'in özel geliştirdiği beslenme programı ve lokal tedaviler sayesinde artık kaşıntısı kontrol altında ve tüyleri yeniden sağlıklı şekilde çıkıyor.',
      rating: 5,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-3.jpg',
      petImage: '/atavet-img/dex-2.webp',
      date: '1 hafta önce'
    },
    {
      id: 11,
      name: 'İrem Yılmaz',
      petName: 'Şans',
      text: 'Kedimiz Şans\'ın düzenli kontrolleri için AtaVet\'i tercih ediyoruz. Kedilere özel stressiz muayene ortamları ve uzman veteriner hekimleri ile en iyi hizmeti alıyoruz.',
      rating: 5,
      pet: 'Kedi',
      ownerImage: '/images/stories/pet-owner-2.jpg',
      petImage: '/atavet-img/sans-2.webp',
      date: '4 gün önce'
    },
    {
      id: 12,
      name: 'Okan Demir',
      petName: 'Max',
      text: 'Köpeğimiz Max\'in diş eti hastalığı için AtaVet\'in diş uzmanı Dr. Selin\'e başvurduk. Detaylı temizlik ve tedavi sonrası evde bakım önerileriyle kısa sürede ağız sağlığı düzeldi. Artık düzenli dental kontroller yaptırıyoruz.',
      rating: 4,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-1.jpg',
      petImage: '/atavet-img/max-3.webp',
      date: '2 hafta önce'
    },
    {
      id: 13,
      name: 'Burak Şahin',
      petName: 'Dex',
      text: 'Köpeğimiz Dex\'in düzenli kontrolleri ve aşıları için AtaVet\'i tercih ediyoruz. Profesyonel ve sevgi dolu yaklaşımları ile evcil dostlarımız için en iyi hizmeti sunuyorlar.',
      rating: 5,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-2.jpg',
      petImage: '/atavet-img/dex-3.webp',
      date: '3 hafta önce'
    },
    {
      id: 14,
      name: 'Gizem Akman',
      petName: 'Şans',
      text: 'Kedimiz Şans\'ın tüm sağlık kontrolleri için AtaVet\'i tercih ediyoruz. Kedilere özel yaklaşımları ve uzman kadroları ile güvenle hizmet alıyoruz.',
      rating: 5,
      pet: 'Kedi',
      ownerImage: '/images/stories/pet-owner-1.jpg',
      petImage: '/atavet-img/sans-3.webp',
      date: '1 ay önce'
    },
    {
      id: 15,
      name: 'Ali Kandemir',
      petName: 'Dex',
      text: 'Köpeğimiz Dex\'in tüm sağlık kontrolleri için AtaVet\'i tercih ediyoruz. Profesyonel ekipleri ve modern klinik ortamları ile evcil dostlarımız için en iyi hizmeti sunuyorlar.',
      rating: 5,
      pet: 'Köpek',
      ownerImage: '/images/stories/avatar-3.jpg',
      petImage: '/atavet-img/dex-4.webp',
      date: '2 hafta önce'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const slidesPerView = 3; // Masaüstü için 3 kart
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  // Calculate average rating
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  // Auto slide functionality
  useEffect(() => {
    const autoPlay = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    autoPlayRef.current = setInterval(autoPlay, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [totalSlides]);

  const handlePrev = () => {
    // Reset timer when user manually navigates
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    }
    
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    // Reset timer when user manually navigates
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    }
    
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className="section bg-gradient-to-b from-neutral to-background relative overflow-hidden py-16">
      <div className="container mx-auto px-4">
        {/* Başlık ve özet tasarımı */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-primary/10 mb-6">
            <svg className="w-5 h-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <span className="text-sm font-medium text-primary">Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center max-w-3xl">
            Mutlu Dostlarımızın <span className="text-primary">Deneyimleri</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl text-center mb-12">
            Evcil hayvan sahiplerinin AtaVet deneyimleri hakkında ne söylediklerine bakın
          </p>

          {/* Özet bilgi kutusu - sadeleştirilmiş */}
          <div className="relative w-full max-w-4xl bg-background rounded-2xl shadow-xl border border-light-gray p-1 mb-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
              Değerlendirmeler
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-light-gray">
              {/* Ortalama puan */}
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold mb-1">{averageRating}</div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" 
                        fill={i < Math.round(Number(averageRating)) ? "#E31E24" : "#e0e0e0"} className="mx-0.5">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-foreground/60 text-center">Toplam {testimonials.length} değerlendirme</div>
              </div>
              
              {/* Sayfalama Butonları */}
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="text-sm font-medium mb-4">Yorum Sayfaları</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {[...Array(totalSlides)].map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        i === currentIndex 
                          ? 'bg-primary text-white' 
                          : 'bg-background text-foreground border border-light-gray hover:bg-primary/5'
                        }`}
                      aria-label={`Sayfa ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 md:px-10 max-w-7xl mx-auto">
          {/* Testimonial cards slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {testimonials
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((testimonial) => (
                      <div 
                        key={testimonial.id} 
                        className="bg-background rounded-2xl shadow-md border border-light-gray overflow-hidden animate-fade-in hover:shadow-lg transition-all md:block hidden"
                        style={{ animationDelay: `${(testimonial.id % slidesPerView) * 0.1}s` }}
                      >
                        {/* Masaüstü kart içeriği */}
                        {/* Pet image with gradient overlay */}
                        <div className="h-48 w-full relative">
                          <Image 
                            src={testimonial.petImage}
                            alt={`${testimonial.petName}, ${testimonial.pet}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-primary">
                                {testimonial.petName} ({testimonial.pet})
                              </div>
                              <div className="flex bg-white/90 backdrop-blur-sm rounded-lg p-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" 
                                      fill={i < testimonial.rating ? "#E31E24" : "#e0e0e0"}>
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="p-6">
                          {/* User info */}
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                              <div className="text-xs text-foreground/60">{testimonial.date}</div>
                            </div>
                            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                              {testimonial.pet}
                            </div>
                          </div>
                          
                          {/* Quote */}
                          <div className="relative">
                            <svg className="absolute -top-2 -left-1 w-6 h-6 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.127-.99.253-1.486.38-.498.127-.995.254-1.492.38-.498.128-.995.217-1.49.27l-.38-1.364c.435-.13.87-.254 1.308-.37.114-.033.228-.065.342-.097l.153-.04c.992-.26 1.978-.52 2.355-.892.183-.178.328-.39.434-.636.12-.28.182-.59.182-.92 0-.365-.132-.673-.397-.922-.267-.25-.678-.374-1.235-.374-.705 0-1.25.224-1.634.67-.29.336-.506.848-.65 1.535l-2.046-.569c.214-1.06.705-1.877 1.473-2.45.827-.63 1.863-.94 3.103-.94 1.073 0 1.962.208 2.667.627.706.42 1.06.99 1.06 1.714 0 .31-.067.615-.2.914-.134.3-.364.546-.69.736-.498.284-1.16.516-1.986.695.065.052.13.106.196.162.427.36.764.833 1.01 1.417.243.584.365 1.235.365 1.954zm7.54 0c0-.88-.23-1.618-.69-2.217-.326-.42-.775-.692-1.344-.814-.57-.124-1.1-.13-1.586-.016-.15.033-.5.113-.997.242-.5.127-.995.254-1.492.38-.498.127-.995.254-1.492.38-.498.128-.995.217-1.49.27l-.38-1.364c.435-.13.87-.254 1.308-.37.114-.033.228-.065.342-.097l.153-.04c.992-.26 1.978-.52 2.355-.892.183-.178.328-.39.434-.636.12-.28.182-.59.182-.92 0-.365-.132-.673-.397-.922-.266-.25-.678-.374-1.235-.374-.705 0-1.254.224-1.648.67-.297.348-.508.86-.644 1.535l-2.045-.569c.214-1.06.705-1.877 1.473-2.45.82-.63 1.855-.94 3.097-.94 1.08 0 1.97.208 2.673.627.706.42 1.06.99 1.06 1.714 0 .31-.067.615-.2.914-.134.3-.364.546-.69.736-.498.284-1.16.516-1.986.695.065.052.13.106.196.162.427.36.764.833 1.01 1.417.243.584.365 1.235.365 1.954z" />
                            </svg>
                            <p className="text-foreground/80 text-sm pl-5">
                              {testimonial.text}
                            </p>
                          </div>
                          
                          {/* Pet info */}
                          <div className="flex items-center mt-4 pt-3 border-t border-light-gray/50 justify-between">
                            <div className="text-sm font-medium">
                              {testimonial.petName}
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" 
                                    fill={i < testimonial.rating ? "#E31E24" : "#e0e0e0"} className="ml-0.5">
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {/* Mobil için tek kart */}
                  <div 
                    className="bg-background rounded-2xl shadow-md border border-light-gray overflow-hidden animate-fade-in hover:shadow-lg transition-all block md:hidden"
                  >
                    {testimonials[currentIndex] && (
                      <>
                        <div className="h-48 w-full relative">
                          <Image 
                            src={testimonials[currentIndex].petImage}
                            alt={`${testimonials[currentIndex].petName}, ${testimonials[currentIndex].pet}`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-primary">
                                {testimonials[currentIndex].petName} ({testimonials[currentIndex].pet})
                              </div>
                              <div className="flex bg-white/90 backdrop-blur-sm rounded-lg p-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" 
                                      fill={i < testimonials[currentIndex].rating ? "#E31E24" : "#e0e0e0"}>
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-primary">{testimonials[currentIndex].name}</h4>
                              <div className="text-xs text-foreground/60">{testimonials[currentIndex].date}</div>
                            </div>
                            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                              {testimonials[currentIndex].pet}
                            </div>
                          </div>
                          
                          <div className="relative">
                            <svg className="absolute -top-2 -left-1 w-6 h-6 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.127-.99.253-1.486.38-.498.127-.995.254-1.492.38-.498.128-.995.217-1.49.27l-.38-1.364c.435-.13.87-.254 1.308-.37.114-.033.228-.065.342-.097l.153-.04c.992-.26 1.978-.52 2.355-.892.183-.178.328-.39.434-.636.12-.28.182-.59.182-.92 0-.365-.132-.673-.397-.922-.266-.25-.678-.374-1.235-.374-.705 0-1.25.224-1.634.67-.297.348-.508.86-.644 1.535l-2.045-.569c.214-1.06.705-1.877 1.473-2.45.82-.63 1.855-.94 3.097-.94 1.08 0 1.97.208 2.673.627.706.42 1.06.99 1.06 1.714 0 .31-.067.615-.2.914-.134.3-.364.546-.69.736-.498.284-1.16.516-1.986.695.065.052.13.106.196.162.427.36.764.833 1.01 1.417.243.584.365 1.235.365 1.954z" />
                            </svg>
                            <p className="text-foreground/80 text-sm pl-5">
                              {testimonials[currentIndex].text}
                            </p>
                          </div>
                          
                          <div className="flex items-center mt-4 pt-3 border-t border-light-gray/50 justify-between">
                            <div className="text-sm font-medium">
                              {testimonials[currentIndex].petName}
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" 
                                    fill={i < testimonials[currentIndex].rating ? "#E31E24" : "#e0e0e0"} className="ml-0.5">
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-2 md:-left-5 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-light-gray z-10 group"
            aria-label="Önceki yorumlar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-2 md:-right-5 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-light-gray z-10 group"
            aria-label="Sonraki yorumlar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-[10%] w-12 h-12 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 right-[20%] w-8 h-8 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Paw decorations */}
      <div className="absolute top-1/4 right-[5%] opacity-10 animate-pulse" style={{ animationDelay: '1.2s' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#121212">
            <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z"/>
            <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z"/>
            <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z"/>
            <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z"/>
            <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z"/>
          </g>
        </svg>
      </div>
    </section>
  );
} 