'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { categoryThemes } from '@/data/categoryThemes';
import { Story } from '@/types/story';

type StoryData = {
  story: Story;
}

function StoryDetailContent() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [story, setStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Dinamik olarak hikaye verisini yükle
  useEffect(() => {
    const loadStory = async () => {
      setIsLoading(true);
      try {
        const storyModule = await import(`@/data/stories/${slug}`) as StoryData;
        setStory(storyModule.story);
        setIsLoading(false);
      } catch (error) {
        console.error('Hikaye yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };
    
    if (slug) {
      loadStory();
    }
  }, [slug]);

  // İlgili hikayeleri yükle
  useEffect(() => {
    const loadRelatedStories = async () => {
      if (!story) return;
      
      try {
        // Try to load related stories from the story's relatedStories array
        if (story.relatedStories && story.relatedStories.length > 0) {
          const relatedData: Story[] = [];
          
          for (const relatedSlug of story.relatedStories) {
            try {
              const relatedModule = await import(`@/data/stories/${relatedSlug}`) as StoryData;
              relatedData.push(relatedModule.story);
            } catch (error) {
              console.error(`İlgili hikaye yüklenirken hata oluştu (${relatedSlug}):`, error);
            }
          }
          
          if (relatedData.length > 0) {
            setRelatedStories(relatedData);
            return;
          }
        }
        
        // If no related stories are found or there was an error, use these sample stories
        setRelatedStories([
          {
            id: 1001,
            title: "Azman'ın İnanılmaz İyileşme Hikayesi",
            slug: "azmanin-inanilmaz-iyilesme-hikayesi",
            description: "Ağır bir trafik kazası geçiren Azman'ın tedavi sürecinde yaşadığı mucizevi iyileşme.",
            image: "/images/stories/dog-recovery.jpg",
            author: "Dr. Mehmet Yılmaz",
            fullContent: "",
            heroImage: "",
            categories: ["kopek", "ortopedi"],
            primaryCategory: "kopek",
            relatedStories: []
          },
          {
            id: 1002,
            title: "Minnoş'un Göz Ameliyatı",
            slug: "minnosun-goz-ameliyati",
            description: "Katarakt nedeniyle görüşünü kaybeden Minnoş'un başarılı göz ameliyatı sonrası yeni hayatı.",
            image: "/images/stories/cat-eye-surgery.jpg",
            author: "Dr. Ayşe Demir",
            fullContent: "",
            heroImage: "",
            categories: ["kedi", "göz"],
            primaryCategory: "kedi",
            relatedStories: []
          },
          {
            id: 1003,
            title: "Karamel'in Diş Tedavisi",
            slug: "karamelin-dis-tedavisi",
            description: "Ciddi diş ve diş eti problemleri yaşayan Karamel'in kapsamlı diş tedavisi ve sonrasında yaşadığı değişim.",
            image: "/images/stories/dental-care.jpg",
            author: "Dr. Canan Yıldız",
            fullContent: "",
            heroImage: "",
            categories: ["kopek", "diş"],
            primaryCategory: "kopek",
            relatedStories: []
          }
        ]);
      } catch (error) {
        console.error('İlgili hikayeler yüklenirken hata oluştu:', error);
      }
    };
    
    loadRelatedStories();
  }, [story]);

  // Lightbox işlevleri
  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (!story?.galleryImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % story.galleryImages!.length);
  }, [story?.galleryImages]);

  const prevImage = useCallback(() => {
    if (!story?.galleryImages) return;
    setCurrentImageIndex((prev) => (prev - 1 + story.galleryImages!.length) % story.galleryImages!.length);
  }, [story?.galleryImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage, closeLightbox]);

  // Yükleme durumu
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-foreground/70">Hikaye yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Hikaye bulunamadı
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

  // Kategori temasını ayarla
  const categoryType = (story.primaryCategory || 'hepsi') as keyof typeof categoryThemes;
  const categoryTheme = categoryThemes[categoryType];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-b ${categoryTheme.heroGradient} dark:bg-gradient-to-b dark:${categoryTheme.darkHeroGradient} pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-secondary/10 dark:bg-accent/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute w-full h-full bg-noise opacity-[0.02] mix-blend-soft-light"></div>
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
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm bg-gradient-to-r ${categoryTheme.gradient} text-white`}>
                    <span>{categoryTheme.icon}</span>
                    <span>{categoryTheme.label}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {story.title}
                </h1>
                
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-full ${categoryTheme.headerBg} ${categoryTheme.color} flex items-center justify-center`}>
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
                
                <p className={`text-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl bg-white/5 dark:bg-foreground/5 backdrop-blur-sm p-4 rounded-lg border-l-2 ${categoryTheme.accentColor}`}>
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
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Decorative Elements */}
      <div className="relative z-10 -mt-6 mb-4">
        <div className="container mx-auto px-3">
          <div className="flex justify-center">
            <div className={` w-[800px] h-1 ${categoryTheme.headerBg} bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full`}></div>
          </div>
          
          
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md border border-light-gray/10 dark:border-light-gray/5 p-6 md:p-8 mb-8">
              <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
                <div dangerouslySetInnerHTML={{ __html: story.fullContent }} />
              </article>

              {/* Before/After Images Section */}
              {story.beforeAfterImages && story.beforeAfterImages.length > 0 && (
                <div className="my-12">
                  <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                      <polyline points="17 1 21 5 17 9"></polyline>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                      <polyline points="7 23 3 19 7 15"></polyline>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                    </svg>
                    <span>Öncesi ve Sonrası</span>
                  </h3>
                  
                  <div className="space-y-10">
                    {story.beforeAfterImages.map((item, index) => (
                      <div key={index} className="bg-white/5 dark:bg-foreground/5 rounded-xl overflow-hidden shadow-xl border border-light-gray/10 dark:border-light-gray/5">
                        <div className="grid md:grid-cols-2 gap-4 p-4">
                          <div className="relative group overflow-hidden rounded-lg">
                            <img 
                              src={item.before} 
                              alt={`${story.title} - Öncesi ${index + 1}`} 
                              className="w-full h-[280px] object-cover"
                            />
                          </div>
                          
                          <div className="relative group overflow-hidden rounded-lg">
                            <img 
                              src={item.after} 
                              alt={`${story.title} - Sonrası ${index + 1}`} 
                              className="w-full h-[280px] object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="p-5 text-sm text-foreground/80 bg-secondary/10 dark:bg-foreground/10 border-t border-light-gray/10">
                          <p>{item.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial Section */}
              {story.testimonial && (
                <div className="my-12 bg-white/5 dark:bg-foreground/5 rounded-xl p-6 border border-light-gray/10 dark:border-light-gray/5">
                  <div className="flex items-start gap-4">
                    {story.testimonial.ownerImage && (
                      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-light-gray/20">
                        <img 
                          src={story.testimonial.ownerImage} 
                          alt={story.testimonial.petOwner}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    
                    <div>
                      <p className="text-foreground/80 italic mb-3">&ldquo;{story.testimonial.text}&rdquo;</p>
                      <div>
                        <div className="font-medium text-foreground">{story.testimonial.petOwner}</div>
                        <div className="text-sm text-foreground/60">{story.testimonial.petName}&apos;in sahibi</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Images */}
              {story.galleryImages && story.galleryImages.length > 0 && (
                <div className="my-16">
                  <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
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
                        className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                        onClick={() => openLightbox(index)}
                      >
                        <img 
                          src={img} 
                          alt={`${story.title} - Görsel ${index + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div className="text-white text-xs bg-foreground/30 backdrop-blur-sm py-1 px-2 rounded">Görüntüyü büyüt</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 relative">
            <div className="p-0 h-full space-y-6">
              {/* Contact for Appointment Card */}
              <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Randevu Alın</span>
                </h3>
                
                <p className="text-sm text-foreground/70 mb-5">
                  Evcil dostunuz için benzer bir tedavi veya kontrol randevusu almak için bize ulaşın.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <a 
                    href="tel:+902121234567" 
                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-primary/10 hover:bg-primary hover:text-white text-primary font-medium rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Arayın</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/902121234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white text-[#25D366] font-medium rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
                
                <a 
                  href="/iletisim" 
                  className="block w-full text-center py-2.5 px-4 bg-secondary/20 hover:bg-secondary/30 text-foreground font-medium rounded-lg transition-colors"
                >
                  <span>İletişim Bilgileri</span>
                </a>
              </div>
              
              {/* Quick Info Card */}
              <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Hızlı Bilgiler</span>
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 pb-2 border-b border-gray-100 dark:border-foreground/10">
                    <div className={`w-8 h-8 rounded-full ${categoryTheme.headerBg} flex items-center justify-center flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/60">Veteriner Hekim</span>
                      <span className="block text-sm font-medium text-foreground">{story.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 pb-2 border-b border-gray-100 dark:border-foreground/10">
                    <div className={`w-8 h-8 rounded-full ${categoryTheme.headerBg} flex items-center justify-center flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/60">Tedavi Süresi</span>
                      <span className="block text-sm font-medium text-foreground">{story.treatmentDuration || 'Belirtilmemiş'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 pb-2 border-b border-gray-100 dark:border-foreground/10">
                    <div className={`w-8 h-8 rounded-full ${categoryTheme.headerBg} flex items-center justify-center flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/60">Tedavi Yeri</span>
                      <span className="block text-sm font-medium text-foreground">{story.treatmentLocation || 'AtaVet Kliniği'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full ${categoryTheme.headerBg} flex items-center justify-center flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-foreground/60">Tanı</span>
                      <span className="block text-sm font-medium text-foreground">{story.diagnosis || 'Detaylı bilgi içerikte'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Stories Card */}
              <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5">
                <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>İlgili Hikayeler</span>
                </h3>
                
                {relatedStories.length > 0 ? (
                  <div className="space-y-5">
                    {relatedStories.map((relatedStory) => (
                      <Link 
                        key={relatedStory.id} 
                        href={`/oykulerimiz/${relatedStory.slug}`}
                        className="flex gap-3 group hover:bg-secondary/10 p-2 rounded-lg"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-light-gray/10">
                          <img 
                            src={relatedStory.image} 
                            alt={relatedStory.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{relatedStory.title}</h4>
                          <div className="flex items-center gap-1.5 my-1">
                            {relatedStory.primaryCategory && (
                              <>
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryThemes[relatedStory.primaryCategory as keyof typeof categoryThemes].gradient}`}></div>
                                <span className="text-xs text-foreground/60">{categoryThemes[relatedStory.primaryCategory as keyof typeof categoryThemes].label.split(' ')[0]}</span>
                              </>
                            )}
                          </div>
                          <p className="text-xs text-foreground/70 line-clamp-2">{relatedStory.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-6 px-4 bg-secondary/10 dark:bg-foreground/5 rounded-lg text-center">
                    <p className="text-sm text-foreground/70">İlgili hikaye bulunamadı.</p>
                  </div>
                )}
              </div>
              
              {/* Tags Card */}
              {story.tags && story.tags.length > 0 && (
                <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                    <span>Etiketler</span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        href={`/etiketler/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`py-1.5 px-3 rounded-full text-xs font-medium bg-secondary/20 hover:bg-${categoryType}/20 transition-colors`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Social Media Card */}
              <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={categoryTheme.color}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Bizi Takip Edin</span>
                </h3>
                
                <p className="text-sm text-foreground/70 mb-4">
                  Tedaviler ve hayvan dostlarımızla ilgili güncel bilgiler için sosyal medya hesaplarımızı takip edin.
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  <a 
                    href="https://instagram.com/atavet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-1 py-3 px-2 bg-[#E1306C]/10 hover:bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-[#E1306C] hover:text-white rounded-lg transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="text-xs font-medium">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://facebook.com/atavet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-1 py-3 px-2 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white rounded-lg transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="text-xs font-medium">Facebook</span>
                  </a>
                  
                  <a 
                    href="https://youtube.com/atavet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-1 py-3 px-2 bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white rounded-lg transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <span className="text-xs font-medium">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Back to All Stories Button */}
              <div className="bg-white dark:bg-foreground/5 rounded-xl shadow-md p-6 border border-light-gray/10 dark:border-light-gray/5">
                <Link 
                  href="/oykulerimiz" 
                  className="group flex items-center justify-center gap-2 w-full text-center py-3 px-4 bg-primary/90 hover:bg-primary text-white font-medium rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
                  </svg>
                  <span>Tüm Hikayelere Dön</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox for Gallery Images */}
      {lightboxOpen && story.galleryImages && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4" 
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img 
              src={story.galleryImages[currentImageIndex]} 
              alt={`${story.title} - Görsel ${currentImageIndex + 1}`} 
              className="w-full h-auto max-h-[65vh] object-contain mx-auto"
            />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-12 h-12 flex items-center justify-center"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-12 h-12 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
            
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white px-3 py-1 rounded backdrop-blur-sm text-sm">
              {currentImageIndex + 1} / {story.galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StoryDetail() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <StoryDetailContent />
    </Suspense>
  );
}
