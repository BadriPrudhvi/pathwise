import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const features = [
    {
      title: "Personalized curriculum",
      description: "AI creates a custom learning path tailored to your goals and current skill level"
    },
    {
      title: "Real-time progress tracking",
      description: "Monitor your advancement with detailed analytics and milestone celebrations"
    },
    {
      title: "AI-powered feedback",
      description: "Get instant, intelligent feedback to accelerate your learning journey"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Learning dashboard interface showing progress tracking and personalized curriculum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                How Pathwise Helps You Learn Smarter
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our AI-powered platform adapts to your unique learning style and pace, 
                providing personalized guidance every step of the way. Experience learning 
                that evolves with you.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 