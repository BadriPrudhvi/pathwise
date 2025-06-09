// import { Suspense } from "react"
// import { StartJourneyForm } from "@/components/start-journey-form"

export const metadata = {
  title: "Start Your Learning Journey - Pathwise",
  description: "Begin your personalized AI-powered learning journey. Tell us your goals and we'll create a custom curriculum just for you.",
}

export default function StartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Start Your Learning Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us what you want to learn, and our AI will create a personalized curriculum just for you.
            </p>
          </div>
          
          {/* <Suspense fallback={<div className="text-center">Loading...</div>}>
            <StartJourneyForm />
          </Suspense> */}
        </div>
      </div>
    </div>
  )
} 