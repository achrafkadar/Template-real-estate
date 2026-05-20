import { ContactBar } from "@/components/ContactBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FormSection } from "@/components/FormSection";
import { Stats } from "@/components/Stats";
import { EstimateSection } from "@/components/EstimateSection";
import { WhyUs } from "@/components/WhyUs";
import { VisualBreaker } from "@/components/VisualBreaker";
import { Testimonials } from "@/components/Testimonials";
import { Steps } from "@/components/Steps";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <ScrollAnimations>
      <ContactBar />
      <Header />
      <main>
        <Hero />
        <FormSection />
        <Stats />
        <EstimateSection />
        <WhyUs />
        <VisualBreaker />
        <Testimonials />
        <Steps />
        <CtaSection />
      </main>
      <Footer />
    </ScrollAnimations>
  );
}
