import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ClientTrustSection } from "@/components/sections/client-trust-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { DesignCapabilitiesSection } from "@/components/sections/design-capabilities-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNavbar } from "@/components/sections/site-navbar";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyMaanSection } from "@/components/sections/why-maan-section";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <WhyMaanSection />
        <DesignCapabilitiesSection />
        <ServicesSection />
        <CapabilitiesSection />
        <PortfolioSection />
        <ClientTrustSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
