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
        title: "FynPad — Delete Account",
        description:
          "How to delete your FynPad account and all associated data, both from within the app and via direct email request.",
      }
    : {
        title: "FynPad — Hesap Silme",
        description:
          "FynPad hesabınızı ve ilişkili tüm verilerinizi hem uygulama içinden hem de e-posta talebi yoluyla nasıl sileceğiniz.",
      };
}

export default async function FynPadDeleteAccountPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        label={isEn ? "FynPad · Legal" : "FynPad · Yasal"}
        title={isEn ? "Delete" : "Hesap"}
        emphasis={isEn ? "Account." : "Silme."}
        sub={
          isEn
            ? "Delete your FynPad account and all associated data at any time — from within the app or via email request."
            : "FynPad hesabınızı ve ilişkili tüm verilerinizi istediğiniz zaman silin — uygulama içinden veya e-posta talebiyle."
        }
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
      >
        <div className="mx-auto max-w-[800px] font-body text-base font-light leading-[1.9] text-[#333] [&_h2]:font-display [&_h2]:text-[1.8rem] [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-black [&_h3]:font-display [&_h3]:text-[1.3rem] [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-black [&_p]:mb-5 [&_ul]:my-5 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:list-disc [&_ol]:my-5 [&_ol]:pl-6 [&_ol_li]:list-decimal">
          {isEn ? <DeleteAccountEn /> : <DeleteAccountTr />}
        </div>
      </section>
    </>
  );
}

function DeleteAccountTr() {
  return (
    <>
      <p>
        FynPad hesabınızı ve ilişkili tüm verilerinizi istediğiniz zaman
        silebilirsiniz. Aşağıda hem uygulama içinden hem de doğrudan talep yoluyla
        silme adımları açıklanmıştır.
      </p>

      <h2>1. Uygulama İçinden Silme</h2>
      <ol className="[&>li]:list-decimal">
        <li>FynPad uygulamasını açın ve giriş yapın</li>
        <li>Ayarlar ekranına gidin</li>
        <li>&quot;Hesabı Sil&quot; seçeneğine dokunun</li>
        <li>Onay için &quot;DELETE&quot; yazın ve işlemi tamamlayın</li>
        <li>Hesabınız ve tüm verileriniz kalıcı olarak silinir</li>
      </ol>

      <h2>2. E-posta ile Silme Talebi (Giriş Yapmadan)</h2>
      <p>
        Uygulamaya erişiminiz yoksa, aşağıdaki e-posta adresine hesabınızın
        silinmesi talebini gönderebilirsiniz:
      </p>
      <ul>
        <li>
          <strong>E-posta:</strong>{" "}
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>
        </li>
        <li>
          <strong>Konu:</strong> FynPad Hesap Silme Talebi
        </li>
        <li>
          <strong>İçerik:</strong> Hesabınızla ilişkili e-posta adresini belirtin
        </li>
      </ul>
      <p>
        Talebiniz en geç 30 gün içinde işleme alınır ve hesabınız ile tüm
        verileriniz silinir.
      </p>

      <h2>3. Silinecek Veriler</h2>
      <ul>
        <li>Hesap bilgileriniz (ad, e-posta)</li>
        <li>Tüm finansal kayıtlarınız (gelir, gider, işlemler)</li>
        <li>Bütçeleriniz ve kategorileriniz</li>
        <li>Finansal hedefleriniz</li>
        <li>Abonelik ve tekrarlayan işlem kayıtlarınız</li>
      </ul>

      <h2>4. Saklanan Veriler</h2>
      <p>
        Hesap silindiğinde yukarıdaki tüm veriler kalıcı olarak silinir. Yasal
        yükümlülükler gereği saklanması zorunlu herhangi bir finansal veriniz
        bulunmamaktadır. Silme işlemi geri alınamaz.
      </p>

      <h2>5. İletişim</h2>
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

function DeleteAccountEn() {
  return (
    <>
      <p>
        You can delete your FynPad account and all associated data at any time.
        Below are the steps to delete your account both from within the app and
        via direct request.
      </p>

      <h2>1. Delete from Within the App</h2>
      <ol className="[&>li]:list-decimal">
        <li>Open the FynPad app and sign in</li>
        <li>Go to the Settings screen</li>
        <li>Tap &quot;Delete Account&quot;</li>
        <li>Type &quot;DELETE&quot; to confirm and complete the process</li>
        <li>Your account and all data are permanently deleted</li>
      </ol>

      <h2>2. Request Deletion via Email (Without Signing In)</h2>
      <p>
        If you cannot access the app, you can request account deletion by
        emailing:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@theordino.com"
            className="text-accent hover:underline"
          >
            info@theordino.com
          </a>
        </li>
        <li>
          <strong>Subject:</strong> FynPad Account Deletion Request
        </li>
        <li>
          <strong>Body:</strong> Include the email address associated with your
          account
        </li>
      </ul>
      <p>
        Your request will be processed within 30 days, and your account and all
        data will be deleted.
      </p>

      <h2>3. Data That Will Be Deleted</h2>
      <ul>
        <li>Your account information (name, email)</li>
        <li>All your financial records (income, expenses, transactions)</li>
        <li>Your budgets and categories</li>
        <li>Your financial goals</li>
        <li>Your subscriptions and recurring transaction records</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        When your account is deleted, all data above is permanently removed. We
        do not retain any financial data required by legal obligations. Deletion
        is irreversible.
      </p>

      <h2>5. Contact</h2>
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
