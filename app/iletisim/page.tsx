import type { Metadata } from "next";
import { ContactHeroImage } from "@/components/sections/ContactHeroImage";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Bize ulaşın. Markanız hakkında bilgi verin, bir iş günü içinde dönüş yapacağız.",
};

export default function IletisimPage() {
  return (
    <>
      <ContactHeroImage />
      <WhereWeWork
        title="11 yıl önce Istanbul'da kuruldu. Bugün Şişli iş bölgesinde, "
        emphasis="büyüme aşamasındaki ve önde gelen"
        titleTail=" markalara seyahat, gayrimenkul, kamu sektörü ve B2B alanlarında hizmet veriyoruz."
        cards={[
          {
            title: "Global",
            text: "Istanbul merkezli sıkı bir ekibiz. Avrupa, Körfez ve Kuzey Amerika'da iş ortaklarımız ve iş birlikçilerimiz var. Kampanyaları global olarak yönetiyoruz.",
          },
          {
            title: "Müşterimiz Olun",
            text: "Yeni bir projeniz mi var? Duymayı çok isteriz. Her büyük iş ortaklığı, daha büyük bir brief ile başlar — sizinkini incelemekten mutluluk duyacağız.",
          },
          {
            title: "Ekibimize Katılın",
            text: "Yalnızca olağanüstü uzmanları işe alıyoruz. Kendi işinizi gördüğünüzde 'çok iyi' diyebiliyorsanız, burada bize aitsiniz.",
          },
        ]}
      />
      <ContactForm />
      <ScheduleMeeting calendlyUrl={site.meetingUrl} />
      <PowerSection
        label="Bir Yanıt Uzakta"
        title="Bize ulaşın"
        emphasis="hemen dönüş yapalım."
      />
      <Cta
        title="Birlikte"
        emphasis="harekete geçelim."
        buttonLabel="theordino.com"
        href="mailto:theordino.com"
      />
    </>
  );
}
