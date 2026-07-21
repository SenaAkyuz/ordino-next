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
        title: "FynPad — Privacy Policy",
        description:
          "FynPad privacy policy. Information about what data the FynPad app collects, how it is used, stored, and protected.",
      }
    : {
        title: "FynPad — Gizlilik Politikası",
        description:
          "FynPad gizlilik politikası. FynPad uygulamasının hangi verileri topladığı, bu verilerin nasıl kullanıldığı, saklandığı ve korunduğu hakkında bilgi.",
      };
}

export default async function FynPadPrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "FynPad · Legal" : "FynPad · Yasal"}
        title={isEn ? "Privacy" : "Gizlilik"}
        emphasis={isEn ? "Policy." : "Politikası."}
        sub={
          isEn
            ? "Detailed information about how FynPad collects, uses, stores, and protects your data."
            : "FynPad'in verilerinizi nasıl topladığı, kullandığı, sakladığı ve koruduğu hakkında detaylı bilgi."
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
        <strong>Son güncelleme:</strong> 2 Temmuz 2026
      </p>

      <h2>1. Giriş</h2>
      <p>
        Bu Gizlilik Politikası, Ordino ("biz", "bize", "bizim") tarafından
        geliştirilen FynPad mobil uygulamasının ("Uygulama", "FynPad")
        kullanıcılarından ("siz", "kullanıcı") hangi bilgileri topladığını, bu
        bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.
      </p>
      <p>
        FynPad'i kullanarak bu Gizlilik Politikası'nda açıklanan uygulamaları
        kabul etmiş olursunuz.
      </p>

      <h2>2. Topladığımız Bilgiler</h2>
      <h3>2.1 Hesap Bilgileri</h3>
      <p>
        FynPad'e kaydolduğunuzda veya Google ile giriş yaptığınızda aşağıdaki
        bilgileri toplarız:
      </p>
      <p>
        <strong>E-posta ile kayıt:</strong>
      </p>
      <ul>
        <li>E-posta adresi</li>
        <li>
          Parola (kimlik doğrulama için kullanılan parola, güvenli hash
          yöntemleriyle korunur ve tarafımızca düz metin olarak görüntülenemez)
        </li>
      </ul>
      <p>
        <strong>Google ile giriş:</strong>
      </p>
      <ul>
        <li>Ad ve soyad</li>
        <li>E-posta adresi</li>
        <li>Profil fotoğrafı</li>
        <li>Google kullanıcı kimliği (benzersiz tanımlayıcı)</li>
      </ul>

      <h3>2.2 Finansal Veriler</h3>
      <p>
        FynPad bir kişisel finans takip uygulamasıdır. Uygulamaya kendi
        girdiğiniz aşağıdaki verileri saklarız:
      </p>
      <ul>
        <li>Gelir ve gider işlemleri</li>
        <li>İşlem kategorileri ve notları</li>
        <li>Bütçe tanımları</li>
        <li>Finansal hedefler ve birikim kayıtları</li>
        <li>Abonelik bilgileri</li>
        <li>Tekrarlayan işlem kuralları</li>
      </ul>
      <p>
        <strong>Önemli:</strong> Bu finansal veriler tamamen sizin manuel
        girişinizle oluşur. FynPad hiçbir banka hesabına, kredi kartına veya
        harici finansal kuruma bağlanmaz.
      </p>

      <h3>2.3 Bildirim İzni</h3>
      <p>
        Uygulama içi hatırlatmalar (günlük gider hatırlatması, abonelik yenileme
        uyarısı) gönderebilmek için cihaz bildirim izni isteyebiliriz. Bu izni
        istediğiniz zaman cihaz ayarlarından geri alabilirsiniz.
      </p>

      <h3>2.4 Reklam Verileri (Google AdMob)</h3>
      <p>
        FynPad'de reklamlar Google AdMob aracılığıyla gösterilir. Google Mobile
        Ads, reklam gösterimi sırasında aşağıdaki bilgileri otomatik olarak
        toplayabilir ve paylaşabilir:
      </p>
      <ul>
        <li>IP adresinden türetilen yaklaşık konum (hassas/GPS konum değil)</li>
        <li>
          Reklam kimliği (Advertising ID), uygulama seti kimliği (app set ID) ve
          diğer cihaz/uygulama tanımlayıcıları
        </li>
        <li>
          Uygulama açılışları, dokunuşlar, reklam gösterimleri ve reklam
          etkileşimleri
        </li>
        <li>Uygulama/SDK tanılama ve performans bilgileri</li>
      </ul>
      <p>Bu veriler aşağıdaki amaçlarla işlenebilir:</p>
      <ul>
        <li>Reklam gösterimi ve reklam performansının ölçülmesi</li>
        <li>Analiz</li>
        <li>
          Dolandırıcılığın önlenmesi, güvenlik ve uyumluluk (fraud prevention)
        </li>
      </ul>
      <p>
        Uygulamaya girdiğiniz gelir, gider, bütçe, hedef, not, abonelik ve
        benzeri finansal kayıtlar AdMob'a gönderilmez.
      </p>
      <p>
        Bu veriler Google'ın kendi Gizlilik Politikası kapsamında işlenir:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-accent hover:underline"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        Reklam kişiselleştirmesini cihazınızın ayarlarından (Google Ayarlar →
        Reklamlar → Reklam kişiselleştirmesini devre dışı bırak) kontrol
        edebilirsiniz.
      </p>

      <h2>3. Bilgileri Nasıl Kullanıyoruz</h2>
      <p>Topladığımız bilgileri yalnızca şu amaçlarla kullanırız:</p>
      <ul>
        <li>Hesabınızı oluşturmak ve yönetmek</li>
        <li>Oturum açmanızı sağlamak</li>
        <li>Girdiğiniz finansal verileri saklamak ve size göstermek</li>
        <li>İstediğiniz analiz ve içgörüleri sunmak</li>
        <li>Ayarladığınız hatırlatma bildirimlerini göndermek</li>
        <li>Uygulamayı çalıştırmak ve teknik sorunları gidermek</li>
        <li>Reklam göstermek ve reklam performansını ölçmek</li>
        <li>Uygulama ve reklam SDK performansını analiz etmek</li>
        <li>Güvenlik ile kötüye kullanım veya dolandırıcılığın önlenmesi</li>
      </ul>

      <h2>4. Verilerin Saklanması ve Güvenliği</h2>
      <p>
        Tüm verileriniz <strong>Supabase</strong> altyapısı üzerinde güvenli
        şekilde saklanır. Verileriniz:
      </p>
      <ul>
        <li>Aktarım sırasında HTTPS/TLS şifrelemesiyle korunur</li>
        <li>
          Yetkisiz erişime karşı erişim kontrolleri ve teknik güvenlik
          önlemleriyle korunur
        </li>
        <li>
          Satır Bazlı Güvenlik (Row Level Security) ile korunur — yalnızca siz
          kendi verilerinize erişebilirsiniz
        </li>
        <li>Şifreler endüstri standardı hash algoritmalarıyla korunur</li>
      </ul>

      <h2>5. Verilerin Üçüncü Taraflarla Paylaşımı</h2>
      <p>
        Uygulamaya girdiğiniz finansal kayıtlar reklamverenlere satılmaz ve
        AdMob'a gönderilmez. Bununla birlikte, uygulamanın çalışabilmesi için
        verileriniz aşağıdaki hizmet sağlayıcılar tarafından işlenir:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> Hesap ve uygulama verileriniz, altyapı ve
          kimlik doğrulama hizmet sağlayıcımız olan Supabase tarafından bizim
          adımıza işlenir ve saklanır.
        </li>
        <li>
          <strong>Google AdMob:</strong> Uygulama içinde gösterilen reklamlar
          Google AdMob tarafından sağlanır. AdMob, yukarıda 2.4'te açıklanan
          reklam/cihaz verilerini reklamcılık, analiz ve dolandırıcılık
          önleme/güvenlik amaçlarıyla işleyebilir.
        </li>
      </ul>
      <p>
        Google ile giriş yaptığınızda, kimlik doğrulama Google'ın kendi güvenli
        sistemleri üzerinden gerçekleşir ve Google'ın Gizlilik Politikası da
        geçerlidir.
      </p>

      <h2>6. Veri Saklama Süresi</h2>
      <p>
        Verilerinizi, hesabınız aktif olduğu sürece saklarız. Hesabınızı
        sildiğinizde, tüm kişisel ve finansal verileriniz kalıcı olarak silinir.
      </p>

      <h2>7. Haklarınız ve Veri Silme</h2>
      <p>Aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>
          <strong>Erişim:</strong> Verilerinize uygulama üzerinden istediğiniz
          zaman erişebilirsiniz
        </li>
        <li>
          <strong>Düzeltme:</strong> Verilerinizi uygulama içinden
          düzenleyebilirsiniz
        </li>
        <li>
          <strong>Silme:</strong> Hesabınızı ve tüm verilerinizi silebilirsiniz
        </li>
      </ul>
      <p>
        <strong>Hesabınızı ve verilerinizi silmek için:</strong>
      </p>
      <ul>
        <li>
          Uygulama içinde{" "}
          <strong>Ayarlar → Tehlikeli Bölge → Hesabı Sil</strong> adımlarını
          izleyin. Bu işlem başarıyla tamamlandığında aktif hesabınız ve ilişkili
          uygulama verileriniz kalıcı olarak silinir, veya
        </li>
        <li>
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>{" "}
          adresine e-posta göndererek talep edin. Bu tür talepler kimlik
          doğrulaması gerektirebilir ve en geç 30 gün içinde işleme alınır.
        </li>
      </ul>
      <p>Güvenliğiniz için parolanızı hiçbir zaman e-posta ile göndermeyin.</p>

      <h2>8. Çocukların Gizliliği</h2>
      <p>
        FynPad 18 yaş ve üzerindeki kullanıcılara yöneliktir. Uygulama çocuklara
        yönelik olarak tasarlanmamış veya pazarlanmamıştır. 18 yaşından küçük
        kişilerden bilerek kişisel veri toplamayı amaçlamayız.
      </p>

      <h2>9. Değişiklikler</h2>
      <p>
        Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikleri
        uygulama içinden veya bu sayfa üzerinden bildiririz. Güncel sürüm her
        zaman bu sayfada yer alır.
      </p>

      <h2>10. İletişim</h2>
      <p>Gizlilikle ilgili sorularınız için:</p>
      <p>
        <strong>E-posta:</strong>{" "}
        <a
          href="mailto:info@theordino.com"
          className="text-accent hover:underline"
        >
          info@theordino.com
        </a>
        <br />
        <strong>Geliştirici ve hizmet sağlayıcı:</strong> Ordino
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        <strong>Last updated:</strong> July 2, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains what information the FynPad mobile
        application ("App", "FynPad"), developed by Ordino ("we", "us", "our"),
        collects from its users ("you", "user"), how this information is used,
        and how it is protected.
      </p>
      <p>
        By using FynPad, you agree to the practices described in this Privacy
        Policy.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Account Information</h3>
      <p>
        When you register for FynPad or sign in with Google, we collect the
        following:
      </p>
      <p>
        <strong>Email registration:</strong>
      </p>
      <ul>
        <li>Email address</li>
        <li>
          Password (protected with secure hashing methods and cannot be viewed
          by us in plain text)
        </li>
      </ul>
      <p>
        <strong>Google Sign-In:</strong>
      </p>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Profile photo</li>
        <li>Google user ID (unique identifier)</li>
      </ul>

      <h3>2.2 Financial Data</h3>
      <p>
        FynPad is a personal finance tracking app. We store the following data
        that you manually enter:
      </p>
      <ul>
        <li>Income and expense transactions</li>
        <li>Transaction categories and notes</li>
        <li>Budget definitions</li>
        <li>Financial goals and savings records</li>
        <li>Subscription information</li>
        <li>Recurring transaction rules</li>
      </ul>
      <p>
        <strong>Important:</strong> This financial data is created entirely
        through your manual input. FynPad does not connect to any bank account,
        credit card, or external financial institution.
      </p>

      <h3>2.3 Notification Permission</h3>
      <p>
        We may request device notification permission to send in-app reminders
        (daily expense reminders, subscription renewal alerts). You can revoke
        this permission at any time from your device settings.
      </p>

      <h3>2.4 Advertising Data (Google AdMob)</h3>
      <p>
        Ads in FynPad are displayed through Google AdMob. While serving ads,
        Google Mobile Ads may automatically collect and share:
      </p>
      <ul>
        <li>IP-derived approximate location (not precise/GPS location)</li>
        <li>
          Advertising ID, app set ID, and other device/app identifiers
        </li>
        <li>App launches, taps, ad impressions, and ad interactions</li>
        <li>App/SDK diagnostic and performance information</li>
      </ul>
      <p>This data may be processed for:</p>
      <ul>
        <li>Advertising and measuring ad performance</li>
        <li>Analytics</li>
        <li>Fraud prevention, security, and compliance</li>
      </ul>
      <p>
        The income, expense, budget, goal, note, subscription, and similar
        financial records you enter into the app are not sent to AdMob.
      </p>
      <p>
        This data is processed under Google's own Privacy Policy:{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-accent hover:underline"
        >
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        You can control ad personalization from your device settings (Google
        Settings → Ads → Opt out of Ads Personalization).
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect solely for:</p>
      <ul>
        <li>Creating and managing your account</li>
        <li>Enabling you to sign in</li>
        <li>Storing and displaying the financial data you enter</li>
        <li>Providing the analytics and insights you request</li>
        <li>Sending reminder notifications you have configured</li>
        <li>Operating the app and resolving technical issues</li>
        <li>Showing ads and measuring ad performance</li>
        <li>Analyzing application and advertising SDK performance</li>
        <li>Security and prevention of abuse or fraud</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <p>
        All your data is securely stored on <strong>Supabase</strong>{" "}
        infrastructure. Your data is:
      </p>
      <ul>
        <li>Protected with HTTPS/TLS encryption during transmission</li>
        <li>
          Protected against unauthorized access with access controls and
          technical security measures
        </li>
        <li>
          Protected with Row Level Security — only you can access your own data
        </li>
        <li>
          Passwords are protected with industry-standard hashing algorithms
        </li>
      </ul>

      <h2>5. Sharing Data with Third Parties</h2>
      <p>
        The financial records you enter into the app are not sold to advertisers
        and are not sent to AdMob. However, for the app to function, your data is
        processed by the following service providers:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> Your account and application data is
          processed and stored on our behalf by Supabase, our infrastructure and
          authentication service provider.
        </li>
        <li>
          <strong>Google AdMob:</strong> Ads displayed within the app are
          provided by Google AdMob. AdMob may process the advertising/device data
          described in section 2.4 above for advertising, analytics, and fraud
          prevention/security purposes.
        </li>
      </ul>
      <p>
        When you sign in with Google, authentication occurs through Google's own
        secure systems, and Google's Privacy Policy also applies.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active. When you
        delete your account, all your personal and financial data is permanently
        deleted.
      </p>

      <h2>7. Your Rights and Data Deletion</h2>
      <p>You have the following rights:</p>
      <ul>
        <li>
          <strong>Access:</strong> You can access your data through the app at
          any time
        </li>
        <li>
          <strong>Correction:</strong> You can edit your data within the app
        </li>
        <li>
          <strong>Deletion:</strong> You can delete your account and all your
          data
        </li>
      </ul>
      <p>
        <strong>To delete your account and data:</strong>
      </p>
      <ul>
        <li>
          Follow{" "}
          <strong>Settings → Danger Zone → Delete Account</strong> within the
          app. When this is successfully completed, your active account and
          associated application data are permanently deleted, or
        </li>
        <li>
          Request it by emailing{" "}
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>
          . Such requests may require identity verification and are processed
          within 30 days.
        </li>
      </ul>
      <p>For your security, never send your password by email.</p>

      <h2>8. Children's Privacy</h2>
      <p>
        FynPad is intended for users aged 18 and older. The app is not designed
        or marketed for children. We do not knowingly collect personal data from
        anyone under the age of 18.
      </p>

      <h2>9. Changes</h2>
      <p>
        This Privacy Policy may be updated from time to time. We will notify you
        of significant changes through the app or this page. The current version
        is always available on this page.
      </p>

      <h2>10. Contact</h2>
      <p>For privacy-related questions:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@theordino.com"
          className="text-accent hover:underline"
        >
          info@theordino.com
        </a>
        <br />
        <strong>Developer and service provider:</strong> Ordino
      </p>
    </>
  );
}
