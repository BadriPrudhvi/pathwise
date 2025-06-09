import { Brain, MessageCircle, TrendingUp, Zap } from "lucide-react"

export function UniqueSellingPointsSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Our advanced AI understands your goals, assesses your current skill level, and creates a completely personalized learning journey tailored just for you."
    },
    {
      icon: MessageCircle,
      title: "Conversational Learning",
      description: "Learn through natural conversation with our AI assistant. Ask questions, get explanations, and receive instant feedback throughout your journey."
    },
    {
      icon: TrendingUp,
      title: "Adaptive Progress Tracking",
      description: "Visual learning maps show your progress in real-time. The system adapts to your pace, suggesting when to speed up or slow down for optimal learning."
    },
    {
      icon: Zap,
      title: "Dynamic Curriculum",
      description: "Your learning path evolves with you. Based on your performance and preferences, the curriculum adjusts difficulty and suggests the most relevant content."
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlike traditional learning platforms, Pathwise uses advanced AI to create truly personalized learning experiences. 
            Every goal, every lesson, and every interaction is tailored to help you learn faster and more effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 