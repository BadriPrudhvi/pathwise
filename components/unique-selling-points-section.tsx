import { Brain, MessageCircle, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

export function UniqueSellingPointsSection() {
  const features = [
    {
      Icon: Brain,
      name: "AI-Powered Personalization",
      description: "Our advanced AI understands your goals, assesses your current skill level, and creates a completely personalized learning journey tailored just for you.",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <Image 
            className="absolute -right-20 -top-20 opacity-30 w-80 h-80 object-cover rounded-full" 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center"
            alt="AI Brain visualization"
            width={320}
            height={320}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: MessageCircle,
      name: "Conversational Learning",
      description: "Learn through natural conversation with our AI assistant. Ask questions, get explanations, and receive instant feedback throughout your journey.",
      href: "#",
      cta: "Try it now",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <Image 
            className="absolute -right-16 -top-16 opacity-25 w-72 h-72 object-cover rounded-2xl rotate-12" 
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop&crop=center"
            alt="Conversation bubbles"
            width={288}
            height={288}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: TrendingUp,
      name: "Adaptive Progress Tracking",
      description: "Visual learning maps show your progress in real-time. The system adapts to your pace, suggesting when to speed up or slow down for optimal learning.",
      href: "#",
      cta: "See demo",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <Image 
            className="absolute -right-12 -top-12 opacity-30 w-64 h-64 object-cover rounded-lg -rotate-6" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center"
            alt="Analytics dashboard"
            width={256}
            height={256}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: Zap,
      name: "Dynamic Curriculum",
      description: "Your learning path evolves with you. Based on your performance and preferences, the curriculum adjusts difficulty and suggests the most relevant content.",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
          <Image 
            className="absolute -right-14 -top-14 opacity-25 w-68 h-68 object-cover rounded-xl rotate-3" 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center"
            alt="Dynamic learning path"
            width={272}
            height={272}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: Brain,
      name: "Smart Recommendations",
      description: "Get personalized content suggestions based on your learning style, progress, and goals. Our AI continuously learns from your interactions to provide better recommendations.",
      href: "#",
      cta: "Discover",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
          <Image 
            className="absolute -right-18 -top-18 opacity-20 w-76 h-76 object-cover rounded-full" 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=400&fit=crop&crop=center"
            alt="Smart recommendations"
            width={304}
            height={304}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional learning platforms, Pathwise uses advanced AI to create truly personalized learning experiences. 
            Every goal, every lesson, and every interaction is tailored to help you learn faster and more effectively.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
} 