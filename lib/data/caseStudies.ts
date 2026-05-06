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
  brandIntro: string;
  featuredServices: string[];
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
    lead: "Aiata Boats için LinkedIn, Meta ve Google platformlarında reklam yönetimini, görsel tasarımı ve SEO süreçlerini baştan sona üstlendik. Marka büyüdükçe coğrafyasını da genişlettik: Aiata Boats USA, Aiata Boats Spain ve Aiata Boats Greece hesapları dahil olmak üzere markanın tüm global sosyal medya varlığını yönetiyoruz. Mailing kampanyalarından etkinlik iletişimine, içerik üretiminden tasarıma kadar 360 derece bir hizmet kapasitesiyle çalışıyoruz.",
    brandIntro: "Lüks denizcilik sektörünün yükselen ismi Aiata Boats, özel üretim tekne ve su araçlarıyla Türkiye'nin yanı sıra ABD, İspanya ve Yunanistan'da da varlık gösteriyor. Tasarım kalitesi ve küresel vizyonuyla premium segment denizcilik dünyasında güçlü bir yer ediniyor.",
    featuredServices: [
      "Reklam Yönetimi",
      "SEO",
      "Görsel Tasarım",
      "Global Sosyal Medya Yönetimi",
      "Mailing",
      "Etkinlik İletişimi",
    ],
    image: "/case-studies/aiata.png",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    stats: [
      { value: "3 Ülke", label: "USA · Spain · Greece" },
      { value: "360°", label: "Uçtan Uca Hizmet" },
      { value: "Global", label: "Sosyal Medya Yönetimi" },
    ],
    challenge: {
      head: "Lüks denizcilikte ",
      headEm: "global pazara açılma süreci.",
      paragraphs: [
        "Premium segment denizcilikte yeni pazarlara açılım, sadece görünür olmayı aşan bir gereklilik taşır: doğru konumlanma, sürdürülebilir iletişim ve performans odaklı büyüme. Üç farklı coğrafyada ayrı varlığı yönetmek operasyonel disiplin gerektirir.",
      ],
    },
    solution: {
      head: "360 derece hizmet kapasitesi ve ",
      headEm: "stratejik ortaklık.",
      paragraphs: [
        "Markanın iletişim sürecini kreatif, performans, içerik ve etkinlik boyutlarıyla bütüncül yönetiyoruz. Her coğrafyaya özgü dinamikleri yerel yaklaşımla, global tutarlılıkla harmanlıyoruz.",
      ],
      items: [
        "Reklam Yönetimi",
        "SEO",
        "Görsel Tasarım",
        "Global Sosyal Medya Yönetimi",
        "Mailing",
        "Etkinlik İletişimi",
      ],
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
    lead: "Google ve Meta reklamlarını, görsel tasarımı, SEO'yu ve web sitesi optimizasyonlarını eş zamanlı olarak yönetiyoruz. Reklam kampanyaları sayesinde aylık 1.000'in üzerinde müşteri dönüşümü elde ediliyor; her kanal birbiriyle entegre, ölçülebilir bir büyüme modeli çerçevesinde çalışıyor.",
    brandIntro: "Tüm dünyadan öğrencilerin Birleşik Krallık'ta eğitim, yaşam ve göç süreçlerinde ihtiyaç duydukları kapsamlı rehberliği sunan Gobritanya, alanında öncü bir dijital platform olarak on binlerce kullanıcıya güvenilir bir kaynak olmayı sürdürüyor.",
    featuredServices: [
      "Google & Meta Reklamları",
      "SEO",
      "Web Sitesi Optimizasyonu",
      "Görsel Tasarım",
      "Dönüşüm Optimizasyonu",
    ],
    image: "/case-studies/gobritanya.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    stats: [
      { value: "1.000+", label: "Aylık Müşteri Dönüşümü" },
      { value: "5 Kanal", label: "Entegre Yönetim" },
      { value: "Full Funnel", label: "Edinme Modeli" },
    ],
    challenge: {
      head: "Yurt dışı eğitim yolculuğunda ",
      headEm: "doğru kararı kolaylaştırmak.",
      paragraphs: [
        "Eğitim için yurt dışına çıkmak, öğrenci ve aileler için karmaşık ve uzun bir karar sürecidir. Reklam, içerik, web ve dönüşüm — hepsinin tek bir hedefe (öğrenci kaydı) hizmet etmesi gerekir.",
      ],
    },
    solution: {
      head: "Entegre büyüme ",
      headEm: "modeli.",
      paragraphs: [
        "Her kanalı birbirine bağlayan ölçülebilir büyüme modeli kurduk. Reklam, SEO ve web optimizasyonu birlikte çalışınca dönüşüm doğal sonuç haline geliyor.",
      ],
      items: [
        "Google & Meta Reklamları",
        "SEO",
        "Web Sitesi Optimizasyonu",
        "Görsel Tasarım",
        "Dönüşüm Optimizasyonu",
      ],
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
    lead: "Yuva Maya'nın yenilenen marka kimliğinin lansmanını Google, Meta ve TikTok başta olmak üzere tüm platformlarda eş zamanlı kampanyalarla yönettik. Bu kampanya, Türkiye'deki her 5 kadından 3'üne Yuva Maya reklamlarını taşıdı. Lansman videosu, Yuva Maya YouTube kanalının en çok izlenen içeriği haline geldi. Optimum medya planlaması ve anlık optimizasyonla markanın yeni dönemi dijitalde güçlü bir çıkış yaptı.",
    brandIntro: "Dünyanın lider fermantasyon teknolojileri şirketi Lesaffre'ın Türkiye markası olan Yuva Maya, maya ve un ürünleri kategorisinde Türkiye'nin en güçlü isimlerinden biri. Güçlü dijital topluluğu, kapsamlı tarif platformu ve yenilikçi ürün geliştirme anlayışıyla markanın büyüme ivmesi her geçen yıl artıyor.",
    featuredServices: [
      "Lansman Kampanyası Yönetimi",
      "Çok Platformlu Reklam (Google · Meta · TikTok)",
      "YouTube Kampanyaları",
      "Medya Optimizasyonu",
    ],
    image: "/case-studies/yuvamaya.jpg",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    stats: [
      { value: "20.8M+", label: "Toplam Erişim" },
      { value: "8.5M+", label: "İzlenme" },
      { value: "600K+", label: "Etkileşim" },
    ],
    challenge: {
      head: "Yeniden konumlanan markada ",
      headEm: "güçlü bir dijital çıkış.",
      paragraphs: [
        "Marka kimliği yenilemesi, lansman anında kitleyi yakalamak için kusursuz zamanlama gerektirir. Geniş bir kadın kitlesine eş zamanlı, yüksek görünürlükte ve duygusal etki bırakacak bir çıkış yapılmalıydı.",
      ],
    },
    solution: {
      head: "Eş zamanlı çok platformlu ",
      headEm: "lansman koreografisi.",
      paragraphs: [
        "Tüm büyük platformlarda eş zamanlı çıkış stratejisi kurarak medya planlamasını anlık optimizasyonla destekledik. Her platform kendi gücüyle, ama tek bir lansman ritmiyle çalıştı.",
      ],
      items: [
        "Lansman Kampanyası Yönetimi",
        "Çok Platformlu Reklam (Google · Meta · TikTok)",
        "YouTube Kampanyaları",
        "Medya Optimizasyonu",
      ],
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
    lead: "LinkedIn, Google (YouTube) ve Meta kanallarında 100'ü aşkın reklam kurulumu ve yönetimi gerçekleştirdik. Global ölçekte 50 milyonun üzerinde kişiye ulaşan kampanyalarımızın yanı sıra, yalnızca 72 saatlik bir YouTube reklamıyla Turkish Technic'in kanalındaki en çok izlenen video olmasını sağladık. Uluslararası havacılık fuarlarında da markanın yanında yer alarak global katılımcılara yönelik kapsamlı reklam kampanyalarını baştan sona yönettik.",
    brandIntro: "Türk Hava Yolları'nın teknik bakım kolu olan Turkish Technic, küresel havacılık endüstrisinin en güvenilir MRO (Maintenance, Repair & Overhaul) şirketlerinden biridir. 50'yi aşkın ülkede faaliyet gösteren şirket, havacılık sektöründe dünya genelinde tanınan bir güç merkezi konumundadır.",
    featuredServices: [
      "Çok Kanallı Reklam Yönetimi (LinkedIn · Google · Meta)",
      "YouTube Kampanyaları",
      "Fuar İletişimi & Etkinlik Reklamcılığı",
    ],
    image: "/case-studies/turkish-technic.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    stats: [
      { value: "100+", label: "Reklam Kampanyası" },
      { value: "50M+", label: "Global Erişim" },
      { value: "72 Saat", label: "Rekor YouTube Reklamı" },
    ],
    challenge: {
      head: "Global havacılık sektöründe ",
      headEm: "ulaşılması zor karar vericiler.",
      paragraphs: [
        "Havacılık sektöründe reklam yatırımı, geniş kitle iletişiminden çok farklıdır. Karar vericiler dünya genelinde dağılmış, sayıca az ve uzmanlaşmış bir kitledir. Doğru kanal, doğru anlatım ve doğru zamanlamada hata yapmaya yer yoktur.",
      ],
    },
    solution: {
      head: "Çok kanallı yaklaşım ve ",
      headEm: "sektörel bilinç.",
      paragraphs: [
        "Profesyonel kanalda profesyonel iletişim ilkesiyle her platforma özel kampanya tasarladık. Sektörün tempo ve etkinlik takvimine göre yatırım stratejisini şekillendirdik.",
      ],
      items: [
        "Çok Kanallı Reklam Yönetimi (LinkedIn · Google · Meta)",
        "YouTube Kampanyaları",
        "Fuar İletişimi & Etkinlik Reklamcılığı",
      ],
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
    lead: "TFF ile yürüttüğümüz projelerde yapay zeka destekli reklam filmi üretimi merkezde yer alıyor. Geleneksel prodüksiyon süreçlerini AI teknolojisiyle yeniden tanımladık; daha hızlı, daha ölçeklenebilir ve yaratıcı sınırları zorlayan içerikler ürettik. Milyonlarca futbol taraftarına ulaşan bu projeler, kamu spor kurumlarında AI destekli medya üretiminin ne denli güçlü sonuçlar verebileceğini somut biçimde ortaya koydu.",
    brandIntro: "Türk futbolunun merkezi yönetim otoritesi olan TFF, ulusal ligler ve milli takım organizasyonlarıyla milyonlarca futbol taraftarının yakından takip ettiği kurumsal bir güç. Sporun ve toplumun kesiştiği bu platformda iletişim, her zamankinden daha fazla önem taşıyor.",
    featuredServices: [
      "AI Destekli Reklam Filmi Üretimi",
      "Yaratıcı İçerik Stratejisi",
      "Spor İletişimi",
    ],
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    stats: [
      { value: "AI Üretim", label: "Reklam Filmi" },
      { value: "Milyonlar", label: "Taraftara Ulaşım" },
      { value: "Yeniden", label: "Tanımlanan Prodüksiyon" },
    ],
    challenge: {
      head: "Geleneksel prodüksiyonu ",
      headEm: "yeniden tanımlamak.",
      paragraphs: [
        "Büyük ölçekli kurumsal iletişimde hız ve ölçek, geleneksel prodüksiyon yöntemleriyle her zaman birlikte sağlanamaz. Yaratıcı sınırlar genişlerken kalite düşmemelidir.",
      ],
    },
    solution: {
      head: "AI ile ",
      headEm: "ölçeklenebilir üretim.",
      paragraphs: [
        "Yapay zeka teknolojisini yaratıcı sürece entegre ederek üretim hızını ve ölçeğini artırdık. Geleneksel kalite ile yeni nesil hız bir araya geldi.",
      ],
      items: [
        "AI Destekli Reklam Filmi Üretimi",
        "Yaratıcı İçerik Stratejisi",
        "Spor İletişimi",
      ],
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
    lead: "Kültür ve Turizm Bakanlığı bünyesindeki farklı başkanlıklarla yürütülen projelerde çok kanallı reklam yönetimi ve dijital iletişim stratejisi alanlarında hizmet veriyoruz. Ulusal kültür varlıklarını ve turizm potansiyelini geniş kitlelere taşımak için her platform için özelleştirilmiş kampanyalar tasarlıyor, içerik stratejisini bütünleşik bir yapıda kuruyoruz. Devlet ölçeğindeki bir kurumun iletişim ihtiyaçlarını modern medya anlayışıyla karşılıyoruz.",
    brandIntro: "Türkiye'nin tarihi ve kültürel zenginliklerini dünyaya taşıma misyonuyla çalışan Kültür ve Turizm Bakanlığı, ülkenin en güçlü kurumsal iletişim platformlarından birini yönetiyor. Farklı başkanlıklar bünyesinde yürütülen projeler, ulusal kültürü ve turizm potansiyelini küresel ölçekte görünür kılıyor.",
    featuredServices: [
      "Çok Kanallı Reklam Yönetimi",
      "Dijital İletişim Stratejisi",
      "Kamu İletişimi & Kampanya Yönetimi",
    ],
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    stats: [
      { value: "Devlet", label: "Ölçeğinde İletişim" },
      { value: "Çok Kanallı", label: "Reklam Yönetimi" },
      { value: "Global", label: "Kültür & Turizm" },
    ],
    challenge: {
      head: "Devlet ölçeğinde ",
      headEm: "modern iletişim.",
      paragraphs: [
        "Kamu kurumlarında iletişim, hem kurumsal hesap verebilirlik hem de geniş kitlelere ulaşma sorumluluğu taşır. Modern medya araçları, devlet ölçeğinde disiplinli bir yaklaşımla buluşmalıdır.",
      ],
    },
    solution: {
      head: "Bütünleşik ",
      headEm: "kamu iletişimi.",
      paragraphs: [
        "Farklı başkanlıkların iletişim ihtiyaçlarını tek bir bütüncül stratejide topladık. Modern medya anlayışıyla devlet ölçeğindeki sorumluluğu örtüştürdük.",
      ],
      items: [
        "Çok Kanallı Reklam Yönetimi",
        "Dijital İletişim Stratejisi",
        "Kamu İletişimi & Kampanya Yönetimi",
      ],
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
    lead: "Allium Bodrum için dijital reklam yönetim süreçlerini üstlenerek markanın doğru platformda, doğru kitleyle buluşmasını sağlıyoruz. Butik otelcilik sektörünün gerektirdiği estetik dil ve hassas hedefleme yaklaşımıyla her kampanyayı marka kimliğiyle uyumlu biçimde tasarlıyoruz.",
    brandIntro: "Bodrum'un seçkin otelleri arasında yer alan Allium, misafirlerine yerel kültürün sıcaklığını uluslararası konfor standartlarıyla harmanlayan özgün bir konaklama deneyimi sunuyor. Butik kimliği ve titiz hizmet anlayışıyla lüks turizm sektörünün beğenilen isimlerinden biri.",
    featuredServices: [
      "Dijital Reklam Yönetimi",
      "Hedef Kitle Stratejisi",
    ],
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
    stats: [
      { value: "Butik", label: "Otelcilik Segmenti" },
      { value: "Lüks", label: "Hedef Kitle" },
      { value: "Estetik", label: "Marka Uyumu" },
    ],
    challenge: {
      head: "Lüks segmentte ",
      headEm: "hassas hedefleme zorluğu.",
      paragraphs: [
        "Butik otelcilikte reklam yatırımı geniş kitleli kampanyalardan farklı bir disiplin gerektirir. Yüksek değerli misafir profili, estetik dil ve marka kimliği — bu üçlü her temas noktasında birlikte korunmalıdır.",
      ],
    },
    solution: {
      head: "Marka kimliğiyle uyumlu ",
      headEm: "kampanya tasarımı.",
      paragraphs: [
        "Reklam yönetimini sadece performans değil, marka tutarlılığı bakış açısıyla ele alıyoruz. Her kampanya, markanın özüne uygun estetik dilde tasarlanır.",
      ],
      items: [
        "Dijital Reklam Yönetimi",
        "Hedef Kitle Stratejisi",
      ],
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
    lead: "Dünyanın en tanınan kadın dergilerinden Marie Claire'in Türkiye edisyonu için SEO odaklı bir dijital büyüme stratejisi yürütüyoruz. İçerik optimizasyonu, anahtar kelime stratejisi ve teknik SEO süreçlerini bütünleşik bir yaklaşımla yöneterek organik trafiği kalıcı biçimde büyütüyoruz. Güçlü bir editoryal mirasın dijital dünyadaki görünürlüğünü veriye dayalı yöntemlerle destekliyoruz. Bunula birlikte tüm reklam kanallarında yüksek görünürlük ve takipçi kazanımı reklam süreçlerinde yurt içinde +10 milyon kadına erişim sağladık.",
    brandIntro: "Dünyanın en tanınan kadın dergilerinden Marie Claire'in Türkiye edisyonu, köklü editoryal kimliği ve güçlü dijital platformlarıyla milyonlarca okuyucuya ulaşıyor. Moda, güzellik ve yaşam tarzı dünyasında belirleyici bir referans kaynağı olmayı sürdürüyor.",
    featuredServices: [
      "SEO & Organik Büyüme",
      "İçerik Optimizasyonu",
      "Anahtar Kelime Stratejisi",
      "Teknik SEO",
      "Çok Platformlu Reklam",
    ],
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
    stats: [
      { value: "+10M", label: "Kadına Erişim" },
      { value: "SEO", label: "Odaklı Strateji" },
      { value: "Çok Platform", label: "Reklam Yönetimi" },
    ],
    challenge: {
      head: "Editoryal kimliği ",
      headEm: "dijitalde sürdürülebilir kılmak.",
      paragraphs: [
        "Köklü bir editoryal markanın dijital dünyada görünürlüğünü artırmak, organik trafik ve sosyal erişimin birlikte büyümesine bağlıdır. SEO ile reklam birbirini beslemelidir.",
      ],
    },
    solution: {
      head: "Veriye dayalı ",
      headEm: "bütüncül büyüme.",
      paragraphs: [
        "İçerik optimizasyonu, anahtar kelime stratejisi ve teknik SEO'yu reklam yönetimi ile entegre ettik. Editoryal mirasın dijital dünyadaki etkisini veriyle destekledik.",
      ],
      items: [
        "SEO & Organik Büyüme",
        "İçerik Optimizasyonu",
        "Anahtar Kelime Stratejisi",
        "Teknik SEO",
        "Çok Platformlu Reklam",
      ],
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
    lead: "İş dünyasının nabzını tutan Fortune Türkiye için LinkedIn ve X (eski adıyla Twitter) platformlarında hedefli reklam kampanyaları yönetiyoruz. C-suite yöneticilerden genç profesyonellere uzanan okuyucu kitlesine doğru mecralarda, doğru mesajla ulaşmayı sağlıyoruz. İş dünyası iletişiminin gerektirdiği ciddi ve etkili dili marka kimliğiyle uyumlu biçimde kuruyoruz.",
    brandIntro: "İş dünyasının nabzını takip eden Fortune Türkiye, C-suite yöneticilerden genç profesyonellere uzanan geniş bir okuyucu kitlesine yönelik içerik üreten Türkiye'nin önde gelen iş ve ekonomi yayınlarından biridir.",
    featuredServices: [
      "LinkedIn Reklam Yönetimi",
      "X (Twitter) Reklamları",
      "B2B Hedefleme Stratejisi",
      "Profesyonel Kitle İletişimi",
    ],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
    stats: [
      { value: "C-Suite", label: "Hedef Kitle" },
      { value: "LinkedIn + X", label: "Profesyonel Kanal" },
      { value: "B2B", label: "İletişim Modeli" },
    ],
    challenge: {
      head: "İş dünyası iletişiminde ",
      headEm: "ton ve mecra hassasiyeti.",
      paragraphs: [
        "Karar verici profesyonellere ulaşmak, geniş kitle reklamcılığından farklı bir disiplin gerektirir. Hangi mecrada, hangi tonla, hangi mesajla — her detay marka kimliğiyle örtüşmelidir.",
      ],
    },
    solution: {
      head: "Profesyonel mecrada ",
      headEm: "doğru ton.",
      paragraphs: [
        "Hedef kitleye değil, hedef profile reklam veriyoruz. İş dünyasının dilini marka kimliğiyle harmanlayarak ciddi ve etkili bir iletişim kuruyoruz.",
      ],
      items: [
        "LinkedIn Reklam Yönetimi",
        "X (Twitter) Reklamları",
        "B2B Hedefleme Stratejisi",
        "Profesyonel Kitle İletişimi",
      ],
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
    lead: "Anadolu Motor için mailing kampanyaları, web sitesi optimizasyonları ve metin yazımı alanlarında destek veriyoruz. Her temas noktasında tutarlı, net ve ikna edici bir iletişim dili oluşturarak markanın dijital sesini güçlendiriyoruz.",
    brandIntro: "Türkiye'nin köklü otomotiv distribütörlerinden Anadolu Motor, geniş bayi ağı ve çeşitli marka portföyüyle sektörde güvenilir ve tanınan bir isim olmayı sürdürüyor.",
    featuredServices: [
      "Mailing Kampanyaları",
      "Web Sitesi Optimizasyonu",
      "Metin Yazımı (Copywriting)",
    ],
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
    stats: [
      { value: "Mailing", label: "Kampanya Yönetimi" },
      { value: "Web", label: "Optimizasyon" },
      { value: "Copywriting", label: "Marka Sesi" },
    ],
    challenge: {
      head: "Köklü markada ",
      headEm: "dijital iletişim dili.",
      paragraphs: [
        "Köklü bir otomotiv markasının dijital iletişiminde tutarlılık, sadelik ve ikna gücü kritiktir. Mailing, web ve metin — her temas noktası aynı dilden konuşmalıdır.",
      ],
    },
    solution: {
      head: "Bütüncül ",
      headEm: "iletişim dili.",
      paragraphs: [
        "Her temas noktasını aynı dil disipliniyle yönetiyoruz. Mailing, web ve metin birbiriyle tutarlı, net ve ikna edici tek bir iletişim akışı oluşturuyor.",
      ],
      items: [
        "Mailing Kampanyaları",
        "Web Sitesi Optimizasyonu",
        "Metin Yazımı (Copywriting)",
      ],
    },
  },

  {
    slug: "instyle",
    num: "Referans 11",
    brand: "INSTYLE TÜRKİYE",
    sector: "Medya / Yayıncılık",
    title: "Global estetik, ",
    titleEm: "yerel ses.",
    lead: "Moda ve yaşam tarzı dünyasının önde gelen isimlerinden InStyle Türkiye için reklam yönetimi ve içerik stratejisini üstleniyoruz. Markanın dinamik ve ilham veren sesini dijital platformlarda canlı tutarken, her kampanyayı InStyle'ın küresel estetiğiyle yerel kitleye hitap edecek biçimde tasarlıyoruz.",
    brandIntro: "Moda ve yaşam tarzı dünyasında uluslararası bir referans olan InStyle, Türkiye'nin en etkin stil ve trend platformlarından biri olarak öne çıkıyor. Global vizyonunu yerel bir dokunuşla harmanlayan marka, dijitalde güçlü ve ilham veren bir ses olmayı sürdürüyor.",
    featuredServices: [
      "Dijital Reklam Yönetimi",
      "İçerik Stratejisi",
      "Platform Yönetimi",
      "Marka Sesi & Editoryal Uyum",
    ],
    image: "/case-studies/instyle.jpg",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #4d4d4d 100%)",
    stats: [
      { value: "Global", label: "Estetik" },
      { value: "Yerel", label: "Editoryal Uyum" },
      { value: "Dijital", label: "Marka Sesi" },
    ],
    challenge: {
      head: "Global markayı ",
      headEm: "yerel dilde anlatmak.",
      paragraphs: [
        "Uluslararası bir markanın yerel edisyonunda, küresel estetik ile yerel kitlenin tonu arasında doğru dengenin kurulması gerekir. Marka sesi her platformda tutarlı kalmalıdır.",
      ],
    },
    solution: {
      head: "Editoryal uyumlu ",
      headEm: "platform yönetimi.",
      paragraphs: [
        "Her kampanyayı küresel estetikten ödün vermeden yerel dilde tasarlıyoruz. Marka sesini dijital platformlarda canlı ve tutarlı tutuyoruz.",
      ],
      items: [
        "Dijital Reklam Yönetimi",
        "İçerik Stratejisi",
        "Platform Yönetimi",
        "Marka Sesi & Editoryal Uyum",
      ],
    },
  },

  {
    slug: "inspera",
    num: "Referans 12",
    brand: "INSPERA BODRUM",
    sector: "Kültür & Sanat",
    title: "Çok katmanlı kültür mekanı için ",
    titleEm: "tutarlı marka sesi.",
    lead: "Bodrum'un kültür ve sanat hayatının merkezine kurulan Inspera için dijital reklam yönetimini üstleniyoruz. Livaneli Sahnesi'nden Art Academy'ye, Voyn Kitchen & Bar'dan Design Store'a uzanan bu çok katmanlı deneyim mekanının doğru kitleyle buluşması için hedefli kampanyalar tasarlıyor, her platformda markanın özgün sesini taşıyoruz.",
    brandIntro: "Inspera Bodrum Kültür Sanat; sahneleri, sanat akademisi, gastronomisi ve tasarım mağazasıyla kültürü, sanatı ve yaşamı tek bir çatı altında buluşturuyor. Bodrum'un kültür hayatına renk katan bu özgün mekan, Zülfü Livaneli'nin adını taşıyan sahnesiyle ulusal ölçekte de dikkat çeken isimlerden biri.",
    featuredServices: [
      "Dijital Reklam Yönetimi",
      "Hedef Kitle Stratejisi",
      "Etkinlik & Kültür İletişimi",
    ],
    image: "/case-studies/inspera.jpg",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #4299e1 100%)",
    stats: [
      { value: "4 Mekan", label: "Sahne · Akademi · Bar · Mağaza" },
      { value: "Ulusal", label: "Livaneli Sahnesi" },
      { value: "Çok Katmanlı", label: "Kültür Deneyimi" },
    ],
    challenge: {
      head: "Çok katmanlı mekânı ",
      headEm: "tek bir sesle anlatmak.",
      paragraphs: [
        "Bir sahne, bir akademi, bir restoran ve bir mağaza — hepsi birden. Her birim farklı bir hedef kitleye hitap eder ama markanın bütünlüğü her temas noktasında korunmalıdır.",
      ],
    },
    solution: {
      head: "Hedefli kampanyalar, ",
      headEm: "tutarlı marka sesi.",
      paragraphs: [
        "Her birim için ayrı kitle stratejisi kurarken markanın özgün sesini her kampanyada koruyoruz. Etkinlik takviminin temposuna uygun esnek planlama yapıyoruz.",
      ],
      items: [
        "Dijital Reklam Yönetimi",
        "Hedef Kitle Stratejisi",
        "Etkinlik & Kültür İletişimi",
      ],
    },
  },
];
