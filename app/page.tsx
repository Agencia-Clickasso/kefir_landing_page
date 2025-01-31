import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <WhoWeAreSection />
      <CTASection />
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

