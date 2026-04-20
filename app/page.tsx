import { Hero } from "@/components/sections/Hero";
import { FullVideo } from "@/components/sections/FullVideo";
import { HorizontalScroll } from "@/components/sections/HorizontalScroll";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { FullBleed } from "@/components/sections/FullBleed";

export default function Home() {
  return (
    <>
      <Hero />
      <FullVideo
        eyebrow="Education · Case Study"
        title="GoBritanya — "
        emphasis="The Game Is On."
        placeholder="dark-breathe"
      />
      <FullVideo
        eyebrow="Travel · Case Study"
        title="AIATA — "
        emphasis="flight bookings, reimagined."
        placeholder="magenta-gradient"
      />
      <HorizontalScroll />
      <ClientsShowcase />
      <LatestWorks />
      <FullBleed
        eyebrow="Travel · Case Study 01"
        title="AIATA — "
        emphasis="flight bookings, reimagined."
        gradient="linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 40%, #2a7a5a 70%, #b28f6c 100%)"
        href="/case-studies#aiata"
      />
    </>
  );
}
