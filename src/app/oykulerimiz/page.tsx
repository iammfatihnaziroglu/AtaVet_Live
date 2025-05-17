'use client';

import { useState, useEffect, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  primaryCategory: string;
}

type Category = 'hepsi' | 'kedi' | 'kopek' | 'kus' | 'balik' | 'kemirgen' | 'egzotik';

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
        'kuslar': 'kus',
        'baliklar': 'balik',
        'kemirgenler': 'kemirgen',
        'tavsan': 'kemirgen',
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
      title: "Patili Dostlarımızın İyileşme Hikayeleri",
      description: "Kliniğimizde tedavi ettiğimiz hayvanlarımızın dramatik iyileşme hikâyelerini okuyun.",
      image: "/images/stories/recovery-stories.jpg",
      link: "/oykulerimiz/patili-dostlarimizin-iyilesme-hikayeleri",
      categories: ['kedi', 'kopek'],
      primaryCategory: 'kopek'
    },
    {
      id: 2,
      title: "Sokak Hayvanlarına Yardım Elimiz",
      description: "Sokak hayvanlarına yaptığımız yardımlar ve onların mutlu son hikayeleri.",
      image: "/images/stories/street-animals.jpg",
      link: "/oykulerimiz/sokak-hayvanlarina-yardim-elimiz",
      categories: ['kedi', 'kopek'],
      primaryCategory: 'kedi'
    },
    {
      id: 3,
      title: "Kliniğimizin Yıldızları",
      description: "Her ay seçtiğimiz özel hastalarımızın hikayeleri ve onların eğlenceli anıları.",
      image: "/images/stories/clinic-stars.jpg",
      link: "/oykulerimiz/klinigimizin-yildizlari",
      categories: ['kedi', 'kopek', 'kus', 'balik', 'egzotik', 'kemirgen'],
      primaryCategory: 'kedi'
    },
    {
      id: 4,
      title: "Minik Dostlarımız Büyüyor",
      description: "Yavru hayvanlarımızın ilk günlerinden itibaren gelişimlerini anlatan hikayeler.",
      image: "/images/stories/growing-pets.jpg",
      link: "/oykulerimiz/minik-dostlarimiz-buyuyor",
      categories: ['kopek', 'kedi'],
      primaryCategory: 'kopek'
    },
    {
      id: 5,
      title: "Şaşırtıcı Kuş Dostlarımız",
      description: "Kliniğimize gelen kuş dostlarımızın ilginç ve eğlenceli hikayeleri.",
      image: "/images/stories/bird-stories.jpg", 
      link: "/oykulerimiz/sasirtici-kus-dostlarimiz",
      categories: ['kus'],
      primaryCategory: 'kus'
    },
    {
      id: 6,
      title: "Egzotik Hayvan Hikayeleri",
      description: "Sürüngenlerden küçük memelilere egzotik dostlarımızın ilginç tedavi süreçleri.",
      image: "/images/stories/exotic-pets.jpg",
      link: "/oykulerimiz/egzotik-hayvan-hikayeleri",
      categories: ['egzotik'],
      primaryCategory: 'egzotik'
    },
    {
      id: 7,
      title: "Akvaryum Dostlarımızın Maceraları",
      description: "Su altı dünyasının renkli sakinlerinin ilgi çekici hikayeleri ve bakım önerileri.",
      image: "/images/stories/fish-stories.jpg", 
      link: "/oykulerimiz/akvaryum-dostlarimizin-maceralari",
      categories: ['balik'],
      primaryCategory: 'balik'
    },
    {
      id: 8,
      title: "Kemirgen Dostlarımızın Dünyası",
      description: "Hamster, tavşan ve guinea pig gibi kemirgen dostlarımızın sevimli anıları.",
      image: "/images/stories/rodent-stories.jpg",
      link: "/oykulerimiz/kemirgen-dostlarimizin-dunyasi",
      categories: ['kemirgen'],
      primaryCategory: 'kemirgen'
    },
    {
      id: 9,
      title: "Veterinerlerimizin Anıları",
      description: "Veteriner hekimlerimizin meslek hayatlarında karşılaştıkları ilginç ve duygu dolu hikayeler.",
      image: "/images/stories/vet-memories.jpg",
      link: "/oykulerimiz/veterinerlerimizin-anilari",
      categories: ['kedi', 'kopek', 'kus', 'balik', 'egzotik', 'kemirgen'],
      primaryCategory: 'hepsi'
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
  
  const categoryColors: Record<Category, string> = {
    hepsi: 'from-primary to-primary/80',
    kedi: 'from-pink-500 to-pink-600',
    kopek: 'from-amber-500 to-amber-600',
    kus: 'from-blue-500 to-blue-600',
    balik: 'from-cyan-500 to-cyan-600',
    kemirgen: 'from-orange-500 to-orange-600',
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
              <div className="w-16 h-1 bg-primary mt-2 rounded-full"></div>
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
                <img 
                  src="/images/stories/pet-stories-hero.jpg" 
                  alt="Hayvan Hikayeleri" 
                  className="w-full h-[280px] md:h-[320px] object-cover"
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
                        className="relative h-48 overflow-hidden"
                        onMouseEnter={() => setHoveredStory(story.id)}
                        onMouseLeave={() => setHoveredStory(null)}
                      >
                        <img 
                          src={story.image} 
                          alt={story.title} 
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            hoveredStory === story.id ? 'scale-110' : 'scale-100'
                          }`}
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
                <img 
                  src="/images/stories/share-story.jpg" 
                  alt="Hikayeni Paylaş" 
                  className="w-full h-full object-cover"
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

export default function OykulerimizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <OykulerimizContent />
    </Suspense>
  );
} 