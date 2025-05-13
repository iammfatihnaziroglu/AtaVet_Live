'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Story {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  heroImage: string;
  date: string;
  author: string;
  link: string;
  categories: string[];
  primaryCategory: string;
  relatedStories?: number[];
  galleryImages?: string[];
  authorImage?: string;
  beforeAfterImages?: { before: string; after: string; caption: string }[];
  testimonial?: { text: string; petOwner: string; petName: string; ownerImage?: string };
}

type Category = 'hepsi' | 'kedi' | 'kopek' | 'kus' | 'balik' | 'kemirgen' | 'egzotik';

// This would ideally come from a database or API
const stories: Record<string, Story> = {
  'patili-dostlarimizin-iyilesme-hikayeleri': {
    id: 1,
    title: "Patili Dostlarımızın İyileşme Hikayeleri",
    description: "Kliniğimizde tedavi ettiğimiz hayvanlarımızın dramatik iyileşme hikâyelerini okuyun.",
    fullContent: `
      <p>AtaVet Veteriner Kliniği olarak, her gün onlarca patili dostumuza sağlık hizmeti sunmaktayız. Bu süreçte, bazı özel vakalar hem bizim hem de hayvan sahiplerinin hayatında derin izler bırakıyor.</p>
      
      <p>Max adlı Golden Retriever, kliniğimize ilk geldiğinde ciddi bir kalça displazisi problemi yaşıyordu. Yürümekte zorlanan ve sürekli ağrı içinde olan Max için, uzun ve zorlu bir tedavi süreci başladı. Cerrahi müdahalenin ardından, düzenli fizik tedavi ve rehabilitasyon seansları ile Max, adım adım iyileşme gösterdi.</p>
      
      <p>Bugün Max, sahipleriyle birlikte koşup oyun oynayabiliyor. Bu süreçte, Max'in sahibi Ayşe Hanım'ın gösterdiği sabır ve özveri, tedavinin başarısında büyük rol oynadı. Max'in hikayesi, veteriner hekimlikte doğru teşhis, uygun tedavi ve sabırlı bir rehabilitasyon sürecinin önemini bir kez daha gösterdi.</p>
      
      <p>Bir diğer hikayemiz ise Latte adlı kedinin mucizevi kurtuluşu. Yüksek bir apartmandan düşen ve çoklu kırıklar yaşayan Latte, acil olarak kliniğimize getirildi. Acil müdahalenin ardından, uzun bir iyileşme süreci bekleyen Latte, veteriner ekibimizin özverili çalışması ve sahibinin sevgisi sayesinde sağlığına kavuştu.</p>
      
      <p>Bu ve benzeri hikayeler, veteriner hekimliğin sadece tıbbi bir meslek değil, aynı zamanda sevgi ve şefkat gerektiren bir hizmet olduğunu gösteriyor. AtaVet olarak, her patili dostumuzun sağlığı ve mutluluğu için çalışmaya devam edeceğiz.</p>
    `,
    image: "/images/stories/recovery-stories.jpg",
    heroImage: "/images/stories/recovery-hero.jpg",
    date: "10 Haziran 2023",
    author: "Dr. Ahmet Yılmaz",
    authorImage: "/images/stories/avatar-1.jpg",
    link: "/oykulerimiz/patili-dostlarimizin-iyilesme-hikayeleri",
    categories: ['kedi', 'kopek'],
    primaryCategory: 'kopek',
    relatedStories: [2, 4, 9],
    galleryImages: [
      "/images/stories/dog-recovery-1.jpg",
      "/images/stories/dog-recovery-2.jpg",
      "/images/stories/cat-recovery-1.jpg",
      "/images/stories/pet-therapy.jpg"
    ],
    beforeAfterImages: [
      { 
        before: "/images/stories/max-before.jpg", 
        after: "/images/stories/max-after.jpg",
        caption: "Max'in tedavi öncesi ve sonrası durumu. Kalça displazisi ameliyatından sonra koşabilir hale geldi."
      },
      { 
        before: "/images/stories/latte-before.jpg", 
        after: "/images/stories/latte-after.jpg",
        caption: "Latte'nin düşme sonrası yaralanması ve iyileşme sürecinden sonraki hali."
      }
    ],
    testimonial: {
      text: "Max'imiz artık eskisi gibi koşup oynayabiliyor. AtaVet ekibine verdiği mükemmel sağlık hizmeti ve gösterdiği sabır için çok teşekkür ederiz. Oğlumuz Max'in bu süreçte yanından hiç ayrılmadılar.",
      petOwner: "Ayşe Yılmaz",
      petName: "Max",
      ownerImage: "/images/stories/pet-owner-1.jpg"
    }
  },
  'sokak-hayvanlarina-yardim-elimiz': {
    id: 2,
    title: "Sokak Hayvanlarına Yardım Elimiz",
    description: "Sokak hayvanlarına yaptığımız yardımlar ve onların mutlu son hikayeleri.",
    fullContent: `
      <p>AtaVet Veteriner Kliniği olarak, sadece sahipli hayvanlara değil, sokaktaki can dostlarımıza da elimizi uzatmak görevimizdir. Kliniğimizin düzenli olarak yürüttüğü sokak hayvanlarına yardım projeleri, birçok patili dostumuzun hayatını kurtarırken, bazılarına da sıcak bir yuva bulmamızı sağladı.</p>
      
      <p>Soğuk bir kış günü kliniğimizin önünde bulduğumuz ve 'Umut' adını verdiğimiz yavru kedi, sokak hayvanlarına yardım hikayelerimizin en özellerinden biri. Hipotermiden kurtardığımız Umut, tedavisinin ardından kliniğimizde büyüdü ve bir süre sonra sevgi dolu bir aileye sahiplendirildi.</p>
      
      <p>Her hafta düzenli olarak bölgemizdeki sokak hayvanlarına mama ve sağlık taraması hizmeti sunuyoruz. Bu çalışmalarımız sayesinde, onlarca sokak hayvanı hastalıklardan korunurken, acil müdahale gerektiren vakaları da hızla tedavi edebiliyoruz.</p>
      
      <p>Sizler de sokak hayvanlarına yardım etmek istiyorsanız, kliniğimize bağış yapabilir veya gönüllü olarak projelerimize katılabilirsiniz. Unutmayın, küçük yardımlar bile bir canın hayatını kurtarabilir.</p>
    `,
    image: "/images/stories/street-animals.jpg",
    heroImage: "/images/stories/street-animals-hero.jpg",
    date: "25 Mayıs 2023",
    author: "Dr. Zeynep Kaya",
    authorImage: "/images/stories/avatar-2.jpg",
    link: "/oykulerimiz/sokak-hayvanlarina-yardim-elimiz",
    categories: ['kedi', 'kopek'],
    primaryCategory: 'kedi',
    relatedStories: [1, 3, 9],
    galleryImages: [
      "/images/stories/street-cat-1.jpg",
      "/images/stories/street-cat-2.jpg",
      "/images/stories/street-dog-1.jpg",
      "/images/stories/feeding-program.jpg"
    ],
    beforeAfterImages: [
      { 
        before: "/images/stories/umut-before.jpg", 
        after: "/images/stories/umut-after.jpg",
        caption: "Umut isimli yavru kedimizin kliniğimize ilk geldiği zamanki ve iyileştikten sonraki halleri."
      }
    ],
    testimonial: {
      text: "Umut'u sahiplendiğimizde ona aile olmanın mutluluğunu yaşadık. AtaVet ekibi, onu hayata bağladı ve bize teslim ederken bütün bakım ihtiyaçları konusunda bizi bilgilendirdi.",
      petOwner: "Mehmet ve Selin Demir",
      petName: "Umut",
      ownerImage: "/images/stories/pet-owner-2.jpg"
    }
  },
  'klinigimizin-yildizlari': {
    id: 3,
    title: "Kliniğimizin Yıldızları",
    description: "Her ay seçtiğimiz özel hastalarımızın hikayeleri ve onların eğlenceli anıları.",
    fullContent: `
      <p>AtaVet Veteriner Kliniği'ne her gün onlarca patili dost geliyor. Ancak bazıları, karakterleri, yaşadıkları zorluklar veya gösterdikleri inanılmaz gelişimler ile kliniğimizin yıldızları oluyorlar.</p>
      
      <p>Bu ayki yıldızımız, 8 yaşındaki Terrier melezi Fındık. Şeker hastalığı teşhisi konulan Fındık, düzenli insülin tedavisi ve özel diyeti ile hastalığını kontrol altına almayı başardı. Sahibi Mehmet Bey ile birlikte hastalık sürecini büyük bir disiplinle yöneten Fındık, diğer şeker hastası hayvanlar için de ilham kaynağı oldu.</p>
      
      <p>Geçtiğimiz ayın yıldızı ise, nadir görülen bir göz hastalığı ile mücadele eden Sultan adlı Iran kedisiydi. Özel bir göz ameliyatı geçiren Sultan, görme yetisini tamamen kaybetme riskini atlattı ve şimdi sağlıklı bir şekilde hayatına devam ediyor.</p>
      
      <p>Kliniğimizin yıldızları, sadece tedavileri ile değil, gösterdikleri cesaret ve yaşam sevinçleri ile de bizlere ilham veriyor. Her biri, hayvanların da en az insanlar kadar direnç ve yaşama sevinci gösterebileceğinin birer kanıtı.</p>
    `,
    image: "/images/stories/clinic-stars.jpg",
    heroImage: "/images/stories/clinic-stars-hero.jpg",
    date: "5 Haziran 2023",
    author: "Dr. Ahmet Yılmaz",
    link: "/oykulerimiz/klinigimizin-yildizlari",
    categories: ['kedi', 'kopek', 'kus', 'balik', 'egzotik', 'kemirgen'],
    primaryCategory: 'kedi',
    relatedStories: [1, 2, 4]
  }
};

