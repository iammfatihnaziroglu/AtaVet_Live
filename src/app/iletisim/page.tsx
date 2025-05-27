'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    date: '',
    petName: '',
    petType: 'Kedi',
    message: '',
  });

  // Get today's date in YYYY-MM-DD format for date input min attribute
  const today = new Date().toISOString().split('T')[0];

  // Format date to Turkish format (gün Ay yıl)
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const months = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Validate phone number format
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;  // Exactly 10 digits
    return phoneRegex.test(phone);
  };

  // Validate email format if provided
  const isValidEmail = (email: string) => {
    if (!email) return true; // Empty email is valid since it's optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For phone input, only allow numbers
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^\d]/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numbersOnly }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone (required)
    if (!isValidPhone(formData.phone)) {
      alert('Lütfen geçerli bir telefon numarası giriniz (10 haneli)');
      return;
    }

    // Validate email only if provided
    if (formData.email && !isValidEmail(formData.email)) {
      alert('Lütfen geçerli bir e-posta adresi giriniz');
      return;
    }

    // Format the message for WhatsApp
    const message = 
      `*ATAVET VETERİNER KLİNİĞİ*%0A` +
      `----------------------------------------%0A%0A` +
      `*SAHİP BİLGİLERİ*%0A` +
      `----------------------------------------%0A` +
      `Ad Soyad: ${formData.name}%0A` +
      `Telefon: ${formData.phone}%0A` +
      `${formData.email ? `E-posta: ${formData.email}%0A` : ''}` +
      `${formData.subject === 'Randevu' && formData.date ? `Randevu: ${formatDate(formData.date)}%0A` : ''}%0A` +
      `*HASTA BİLGİLERİ*%0A` +
      `----------------------------------------%0A` +
      `İsim: ${formData.petName}%0A` +
      `Tür: ${formData.petType}%0A%0A` +
      `*NOTLAR*%0A` +
      `----------------------------------------%0A` +
      `${formData.message}%0A%0A` +
      `----------------------------------------%0A` +
      `www.atavetisparta.com`;

    // WhatsApp phone number
    const phoneNumber = "905426011232";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      date: '',
      petName: '',
      petType: 'Kedi',
      message: '',
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Randevu, Şikayet ve Önerileriniz</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Aşağıdaki formu doldurarak bize ulaşabilirsiniz
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-secondary p-4 rounded-2xl border border-light-gray h-96 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1397410827714!2d30.570474!3d37.7557922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b588aece1129%3A0x125daa561440e1da!2sATAVET%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1653331234789!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              className="rounded-xl" 
              style={{border: 0}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
            
            <div className="space-y-6">
              <a 
                href="https://www.google.com.tr/maps/place/ATAVET+Veteriner+Klini%C4%9Fi/@37.7557922,30.570474,17z/data=!3m1!4b1!4m6!3m5!1s0x14c5b588aece1129:0x125daa561440e1da!8m2!3d37.755788!4d30.5730489!16s%2Fg%2F11wj5nch51?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:text-[#E31E24] transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">Adres</h3>
                  <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">Ayazmana Mah. 124. Cadde No.63-65/1</p>
                  <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors mt-1">Isparta/Merkez</p>
                </div>
              </a>

              <a 
                href="tel:+905426011232" 
                className="flex items-start gap-4 group hover:text-[#E31E24] transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">Telefon</h3>
                  <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">
                    <a href="tel:+905426011232" className="hover:text-[#E31E24]">+90 542 601 12 32</a>
                  </p>
                </div>
              </a>

              <a 
                href="mailto:vettsener@gmail.com" 
                className="flex items-start gap-4 group hover:text-[#E31E24] transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-[#E31E24]/10 group-hover:text-[#E31E24] transition-all duration-300 group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-105">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[#E31E24] transition-colors">E-posta</h3>
                  <p className="text-foreground/70 group-hover:text-[#E31E24]/80 transition-colors">
                    <a href="mailto:vettsener@gmail.com" className="hover:text-[#E31E24]">vettsener@gmail.com</a>
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Çalışma Saatleri</h3>
                  <p className="text-foreground/70">Cumartesi: 09:30 - 20:00</p>
                  <p className="text-foreground/70">Pazar: 10:00 - 19:00</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/people/Atavet-Veteriner-Klini%C4%9FiIsparta/61567290032914/?locale=tr#" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-[#E31E24]/10 p-3 rounded-full transition-all duration-300 hover:scale-105 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-[#E31E24] transition-colors">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/atavetisparta" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-[#E31E24]/10 p-3 rounded-full transition-all duration-300 hover:scale-105 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-[#E31E24] transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://tiktok.com/@ispartaatavet" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-[#E31E24]/10 p-3 rounded-full transition-all duration-300 hover:scale-105 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"  className="text-primary group-hover:text-[#E31E24] transition-colors"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-7 bg-secondary p-6 rounded-xl border border-light-gray">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                  Ad Soyad *
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-1">
                    Telefon (10 haneli) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="5XX XXX XX XX"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    E-posta (İsteğe bağlı)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    required
                  >
                    <option value="">Konu Seçiniz</option>
                    <option value="Randevu">Randevu</option>
                    <option value="Şikayet">Şikayet</option>
                    <option value="Öneri">Öneri</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground/70 mb-1">
                    Randevu Tarihi {formData.subject === 'Randevu' ? '*' : ''}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      required={formData.subject === 'Randevu'}
                      disabled={formData.subject !== 'Randevu'}
                      onClick={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (formData.subject === 'Randevu' && target.showPicker) {
                          try {
                            target.showPicker();
                          } catch {
                          }
                        }
                      }}
                    />
                    {formData.subject !== 'Randevu' && (
                      <div className="absolute -bottom-5 left-5 text-xs text-foreground/30">
                        Konu kısmından &ldquo;Randevu&rdquo; seçiniz
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="petName" className="block text-sm font-medium text-foreground/70 mb-1">
                    Evcil Hayvan Adı *
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
                    Hayvan Türü *
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
                    <option value="Egzotik">Egzotik</option>
                  </select>
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                  placeholder="Mesajınızı buraya yazın"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  WhatsApp&apos;tan Gönder
                </button>
                <p className="text-sm text-foreground/50 mt-2">
                  * ile işaretli alanlar zorunludur
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 