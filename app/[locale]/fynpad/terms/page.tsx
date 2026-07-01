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
        title: "FynPad — Terms of Service",
        description:
          "FynPad terms of service. The rules and conditions for using the FynPad personal finance app.",
      }
    : {
        title: "FynPad — Kullanım Koşulları",
        description:
          "FynPad kullanım koşulları. FynPad kişisel finans uygulamasını kullanmaya ilişkin kurallar ve koşullar.",
      };
}

export default async function FynPadTermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "FynPad · Legal" : "FynPad · Yasal"}
        title={isEn ? "Terms of" : "Kullanım"}
        emphasis={isEn ? "Service." : "Koşulları."}
        sub={
          isEn
            ? "The rules and conditions for using the FynPad personal finance app."
            : "FynPad kişisel finans uygulamasını kullanmaya ilişkin kurallar ve koşullar."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc">
          {isEn ? <TermsEn /> : <TermsTr />}
        </div>
      </section>
    </>
  );
}

function TermsTr() {
  return (
    <>
      <p>
        <strong>Son güncelleme:</strong> 1 Temmuz 2026
      </p>

      <h2>1. Kabul</h2>
      <p>
        FynPad mobil uygulamasını ("Uygulama", "FynPad") kullanarak bu Kullanım
        Koşulları'nı kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen
        uygulamayı kullanmayın.
      </p>
      <p>FynPad, Ordino ("biz") tarafından geliştirilmiş ve işletilmektedir.</p>

      <h2>2. Hizmetin Tanımı</h2>
      <p>
        FynPad, kullanıcıların gelir, gider, bütçe, finansal hedef ve
        aboneliklerini manuel olarak takip edebildiği kişisel bir finans yönetim
        uygulamasıdır. Uygulama yalnızca kişisel kullanım amaçlıdır.
      </p>

      <h2>3. Hesap Sorumluluğu</h2>
      <ul>
        <li>
          Hesabınızın güvenliğinden ve şifrenizin gizliliğinden siz
          sorumlusunuz.
        </li>
        <li>
          Hesabınız altında gerçekleşen tüm etkinliklerden siz sorumlusunuz.
        </li>
        <li>
          Yetkisiz bir kullanım fark ederseniz derhal bize bildirmelisiniz.
        </li>
        <li>
          Kayıt sırasında doğru ve güncel bilgi vermeyi kabul edersiniz.
        </li>
      </ul>

      <h2>4. Kabul Edilebilir Kullanım</h2>
      <p>FynPad'i kullanırken şunları yapmamayı kabul edersiniz:</p>
      <ul>
        <li>Uygulamayı yasa dışı amaçlarla kullanmak</li>
        <li>Uygulamanın güvenliğini tehlikeye atmaya çalışmak</li>
        <li>
          Uygulamanın kaynak kodunu izinsiz kopyalamak, değiştirmek veya
          dağıtmak
        </li>
        <li>Diğer kullanıcıların verilerine erişmeye çalışmak</li>
        <li>Uygulamaya zarar verecek yazılım veya kod yüklemek</li>
      </ul>

      <h2>5. Finansal Tavsiye Değildir</h2>
      <p>
        <strong>FynPad bir finansal danışmanlık hizmeti değildir.</strong>{" "}
        Uygulama yalnızca sizin girdiğiniz verileri düzenlemenize ve
        görselleştirmenize yardımcı olan bir araçtır. Uygulamadaki hiçbir bilgi,
        grafik veya içgörü finansal, yatırım veya hukuki tavsiye niteliği
        taşımaz. Finansal kararlarınız için profesyonel bir danışmana
        başvurmanız önerilir.
      </p>

      <h2>6. Veri Doğruluğu</h2>
      <p>
        Uygulamada gösterilen tüm analizler ve içgörüler, sizin girdiğiniz
        verilere dayanır. Verilerinizin doğruluğundan siz sorumlusunuz. Yanlış
        veya eksik veri girişinden kaynaklanan sonuçlardan sorumlu değiliz.
      </p>

      <h2>7. Hizmetin Sürekliliği</h2>
      <p>
        Uygulamayı sürekli ve kesintisiz sunmak için çaba gösteririz, ancak:
      </p>
      <ul>
        <li>
          Bakım, güncelleme veya teknik nedenlerle hizmet geçici olarak
          durabilir.
        </li>
        <li>Uygulamanın her zaman hatasız çalışacağını garanti etmeyiz.</li>
        <li>
          Hizmeti önceden bildirimde bulunarak değiştirebilir veya
          sonlandırabiliriz.
        </li>
      </ul>

      <h2>8. Sorumluluğun Sınırlandırılması</h2>
      <p>
        Yasaların izin verdiği ölçüde, FynPad'in kullanımından veya
        kullanılamamasından doğan doğrudan veya dolaylı zararlardan sorumlu
        değiliz. Uygulama "olduğu gibi" sunulur.
      </p>

      <h2>9. Hesabın Sonlandırılması</h2>
      <ul>
        <li>İstediğiniz zaman hesabınızı silebilirsiniz.</li>
        <li>
          Bu koşulları ihlal etmeniz durumunda hesabınızı askıya alma veya
          sonlandırma hakkımız saklıdır.
        </li>
      </ul>

      <h2>10. Fikri Mülkiyet</h2>
      <p>
        FynPad uygulaması, tasarımı, logosu ve içeriği Ordino'ya aittir ve telif
        hakkı yasalarıyla korunmaktadır. İzinsiz kullanılamaz.
      </p>

      <h2>11. Değişiklikler</h2>
      <p>
        Bu Kullanım Koşulları zaman zaman güncellenebilir. Önemli değişiklikleri
        uygulama içinden veya bu sayfa üzerinden bildiririz. Uygulamayı
        kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına
        gelir.
      </p>

      <h2>12. İletişim</h2>
      <p>Sorularınız için:</p>
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

function TermsEn() {
  return (
    <>
      <p>
        <strong>Last updated:</strong> July 1, 2026
      </p>

      <h2>1. Acceptance</h2>
      <p>
        By using the FynPad mobile application ("App", "FynPad"), you agree to
        these Terms of Service. If you do not accept these terms, please do not
        use the app.
      </p>
      <p>FynPad is developed and operated by Ordino ("we").</p>

      <h2>2. Description of Service</h2>
      <p>
        FynPad is a personal finance management app that allows users to manually
        track their income, expenses, budgets, financial goals, and
        subscriptions. The app is intended for personal use only.
      </p>

      <h2>3. Account Responsibility</h2>
      <ul>
        <li>
          You are responsible for the security of your account and the
          confidentiality of your password.
        </li>
        <li>
          You are responsible for all activities that occur under your account.
        </li>
        <li>
          You must notify us immediately if you detect any unauthorized use.
        </li>
        <li>
          You agree to provide accurate and current information during
          registration.
        </li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>While using FynPad, you agree not to:</p>
      <ul>
        <li>Use the app for unlawful purposes</li>
        <li>Attempt to compromise the security of the app</li>
        <li>
          Copy, modify, or distribute the app's source code without permission
        </li>
        <li>Attempt to access other users' data</li>
        <li>Upload software or code that could harm the app</li>
      </ul>

      <h2>5. Not Financial Advice</h2>
      <p>
        <strong>FynPad is not a financial advisory service.</strong> The app is
        merely a tool that helps you organize and visualize the data you enter.
        No information, chart, or insight within the app constitutes financial,
        investment, or legal advice. We recommend consulting a professional
        advisor for your financial decisions.
      </p>

      <h2>6. Data Accuracy</h2>
      <p>
        All analytics and insights displayed in the app are based on the data you
        enter. You are responsible for the accuracy of your data. We are not
        liable for results arising from incorrect or incomplete data entry.
      </p>

      <h2>7. Service Continuity</h2>
      <p>
        We strive to provide the app continuously and without interruption,
        however:
      </p>
      <ul>
        <li>
          The service may be temporarily suspended for maintenance, updates, or
          technical reasons.
        </li>
        <li>We do not guarantee that the app will always operate error-free.</li>
        <li>We may modify or discontinue the service with prior notice.</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any direct or
        indirect damages arising from the use or inability to use FynPad. The app
        is provided "as is".
      </p>

      <h2>9. Account Termination</h2>
      <ul>
        <li>You may delete your account at any time.</li>
        <li>
          We reserve the right to suspend or terminate your account if you
          violate these terms.
        </li>
      </ul>

      <h2>10. Intellectual Property</h2>
      <p>
        The FynPad app, its design, logo, and content belong to Ordino and are
        protected by copyright laws. They may not be used without permission.
      </p>

      <h2>11. Changes</h2>
      <p>
        These Terms of Service may be updated from time to time. We will notify
        you of significant changes through the app or this page. Your continued
        use of the app constitutes acceptance of the updated terms.
      </p>

      <h2>12. Contact</h2>
      <p>For questions:</p>
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
