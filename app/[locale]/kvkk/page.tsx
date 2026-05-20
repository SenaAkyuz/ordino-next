import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default async function KvkkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHero
        label="Yasal"
        title="KVKK"
        emphasis="Aydınlatma Metni."
        sub="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sahiplerinin bilgilendirilmesine yönelik metin."
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          <p>
            <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
          </p>

          <h2>1. Veri Sorumlusu</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;)
            uyarınca veri sorumlusu sıfatıyla, Ordino (&ldquo;Şirket&rdquo;)
            olarak aşağıda belirtilen detaylar kapsamında veri işleme
            faaliyetlerimizi yürütmekteyiz.
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
              <strong>İletişim bilgileri:</strong> E-posta adresi, telefon
              numarası
            </li>
            <li>
              <strong>Müşteri işlem bilgileri:</strong> Sipariş, talep ve
              şikayet detayları
            </li>
            <li>
              <strong>İşlem güvenliği bilgileri:</strong> IP adresi, log
              kayıtları
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
            aracılığıyla otomatik veya kısmen otomatik yöntemlerle
            toplanmaktadır.
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
          <p>
            KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
          </p>
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
            Başvurunuz, KVKK m.13 uyarınca en geç 30 gün içinde
            sonuçlandırılır.
          </p>
        </div>
      </section>
    </>
  );
}
