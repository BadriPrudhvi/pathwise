import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const popularGoals = [
  {
    id: 1,
    title: "Backend Development",
    description: "Master server-side programming with APIs, databases, and deployment. Build scalable applications from scratch.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    instructor: {
      name: "Sarah Chen",
      title: "Senior Backend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      initials: "SC"
    },
    bgColor: "bg-yellow-100" // #FEF9C3
  },
  {
    id: 2,
    title: "Data Science & AI",
    description: "Learn Python, machine learning, and data analysis. Build AI models and extract insights from data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    instructor: {
      name: "Dr. Maria Rodriguez",
      title: "AI Research Scientist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      initials: "MR"
    },
    bgColor: "bg-pink-100" // #FCE7F3
  },
  {
    id: 3,
    title: "Public Speaking",
    description: "Build confidence and master compelling presentations. Overcome anxiety and communicate with impact.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop&crop=center",
    instructor: {
      name: "David Thompson",
      title: "Communication Coach",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      initials: "DT"
    },
    bgColor: "bg-green-100" // #D1FAE5
  }
]

export function PopularGoalsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="popular-goals-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="popular-goals-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Most Pursued Learning Paths
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of learners mastering these in-demand skills with AI-powered personalized curricula
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularGoals.map((goal) => (
            <Card 
              key={goal.id} 
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${goal.bgColor}`}
              role="article"
              aria-labelledby={`goal-title-${goal.id}`}
            >
              <CardContent className="p-0">
                {/* Full-width Image */}
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={goal.image}
                    alt={`${goal.title} learning path illustration`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 id={`goal-title-${goal.id}`} className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {goal.title}
                  </h3>
                  
                  {/* Short paragraph */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {goal.description}
                  </p>
                  
                  {/* Avatar + Instructor Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={goal.instructor.avatar} alt={`${goal.instructor.name} profile picture`} />
                      <AvatarFallback className="bg-gray-200 text-gray-700 text-sm font-medium">
                        {goal.instructor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {goal.instructor.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {goal.instructor.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 