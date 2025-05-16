export const story = {
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
  author: "Dr. Ahmet Yılmaz",
  authorImage: "/images/stories/avatar-1.jpg",
  slug: "patili-dostlarimizin-iyilesme-hikayeleri",
  categories: ['kedi', 'kopek'],
  primaryCategory: 'kopek',
  relatedStories: ["sokak-hayvanlarina-yardim-elimiz", "klinigimizin-yildizlari"],
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
}; 