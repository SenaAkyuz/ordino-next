import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Ordino web sitesinde kullanılan çerezler hakkında detaylı bilgi.",
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <PageHero
        label="Yasal"
        title="Çerez"
        emphasis="Politikası."
        sub="Web sitemizde kullanılan çerez türleri, amaçları ve nasıl kontrol edebileceğiniz hakkında bilgi."
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          <p>
            <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
          </p>

          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler (cookies), bir web sitesini ziyaret ettiğinizde
            tarayıcınız tarafından bilgisayarınıza veya mobil cihazınıza
            kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin sizi
            tanımasına, tercihlerinizi hatırlamasına ve size daha iyi bir
            deneyim sunmasına olanak tanır.
          </p>

          <h2>2. Kullandığımız Çerez Türleri</h2>

          <h3>2.1 Zorunlu Çerezler</h3>
          <p>
            Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu
            çerezler kapatılamaz ve genellikle yalnızca tarafınızca yapılan ve
            hizmet talebine karşılık gelen eylemlere yanıt olarak ayarlanır.
          </p>

          <h3>2.2 Analitik Çerezler</h3>
          <p>
            Ziyaretçilerin web sitesini nasıl kullandığını anlamamızı sağlar.
            Hangi sayfaların en popüler olduğunu, ziyaretçilerin sitede ne
            kadar kaldığını ve nereden geldiklerini ölçmemize yardımcı olur.
            Örnek: Google Analytics.
          </p>

          <h3>2.3 Pazarlama Çerezleri</h3>
          <p>
            Reklam ortaklarımız tarafından yerleştirilebilir. Bu çerezler ilgi
            alanlarınızın profilini oluşturmak ve ilgili reklamları diğer
            sitelerde göstermek için kullanılır. Örnek: Meta Pixel, Google Ads.
          </p>

          <h3>2.4 İşlevsellik Çerezleri</h3>
          <p>
            Tercihlerinizi (örn. dil seçimi) hatırlamamızı ve size daha
            kişiselleştirilmiş bir deneyim sunmamızı sağlar.
          </p>

          <h2>3. Üçüncü Taraf Çerezleri</h2>
          <p>Web sitemiz aşağıdaki üçüncü taraflardan çerezler kullanabilir:</p>
          <ul>
            <li>
              <strong>Google:</strong> Analytics, Tag Manager, Ads
            </li>
            <li>
              <strong>Meta:</strong> Facebook, Instagram pixel
            </li>
            <li>
              <strong>LinkedIn:</strong> Insight tag
            </li>
          </ul>

          <h2>4. Çerez Tercihlerinizi Yönetme</h2>
          <p>Çerez tercihlerinizi şu yöntemlerle yönetebilirsiniz:</p>
          <ul>
            <li>Web sitemizdeki çerez onay banner&apos;ı üzerinden</li>
            <li>Tarayıcı ayarlarınızdan çerezleri silerek veya engelleyerek</li>
            <li>
              Üçüncü taraf çerezleri için ilgili platformların ayar
              sayfalarından
            </li>
          </ul>
          <p>Tarayıcı ayarları için yardım linkleri:</p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/tr/kb/cerezler-bilgi-iceren-web-siteleri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/tr-tr/microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2>5. Çerezleri Devre Dışı Bırakmanın Sonuçları</h2>
          <p>
            Çerezleri devre dışı bırakırsanız web sitesinin bazı bölümlerinin
            düzgün çalışmayabileceğini lütfen unutmayın. Özellikle zorunlu
            çerezler kapatıldığında temel site işlevleri etkilenebilir.
          </p>

          <h2>6. Politika Güncellemeleri</h2>
          <p>
            Bu çerez politikası zaman zaman güncellenebilir. Önemli değişiklikler
            hakkında sizi bilgilendirmek için web sitesinde duyuru yapılır.
          </p>

          <h2>7. İletişim</h2>
          <p>
            Çerez politikamız hakkında sorularınız için:{" "}
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
