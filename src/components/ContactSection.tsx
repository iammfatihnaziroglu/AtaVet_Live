'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'Kedi',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real application
    console.log('Form submitted:', formData);
    alert('Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petType: 'Kedi',
      date: '',
      message: '',
    });
  };

  return (
    <section id="iletisim" className="section bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Randevu Al</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Dostunuz için hemen randevu alın. Aşağıdaki formu doldurarak veya telefon numaramızı arayarak bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary p-8 rounded-2xl border border-light-gray animate-slide-up shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-neutral p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Adres</h4>
                  <p className="text-foreground/70">Isparta Merkez, Mehmet Tönge Cd. No:15</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-neutral p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Telefon</h4>
                  <p className="text-foreground/70">+90 246 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-neutral p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">E-posta</h4>
                  <p className="text-foreground/70">info@atavet.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-neutral p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Çalışma Saatleri</h4>
                  <p className="text-foreground/70">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                  <p className="text-foreground/70">Pazar: Kapalı (Acil Durum Hattı Açık)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-6 rounded-xl border border-light-gray shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Ad Soyad"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="E-posta adresiniz"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Telefon numaranız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground/70 mb-1">
                    Randevu Tarihi
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="petName" className="block text-sm font-medium text-foreground/70 mb-1">
                    Evcil Hayvan Adı
                  </label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Evcil hayvanınızın adı"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="petType" className="block text-sm font-medium text-foreground/70 mb-1">
                    Hayvan Türü
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    required
                  >
                    <option value="Kedi">Kedi</option>
                    <option value="Köpek">Köpek</option>
                    <option value="Kuş">Kuş</option>
                    <option value="Kemirgen">Kemirgen</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                  placeholder="Randevu detayları, şikayetler veya sorularınız"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Randevu Talebini Gönder
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Pet Decoration */}
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-20 animate-pulse hidden lg:block">
        {formData.petType === 'Kedi' ? (
          <Image src="/cat.svg" alt="Cat" width={96} height={96} />
        ) : (
          <Image src="/dog.svg" alt="Dog" width={96} height={96} />
        )}
      </div>
      
      {/* Paw decorations */}
      <div className="absolute top-1/4 left-[5%] w-8 h-8 opacity-10 animate-pulse hidden lg:block" style={{ animationDelay: '1.2s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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