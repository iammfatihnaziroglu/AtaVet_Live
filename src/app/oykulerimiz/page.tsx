'use client';

import { useState, useEffect, Suspense, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  primaryCategory: string;
}

type Category = 'hepsi' | 'kedi' | 'kopek' | 'egzotik';

function OykulerimizContent() {
  const searchParams = useSearchParams();
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('hepsi');
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);

  // Handle URL parameter for animal filter
  useEffect(() => {
    const animalParam = searchParams.get('animal');
    if (animalParam) {
      // Map the URL parameter to the corresponding category
      const categoryMap: Record<string, Category> = {
        'kediler': 'kedi',
        'kopekler': 'kopek',
        'kuslar': 'egzotik',
        'tavsan': 'egzotik',
        'diger': 'egzotik'
      };
      
      const mappedCategory = categoryMap[animalParam] as Category;
      if (mappedCategory) {
        setSelectedCategory(mappedCategory);
      }
    }
  }, [searchParams]);

  const stories = useMemo<Story[]>(() => [
    
    {
      id: 1,
      title: "Max'in Hikayesi",
      description: "Küçük Max, büyük bir savaşı kazandı!",
      image: "/atavet-img/max-1.webp",
      link: "/oykulerimiz/maxin-hikayesi",
      categories: ['kopek'],
      primaryCategory: 'kopek'
    },
    {
      id: 2,
      title: "Şans'ın Hikayesi",
      description: "Bir adım ölümden, bir ömür sevgiye: Şans'ın ikinci şansı...",
      image: "/atavet-img/sans-3.webp",
      link: "/oykulerimiz/sansin-hikayesi",
      categories: ['kedi', 'kopek'],
      primaryCategory: 'kedi'
    },
    {
      id: 3,
      title: "Dex'in Hikayesi",
      description: "Dex'in Sessiz Savaşı: Küçük Bir Tümör, Büyük Bir Zafer",
      image: "/atavet-img/dex-1.webp",
      link: "/oykulerimiz/dexin-hikayesi",
      categories: ['kopek'],
      primaryCategory: 'kopek'
    },
    {
      id: 4,
      title: "Lili'nin Hikayesi",
      description: "Lili'nin Sessiz İsyanı: Midesindeki Fırtına",
      image: "/atavet-img/lili-1.webp",
      link: "/oykulerimiz/lilinin-hikayesi",
      categories: ['kedi'],
      primaryCategory: 'kedi'
    },
    {
      id: 5,
      title: "Kakao ve Fıstık'ın Hikayesi",
      description: "Kakao ve Fıstık'ın İlk Kliniği Ziyareti: Sağlıklı Bir Başlangıç",
      image: "/atavet-img/kakaovefistik-1.webp", 
      link: "/oykulerimiz/kakaovefistigin-hikayesi",
      categories: ['kopek'],
      primaryCategory: 'kopek'
    },
    {
      id: 6,
      title: "Paşa'nın Hikayesi",
      description: "Paşa'nın Cilt Savaşı: Bir Mantara Karşı Kazanılan Zafer",
      image: "/atavet-img/pasa-1.webp",
      link: "/oykulerimiz/pasanin-hikayesi",
      categories: ['kedi'],
      primaryCategory: 'kedi'
    }
  ], []);

  useEffect(() => {
    setIsFilterAnimating(true);
    const timer = setTimeout(() => {
      if (selectedCategory === 'hepsi') {
        setFilteredStories(stories);
      } else {
        setFilteredStories(stories.filter(story => 
          story.primaryCategory === selectedCategory
        ));
      }
      setIsFilterAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, stories]);

  const categoryLabels: Record<Category, string> = {
    hepsi: 'Tüm Hikayeler',
    kedi: 'Kedi Öyküleri',
    kopek: 'Köpek Öyküleri',
    egzotik: 'Egzotik Öyküleri'
  };

  const categoryIcons: Record<Category, string> = {
    hepsi: '🐾',
    kedi: '🐱',
    kopek: '🐶',
    egzotik: '🦜'
  };
  
  const categoryColors: Record<Category, string> = {
    hepsi: 'from-primary to-primary/80',
    kedi: 'from-pink-500 to-pink-600',
    kopek: 'from-amber-500 to-amber-600',
    egzotik: 'from-green-500 to-green-600'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with full-width background and gradient overlay */}
      <div className="relative bg-gradient-to-b from-secondary/90 to-background dark:from-secondary/30 dark:to-background pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary font-pathway">ÖYKÜLERİMİZ</h1>
              <div className="w-full h-1  bg-gradient-to-l from-transparent via-primary/50 to-transparent brightness-200 mt-2 rounded-full"></div>
            </div>
            <Link 
              href="/iletisim" 
              className="hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-sm py-2.5 px-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-primary font-medium">Hikayeni Paylaş</span>
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Patili Dostlarımızın <span className="text-primary">Hikayeleri</span></h2>
              <p className="text-foreground/80 mb-6 leading-relaxed text-base">
                AtaVet ailesinin ve patili dostlarımızın hikayelerini keşfedin. 
                Klinik deneyimlerimizden, hastaların iyileşme süreçlerine, minik dostlarımızın yaşamlarını 
                değiştiren anlara kadar pek çok duygu dolu hikaye sizi bekliyor.
              </p>
              
              <div className="p-4 bg-white dark:bg-foreground/5 rounded-lg shadow-sm border border-light-gray/10 dark:border-light-gray/5 mb-6">
                <blockquote className="text-sm italic text-foreground/90 border-l-2 border-primary pl-3">
                  &ldquo;Her hayvan bir hikaye, her hikaye bir yaşam.&rdquo;
                  <footer className="text-xs text-foreground/70 mt-1">— AtaVet Ekibi</footer>
                </blockquote>
              </div>
              
              <div className="flex gap-4 items-center">
                <Link 
                  href="#stories" 
                  className="py-2.5 px-5 bg-primary text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-accent transition-all duration-300 flex items-center gap-2"
                >
                  <span>Hikayeleri Keşfet</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </Link>
                <Link href="/iletisim" className="py-2.5 px-5 bg-white/90 text-primary text-sm font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-secondary/30 dark:hover:bg-foreground/10 transition-all duration-300 md:hidden">
                  Hikayeni Paylaş
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/atavet-img/kopek-1.webp" 
                  alt="Hayvan Hikayeleri" 
                  className="w-full h-[280px] md:h-[320px] object-cover"
                  width={800}
                  height={500}
                />
                
                <div className="absolute top-3 right-4">
                  <div className="bg-white/90 text-primary py-1.5 px-4 rounded-lg font-semibold text-sm">
                    &ldquo; Sevgi iyileştirir &rdquo;
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Categories Navigation Section */}
        <div id="stories" className="mb-12">
          <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Öykü Kategorileri</h2>
                <p className="text-sm text-foreground/70 mt-1">Aşağıdan görmek istediğiniz hikaye türünü seçebilirsiniz</p>
              </div>
              <div className={`flex items-center ${isFilterAnimating ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <div className="flex items-center gap-2 bg-secondary/50 dark:bg-foreground/10 py-1 px-3 rounded-full">
                  <div className="h-1.5 w-6 rounded-full bg-primary/20 relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full w-2.5 bg-primary rounded-full"
                      animate={{ x: [0, 3.5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                  <span className="text-xs text-foreground/70">Filtreleniyor</span>
                </div>
              </div>
            </div>
            
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedCategory(key as Category)}
                    className={`px-2 py-2 rounded-lg flex items-center gap-1.5 transition-all duration-300 ${
                      selectedCategory === key 
                      ? `bg-gradient-to-r ${categoryColors[key as Category]} text-white font-medium shadow-sm` 
                      : 'bg-secondary/50 dark:bg-foreground/10 text-foreground/80 hover:bg-secondary hover:text-foreground dark:hover:bg-foreground/20'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedCategory === key ? 'bg-white/20' : 'bg-white/80 dark:bg-foreground/20'
                    }`}>
                      <span className="text-sm">{categoryIcons[key as Category]}</span>
                    </div>
                    <span className="text-sm truncate">{label}</span>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-white ml-0.5 flex-shrink-0"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stories Grid Section */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredStories.length > 0 ? (
                filteredStories.map((story) => (
                  <motion.div
                    key={story.id}
                    className="bg-white dark:bg-foreground/5 rounded-xl overflow-hidden shadow-md border border-light-gray/10 dark:border-light-gray/5 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * (story.id % 9) }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link href={story.link} className="flex flex-col h-full">
                      <div 
                        className="relative h-96 md:h-72 lg:h-80 overflow-hidden"
                        onMouseEnter={() => setHoveredStory(story.id)}
                        onMouseLeave={() => setHoveredStory(null)}
                      >
                        <Image 
                          src={story.image} 
                          alt={story.title} 
                          className={`w-full h-full object-cover object-center transition-all duration-500 ${
                            hoveredStory === story.id ? 'scale-110' : 'scale-100'
                          }`}
                          width={500}
                          height={384}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                        
                        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start">
                          <div className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm bg-gradient-to-r ${categoryColors[story.primaryCategory as Category]} text-white flex items-center gap-1.5`}>
                            <span>{categoryIcons[story.primaryCategory as Category]}</span>
                            <span>{categoryLabels[story.primaryCategory as Category].split(' ')[0]}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 flex-grow">
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">{story.title}</h3>
                        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                          {story.description}
                        </p>
                      </div>
                      
                      <div className="px-5 pb-5 mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-foreground/60">Hikayeyi Oku</span>
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full bg-white dark:bg-foreground/5 rounded-xl p-10 text-center border border-light-gray/10 dark:border-light-gray/5 shadow-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 dark:bg-foreground/10 text-primary mb-5">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Bu kategoride henüz hikaye bulunmuyor</h3>
                  <p className="text-foreground/70 mb-6 max-w-md mx-auto">Yakında yeni hikayeler eklenecektir. Başka bir kategori seçebilir veya kendi hikayenizi paylaşabilirsiniz.</p>
                  <button 
                    onClick={() => setSelectedCategory('hepsi')}
                    className="inline-flex items-center gap-2 bg-secondary/70 dark:bg-foreground/10 hover:bg-primary hover:text-white text-primary py-2.5 px-5 rounded-lg transition-colors duration-300 text-sm font-medium shadow-sm"
                  >
                    <span>Tüm Hikayelere Dön</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5"></path>
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Story Gallery Slider */}
        <div className="mb-20">
          <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-lg border border-light-gray/10 dark:border-light-gray/5 overflow-hidden relative">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transform rotate-45"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-6 md:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-3 py-1.5 rounded-lg mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>Öykü Galerisi</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Patili Dostlarımızın <span className="text-primary">Anları</span>
                </h2>
                <p className="text-foreground/70 mt-2">Evcil dostlarımızın en özel ve unutulmaz anlarından oluşan fotoğraf galerisi</p>
              </div>
              
              {/* Gallery Slider */}
              <StoryGallerySlider />
            </div>
          </div>
        </div>
        
        {/* Share Your Story Section */}
        <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-lg border border-light-gray/10 dark:border-light-gray/5 overflow-hidden mb-10 relative">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row relative z-10">
            <div className="md:w-1/2 p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-3 py-1.5 rounded-lg mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>Sizin Hikayeniz</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  Sizin de Bir <span className="text-primary">Hikayeniz</span> mi Var?
                </h2>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Evcil dostunuzla yaşadığınız özel anları bizimle ve diğer hayvan severlerle paylaşmak ister misiniz? Hikayeniz AtaVet&apos;in Öykülerimiz sayfasında yayınlansın!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 bg-secondary/30 dark:bg-foreground/10 rounded-lg p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">Evcil hayvanınızın fotoğraflarını paylaşın</span>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-secondary/30 dark:bg-foreground/10 rounded-lg p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">Birlikte yaşadığınız özel anları anlatın</span>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-secondary/30 dark:bg-foreground/10 rounded-lg p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">Sıra dışı tedavi hikayelerini paylaşın</span>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-secondary/30 dark:bg-foreground/10 rounded-lg p-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <path d="M20 8v6"></path>
                        <path d="M23 11h-6"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">Sahiplendirme deneyimlerinizi aktarın</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    href="/iletisim" 
                    className="py-2.5 px-6 bg-primary hover:bg-accent text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Hikayeni Paylaş</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </Link>
                  
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="py-2.5 px-5 bg-white dark:bg-foreground/10 border border-light-gray/20 dark:border-light-gray/5 text-foreground/70 text-sm font-medium rounded-lg hover:bg-secondary/30 dark:hover:bg-foreground/20 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>Yukarı Dön</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-[200px] md:h-full min-h-[280px] hidden md:block">
                <Image 
                  src="/atavet-img/tatlikedi-1.webp" 
                  alt="Hikayeni Paylaş" 
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
                
                <div className="absolute right-2 top-2 md:right-3 md:top-4 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg shadow-md max-w-[160px] md:max-w-[200px] hidden md:block">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-medium text-foreground">AtaVet Ailesi</h4>
                      <p className="text-[10px] md:text-xs text-foreground/70">Hikayenizi bekliyor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryGallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "/atavet-img/kopek-1.webp",
      alt: "Sevimli Köpek Dostumuz",
      caption: "Sağlıklı ve mutlu bir hayat için düzenli veteriner kontrolü önemlidir."
    },
    {
      id: 2,
      src: "/atavet-img/tavsan-1.webp",
      alt: "Şirin Tavşan Hastamız",
      caption: "Egzotik dostlarımız için de özel bakım ve tedavi seçenekleri sunuyoruz."
    },
    {
      id: 3,
      src: "/atavet-img/horoz-1.webp",
      alt: "Renkli Horoz Dostumuz",
      caption: "Kümes hayvanlarının sağlığı için gerekli tüm destek ve tedaviler AtaVet'te"
    },
    {
      id: 4,
      src: "/atavet-img/kus-1.webp",
      alt: "Minik Kuş Hastamız",
      caption: "Kanatlı dostlarımızın tedavi ve bakımında uzman kadromuzla yanınızdayız"
    },
    {
      id: 5,
      src: "/atavet-img/tatlikedi-1.webp",
      alt: "Sevimli Kedi Dostumuz",
      caption: "Kedilerin özel sağlık ihtiyaçları için kişiye özel tedavi planları hazırlıyoruz"
    }
  ];

  // Setup auto-play effect
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl h-[500px] sm:h-[500px] md:h-[550px] bg-[#EDE1E1]/25 shadow-xl border border-light-gray/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="max-h-full max-w-full object-contain rounded-lg"
                width={1200}
                height={800}
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent">
              <p className="text-white text-sm md:text-base font-medium drop-shadow-md">{galleryImages[currentIndex].caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-primary hover:bg-white transition-all duration-300 z-10"
          aria-label="Önceki resim"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-primary hover:bg-white transition-all duration-300 z-10"
          aria-label="Sonraki resim"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
      
      {/* Control Bar */}
      <div className="bg-white dark:bg-foreground/10 backdrop-blur-sm shadow-lg border border-light-gray/10 rounded-lg p-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {/* Thumbnails */}
        <div className="flex items-center gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125 ring-2 ring-primary/30' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Resim ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Playback Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={togglePlayPause}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label={isPlaying ? "Durdur" : "Oynat"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>
          
          <span className="text-sm bg-secondary/30 dark:bg-foreground/10 px-4 py-2 rounded-full font-medium">
            {currentIndex + 1} / {galleryImages.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function OykulerimizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <OykulerimizContent />
    </Suspense>
  );
} 