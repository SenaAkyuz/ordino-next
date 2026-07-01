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
        <strong>Son güncelleme:</strong> 1 Temmuz 2026
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
          Şifre (şifrelenmiş olarak saklanır, hiçbir zaman düz metin olarak
          tutulmaz)
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

      <h2>3. Bilgileri Nasıl Kullanıyoruz</h2>
      <p>Topladığımız bilgileri yalnızca şu amaçlarla kullanırız:</p>
      <ul>
        <li>Hesabınızı oluşturmak ve yönetmek</li>
        <li>Oturum açmanızı sağlamak</li>
        <li>Girdiğiniz finansal verileri saklamak ve size göstermek</li>
        <li>İstediğiniz analiz ve içgörüleri sunmak</li>
        <li>Ayarladığınız hatırlatma bildirimlerini göndermek</li>
        <li>Uygulamayı çalıştırmak ve teknik sorunları gidermek</li>
      </ul>

      <h2>4. Verilerin Saklanması ve Güvenliği</h2>
      <p>
        Tüm verileriniz <strong>Supabase</strong> altyapısı üzerinde güvenli
        şekilde saklanır. Verileriniz:
      </p>
      <ul>
        <li>Aktarım sırasında HTTPS/TLS şifrelemesiyle korunur</li>
        <li>Disk üzerinde şifrelenmiş olarak saklanır</li>
        <li>
          Satır Bazlı Güvenlik (Row Level Security) ile korunur — yalnızca siz
          kendi verilerinize erişebilirsiniz
        </li>
        <li>Şifreler endüstri standardı hash algoritmalarıyla korunur</li>
      </ul>

      <h2>5. Verilerin Üçüncü Taraflarla Paylaşımı</h2>
      <p>
        <strong>
          FynPad verilerinizi hiçbir üçüncü tarafla paylaşmaz, satmaz veya
          kiralamaz.
        </strong>
      </p>
      <p>
        Verileriniz yalnızca uygulamanın çalışması için kullanılan altyapı
        sağlayıcısında (Supabase) barındırılır. Reklam, pazarlama veya profilleme
        amacıyla hiçbir kuruma aktarılmaz.
      </p>
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
          Uygulama içinde <strong>Ayarlar → Hesap → Hesabı Sil</strong> adımlarını
          izleyin, veya
        </li>
        <li>
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>{" "}
          adresine e-posta göndererek talep edin
        </li>
      </ul>
      <p>Silme talebiniz en geç 30 gün içinde işleme alınır.</p>

      <h2>8. Çocukların Gizliliği</h2>
      <p>
        FynPad 13 yaşından küçük çocuklara yönelik değildir. Bilerek 13 yaşından
        küçük kullanıcılardan veri toplamayız.
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
        <strong>Şirket:</strong> Ordino
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        <strong>Last updated:</strong> July 1, 2026
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
        <li>Password (stored encrypted, never kept in plain text)</li>
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

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect solely for:</p>
      <ul>
        <li>Creating and managing your account</li>
        <li>Enabling you to sign in</li>
        <li>Storing and displaying the financial data you enter</li>
        <li>Providing the analytics and insights you request</li>
        <li>Sending reminder notifications you have configured</li>
        <li>Operating the app and resolving technical issues</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <p>
        All your data is securely stored on <strong>Supabase</strong>{" "}
        infrastructure. Your data is:
      </p>
      <ul>
        <li>Protected with HTTPS/TLS encryption during transmission</li>
        <li>Stored encrypted at rest</li>
        <li>
          Protected with Row Level Security — only you can access your own data
        </li>
        <li>
          Passwords are protected with industry-standard hashing algorithms
        </li>
      </ul>

      <h2>5. Sharing Data with Third Parties</h2>
      <p>
        <strong>
          FynPad does not share, sell, or rent your data to any third party.
        </strong>
      </p>
      <p>
        Your data is only hosted with the infrastructure provider used to operate
        the app (Supabase). It is never transferred to any organization for
        advertising, marketing, or profiling purposes.
      </p>
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
          Follow <strong>Settings → Account → Delete Account</strong> within the
          app, or
        </li>
        <li>
          Request it by emailing{" "}
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>
        </li>
      </ul>
      <p>Your deletion request will be processed within 30 days.</p>

      <h2>8. Children's Privacy</h2>
      <p>
        FynPad is not intended for children under 13. We do not knowingly collect
        data from users under 13.
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
        <strong>Company:</strong> Ordino
      </p>
    </>
  );
}
