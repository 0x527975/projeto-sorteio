import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LegalizationSection } from "@/components/legalization-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SectionTransition } from "@/components/section-transition"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZENTRATECH - Legalização de Sorteios e Serviços Especializados",
  description: "Legalize seus sorteios com segurança e tecnologia. Oferecemos legalização via LOTEP, blindagem patrimonial, assessoria jurídica e contábil, além de desenvolvimento de software.",
  keywords: ["legalização de sorteios", "LOTEP", "blindagem patrimonial", "assessoria jurídica", "desenvolvimento de software"],
  openGraph: {
    title: "ZENTRATECH - Legalização de Sorteios",
    description: "Legalize seus sorteios com segurança e tecnologia",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Header />
      <HeroSection />
      <SectionTransition fromColor="#09090b" toColor="#0d0d0f" height="100px" />
      <LegalizationSection />
      <SectionTransition fromColor="#0d0d0f" toColor="#09090b" height="100px" />
      <AboutSection />
      <SectionTransition fromColor="#09090b" toColor="#09090b" height="100px" />
      <ServicesSection />
      <SectionTransition fromColor="#09090b" toColor="#0d0d0f" height="100px" />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
