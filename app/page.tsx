import InteractiveHero from "@/components/hero-section"
import { PopularGoalsSection } from "@/components/popular-goals-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UniqueSellingPointsSection } from "@/components/unique-selling-points-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { CourseCategoriesSection } from "@/components/course-categories-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <InteractiveHero />
      <PopularGoalsSection />
      <HowItWorksSection />
      <UniqueSellingPointsSection />
      <TestimonialsSection />
      <CourseCategoriesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
