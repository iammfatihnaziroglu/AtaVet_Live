"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    date: "",
    petName: "",
    petType: "Kedi",
    message: "",
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    
    // For phone input, only allow numbers
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^\d]/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numbersOnly }));
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      name: "",
      email: "",
      phone: "",
      subject: "",
      date: "",
      petName: "",
      petType: "Kedi",
      message: "",
    });
  };

  return (
    <section
      id="iletisim"
      className="section bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full blur-xl"></div>
            <div className="relative flex flex-col items-center gap-4 px-12 py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
              <div className="flex gap-3">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-wide">
                  Randevu, Şikayet ve Önerileriniz
                </h2>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Aşağıdaki formu doldurarak bize ulaşabilirsiniz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="bg-secondary p-8 md:p-10 rounded-2xl md:rounded-3xl border border-light-gray animate-slide-up shadow-lg hover:shadow-xl transition-all h-full">
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center w-full">
                <Image
                  src="/atavetLogo.svg"
                  alt="AtaVet Logo"
                  width={180}
                  height={180}
                  className="mb-2 w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-center">
                İletişim Bilgilerimiz
              </h3>
              <p className="text-foreground/80 text-center mt-2">
                Profesyonel veterinerlik hizmetleri için bize ulaşın
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div
                className="flex items-start gap-3 md:gap-4 group animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Isparta+Merkez,+Mehmet+Tönge+Cd.+No:15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral p-2 md:p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </a>
                <div className="flex-1">
                  <a 
                    href="https://www.google.com.tr/maps/place/ATAVET+Veteriner+Klini%C4%9Fi/@37.7557922,30.570474,17z/data=!3m1!4b1!4m6!3m5!1s0x14c5b588aece1129:0x125daa561440e1da!8m2!3d37.755788!4d30.5730489!16s%2Fg%2F11wj5nch51?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    <h4 className="text-base md:text-lg font-semibold group-hover/link:text-primary transition-colors">Adres</h4>
                    <p className="text-sm md:text-base tracking-tight text-foreground/70 group-hover/link:text-primary transition-colors">
                      Ayazmana Mah. 124. Cadde No.63-65/1 Isparta/Merkez
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-3 md:gap-4 group animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <a 
                  href="tel:+905426011232"
                  className="bg-neutral p-2 md:p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
                <div className="flex-1">
                  <a 
                    href="tel:+905426011232"
                    className="group/link"
                  >
                    <h4 className="text-base md:text-lg font-semibold group-hover/link:text-primary transition-colors">Telefon</h4>
                    <p className="text-sm md:text-base text-foreground/70 group-hover/link:text-primary transition-colors">
                      +90 542 601 12 32
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-3 md:gap-4 group animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <a 
                  href="mailto:info@atavet.com"
                  className="bg-neutral p-2 md:p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <div className="flex-1">
                  <a 
                    href="mailto:vettsener@gmail.com"
                    className="group/link"
                  >
                    <h4 className="text-base md:text-lg font-semibold group-hover/link:text-primary transition-colors">E-posta</h4>
                    <p className="text-sm md:text-base text-foreground/70 group-hover/link:text-primary transition-colors">
                      vettsener@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-3 md:gap-4 group animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="bg-neutral p-2 md:p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-6 md:h-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold">
                    Çalışma Saatleri
                  </h4>
                  <p className="text-sm md:text-base text-foreground/70">
                    Pazartesi - Cumartesi: 09:30 - 20:00
                  </p>
                  <p className="text-sm md:text-base text-foreground/70">
                    Pazar: 10:00 - 19:00
                  </p>
                  <p className="text-sm md:text-base text-primary">
                    Acil durumlar için 7/24 hizmet alabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-light-gray/50">
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://www.facebook.com/people/Atavet-Veteriner-Klini%C4%9FiIsparta/61567290032914/?locale=tr#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/atavetisparta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@ispartaatavet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-center text-sm text-foreground/70 mt-4">
                Sevgi iyileştirir.
              </p>
            </div>
          </div>

          <div className="animate-slide-up h-full" style={{ animationDelay: "0.5s" }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8 bg-secondary p-8 md:p-10 rounded-2xl md:rounded-3xl border border-light-gray shadow-lg h-full"
            >
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <div className="absolute -bottom-5 left-7 text-xs text-foreground/30">
                        Konu kısmından &ldquo;Randevu&rdquo; seçiniz
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  rows={4}
                  className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                  placeholder="Mesajınızı buraya yazın"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-sm md:text-lg py-2.5 md:py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform"
              >
                WhatsApp&apos;tan Gönder
              </button>
              <p className="text-sm text-foreground/50 mt-2">
                * ile işaretli alanlar zorunludur
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Paw decorations */}
      <div
        className="absolute top-1/4 left-[5%] w-6 h-6 md:w-8 md:h-8 opacity-10 animate-pulse hidden lg:block"
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#121212">
            <path d="M6 12.5C6.83 12.5 7.5 11.83 7.5 11C7.5 10.17 6.83 9.5 6 9.5C5.17 9.5 4.5 10.17 4.5 11C4.5 11.83 5.17 12.5 6 12.5Z" />
            <path d="M10 8.5C10.83 8.5 11.5 7.83 11.5 7C11.5 6.17 10.83 5.5 10 5.5C9.17 5.5 8.5 6.17 8.5 7C8.5 7.83 9.17 8.5 10 8.5Z" />
            <path d="M14 8.5C14.83 8.5 15.5 7.83 15.5 7C15.5 6.17 14.83 5.5 14 5.5C13.17 5.5 12.5 6.17 12.5 7C12.5 7.83 13.17 8.5 14 8.5Z" />
            <path d="M18 12.5C18.83 12.5 19.5 11.83 19.5 11C19.5 10.17 18.83 9.5 18 9.5C17.17 9.5 16.5 10.17 16.5 11C16.5 11.83 17.17 12.5 18 12.5Z" />
            <path d="M12 14.5C9.5 14.5 7.5 16.36 7.5 18.27C7.5 19.96 8.67 20.99 10.24 20.99C11.27 20.99 12.11 20.62 12.93 20.28C13.65 19.99 14.35 19.7 15.09 19.7C15.81 19.7 16.11 19.93 16.45 20.2C16.75 20.43 17.08 20.69 17.88 20.69C19.18 20.69 20.5 19.74 20.5 18.07C20.5 16.18 18.24 14.5 16 14.5H12Z" />
          </g>
        </svg>
      </div>
    </section>
  );
}
