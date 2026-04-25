export type CaseStudy = {
  slug: string;
  num: string;
  brand: string;
  sector: string;
  title: string;
  titleEm: string;
  titleTail?: string;
  titleEm2?: string;
  lead: string;
  tags: { label: string; variant: "t1" | "t2" | "t3" | "t4" | "t5" }[];
  image?: string;
  gradient: string;
  stats: { value: string; label: string }[];
  challenge: {
    head: string;
    headEm: string;
    paragraphs: string[];
  };
  solution: {
    head: string;
    headEm: string;
    paragraphs: string[];
    items: string[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aiata",
    num: "Referans 01",
    brand: "AIATA",
    sector: "Denizcilik / Lüks",
    title: "Aiata Boats rezervasyon dönüşümünü ",
    titleEm: "%240",
    titleTail: " artırdı, CPA'yı ",
    titleEm2: "%58 azalttı.",
    lead: "Aiata Boats'un online rezervasyon işi büyüyordu — ancak edinme maliyetleri gelirinden hızlı tırmanıyordu. Ordino, AI destekli arama zekası etrafında tüm paid-media mimarisini yeniden kurdu ve israf edilen harcamayı ölçülebilir rezervasyonlara dönüştürdü.",
    tags: [
      { label: "Performans Marketing", variant: "t1" },
      { label: "AI Optimizasyon", variant: "t2" },
      { label: "Denizcilik", variant: "t3" },
    ],
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    stats: [
      { value: "+%240", label: "Rezervasyon Dönüşüm Oranı" },
      { value: "-%58", label: "CPA Azaltma" },
      { value: "5.6×", label: "ROAS Artışı" },
    ],
    challenge: {
      head: "Hiper rekabetçi seyahat pazarında ",
      headEm: "artan CPA'lar.",
      paragraphs: [
        "Aiata Boats, devasa bütçeli ve agresif teklif stratejilerine sahip global OTA'lara karşı rekabet ediyordu. Google Ads hesabı binlerce performansı düşük arama terimi ve geniş eşleşmeli anahtar kelime ile dolup, bütçeyi rezervasyon üretmeden tüketiyordu.",
        "Atribüsyon güvenilmez, kreatif yorgunluk ele alınmamış ve hafta sonu kampanya akışı sık sık zirve rezervasyon saatlerinden önce tükeniyordu.",
      ],
    },
    solution: {
      head: "AI destekli arama terimi zekası ve ",
      headEm: "talebe duyarlı teklif verme.",
      paragraphs: [
        "Ordino'nun arama terimi zeka katmanını devreye aldık ve gerçek zamanlı boşa harcamayı tespit ettik. Rezervasyon dönüşüm desenlerine göre negatif anahtar kelimeleri otomatize ettik ve hesabı talebe dayalı bir teklif modeli etrafında yeniden yapılandırdık.",
      ],
      items: [
        "Rezervasyon niyetine göre yeniden yapılandırılmış kampanya mimarisi",
        "AI destekli negatif anahtar kelime otomasyonu (günlük güncelleme)",
        "Rota başına özel ROAS hedefleri ile Smart Bidding",
        "Mevsimsellik sinyallerine bağlı dinamik kreatif rotasyon",
        "Server-side dönüşüm takibi ile offline yükleme",
      ],
    },
    quote: {
      text: "Ordino sadece reklamlarımızı optimize etmedi — büyümeye nasıl baktığımızı yeniden inşa etti. Sonuçlar her şeyi söylüyor.",
      author: "Selin Aydın",
      role: "Büyüme Direktörü, Aiata Boats",
    },
  },

  {
    slug: "gobritanya",
    num: "Referans 02",
    brand: "GOBRITANYA",
    sector: "Eğitim / Yurt Dışı",
    title: "GoBritanya ",
    titleEm: "5,400 nitelikli öğrenci lead",
    titleTail: " üretti, 4.2× ROI ile.",
    lead: "Türk öğrencilerin Birleşik Krallık'ta okumasına yardımcı olan eğitim danışmanlığı markası, niyeti niteleyen — sadece huni dolduran değil — bir lead motoruna ihtiyaç duyuyordu. Kayıt takvimleriyle hizalı tam huni paid mimarisi inşa ettik.",
    tags: [
      { label: "Lead Generation", variant: "t2" },
      { label: "Multi-Channel", variant: "t4" },
      { label: "Eğitim", variant: "t3" },
    ],
    image: "/case-studies/gobritanya.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    stats: [
      { value: "5,400+", label: "Nitelikli Öğrenci Lead" },
      { value: "4.2×", label: "Reklam Yatırım Getirisi" },
      { value: "-%43", label: "Nitelikli Lead Başına Maliyet" },
    ],
    challenge: {
      head: "Çok lead. Yetersiz ",
      headEm: "kayıt.",
      paragraphs: [
        "GoBritanya'nın önceki kampanyaları hacim üretiyordu, ancak satış ekipleri hâlâ erken aşama araştırmacı öğrencilerin peşinde saatler harcıyordu. Lead kalitesinin metriği yoktu, CRM ölü kişilerle doluydu.",
        "Kayıt takvimi mükemmel ritim talep ediyordu — Eylül ve Şubat zirveleri — ama bütçeler yıl boyunca düzdü.",
      ],
    },
    solution: {
      head: "Niyet skorlu lead nitelendirme ve ",
      headEm: "mevsimsel bütçe koreografisi.",
      paragraphs: [
        "CRM durumuna bağlı bir lead skorlama modeli uyguladık, offline dönüşüm yüklemelerini Google Ads Smart Bidding'e geri ekledik ve yüksek niyet anlarında harcamayı öne yükleyen bir mevsimsel bütçe planı oluşturduk.",
      ],
      items: [
        "CRM entegre lead skorlama (yüksek / orta / düşük)",
        "Smart Bidding için offline dönüşüm import",
        "UK akademik takvimine hizalı mevsimsel ritim",
        "Program kategorisine göre kreatif test (MBA, lisans, hazırlık)",
        "Dinamik ön doldurma + anlık WhatsApp aktarımı ile Meta lead form",
      ],
    },
    quote: {
      text: "İlk kez satış ekibimiz gerçekten kayıt yaptıracak öğrencilerle vakit harcıyor. Ordino pipeline'ımızı gerçek hale getirdi.",
      author: "Murat Yılmaz",
      role: "Pazarlama Direktörü, GoBritanya",
    },
  },

  {
    slug: "yuva-maya",
    num: "Referans 03",
    brand: "YUVA MAYA",
    sector: "Gıda",
    title: "Yuva Maya ürün sorgularını ",
    titleEm: "%312",
    titleTail: " artırdı, %47 daha düşük maliyetle.",
    lead: "Birden fazla ürün lansmanı yapan bir gıda markasının ölçeklenebilir bir edinme sistemine ihtiyacı vardı — açılıp kapanabilen, her yeni ürün için sıfırdan yapılmadan bölgeselleştirilebilen bir sistem.",
    tags: [
      { label: "Gıda", variant: "t4" },
      { label: "Programmatic", variant: "t2" },
      { label: "Lokal Hedefleme", variant: "t5" },
    ],
    image: "/case-studies/yuvamaya.jpg",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    stats: [
      { value: "+%312", label: "Ürün Sorgu Hacmi" },
      { value: "-%47", label: "Sorgu Başına Maliyet" },
      { value: "8", label: "Lansman 12 Ayda" },
    ],
    challenge: {
      head: "Her lansman ",
      headEm: "sıfırdan başlıyordu.",
      paragraphs: [
        "Her yeni ürün lansmanı, ortak altyapı olmayan tek seferlik bir kampanya olarak pazarlanıyordu. Her lansman sıfırdan hedef kitle, kreatif, landing page ve atribüsyon kurmak demekti — bütçe ve lansman zamanı yakıyordu.",
        "Bölgesel hedefleme kabaydı; yüksek niyetli mikro kitleler (yerel topluluklar, sadık müşteriler, hediye alıcıları) soğuk trafikten ayırt edilemiyordu.",
      ],
    },
    solution: {
      head: "Modüler kitle segmentleri ile ",
      headEm: "tekrarlanabilir lansman sistemi.",
      paragraphs: [
        "Ortak altyapı oluşturduk — landing page şablonu, hedef kitle yığını, kreatif modülleri, raporlama panoları — her yeni ürün için tek günde klonlanabilir hale getirildi.",
      ],
      items: [
        "Ürün-spesifik değişkenli modüler landing page şablonu",
        "Yeniden kullanılabilir yüksek niyet hedef kitle yığını",
        "Coğrafi sınırlı mahalle hedeflemeli programmatic display",
        "Lansman fazına uyum sağlayan dinamik kreatif (ön sipariş, sevkiyat, geri dönüş)",
        "Ürün başına + harmanlı portföy ile birleşik dashboard raporlaması",
      ],
    },
    quote: {
      text: "Eskiden her lansmandan korkardık. Şimdi bir sonrakini iple çekiyoruz — her şey tıkır tıkır işliyor.",
      author: "Ayşegül Demir",
      role: "Pazarlama Direktörü, Yuva Maya",
    },
  },

  {
    slug: "turkish-technic",
    num: "Referans 04",
    brand: "TURKISH TECHNIC",
    sector: "Havacılık / MRO",
    title: "Turkish Technic 8 ayda ",
    titleEm: "6× pipeline",
    titleTail: " hızı kurdu.",
    lead: "Global bir MRO (bakım, onarım, revizyon) sağlayıcısının dijital edinmenin notoriously zor olduğu bir kategoride havacılık satın alma karar vericilerine ulaşması gerekiyordu. Uzun satış döngüleri ve küçük kitleler için tasarlanmış ABM odaklı bir performans programı kurduk.",
    tags: [
      { label: "B2B / ABM", variant: "t1" },
      { label: "LinkedIn", variant: "t4" },
      { label: "Havacılık", variant: "t2" },
    ],
    image: "/case-studies/turkish-technic.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    stats: [
      { value: "6×", label: "Nitelikli Pipeline Hızı" },
      { value: "84", label: "Hedef Hesap Aktive" },
      { value: "$11M+", label: "Etkilenen Pipeline" },
    ],
    challenge: {
      head: "Devasa satış döngüsü ile ",
      headEm: "mikro hedef kitle.",
      paragraphs: [
        "Global olarak satın alma komitesi binlerle ölçülüyor — milyonlarla değil. Bu sektörde dijital edinme genellikle ölçülebilir dönüşüm sinyali olmayan farkındalık reklamcılığı şeklindeydi, çünkü gerçek satın alma sektör fuarlarında ve doğrudan ilişkilerde gerçekleşiyor.",
      ],
    },
    solution: {
      head: "Satış zekası ile ",
      headEm: "ABM odaklı paid media.",
      paragraphs: [
        "Satış ekibiyle birlikte hedef hesap listesi oluşturduk; LinkedIn, IP-bazlı programmatic display ve paid search'i bu adlandırılmış hesaplarla sınırladık. Lead sinyalleri satış ekibine gerçek zamanlı aktı; kreatif karar verici rolüne ve havayolu bölgesine göre uyarlandı.",
      ],
      items: [
        "84 küresel hedef hesap, satın alma komitesi rolleri ile haritalandı",
        "Role göre segmentlenmiş LinkedIn sponsored content + message ads",
        "Sektör yayını ve portallarda IP-bazlı display",
        "Satış ekibine 30 saniyeden kısa sürede Slack ile niyet sinyalleri",
        "Avrupa / Orta Doğu / Asya-Pasifik pazarlarına lokalize kreatif",
      ],
    },
    quote: {
      text: "Ordino dijital reklamcılığı gerçek bir satış aracına dönüştürdü. BD ekibimiz artık Slack bildirimlerini bekliyor.",
      author: "Emre Öztürk",
      role: "Ticari Genel Müdür, Turkish Technic",
    },
  },

  {
    slug: "tff",
    num: "Referans 05",
    brand: "TFF",
    sector: "Spor / Federasyon",
    title: "TFF için ",
    titleEm: "12 AI üretimi reklam filmi",
    titleTail: " 4 haftada teslim edildi.",
    lead: "Türkiye Futbol Federasyonu'nun sezon başlangıcı için 4 farklı turnuva, milli takım kampanyası ve sponsor görünürlüğü için 12 ayrı reklam filmine ihtiyacı vardı. Geleneksel yöntemle 4-6 ay sürecek iş, AI destekli prodüksiyon hattı ile 4 haftada tamamlandı.",
    tags: [
      { label: "AI Üretim", variant: "t2" },
      { label: "Motion Graphics", variant: "t1" },
      { label: "Spor", variant: "t3" },
    ],
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    stats: [
      { value: "12", label: "AI Üretimi Reklam Filmi" },
      { value: "%75", label: "Üretim Süresi Tasarrufu" },
      { value: "4 Hafta", label: "Toplam Teslim" },
    ],
    challenge: {
      head: "Hızlı ve etkileyici ",
      headEm: "sezon kampanyası.",
      paragraphs: [
        "Türkiye Futbol Federasyonu, sezon başlangıcı için 4 farklı turnuva, milli takım kampanyası ve sponsor görünürlüğü için 12 ayrı reklam filmine ihtiyaç duyuyordu. Geleneksel prodüksiyon yöntemleriyle bu kapsamda iş 4-6 ay sürecekti — ama elimizde sadece 4 hafta vardı.",
        "Ek olarak çok yüksek görsel kalite, marka tutarlılığı ve dinamik olmayan saha çekimleri gerekliydi.",
      ],
    },
    solution: {
      head: "AI destekli ",
      headEm: "prodüksiyon hattı.",
      paragraphs: [
        "Generative AI (görsel + ses), 3D motion graphics ve klasik post prodüksiyonu birleştiren hibrit bir üretim hattı kurduk. Her film için brief'ten teslime kadar 3 günlük döngü sağladık. Yaratıcı ekibimiz konseptleri yönetti, AI pipeline kurguyu ve görselleri üretti.",
      ],
      items: [
        "Generative AI kullanımı ile karakter ve sahne üretimi",
        "AI ses sentezi ile çoklu dil voice-over",
        "Motion graphics ve 3D entegrasyon",
        "Brand guideline uyumlu otomatize render hattı",
        "Her film için 3 günlük teslim döngüsü",
        "Sosyal medya için her filmin 4 farklı format adaptasyonu",
      ],
    },
    quote: {
      text: "Geleneksel yöntemle 6 ayda yapacağımız işi Ordino'nun AI yaklaşımıyla 4 haftada bitirdik. Sezon başlangıcına yetiştik.",
      author: "Mehmet Kara",
      role: "Pazarlama Direktörü, TFF",
    },
  },

  {
    slug: "turizm-bakanligi",
    num: "Referans 06",
    brand: "T.C. KÜLTÜR VE TURİZM BAKANLIĞI",
    sector: "Kamu / Turizm",
    title: "Turizm Bakanlığı ",
    titleEm: "18M+ nitelikli gösterim",
    titleTail: " sağladı, gelen arama niyetini %87 artırdı.",
    lead: "Uluslararası algıyı değiştirmek ve gelen turizm talebini artırmak için tasarlanmış bir destinasyon markalama kampanyası. Markalı hikaye anlatımı, performans araması ve influencer odaklı sosyal medyayı birleştirerek ölçülebilir niyet ürettik — sadece erişim değil.",
    tags: [
      { label: "Destinasyon Marka", variant: "t3" },
      { label: "Global Medya", variant: "t2" },
      { label: "Kamu Sektörü", variant: "t5" },
    ],
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    stats: [
      { value: "18M+", label: "Nitelikli Gösterim" },
      { value: "+%87", label: "Gelen Arama Niyeti" },
      { value: "12", label: "Uluslararası Pazar Aktif" },
    ],
    challenge: {
      head: "Gerçekten etki yaratan ",
      headEm: "marka farkındalığı.",
      paragraphs: [
        "Hedef branding geleneksel olarak erişimle ölçülür — seyahat etme kararıyla değil. Bakanlık, uluslararası algıyı gösterilebilir şekilde değiştirebilecek ve ölçülebilir aşağı yönlü talep üretebilecek bir kampanyaya ihtiyaç duyuyordu — kamu hesap verilebilirliğine de uygun olacak şekilde.",
      ],
    },
    solution: {
      head: "Üç katmanlı talep motoru: ",
      headEm: "hikaye, arama, sosyal.",
      paragraphs: [
        "Markalı hikaye anlatımını (video, premium yayıncılar) performans araması (yükselen niyeti yakalama) ve içerik üretici odaklı sosyal (12 hedef pazarda güvenilir yerel sesler aracılığıyla amplifikasyon) üzerine katmanladık. Artımlı yükseliş coğrafi olarak eşleştirilmiş pazar çiftleri ile ölçüldü.",
      ],
      items: [
        "YouTube, Meta, TikTok ve premium yayıncılarda video hikaye anlatımı",
        "12 dilde marka arama yakalama",
        "Her hedef pazarda içerik üretici ortaklıkları (250+ üretici)",
        "Hesap verebilirlik için coğrafi eşleştirilmiş artımlılık testi",
        "Uçuş aramalarına geri atribüsyonla haftalık medya-mix raporlama",
      ],
    },
    quote: {
      text: "İlk kez politika yapıcılarına reklam harcamasından ekonomik etkiye doğrudan bir bağlantı gösterebildik. Bu her şeyi değiştiriyor.",
      author: "Dr. Kemal Yıldız",
      role: "Kampanya Danışmanı, Kültür ve Turizm Bakanlığı",
    },
  },

  {
    slug: "allium-bodrum",
    num: "Referans 07",
    brand: "ALLIUM BODRUM",
    sector: "Konaklama / Lüks",
    title: "Allium Bodrum sezon dönüş döngüsünü ",
    titleEm: "3.4×",
    titleTail: " hızlandırdı, yıllık doluluk ",
    titleEm2: "%42 arttı.",
    lead: "Bodrum'un öncü lüks konaklama markasının sezonsallık problemine kalıcı bir çözüm aradık. Düşük sezon dönüş kampanyaları, yüksek sezona yönelik premium hedef kitle stratejisi ve performans-yaratıcı bütünlüğü ile yıllık doluluğu yeniden tanımladık.",
    tags: [
      { label: "Lüks Konaklama", variant: "t4" },
      { label: "Sezonsal Strateji", variant: "t2" },
      { label: "Performans + Yaratıcı", variant: "t1" },
    ],
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
    stats: [
      { value: "3.4×", label: "Sezon Dönüş Hızı" },
      { value: "+%42", label: "Yıllık Doluluk Artışı" },
      { value: "-%38", label: "Rezervasyon CPA" },
    ],
    challenge: {
      head: "Sezonsallık sorunu ve ",
      headEm: "yüksek müşteri edinme maliyeti.",
      paragraphs: [
        "Allium Bodrum, yıl boyunca düşük doluluk dönemlerinde yüksek müşteri edinme maliyetleriyle karşı karşıyaydı. Sezon dışı kampanyalar yetersiz hedefleme yüzünden bütçeyi tüketiyor, marka algısı sadece yaz aylarıyla sınırlı kalıyordu.",
        "Yüksek değerli misafir profili lüks rakipler arasında ayrıştırılamıyor, premium fiyatlandırma stratejisi reklam yatırımına yansıtılamıyordu.",
      ],
    },
    solution: {
      head: "Sezon dönüş döngüsü ve ",
      headEm: "premium hedef kitle stratejisi.",
      paragraphs: [
        "Sezon dışı dönemlerde lüks konaklama arayan yüksek değerli misafirleri hedefleyen özel kampanyalar tasarladık. Premium görsel dil, sosyal medya ve direct booking optimizasyonu ile sezon dönüş döngüsünü 3.4 katına çıkardık.",
      ],
      items: [
        "Yüksek değerli misafir hedef kitle modellemesi",
        "Sezon dışı premium kampanya tasarımı",
        "Direct booking attribution ve dönüşüm optimizasyonu",
        "Lüks segment görsel dil yenilemesi",
        "Çapraz platform retargeting (Meta, Google, TikTok)",
        "Aylık doluluk raporlama dashboard'u",
      ],
    },
    quote: {
      text: "Sezon dışı dönemler artık 'kayıp ay' değil. Allium'un yıllık doluluk grafiği tamamen farklı bir şirket olduğumuzu gösteriyor.",
      author: "Cem Yılmaz",
      role: "Pazarlama Direktörü, Allium Bodrum",
    },
  },

  {
    slug: "marie-claire",
    num: "Referans 08",
    brand: "MARIE CLAIRE",
    sector: "Medya / Yayıncılık",
    title: "Marie Claire dijital abone tabanını ",
    titleEm: "220K'dan 410K'ya",
    titleTail: " çıkardı, ",
    titleEm2: "+%86 büyüme.",
    lead: "Türkiye'nin önde gelen kadın yaşam dergilerinden Marie Claire'in dijital dönüşüm yolculuğunda, 18 ay içinde abone tabanını ikiye katlayan içerik stratejisi ve abone büyüme programını tasarladık.",
    tags: [
      { label: "Medya / Dijital Dönüşüm", variant: "t3" },
      { label: "İçerik Stratejisi", variant: "t1" },
      { label: "Abone Büyüme", variant: "t4" },
    ],
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
    stats: [
      { value: "+%86", label: "Abone Büyüme (18 ay)" },
      { value: "410K+", label: "Aktif Abone Tabanı" },
      { value: "+%124", label: "Aylık Etkileşim Oranı" },
    ],
    challenge: {
      head: "Geleneksel basınla rekabet ve ",
      headEm: "dijital abone büyütme.",
      paragraphs: [
        "Marie Claire, geleneksel print yayıncılıktan dijital-öncelikli modele geçişte abone tabanını korumak ve büyütmek istiyordu. Sosyal medyada güçlü bir takipçi kitlesi vardı ama abone dönüşümü düşüktü.",
        "Premium içerik abonelik modelinin değer önerisini, organik takipçilere ve potansiyel abonelere etkili bir şekilde iletmek zordu.",
      ],
    },
    solution: {
      head: "İçerik segmentasyonu ve ",
      headEm: "abone yolculuğu optimizasyonu.",
      paragraphs: [
        "Premium içeriği niş kategorilere ayırdık (lüks moda, sağlık, kültür) ve her kategori için ayrı abone yolculuğu tasarladık. Email pazarlama, push bildirim ve özel teklif kombinasyonu ile dönüşüm oranını dört katına çıkardık.",
      ],
      items: [
        "İçerik kategorisi bazlı abone segmentasyonu",
        "Email pazarlama otomasyonu (Klaviyo)",
        "Premium içerik paywall stratejisi",
        "Push bildirim ile aktif kullanıcı reaktivasyonu",
        "Aylık ücretsiz / yıllık premium fiyat optimizasyonu",
        "Abonelik dashboard ve LTV takibi",
      ],
    },
    quote: {
      text: "Ordino, dijital aboneliği bir gelir akışından çok daha fazlası haline getirdi. Şimdi okuyucularımızla gerçek bir ilişkimiz var.",
      author: "Defne Soylu",
      role: "Dijital Yayın Yönetmeni, Marie Claire",
    },
  },

  {
    slug: "fortune",
    num: "Referans 09",
    brand: "FORTUNE",
    sector: "Medya / Yayıncılık",
    title: "Fortune premium içerik etkileşimini ",
    titleEm: "%178",
    titleTail: " artırdı, ortalama oturum süresi ",
    titleEm2: "6:42 dakika.",
    lead: "Fortune Türkiye'nin C-suite hedef kitlesine yönelik premium içerik stratejisinde, etkileşim oranını ve oturum süresini sektör lideri seviyelere taşıyan multi-platform yaklaşımı geliştirdik.",
    tags: [
      { label: "B2B Medya", variant: "t1" },
      { label: "C-Suite Hedefleme", variant: "t2" },
      { label: "İçerik + Etkinlik", variant: "t3" },
    ],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
    stats: [
      { value: "+%178", label: "Etkileşim Oranı Artışı" },
      { value: "6:42", label: "Ortalama Oturum Süresi" },
      { value: "12K+", label: "C-Suite Aktif Okuyucu" },
    ],
    challenge: {
      head: "C-Suite hedef kitlesinde ",
      headEm: "derin etkileşim sağlamak.",
      paragraphs: [
        "Fortune Türkiye, üst düzey yönetici hedef kitlesine ulaşmakta sorun yaşamıyordu — ancak içeriği gerçekten okuyup tartışan, paylaşan ve etkileşime giren bir topluluk yaratmak zordu. Geleneksel medya ölçütleri (PV, bounce rate) hedef kitlenin değerini yansıtmıyordu.",
      ],
    },
    solution: {
      head: "Premium içerik akışı ve ",
      headEm: "topluluk-odaklı dağıtım.",
      paragraphs: [
        "Yönetici profillerine özel uzun-form analitik içerik, podcast serileri ve yıllık Fortune 500 etkinlik entegrasyonu ile derin etkileşim modeli kurduk. LinkedIn ve özel B2B platformlarda hedefli dağıtım yaptık.",
      ],
      items: [
        "C-suite içerik stratejisi ve editör kalibrasyonu",
        "Podcast prodüksiyon ve distribüsyon",
        "LinkedIn B2B sponsored content yönetimi",
        "Fortune 500 etkinlik entegrasyonu",
        "Email newsletter premium segmentasyon",
        "Engagement scoring ve retention analitik",
      ],
    },
    quote: {
      text: "Şimdi okuyucularımız sadece içeriği görmüyor — onunla diyaloğa giriyor. Bu Fortune için yeni bir dönem.",
      author: "Burak Kaya",
      role: "Genel Yayın Yönetmeni, Fortune Türkiye",
    },
  },

  {
    slug: "anadolu-motor",
    num: "Referans 10",
    brand: "ANADOLU MOTOR",
    sector: "Otomotiv",
    title: "Anadolu Motor test sürüşü rezervasyonlarını ",
    titleEm: "4.7×",
    titleTail: " artırdı, lead başına maliyeti ",
    titleEm2: "%52 düşürdü.",
    lead: "Türkiye'nin köklü otomotiv markasının dijital dönüşümünde, geleneksel showroom modelinden dijital-öncelikli müşteri edinme süreçine geçişle test sürüşü rezervasyon hacmini neredeyse beş katına çıkardık.",
    tags: [
      { label: "Otomotiv", variant: "t5" },
      { label: "Dijital Dönüşüm", variant: "t1" },
      { label: "Lead Generation", variant: "t2" },
    ],
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
    stats: [
      { value: "4.7×", label: "Test Sürüşü Rezervasyon" },
      { value: "-%52", label: "Lead Başına Maliyet" },
      { value: "+%89", label: "Showroom Ziyaret Dönüşümü" },
    ],
    challenge: {
      head: "Geleneksel satış modelinden ",
      headEm: "dijital-öncelikli edinme.",
      paragraphs: [
        "Anadolu Motor'un satış süreci yıllarca showroom-merkezliydi — ancak modern alıcı yolculuğunun %70'i artık online'da başlıyordu. Test sürüşü rezervasyonları sayfası dönüşmüyor, lead kalitesi düşük ve showroom takip oranı zayıftı.",
        "Marka algısı eski jenerasyonla kalıyor, genç alıcı kitlesine ulaşılamıyordu.",
      ],
    },
    solution: {
      head: "Dijital test sürüşü hunisi ve ",
      headEm: "showroom CRM entegrasyonu.",
      paragraphs: [
        "Modern landing page, mobil-öncelikli test sürüşü rezervasyon akışı ve showroom CRM'i ile entegre lead yönetim sistemi kurduk. Genç alıcı kitlesine yönelik sosyal medya kampanyaları ile marka algısını yeniledik.",
      ],
      items: [
        "Mobil-öncelikli test sürüşü rezervasyon flow",
        "Showroom CRM entegrasyonu (HubSpot)",
        "Genç alıcı sosyal medya kampanyası",
        "Bayi-bazlı lead atama ve takip otomasyonu",
        "Test sürüşü sonrası satış conversion tracking",
        "Aylık bayi performans raporlama",
      ],
    },
    quote: {
      text: "Anadolu Motor artık dijital bir marka. Bayi ekiplerimizin elinde gelen lead'lerin kalitesi inanılmaz.",
      author: "Kaan Aytekin",
      role: "Genel Müdür Yardımcısı, Anadolu Motor",
    },
  },
];
