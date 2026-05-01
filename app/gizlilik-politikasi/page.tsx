import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Ordino gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <PageHero
        label="Yasal"
        title="Gizlilik"
        emphasis="Politikası."
        sub="Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi."
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          <p>
            <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
          </p>

          <h2>1. Giriş</h2>
          <p>
            Ordino olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin
            korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası,
            theordino.com web sitesini ziyaret ettiğinizde veya hizmetlerimizden
            yararlandığınızda kişisel verilerinizin nasıl toplandığı,
            kullanıldığı, paylaşıldığı ve korunduğu hakkında bilgi sağlar.
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
              Hizmet sağlayıcılarımızla (analitik, e-posta hizmetleri vb.)
              sınırlı olarak
            </li>
            <li>İş ortaklarımızla (Google, Meta gibi reklam platformları)</li>
          </ul>

          <h2>5. Çerezler</h2>
          <p>
            Web sitemiz çerezleri kullanmaktadır. Çerez kullanımı hakkında
            detaylı bilgi için lütfen{" "}
            <a
              href="/cerez-politikasi"
              className="text-accent hover:underline"
            >
              Çerez Politikamızı
            </a>{" "}
            inceleyiniz.
          </p>

          <h2>6. Verilerin Saklanması</h2>
          <p>
            Kişisel verilerinizi yalnızca toplanma amacının gerektirdiği süre
            boyunca saklarız. Yasal saklama yükümlülükleri haricinde, talep
            etmeniz halinde verilerinizi sileriz.
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
            <a
              href="mailto:theordino.com"
              className="text-accent hover:underline"
            >
              theordino.com
            </a>{" "}
            adresine yazılı başvuruda bulunabilirsiniz.
          </p>

          <h2>8. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı
            teknik ve idari önlemler uygulanmaktadır. Ancak internet üzerinden
            veri iletiminin %100 güvenli olmadığını belirtmek isteriz.
          </p>

          <h2>9. Politika Güncellemeleri</h2>
          <p>
            Bu politika zaman zaman güncellenebilir. Güncellemeler bu sayfada
            yayınlanır ve yürürlüğe girdiği tarihten itibaren geçerli olur.
          </p>

          <h2>10. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için:{" "}
            <a
              href="mailto:theordino.com"
              className="text-accent hover:underline"
            >
              theordino.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
