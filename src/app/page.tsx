import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Collaborations from "@/components/Collaborations";
import VytlEvents from "@/components/VytlEvents";
import RiarSaab from "@/components/RiarSaab";
import ReelsMarquee from "@/components/ReelsMarquee";
import Studio from "@/components/Studio";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Work />
      <Collaborations />
      <VytlEvents />
      <Services />
      <RiarSaab />
      <ReelsMarquee />
      <Studio />
      <Approach />
      <Contact />
    </>
  );
}
