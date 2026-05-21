import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? {
        title: "KVKK Privacy Notice",
        description:
          "Privacy notice under Turkish Personal Data Protection Law No. 6698 (KVKK).",
      }
    : {
        title: "KVKK Aydınlatma Metni",
        description:
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
      };
}

export default async function KvkkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "Legal" : "Yasal"}
        title="KVKK"
        emphasis={isEn ? "Privacy Notice." : "Aydınlatma Metni."}
        sub={
          isEn
            ? "Privacy notice prepared to inform data subjects under Turkish Personal Data Protection Law No. 6698 (KVKK)."
            : "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sahiplerinin bilgilendirilmesine yönelik metin."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          {isEn ? <KvkkEn /> : <KvkkTr />}
        </div>
      </section>
    </>
  );
}

function KvkkTr() {
  return (
    <>
      <p>
        <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;)
        uyarınca veri sorumlusu sıfatıyla, Ordino (&ldquo;Şirket&rdquo;) olarak
        aşağıda belirtilen detaylar kapsamında veri işleme faaliyetlerimizi
        yürütmekteyiz.
      </p>

      <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
      <p>
        Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen
        kişisel veri işleme şartları ve amaçları çerçevesinde aşağıdaki
        amaçlarla işlenmektedir:
      </p>
      <ul>
        <li>Müşteri ilişkileri ve hizmet süreçlerinin yürütülmesi</li>
        <li>İletişim faaliyetlerinin gerçekleştirilmesi</li>
        <li>Sözleşme süreçlerinin yönetilmesi</li>
        <li>Pazarlama analiz çalışmalarının yapılması (rıza dahilinde)</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
      </ul>

      <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
      <ul>
        <li>
          <strong>Kimlik bilgileri:</strong> Ad, soyad
        </li>
        <li>
          <strong>İletişim bilgileri:</strong> E-posta adresi, telefon numarası
        </li>
        <li>
          <strong>Müşteri işlem bilgileri:</strong> Sipariş, talep ve şikayet
          detayları
        </li>
        <li>
          <strong>İşlem güvenliği bilgileri:</strong> IP adresi, log kayıtları
        </li>
      </ul>

      <h2>4. Kişisel Verilerin Aktarılması</h2>
      <p>
        Kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddelerinde belirlenen
        şartlar çerçevesinde aşağıdaki taraflara aktarılabilir:
      </p>
      <ul>
        <li>Yetkili kamu kurum ve kuruluşları</li>
        <li>
          Hizmet aldığımız tedarikçi ve iş ortakları (analitik, hosting,
          e-posta hizmetleri)
        </li>
        <li>
          Reklam platformları (Google, Meta, TikTok) — rıza dahilinde
        </li>
      </ul>

      <h2>5. Kişisel Verilerin Toplanma Yöntemi</h2>
      <p>
        Kişisel verileriniz; web sitemiz üzerinden iletişim formu, e-posta,
        telefon, sosyal medya hesapları ve fiziksel ortamda toplanan formlar
        aracılığıyla otomatik veya kısmen otomatik yöntemlerle toplanmaktadır.
      </p>

      <h2>6. Hukuki Sebepler</h2>
      <p>
        Kişisel verileriniz aşağıdaki hukuki sebeplere dayanılarak
        işlenmektedir:
      </p>
      <ul>
        <li>KVKK m.5/2 kapsamında açık rızanın varlığı</li>
        <li>Sözleşmenin kurulması veya ifası için zorunluluk</li>
        <li>Hukuki yükümlülüğün yerine getirilmesi</li>
        <li>Meşru menfaat</li>
      </ul>

      <h2>7. Veri Sahibinin Hakları</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>
          İşlenme amacı ve amaca uygun kullanılıp kullanılmadığını öğrenme
        </li>
        <li>Yurt içi/yurt dışında aktarıldığı tarafları bilme</li>
        <li>Eksik/yanlış işlenmesi halinde düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>
          Düzeltme/silme işlemlerinin aktarıldığı taraflara bildirilmesini
          isteme
        </li>
        <li>
          Otomatik sistemler ile analiz neticesinde aleyhe çıkan bir sonuca
          itiraz etme
        </li>
        <li>
          Kanuna aykırı işleme nedeniyle zarara uğranılması halinde tazminat
          talep etme
        </li>
      </ul>

      <h2>8. Başvuru Yöntemi</h2>
      <p>
        Yukarıda belirtilen haklarınızı kullanmak için başvurunuzu aşağıdaki
        yollardan biri ile iletebilirsiniz:
      </p>
      <ul>
        <li>
          E-posta ile:{" "}
          <a
            href="mailto:theordino.com"
            className="text-accent hover:underline"
          >
            theordino.com
          </a>
        </li>
        <li>Yazılı olarak: Ferko Signature Plaza, Şişli, İstanbul</li>
      </ul>
      <p>
        Başvurunuz, KVKK m.13 uyarınca en geç 30 gün içinde sonuçlandırılır.
      </p>
    </>
  );
}

