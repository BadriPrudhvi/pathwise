import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularGoalsSection } from "@/components/popular-goals-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UniqueSellingPointsSection } from "@/components/unique-selling-points-section"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularGoalsSection />
      <HowItWorksSection />
      <UniqueSellingPointsSection />
      <PricingSection />
    </div>
  );
}
