export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WaveDivider from "@/components/WaveDivider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";
import Company from "@/components/Company";
import News from "@/components/News";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Header />
      <div className="pt-[100px]">
        <Hero />
        <About />
        <WaveDivider />
        <Services />
        <WhyUs />
        <Works />
        <Company />
        <News />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