function KvkkEn() {
  return (
    <>
      <p>
        <strong>Last Updated:</strong> April 25, 2026
      </p>

      <h2>1. Data Controller</h2>
      <p>
        Under Turkish Personal Data Protection Law No. 6698 (&ldquo;KVKK&rdquo;),
        Ordino (the &ldquo;Company&rdquo;) acts as the data controller and
        conducts data processing activities within the scope detailed below.
      </p>

      <h2>2. Purposes of Processing Personal Data</h2>
      <p>
        Your personal data is processed for the following purposes, within the
        scope of the data processing conditions set out in Articles 5 and 6 of
        the KVKK:
      </p>
      <ul>
        <li>Managing customer relationships and service processes</li>
        <li>Conducting communication activities</li>
        <li>Managing contractual processes</li>
        <li>Carrying out marketing analytics (where consent is provided)</li>
        <li>Fulfilling legal obligations</li>
        <li>Managing information security processes</li>
      </ul>

      <h2>3. Categories of Personal Data Processed</h2>
      <ul>
        <li>
          <strong>Identity information:</strong> First and last name
        </li>
        <li>
          <strong>Contact information:</strong> Email address, phone number
        </li>
        <li>
          <strong>Customer transaction information:</strong> Order, request,
          and complaint details
        </li>
        <li>
          <strong>Transaction security information:</strong> IP address, log
          records
        </li>
      </ul>

      <h2>4. Transfer of Personal Data</h2>
      <p>
        Your personal data may be transferred to the following parties within
        the scope of Articles 8 and 9 of the KVKK:
      </p>
      <ul>
        <li>Competent public institutions and organizations</li>
        <li>
          Our service providers and business partners (analytics, hosting,
          email services)
        </li>
        <li>
          Advertising platforms (Google, Meta, TikTok) — subject to consent
        </li>
      </ul>

      <h2>5. Methods of Collecting Personal Data</h2>
      <p>
        Your personal data is collected through automated or partially
        automated means via the contact form on our website, email, phone,
        social media accounts, and forms collected in physical settings.
      </p>

      <h2>6. Legal Grounds</h2>
      <p>Your personal data is processed on the following legal grounds:</p>
      <ul>
        <li>Existence of explicit consent under KVKK Art. 5/2</li>
        <li>Necessity for the establishment or performance of a contract</li>
        <li>Fulfillment of a legal obligation</li>
        <li>Legitimate interest</li>
      </ul>

      <h2>7. Rights of the Data Subject</h2>
      <p>Under Article 11 of the KVKK, you have the following rights:</p>
      <ul>
        <li>To learn whether your personal data is being processed</li>
        <li>To request information about the processing</li>
        <li>
          To learn the purpose of processing and whether the data is used for
          its intended purpose
        </li>
        <li>
          To know the third parties (domestic or abroad) to whom the data is
          transferred
        </li>
        <li>
          To request correction in cases of incomplete or incorrect processing
        </li>
        <li>To request deletion or destruction</li>
        <li>
          To request notification of the correction/deletion operations to
          third parties to whom the data was transferred
        </li>
        <li>
          To object to an adverse outcome resulting from automated analysis
        </li>
        <li>
          To claim compensation for damages arising from unlawful processing
        </li>
      </ul>

      <h2>8. Application Method</h2>
      <p>
        To exercise the rights above, you may submit your application via one
        of the following methods:
      </p>
      <ul>
        <li>
          By email:{" "}
          <a
            href="mailto:theordino.com"
            className="text-accent hover:underline"
          >
            theordino.com
          </a>
        </li>
        <li>
          In writing: Ferko Signature Plaza, Şişli, Istanbul
        </li>
      </ul>
      <p>
        Your application will be finalized within 30 days at the latest, in
        accordance with KVKK Art. 13.
      </p>
    </>
  );
}
