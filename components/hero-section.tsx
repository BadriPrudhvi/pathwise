"use client"

import * as React from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleGetStarted = () => {
    // Navigate to /start with optional search query
    const params = searchQuery ? `?goal=${encodeURIComponent(searchQuery)}` : ""
    window.location.href = `/start${params}`
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGetStarted()
    }
  }

  return (
    <section className={cn("bg-green-50 py-12 sm:py-16 md:py-20 lg:py-24", className)} aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
              >
                BUILD YOUR{" "}
                <span className="text-green-600">PERSONALIZED</span>{" "}
                LEARNING JOURNEY
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Let AI help you master any skill – one goal at a time. Get personalized curriculum, real-time progress tracking, and adaptive learning paths.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto lg:mx-0">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
                  <Input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 h-12 text-base sm:text-lg border-2 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    aria-label="Enter your learning goal"
                  />
                </div>
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="h-12 px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-200"
                  aria-label="Start your personalized learning journey"
                >
                  Get Started
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center lg:text-left">
                Popular: Backend Development, Data Science, Public Speaking, Language Learning
              </p>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Learning Paths</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Goal Achievement</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Diverse group of students collaborating and learning together, representing Pathwise's inclusive and personalized learning approach"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            
            {/* Floating Elements for Visual Interest */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-400 text-yellow-900 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              AI-Powered
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              Personalized
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 