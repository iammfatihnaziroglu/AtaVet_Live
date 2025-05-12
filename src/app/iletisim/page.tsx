'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Genel Bilgi',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real application
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Genel Bilgi',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">İletişim</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya randevu talepleriniz için bize ulaşabilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-secondary p-4 rounded-2xl border border-light-gray h-96 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4735303961774!2d30.553362677064618!3d37.76526587236629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b594c1c2eb63%3A0x96c081b6cef96208!2sIsparta%2C%20Turkey!5e0!3m2!1sen!2sus!4v1684140045650!5m2!1sen!2sus" 
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
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Adres</h3>
                  <p className="text-foreground/70">Isparta Merkez, Mehmet Tönge Cd. No:15</p>
                  <p className="text-foreground/70 mt-1">Isparta, 32100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Telefon</h3>
                  <p className="text-foreground/70">
                    <a href="tel:+902461234567" className="hover:text-primary">+90 246 123 4567</a>
                  </p>
                  <p className="text-foreground/70 mt-1">
                    <a href="tel:+902461234568" className="hover:text-primary">+90 246 123 4568</a> (Acil Hat)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">E-posta</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:info@atavet.com" className="hover:text-primary">info@atavet.com</a>
                  </p>
                  <p className="text-foreground/70 mt-1">
                    <a href="mailto:randevu@atavet.com" className="hover:text-primary">randevu@atavet.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Çalışma Saatleri</h3>
                  <p className="text-foreground/70">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-foreground/70">Cumartesi: 09:00 - 14:00</p>
                  <p className="text-foreground/70">Pazar: Kapalı (Acil durumlarda 24 saat hizmet)</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-neutral p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-neutral p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-neutral p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-neutral p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
            {isSubmitted ? (
              <div className="bg-primary/10 p-6 rounded-xl border border-primary text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className="text-xl font-bold mb-2">Mesajınız Gönderildi!</h3>
                <p className="text-foreground/70">
                  En kısa sürede size geri dönüş yapacağız. İlginiz için teşekkür ederiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-6 rounded-xl border border-light-gray">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      E-posta *
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
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                  >
                    <option value="Genel Bilgi">Genel Bilgi</option>
                    <option value="Randevu">Randevu</option>
                    <option value="Ürün Bilgisi">Ürün Bilgisi</option>
                    <option value="Fiyat Bilgisi">Fiyat Bilgisi</option>
                    <option value="Şikayet">Şikayet</option>
                    <option value="Teşekkür">Teşekkür</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
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
                    Mesajı Gönder
                  </button>
                  <p className="text-sm text-foreground/50 mt-2">
                    * ile işaretli alanlar zorunludur
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 