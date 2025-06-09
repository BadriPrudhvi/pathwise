import { Pricing } from "@/components/ui/pricing"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0",
      yearlyPrice: "0",
      period: "forever",
      description: "Perfect for getting started with your first learning journey",
      features: [
        "Access to 1 learning path",
        "Limited daily AI interactions",
        "Basic lessons and progress tracking",
        "Goal scoping and skill assessment"
      ],
      buttonText: "Get Started Free",
      href: "/signup",
      isPopular: false
    },
    {
      name: "Pro",
      price: "39",
      yearlyPrice: "31",
      period: "month",
      description: "Unlock your full learning potential with unlimited access",
      features: [
        "Unlimited learning paths",
        "Full AI assistant access",
        "Advanced adaptation + deeper insights",
        "Extra review modules + checkpoint quizzes",
        "Priority support",
        "Personalized curriculum builder",
        "Dynamic learning adaptation",
        "Progress analytics dashboard",
        "Advanced project-based learning",
        "Industry-specific curriculum",
        "Completion certificates"
      ],
      buttonText: "Start Pro Trial",
      href: "/signup?plan=pro",
      isPopular: true
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50" aria-labelledby="pricing-heading" id="pricing">
      <Pricing 
        plans={plans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your learning journey. Start free and upgrade as you grow.
All plans include AI-powered goal scoping and skill assessment."
      />
    </section>
  )
} 