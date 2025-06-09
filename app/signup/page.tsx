// import { SignupForm } from "@/components/signup-form"

export const metadata = {
  title: "Sign Up - Pathwise",
  description: "Create your Pathwise account and start your personalized learning journey today.",
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Join Pathwise
            </h1>
            <p className="text-lg text-gray-600">
              Start your personalized learning journey today
            </p>
          </div>
          
          {/* <SignupForm /> */}
        </div>
      </div>
    </div>
  )
} 