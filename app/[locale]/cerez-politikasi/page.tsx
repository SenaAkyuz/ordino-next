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
        title: "Cookie Policy",
        description: "Detailed information about the cookies used on the Ordino website.",
      }
    : {
        title: "Çerez Politikası",
        description: "Ordino web sitesinde kullanılan çerezler hakkında detaylı bilgi.",
      };
}

export default async function CerezPolitikasiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "Legal" : "Yasal"}
        title={isEn ? "Cookie" : "Çerez"}
        emphasis={isEn ? "Policy." : "Politikası."}
        sub={
          isEn
            ? "Information about the types of cookies we use, their purposes, and how you can manage them."
            : "Web sitemizde kullanılan çerez türleri, amaçları ve nasıl kontrol edebileceğiniz hakkında bilgi."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          {isEn ? <CookiesEn /> : <CookiesTr />}
        </div>
      </section>
    </>
  );
}

function CookiesTr() {
  return (
    <>
      <p>
        <strong>Son Güncellenme Tarihi:</strong> 25 Nisan 2026
      </p>

      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız
        tarafından bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin
        dosyalarıdır. Çerezler, web sitesinin sizi tanımasına, tercihlerinizi
        hatırlamasına ve size daha iyi bir deneyim sunmasına olanak tanır.
      </p>

      <h2>2. Kullandığımız Çerez Türleri</h2>

      <h3>2.1 Zorunlu Çerezler</h3>
      <p>
        Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler
        kapatılamaz ve genellikle yalnızca tarafınızca yapılan ve hizmet
        talebine karşılık gelen eylemlere yanıt olarak ayarlanır.
      </p>

      <h3>2.2 Analitik Çerezler</h3>
      <p>
        Ziyaretçilerin web sitesini nasıl kullandığını anlamamızı sağlar. Hangi
        sayfaların en popüler olduğunu, ziyaretçilerin sitede ne kadar
        kaldığını ve nereden geldiklerini ölçmemize yardımcı olur. Örnek:
        Google Analytics.
      </p>

      <h3>2.3 Pazarlama Çerezleri</h3>
      <p>
        Reklam ortaklarımız tarafından yerleştirilebilir. Bu çerezler ilgi
        alanlarınızın profilini oluşturmak ve ilgili reklamları diğer sitelerde
        göstermek için kullanılır. Örnek: Meta Pixel, Google Ads.
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
          Üçüncü taraf çerezleri için ilgili platformların ayar sayfalarından
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
        düzgün çalışmayabileceğini lütfen unutmayın. Özellikle zorunlu çerezler
        kapatıldığında temel site işlevleri etkilenebilir.
      </p>

      <h2>6. Politika Güncellemeleri</h2>
      <p>
        Bu çerez politikası zaman zaman güncellenebilir. Önemli değişiklikler
        hakkında sizi bilgilendirmek için web sitesinde duyuru yapılır.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Çerez politikamız hakkında sorularınız için:{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>
      </p>
    </>
  );
}

function CookiesEn() {
  return (
    <>
      <p>
        <strong>Last Updated:</strong> April 25, 2026
      </p>

      <h2>1. What Is a Cookie?</h2>
      <p>
        Cookies are small text files saved on your computer or mobile device by
        your browser when you visit a website. Cookies allow the website to
        recognize you, remember your preferences, and provide you with a better
        experience.
      </p>

      <h2>2. Types of Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        Required for the core functions of the website to work. These cookies
        cannot be turned off and are typically set only in response to actions
        you take that amount to a request for service.
      </p>

      <h3>2.2 Analytics Cookies</h3>
      <p>
        Help us understand how visitors use the website. They let us measure
        which pages are most popular, how long visitors stay on the site, and
        where they come from. Example: Google Analytics.
      </p>

      <h3>2.3 Marketing Cookies</h3>
      <p>
        May be set by our advertising partners. These cookies are used to build
        a profile of your interests and show you relevant ads on other sites.
        Example: Meta Pixel, Google Ads.
      </p>

      <h3>2.4 Functionality Cookies</h3>
      <p>
        Allow us to remember your preferences (e.g., language selection) and
        provide you with a more personalized experience.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>Our website may use cookies from the following third parties:</p>
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

      <h2>4. Managing Your Cookie Preferences</h2>
      <p>You can manage your cookie preferences using the following methods:</p>
      <ul>
        <li>Through the cookie consent banner on our website</li>
        <li>By deleting or blocking cookies in your browser settings</li>
        <li>
          For third-party cookies, via the settings pages of the relevant
          platforms
        </li>
      </ul>
      <p>Browser settings help links:</p>
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
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-us/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>5. Consequences of Disabling Cookies</h2>
      <p>
        Please note that if you disable cookies, some parts of the website may
        not function correctly. In particular, disabling strictly necessary
        cookies may affect core site functions.
      </p>

      <h2>6. Policy Updates</h2>
      <p>
        This cookie policy may be updated from time to time. Significant
        changes will be announced on the website to keep you informed.
      </p>

      <h2>7. Contact</h2>
      <p>
        For questions about our cookie policy:{" "}
        <a href="mailto:theordino.com" className="text-accent hover:underline">
          theordino.com
        </a>
      </p>
    </>
  );
}
