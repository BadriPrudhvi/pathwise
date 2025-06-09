import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your first learning journey",
      features: [
        "Access to 1 learning path",
        "Limited daily AI interactions",
        "Basic lessons and progress tracking",
        "Goal scoping and skill assessment",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$39",
      period: "per month",
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
      buttonVariant: "default" as const,
      popular: true
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50" aria-labelledby="pricing-heading" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your learning journey. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-green-500 shadow-lg md:scale-105' 
                  : 'border border-gray-200 hover:border-green-300'
              }`}
              role="article"
              aria-labelledby={`plan-${plan.name.toLowerCase()}-title`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle id={`plan-${plan.name.toLowerCase()}-title`} className="text-xl sm:text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2 text-sm sm:text-base">
                    {plan.period}
                  </span>
                </div>
                <CardDescription className="mt-4 text-gray-600 text-sm sm:text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6 sm:pb-8">
                <ul className="space-y-3 sm:space-y-4" role="list" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full py-2 sm:py-3 text-base sm:text-lg font-semibold transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : ''
                  }`}
                  aria-label={`${plan.buttonText} - ${plan.name} plan for ${plan.price} ${plan.period}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            All plans include AI-powered goal scoping and skill assessment. No credit card required for free tier.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Questions about our plans? <a href="#" className="text-green-600 hover:text-green-700 underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  )
} 