import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { AboutCard } from '@/components/home/AboutCard'
import { ProductSection } from '@/components/home/ProductSection'
import { LocationSection } from '@/components/home/LocationSection'
import { EventPackageSection } from '@/components/home/EventPackageSection'
import { PartnershipSection } from '@/components/home/PartnershipSection'
import { BenefitSection } from '@/components/home/BenefitSection'
import { VideoSection } from '@/components/home/VideoSection'
import { GallerySection } from '@/components/home/GallerySection'
import { ContactSection } from '@/components/home/ContactSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCard />
        <ProductSection />
        <LocationSection />
        <PartnershipSection />
        <BenefitSection />
        <EventPackageSection />
        <VideoSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
