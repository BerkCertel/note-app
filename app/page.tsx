import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";

import HeroSection from "@/components/hero-section";
import Footer from "@/components/utils/footer";
import { HeroHeader } from "@/components/utils/header";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
