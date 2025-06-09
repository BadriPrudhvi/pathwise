import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularGoalsSection } from "@/components/popular-goals-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularGoalsSection />
    </div>
  );
}