// You would add the rest of the stories with their full content

export default function StoryDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const story = stories[slug];
  const [relatedStoriesData, setRelatedStoriesData] = useState<Story[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!story) return;
    
    // This would typically be a database or API call
    // For now, we're simulating it with mock data
    const relatedData = story.relatedStories?.map(id => 
      Object.values(stories).find(s => s.id === id)
    ).filter(Boolean) as Story[];
    
    setRelatedStoriesData(relatedData || []);
  }, [story]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!story.galleryImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % story.galleryImages!.length);
  };

  const prevImage = () => {
    if (!story.galleryImages) return;
    setCurrentImageIndex((prev) => (prev - 1 + story.galleryImages!.length) % story.galleryImages!.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const categoryColors: Record<Category, string> = {
    hepsi: 'from-primary to-primary/80',
    kedi: 'from-pink-500 to-pink-600',
    kopek: 'from-amber-500 to-amber-600',
    kus: 'from-blue-500 to-blue-600',
    balik: 'from-cyan-500 to-cyan-600',
    kemirgen: 'from-orange-500 to-orange-600',
    egzotik: 'from-green-500 to-green-600'
  };

  const categoryLabels: Record<Category, string> = {
    hepsi: 'Tüm Hikayeler',
    kedi: 'Kedi Öyküleri',
    kopek: 'Köpek Öyküleri',
    kus: 'Kuş Öyküleri',
    balik: 'Akvaryum Öyküleri',
    kemirgen: 'Kemirgen Öyküleri',
    egzotik: 'Egzotik Öyküleri'
  };

  const categoryIcons: Record<Category, string> = {
    hepsi: '🐾',
    kedi: '🐱',
    kopek: '🐶',
    kus: '🦜',
    balik: '🐠',
    kemirgen: '🐹',
    egzotik: '🦎'
  };

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Hikaye bulunamadı</h1>
          <p className="text-foreground/70 mb-6">Aradığınız hikaye mevcut değil veya kaldırılmış olabilir.</p>
          <Link 
            href="/oykulerimiz" 
            className="py-2.5 px-5 bg-primary text-white font-medium rounded-lg inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5"></path>
            </svg>
            <span>Tüm Hikayelere Dön</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-secondary/90 to-background dark:from-secondary/30 dark:to-background pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-10">
            <Link 
              href="/oykulerimiz" 
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 mb-4 group bg-white/10 dark:bg-foreground/5 backdrop-blur-sm py-1.5 px-3 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
                <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
              </svg>
              <span>Tüm Hikayeler</span>
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2 lg:w-3/5">
                <div className="flex mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm bg-gradient-to-r ${categoryColors[story.primaryCategory as Category]} text-white`}>
                    <span>{categoryIcons[story.primaryCategory as Category]}</span>
                    <span>{categoryLabels[story.primaryCategory as Category]}</span>
                  </div>
                  
                  <div className="ml-3 flex items-center gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{story.date}</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {story.title}
                </h1>
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-foreground">{story.author}</span>
                    <span className="text-xs text-foreground/60">Veteriner Hekim</span>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl bg-white/5 dark:bg-foreground/5 backdrop-blur-sm p-4 rounded-lg border-l-2 border-primary/30">
                  {story.description}
                </p>
              </div>
              
              <motion.div
                className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-light-gray/10 dark:border-light-gray/5 group h-[280px] md:h-[360px] lg:h-[400px]">
                  <img 
                    src={story.heroImage || story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/80"></div>
                        <div className="w-3 h-3 rounded-full bg-white/60"></div>
                        <div className="w-3 h-3 rounded-full bg-white/40"></div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm text-white font-medium">
                        AtaVet Koleksiyon
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6 md:p-8 mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
              </div>
              
              <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
                <div dangerouslySetInnerHTML={{ __html: story.fullContent }} />
              </article>

              {/* Öncesi-Sonrası Bölümü */}
              {story.beforeAfterImages && story.beforeAfterImages.length > 0 && (
                <div className="my-12">
                  <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="17 1 21 5 17 9"></polyline>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                      <polyline points="7 23 3 19 7 15"></polyline>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                    </svg>
                    <span>Öncesi ve Sonrası</span>
                  </h3>
                  
                  <div className="space-y-10">
                    {story.beforeAfterImages.map((item, index) => (
                      <div key={index} className="bg-white/5 dark:bg-foreground/5 rounded-xl overflow-hidden shadow-xl border border-light-gray/10 dark:border-light-gray/5 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="grid md:grid-cols-2 gap-4 p-4">
                          <div className="relative group overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm p-2">
                            <div className="absolute -top-0 left-0 z-10 m-2">
                              <div className="bg-black/70 text-white text-xs font-medium py-1 px-3 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Öncesi</span>
                              </div>
                            </div>
                            <div className="relative h-full w-full overflow-hidden rounded-md">
                              <img 
                                src={item.before} 
                                alt={`${story.title} - Öncesi ${index + 1}`} 
                                className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>
                          
                          <div className="relative group overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 backdrop-blur-sm p-2">
                            <div className="absolute -top-0 left-0 z-10 m-2">
                              <div className="bg-primary/90 text-white text-xs font-medium py-1 px-3 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                                </svg>
                                <span>Sonrası</span>
                              </div>
                            </div>
                            <div className="relative h-full w-full overflow-hidden rounded-md">
                              <img 
                                src={item.after} 
                                alt={`${story.title} - Sonrası ${index + 1}`} 
                                className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5 text-sm text-foreground/80 bg-secondary/10 dark:bg-foreground/10 border-t border-light-gray/10">
                          <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p className="leading-relaxed">{item.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tanıklık Bölümü */}
              {story.testimonial && (
                <div className="my-8 bg-primary/5 dark:bg-foreground/5 rounded-lg p-5 md:p-6 relative">
                  <svg className="absolute top-4 left-4 text-primary/20 w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="ml-10 md:ml-12">
                    <p className="text-sm md:text-base italic text-foreground/90 mb-4">
                      &ldquo;{story.testimonial.text}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-3">
                      {story.testimonial.ownerImage && (
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                          <img 
                            src={story.testimonial.ownerImage} 
                            alt={story.testimonial.petOwner} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-foreground text-sm">{story.testimonial.petOwner}</div>
                        <div className="text-xs text-foreground/70">{story.testimonial.petName}&apos;in ailesi</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Resim Galerisi */}
              {story.galleryImages && story.galleryImages.length > 0 && (
                <div className="my-16">
                  <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    <span>Görsel Galeri</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-8">
                    {story.galleryImages.map((img, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden rounded-lg border border-light-gray/10 dark:border-light-gray/5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 aspect-square bg-white/5 dark:bg-white/10 backdrop-blur-sm p-2"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-md">
                          <img 
                            src={img} 
                            alt={`${story.title} - Görsel ${index + 1}`} 
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <div className="bg-white/20 backdrop-blur-sm py-1 px-2 rounded text-xs text-white font-medium flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
                                </svg>
                                <span>Büyüt</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lightbox */}
              {lightboxOpen && story.galleryImages && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4" 
                  onClick={closeLightbox}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative max-w-5xl max-h-[90vh] w-full flex flex-col shadow-2xl rounded-xl overflow-hidden border border-white/10"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/80 to-primary/40 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-inner flex items-center gap-1.5">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 0C6.268 0 0 6.268 0 14C0 21.732 6.268 28 14 28C21.732 28 28 21.732 28 14C28 6.268 21.732 0 14 0ZM14 4.2C16.324 4.2 18.2 6.076 18.2 8.4C18.2 10.724 16.324 12.6 14 12.6C11.676 12.6 9.8 10.724 9.8 8.4C9.8 6.076 11.676 4.2 14 4.2ZM14 24.08C10.5 24.08 7.406 22.316 5.6 19.684C5.642 16.842 11.2 15.26 14 15.26C16.786 15.26 22.358 16.842 22.4 19.684C20.594 22.316 17.5 24.08 14 24.08Z" fill="white"/>
                            </svg>
                            <span className="tracking-wider">ATAVET</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold drop-shadow-md text-base">{story.testimonial?.petName || 'Dostumuz'}&apos;ın Öyküsü</h4>
                          <p className="text-white/80 text-xs mt-0.5 drop-shadow-md">{story.title}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          closeLightbox();
                        }}
                        className="text-white/80 hover:text-white transition-colors focus:outline-none hover:rotate-90 transition-transform duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    
                    <div 
                      className="relative overflow-hidden bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 backdrop-blur-sm flex items-center justify-center px-4 py-8" 
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img 
                        src={story.galleryImages[currentImageIndex]} 
                        alt={`${story.title} - Görsel ${currentImageIndex + 1}`} 
                        className="w-full h-auto max-h-[65vh] object-contain mx-auto shadow-xl border border-white/5"
                      />
                      
                      {/* Image Counter Indicator - Moved below the image */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                        <div className="flex gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                          {story.galleryImages.map((_, idx) => (
                            <div 
                              key={idx} 
                              className={`w-1.5 h-1.5 rounded-full ${currentImageIndex === idx ? 'bg-primary' : 'bg-white/30'} transition-all duration-300 ${currentImageIndex === idx ? 'scale-110' : 'scale-100'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Left/Right Image Indicators */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between pointer-events-none opacity-50">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/20 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/20 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl px-6 py-4 flex justify-between items-center border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/90 text-white text-xs font-medium py-1.5 px-3 rounded-md shadow-inner flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span>Görsel {currentImageIndex + 1} / {story.galleryImages.length}</span>
                          </div>
                          
                          {story.galleryImages.length > 1 && (
                            <div className="text-white/60 text-xs">
                              <span className="italic">Tüm görselleri görmek için gezinin</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button 
                        onClick={closeLightbox}
                        className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-md px-4 py-2 text-xs font-medium flex items-center gap-1.5 transition-all duration-300 transform hover:scale-105 focus:outline-none shadow-md hover:shadow-lg"
                      >
                        <span>Görüntüyü Kapat</span>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 relative">
            <div>
              <div className="p-0 h-full space-y-10">
                {/* İlgili Hikayeler Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">İlgili Hikayeler</h3>
                  </div>
                  
                  {relatedStoriesData.length > 0 ? (
                    <div className="space-y-5">
                      {relatedStoriesData.map((relatedStory) => (
                        <Link 
                          key={relatedStory.id} 
                          href={relatedStory.link} 
                          className="flex gap-3 group hover:bg-secondary/10 dark:hover:bg-foreground/10 p-2 rounded-lg transition-colors duration-300"
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-light-gray/10 shadow-sm">
                            <img 
                              src={relatedStory.image} 
                              alt={relatedStory.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{relatedStory.title}</h4>
                            <div className="flex items-center gap-1.5 mt-1.5 mb-1">
                              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${categoryColors[relatedStory.primaryCategory as Category]}`}></div>
                              <span className="text-xs text-foreground/60">{categoryLabels[relatedStory.primaryCategory as Category].split(' ')[0]}</span>
                            </div>
                            <p className="text-xs text-foreground/70 line-clamp-2">{relatedStory.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 px-4 bg-secondary/10 dark:bg-foreground/5 rounded-lg text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-foreground/10 flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/60">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <p className="text-sm text-foreground/70">İlgili hikaye bulunamadı.</p>
                    </div>
                  )}
                </div>
                
                {/* Veteriner Hekim Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Veteriner Hekimimiz</h3>
                  </div>
                  
                  <div className="bg-secondary/10 dark:bg-foreground/5 rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mb-3">
                      <img 
                        src="/images/stories/avatar-1.jpg" 
                        alt="Dr. Ahmet Yılmaz" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Dr. Ahmet Yılmaz</h4>
                    <p className="text-xs text-foreground/70 mb-3">Baş Veteriner Hekim</p>
                    <p className="text-sm text-foreground/80 italic">
                      &ldquo;Bir hayvanı tedavi etmek, ona sadece ilaç vermek değil, sevgi ve şefkatle yaklaşmaktır.&rdquo;
                    </p>
                    <div className="flex justify-center gap-2 mt-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Kliniğimiz Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Kliniğimiz</h3>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="/images/stories/clinic.jpg" 
                      alt="AtaVet Kliniği" 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <p className="text-sm text-foreground/80 mb-3">
                    Modern ekipmanlar ve uzman kadromuzla, sevimli dostlarınız için en iyi veterinerlik hizmetini sunuyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="bg-secondary/20 dark:bg-foreground/10 py-1 px-2 rounded text-xs text-foreground/80 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Her gün: 09:00-18:00</span>
                    </div>
                    <div className="bg-secondary/20 dark:bg-foreground/10 py-1 px-2 rounded text-xs text-foreground/80 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>+90 123 456 7890</span>
                    </div>
                  </div>
                  <Link 
                    href="/iletisim" 
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <span>İletişim bilgilerimiz</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Özlü Söz Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Günün Sözü</h3>
                  </div>
                  
                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 text-primary/20 w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-sm text-foreground/80 italic py-3 px-6">
                      &ldquo;Hayvanlar, doğanın bizlere emanet ettiği en kıymetli hazinelerdir. Onları korumak, sadece bir görev değil, insanlık onurudur.&rdquo;
                    </p>
                    
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-primary font-medium">- Mahatma Gandhi</span>
                    </div>
                  </div>
                </div>
                
                {/* Sosyal Medya Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Bizi Takip Edin</h3>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <a href="https://instagram.com/atavet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white transition-transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    
                    <a href="https://facebook.com/atavet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white transition-transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    
                    <a href="https://twitter.com/atavet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-400 text-white transition-transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    
                    <a href="https://youtube.com/atavet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600 text-white transition-transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                  
                  <div className="bg-secondary/20 dark:bg-foreground/10 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="/images/stories/insta-1.jpg" alt="Instagram feed" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/80 line-clamp-2">Instagram&apos;da son paylaşımlarımızı takip edebilirsiniz.</p>
                      <a 
                        href="https://instagram.com/atavet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1 mt-1"
                      >
                        <span>@atavet</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Tüm Hikayelere Dön Kartı */}
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6">
                  <Link 
                    href="/oykulerimiz" 
                    className="group block w-full text-center py-2.5 px-4 bg-secondary/30 dark:bg-foreground/10 hover:bg-primary hover:text-white text-primary font-medium text-sm rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-pulse">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5"></path>
                    </svg>
                    <span>Tüm Hikayelere Dön</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Inspirational Quote Section - replacing the Call to Action */}
        <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-lg border border-light-gray/10 dark:border-light-gray/5 overflow-hidden my-12 relative">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🐾</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                AtaVet <span className="text-primary">Felsefesi</span>
              </h2>
              
              <div className="relative">
                <svg className="absolute -top-5 -left-8 text-primary/20 w-16 h-16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-6 px-4">
                  Sevgimiz, bilgimiz ve deneyimimizle her patili dostun sağlığına kavuşması için çalışıyoruz. 
                  Çünkü inanıyoruz ki, her hayvan sevgiyle iyileşir, her can şefkatle güçlenir.
                </blockquote>
                
                <svg className="absolute -bottom-5 -right-8 text-primary/20 w-16 h-16 transform rotate-180" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex items-center justify-center gap-3 mt-2">
                <div className="h-px w-10 bg-primary/20"></div>
                <span className="text-primary font-medium text-sm">AtaVet Veteriner Kliniği</span>
                <div className="h-px w-10 bg-primary/20"></div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-light-gray/10 dark:border-light-gray/5 flex justify-center">
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-2 bg-secondary/50 dark:bg-foreground/10 hover:bg-primary hover:text-white text-primary py-2.5 px-5 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                <span>Bizi Daha Yakından Tanıyın</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 