import { Hero } from "@/components/sections/Hero";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { Cta } from "@/components/sections/Cta";
import { site } from "@/lib/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsShowcase />
      <HowWeWork />
      <ServicesGrid />
      <LatestWorks />
      <ScheduleMeeting calendlyUrl={site.meetingUrl} />
      <Cta
        title="Birlikte neler"
        emphasis="yaratacağız."
        buttonLabel="İletişime Geç"
        href="/iletisim"
      />
    </>
  );
}
