import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code, 
  Briefcase, 
  Calculator,
  TrendingUp,
  Zap,
  Target
} from "lucide-react"

const courseCategories = [
  {
    id: 1,
    title: "Software Development & Tech",
    description: "Master programming, web development, AI, cloud computing, and emerging technologies",
    icon: Code,
    subcategories: ["Full-Stack Development", "AI & Machine Learning", "Cloud Computing", "Mobile Development", "DevOps & Automation"],
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
    prefillGoal: "I want to become a skilled software developer"
  },
  {
    id: 2,
    title: "Business & Leadership",
    description: "Develop entrepreneurial skills, leadership abilities, and strategic business thinking",
    icon: Briefcase,
    subcategories: ["Startup & Entrepreneurship", "Product Management", "Digital Marketing", "Sales & Negotiation", "Strategic Planning"],
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "text-green-600",
    prefillGoal: "I want to develop business and leadership skills"
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    description: "Learn data analysis, machine learning, statistics, and data-driven decision making",
    icon: TrendingUp,
    subcategories: ["Python for Data Science", "Machine Learning", "SQL & Databases", "Data Visualization", "Statistical Analysis"],
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "text-purple-600",
    prefillGoal: "I want to become proficient in data science and analytics"
  },
  {
    id: 4,
    title: "Personal Development & Productivity",
    description: "Enhance soft skills, productivity systems, and personal effectiveness",
    icon: Target,
    subcategories: ["Time Management", "Communication Skills", "Critical Thinking", "Habit Formation", "Goal Achievement"],
    color: "bg-pink-50 hover:bg-pink-100",
    iconColor: "text-pink-600",
    prefillGoal: "I want to improve my personal effectiveness and productivity"
  },
  {
    id: 5,
    title: "Digital Marketing & Content",
    description: "Master modern marketing, content creation, and digital brand building",
    icon: Zap,
    subcategories: ["Social Media Marketing", "Content Strategy", "SEO & Analytics", "Email Marketing", "Brand Building"],
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
    prefillGoal: "I want to master digital marketing and content creation"
  },
  {
    id: 6,
    title: "Finance & Investment",
    description: "Build financial literacy, investment knowledge, and wealth-building strategies",
    icon: Calculator,
    subcategories: ["Personal Finance", "Stock Market Investing", "Cryptocurrency", "Real Estate", "Financial Planning"],
    color: "bg-indigo-50 hover:bg-indigo-100",
    iconColor: "text-indigo-600",
    prefillGoal: "I want to improve my financial knowledge and investment skills"
  },
]

export function CourseCategoriesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Master Skills That Matter in Today's World
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our most in-demand learning categories. Our AI will create a personalized curriculum 
            tailored to your goals, experience level, and learning style.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courseCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link 
                key={category.id} 
                href={`/start?goal=${encodeURIComponent(category.prefillGoal)}`}
                className="block"
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer ${category.color} border-0`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-white shadow-sm`}>
                        <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        
                        {/* Subcategories */}
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.map((subcategory, index) => (
                            <span 
                              key={index}
                              className="inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded-full shadow-sm"
                            >
                              {subcategory}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have a specific goal in mind? Our AI can create a learning path for absolutely anything.
          </p>
          <Link 
            href="/start" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Create Your Custom Learning Path
          </Link>
        </div>
      </div>
    </section>
  )
} 