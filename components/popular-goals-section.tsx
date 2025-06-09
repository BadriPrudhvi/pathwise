import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const popularGoals = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Master modern web development with React, TypeScript, and cutting-edge frameworks.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    instructor: {
      name: "Sarah Chen",
      title: "Senior Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      initials: "SC"
    },
    bgColor: "bg-yellow-100" // #FEF9C3
  },
  {
    id: 2,
    title: "Language Learning",
    description: "Become fluent in Spanish, French, or any language with personalized conversation practice.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
    instructor: {
      name: "Maria Rodriguez",
      title: "Language Specialist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      initials: "MR"
    },
    bgColor: "bg-pink-100" // #FCE7F3
  },
  {
    id: 3,
    title: "Public Speaking",
    description: "Build confidence and master the art of compelling presentations and communication.",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Most Pursued Learning Paths
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularGoals.map((goal) => (
            <Card key={goal.id} className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${goal.bgColor}`}>
              <CardContent className="p-0">
                {/* Full-width Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {goal.title}
                  </h3>
                  
                  {/* Short paragraph */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {goal.description}
                  </p>
                  
                  {/* Avatar + Instructor Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={goal.instructor.avatar} alt={goal.instructor.name} />
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