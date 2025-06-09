import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularGoalsSection } from "@/components/popular-goals-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularGoalsSection />
      <HowItWorksSection />
    </div>
  );
}
