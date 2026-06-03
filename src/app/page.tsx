import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Work />
      <Services />
      <Studio />
      <Contact />
    </>
  );
}
