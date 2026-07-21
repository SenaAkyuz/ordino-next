import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? {
        title: "FynPad — Personal Finance Tracking",
        description:
          "Manage your expenses, budget, and financial goals in one place. FynPad is a modern personal finance app by Ordino.",
      }
    : {
        title: "FynPad — Kişisel Finans Takibi",
        description:
          "Harcamalarınızı, bütçenizi ve hedeflerinizi tek yerden yönetin. FynPad, Ordino tarafından geliştirilen modern bir kişisel finans uygulamasıdır.",
      };
}

const features = {
  tr: [
    {
      icon: "📊",
      title: "Harcama Takibi",
      desc: "Gelir ve giderlerinizi kategorilere ayırarak takip edin",
    },
    {
      icon: "💰",
      title: "Bütçe Yönetimi",
      desc: "Aylık bütçeler oluşturun, harcamalarınızı kontrol altında tutun",
    },
    {
      icon: "🎯",
      title: "Finansal Hedefler",
      desc: "Birikim hedefleri belirleyin, ilerlemenizi izleyin",
    },
    {
      icon: "📈",
      title: "Detaylı Analiz",
      desc: "Takvim bazlı analiz ve içgörülerle finansal durumunuzu anlayın",
    },
    {
      icon: "🔔",
      title: "Abonelik Takibi",
      desc: "Tüm aboneliklerinizi tek yerde yönetin",
    },
    {
      icon: "🌙",
      title: "Karanlık Mod",
      desc: "Göz yormayan arayüz, Türkçe ve İngilizce dil desteği",
    },
  ],
  en: [
    {
      icon: "📊",
      title: "Expense Tracking",
      desc: "Track your income and expenses by category",
    },
    {
      icon: "💰",
      title: "Budget Management",
      desc: "Create monthly budgets, keep your spending in check",
    },
    {
      icon: "🎯",
      title: "Financial Goals",
      desc: "Set savings goals, monitor your progress",
    },
    {
      icon: "📈",
      title: "Detailed Analytics",
      desc: "Understand your finances with calendar-based analysis and insights",
    },
    {
      icon: "🔔",
      title: "Subscription Tracking",
      desc: "Manage all your subscriptions in one place",
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      desc: "Easy-on-the-eyes interface, Turkish and English language support",
    },
  ],
};

export default async function FynPadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";
  const items = isEn ? features.en : features.tr;

  return (
    <>
      <PageHero
        label="FynPad"
        title={isEn ? "Personal Finance" : "Kişisel Finans"}
        emphasis={isEn ? "Tracking." : "Takibi."}
        sub={
          isEn
            ? "Manage your expenses, budget, and goals in one place."
            : "Harcamalarınızı, bütçenizi ve hedeflerinizi tek yerden yönetin."
        }
      />

      {/* Tanıtım */}
      <section
        data-theme="light"
        className="bg-white px-5 pb-[60px] md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-[800px] text-center">
          <Reveal>
            <p className="font-body text-[1.15rem] font-light leading-[1.8] text-[#333]">
              {isEn
                ? "FynPad is a modern personal finance app that helps you easily track your income and expenses, create budgets, and reach your financial goals. Your entire financial life at your fingertips."
                : "FynPad, gelir ve giderlerinizi kolayca takip etmenizi, bütçe oluşturmanızı ve finansal hedeflerinize ulaşmanızı sağlayan modern bir kişisel finans uygulamasıdır. Tüm finansal hayatınız parmaklarınızın ucunda."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Özellikler */}
      <section
        data-theme="light"
        className="bg-white px-5 py-[60px] md:px-10 md:py-[80px] lg:px-20"
      >
        <div className="mx-auto grid max-w-[1000px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-8">
                <div className="mb-4 text-4xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h2 className="mb-2 font-display text-[1.35rem] font-normal text-black">
                  {item.title}
                </h2>
                <p className="font-body text-[0.95rem] font-light leading-[1.7] text-gray">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gizlilik vurgusu */}
      <section
        data-theme="light"
        className="bg-[#f7f7f5] px-5 py-[70px] md:px-10 md:py-[90px] lg:px-20"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[3px] text-gray">
              {isEn ? "Privacy First" : "Önce Gizlilik"}
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-light leading-[1.4] text-black">
              {isEn
                ? "Your data is safe. Your financial records are not shared with or sold to advertisers. Your data is encrypted in transit and protected against unauthorized access with technical security measures. While ads are shown, certain device, interaction, and diagnostic data may be processed by Google AdMob."
                : "Verileriniz güvende. Finansal kayıtlarınız reklamverenlerle paylaşılmaz veya satılmaz. Verileriniz aktarım sırasında şifrelenir ve yetkisiz erişime karşı teknik güvenlik önlemleriyle korunur. Reklam gösterimi sırasında belirli cihaz, etkileşim ve tanılama verileri Google AdMob tarafından işlenebilir."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer linkler */}
      <section
        data-theme="light"
        className="bg-white px-5 py-[60px] md:px-10 md:py-[80px] lg:px-20"
      >
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-[0.95rem] font-light">
            <Link
              href="/fynpad/privacy"
              className="text-accent hover:underline"
            >
              {isEn ? "Privacy Policy" : "Gizlilik Politikası"}
            </Link>
            <Link href="/fynpad/terms" className="text-accent hover:underline">
              {isEn ? "Terms of Service" : "Kullanım Koşulları"}
            </Link>
            <a
              href="mailto:info@theordino.com"
              className="text-accent hover:underline"
            >
              info@theordino.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
