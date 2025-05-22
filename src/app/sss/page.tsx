'use client';

import { useState } from 'react';

export default function FaqPage() {
  const faqs = [
    {
      id: 1,
      question: "Randevu almak için ne yapmalıyım?",
      answer: "Randevu almak için web sitemizdeki randevu formunu doldurabilir, kliniğimizi telefonla arayabilir veya doğrudan ziyaret edebilirsiniz. Acil durumlar için 7/24 hizmet veriyoruz."
    },
    {
      id: 2,
      question: "Evcil hayvanım için hangi aşılar gerekli?",
      answer: "Evcil hayvanınızın türüne, yaşına ve yaşam tarzına bağlı olarak farklı aşı programları uygulanmaktadır. Kedi ve köpekler için temel aşılar, kuduz, karma aşılar ve parazit önleyici uygulamalardır. Detaylı bilgi için veteriner hekimimizle görüşmenizi öneririz."
    },
    {
      id: 3,
      question: "Kısırlaştırma operasyonu ne zaman yapılmalıdır?",
      answer: "Kedi ve köpeklerde kısırlaştırma genellikle 6-8 aylık yaşta önerilir. Ancak bu, hayvanın cinsine, sağlık durumuna ve diğer faktörlere bağlı olarak değişebilir. En doğru zamanlama için veteriner hekiminize danışmanız önemlidir."
    },
    {
      id: 4,
      question: "Evcil hayvanımın beslenme düzeni nasıl olmalı?",
      answer: "Evcil hayvanınızın beslenme düzeni türüne, yaşına, kilosuna ve sağlık durumuna göre değişiklik gösterir. Kaliteli ve yaşına uygun mamalar tercih etmeniz, düzenli besleme saatleri oluşturmanız ve temiz su sağlamanız önemlidir. Özel beslenme ihtiyaçları için veteriner hekiminizden tavsiye alabilirsiniz."
    },
    {
      id: 5,
      question: "Hangi acil durumlarda vakit kaybetmeden kliniğe getirmeliyim?",
      answer: "Yoğun kusma veya ishal, nefes almada zorluk, bilinç kaybı, uzun süren nöbetler, ciddi yaralanmalar, kanamalı yaralar, zehirlenme şüphesi, doğum komplikasyonları ve ani felç durumlarında vakit kaybetmeden acil veteriner müdahalesi gereklidir."
    },
    {
      id: 6,
      question: "Evcil hayvanım için hangi bakım ürünlerini kullanmalıyım?",
      answer: "Evcil hayvanınızın türüne, tüy tipine ve cilt yapısına uygun şampuan ve bakım ürünleri kullanmanız önemlidir. İnsan şampuanları ve bakım ürünleri pH değerleri farklı olduğu için evcil hayvanlarınızda cilt sorunlarına yol açabilir. Kliniğimizden hayvanınıza özel bakım ürünleri hakkında bilgi alabilirsiniz."
    },
    {
      id: 7,
      question: "Yaşlı evcil hayvanım için ne gibi özel bakım önlemleri almalıyım?",
      answer: "Yaşlı evcil hayvanlar için daha sık veteriner kontrolleri, yaşa uygun beslenme programı, eklem sağlığını destekleyen takviyeler, rahat ve erişimi kolay yaşam alanları oluşturmak, uygun egzersiz programları ve diş sağlığına özel önem vermek gereklidir."
    },
    {
      id: 8,
      question: "Evcil hayvanım için mikroçip ve kayıt işlemleri nasıl yapılır?",
      answer: "Mikroçip uygulaması kliniğimizde basit bir işlemle yapılmaktadır. Evcil hayvanınızın boynunun arka kısmına özel bir iğne ile yerleştirilen mikroçip, kaybolma durumunda kimlik bilgilerine ulaşılmasını sağlar. İşlem sonrası gerekli kayıt ve belgelendirme işlemlerini de kliniğimizde tamamlayabilirsiniz."
    },
    {
      id: 9,
      question: "Kliniğinizde hangi laboratuvar hizmetleri sunulmaktadır?",
      answer: "Kliniğimizde kan tahlilleri, idrar analizleri, dışkı testleri, hormon testleri, ultrason, röntgen ve diğer teşhis yöntemleri sunulmaktadır. Modern cihazlarımız sayesinde birçok testi hızlı ve doğru şekilde gerçekleştiriyoruz."
    },
    {
      id: 10,
      question: "Evcil hayvanım için önerilen kontrol sıklığı nedir?",
      answer: "Sağlıklı yetişkin evcil hayvanlar için yılda en az bir kez, yavru ve yaşlı hayvanlar için 6 ayda bir veteriner kontrolü önerilir. Kronik hastalığı olan hayvanlar için ise veterinerinizin belirleyeceği aralıklarla kontrol gereklidir."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block px-8 py-4 mb-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Sık Sorulan Sorular</h1>
            </div>
            <div className="w-full md:w-[800px] h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mb-6"></div>
            <p className="text-base md:text-md text-foreground/70 opacity-80">
              Evcil hayvan bakımı ve hizmetlerimiz hakkında en çok sorulan sorular ve yanıtları
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="bg-white dark:bg-foreground/5 border border-light-gray/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-neutral/5 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base font-medium pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
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
                      className={`transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-primary' : 'text-foreground/50'}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 bg-neutral/5 border-t border-light-gray/20">
                    <p className="text-sm text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center bg-white dark:bg-foreground/5 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Başka Sorunuz mu Var?</h3>
            <p className="text-sm text-foreground/70 mb-6">
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+905426011232" 
                className="btn-secondary flex items-center justify-center gap-2 py-2.5 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +90 542 601 12 32
              </a>
              <a 
                href="/iletisim" 
                className="btn-primary flex items-center justify-center gap-2 py-2.5 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Bizimle İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 