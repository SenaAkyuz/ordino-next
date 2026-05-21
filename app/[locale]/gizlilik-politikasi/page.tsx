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
        title: "Privacy Policy",
        description:
          "Ordino privacy policy. Information about how your personal data is collected, used, and protected.",
      }
    : {
        title: "Gizlilik Politikası",
        description:
          "Ordino gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
      };
}

export default async function GizlilikPolitikasiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "Legal" : "Yasal"}
        title={isEn ? "Privacy" : "Gizlilik"}
        emphasis={isEn ? "Policy." : "Politikası."}
        sub={
          isEn
            ? "Detailed information about how your personal data is collected, used, and protected."
            : "Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          {isEn ? <PrivacyEn /> : <PrivacyTr />}
        </div>
      </section>
    </>
  );
}

function PrivacyTr() {
  return (
    <>
      <p>
        <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
      </p>

      <h2>1. Giriş</h2>
      <p>
        Ordino olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin
        korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, theordino.com
        web sitesini ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda
        kişisel verilerinizin nasıl toplandığı, kullanıldığı, paylaşıldığı ve
        korunduğu hakkında bilgi sağlar.
      </p>

      <h2>2. Toplanan Veriler</h2>
      <h3>2.1 Doğrudan Sağladığınız Veriler</h3>
      <p>
        İletişim formu, e-posta veya telefon yoluyla bizimle iletişime
        geçtiğinizde aşağıdaki bilgileri toplayabiliriz:
      </p>
      <ul>
        <li>Ad, soyad</li>
        <li>E-posta adresi</li>
        <li>Telefon numarası</li>
        <li>Şirket adı</li>
        <li>Mesaj içeriği</li>
      </ul>

      <h3>2.2 Otomatik Toplanan Veriler</h3>
      <p>
        Web sitemizi kullanırken otomatik olarak aşağıdaki teknik bilgileri
        toplayabiliriz:
      </p>
      <ul>
        <li>IP adresi</li>
        <li>Tarayıcı türü ve sürümü</li>
        <li>İşletim sistemi</li>
        <li>Ziyaret edilen sayfalar ve süre</li>
        <li>Yönlendiren site</li>
      </ul>

      <h2>3. Verilerin Kullanım Amacı</h2>
      <p>Topladığımız kişisel verileri aşağıdaki amaçlarla kullanırız:</p>
      <ul>
        <li>Hizmet taleplerinize yanıt vermek</li>
        <li>Sözleşme yükümlülüklerimizi yerine getirmek</li>
        <li>Pazarlama ve iletişim faaliyetleri yürütmek (onayınızla)</li>
        <li>Web sitesi performansını analiz etmek ve iyileştirmek</li>
        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
      </ul>

      <h2>4. Verilerin Paylaşımı</h2>
      <p>
        Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla
        paylaşmayız:
      </p>
      <ul>
        <li>Açık rızanız bulunduğunda</li>
        <li>Yasal bir zorunluluk olduğunda</li>
        <li>
          Hizmet sağlayıcılarımızla (analitik, e-posta hizmetleri vb.) sınırlı
          olarak
        </li>
        <li>İş ortaklarımızla (Google, Meta gibi reklam platformları)</li>
      </ul>

      <h2>5. Çerezler</h2>
      <p>
        Web sitemiz çerezleri kullanmaktadır. Çerez kullanımı hakkında detaylı
        bilgi için lütfen{" "}
        <a href="/cerez-politikasi" className="text-accent hover:underline">
          Çerez Politikamızı
        </a>{" "}
        inceleyiniz.
      </p>

      <h2>6. Verilerin Saklanması</h2>
      <p>
        Kişisel verilerinizi yalnızca toplanma amacının gerektirdiği süre
        boyunca saklarız. Yasal saklama yükümlülükleri haricinde, talep etmeniz
        halinde verilerinizi sileriz.
      </p>

      <h2>7. Haklarınız</h2>
      <p>KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenen verileriniz hakkında bilgi talep etme</li>
        <li>
          Verilerin düzeltilmesini, silinmesini veya yok edilmesini isteme
        </li>
        <li>İşlemenin durdurulmasını talep etme</li>
        <li>Veri taşınabilirliği hakkı</li>
        <li>İtiraz hakkı</li>
      </ul>
      <p>
        Haklarınızı kullanmak için{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>{" "}
        adresine yazılı başvuruda bulunabilirsiniz.
      </p>

      <h2>8. Veri Güvenliği</h2>
      <p>
        Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı
        teknik ve idari önlemler uygulanmaktadır. Ancak internet üzerinden veri
        iletiminin %100 güvenli olmadığını belirtmek isteriz.
      </p>

      <h2>9. Politika Güncellemeleri</h2>
      <p>
        Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada
        yayınlanır ve yürürlüğe girdiği tarihten itibaren geçerli olur.
      </p>

      <h2>10. İletişim</h2>
      <p>
        Gizlilik politikamız hakkında sorularınız için:{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        <strong>Last Updated:</strong> April 25, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        At Ordino, we respect your privacy and take the protection of your
        personal data seriously. This Privacy Policy explains how your personal
        data is collected, used, shared, and protected when you visit
        theordino.com or use our services.
      </p>

      <h2>2. Data We Collect</h2>
      <h3>2.1 Data You Provide Directly</h3>
      <p>
        When you contact us via the contact form, email, or phone, we may
        collect the following information:
      </p>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>Message content</li>
      </ul>

      <h3>2.2 Automatically Collected Data</h3>
      <p>
        While you use our website, we may automatically collect the following
        technical information:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited and duration</li>
        <li>Referring site</li>
      </ul>

      <h2>3. How We Use the Data</h2>
      <p>We use the personal data we collect for the following purposes:</p>
      <ul>
        <li>To respond to your service requests</li>
        <li>To fulfill our contractual obligations</li>
        <li>To carry out marketing and communication activities (with your consent)</li>
        <li>To analyze and improve website performance</li>
        <li>To meet our legal obligations</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not share your personal data with third parties except in the
        following cases:
      </p>
      <ul>
        <li>With your explicit consent</li>
        <li>Where required by law</li>
        <li>
          On a limited basis with our service providers (analytics, email
          services, etc.)
        </li>
        <li>
          With our business partners (advertising platforms such as Google,
          Meta)
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        Our website uses cookies. For detailed information about our cookie
        usage, please review our{" "}
        <a href="/en/cookie-policy" className="text-accent hover:underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary for the
        purpose for which it was collected. Excluding legal retention
        obligations, we will delete your data upon your request.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the following rights under GDPR and KVKK:</p>
      <ul>
        <li>To learn whether your personal data is being processed</li>
        <li>To request information about your processed data</li>
        <li>
          To request correction, deletion, or destruction of your data
        </li>
        <li>To request the cessation of processing</li>
        <li>The right to data portability</li>
        <li>The right to object</li>
      </ul>
      <p>
        To exercise your rights, you can submit a written request to{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>
        .
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement industry-standard technical and administrative measures to
        ensure the security of your personal data. However, we note that no
        method of internet transmission is 100% secure.
      </p>

      <h2>9. Policy Updates</h2>
      <p>
        This policy may be updated from time to time. Updates are published on
        this page and take effect from the date they are made public.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about our privacy policy:{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>
      </p>
    </>
  );
}
