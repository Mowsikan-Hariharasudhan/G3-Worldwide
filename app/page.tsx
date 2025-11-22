import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { PlatformShowcase } from "@/components/sections/platform-showcase";
import { ProofMetrics } from "@/components/sections/proof-metrics";
import { TestingGrounds } from "@/components/sections/testing-grounds";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProofMetrics />
      <CoreCapabilities />
      <PlatformShowcase />
      <TestingGrounds />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

