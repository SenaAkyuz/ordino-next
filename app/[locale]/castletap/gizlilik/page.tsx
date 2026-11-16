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
        title: "Castle Tap — Privacy Policy",
        description:
          "Castle Tap privacy policy. Information about what data the Castle Tap mobile game processes for ads and in-app purchases.",
      }
    : {
        title: "Castle Tap — Gizlilik Politikası",
        description:
          "Castle Tap gizlilik politikası. Castle Tap mobil oyununda reklamlar ve uygulama içi satın almalar için hangi verilerin işlendiği hakkında bilgi.",
      };
}

export default async function CastleTapPrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "Castle Tap · Legal" : "Castle Tap · Yasal"}
        title={isEn ? "Privacy" : "Gizlilik"}
        emphasis={isEn ? "Policy." : "Politikası."}
        sub={
          isEn
            ? "What data is processed in the Castle Tap mobile game and why."
            : "Castle Tap mobil oyununda hangi verilerin, hangi amaçla işlendiği hakkında bilgi."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_p]:mb-5 [&_a]:text-accent [&_a:hover]:underline">
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
        <strong>Son güncelleme:</strong> 16 Kasım 2026
      </p>
      <p>
        Bu politika, Ordino Pazarlama Medya Yazılım ve Ticaret Limited Şirketi
        ("Ordino", "biz") tarafından yayımlanan <strong>Castle Tap</strong>{" "}
        mobil oyununda hangi verilerin işlendiğini açıklar. Veri sorumlusu:
        Ordino Pazarlama Medya Yazılım ve Ticaret Limited Şirketi, Ferko
        Signature Plaza, A Blok, Büyükdere Caddesi No:175, Esentepe, 34394 Şişli
        / İstanbul, Türkiye. Telefon: 0212 996 71 47. E-posta:{" "}
        <a href="mailto:info@theordino.com">info@theordino.com</a>. Web:{" "}
        <a href="https://www.theordino.com/">theordino.com</a>
      </p>

      <h2>1. Hesap ve kişisel bilgi</h2>
      <p>
        Oyun hesap açtırmaz; adınızı, e-posta adresinizi veya telefon
        numaranızı istemez. Oyun ilerlemeniz, altınınız ve ayarlarınız yalnızca
        cihazınızda saklanır; bize gönderilmez. Uygulamayı silerseniz bu veriler
        de silinir.
      </p>

      <h2>2. Reklamlar (Google AdMob)</h2>
      <p>
        Oyun, Google AdMob ile reklam gösterir. AdMob reklam sunmak, ölçmek ve
        dolandırıcılığı önlemek için cihazınızın reklam kimliğini, IP adresini,
        cihaz ve uygulama bilgilerini ve reklam etkileşimlerini işleyebilir.
        Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de kişiselleştirilmiş
        reklamlar yalnızca onayınızla gösterilir; tercihinizi oyunda{" "}
        <strong>Ayarlar → Reklam tercihleri</strong> bölümünden
        değiştirebilirsiniz. Cihazınızın ayarlarından reklam kimliğini
        sıfırlayabilir veya silebilirsiniz. Ayrıntılar:{" "}
        <a href="https://policies.google.com/technologies/partner-sites">
          Google'ın iş ortağı sitelerindeki veri kullanımı
        </a>
        .
      </p>

      <h2>3. Uygulama içi satın almalar (Google Play, RevenueCat)</h2>
      <p>
        Ödemeler Google Play tarafından alınır; kart bilgilerinizi görmeyiz.
        Satın almaları doğrulamak ve "Reklamları Kaldır" hakkını geri
        yükleyebilmek için RevenueCat hizmeti, cihaza özel rastgele bir kullanıcı
        kimliğini ve satın alma kayıtlarını (ürün, tarih, işlem numarası)
        işler. Ayrıntılar:{" "}
        <a href="https://www.revenuecat.com/privacy">
          RevenueCat gizlilik politikası
        </a>
        .
      </p>

      <h2>4. Yurt dışına aktarım</h2>
      <p>
        Google ve RevenueCat verileri Türkiye dışındaki sunucularda işleyebilir.
        Bu aktarım, hizmetin sunulması ve onayınız/ilgili mevzuattaki dayanaklar
        çerçevesinde gerçekleşir.
      </p>

      <h2>5. Çocuklar</h2>
      <p>
        Oyun 13 yaş altı çocuklara yönelik değildir ve bilerek 13 yaş altı
        çocuklardan kişisel veri toplamayız.
      </p>

      <h2>6. Haklarınız (KVKK ve GDPR)</h2>
      <p>
        Verilerinize erişme, düzeltme, silme, işlemeye itiraz etme ve onayınızı
        geri çekme haklarınız vardır. Talepleriniz için{" "}
        <a href="mailto:info@theordino.com">info@theordino.com</a> adresine
        yazabilirsiniz.
      </p>

      <h2>7. Değişiklikler</h2>
      <p>
        Bu politikayı güncelleyebiliriz; güncel sürüm bu sayfada yayımlanır.
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        <strong>Last updated:</strong> November 16, 2026
      </p>
      <p>
        This policy explains what data is processed in{" "}
        <strong>Castle Tap</strong>, a mobile game published by Ordino Pazarlama
        Medya Yazılım ve Ticaret Limited Şirketi ("Ordino", "we"). Data
        controller: Ordino Pazarlama Medya Yazılım ve Ticaret Limited Şirketi,
        Ferko Signature Plaza, A Blok, Büyükdere Caddesi No:175, Esentepe, 34394
        Şişli / Istanbul, Türkiye. Phone: +90 212 996 71 47. E-mail:{" "}
        <a href="mailto:info@theordino.com">info@theordino.com</a>. Web:{" "}
        <a href="https://www.theordino.com/">theordino.com</a>
      </p>

      <h2>1. Accounts and personal information</h2>
      <p>
        The game has no accounts and does not ask for your name, e-mail or phone
        number. Your progress, coins and settings are stored only on your device
        and are not sent to us. Uninstalling the game deletes them.
      </p>

      <h2>2. Ads (Google AdMob)</h2>
      <p>
        The game shows ads through Google AdMob. To serve and measure ads and
        prevent fraud, AdMob may process your device's advertising ID, IP
        address, device and app information and ad interactions. In the
        European Economic Area, the UK and Switzerland, personalized ads are
        shown only with your consent; you can change your choice in{" "}
        <strong>Settings → Ad preferences</strong>. You can reset or delete your
        advertising ID in your device settings. Details:{" "}
        <a href="https://policies.google.com/technologies/partner-sites">
          How Google uses information from partner sites
        </a>
        .
      </p>

      <h2>3. In-app purchases (Google Play, RevenueCat)</h2>
      <p>
        Payments are handled by Google Play; we never see your card details. To
        verify purchases and restore "Remove Ads", RevenueCat processes a
        random, device-specific user ID and purchase records (product, date,
        transaction number). Details:{" "}
        <a href="https://www.revenuecat.com/privacy">
          RevenueCat privacy policy
        </a>
        .
      </p>

      <h2>4. International transfers</h2>
      <p>
        Google and RevenueCat may process data on servers outside your country
        to provide their services.
      </p>

      <h2>5. Children</h2>
      <p>
        The game is not directed at children under 13 and we do not knowingly
        collect personal data from children under 13.
      </p>

      <h2>6. Your rights</h2>
      <p>
        You may request access to, correction or deletion of your data, object
        to processing and withdraw consent by writing to{" "}
        <a href="mailto:info@theordino.com">info@theordino.com</a>.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update this policy; the current version is always published on
        this page.
      </p>
    </>
  );
}
