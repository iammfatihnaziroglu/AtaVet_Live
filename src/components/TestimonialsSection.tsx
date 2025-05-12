'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      petName: 'Paşa',
      text: 'Kedim Paşa için AtaVet\'i tercih ettim ve çok memnun kaldım. Personelin ilgisi ve doktorların uzmanlığı gerçekten etkileyici. Paşa\'nın tedavisi çok başarılı oldu.',
      rating: 5,
      pet: 'Kedi',
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      petName: 'Max',
      text: 'Köpeğim Max\'in aşılarını düzenli olarak AtaVet\'te yaptırıyoruz. Her ziyaretimizde gösterilen özen ve profesyonellik için teşekkür ederim.',
      rating: 5,
      pet: 'Köpek',
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      petName: 'Şila',
      text: 'Kedim Şila\'nın diş tedavisi için AtaVet\'i tercih ettik. Süreç boyunca gösterilen ilgi ve alınan sonuçlar mükemmeldi. Kesinlikle tavsiye ediyorum.',
      rating: 4,
      pet: 'Kedi',
    },
    {
      id: 4,
      name: 'Zeynep Öztürk',
      petName: 'Rocky',
      text: 'Köpeğim Rocky\'nin acil durumu için gece yarısı AtaVet\'i aradım. Hemen müdahale ettiler ve hayatını kurtardılar. 7/24 hizmetleri için minnettarım.',
      rating: 5,
      pet: 'Köpek',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-neutral relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mutlu Müşterilerimiz</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Evcil hayvan sahiplerinin AtaVet deneyimleri hakkında ne söylediklerine bakın.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto bg-background p-8 md:p-10 rounded-2xl shadow-sm border border-light-gray animate-fade-in">
          <div className="flex justify-center mb-6">
            {Array(testimonials[activeIndex].rating).fill(null).map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="#E31E24" 
                className="text-primary animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>

          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 relative">
              {testimonials[activeIndex].pet === 'Kedi' ? (
                <Image 
                  src="/cat.svg" 
                  alt="Cat" 
                  width={64} 
                  height={64} 
                  className="animate-bounce-in"
                />
              ) : (
                <Image 
                  src="/dog.svg" 
                  alt="Dog" 
                  width={64} 
                  height={64}
                  className="animate-bounce-in"
                />
              )}
            </div>
          </div>

          <blockquote className="text-lg md:text-xl text-foreground/80 text-center mb-6 animate-slide-up">
            &ldquo;{testimonials[activeIndex].text}&rdquo;
          </blockquote>

          <div className="text-center animate-fade-in">
            <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
            <p className="text-foreground/60 text-sm">{testimonials[activeIndex].petName} ({testimonials[activeIndex].pet})</p>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-background shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-light-gray"
              aria-label="Önceki yorum"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-background shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-light-gray"
              aria-label="Sonraki yorum"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
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